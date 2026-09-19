"use client";
import { useState, useEffect } from "react";
import { FaPhone, FaWhatsapp, FaArrowUp } from "react-icons/fa";

// Floating Quick Action Buttons
export function FloatingButtons() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollButton(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919830409535"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-green-500 hover:bg-green-600 text-white p-3.5 sm:p-4 rounded-full shadow-xl hover:shadow-green-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
        title="Chat with Dr. Maitra on WhatsApp"
      >
        <FaWhatsapp className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform" />
      </a>

      {/* Call Button */}
      <a
        href="tel:9830409535"
        className="pointer-events-auto bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white p-3.5 sm:p-4 rounded-full shadow-xl hover:shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Call Usha Clinic"
        title="Call 9830409535"
      >
        <FaPhone className="text-xl sm:text-2xl group-hover:scale-110 transition-transform" />
      </a>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`pointer-events-auto bg-slate-900/90 hover:bg-slate-900 text-emerald-400 hover:text-emerald-300 p-3.5 sm:p-4 rounded-full shadow-2xl hover:shadow-emerald-500/20 border border-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-500 flex items-center justify-center group ${
          showScrollButton
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-75 pointer-events-none"
        }`}
        aria-label="Scroll smoothly to top"
        title="Back to top"
      >
        <FaArrowUp className="text-lg sm:text-xl group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
}
