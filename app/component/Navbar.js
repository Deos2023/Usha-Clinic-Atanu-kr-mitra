"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  Info,
  Stethoscope,
  PhoneCall,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Helper to get active styles for desktop
  const linkClasses = (href) =>
    `relative transition-colors duration-200 text-sm lg:text-base tracking-wide font-[family-name:var(--font-merienda)] ${
      pathname === href
        ? "text-teal-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-teal-400 font-semibold"
        : "text-gray-100 hover:text-teal-400 font-normal"
    }`;

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      desc: "Classical homeopathy since 1967",
    },
    {
      href: "/about",
      label: "About Us",
      icon: Info,
      desc: "3 Generations of healing legacy",
    },
    {
      href: "/services",
      label: "Services & Diseases",
      icon: Stethoscope,
      desc: "Specialized chronic treatments",
    },
    {
      href: "/contact",
      label: "Contact & Location",
      icon: PhoneCall,
      desc: "Visit our Kolkata clinic",
    },
  ];

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-emerald-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center"
                aria-label="USHA CLINIC Home"
                onClick={() => setIsOpen(false)}
              >
                <div className="bg-white/95 hover:bg-white px-2.5 py-1 rounded-lg shadow-sm transition-all flex items-center">
                  <Image
                    src="/usha_clinic_logo.png"
                    alt="USHA CLINIC"
                    width={160}
                    height={45}
                    className="h-8 sm:h-9 w-auto object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClasses(item.href)}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="tel:9830409535"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-[family-name:var(--font-merienda)] font-medium text-sm shadow-md transition-all hover:scale-105"
              >
                <FaPhoneAlt className="w-3.5 h-3.5" />
                <span>9830409535</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="https://wa.me/919830409535?text=Hello%20Dr.%20Atanu%20Kumar%20Maitra,%20I%20would%20like%20to%20consult%20at%20USHA%20CLINIC"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                aria-label="WhatsApp Quick Consultation"
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-400" />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-white hover:text-emerald-400 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-emerald-300" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown Panel */}
        {isOpen && (
          <div className="md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto bg-slate-950/95 backdrop-blur-2xl border-b border-emerald-500/20 shadow-2xl transition-all duration-300 animate-fade-in">
            <div className="px-4 pt-3 pb-6 space-y-4">
              {/* Navigation Links */}
              <div className="space-y-2">
                <p className="px-3 text-xs font-bold uppercase tracking-wider text-emerald-400/80 font-[family-name:var(--font-merienda)]">
                  Navigation
                </p>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-emerald-600/30 to-green-600/20 border border-emerald-500/40 text-emerald-200"
                          : "bg-white/5 hover:bg-white/10 text-slate-200 border border-white/5"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isActive
                            ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                            : "bg-white/10 text-emerald-400"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-[family-name:var(--font-merienda)] font-semibold text-base leading-tight text-white flex items-center justify-between">
                          <span>{item.label}</span>
                          <ArrowRight className="w-4 h-4 text-emerald-400 opacity-60" />
                        </div>
                        <p className="text-xs text-emerald-200/70 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Direct Quick Actions */}
              <div className="pt-2 border-t border-white/10">
                <p className="px-3 text-xs font-bold uppercase tracking-wider text-emerald-400/80 mb-2.5 font-[family-name:var(--font-merienda)]">
                  Direct Contact & Booking
                </p>

                <div className="grid grid-cols-2 gap-2.5 mb-3">
                  <a
                    href="tel:9830409535"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/30 text-white font-[family-name:var(--font-merienda)] font-medium text-sm transition-all"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call 9830409535</span>
                  </a>

                  <a
                    href="https://wa.me/919830409535?text=Hello%20Dr.%20Atanu%20Kumar%20Maitra,%20I%20would%20like%20to%20consult%20at%20USHA%20CLINIC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-green-500/30 hover:bg-green-500/40 border border-green-400/30 text-white font-[family-name:var(--font-merienda)] font-medium text-sm transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4 text-green-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Clinic Quick Info Card */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900/80 border border-emerald-500/20 text-xs text-slate-300 space-y-2.5 shadow-inner">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white block font-[family-name:var(--font-merienda)]">
                        Clinic Timings
                      </span>
                      <span className="text-emerald-100/80">
                        Mon–Sat: 9:00 AM – 8:00 PM
                      </span>
                      <span className="block text-emerald-100/70">
                        Sun: 10:00 AM – 2:00 PM
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
                    <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white block font-[family-name:var(--font-merienda)]">
                        Location
                      </span>
                      <span className="text-emerald-100/80">
                        Behala, Kolkata • Opp. Tram Depot (Diamond Harbour Rd)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Book Appointment Full Button */}
                <div className="mt-3">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all active:scale-[0.98] font-[family-name:var(--font-merienda)]"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-200" />
                    <span>Book Appointment with Dr. Maitra</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop overlay for outside click */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          aria-hidden="true"
        />
      )}
    </>
  );
}
