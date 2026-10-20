import { useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, ShieldCheck, Zap, Layers } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import ProcessSection from "../sections/ProcessSection";
import ContactCTA from "../sections/ContactCTA";
import { servicesData } from "../data/siteData";

export default function Services() {
  useEffect(() => {
    document.title = "Core Capabilities & Engineering Services — TRICODE AI Technologies";
  }, []);

  return (
    <div className="pt-28 pb-16 bg-[#F8FAFC] min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] shadow-xs text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>SPECIALIZED ENGINEERING PRACTICES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6"
          >
            Architectural Precision.{" "}
            <span className="gradient-text">Futuristic Execution.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal"
          >
            We operate as an elite engineering partner for founders and enterprises. Whether introducing autonomous AI agents, constructing web platforms, or designing custom microservices, our systems are built for endurance.
          </motion.p>
        </div>

        {/* Services Grid (All 6 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        {/* Architectural Principles Banner */}
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-[#0F172A] mb-2">
                  Zero Technical Debt Guarantee
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed font-normal">
                  Every line of code adheres to clean architecture, typed interfaces, and thorough test suites with comprehensive documentation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-[#7C3AED] shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-[#0F172A] mb-2">
                  Sub-15ms Latency Standards
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed font-normal">
                  We measure and tune every interaction down to milliseconds, ensuring instantaneous responsiveness across web, mobile, and APIs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDFA] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-[#0F172A] mb-2">
                  Complete Code Ownership
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed font-normal">
                  You own 100% of all intellectual property, source repositories, models, and design tokens upon project delivery. Zero vendor lock-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Workflow */}
      <ProcessSection />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}
