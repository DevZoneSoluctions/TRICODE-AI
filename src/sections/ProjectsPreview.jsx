import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { projectsData } from "../data/siteData";

export default function ProjectsPreview() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative py-14 sm:py-24 lg:py-32 bg-white border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Proven Architecture."
            highlight="Tangible Impact."
            description="Explore our recent production deployments across autonomous agent workflows, high-frequency analytics, and real-time collaborative workspaces."
          />
          <div className="shrink-0">
            <Button
              to="/projects"
              variant="primary"
              size="md"
              icon={ArrowRight}
            >
              View Full Portfolio
            </Button>
          </div>
        </div>

        {/* Featured Projects Grid with Varied Proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.slice(0, 3).map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={idx === 0}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Quick Link to Projects */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-[#7C3AED] transition-colors"
          >
            <span>Browse all case studies &amp; architectural breakdowns</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
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
            className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl p-5 sm:p-8 max-h-[88vh] overflow-y-auto"
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

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#E2E8F0] flex-wrap">
              {selectedProject.playStoreUrl ? (
                <a
                  href={selectedProject.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F172A] text-white hover:bg-[#1E293B] text-xs font-bold shadow-md transition-all"
                >
                  <span>View on Google Play Store</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
                </a>
              ) : <div />}
              <div className="flex items-center gap-2">
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
        </div>
      )}
    </section>
  );
}
