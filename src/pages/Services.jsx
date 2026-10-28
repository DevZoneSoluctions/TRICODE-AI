import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Sparkles, ShieldCheck, Zap, Layers, Brain, Globe, Smartphone,
  Cpu, Code2, CheckCircle2, ArrowRight, Clock, Target, Rocket, Search
} from "lucide-react";
import Button from "../components/Button";
import ContactCTA from "../sections/ContactCTA";
import { servicesData, processSteps } from "../data/siteData";

/* ─── Icon Map ──────────────────────────────────────────────────────────── */
const iconMap = { Brain, Globe, Smartphone, Layers, Cpu, Code2 };

/* ─── Accent Theme Map ──────────────────────────────────────────────────── */
const accentThemes = {
  violet: {
    iconBg: "bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]",
    badge: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    check: "text-[#2563EB]",
    numberColor: "text-[#BFDBFE] group-hover:text-[#2563EB]/30",
    hoverBorder: "hover:border-[#93C5FD]",
    hoverGlow: "hover:shadow-blue-500/10",
    glowDot: "bg-[#2563EB]",
  },
  coral: {
    iconBg: "bg-gradient-to-br from-[#7C3AED] to-[#9333EA]",
    badge: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]",
    check: "text-[#7C3AED]",
    numberColor: "text-[#DDD6FE] group-hover:text-[#7C3AED]/30",
    hoverBorder: "hover:border-[#C4B5FD]",
    hoverGlow: "hover:shadow-purple-500/10",
    glowDot: "bg-[#7C3AED]",
  },
  mint: {
    iconBg: "bg-gradient-to-br from-[#0284C7] to-[#00D2FF]",
    badge: "bg-[#F0FDFA] text-[#0284C7] border-[#BAE6FD]",
    check: "text-[#0284C7]",
    numberColor: "text-[#BAE6FD] group-hover:text-[#0284C7]/30",
    hoverBorder: "hover:border-[#7DD3FC]",
    hoverGlow: "hover:shadow-cyan-500/10",
    glowDot: "bg-[#00D2FF]",
  },
};

/* ─── Premium Service Card ──────────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const IconComponent = iconMap[service.icon] || Code2;
  const theme = accentThemes[service.accent] || accentThemes.violet;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative rounded-2xl bg-white border border-[#E2E8F0] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm ${theme.hoverBorder} hover:shadow-xl ${theme.hoverGlow} overflow-hidden`}
    >
      {/* Background Number Watermark */}
      <span className={`absolute top-5 right-6 font-heading font-extrabold text-7xl sm:text-8xl select-none pointer-events-none transition-colors duration-300 ${theme.numberColor}`}>
        {service.number}
      </span>

      <div className="relative z-10">
        {/* Icon + Badge row */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} text-white flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0`}>
            <IconComponent className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-3 leading-snug">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6 font-normal">
          {service.shortDesc}
        </p>

        {/* Capabilities Checklist */}
        <div className="space-y-2.5 mb-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-3">
            Capabilities
          </div>
          {service.deliverables.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]">
              <CheckCircle2 className={`w-4 h-4 ${theme.check} mt-0.5 shrink-0`} />
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Tech tags + CTA */}
      <div className="relative z-10">
        <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap gap-1.5 mb-5">
          {service.technologies.map((t) => (
            <span
              key={t}
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${theme.badge}`}
            >
              {t}
            </span>
          ))}
        </div>

        <Button
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          variant="ghost"
          size="sm"
          icon={ArrowRight}
          className="!px-0 !font-bold text-[#2563EB] group-hover:text-[#7C3AED] !rounded-none border-b border-transparent hover:border-current"
        >
          Consult On This Capability
        </Button>
      </div>
    </motion.div>
  );
}

