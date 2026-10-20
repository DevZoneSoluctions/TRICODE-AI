import { ArrowUpRight, Cpu, Activity, BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import Button from "./Button";

export default function ProjectCard({ project, onSelect, featured = false }) {
  // Visual artwork representation according to project type
  const renderVisual = () => {
    switch (project.visualType) {
      case "network-graph":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0B1120] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-15" />
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#2563EB]/25 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-[#7C3AED]/20 blur-2xl" />
            
            {/* Abstract AI Multi-Agent Node Graph */}
            <svg className="w-full h-full max-h-48 z-10" viewBox="0 0 320 200" fill="none">
              <line x1="80" y1="100" x2="160" y2="50" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <line x1="160" y1="50" x2="240" y2="100" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="160" y1="50" x2="160" y2="150" stroke="#00D2FF" strokeWidth="2" />
              <line x1="80" y1="100" x2="160" y2="150" stroke="#3B82F6" strokeWidth="2" />
              <line x1="240" y1="100" x2="160" y2="150" stroke="#9333EA" strokeWidth="2" />

              {/* Node Center */}
              <circle cx="160" cy="50" r="16" fill="#2563EB" className="filter drop-shadow-[0_0_12px_#2563EB]" />
              <circle cx="160" cy="50" r="8" fill="#FFFFFF" />

              {/* Surrounding Nodes */}
              <circle cx="80" cy="100" r="12" fill="#0F172A" stroke="#00D2FF" strokeWidth="3" />
              <circle cx="240" cy="100" r="12" fill="#0F172A" stroke="#7C3AED" strokeWidth="3" />
              <circle cx="160" cy="150" r="14" fill="#0B1120" stroke="#2563EB" strokeWidth="3" />
            </svg>

            <div className="absolute bottom-3 left-4 flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] text-white">
              <Cpu className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Multi-Agent Cluster active</span>
            </div>
          </div>
        );

      case "canvas-matrix":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A0F24] overflow-hidden">
            <div className="absolute inset-0 bg-dots-pattern opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
            <div className="relative z-10 w-full max-w-[260px] aspect-video rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-3 flex flex-col justify-between shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#00D2FF]" />
                  <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                </div>
                <span className="text-[10px] text-white/70 font-mono">60 FPS Native Sync</span>
              </div>
              <div className="grid grid-cols-3 gap-2 my-2">
                <div className="h-9 rounded bg-[#2563EB]/25 border border-[#2563EB]/40 animate-pulse" />
                <div className="h-9 rounded bg-[#7C3AED]/25 border border-[#7C3AED]/40" />
                <div className="h-9 rounded bg-[#00D2FF]/25 border border-[#00D2FF]/40" />
              </div>
              <div className="text-[10px] text-white/50 text-right">Delta Engine &bull; WebSocket 12ms</div>
            </div>
          </div>
        );

      case "biometric-pulse":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#080D1A] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10 w-full max-w-[280px] p-4 rounded-xl bg-white/5 border border-[#00D2FF]/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3 text-xs text-[#00D2FF]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Activity className="w-4 h-4 text-[#00D2FF] animate-pulse" />
                  Clinical Diagnostic Stream
                </span>
                <span className="px-2 py-0.5 rounded bg-[#00D2FF]/20 text-[10px]">99.8% Precision</span>
              </div>
              <svg className="w-full h-12" viewBox="0 0 240 50" fill="none">
                <path
                  d="M0 25 L50 25 L65 5 L75 45 L85 15 L95 30 L110 25 L240 25"
                  stroke="#00D2FF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="filter drop-shadow-[0_0_8px_#00D2FF]"
                />
              </svg>
              <div className="flex justify-between items-center text-[10px] text-white/50 mt-2">
                <span>Telemetry Ingestion</span>
                <span className="text-[#00D2FF]">HIPAA Certified</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A0F24] overflow-hidden">
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#2563EB]/25 blur-2xl" />
            <div className="relative z-10 p-5 rounded-xl bg-white/5 border border-white/10 text-white flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#7C3AED] flex items-center justify-center mb-3 shadow-lg shadow-blue-500/30">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold tracking-wide">{project.title}</span>
              <span className="text-xs text-white/60 mt-1">{project.category}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`group rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white transition-all duration-300 flex flex-col justify-between ${
        featured ? "lg:col-span-2" : ""
      } hover:border-[#93C5FD] hover:shadow-xl hover:shadow-blue-500/10`}
    >
      {/* Visual Canvas Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {renderVisual()}

        {/* Project Tag / Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/95 backdrop-blur-md text-[#0F172A] border border-[#CBD5E1] shadow-xs">
            {project.badge || project.category}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20">
          <span className="text-xs font-mono font-medium text-white/90 bg-[#0F172A]/80 px-2.5 py-1 rounded-md backdrop-blur-xs">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
            {project.category}
          </div>

          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-[#64748B] leading-relaxed mb-5 line-clamp-3">
            {project.shortDesc}
          </p>

          {/* Key Metrics / Highlights */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-5">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-sm sm:text-base font-heading font-extrabold text-[#2563EB]">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-[#64748B] truncate font-medium">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-[#64748B]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Link / Details Trigger */}
          <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
            <span className="text-xs text-[#94A3B8]">Client: {project.client}</span>
            <Button
              variant="secondary"
              size="sm"
              icon={ArrowUpRight}
              onClick={() => onSelect && onSelect(project)}
              className="text-xs py-1.5 px-3.5"
            >
              Case Study
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
