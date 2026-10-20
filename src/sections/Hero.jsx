
import { ArrowRight, Sparkles, Cpu, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";
import Button from "../components/Button";
import logoImg from "../assets/favicon.png";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-36 overflow-hidden bg-[#F8FAFC]">
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] shadow-xs text-xs font-semibold tracking-wider uppercase text-[#2563EB] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
              <span>ENGINEERING THE FUTURE</span>
              <span className="text-[#94A3B8]">&bull;</span>
              <span className="text-[#7C3AED]">TRICODE AI</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-[#0F172A] mb-6"
            >
              We Don't Just Build Software.{" "}
              <span className="gradient-text block sm:inline">
                We Build What's Next.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Intelligent technology. Exceptional design. Digital products built to move businesses forward with speed, resilience, and mathematical precision.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <Button
                to="/projects"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto shadow-lg shadow-blue-600/25"
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
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                <span className="font-semibold text-[#0F172A]">Enterprise Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#7C3AED]" />
                <span className="font-semibold text-[#0F172A]">Sub-15ms Latency</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0284C7]" />
                <span className="font-semibold text-[#0F172A]">Proprietary AI Core</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Authentic TRICODE Hologram Orbital */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[480px] aspect-square flex items-center justify-center"
            >
              {/* Outer Orbital Ring (Blue) */}
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-dashed border-[#2563EB]/30 animate-orbit pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#2563EB] shadow-[0_0_12px_#2563EB]" />
              </div>
              
              {/* Middle Orbital Ring (Violet Reverse) */}
              <div className="absolute inset-12 sm:inset-16 rounded-full border border-[#7C3AED]/25 animate-orbit-reverse pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#7C3AED] shadow-[0_0_12px_#7C3AED]" />
              </div>

              {/* Inner Glowing Ring (Cyan) */}
              <div className="absolute inset-20 sm:inset-24 rounded-full border-2 border-[#00D2FF]/30 animate-pulse-subtle pointer-events-none" />

              {/* Centerpiece: Original TRICODE Brand Hologram Core */}
              <div className="relative z-20 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-[#0F172A] p-4 border-2 border-[#2563EB] shadow-[0_0_50px_rgba(37,99,235,0.25)] flex flex-col items-center justify-center animate-float-slow overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/25 via-transparent to-[#7C3AED]/25" />
                <img
                  src={logoImg}
                  alt="TRICODE AI Core"
                  className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_4px_16px_rgba(37,99,235,0.6)]"
                />
              </div>

              {/* Floating Orbiting Node 1: Multi-Agent Neural Engine */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-2 left-0 sm:-left-4 z-30 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xl shadow-blue-500/10 animate-float-slow"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider font-semibold">
                      Neural Engine
                    </div>
                    <div className="text-xs font-bold text-[#0F172A]">
                      Multi-Agent Orchestration
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Orbiting Node 2: Realtime Latency Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-6 right-0 sm:-right-4 z-30 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xl shadow-purple-500/10 animate-float-reverse"
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
                      <span>99.8% Accuracy</span>
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
                className="absolute -bottom-4 left-1/4 z-30 px-3.5 py-1.5 rounded-full bg-[#0F172A] text-white border border-white/20 shadow-lg text-[11px] font-semibold flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
                <span>Next-Gen Stack: Ready for Production</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
