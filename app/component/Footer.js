"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaClinicMedical,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-emerald-950 text-white relative">
      {/* Wave divider at top */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          className="w-full h-12 md:h-16 text-white"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,50 C150,150 350,0 500,50 C700,100 800,0 1000,50 C1200,100 1300,0 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block"
              aria-label="USHA CLINIC Home"
            >
              <div className="bg-white px-3 py-1.5 rounded-xl shadow-md inline-block">
                <Image
                  src="/usha_clinic_logo.png"
                  alt="USHA CLINIC"
                  width={180}
                  height={50}
                  sizes="180px"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-emerald-100/90 text-sm leading-relaxed">
              Providing authentic classical homeopathic treatment in Behala,
              Kolkata since July 1967. Over 46 years of clinical excellence by
              Dr. Atanu Kumar Maitra.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-200">
              <FaClinicMedical />
              <span>Founded by Dr. S.K. Maitra</span>
            </div>
            <div>
              <a
                href="https://wa.me/919830409535"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors"
              >
                <FaWhatsapp className="text-base text-green-400" />
                <span>WhatsApp Helpline</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-emerald-200 tracking-wide uppercase text-xs">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-300 transition-colors"
                >
                  About Dr. Maitra & Legacy
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Specialized Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services#specialties-detail"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Treatment Scope
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-emerald-200 tracking-wide uppercase text-xs">
              Contact & Hours
            </h3>
            <ul className="space-y-3 text-sm text-emerald-100">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-emerald-400 flex-shrink-0" />
                <span className="text-xs leading-relaxed">
                  23/B/13, Ramkrishna Sarani,
                  <br />
                  Vivekananda Pally, Behala,
                  <br />
                  Kolkata - 700060
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 text-emerald-400 flex-shrink-0" />
                <div className="text-xs space-y-0.5">
                  <div>
                    Mobile:{" "}
                    <a
                      href="tel:9830409535"
                      className="hover:text-emerald-300 font-semibold"
                    >
                      9830409535
                    </a>{" "}
                    /{" "}
                    <a
                      href="tel:9230559443"
                      className="hover:text-emerald-300 font-semibold"
                    >
                      9230559443
                    </a>
                  </div>
                  <div>
                    Landline:{" "}
                    <a
                      href="tel:03335948742"
                      className="hover:text-emerald-300"
                    >
                      033-35948742
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:atanumaitra2013@gmail.com"
                  className="hover:text-emerald-300 text-xs"
                >
                  atanumaitra2013@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="mt-0.5 text-emerald-400 flex-shrink-0" />
                <span className="text-xs">
                  Mon - Sat: 9:00 AM – 8:00 PM
                  <br />
                  Sun: 10:00 AM – 2:00 PM (Emergency on Call)
                </span>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-emerald-200 tracking-wide uppercase text-xs">
              Clinic Location
            </h3>
            <div className="h-44 rounded-xl overflow-hidden shadow-lg border border-emerald-700/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0930969822275!2d88.30873799999999!3d22.500689999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b8a95e89345%3A0x6e1fede2aff3f6f7!2sDr.%20Atanu%20Maitra!5e0!3m2!1sen!2sin!4v1752051272727!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-2 text-xs text-emerald-200">
              Beside Kishore Bharati School & Nivedita College
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-emerald-800/80 mt-10 pt-6 text-center text-xs text-emerald-200">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} USHA CLINIC - Dr. Atanu Kumar Maitra,
            DMS, CAH.
          </p>
          <p className="mt-1 text-emerald-300/80">
            Design & Developed By{" "}
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
