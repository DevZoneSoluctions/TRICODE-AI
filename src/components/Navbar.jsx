import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sparkles, Mail, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./Button";
import { siteConfig } from "../data/siteData";
const logoImg = "/tricode-logo-new.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm shadow-blue-600/5"
            : "py-4 sm:py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* TRICODE Brand Logo & Title */}
            <Link
              to="/"
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-xl"
              aria-label="TRICODE AI Technologies Home"
            >
              <img
                src={logoImg}
                alt="TRICODE AI Logo"
                className="h-10 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                style={{ mixBlendMode: "multiply" }}
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-lg sm:text-2xl text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                    TRICODE
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded-sm bg-gradient-to-r from-[#00D2FF]/15 to-[#D946EF]/15 text-[#2563EB] border border-[#00D2FF]/30">
                    AI
                  </span>
                </div>
                <span className="text-[10px] tracking-wider text-[#64748B] font-semibold uppercase hidden sm:block">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E2E8F0] shadow-xs">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-[#2563EB] font-bold bg-[#EFF6FF]"
                        : "text-[#64748B] hover:text-[#0F172A] hover:bg-white"
                    }`
                  }
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-[#EFF6FF] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:block">
                <Button
                  to="/contact"
                  variant="primary"
                  size="sm"
                  icon={ArrowUpRight}
                  className="text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20"
                >
                  Let's Build Together
                </Button>
              </div>

              {/* Designed Ultra-Modern Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="group md:hidden relative flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-white/90 hover:bg-white border border-[#E2E8F0] hover:border-[#00D2FF]/60 shadow-xs hover:shadow-md hover:shadow-cyan-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-all duration-300 cursor-pointer"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {/* 3 Animated Styled Bars */}
                <div className="flex flex-col justify-center items-end gap-1.5 w-5 h-4.5">
                  <span className="w-5 h-[2px] rounded-full bg-gradient-to-r from-[#2563EB] to-[#00D2FF] transition-all duration-300 group-hover:w-5" />
                  <span className="w-3.5 h-[2px] rounded-full bg-[#0F172A] transition-all duration-300 group-hover:w-5 group-hover:bg-[#2563EB]" />
                  <span className="w-5 h-[2px] rounded-full bg-gradient-to-r from-[#00D2FF] to-[#D946EF] transition-all duration-300 group-hover:w-5" />
                </div>
                <span className="text-[11px] font-heading font-extrabold tracking-wider text-[#0F172A] uppercase">
                  Menu
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Right-Side Mobile Drawer ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-[#0F172A]/50 backdrop-blur-sm cursor-pointer"
              aria-hidden="true"
            />

            {/* Drawer Panel Sliding in from Right */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white shadow-2xl border-l border-[#E2E8F0] flex flex-col justify-between overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Drawer"
            >
              {/* Drawer Top Header */}
              <div className="p-5 border-b border-[#E2E8F0] flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <img
                    src={logoImg}
                    alt="TRICODE Logo"
                    className="h-9 w-auto object-contain"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="font-heading font-extrabold text-base text-[#0F172A]">
                        TRICODE
                      </span>
                      <span className="text-[9px] uppercase font-bold tracking-widest px-1 py-0.2 rounded bg-gradient-to-r from-[#00D2FF]/15 to-[#D946EF]/15 text-[#2563EB] border border-[#00D2FF]/30">
                        AI
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="p-5 flex-1 flex flex-col gap-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] px-3 pb-2">
                  Navigation
                </div>

                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? "bg-[#EFF6FF] text-[#2563EB] font-bold shadow-xs border border-blue-100"
                          : "text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#2563EB]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? "text-[#2563EB] translate-x-0.5" : "text-[#CBD5E1]"
                        }`}
                      />
                    </NavLink>
                  );
                })}

                {/* Quick Contact Info Cards */}
                <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex flex-col gap-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] px-3">
                    Direct Contact
                  </div>

                  <a
                    href="https://mail.google.com/mail/?view=cm&to=tricodeaitechnologies@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#334155] hover:border-blue-300 hover:text-[#2563EB] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span className="truncate">{siteConfig.email}</span>
                  </a>

                  <a
                    href="https://wa.me/923114569115"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#F0FDF4] border border-green-200 text-xs text-[#166534] hover:bg-green-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span className="font-semibold">+92 311 4569115 (WhatsApp)</span>
                  </a>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="p-5 border-t border-[#E2E8F0] bg-[#F8FAFC] flex flex-col gap-3">
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  icon={ArrowUpRight}
                  className="w-full justify-center shadow-lg shadow-blue-500/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Build Together
                </Button>

                <div className="text-center text-[11px] text-[#64748B] flex items-center justify-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Engineering What's Next</span>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
