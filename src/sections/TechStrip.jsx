import { useState } from "react";
import {
  Smartphone,
  Globe,
  Server,
  Code2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Flame,
  Box,
  Cloud,
  Terminal,
  Workflow
} from "lucide-react";

// Curated languages and technologies requested by user (Flutter app dev, frontend dev, backend dev)
const mobileTech = [
  { name: "Flutter", icon: Smartphone, category: "Mobile Dev", color: "from-[#00D2FF] to-[#2563EB]" },
  { name: "Dart", icon: Code2, category: "Mobile Dev", color: "from-[#00D2FF] to-[#0284C7]" },
  { name: "Swift (iOS)", icon: Smartphone, category: "Mobile Dev", color: "from-[#2563EB] to-[#7C3AED]" },
  { name: "SwiftUI", icon: Smartphone, category: "Mobile Dev", color: "from-[#0284C7] to-[#2563EB]" },
  { name: "Kotlin (Android)", icon: Smartphone, category: "Mobile Dev", color: "from-[#7C3AED] to-[#D946EF]" },
  { name: "Jetpack Compose", icon: Smartphone, category: "Mobile Dev", color: "from-[#2563EB] to-[#9333EA]" },
  { name: "React Native", icon: Layers, category: "Mobile Dev", color: "from-[#00D2FF] to-[#2563EB]" },
  { name: "Expo", icon: Layers, category: "Mobile Dev", color: "from-[#0F172A] to-[#2563EB]" },
  { name: "BLoC State", icon: Workflow, category: "Mobile Dev", color: "from-[#2563EB] to-[#00D2FF]" },
  { name: "Riverpod", icon: Workflow, category: "Mobile Dev", color: "from-[#00D2FF] to-[#7C3AED]" },
  { name: "Firebase Mobile", icon: Zap, category: "Mobile Dev", color: "from-[#D946EF] to-[#2563EB]" },
];

const frontendTech = [
  { name: "React 19", icon: Globe, category: "Frontend Dev", color: "from-[#00D2FF] to-[#2563EB]" },
  { name: "Next.js 15", icon: Globe, category: "Frontend Dev", color: "from-[#0F172A] to-[#2563EB]" },
  { name: "TypeScript", icon: Code2, category: "Frontend Dev", color: "from-[#0284C7] to-[#2563EB]" },
  { name: "JavaScript", icon: Code2, category: "Frontend Dev", color: "from-[#2563EB] to-[#D946EF]" },
  { name: "Tailwind CSS v4", icon: Sparkles, category: "Frontend Dev", color: "from-[#00D2FF] to-[#0284C7]" },
  { name: "Vue.js 3", icon: Globe, category: "Frontend Dev", color: "from-[#00D2FF] to-[#2563EB]" },
  { name: "Nuxt 3", icon: Globe, category: "Frontend Dev", color: "from-[#0284C7] to-[#7C3AED]" },
  { name: "Three.js & WebGL", icon: Box, category: "Frontend Dev", color: "from-[#7C3AED] to-[#D946EF]" },
  { name: "Motion Animations", icon: Sparkles, category: "Frontend Dev", color: "from-[#D946EF] to-[#00D2FF]" },
  { name: "Redux Toolkit", icon: Layers, category: "Frontend Dev", color: "from-[#7C3AED] to-[#2563EB]" },
  { name: "Zustand", icon: Layers, category: "Frontend Dev", color: "from-[#2563EB] to-[#00D2FF]" },
  { name: "HTML5 & CSS3", icon: Code2, category: "Frontend Dev", color: "from-[#00D2FF] to-[#D946EF]" },
];

