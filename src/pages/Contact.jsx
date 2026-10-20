import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Clock } from "lucide-react";
import Button from "../components/Button";
import { siteConfig, servicesData } from "../data/siteData";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: preselectedService || "AI Solutions & Intelligent Automation",
    budget: "$25k - $50k",
    timeline: "1-3 months",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      errs.message = "Please include a project summary of at least 15 characters";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate validated form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2563EB", "#7C3AED", "#00D2FF", "#3B82F6"]
      });
    }, 700);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] shadow-xs text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>DIRECT ARCHITECTURAL CONSULTATION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6"
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
            Tell us about your technical objectives, systems architecture challenge, or product vision. Our senior engineering leads respond within 24 hours.
          </motion.p>
        </div>

        {/* Content Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Studio Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-7 sm:p-8 shadow-sm">
              <h3 className="font-heading font-extrabold text-xl text-[#0F172A] mb-6">
                Studio Communications
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-base font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-[#7C3AED] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1">
                      Telephone
                    </div>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-base font-semibold text-[#0F172A] hover:text-[#7C3AED] transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1">
                      Office Coordinates
                    </div>
                    <p className="text-base font-semibold text-[#0F172A]">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time SLA Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-7 border border-[#334155] shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D2FF] mb-3">
                <Clock className="w-4 h-4" />
                <span>Response Guarantee</span>
              </div>
              <h4 className="font-heading font-extrabold text-lg mb-2">
                24-Hour Technical Review
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                Every inquiry is personally reviewed by a systems architect, not an automated sales filter. We prepare initial technical scopes prior to scheduling our first sync.
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-[#00D2FF] font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Strict Non-Disclosure Agreements Honored</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 sm:p-10 shadow-sm relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A] mb-3">
                    Inquiry Successfully Received
                  </h3>
                  <p className="text-sm sm:text-base text-[#64748B] max-w-md mx-auto mb-6 leading-relaxed font-normal">
                    Thank you, <strong className="text-[#0F172A]">{formData.name}</strong>. Our engineering leads are analyzing your technical brief and will reach back to <strong className="text-[#2563EB]">{formData.email}</strong> within 24 hours.
                  </p>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#64748B] max-w-md mx-auto mb-8 font-medium">
                    Note: Frontend validation is complete and ready to connect to your preferred endpoint (e.g. Resend, SendGrid, or custom webhook).
                  </div>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        service: "AI Solutions & Intelligent Automation",
                        budget: "$25k - $50k",
                        timeline: "1-3 months",
                        message: ""
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-heading font-extrabold text-2xl text-[#0F172A] mb-2">
                    Project Architecture Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mb-8 font-normal">
                    Fill out the technical brief below to initiate a consultation.
                  </p>

                  <div className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2"
                        >
                          Full Name <span className="text-[#2563EB]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Mercer"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all ${
                            errors.name ? "border-red-400 ring-1 ring-red-400" : "border-[#CBD5E1]"
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2"
                        >
                          Work Email <span className="text-[#2563EB]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all ${
                            errors.email ? "border-red-400 ring-1 ring-red-400" : "border-[#CBD5E1]"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company & Primary Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2"
                        >
                          Company / Organization
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] text-sm text-[#0F172A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2"
                        >
                          Target Capability
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] text-sm text-[#0F172A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                        >
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Multi-Service Strategic Overhaul">
                            Multi-Service Strategic Overhaul
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2"
                        >
                          Estimated Budget (USD)
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] text-sm text-[#0F172A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                        >
                          <option value="$10k - $25k">$10k - $25k</option>
                          <option value="$25k - $50k">$25k - $50k</option>
                          <option value="$50k - $100k">$50k - $100k</option>
                          <option value="$100k+">$100k+ (Enterprise)</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="timeline"
                          className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2"
                        >
                          Target Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] text-sm text-[#0F172A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                        >
                          <option value="Urgent (< 1 month)">Urgent (&lt; 1 month)</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="Ongoing Strategic Partnership">Ongoing Strategic Partnership</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2"
                      >
                        Project Objectives &amp; Technical Requirements{" "}
                        <span className="text-[#2563EB]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project, systems challenges, desired architecture, or timeline goals..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all resize-y ${
                          errors.message ? "border-red-400 ring-1 ring-red-400" : "border-[#CBD5E1]"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        icon={Send}
                        className="w-full justify-center shadow-lg shadow-blue-600/20 text-base"
                      >
                        {isSubmitting ? "Processing Brief..." : "Submit Project Inquiry"}
                      </Button>
                      <p className="text-center text-[11px] text-[#94A3B8] mt-3">
                        We respect your privacy. All inquiries are encrypted and handled confidentially.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
