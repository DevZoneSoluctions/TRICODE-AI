import { useEffect } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Terminal, 
  Shield, 
  Brain, 
  Layers, 
  Users, 
  ArrowRight, 
  Crown, 
  Mail, 
  Code2, 
  Smartphone, 
  ShoppingBag, 
  Megaphone,
  CheckCircle2
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ContactCTA from "../sections/ContactCTA";
import Button from "../components/Button";
import { teamPhilosophy, companyValues, teamMembers } from "../data/siteData";

export default function Team() {
  useEffect(() => {
    document.title = "Leadership & Engineering Team — TRICODE AI Technologies";
  }, []);

  const ceo = teamMembers.find((m) => m.isLeader);
  const coreMembers = teamMembers.filter((m) => !m.isLeader);

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

  const getRoleIcon = (role) => {
    const lower = role.toLowerCase();
    if (lower.includes("backend")) return Code2;
    if (lower.includes("flutter") || lower.includes("mobile")) return Smartphone;
    if (lower.includes("shopify")) return ShoppingBag;
    if (lower.includes("marketing")) return Megaphone;
    return Terminal;
  };

  return (
    <div className="pt-28 pb-16 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        
        {/* ========================================================== */}
        {/* PAGE HEADER                                                */}
        {/* ========================================================== */}
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
            Minds Forging <span className="gradient-text">Next-Gen Software</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal"
          >
            Meet the leaders and specialized engineers crafting intelligent AI applications, resilient backend architectures, intuitive mobile interfaces, and global commerce systems.
          </motion.p>
        </div>

        {/* Company Key Metrics Bar */}
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

        {/* ========================================================== */}
        {/* CEO & EXECUTIVE SPOTLIGHT                                  */}
        {/* ========================================================== */}
        {ceo && (
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                EXECUTIVE LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] mt-3">
                Steered by Technical Conviction
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl bg-gradient-to-br from-white via-[#F8FAFC] to-white border-2 border-[#BFDBFE] p-8 sm:p-12 shadow-xl shadow-blue-500/5 overflow-hidden"
            >
              {/* Ambient Glows */}
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2563EB]/10 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#7C3AED]/10 blur-[90px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* CEO Avatar / Photo Frame */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="relative group">
                    {/* Glowing Ring Border */}
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#2563EB] via-[#00D2FF] to-[#7C3AED] opacity-70 blur-sm group-hover:opacity-100 transition duration-500" />
                    
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-[#0F172A] border-2 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                      {ceo.image ? (
                        <img
                          src={ceo.image}
                          alt={ceo.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E1B4B] text-white p-4">
                          <Crown className="w-10 h-10 text-[#00D2FF] mb-2 animate-bounce" />
                          <span className="text-4xl font-heading font-extrabold tracking-tight text-white">
                            {ceo.initials}
                          </span>
                          <span className="text-[10px] tracking-widest text-[#94A3B8] uppercase font-mono mt-1">
                            FOUNDER & CEO
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="absolute -bottom-3 right-4 px-3 py-1 rounded-full bg-[#2563EB] text-white text-xs font-bold shadow-md flex items-center gap-1.5 border border-white">
                      <Crown className="w-3.5 h-3.5" />
                      <span>CEO</span>
                    </div>
                  </div>
                </div>

                {/* CEO Details & Bio */}
                <div className="lg:col-span-8 flex flex-col items-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-bold text-[#2563EB] mb-3">
                    <Crown className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{ceo.department}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] tracking-tight mb-2">
                    {ceo.name}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-[#2563EB] mb-4">
                    {ceo.role}
                  </p>

                  <p className="text-base text-[#475569] leading-relaxed mb-6 font-normal max-w-2xl">
                    {ceo.bio}
                  </p>

                  {/* Core Focus Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {ceo.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg bg-white border border-[#CBD5E1] text-xs font-semibold text-[#334155] shadow-xs flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>

                  {/* Actions & Connections */}
                  <div className="flex items-center gap-4 flex-wrap pt-2">
                    <Button to="/contact" variant="primary" size="sm" icon={ArrowRight}>
                      Schedule Founder Alignment
                    </Button>
                    <a
                      href={`mailto:${ceo.social.email}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] hover:text-[#2563EB] transition-colors p-2 rounded-lg hover:bg-white border border-transparent hover:border-[#E2E8F0]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{ceo.social.email}</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}

        {/* ========================================================== */}
        {/* CORE TEAM ROSTER (5 SPECIALIZED MEMBERS)                   */}
        {/* ========================================================== */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
              CORE TEAM SPECIALISTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] mt-3">
              Craftsmen & Engineering Specialists
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              The high-velocity engineers responsible for mission-critical client deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreMembers.map((member, idx) => {
              const RoleIcon = getRoleIcon(member.role);
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 p-7 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Avatar & Department Badge */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      
                      {/* Avatar Photo / Initials Vessel */}
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.gradient} p-0.5 shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden`}>
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover rounded-[14px]"
                            />
                          ) : (
                            <div className="w-full h-full rounded-[14px] bg-[#0F172A] flex flex-col items-center justify-center text-white">
                              <span className="text-lg font-heading font-extrabold tracking-tight">
                                {member.initials}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Floating Sub-Icon */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-[#CBD5E1] shadow-xs flex items-center justify-center text-[#2563EB]">
                          <RoleIcon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Department Tag */}
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F8FAFC] text-[#2563EB] border border-[#BFDBFE] text-right">
                        {member.department}
                      </span>
                    </div>

                    {/* Member Name & Role */}
                    <h3 className="text-xl font-heading font-extrabold text-[#0F172A] mb-1 group-hover:text-[#2563EB] transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">
                      {member.role}
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6 font-normal">
                      {member.bio}
                    </p>
                  </div>

                  <div>
                    {/* Skills Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#F1F5F9] mb-5">
                      {member.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-medium text-[#475569]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Member Footer Link */}
                    <div className="flex items-center justify-between pt-2">
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1.5 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Direct Connect</span>
                      </a>
                      <div className="text-[10px] text-[#94A3B8] font-mono">
                        VERIFIED TRICODE POD
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================== */}
        {/* TECHNICAL DISCIPLINES                                      */}
        {/* ========================================================== */}
        <div className="mb-24">
          <SectionHeading
            eyebrow="ENGINEERING DEPTH"
            title="Multidisciplinary Pod Structure."
            description="Our specialized engineering units coordinate seamlessly to transform ambitious requirements into resilient production systems."
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

        {/* ========================================================== */}
        {/* TEAM PHILOSOPHY & OPERATIONAL PRINCIPLES                   */}
        {/* ========================================================== */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="CULTURE &amp; PRINCIPLES"
            title="How We Operate."
            description="Our core operational standards that protect quality, velocity, and technical excellence."
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
