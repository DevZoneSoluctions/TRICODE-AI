import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  ArrowUpRight, Sparkles, X, ArrowRight, Activity, Cpu,
  BarChart3, Globe, Brain, Layers, TrendingUp, Smartphone
} from "lucide-react";
import Button from "../components/Button";
import ContactCTA from "../sections/ContactCTA";
import { projectsData } from "../data/siteData";

/* ─── Inline SVG Brand Icons ──────────────────────────────────────────────── */
function GithubIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.7 1.2 3.3 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

/* ─── Visual Abstract Graphics per project type ──────────────────────────── */
function ProjectVisual({ project }) {
  const icons = { "AI & Autonomous Systems": Brain, "Web Applications": Globe, "Mobile & Health Tech": Activity, "Custom Software": BarChart3, "Cloud & DevOps": Cpu, "UI/UX & Web Apps": Layers, "Mobile Applications": Smartphone };
  const IconComponent = icons[project.category] || TrendingUp;

  const accentColors = {
    "AI & Autonomous Systems":  { primary: "#7547F5", secondary: "#B055DE", glow: "rgba(117,71,245,0.4)" },
    "Web Applications":         { primary: "#FF795E", secondary: "#FFA18F", glow: "rgba(255,121,94,0.4)" },
    "Mobile & Health Tech":     { primary: "#00BCA6", secondary: "#9BEBD6", glow: "rgba(0,188,166,0.4)" },
    "Custom Software":          { primary: "#7547F5", secondary: "#FF795E", glow: "rgba(117,71,245,0.4)" },
    "Cloud & DevOps":           { primary: "#2563EB", secondary: "#7547F5", glow: "rgba(37,99,235,0.4)" },
    "UI/UX & Web Apps":         { primary: "#FF795E", secondary: "#9BEBD6", glow: "rgba(255,121,94,0.4)" },
    "Mobile Applications":      { primary: "#FF4E88", secondary: "#2563EB", glow: "rgba(255,78,136,0.4)" },
  };
  const colors = accentColors[project.category] || { primary: "#2563EB", secondary: "#7C3AED", glow: "rgba(37,99,235,0.4)" };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0B1120] flex items-center justify-center overflow-hidden">
      {/* Ambient center glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 50%, ${colors.glow} 0%, transparent 65%)` }}
      />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Abstract connection nodes */}
      <svg className="absolute w-full h-full opacity-50" viewBox="0 0 400 220" fill="none" preserveAspectRatio="xMidYMid slice">
        <line x1="200" y1="110" x2="90" y2="60" stroke={colors.primary} strokeWidth="1.5" strokeDasharray="5 4" />
        <line x1="200" y1="110" x2="310" y2="60" stroke={colors.secondary} strokeWidth="1.5" strokeDasharray="5 4" />
        <line x1="200" y1="110" x2="80" y2="170" stroke={colors.primary} strokeWidth="1" strokeDasharray="4 5" opacity="0.7" />
        <line x1="200" y1="110" x2="320" y2="170" stroke={colors.secondary} strokeWidth="1" strokeDasharray="4 5" opacity="0.7" />
        <circle cx="90" cy="60" r="7" fill="#1E293B" stroke={colors.primary} strokeWidth="2.5" />
        <circle cx="310" cy="60" r="7" fill="#1E293B" stroke={colors.secondary} strokeWidth="2.5" />
        <circle cx="80" cy="170" r="5" fill={colors.primary} opacity="0.6" />
        <circle cx="320" cy="170" r="5" fill={colors.secondary} opacity="0.6" />
      </svg>

      {/* Central Icon Node */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center border border-white/15 shadow-xl"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}60, ${colors.secondary}40)`,
            boxShadow: `0 0 30px ${colors.glow}, 0 8px 32px rgba(0,0,0,0.4)`
          }}
        >
          <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        {/* Pulse rings */}
        <div className="flex items-center gap-1 opacity-60">
          {[1, 2, 3, 4, 3, 2, 1].map((h, i) => (
            <div
              key={i}
              className="w-0.5 rounded-full animate-pulse"
              style={{ height: `${h * 5}px`, backgroundColor: colors.primary, animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Category badge */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/8 backdrop-blur-sm border border-white/12 text-[10px] text-white/70 font-medium">
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: colors.primary }} />
        {project.category}
      </div>
    </div>
  );
}

/* ─── 3D Tilt Project Card ──────────────────────────────────────────────── */
function ProjectCard({ project, index, onSelect }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["6deg", "-6deg"]), { stiffness: 280, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-6deg", "6deg"]), { stiffness: 280, damping: 22 });

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white hover:border-[#93C5FD] hover:shadow-2xl hover:shadow-blue-500/12 transition-all duration-300 flex flex-col cursor-default"
    >
      {/* Dark Top Visual Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <ProjectVisual project={project} />
        <div className="absolute top-4 right-4 z-10">
          <span className="text-[10px] font-mono font-medium text-white/80 bg-[#0F172A]/70 px-2.5 py-1 rounded-lg backdrop-blur-sm">
            {project.year}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0F172A]/60 to-transparent pointer-events-none" />
      </div>

      {/* White Bottom Content Area */}
      <div className="bg-white p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Title & Client */}
          <div className="mb-3">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[#64748B] mb-1">{project.client}</div>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
              {project.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4 font-normal line-clamp-2">
            {project.shortDesc}
          </p>

          {/* 3 Metric Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="font-heading font-extrabold text-sm sm:text-base text-[#2563EB] leading-tight">{m.value}</div>
                <div className="text-[9px] sm:text-[10px] text-[#94A3B8] font-medium leading-tight mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((t) => (
              <span key={t} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study Link */}
        <button
          type="button"
          onClick={() => onSelect && onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#7C3AED] transition-colors group/link cursor-pointer w-fit"
        >
          <span>Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Case Study Detail Modal ───────────────────────────────────────────── */
function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-2xl p-5 sm:p-8 max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F8FAFC] text-[#0F172A] hover:text-[#2563EB] border border-[#E2E8F0] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-bold border border-[#BFDBFE] mb-4">
          <Sparkles className="w-3 h-3" />
          {project.category}
        </div>

        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A] mb-1">{project.title}</h3>
        <p className="text-xs text-[#94A3B8] mb-5">
          Client: {project.client} • {project.year} • {project.badge}
        </p>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6 font-normal">{project.fullDesc}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6">
          {project.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="font-heading font-extrabold text-lg sm:text-xl text-[#2563EB] mb-0.5">{m.value}</div>
              <div className="text-xs text-[#64748B] font-medium">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-7">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-3">Engineering Stack</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-5 border-t border-[#E2E8F0] flex-wrap">
          {project.playStoreUrl ? (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F172A] text-white hover:bg-[#1E293B] text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              <span>Get on Google Play Store</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
            </a>
          ) : <div />}
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" size="sm" onClick={onClose} to="/contact" icon={ArrowRight}>
              Request Similar Build
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Projects Page ─────────────────────────────────────────────────────── */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.title = "Featured Projects & Architecture — TRICODE AI Technologies";
  }, []);

  const categories = useMemo(() => {
    return ["All", ...new Set(projectsData.map((p) => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
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
              <span>Portfolio & Architectural Labs</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-[64px] font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-5 sm:mb-6"
            >
              Engineered Systems.{" "}
              <span className="gradient-text">Realized At Scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal"
            >
              Explore our production engineering initiatives. Each system illustrates our strict
              commitment to algorithmic efficiency, modular design tokens, and verifiable enterprise impact.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Category Filters ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#2563EB] text-white shadow-md shadow-blue-600/25"
                    : "bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#0F172A]"
                }`}
              >
                {cat}
              </button>
            );
          })}
          {activeCategory !== "All" && (
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="flex items-center gap-1 px-3 py-2 rounded-full text-xs text-[#64748B] bg-white border border-[#E2E8F0] hover:border-red-300 hover:text-red-500 transition-all cursor-pointer"
            >
              <X className="w-3 h-3" /> Clear
            </button>
          )}
        </motion.div>
      </div>

      {/* ── Projects Grid ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Result count */}
        <motion.div
          layout
          className="flex items-center justify-between mb-8"
        >
          <p className="text-sm text-[#64748B] font-medium">
            Showing <span className="font-bold text-[#0F172A]">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && (
              <span className="ml-1 text-[#2563EB]">in "{activeCategory}"</span>
            )}
          </p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-[#94A3B8]">
            <BarChart3 className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p className="text-sm">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* ── Case Study Modal ──────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <ContactCTA />
    </div>
  );
}
