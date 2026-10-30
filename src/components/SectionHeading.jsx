import { motion } from "motion/react";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  titleAfter = "",
  description,
  centered = false,
  className = "",
  dark = false
}) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
            dark
              ? "bg-white/10 text-[#00D2FF] border border-white/15"
              : "bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          <span>{eyebrow}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-[1.15] mb-5 ${
          dark ? "text-white" : "text-[#0F172A]"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="gradient-text font-extrabold inline-block">
            {highlight}
          </span>
        )}{" "}
        {titleAfter}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base sm:text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-[#64748B]"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
