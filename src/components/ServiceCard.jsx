import { Link } from "react-router-dom";
import { Brain, Globe, Smartphone, Layers, Cpu, Code2, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const iconMap = {
  Brain,
  Globe,
  Smartphone,
  Layers,
  Cpu,
  Code2
};

export default function ServiceCard({ service, index }) {
  const IconComponent = iconMap[service.icon] || Code2;

  // TRICODE authentic logo accents (Electric Blue, Royal Violet, Cyan)
  const accentThemes = {
    violet: {
      iconBg: "bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]",
      borderHover: "hover:border-[#93C5FD]",
      accentGlow: "hover:shadow-blue-500/10",
      pillBg: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
      checkColor: "text-[#2563EB]"
    },
    coral: {
      iconBg: "bg-gradient-to-br from-[#7C3AED] to-[#9333EA]",
      borderHover: "hover:border-[#DDD6FE]",
      accentGlow: "hover:shadow-purple-500/10",
      pillBg: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]",
      checkColor: "text-[#7C3AED]"
    },
    mint: {
      iconBg: "bg-gradient-to-br from-[#0284C7] to-[#00D2FF]",
      borderHover: "hover:border-[#BAE6FD]",
      accentGlow: "hover:shadow-cyan-500/10",
      pillBg: "bg-[#F0FDFA] text-[#0284C7] border-[#BAE6FD]",
      checkColor: "text-[#0284C7]"
    }
  };

  const theme = accentThemes[service.accent] || accentThemes.violet;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative rounded-2xl bg-white border border-[#E2E8F0] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm ${theme.borderHover} hover:shadow-xl ${theme.accentGlow}`}
    >
      <div>
        {/* Top Header: Icon & Number */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-13 h-13 rounded-2xl ${theme.iconBg} text-white flex items-center justify-center shadow-md shadow-blue-500/15 group-hover:scale-105 transition-transform duration-300`}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <span className="font-heading font-extrabold text-2xl text-[#E2E8F0] group-hover:text-[#2563EB]/30 transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-3 leading-snug">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Deliverables List */}
        <div className="space-y-2 mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
            Capabilities
          </div>
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A]">
              <CheckCircle2 className={`w-4 h-4 ${theme.checkColor} mt-0.5 shrink-0`} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Technologies used */}
        <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap gap-1.5 mb-6">
          {service.technologies.map((t) => (
            <span
              key={t}
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${theme.pillBg}`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action button */}
        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] group-hover:text-[#7C3AED] transition-colors"
        >
          <span>Consult On This Capability</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
