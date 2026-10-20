import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Cpu, ShieldCheck, Zap, Activity } from "lucide-react";
import logoImg from "../assets/favicon.png";

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // "loading" | "complete" | "revealing"
  const [statusText, setStatusText] = useState("Establishing Neural Link...");

  useEffect(() => {
    const statusMilestones = [
      { at: 0, text: "Establishing Neural Link..." },
      { at: 20, text: "Synthesizing TRICODE Core Engine..." },
      { at: 45, text: "Deploying Multi-Agent Intelligence..." },
      { at: 70, text: "Calibrating Spatial Holographic Canvas..." },
      { at: 90, text: "Optimizing High-Frequency Pipelines..." },
      { at: 100, text: "SYSTEM READY // WELCOME TO TRICODE AI" }
    ];

    let current = 0;
    const timer = setInterval(() => {
      // Dynamic progression: smooth, steady, and cinematic (~3.5 seconds total)
      let increment = 1;
      if (current < 30) increment = Math.random() > 0.3 ? 2 : 1;
      else if (current < 65) increment = Math.random() > 0.4 ? 2 : 1;
      else if (current < 88) increment = Math.random() > 0.5 ? 2 : 1;
      else increment = Math.random() > 0.6 ? 2 : 1;

      current = Math.min(current + increment, 100);
      setProgress(current);

      const found = statusMilestones.slice().reverse().find((m) => current >= m.at);
      if (found) {
        setStatusText(found.text);
      }

      if (current >= 100) {
        clearInterval(timer);
        setPhase("complete");
      }
    }, 38);

    return () => clearInterval(timer);
  }, []);

  // When progress hits 100%, hold briefly for impact then trigger shutter curtain reveal
  useEffect(() => {
    if (phase === "complete") {
      const revealTimeout = setTimeout(() => {
        setPhase("revealing");
      }, 700);

      return () => clearTimeout(revealTimeout);
    }

    if (phase === "revealing") {
      const exitTimeout = setTimeout(() => {
        if (onLoadingComplete) onLoadingComplete();
      }, 950);

      return () => clearTimeout(exitTimeout);
    }
  }, [phase, onLoadingComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* ========================================================== */}
      {/* DUAL SHUTTER REVEAL CURTAINS (CINEMATIC PAGE OPENING)     */}
      {/* ========================================================== */}

      {/* TOP CURTAIN */}
      <motion.div
        initial={{ y: "0%" }}
        animate={phase === "revealing" ? { y: "-100%" } : { y: "0%" }}
        transition={{
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1]
        }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#060913] z-20 flex flex-col justify-end border-b border-[#00D2FF]/30 shadow-[0_10px_40px_rgba(0,210,255,0.25)]"
      >
        {/* Subtle top curtain ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-[#2563EB]/10 blur-[100px] pointer-events-none" />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent shadow-[0_0_15px_#00D2FF]" />
      </motion.div>

      {/* BOTTOM CURTAIN */}
      <motion.div
        initial={{ y: "0%" }}
        animate={phase === "revealing" ? { y: "100%" } : { y: "0%" }}
        transition={{
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1]
        }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#060913] z-20 flex flex-col justify-start border-t border-[#7C3AED]/30 shadow-[0_-10px_40px_rgba(124,58,237,0.25)]"
      >
        {/* Subtle bottom curtain ambient glow */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent shadow-[0_0_15px_#7C3AED]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-[#7C3AED]/10 blur-[100px] pointer-events-none" />
      </motion.div>

      {/* HORIZONTAL LASER FLASH ACROSS SEAM DURING REVEAL */}
      <AnimatePresence>
        {phase === "revealing" && (
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-0 right-0 h-[3px] -translate-y-1/2 z-30 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_30px_#00D2FF]"
          />
        )}
      </AnimatePresence>

      {/* ========================================================== */}
      {/* LOADING SCREEN CONTENT (FA-FADES WHEN REVEALING STARTS)     */}
      {/* ========================================================== */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={
          phase === "revealing"
            ? { opacity: 0, scale: 1.08, filter: "blur(14px)" }
            : { opacity: 1, scale: 1, filter: "blur(0px)" }
        }
        transition={{ duration: 0.45, ease: "easeIn" }}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#070B14] text-white pointer-events-auto"
      >
        {/* Futuristic Background Atmospheric Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#2563EB]/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#00D2FF]/12 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/15 blur-[100px] pointer-events-none" />

        {/* High-Tech Grid Pattern with Scanlines */}
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 210, 255, 0.25) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(37, 99, 235, 0.25) 1px, transparent 1px)`,
            backgroundSize: "44px 44px"
          }}
        />

        {/* Top Header Telemetry Strip */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2.5 text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
          <span className="text-[#E2E8F0] font-bold">SYSTEM BOOT</span>
          <span className="text-[#475569]">|</span>
          <span className="text-[#64748B]">TRICODE-AI-ENGINE v2.6</span>
        </div>

        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase">
          <Activity className="w-3.5 h-3.5 text-[#00D2FF] animate-pulse" />
          <span className="hidden sm:inline text-[#64748B]">CORE STATUS:</span>
          <span className={phase === "complete" ? "text-[#10B981] font-bold" : "text-[#00D2FF] font-bold"}>
            {phase === "complete" ? "AUTHENTICATED" : "SYNCING"}
          </span>
        </div>

        {/* CENTER STAGE: TRICODE LOGO & ORBITAL MATRIX */}
        <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md w-full px-6 text-center">
          
          {/* Orbital Logo Vessel */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-7 flex items-center justify-center">
            
            {/* Outer Radial Ambient Aura */}
            <div
              className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 ${
                phase === "complete"
                  ? "bg-gradient-to-tr from-[#00D2FF]/50 via-[#2563EB]/40 to-[#10B981]/50 scale-110"
                  : "bg-gradient-to-tr from-[#00D2FF]/30 via-[#2563EB]/25 to-[#7C3AED]/30"
              }`}
            />

            {/* Orbital Ring 1: Cyan with Rotating Orbital Bead */}
            <div className="absolute inset-0 rounded-full border border-[#00D2FF]/35 animate-orbit pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#00D2FF] shadow-[0_0_14px_#00D2FF]" />
              <div className="absolute bottom-2 left-6 w-1.5 h-1.5 rounded-full bg-[#00D2FF]/70 shadow-[0_0_8px_#00D2FF]" />
            </div>

            {/* Orbital Ring 2: Violet Reverse with Glowing Spark */}
            <div className="absolute inset-3.5 sm:inset-4 rounded-full border border-[#7C3AED]/40 animate-orbit-reverse pointer-events-none">
              <div className="absolute bottom-1 right-2 w-3 h-3 rounded-full bg-[#7C3AED] shadow-[0_0_14px_#7C3AED]" />
            </div>

            {/* Middle Dashed Tech Ring */}
            <div className="absolute inset-7 sm:inset-8 rounded-full border border-dashed border-[#2563EB]/40 animate-pulse pointer-events-none" />

            {/* Inner Hologram Glass Base */}
            <div className="absolute inset-9 sm:inset-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md pointer-events-none" />

            {/* Core TRICODE Logo Badge Centerpiece */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={
                phase === "complete"
                  ? { scale: [1, 1.08, 1.03], transition: { duration: 0.5 } }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0F172A] p-3 sm:p-3.5 border-2 border-[#2563EB] shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center justify-center overflow-hidden"
            >
              {/* Shimmer Light Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent pointer-events-none" />

              <img
                src={logoImg}
                alt="TRICODE AI Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(37,99,235,0.8)]"
              />
            </motion.div>
          </div>

          {/* TRICODE Brand Typography */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-2.5 mb-1.5">
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-white drop-shadow-md">
                TRICODE
              </h1>
              <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-sm bg-[#2563EB]/25 text-[#00D2FF] border border-[#00D2FF]/40 shadow-[0_0_12px_rgba(0,210,255,0.3)]">
                AI
              </span>
            </div>
            <p className="text-[11px] tracking-[0.3em] text-[#94A3B8] uppercase font-semibold">
              Technologies
            </p>
          </div>

          {/* High-Precision Progress Bar System */}
          <div className="w-full max-w-xs sm:max-w-sm flex flex-col gap-2.5">
            {/* Progress Track */}
            <div className="relative w-full h-2.5 rounded-full bg-slate-900/80 overflow-hidden border border-white/10 backdrop-blur-md p-[2px] shadow-inner">
              {/* Animated Gradient Fill */}
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#00D2FF] via-[#2563EB] to-[#7C3AED] relative transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              >
                {/* Active Light Flare at tip */}
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-white shadow-[0_0_14px_#00D2FF] rounded-full" />
              </div>
            </div>

            {/* Numeric Percentage & Status Telemetry */}
            <div className="flex items-center justify-between text-xs font-mono pt-1">
              <div className="flex items-center gap-2 text-[#94A3B8] text-[11px] truncate pr-2 text-left">
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full ${
                    phase === "complete" ? "bg-[#10B981] shadow-[0_0_8px_#10B981]" : "bg-[#00D2FF] animate-pulse"
                  }`}
                />
                <span className={`truncate font-medium ${phase === "complete" ? "text-[#10B981]" : "text-[#CBD5E1]"}`}>
                  {statusText}
                </span>
              </div>
              <span className="font-bold text-[#00D2FF] text-sm tabular-nums tracking-wider drop-shadow-sm">
                {progress}%
              </span>
            </div>
          </div>

          {/* High-Tech Spec Footprint */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-7 pt-5 border-t border-white/10 w-full">
            <div className="flex items-center gap-1.5 text-[10px] text-[#94A3B8] font-mono uppercase">
              <Cpu className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Neural Architecture</span>
            </div>
            <span className="text-[#334155]">•</span>
            <div className="flex items-center gap-1.5 text-[10px] text-[#94A3B8] font-mono uppercase">
              <Zap className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Real-Time AI</span>
            </div>
            <span className="text-[#334155]">•</span>
            <div className="flex items-center gap-1.5 text-[10px] text-[#94A3B8] font-mono uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>Quantum Speed</span>
            </div>
          </div>

        </div>

        {/* Bottom Ambient Security Footer */}
        <div className="absolute bottom-5 sm:bottom-6 text-[10px] font-mono text-[#475569] tracking-wider uppercase">
          [ TRICODE SECURE PROTOCOL // 256-BIT QUANTUM ENCRYPTED ]
        </div>
      </motion.div>
    </div>
  );
}
