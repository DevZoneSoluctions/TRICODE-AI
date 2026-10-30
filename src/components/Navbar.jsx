import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./Button";
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm shadow-blue-600/5"
            : "py-5 bg-transparent"
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
                className="h-11 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
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
            <div className="flex items-center gap-3">
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

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-[#0F172A] hover:text-[#2563EB] hover:bg-[#EFF6FF] border border-[#E2E8F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[60px] sm:top-[68px] max-h-[calc(100vh-70px)] overflow-y-auto z-40 bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-2xl px-5 sm:px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#EFF6FF] text-[#2563EB] font-bold"
                        : "text-[#0F172A] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    )}
                  </NavLink>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#E2E8F0] flex flex-col gap-3">
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  icon={ArrowUpRight}
                  className="w-full justify-center"
                >
                  Let's Build Together
                </Button>
                <div className="text-center text-xs text-[#64748B] flex items-center justify-center gap-1.5 pt-1 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Engineering What's Next</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
