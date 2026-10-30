import ServiceCard from "../components/ServiceCard";
import { ArrowRight } from "lucide-react";

export default function ServicesPreview() {
  // YAHAN POSITION SET KI HAI: 1st App, 2nd Web, 3rd AI
  const servicesData = [
    {
      id: "01",
      title: "Mobile Application Engineering",
      description: "Silky smooth iOS and Android applications with offline-first synchronization and native tactile responsiveness.",
      capabilities: [
        "Cross-Platform iOS & Android Apps",
        "Native Performance Optimization",
        "Real-Time Push & Device Sync",
        "Biometric Security Integration",
        "Mobile-First AI Assistants"
      ],
      technologies: ["Flutter", "Dart", "React Native", "Swift", "Kotlin"]
    },
    {
      id: "02",
      title: "Web Platforms & Next-Gen Frontends",
      description: "Architecturally sound, blazing-fast web applications with editorial visual polish and reactive design systems.",
      capabilities: [
        "Enterprise Web Applications",
        "High-Performance Dashboards",
        "Interactive 3D / Canvas Experiences",
        "Scalable Design Systems",
        "Headless & API-First Architectures"
      ],
      technologies: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"]
    },
    {
      id: "03",
      title: "AI Solutions & Intelligent Automation",
      description: "End-to-end custom LLMs, enterprise agentic workflows, and predictive analytics that automate complex operational reasoning.",
      capabilities: [
        "Custom SLM & LLM Fine-Tuning",
        "Private Enterprise RAG Pipelines",
        "Autonomous Multi-Agent Systems",
        "Computer Vision & Document OCR",
        "Predictive Machine Learning Models"
      ],
      technologies: ["Python", "LangChain", "Hugging Face", "Qdrant", "PyTorch"]
    }
  ];

  return (
    <section className="py-14 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">Our Capabilities</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-tight mb-4">
              Engineering High-Impact <br className="hidden sm:block" />
              Systems Across <span className="text-[#2563EB]">The Modern AI Stack.</span>
            </h2>
            <p className="text-[#64748B] text-lg">
              From proprietary machine learning models to reactive frontend experiences, we deliver full-cycle software engineering that accelerates organizational growth.
            </p>
          </div>
          
          <a href="/services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#CBD5E1] text-sm font-semibold text-[#0F172A] hover:bg-white transition-colors whitespace-nowrap">
            All Capabilities <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cards Grid - Mapping Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}