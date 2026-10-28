import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Cpu, Zap, Activity } from "lucide-react";
import logoImg from "../assets/favicon.png";

/**
 * GlobalPageLoader
 * Exact same cinematic dark loading screen as the initial LoadingScreen,
 * but runs at 1–1.5s speed for per-route page navigation transitions.
 * Triggered automatically on every HashRouter route change from App.jsx.
 */
export default function GlobalPageLoader({ isLoading = true, duration = 1100, onFinished }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // "loading" | "complete" | "revealing"
  const [statusText, setStatusText] = useState("Routing Neural Link...");

  // Reset and run whenever isLoading flips to true
  useEffect(() => {
    if (!isLoading) return;

    setProgress(0);
    setPhase("loading");
    setStatusText("Routing Neural Link...");

    const statusMilestones = [
      { at: 0,   text: "Routing Neural Link..." },
      { at: 25,  text: "Synthesizing Page Engine..." },
      { at: 55,  text: "Deploying Interface Layer..." },
      { at: 80,  text: "Calibrating Visual Canvas..." },
      { at: 100, text: "READY // TRICODE AI" },
    ];

    let current = 0;
    // Fast interval — fills 100% in ~duration ms
    const stepMs = Math.floor(duration / 80); // ~80 ticks
    const increment = 100 / 80;

    const timer = setInterval(() => {
      current = Math.min(current + increment + (Math.random() > 0.5 ? increment * 0.5 : 0), 100);
      const rounded = Math.round(current);
      setProgress(rounded);

      const found = statusMilestones.slice().reverse().find((m) => rounded >= m.at);
      if (found) setStatusText(found.text);

      if (current >= 100) {
        clearInterval(timer);
        setPhase("complete");
      }
    }, stepMs);

    return () => clearInterval(timer);
  }, [isLoading, duration]);

  // After complete → wait briefly → reveal curtains → call onFinished
  useEffect(() => {
    if (phase === "complete") {
      const t = setTimeout(() => setPhase("revealing"), 300);
      return () => clearTimeout(t);
    }
    if (phase === "revealing") {
      const t = setTimeout(() => {
        if (onFinished) onFinished();
      }, 850);
      return () => clearTimeout(t);
    }
  }, [phase, onFinished]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="global-page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9990] pointer-events-none select-none overflow-hidden"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* ═══════════════════════════════════════════════════════
              DUAL SHUTTER CURTAINS — same as LoadingScreen
          ═══════════════════════════════════════════════════════ */}

          {/* TOP CURTAIN */}
          <motion.div
            initial={{ y: "0%" }}
            animate={phase === "revealing" ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#060913] z-20 flex flex-col justify-end border-b border-[#00D2FF]/30 shadow-[0_10px_40px_rgba(0,210,255,0.25)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-[#2563EB]/10 blur-[100px] pointer-events-none" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent shadow-[0_0_15px_#00D2FF]" />
          </motion.div>

          {/* BOTTOM CURTAIN */}
          <motion.div
            initial={{ y: "0%" }}
            animate={phase === "revealing" ? { y: "100%" } : { y: "0%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#060913] z-20 flex flex-col justify-start border-t border-[#7C3AED]/30 shadow-[0_-10px_40px_rgba(124,58,237,0.25)]"
          >
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent shadow-[0_0_15px_#7C3AED]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-[#7C3AED]/10 blur-[100px] pointer-events-none" />
          </motion.div>

          {/* LASER FLASH at seam during reveal */}
          <AnimatePresence>
            {phase === "revealing" && (
              <motion.div
                initial={{ scaleX: 0, opacity: 1 }}
                animate={{ scaleX: 1, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="absolute top-1/2 left-0 right-0 h-[3px] -translate-y-1/2 z-30 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_30px_#00D2FF]"
              />
            )}
          </AnimatePresence>

          {/* ═══════════════════════════════════════════════════════
              LOADING CONTENT — fades out on reveal
          ═══════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={
              phase === "revealing"
                ? { opacity: 0, scale: 1.07, filter: "blur(12px)" }
                : { opacity: 1, scale: 1, filter: "blur(0px)" }
            }
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#070B14] text-white pointer-events-auto"
          >
            {/* Atmospheric ambient glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#2563EB]/15 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#00D2FF]/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#7C3AED]/15 blur-[90px] pointer-events-none" />

            {/* Grid + scanline pattern */}
            <div
              className="absolute inset-0 opacity-[0.13] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,210,255,0.22) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgba(37,99,235,0.22) 1px, transparent 1px)`,
                backgroundSize: "44px 44px",
              }}
            />

            {/* Top telemetry strip */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2.5 text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
              <span className="text-[#E2E8F0] font-bold">PAGE TRANSITION</span>
              <span className="text-[#475569]">|</span>
              <span className="text-[#64748B]">TRICODE-AI-ENGINE v2.6</span>
            </div>

            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase">
              <Activity className="w-3.5 h-3.5 text-[#00D2FF] animate-pulse" />
              <span className="hidden sm:inline text-[#64748B]">STATUS:</span>
              <span className={phase === "complete" ? "text-[#10B981] font-bold" : "text-[#00D2FF] font-bold"}>
                {phase === "complete" ? "AUTHENTICATED" : "ROUTING"}
              </span>
            </div>

            {/* CENTER: Logo Orbital */}
            <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md w-full px-6 text-center">

              {/* Orbital Vessel */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-7 flex items-center justify-center">

                {/* Outer Ambient Aura */}
                <div
                  className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 ${
                    phase === "complete"
                      ? "bg-gradient-to-tr from-[#00D2FF]/50 via-[#2563EB]/40 to-[#10B981]/50 scale-110"
                      : "bg-gradient-to-tr from-[#00D2FF]/30 via-[#2563EB]/25 to-[#7C3AED]/30"
                  }`}
                />

                {/* Ring 1: Cyan rotating */}
                <div className="absolute inset-0 rounded-full border border-[#00D2FF]/35 animate-orbit pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#00D2FF] shadow-[0_0_14px_#00D2FF]" />
                  <div className="absolute bottom-2 left-6 w-1.5 h-1.5 rounded-full bg-[#00D2FF]/70 shadow-[0_0_8px_#00D2FF]" />
                </div>

                {/* Ring 2: Violet reverse */}
                <div className="absolute inset-3.5 sm:inset-4 rounded-full border border-[#7C3AED]/40 animate-orbit-reverse pointer-events-none">
                  <div className="absolute bottom-1 right-2 w-3 h-3 rounded-full bg-[#7C3AED] shadow-[0_0_14px_#7C3AED]" />
                </div>

                {/* Middle dashed ring */}
                <div className="absolute inset-7 sm:inset-8 rounded-full border border-dashed border-[#2563EB]/40 animate-pulse pointer-events-none" />

                {/* Inner glass base */}
                <div className="absolute inset-9 sm:inset-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md pointer-events-none" />

                {/* Core Logo Badge */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={
                    phase === "complete"
                      ? { scale: [1, 1.08, 1.03], transition: { duration: 0.4 } }
                      : { scale: 1, opacity: 1 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0F172A] p-3 sm:p-3.5 border-2 border-[#2563EB] shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent pointer-events-none" />
                  <img
                    src={logoImg}
                    alt="TRICODE AI"
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(37,99,235,0.8)]"
                  />
                </motion.div>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col items-center mb-6">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-white drop-shadow-md">
                    TRICODE
                  </h2>
                  <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-sm bg-[#2563EB]/25 text-[#00D2FF] border border-[#00D2FF]/40 shadow-[0_0_12px_rgba(0,210,255,0.3)]">
                    AI
                  </span>
                </div>
                <p className="text-[11px] tracking-[0.3em] text-[#94A3B8] uppercase font-semibold">
                  Technologies
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-xs sm:max-w-sm flex flex-col gap-2.5">
                <div className="relative w-full h-2.5 rounded-full bg-slate-900/80 overflow-hidden border border-white/10 backdrop-blur-md p-[2px] shadow-inner">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#00D2FF] via-[#2563EB] to-[#7C3AED] relative transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                  >
                    {/* Glowing tip flare */}
                    <div className="absolute right-0 top-0 bottom-0 w-3 bg-white shadow-[0_0_14px_#00D2FF] rounded-full" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-1">
                  <div className="flex items-center gap-2 text-[#94A3B8] text-[11px] truncate pr-2">
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

              {/* Spec Footer */}
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

            {/* Bottom security footer */}
            <div className="absolute bottom-5 sm:bottom-6 text-[10px] font-mono text-[#475569] tracking-wider uppercase">
              [ TRICODE SECURE PROTOCOL // 256-BIT QUANTUM ENCRYPTED ]
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
