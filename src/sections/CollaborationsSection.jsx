import { MapPin, Globe, Building2, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";

export default function CollaborationsSection() {
  const collaborations = [
    {
      id: "candid-connections",
      name: "CANDID CONNECTIONS LIMITED",
      badge: "Global Partner & Client",
      country: "United Kingdom",
      flag: "🇬🇧",
      location: "1 Canada Square, LONDON, E14 5AA, United Kingdom",
      image: "/images/collaborations/candid-connections.jpg",
      description:
        "International digital matchmaking and interactive video technology enterprise. TRICODE AI Technologies partners with Candid Connections Limited to architect high-performance Flutter mobile ecosystems, real-time WebRTC communications, and cloud-native backend infrastructure.",
      tags: ["London, Canary Wharf", "Flutter & WebRTC Engine", "Mobile Video App", "Global Deployment"],
      status: "Active Collaboration"
    },
    {
      id: "easezen-solutions",
      name: "Easezen Solutions",
      badge: "Technology Collaborator",
      country: "Pakistan",
      flag: "🇵🇰",
      location: "Hasan Chowk, Mureer, Murree Rd, Chamanzar Colony, Rawalpindi, 46000",
      image: "/images/collaborations/easezen-solutions.jpeg",
      description:
        "Progressive enterprise technology and digital solutions consultancy. TRICODE AI Technologies collaborates with Easezen Solutions on cross-platform digital architectures, distributed backend pipelines, and high-impact custom software solutions.",
      tags: ["Rawalpindi, Murree Road", "Enterprise Platforms", "Custom Software", "Tech Partnership"],
      status: "Active Collaboration"
    }
  ];

  return (
    <section className="relative py-14 sm:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="CLIENTS & COLLABORATIONS"
            title="Strategic Global Alliances."
            highlight="Proven Trust."
            description="We collaborate with visionary organizations and enterprises across the UK, Pakistan, and worldwide — engineering mission-critical applications and digital platforms."
          />
          <div className="shrink-0 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB]">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Global Client Footprint</span>
            </span>
          </div>
        </div>

        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {collaborations.map((collab, idx) => (
            <motion.article
              key={collab.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white hover:border-[#93C5FD] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Banner / Visual Area */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0F172A]">
                {collab.image ? (
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={collab.image}
                      alt={collab.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-black/20" />
                  </div>
                ) : (
                  /* Premium Tech Visual for Easezen Solutions */
                  <div className="relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A101D] overflow-hidden">
                    {/* Background Grid & Ambient Glow */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#00D2FF]/20 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#2563EB]/25 blur-3xl" />

                    {/* Top Branding Pill */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white font-medium">
                        <Building2 className="w-3.5 h-3.5 text-[#00D2FF]" />
                        <span>Corporate Technology Partner</span>
                      </div>
                      <span className="text-xl">{collab.flag}</span>
                    </div>

                    {/* Center Monogram / Brand Icon */}
                    <div className="relative z-10 my-auto text-center flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#00D2FF] p-0.5 shadow-xl shadow-blue-500/20 mb-3 flex items-center justify-center">
                        <div className="w-full h-full rounded-[14px] bg-[#0F172A] flex items-center justify-center">
                          <span className="font-heading font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#60A5FA]">
                            ES
                          </span>
                        </div>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-wide">
                        {collab.name}
                      </h4>
                      <p className="text-xs text-white/70 font-mono mt-1">
                        Enterprise &amp; Digital Solutions
                      </p>
                    </div>

                    {/* Bottom Status Pill */}
                    <div className="relative z-10 flex items-center justify-between text-xs text-white/70 pt-2 border-t border-white/10">
                      <span>Murree Road, Rawalpindi</span>
                      <span className="text-[#00D2FF] font-semibold">Verified Partner</span>
                    </div>
                  </div>
                )}

                {/* Country & Badge Overlay */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/95 backdrop-blur-md text-[#0F172A] border border-[#CBD5E1] shadow-xs flex items-center gap-1.5">
                    <span>{collab.flag}</span>
                    <span>{collab.country}</span>
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide bg-[#2563EB] text-white shadow-sm flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                    <span>{collab.status}</span>
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{collab.badge}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-3">
                    {collab.name}
                  </h3>

                  {/* Address Box */}
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-4 text-xs text-[#334155] leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="font-medium">{collab.location}</span>
                  </div>

                  <p className="text-sm text-[#64748B] leading-relaxed mb-5">
                    {collab.description}
                  </p>
                </div>

                <div>
                  {/* Scope Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E2E8F0]">
                    {collab.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

