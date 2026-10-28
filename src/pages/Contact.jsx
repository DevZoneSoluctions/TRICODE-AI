import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import {
  Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle,
  Sparkles, Clock, ShieldCheck, ArrowRight, Lock, Zap
} from "lucide-react";
import Button from "../components/Button";
import { siteConfig, servicesData } from "../data/siteData";

/* ─── Floating Label Input ─────────────────────────────────────────────── */
function FormField({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2">
        {label}{required && <span className="text-[#2563EB] ml-0.5">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium"
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass = (hasError) =>
  `w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-[#F8FAFC] placeholder:text-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all ${
    hasError ? "border-red-400 ring-1 ring-red-400" : "border-[#CBD5E1] hover:border-[#93C5FD]"
  }`;

/* ─── Contact Info Item ────────────────────────────────────────────────── */
function ContactItem({ icon: Icon, iconBg, iconColor, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-11 h-11 rounded-xl ${iconBg} border flex items-center justify-center ${iconColor} shrink-0`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-1">{label}</div>
        {children}
      </div>
    </div>
  );
}

/* ─── Success State ────────────────────────────────────────────────────── */
function SuccessCard({ name, email, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="py-14 text-center"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#EFF6FF] to-[#F5F3FF] border border-[#BFDBFE] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/10">
        <CheckCircle2 className="w-10 h-10 text-[#2563EB]" />
      </div>
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0FDF4] border border-[#A7F3D0] text-[#10B981] text-xs font-bold uppercase tracking-widest mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
        Inquiry Received
      </div>
      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A] mb-3">
        We've Got Your Brief!
      </h3>
      <p className="text-sm sm:text-base text-[#64748B] max-w-md mx-auto mb-2 leading-relaxed font-normal">
        Thank you, <strong className="text-[#0F172A]">{name}</strong>. Our engineering leads are
        analyzing your technical brief and will reach out to{" "}
        <strong className="text-[#2563EB]">{email}</strong> within 24 hours.
      </p>
      <p className="text-xs text-[#94A3B8] mb-8">
        All communications are encrypted and handled under strict NDA.
      </p>
      <Button variant="secondary" size="md" onClick={onReset}>
        Submit Another Inquiry
      </Button>
    </motion.div>
  );
}

/* ─── Contact Page ─────────────────────────────────────────────────────── */
export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: preselectedService || "Mobile Application Engineering", // Default Service changed to Mobile App
    budget: "< $10k", // Default Budget set to Less than 10k
    timeline: "1-3 months",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    document.title = "Contact Studio & Start a Project — TRICODE AI Technologies";
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your work email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address";
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = "Please include a project summary (at least 15 characters)";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setApiError("");
    setIsSubmitting(true);

    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2563EB", "#7C3AED", "#00D2FF", "#3B82F6"],
        });
      } else {
        // Server returned a validation or business error
        if (data.errors) {
          setErrors(data.errors);
        }
        setApiError(
          data.message || "Something went wrong. Please try again or contact us directly."
        );
      }
    } catch (_err) {
      setApiError(
        "Unable to reach our servers. Please check your connection or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "", email: "", company: "",
      service: "Mobile Application Engineering",
      budget: "< $10k", timeline: "1-3 months", message: "",
    });
    setErrors({});
    setApiError("");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full glow-ambient-blue blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] rounded-full glow-ambient-violet blur-3xl pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] shadow-xs text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Architectural Consultation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[64px] font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.08] mb-5"
            >
              Let's Engineer{" "}
              <span className="gradient-text">What's Next.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal"
            >
              Tell us about your technical objectives, systems architecture challenge, or product vision.
              Our senior engineering leads respond within 24 hours.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── 2-Column Layout ───────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ── Left Column ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Studio Communications Card */}
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-7 sm:p-8 shadow-sm">
              <h3 className="font-heading font-extrabold text-xl text-[#0F172A] mb-7">
                Studio Communications
              </h3>

              <div className="space-y-6">
                <ContactItem
                  icon={Mail}
                  iconBg="bg-[#EFF6FF]"
                  iconColor="text-[#2563EB]"
                  label="Inquiries & RFPs"
                >
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </ContactItem>

                <ContactItem
                  icon={Phone}
                  iconBg="bg-[#F5F3FF]"
                  iconColor="text-[#7C3AED]"
                  label="Direct Line"
                >
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-sm font-semibold text-[#0F172A] hover:text-[#7C3AED] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </ContactItem>

                <ContactItem
                  icon={MapPin}
                  iconBg="bg-[#F0FDFA]"
                  iconColor="text-[#0284C7]"
                  label="Office"
                >
                  <p className="text-sm font-semibold text-[#0F172A]">{siteConfig.address}</p>
                </ContactItem>
              </div>
            </div>

            {/* 24-Hour Technical Review — Dark Glowing Card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="relative rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-7 sm:p-8 border border-[#334155] shadow-xl overflow-hidden"
            >
              {/* Glow blobs */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#00D2FF]/12 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#7C3AED]/15 blur-2xl pointer-events-none" />
              <div className="absolute inset-0 bg-grid-pattern opacity-8 pointer-events-none" />

              {/* Glowing Cyan Lock Icon */}
              <div className="relative z-10 flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#00D2FF]/15 border border-[#00D2FF]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.25)]">
                  <Lock className="w-5 h-5 text-[#00D2FF]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#00D2FF]">
                    Response Guarantee
                  </div>
                </div>
              </div>

              <h4 className="relative z-10 font-heading font-extrabold text-xl mb-3">
                24-Hour Technical Review
              </h4>

              <p className="relative z-10 text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                Every inquiry is personally reviewed by a systems architect — not an automated
                sales filter. We prepare initial technical scopes before our first sync call.
              </p>

              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Zap className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>Sub-24hr senior engineer response</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Strict NDA honored from day one</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>Free initial architecture scope prepared</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* ── Right Column: Form ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 sm:p-10 shadow-sm relative overflow-hidden">
              {/* Subtle gradient top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D2FF] via-[#2563EB] to-[#7C3AED]" />

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <SuccessCard key="success" name={formData.name} email={formData.email} onReset={resetForm} />
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0F172A] mb-1.5">
                      Project Architecture Inquiry
                    </h3>
                    <p className="text-sm text-[#64748B] mb-8 font-normal">
                      Fill out the technical brief below to initiate a consultation with our engineering team.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="space-y-6">

                        {/* Row: Full Name + Work Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <FormField label="Full Name" required error={errors.name}>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              autoComplete="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="e.g. Alex Mercer"
                              className={inputClass(!!errors.name)}
                            />
                          </FormField>

                          <FormField label="Work Email" required error={errors.email}>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="alex@company.com"
                              className={inputClass(!!errors.email)}
                            />
                          </FormField>
                        </div>

                        {/* Row: Company + Target Capability */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <FormField label="Company / Organization">
                            <input
                              id="company"
                              name="company"
                              type="text"
                              autoComplete="organization"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your company name"
                              className={inputClass(false)}
                            />
                          </FormField>

                          <FormField label="Target Capability">
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className={inputClass(false)}
                            >
                              {servicesData.map((s) => (
                                <option key={s.id} value={s.title}>{s.title}</option>
                              ))}
                              <option value="Multi-Service Strategic Overhaul">
                                Multi-Service Strategic Overhaul
                              </option>
                            </select>
                          </FormField>
                        </div>

                        {/* Row: Budget + Timeline */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <FormField label="Estimated Budget (USD)">
                            <select
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className={inputClass(false)}
                            >
                              {/* Budget Options Updated */}
                              <option value="< $10k">Less than $10k</option>
                              <option value="$10k - $25k">$10k – $25k</option>
                              <option value="$25k - $50k">$25k – $50k</option>
                              <option value="$50k - $100k">$50k – $100k</option>
                              <option value="$100k+">$100k+ (Enterprise)</option>
                            </select>
                          </FormField>

                          <FormField label="Target Timeline">
                            <select
                              id="timeline"
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                              className={inputClass(false)}
                            >
                              <option value="Urgent (< 1 month)">Urgent (&lt; 1 month)</option>
                              <option value="1-3 months">1–3 months</option>
                              <option value="3-6 months">3–6 months</option>
                              <option value="Ongoing Strategic Partnership">Ongoing Strategic Partnership</option>
                            </select>
                          </FormField>
                        </div>

                        {/* Project Requirements Textarea */}
                        <FormField label="Project Requirements" required error={errors.message}>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Describe your project goals, systems challenges, desired architecture, or timeline expectations..."
                            className={`${inputClass(!!errors.message)} resize-y min-h-[120px]`}
                          />
                        </FormField>

                        {/* Submit Button */}
                        <div className="pt-1">
                          {/* API Error Banner */}
                          <AnimatePresence>
                            {apiError && (
                              <motion.div
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                className="mb-4 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium"
                              >
                                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                <span>{apiError}</span>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={isSubmitting ? {} : { scale: 1.01 }}
                            whileTap={isSubmitting ? {} : { scale: 0.99 }}
                            className={`relative w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-bold text-base text-white transition-all duration-300 overflow-hidden ${
                              isSubmitting
                                ? "opacity-80 cursor-not-allowed"
                                : "cursor-pointer hover:shadow-xl hover:shadow-blue-600/30"
                            }`}
                            style={{
                              background: "linear-gradient(135deg, #00D2FF 0%, #2563EB 45%, #7C3AED 100%)",
                            }}
                          >
                            {/* Shimmer sweep on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 pointer-events-none" />

                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white"
                                />
                                <span>Processing Brief...</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5" />
                                <span>Submit Project Inquiry</span>
                                <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </motion.button>

                          <p className="text-center text-[11px] text-[#94A3B8] mt-3 flex items-center justify-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            We respect your privacy. All inquiries are encrypted and handled confidentially.
                          </p>
                        </div>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}