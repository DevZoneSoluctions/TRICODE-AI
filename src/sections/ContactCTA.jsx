
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import { motion } from "motion/react";
import Button from "../components/Button";
import { siteConfig } from "../data/siteData";

export default function ContactCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-[#E2E8F0]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full glow-ambient-blue blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full glow-ambient-violet blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] border border-[#CBD5E1] p-8 sm:p-14 lg:p-20 text-center shadow-xl shadow-blue-500/5 overflow-hidden">
          {/* Subtle grid pattern inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#CBD5E1] shadow-xs text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>LET'S COLLABORATE</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto"
          >
            Have an Idea?{" "}
            <span className="gradient-text">Let's Make It Real.</span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Whether you need an enterprise AI system, high-performance web platform, or full-stack digital transformation, our senior engineering team is ready to deliver.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="shadow-xl shadow-blue-600/25"
            >
              Start a Project
            </Button>
            <Button
              href="https://mail.google.com/mail/?view=cm&to=tricodeaitechnologies@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={Mail}
              iconPosition="left"
            >
              {siteConfig.email}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