const backendTech = [
  { name: "Node.js", icon: Server, category: "Backend Dev", color: "from-[#00D2FF] to-[#2563EB]" },
  { name: "Express.js", icon: Server, category: "Backend Dev", color: "from-[#0F172A] to-[#0284C7]" },
  { name: "Python", icon: Terminal, category: "Backend Dev", color: "from-[#00D2FF] to-[#2563EB]" },
  { name: "FastAPI", icon: Terminal, category: "Backend Dev", color: "from-[#0284C7] to-[#7C3AED]" },
  { name: "Django", icon: Terminal, category: "Backend Dev", color: "from-[#0F172A] to-[#2563EB]" },
  { name: "Go (Golang)", icon: Cpu, category: "Backend Dev", color: "from-[#00D2FF] to-[#0284C7]" },
  { name: "Rust", icon: Flame, category: "Backend Dev", color: "from-[#D946EF] to-[#2563EB]" },
  { name: "NestJS", icon: Server, category: "Backend Dev", color: "from-[#7C3AED] to-[#D946EF]" },
  { name: "PostgreSQL", icon: Database, category: "Backend Dev", color: "from-[#0284C7] to-[#2563EB]" },
  { name: "MongoDB", icon: Database, category: "Backend Dev", color: "from-[#00D2FF] to-[#2563EB]" },
  { name: "Redis", icon: Database, category: "Backend Dev", color: "from-[#D946EF] to-[#7C3AED]" },
  { name: "Docker & K8s", icon: Cloud, category: "Backend Dev", color: "from-[#00D2FF] to-[#2563EB]" },
];

export default function TechStrip() {
  const [isPaused, setIsPaused] = useState(false);

  // Grouped tracks for infinite auto-scrolling carousel
  const track1Items = [...mobileTech, ...frontendTech.slice(0, 6), ...backendTech.slice(0, 6)];
  const track2Items = [...frontendTech.slice(6), ...backendTech.slice(6), ...mobileTech.slice(0, 6)];

  return (
    <section className="relative w-full bg-white py-8 lg:py-10 border-y border-[#E2E8F0] overflow-hidden select-none">
      {/* TRICODE Brand Logo Ambient Glow */}
      <div className="absolute -top-16 left-1/4 w-96 h-96 rounded-full bg-[#00D2FF]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-16 right-1/4 w-96 h-96 rounded-full bg-[#D946EF]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none -z-10" />

      {/* Simple, Clean Header: Just "Technology Ecosystem" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00D2FF] via-[#2563EB] to-[#D946EF] animate-pulse" />
          <h2 className="text-xs sm:text-sm font-bold text-[#0F172A] uppercase tracking-widest">
            Technology Ecosystem
          </h2>
        </div>
      </div>

      {/* Infinite Looping Circular Pill Carousel Tracks */}
      <div 
        className="relative w-full overflow-hidden space-y-3.5 py-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Seamless Gradient Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Track 1: Smooth Continuous Auto-Scroll Left */}
        <div className="flex overflow-hidden">
          <div 
            className="animate-marquee-track pause-on-hover flex gap-3.5 items-center"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...track1Items, ...track1Items].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`t1-${tech.name}-${idx}`}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-[#00D2FF]/60 hover:shadow-[0_0_18px_rgba(0,210,255,0.22)] transition-all duration-300 hover:scale-105 shrink-0 cursor-pointer group"
                >
                  {/* Circular Icon Avatar in TRICODE Logo Gradient */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-tr ${tech.color} text-white shadow-xs group-hover:scale-110 transition-transform`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  
                  {/* Language Name */}
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#0F172A] whitespace-nowrap group-hover:text-[#0284C7] transition-colors">
                    {tech.name}
                  </span>

                  {/* Category Pill */}
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#00D2FF]/15 group-hover:text-[#0284C7] transition-colors">
                    {tech.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Track 2: Smooth Continuous Auto-Scroll Right */}
        <div className="flex overflow-hidden">
          <div 
            className="animate-marquee-track-reverse pause-on-hover flex gap-3.5 items-center"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...track2Items, ...track2Items].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`t2-${tech.name}-${idx}`}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-[#D946EF]/60 hover:shadow-[0_0_18px_rgba(217,70,239,0.22)] transition-all duration-300 hover:scale-105 shrink-0 cursor-pointer group"
                >
                  {/* Circular Icon Avatar in TRICODE Logo Gradient */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-tr ${tech.color} text-white shadow-xs group-hover:scale-110 transition-transform`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  
                  {/* Language Name */}
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#0F172A] whitespace-nowrap group-hover:text-[#9333EA] transition-colors">
                    {tech.name}
                  </span>

                  {/* Category Pill */}
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#D946EF]/15 group-hover:text-[#9333EA] transition-colors">
                    {tech.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}