/* ─── 4-Phase Process Timeline ──────────────────────────────────────────── */
const phaseIcons = [Search, Target, Code2, Rocket];
const phaseColors = [
  { line: "from-[#2563EB]", badge: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]", dot: "bg-[#2563EB]", glow: "shadow-blue-500/30" },
  { line: "from-[#7C3AED]", badge: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]", dot: "bg-[#7C3AED]", glow: "shadow-purple-500/30" },
  { line: "from-[#0284C7]", badge: "bg-[#F0FDFA] text-[#0284C7] border-[#BAE6FD]", dot: "bg-[#0284C7]", glow: "shadow-cyan-500/30" },
  { line: "from-[#10B981]", badge: "bg-[#F0FDF4] text-[#10B981] border-[#A7F3D0]", dot: "bg-[#10B981]", glow: "shadow-green-500/30" },
];

function ProcessTimeline() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 rounded-full glow-ambient-blue opacity-60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] shadow-xs text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-5"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Engineering Discipline</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-[1.1] mb-4"
          >
            From Concept to Deployment:{" "}
            <span className="gradient-text">Our 4-Phase System.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal"
          >
            A systematic, transparent engineering process designed to eliminate architectural debt
            and deliver deterministic outcomes on schedule.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#10B981] opacity-25 z-0" />

          {processSteps.map((step, idx) => {
            const colors = phaseColors[idx];
            const PhaseIcon = phaseIcons[idx];

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative z-10 flex flex-col items-center text-center lg:text-left lg:items-start px-4 sm:px-6 pb-10 lg:pb-0"
              >
                {/* Phase circle icon */}
                <div className={`relative w-[52px] h-[52px] rounded-full ${colors.dot} flex items-center justify-center mb-5 shadow-lg ${colors.glow} shrink-0`}>
                  <PhaseIcon className="w-6 h-6 text-white" />
                  {/* Step number overlay */}
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center text-[9px] font-extrabold text-[#0F172A]">
                    {idx + 1}
                  </span>
                </div>

                {/* Phase badge */}
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border mb-3 ${colors.badge}`}>
                  {step.phase}
                </span>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#0F172A] mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#64748B] leading-relaxed mb-5 font-normal">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="w-full">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-2.5">
                    Outputs
                  </div>
                  <div className="space-y-1.5">
                    {step.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#0F172A]">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0`} />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vertical connector for mobile/tablet */}
                {idx < processSteps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -translate-x-1/2 bottom-3 w-px h-7 bg-gradient-to-b from-[#E2E8F0] to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Architectural Principles Banner ───────────────────────────────────── */
function PrinciplesBanner() {
  const principles = [
    { icon: ShieldCheck, color: "text-[#2563EB]", bg: "bg-[#EFF6FF] border-[#BFDBFE]", title: "Zero Technical Debt Guarantee", desc: "Every line adheres to clean architecture, typed interfaces, and thorough test suites with comprehensive documentation." },
    { icon: Zap, color: "text-[#7C3AED]", bg: "bg-[#F5F3FF] border-[#DDD6FE]", title: "Sub-15ms Latency Standards", desc: "We measure and tune every interaction to milliseconds — instantaneous responsiveness across web, mobile, and APIs." },
    { icon: Layers, color: "text-[#0284C7]", bg: "bg-[#F0FDFA] border-[#BAE6FD]", title: "Complete Code Ownership", desc: "100% of IP, source repos, models, and design tokens delivered to you on completion. Zero vendor lock-in, ever." },
  ];

  return (
    <section className="py-20 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] border border-[#E2E8F0] p-8 sm:p-12 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE]">
              Our Engineering Guarantees
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-2xl ${p.bg} border flex items-center justify-center ${p.color} shrink-0`}>
                  <p.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#0F172A] mb-2">{p.title}</h4>
                  <p className="text-sm text-[#64748B] leading-relaxed font-normal">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Page ──────────────────────────────────────────────────────── */
export default function Services() {
  useEffect(() => {
    document.title = "Core Capabilities & Engineering Services — TRICODE AI Technologies";
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div className="relative pt-28 pb-16 overflow-hidden">
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
              <span>Specialized Engineering Practices</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[64px] font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.08] mb-6"
            >
              Architectural Precision.{" "}
              <span className="gradient-text">Futuristic Execution.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal mb-10"
            >
              We operate as an elite engineering partner for founders and enterprises. Whether introducing
              autonomous AI agents, constructing web platforms, or designing custom microservices, our
              systems are built for endurance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight} className="shadow-lg shadow-blue-600/25">
                Start a Project
              </Button>
              <Button to="/projects" variant="secondary" size="lg">
                See Our Work
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Services Grid ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>

      {/* ── Principles Banner ─────────────────────────────────────────── */}
      <PrinciplesBanner />

      {/* ── 4-Phase Process Timeline ──────────────────────────────────── */}
      <ProcessTimeline />

      {/* ── Contact CTA ───────────────────────────────────────────────── */}
      <ContactCTA />
    </div>
  );
}
