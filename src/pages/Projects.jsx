import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, X } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import ContactCTA from "../sections/ContactCTA";
import { projectsData } from "../data/siteData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.title = "Featured Projects & Architecture — TRICODE AI Technologies";
  }, []);

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(projectsData.map((p) => p.category))];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-28 pb-16 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] shadow-xs text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>PORTFOLIO &amp; ARCHITECTURAL LABS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6"
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
            Explore our production engineering initiatives. Each system illustrates our strict commitment to algorithmic efficiency, modular design tokens, and verifiable enterprise impact.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-14">
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
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={idx === 0 && activeCategory === "All"}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F8FAFC] text-[#0F172A] hover:text-[#2563EB] border border-[#E2E8F0] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] mb-3">
              {selectedProject.category}
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A] mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-xs text-[#94A3B8] mb-6">
              Client: {selectedProject.client} &bull; Deployment Year: {selectedProject.year}
            </p>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6 font-normal">
              {selectedProject.fullDesc}
            </p>

            {/* Metrics */}
            {selectedProject.metrics && (
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-base sm:text-lg font-heading font-extrabold text-[#2563EB]">
                      {m.value}
                    </div>
                    <div className="text-xs text-[#64748B] font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
                Engineering Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </Button>
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                icon={ArrowRight}
              >
                Request Similar Architecture
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Conversion Banner */}
      <ContactCTA />
    </div>
  );
}
