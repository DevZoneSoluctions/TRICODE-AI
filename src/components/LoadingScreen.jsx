import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Cpu, ShieldCheck, Zap } from "lucide-react";
import logoImg from "../assets/favicon.png";

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Neural Matrix...");

  useEffect(() => {
    const statusMessages = [
      { at: 0, text: "Initializing Neural Matrix..." },
      { at: 25, text: "Synthesizing AI Engine & Agents..." },
      { at: 55, text: "Synchronizing Autonomous Architecture..." },
      { at: 80, text: "Calibrating High-Performance Systems..." },
      { at: 98, text: "System Ready. Launching Experience..." }
    ];

    // Smooth progress simulation that completes in ~1.8 - 2.2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic pacing: fast start, thoughtful middle, snappy finish
        let step = Math.floor(Math.random() * 8) + 4;
        if (prev > 75 && prev < 95) step = Math.floor(Math.random() * 5) + 3;
        const next = Math.min(prev + step, 100);

        const currentMsg = statusMessages.slice().reverse().find((m) => next >= m.at);
        if (currentMsg) {
          setStatusText(currentMsg.text);
        }

        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // When progress reaches 100, trigger exit after a brief pause for smooth visual impact
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        if (onLoadingComplete) onLoadingComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(12px)",
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070B14] text-white select-none overflow-hidden"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background Ambient Cyber Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2563EB]/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[#00D2FF]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-[450px] h-[450px] rounded-full bg-[#7C3AED]/15 blur-[110px] pointer-events-none" />

      {/* Futuristic Background Grid with Subtle Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 210, 255, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(37, 99, 235, 0.2) 1px, transparent 1px)`,
          backgroundSize: "48px 48px"
        }}
      />

      {/* Corner Telemetry Indicators */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#64748B] uppercase">
        <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
        <span>NODE://TRICODE_AI_V2</span>
      </div>
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#64748B] uppercase">
        <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
        <span>SECURE_BOOT // OK</span>
      </div>

      {/* Main Centerpiece Stage */}
      <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md w-full px-6 text-center">
        {/* Holographic Logo Vessel */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-8 flex items-center justify-center">
          {/* Outer Pulsing Aura */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00D2FF]/30 via-[#2563EB]/25 to-[#7C3AED]/30 blur-xl animate-pulse" />

          {/* Outer Orbital Ring 1 (Forward Rotation with Cyber Bead) */}
          <div className="absolute inset-0 rounded-full border border-[#00D2FF]/30 animate-orbit pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00D2FF] shadow-[0_0_12px_#00D2FF]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00D2FF]/60" />
          </div>

          {/* Middle Orbital Ring 2 (Reverse Rotation with Violet Bead) */}
          <div className="absolute inset-3 sm:inset-4 rounded-full border border-[#7C3AED]/35 animate-orbit-reverse pointer-events-none">
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-[#7C3AED] shadow-[0_0_12px_#7C3AED]" />
          </div>

          {/* Inner Glowing Hex / Circle Boundary */}
          <div className="absolute inset-7 sm:inset-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          {/* Core TRICODE Logo Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0F172A] p-3 sm:p-3.5 border-2 border-[#2563EB]/80 shadow-[0_0_35px_rgba(37,99,235,0.45)] flex items-center justify-center overflow-hidden"
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
            
            <img
              src={logoImg}
              alt="TRICODE AI Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(37,99,235,0.8)]"
            />
          </motion.div>
        </div>

        {/* Brand Name & Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col items-center mb-6"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
              TRICODE
            </h1>
            <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#2563EB]/20 text-[#00D2FF] border border-[#2563EB]/40 shadow-[0_0_10px_rgba(0,210,255,0.2)]">
              AI
            </span>
          </div>
          <p className="text-[11px] tracking-[0.25em] text-[#94A3B8] uppercase font-semibold">
            Technologies
          </p>
        </motion.div>

        {/* High-Tech Progress Bar Container */}
        <div className="w-full max-w-xs sm:max-w-sm flex flex-col gap-2.5">
          {/* Progress Bar Track */}
          <div className="relative w-full h-2 rounded-full bg-white/10 overflow-hidden border border-white/5 backdrop-blur-sm p-[1px]">
            {/* Animated Gradient Fill */}
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#00D2FF] via-[#2563EB] to-[#7C3AED] relative"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.15 }}
            >
              {/* Leading Spark Flare */}
              <div className="absolute right-0 top-0 bottom-0 w-3 bg-white shadow-[0_0_12px_#00D2FF] rounded-full" />
            </motion.div>
          </div>

          {/* Progress Percentage & Status Telemetry */}
          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <div className="flex items-center gap-2 text-[#94A3B8] text-[11px] truncate pr-2 text-left">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
              <span className="truncate">{statusText}</span>
            </div>
            <span className="font-bold text-[#00D2FF] text-sm tabular-nums">
              {progress}%
            </span>
          </div>
        </div>

        {/* Feature Matrix Badges */}
        <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-white/5 w-full">
          <div className="flex items-center gap-1.5 text-[10px] text-[#64748B] font-mono uppercase">
            <Cpu className="w-3 h-3 text-[#2563EB]" />
            <span>Multi-Agent</span>
          </div>
          <span className="text-[#334155]">•</span>
          <div className="flex items-center gap-1.5 text-[10px] text-[#64748B] font-mono uppercase">
            <Zap className="w-3 h-3 text-[#00D2FF]" />
            <span>Ultra Fast</span>
          </div>
          <span className="text-[#334155]">•</span>
          <div className="flex items-center gap-1.5 text-[10px] text-[#64748B] font-mono uppercase">
            <Sparkles className="w-3 h-3 text-[#7C3AED]" />
            <span>Intelligence</span>
          </div>
        </div>
      </div>

      {/* Subtle Skip Button for Impatient Users */}
      <button
        onClick={onLoadingComplete}
        className="absolute bottom-6 sm:bottom-8 text-xs font-mono text-[#64748B] hover:text-white transition-colors cursor-pointer px-3 py-1 rounded border border-white/5 hover:border-white/20"
      >
        Press to skip →
      </button>
    </motion.div>
  );
}
