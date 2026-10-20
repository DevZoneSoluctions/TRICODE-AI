import { useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, Terminal, Shield, Brain, Layers, Users, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ContactCTA from "../sections/ContactCTA";
import Button from "../components/Button";
import { teamPhilosophy, companyValues } from "../data/siteData";

export default function Team() {
  useEffect(() => {
    document.title = "Engineering Culture & Team — TRICODE AI Technologies";
  }, []);

  const disciplines = [
    {
      role: "AI & Neural Systems Engineering",
      focus: "Autonomous Agent Orchestration, RAG Pipelines, Vector Search, LLM Fine-Tuning",
      icon: Brain,
      tag: "Intelligence Core"
    },
    {
      role: "Frontend & Motion Experience",
      focus: "React 19, Next.js, Design Systems, Tactile Micro-Interactions, WebGL Canvas",
      icon: Layers,
      tag: "Visual Experience"
    },
    {
      role: "High-Throughput Distributed Backends",
      focus: "Golang, Python/FastAPI, Microservices, Event Sourcing, Realtime WebSockets",
      icon: Terminal,
      tag: "Data Infrastructure"
    },
    {
      role: "Cloud Reliability & DevSecOps",
      focus: "Kubernetes, Zero-Trust Architecture, Telemetry Ingestion, Automated CI/CD",
      icon: Shield,
      tag: "Security & Scale"
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {/* Page Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] shadow-xs text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>THE MINDS BEHIND TRICODE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6"
          >
            Architects of Intelligent Systems,{" "}
            <span className="gradient-text">United by Craft.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal"
          >
            We are a tight-knit collective of senior engineers, system architects, and design obsessives who believe great software is forged through rigorous discipline, mathematical clarity, and deliberate aesthetic taste.
          </motion.p>
        </div>

        {/* Company Values / Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {companyValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm text-center"
            >
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#2563EB] mb-1">
                {val.stat}
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-semibold">
                {val.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Section Banner */}
        <div className="mb-20 rounded-3xl bg-gradient-to-br from-white via-[#F8FAFC] to-white border border-[#E2E8F0] p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB] mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>LEADERSHIP AT TRICODE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A] mb-4">
              Direct Senior Engagement On Every Initiative
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6 font-normal">
              At TRICODE, we do not hand your project down to junior subcontractors. Our founding engineering partners and principal architects directly architect your data models, review every pull request, and lead your sprint alignments.
            </p>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between flex-wrap gap-4">
              <div className="text-xs text-[#94A3B8]">
                * Executive profiles and founder biographies are synchronized directly with active corporate roster.
              </div>
              <Button to="/contact" variant="secondary" size="sm" icon={ArrowRight}>
                Speak with Leadership
              </Button>
            </div>
          </div>
        </div>

        {/* Technical Disciplines */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="CORE DISCIPLINES"
            title="Multidisciplinary Engineering Depth."
            description="Our specialized pods operate with seamless cross-functional cohesion to turn ambitious briefs into hardened production software."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {disciplines.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB] transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F8FAFC] text-[#2563EB] border border-[#BFDBFE]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-extrabold text-[#0F172A] mb-2">
                      {item.role}
                    </h3>

                    <p className="text-sm text-[#64748B] leading-relaxed mb-4 font-normal">
                      {item.focus}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0] text-xs text-[#2563EB] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <span>Senior Staff / Principal Pod</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="CULTURE &amp; PRINCIPLES"
            title="How We Operate."
            description="Our non-negotiable principles that protect quality, clarity, and client trust."
            centered
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamPhilosophy.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#2563EB] font-extrabold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#0F172A] mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}
