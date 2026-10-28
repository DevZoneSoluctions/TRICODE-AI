import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WHATSAPP_NUMBER = "923114569115"; // +92 311 4569115 without + and spaces
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* ── WhatsApp Floating Button (always visible) ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-[5.5rem] right-6 z-40 cursor-pointer group"
      >
        {/* Infinite ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-50" />
        {/* Second slower ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] animate-ping opacity-20" style={{ animationDuration: "1.8s", animationDelay: "0.4s" }} />

        {/* Main button */}
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/50 hover:shadow-[0_0_32px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300">
          <WhatsAppIcon />
        </span>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#075E54] text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Chat on WhatsApp
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#075E54]" />
        </span>
      </a>

      {/* ── Scroll to Top Button ── */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 cursor-pointer group"
          >
            {/* Spinning gradient ring */}
            <span
              className="absolute -inset-1 rounded-full animate-spin-slow"
              style={{
                background: "conic-gradient(from 0deg, #00D2FF, #2563EB, #D946EF, #00D2FF)",
                filter: "blur(2px)",
              }}
            />
            {/* Inner button */}
            <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#00D2FF] via-[#2563EB] to-[#D946EF] text-white shadow-lg shadow-blue-600/40 hover:shadow-[0_0_28px_rgba(0,210,255,0.65)] hover:scale-110 active:scale-95 transition-all duration-300">
              <ArrowUp className="w-5 h-5 text-white animate-bounce-arrow" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
