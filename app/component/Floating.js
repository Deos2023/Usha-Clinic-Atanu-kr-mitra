"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhone, FaWhatsapp, FaArrowUp, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

// Floating Buttons
export function FloatingButtons() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919830409535"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Call Button */}
      <a
        href="tel:9830409535"
        className="bg-teal-700 text-white p-4 rounded-full shadow-lg hover:bg-teal-800 transition-colors"
        aria-label="Call us"
      >
        <FaPhone className="text-2xl" />
      </a>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="bg-white text-teal-700 p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors border border-teal-200"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}

// Footer Section
export function FooterWithMap() {
  return (
    <footer className="bg-teal-900 text-white relative">
      <svg
        className="absolute top-0 left-0 w-full rotate-180"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
        />
      </svg>

      <div className="container mx-auto px-8 md:px-20 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Joy Health Cares</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-teal-300 mt-1 mr-3" />
                <div>
                  <p>860/1, Sreenagar Main Road</p>
                  <p>Sreenagar West, Srinagar</p>
                  <p>Panchasayar, Kolkata - 700094</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-teal-300 mr-3" />
                <div>
                  <a href="tel:9674998665" className="hover:text-teal-300">9674998665</a>,{" "}
                  <a href="tel:8981617236" className="hover:text-teal-300">8981617236</a>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-teal-300 mr-3" />
                <a href="mailto:joyhealthcareskol@gmail.com" className="hover:text-teal-300">
                  joyhealthcareskol@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaClock className="text-teal-300 mr-3" />
                <p>24/7 Emergency Services Available</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-teal-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-teal-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-teal-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-teal-300">Contact</Link></li>
              <li><Link href="/equipment" className="hover:text-teal-300">Medical Equipment</Link></li>
            </ul>
          </div>

          {/* Map Embed */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Location</h3>
            <div className="h-64 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.123456789012!2d88.12345678901234!3d22.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzI0LjQiTiA4OMKwMDcnMjQuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-800 mt-12 pt-6 text-center text-teal-300">
          <p>© {new Date().getFullYear()} Joy Health Cares. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
