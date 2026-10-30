import { ArrowRight, CheckCircle2, Smartphone, Globe, Brain } from "lucide-react";

export default function ServiceCard({ service }) {
  // Icon check karne ke liye logic
  const getIcon = (title) => {
    if (title.includes("Mobile")) return <Smartphone className="w-6 h-6 text-blue-600" />;
    if (title.includes("Web")) return <Globe className="w-6 h-6 text-purple-600" />;
    return <Brain className="w-6 h-6 text-cyan-500" />;
  };

  const getColor = (title) => {
    if (title.includes("Mobile")) return "bg-blue-50 border-blue-100 text-blue-600";
    if (title.includes("Web")) return "bg-purple-50 border-purple-100 text-purple-600";
    return "bg-cyan-50 border-cyan-100 text-cyan-600";
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col h-full">
      
      {/* Top Section: Icon and Number */}
      <div className="flex justify-between items-start mb-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${getColor(service.title).split(' ')[0]} ${getColor(service.title).split(' ')[2]}`}>
          {getIcon(service.title)}
        </div>
        <span className="text-4xl font-extrabold text-[#F1F5F9]">{service.id}</span>
      </div>
      
      {/* Title & Description */}
      <h3 className="text-xl font-bold text-[#0F172A] mb-3 leading-snug">{service.title}</h3>
      <p className="text-[#64748B] text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Capabilities List */}
      <div className="mb-6 flex-grow">
        <h4 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-3">Capabilities</h4>
        <ul className="space-y-2.5">
          {service.capabilities.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
              <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies / Tags (FLUTTER, REACT etc.) */}
      <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap gap-2 mb-6">
        {service.technologies.map((tech, i) => (
          <span key={i} className={`px-2.5 py-1 text-[11px] font-semibold rounded-md border ${getColor(service.title)}`}>
            {tech}
          </span>
        ))}
      </div>

      {/* Footer Link */}
      <a href="/contact" className="text-[#2563EB] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto">
        Consult On This Capability <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}