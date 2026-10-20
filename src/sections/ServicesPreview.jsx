import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { servicesData } from "../data/siteData";

export default function ServicesPreview() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F8FAFC] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full glow-ambient-blue -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full glow-ambient-violet pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="OUR CAPABILITIES"
            title="Engineering High-Impact Systems Across"
            highlight="The Modern AI Stack."
            description="From proprietary machine learning models to reactive frontend experiences, we deliver full-cycle software engineering that accelerates organizational growth."
          />
          <div className="shrink-0">
            <Button
              to="/services"
              variant="secondary"
              size="md"
              icon={ArrowRight}
            >
              All Capabilities
            </Button>
          </div>
        </div>

        {/* Services Grid (Show primary 3 on homepage preview) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] font-bold text-lg font-heading">
              06+
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#0F172A]">
                Looking for Bespoke Architectural Consulting?
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B]">
                We also build custom backend engines, high-load microservices, and dedicated UI/UX design systems.
              </p>
            </div>
          </div>
          <Button
            to="/services"
            variant="outline"
            size="sm"
            icon={ArrowRight}
            className="shrink-0"
          >
            Explore All 6 Services
          </Button>
        </div>
      </div>
    </section>
  );
}
