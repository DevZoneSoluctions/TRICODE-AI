import { ArrowRight, Smartphone, Zap, Code2 } from "lucide-react";
import { motion } from "motion/react";
import Button from "../components/Button";
import logoImg from "../assets/favicon.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-36 overflow-hidden bg-[#F8FAFC]">
      {/* Background ambient lighting */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] rounded-full glow-ambient-blue blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full glow-ambient-violet blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full glow-ambient-cyan blur-2xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Expressive Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">

            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#00D2FF]/40 shadow-xs text-xs font-semibold tracking-wider uppercase text-[#0284C7] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
              <span>EMPOWERING DIGITAL INNOVATION</span>
              <span className="text-[#94A3B8]">&bull;</span>
              <span className="gradient-text font-bold">TRICODE</span>
            </motion.div>

            {/* Main Headline - User Requested Text */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] sm:leading-[1.12] tracking-tight text-[#0F172A] mb-5 sm:mb-6"
            >
              Innovative Mobile Apps,{" "}
              <span className="text-[#0F172A]">Building Powerful Websites,</span>{" "}
              <span className="gradient-text block sm:inline">
                and Result-Driven Digital Marketing Strategies.
              </span>
            </motion.h1>

            {/* Supporting Text - User Requested Copy */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#475569] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              — Embracing AI and Emerging Technologies to Empower Businesses, Drive Growth, and Shape the Future.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto"
            >
              <Button
                to="/projects"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40"
              >
                Explore Our Work
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Let's Talk
              </Button>
            </motion.div>

            {/* Micro Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E2E8F0] w-full text-xs text-[#64748B]"
            >
            </motion.div>
          </div>

          {/* Right Column: Authentic TRICODE Hologram Orbital */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] aspect-square flex items-center justify-center mx-auto"
            >
              {/* Outer Orbital Ring (Neon Cyan) */}
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-dashed border-[#00D2FF]/40 animate-orbit pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D2FF] shadow-[0_0_16px_#00D2FF]" />
              </div>

              {/* Middle Orbital Ring (Neon Magenta Reverse) */}
              <div className="absolute inset-12 sm:inset-16 rounded-full border border-[#D946EF]/35 animate-orbit-reverse pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-[#D946EF] shadow-[0_0_16px_#D946EF]" />
              </div>

              {/* Inner Glowing Ring (Royal Blue) */}
              <div className="absolute inset-20 sm:inset-24 rounded-full border-2 border-[#2563EB]/40 animate-pulse-subtle pointer-events-none" />

              {/* Centerpiece: Original TRICODE Brand Hologram Core */}
              <div className="relative z-20 w-36 h-36 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-3xl bg-[#0B1120] p-3 sm:p-4 border-2 border-[#00D2FF]/60 shadow-[0_0_50px_rgba(0,210,255,0.35)] flex flex-col items-center justify-center animate-float-slow overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00D2FF]/20 via-[#2563EB]/25 to-[#D946EF]/20" />
                <img
                  src={logoImg}
                  alt="TRICODE Core"
                  className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_4px_20px_rgba(0,210,255,0.6)]"
                />
              </div>

              {/* Floating Orbiting Node 1: Mobile Engine (UPDATED) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-1 left-1 sm:top-2 sm:-left-4 z-30 p-2.5 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xl shadow-blue-500/10 animate-float-slow"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider font-semibold">
                      Mobile Engine
                    </div>
                    <div className="text-xs font-bold text-[#0F172A]">
                      Flutter Architecture
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Orbiting Node 2: Realtime Latency Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-4 right-1 sm:bottom-6 sm:-right-4 z-30 p-2.5 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xl shadow-purple-500/10 animate-float-reverse"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#7C3AED]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider font-semibold">
                      Performance
                    </div>
                    <div className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                      <span>60 FPS Native</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Orbiting Node 3: Active Status Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="hidden sm:flex absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 px-3.5 py-1.5 rounded-full bg-[#0F172A] text-white border border-white/20 shadow-lg text-[11px] font-semibold items-center gap-2 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
                <span>Production Ready: iOS & Android</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}