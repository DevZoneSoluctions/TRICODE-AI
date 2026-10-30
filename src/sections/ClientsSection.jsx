import { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Star,
  Smartphone,
  Quote,
  CheckCircle2,
  ArrowRight,
  Heart,
  Video,
  Award
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { clientsData, clientTestimonials } from "../data/siteData";

export default function ClientsSection() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full glow-ambient-blue blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full glow-ambient-violet blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="GLOBAL COLLABORATIONS"
          title="Client Partnerships & Product Ecosystems:"
          highlight="Engineered For Modern Scale."
          description="From viral consumer mobile platforms to mission-critical healthcare telemetry and fintech systems, we collaborate with visionary founders to build market-defining technology."
          centered
          className="mb-12 sm:mb-16"
        />

        {/* ── Featured Client Spotlight: Candid Dating App ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E112A] to-[#1E293B] text-white p-6 sm:p-10 lg:p-12 border border-[#334155] shadow-2xl mb-14 overflow-hidden"
        >
          {/* Ambient glow blobs inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF4E88]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#7C3AED]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Client Details & Play Store Link */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4E88]/20 border border-[#FF4E88]/40 text-xs font-bold text-[#FF8E53] uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-[#FF8E53]" />
                  <span>Featured Production Client</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-xs font-bold text-[#00D2FF]">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Google Play Store Live</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-snug mb-4">
                Candid — <span className="bg-gradient-to-r from-[#FF4E88] to-[#FF8E53] bg-clip-text text-transparent">Video-First Dating App</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                TRICODE partnered with Candid to architect and engineer an authentic, video-first dating platform for Google Play. Moving away from superficial photo swiping, the application delivers unscripted video prompts, scheduled live virtual speed dating, and sub-60ms WebRTC interactive matching with 60 FPS native smoothness.
              </p>

              {/* Metrics Pills */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 w-full mb-8">
                <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                  <div className="text-lg sm:text-2xl font-heading font-extrabold text-[#FF4E88]">100%</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Video Prompts</div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                  <div className="text-lg sm:text-2xl font-heading font-extrabold text-[#00D2FF]">&lt;60ms</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">WebRTC Sync</div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center">
                  <div className="text-lg sm:text-2xl font-heading font-extrabold text-[#34D399]">4.8 ★</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Store Rating</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://play.google.com/store/apps/details?id=com.candiddatingapp.candid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF4E88] to-[#FF8E53] text-white font-bold text-sm shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>View on Google Play Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                  className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#0F172A]"
                >
                  Build Similar Mobile App
                </Button>
              </div>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[9/14] rounded-3xl bg-gradient-to-b from-[#1E293B] to-[#0B0F19] p-4 border-2 border-white/20 shadow-2xl flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4E88] animate-pulse" />
                    <span className="text-xs font-bold tracking-wider text-white">CANDID</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00D2FF] bg-[#00D2FF]/10 px-2 py-0.5 rounded-full">v2.4 Live</span>
                </div>

                <div className="my-auto flex flex-col items-center justify-center text-center py-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#FF4E88] to-[#FF8E53] flex items-center justify-center mb-4 shadow-xl shadow-pink-500/30">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-heading font-extrabold text-white mb-1">Authentic Connections</h4>
                  <p className="text-xs text-slate-400 max-w-[200px]">Real-time unscripted video prompts &amp; scheduled speed dating events.</p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#FF4E88] fill-[#FF4E88]" />
                    <span className="text-[11px] font-semibold text-white">Mutual Match Found</span>
                  </div>
                  <span className="text-[10px] text-[#34D399] font-bold">100% Video</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── Partner Grid ──────────────────────────────────────────────────── */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0F172A] tracking-tight">
              Selected Enterprise &amp; Growth Collaborations
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 font-normal">
              Trusted across diverse engineering domains and enterprise standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {clientsData.map((client, idx) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl bg-white border border-[#E2E8F0] p-6 flex flex-col justify-between hover:border-[#2563EB] hover:shadow-xl hover:shadow-blue-600/5 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${client.logoColor} text-white flex items-center justify-center font-heading font-black text-xs shadow-xs`}>
                        {client.logoText.slice(0, 2)}
                      </div>
                      <span className="font-heading font-bold text-sm text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                        {client.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                      {client.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4 font-normal">
                    {client.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>{client.category}</span>
                  {client.url ? (
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#2563EB] hover:underline"
                    >
                      <span>Explore</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-medium text-[#64748B]">{client.location}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Client Testimonial Quotes ─────────────────────────────────────── */}
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <Quote className="w-6 h-6 text-[#2563EB]" />
            <h4 className="text-lg sm:text-xl font-heading font-extrabold text-[#0F172A]">
              Founder &amp; Engineering Testimonials
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {clientTestimonials.map((t, idx) => (
              <div key={idx} className="flex flex-col justify-between p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic mb-4 font-normal">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">{t.author}</div>
                    <div className="text-[10px] text-[#64748B]">{t.role}</div>
                  </div>
                  <span className="text-[10px] font-bold text-[#2563EB] px-2 py-0.5 rounded-md bg-[#EFF6FF] border border-[#BFDBFE]">
                    {t.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
