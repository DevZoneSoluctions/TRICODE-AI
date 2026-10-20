import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";
import { processSteps } from "../data/siteData";

export default function ProcessSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ENGINEERING DISCIPLINE"
          title="From Concept to High-Scale Deployment:"
          highlight="Our 4-Phase System."
          description="We follow a systematic, transparent engineering process designed to eliminate architectural debt and deliver deterministic outcomes on schedule."
          centered
          className="mb-16"
        />

        {/* Process Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-2xl bg-white border border-[#E2E8F0] p-7 flex flex-col justify-between hover:border-[#2563EB] hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 group"
            >
              <div>
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-[#E2E8F0] group-hover:text-[#2563EB] transition-colors">
                    {step.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                    {step.phase}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-extrabold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#64748B] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-[#E2E8F0]">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8] mb-2.5">
                  Outputs
                </div>
                <div className="space-y-1.5">
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#0F172A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
