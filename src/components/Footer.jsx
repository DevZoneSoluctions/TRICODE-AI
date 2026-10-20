import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "../data/siteData";

// Inline social icons
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-[#E2E8F0] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full glow-ambient-blue pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full glow-ambient-violet pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E2E8F0]">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3.5 mb-5 group">
              <div className="w-11 h-11 rounded-xl bg-[#0F172A] p-1.5 border border-[#CBD5E1] shadow-sm shadow-blue-500/15 group-hover:scale-105 group-hover:border-[#2563EB] transition-all duration-300 flex items-center justify-center">
                <img
                  src="/favicon.png"
                  alt="TRICODE AI Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-xl text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                    TRICODE
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded-sm bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                    AI
                  </span>
                </div>
                <span className="text-[11px] tracking-widest text-[#64748B] font-semibold uppercase">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-sm mb-6 font-normal">
              Engineering intelligent technology, exceptional user interfaces, and custom digital software built to move forward-thinking enterprises ahead.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center text-[#0F172A] hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all"
                aria-label="Twitter / X"
              >
                <XTwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#0F172A] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", to: "/" },
                { name: "Featured Projects", to: "/projects" },
                { name: "Core Services", to: "/services" },
                { name: "Our Team & Values", to: "/team" },
                { name: "Contact Studio", to: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors inline-flex items-center gap-1 group font-medium"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#2563EB]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#0F172A] mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5">
              {[
                "AI & Intelligent Agents",
                "Web Applications",
                "Mobile Engineering",
                "UI/UX Product Design",
                "Cloud & Distributed APIs",
                "Custom Software"
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors font-medium"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#0F172A] mb-4">
              Studio Direct
            </h3>
            <div className="space-y-3 text-sm text-[#64748B]">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#2563EB] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-[#94A3B8]">Inquiries &amp; RFPs</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#0F172A] font-semibold hover:text-[#2563EB] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#7C3AED] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-[#94A3B8]">Direct Line</div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-[#0F172A] font-semibold hover:text-[#7C3AED] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00D2FF] mt-1 shrink-0 text-[#0284C7]" />
                <div>
                  <div className="text-xs text-[#94A3B8]">Headquarters</div>
                  <p className="text-[#0F172A] font-semibold">
                    {siteConfig.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#2563EB] transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-[#2563EB] transition-colors font-medium">
              Terms of Engagement
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[11px] font-semibold text-[#2563EB]">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              Available for New Projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
