import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  Sparkles, CheckCircle2, Crown, Users, ArrowRight, Target, Handshake, 
  Lightbulb, HeartHandshake, Mail, Quote, ShieldCheck, Code2, Smartphone, ShoppingBag, Megaphone, Zap, Activity
} from "lucide-react";
import ContactCTA from "../sections/ContactCTA";
import Button from "../components/Button";
import { teamMembers } from "../data/siteData";

/* ------------------------------------------------------------------ */
/* Custom Brand Icons                                                  */
/* ------------------------------------------------------------------ */
function GithubIcon({ size = 16, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.7 1.2 3.3 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Animated Count-Up                                                    */
/* ------------------------------------------------------------------ */
function AnimatedCounterBadge({ target = 10 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / target), 30);
    setCount(0);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex items-center justify-center">
      <span className="text-5xl sm:text-6xl font-heading font-extrabold text-white tracking-tighter">
        {count}
      </span>
      <span className="text-4xl sm:text-5xl font-heading font-extrabold text-[#00D2FF]">+</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Member Avatar                                                       */
/* ------------------------------------------------------------------ */
function MemberAvatar({ member, isCeo = false }) {
  const [hasError, setHasError] = useState(false);
  const photoUrl = member.image || `/images/team/${member.id}.jpg`;

  // Role-based icon mapping for members without photos
  const roleIconMap = {
    "sufyan": <Megaphone className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg" />,
  };
  const roleIcon = roleIconMap[member.id];

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-50">
      {!hasError ? (
        <img
          src={photoUrl}
          alt={member.name}
          onError={() => setHasError(true)}
          style={{
            objectPosition: member.objectPosition || "center 15%",
            filter: isCeo ? "brightness(1.08) contrast(1.05) saturate(1.02)" : "none"
          }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${member.gradient || "from-[#0F172A] to-[#1E293B]"} text-white p-6`}>
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/25 mb-3 shadow-xl">
            {isCeo
              ? <Crown className="w-9 h-9 text-[#00D2FF]" />
              : roleIcon
                ? roleIcon
                : <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white">{member.initials}</span>
            }
          </div>
          <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase">{member.department}</span>
        </div>
      )}
    </div>
  );
}


/* ------------------------------------------------------------------ */
/* 3D Tilt & Glassmorphism Team Card                                   */
/* ------------------------------------------------------------------ */
function TeamCard({ member, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["7deg", "-7deg"]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-7deg", "7deg"]), { stiffness: 300, damping: 20 });

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    x.set(0); y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative w-full [perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-lg shadow-gray-200/50 bg-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/20 h-full w-full"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([mvx, mvy]) => `radial-gradient(400px circle at ${mvx}px ${mvy}px, rgba(0, 210, 255, 0.15), transparent 80%)`
            ),
          }}
        />

        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F8FAFC]">
          <MemberAvatar member={member} />
          
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-[#00D2FF] hover:border-[#00D2FF] transition-colors shadow-sm">
                <LinkedinIcon size={16} />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-[#00D2FF] hover:border-[#00D2FF] transition-colors shadow-sm">
                <GithubIcon size={16} />
              </a>
            )}
            <a href={`mailto:${member.email || "tricodeaitechnologies@gmail.com"}`} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-[#00D2FF] hover:border-[#00D2FF] transition-colors shadow-sm">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#00D2FF]/20 border border-[#00D2FF]/30 mb-2">
              <span className="text-[9px] font-bold tracking-widest text-white uppercase">{member.department || "ENGINEERING"}</span>
            </div>
            <h4 className="font-heading font-extrabold text-xl text-white leading-tight drop-shadow-sm">{member.name}</h4>
            <p className="text-xs text-white/90 font-medium mt-0.5 drop-shadow-sm">{member.role}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Page                                                            */
/* ------------------------------------------------------------------ */
export default function Team() {
  useEffect(() => {
    document.title = "Executive Leadership & Team — TRICODE AI Technologies";
  }, []);

  // CEO Find
  const ceo = teamMembers.find((m) => m.isLeader);
  
  // TEAM ORDER CUSTOMIZE KIYA HAI (Sajid -> Adeeba -> Sehar -> Salman -> Bisma -> Sufyan)
  const coreMembers = [
    teamMembers.find(m => m.id === "sajid"),
    teamMembers.find(m => m.id === "adeeba"),
    teamMembers.find(m => m.id === "sehar"),
    teamMembers.find(m => m.id === "salman"),
    teamMembers.find(m => m.id === "bisma"),
    teamMembers.find(m => m.id === "sufyan"), // Sufyan yahan add hoga
  ].filter(Boolean); // Filter boolean taake undefined error na aaye

  const values = [
    { number: "01", title: "Excellence", icon: Target, accent: "#2563EB", description: "Zero-compromise engineering quality and architectural precision in every product we ship." },
    { number: "02", title: "Integrity", icon: Handshake, accent: "#16A34A", description: "Full sprint transparency, honest timelines, and verified deliverables — every single time." },
    { number: "03", title: "Innovation", icon: Lightbulb, accent: "#7C3AED", description: "Autonomous AI agents and modern frameworks engineered to drive real operational impact." },
    { number: "04", title: "Collaboration", icon: HeartHandshake, accent: "#EA580C", description: "A unified, high-velocity engineering extension that works directly with your product leaders." },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 bg-gradient-to-b from-white to-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#2563EB]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] rounded-full bg-[#7C3AED]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl z-10">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] backdrop-blur-md border border-[#BFDBFE] text-xs font-semibold text-[#2563EB] mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="tracking-widest">LEADERSHIP &amp; ENGINEERING CULTURE</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-[#0F172A] mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.05]">
                Executive <br />
                <span className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent">Leadership.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-10 max-w-lg">
                Meet the visionary leaders and senior engineers driving strategic app development, enterprise cloud architecture, and high-velocity digital products.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="flex items-center gap-4 flex-wrap">
                <Button to="/contact" variant="primary" size="md">Work With Us</Button>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors">
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right Side Visual */}
            <div className="relative h-[400px] lg:h-[550px] hidden lg:flex items-center justify-center [perspective:1200px]">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[450px] h-[450px] rounded-full border border-[#2563EB]/10 border-dashed" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[350px] h-[350px] rounded-full border border-[#7C3AED]/10" />
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-[#2563EB]/30 to-[#00D2FF]/30 blur-[80px]" />

              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative z-30 w-[320px] bg-[#0B1120] rounded-2xl shadow-2xl shadow-blue-900/40 border border-[#1E293B] overflow-hidden">
                <div className="flex items-center px-4 py-3 bg-[#0F172A] border-b border-[#1E293B]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="mx-auto text-[10px] text-[#64748B] font-mono tracking-wider">tricode_app.dart</div>
                </div>
                <div className="p-4 font-mono text-xs leading-relaxed text-[#94A3B8]">
                  <p><span className="text-[#7C3AED]">import</span> &#123; <span className="text-[#00D2FF]">Scale</span> &#125; <span className="text-[#7C3AED]">from</span> <span className="text-[#16A34A]">'flutter'</span>;</p>
                  <p className="mt-2"><span className="text-[#7C3AED]">const</span> team = <span className="text-[#7C3AED]">new</span> <span className="text-[#00D2FF]">Team</span>();</p>
                  <p className="mt-2"><span className="text-[#64748B]">// Build the future</span></p>
                  <p className="mt-1">team.<span className="text-[#00D2FF]">deploy</span>(<span className="text-[#16A34A]">'enterprise'</span>);</p>
                  <div className="mt-4 flex items-center gap-2 text-[#16A34A]">
                    <CheckCircle2 className="w-3 h-3" /> <span className="text-[10px]">Build successful in 0.8s</span>
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [15, -15, 15], x: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-12 left-0 z-40 bg-white/90 backdrop-blur-lg p-3 rounded-2xl shadow-xl border border-[#E2E8F0] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F172A] leading-tight">Backend Engine</p>
                  <p className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider">Optimized</p>
                </div>
              </motion.div>

              <motion.div animate={{ y: [-15, 15, -15], x: [5, -5, 5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-16 right-0 z-40 bg-white/90 backdrop-blur-lg p-3 rounded-2xl shadow-xl border border-[#E2E8F0] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F172A] leading-tight">Flutter Apps</p>
                  <p className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider">Deploying...</p>
                </div>
              </motion.div>

              <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-24 right-10 z-20 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-[#E2E8F0]">
                <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              </motion.div>

              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-24 left-12 z-20 w-10 h-10 bg-[#0B1120] rounded-xl shadow-lg flex items-center justify-center border border-[#1E293B]">
                <Activity className="w-5 h-5 text-[#00D2FF]" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CEO SPOTLIGHT (Updated for Flutter App Dev) */}
      {ceo && (
        <section className="relative py-20 lg:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-bold text-[#2563EB] mb-3">
                <Crown className="w-3.5 h-3.5" /><span>ABOUT THE FOUNDER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight">
                A Word From Our <span className="gradient-text">Founder</span>
              </h2>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative bg-white rounded-2xl sm:rounded-[2.5rem] border border-[#E2E8F0] shadow-2xl shadow-blue-900/5 p-5 sm:p-10 lg:p-14 max-w-6xl mx-auto overflow-hidden sm:overflow-visible">
              <Quote className="absolute -top-4 left-4 sm:-top-6 sm:left-8 w-10 h-10 sm:w-16 sm:h-16 text-[#2563EB]/10 rotate-180" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
                  <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-blue-500/10 border-4 border-white group">
                    <MemberAvatar member={ceo} isCeo={true} />
                    {/* Clean border ring with NO dark gradient covering face */}
                    <div className="absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-slate-900/10 pointer-events-none" />
                    <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#00D2FF] flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/20">
                          <Crown className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left truncate">
                          <p className="text-[10px] font-bold tracking-widest text-[#2563EB] uppercase">Founder &amp; CEO</p>
                          <p className="text-sm font-heading font-extrabold text-[#0F172A] truncate">{ceo.name}</p>
                        </div>
                      </div>
                      <ShieldCheck className="w-6 h-6 text-[#2563EB]" />
                    </div>
                  </div>
                </div>

                {/* UPDATED CEO CONTENT FOR FLUTTER APP DEV */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2">FOUNDER &amp; CEO</span>
                  <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] tracking-tight mb-5">{ceo.name}</h3>
                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-4">
                    {ceo.name} founded TRICODE with a clear vision: build high-performance mobile apps and digital platforms that modern businesses need to scale. With over <strong className="text-[#0F172A]">10+ years of experience</strong> in mobile application engineering and full-stack development, he leads multi-disciplinary engineering teams that ship with precision.
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    His leadership blends rigorous technical craftsmanship in Flutter & Dart with genuine client partnership. Having successfully delivered solutions for <strong className="text-[#0F172A]">100+ clients</strong>, every deployment is measured not just by delivery, but by the measurable business value it creates.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                    {["Flutter & Dart Expertise", "Enterprise Systems Scaling", "Mobile App Architecture", "Long-Term Client Partnership"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F172A]">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0" /><span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="w-full h-px bg-[#E2E8F0] mb-6" />

                  <div className="grid grid-cols-3 gap-2 sm:gap-6 w-full text-center sm:text-left">
                    {[{ value: "10+", label: "Years Exp.", color: "#0F172A" }, { value: "100+", label: "Clients Served", color: "#0F172A" }, { value: "99.8%", label: "Success Rate", color: "#2563EB" }].map((s) => (
                      <div key={s.label}>
                        <div className="text-lg xs:text-2xl sm:text-3xl font-heading font-extrabold" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 3. TEAM INTRO */}
      <section className="pb-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-white border border-[#E2E8F0] p-8 sm:p-12 shadow-sm max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-bold text-[#2563EB] mb-4">
              <Users className="w-3.5 h-3.5" /><span>ABOUT OUR TEAM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0F172A] tracking-tight mb-4">
              Meet The People Behind <span className="gradient-text">TRICODE</span>
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-3xl">
              We are a passionate team of specialized backend developers, mobile Flutter engineers, modern Shopify architects, and growth managers dedicated to engineering high-availability systems. Our mission is driven by technical craftsmanship, measurable reliability, and turning visionary concepts into seven-figure digital realities.
            </p>
          </div>
        </div>
      </section>

      {/* 4. TEAM CARDS (UPDATED ORDER) */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight">
              Our Engineering <span className="gradient-text">Specialists</span>
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Experienced professionals committed to turning your product and scaling goals into sustainable success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {coreMembers.map((member, idx) => (
              <TeamCard key={member.id} member={member} index={idx} />
            ))}

            {/* Growing Team Card */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: coreMembers.length * 0.08 }} className="group relative rounded-3xl overflow-hidden bg-[#0B1120] border border-[#1E293B] p-6 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-all duration-500 min-h-[400px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#00D2FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#00D2FF] flex items-center justify-center text-white mb-5 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Users className="w-8 h-8" />
                </div>
                <AnimatedCounterBadge target={10} />
                <h4 className="font-heading font-extrabold text-base text-white mt-2 mb-1">Growing Team</h4>
                <p className="text-xs text-[#94A3B8] max-w-[220px] leading-relaxed mb-5">Specialized Engineers &amp; Modern Developers</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D2FF] group-hover:text-white transition-colors">
                  <span>Join Our Mission</span><ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. VALUES */}
      <section className="py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">OUR VALUES</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight mt-4">
              What Drives <span className="gradient-text">Our Team</span>
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              These core values guide everything we do and build at TRICODE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="group relative rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white hover:shadow-xl transition-all duration-300 p-7 flex items-start gap-5">
                  <div className="text-4xl font-heading font-black opacity-20 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" style={{ color: val.accent }}>{val.number}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${val.accent}15`, color: val.accent }}>
                        <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                      </div>
                      <h3 className="font-heading font-extrabold text-lg text-[#0F172A]">{val.title}</h3>
                    </div>
                    <p className="text-sm text-[#64748B] leading-relaxed">{val.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}