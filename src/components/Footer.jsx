import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../data/siteData";
const logoImg = "/favicon.png";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XTwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "Services", to: "/services" },
  { name: "Team", to: "/team" },
  { name: "Contact", to: "/contact" },
];

const capabilities = [
  { name: "Mobile Apps", to: "/services" },
  { name: "Web Development", to: "/services" },
  { name: "Digital Marketing", to: "/services" },
  { name: "UI/UX Design", to: "/services" },
  { name: "Cloud & DevOps", to: "/services" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E2E8F0]">
      
      {/* ─── Main Grid ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        
        {/* Top section: Brand + Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 pb-10 border-b border-[#E2E8F0]">

          {/* ── Column 1: Brand ─────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="flex flex-col items-center sm:items-start gap-2 mb-4 group">
              <img
                src={logoImg}
                alt="TRICODE Logo"
                className="h-11 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(0,210,255,0.25)] group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-lg text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                    TRICODE
                  </span>
                  <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-gradient-to-r from-[#00D2FF]/15 to-[#D946EF]/15 text-[#2563EB] border border-[#00D2FF]/30">
                    AI
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-[#64748B] font-semibold uppercase">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#64748B] leading-relaxed mb-5 max-w-xs mx-auto sm:mx-0">
              Innovative Mobile Apps, Powerful Websites & Result-Driven Digital Marketing — Embracing AI to Empower Businesses.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 justify-center sm:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#0F172A] hover:border-[#0F172A] transition-all"
              >
                <XTwitterIcon />
              </a>
            </div>
          </div>

          {/* ── Column 2: Quick Links ───────────────────── */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#0F172A] mb-4 border-b border-[#E2E8F0] pb-2 w-full text-center sm:text-left">
              Explore
            </h3>
            <ul className="space-y-2.5 w-full">
              {navLinks.map((item) => (
                <li key={item.name} className="flex justify-center sm:justify-start">
                  <Link
                    to={item.to}
                    className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-[#2563EB]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Capabilities ─────────────────── */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#0F172A] mb-4 border-b border-[#E2E8F0] pb-2 w-full text-center sm:text-left">
              Capabilities
            </h3>
            <ul className="space-y-2.5 w-full">
              {capabilities.map((item) => (
                <li key={item.name} className="flex justify-center sm:justify-start">
                  <Link
                    to={item.to}
                    className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-[#2563EB]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact ──────────────────────── */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#0F172A] mb-4 border-b border-[#E2E8F0] pb-2 w-full text-center sm:text-left">
              Contact Us
            </h3>
            <div className="space-y-3.5 text-sm text-[#64748B] w-full">

              {/* Email — clicking opens Gmail compose directly */}
              <a
                href="https://mail.google.com/mail/?view=cm&to=tricodeaitechnologies@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#2563EB] transition-colors group justify-center sm:justify-start"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-blue-100 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                </div>
                <span className="font-medium group-hover:text-[#2563EB] break-all text-left">
                  tricodeaitechnologies@gmail.com
                </span>
              </a>

              {/* WhatsApp — clicking opens WhatsApp directly */}
              <a
                href="https://wa.me/923114569115"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#25D366] transition-colors group justify-center sm:justify-start"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] border border-green-100 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#25D366]" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="font-medium group-hover:text-[#25D366]">
                  +92 311 4569115 (WhatsApp)
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-2.5 justify-center sm:justify-start">
                <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] border border-cyan-100 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#00D2FF]" />
                </div>
                <span className="font-medium leading-relaxed text-left">
                  {siteConfig.address}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* ─── Bottom Bar ──────────────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <span className="text-center sm:text-left">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </span>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="hover:text-[#0F172A] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-[#0F172A] transition-colors">
              Terms of Service
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[11px] font-semibold text-[#16A34A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
              Available for Work
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}