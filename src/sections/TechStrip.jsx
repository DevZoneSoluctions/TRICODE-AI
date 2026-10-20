
import { technologies } from "../data/siteData";

export default function TechStrip() {
  return (
    <div className="relative py-12 bg-white border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_#2563EB]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
              Technology Ecosystem
            </span>
          </div>

          {/* Grid of Technologies */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-3 w-full">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-white transition-all duration-200 cursor-default shadow-2xs"
              >
                <span className="text-xs font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                  {tech.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
