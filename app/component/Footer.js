"use client";
import Link from "next/link";
import { 
  FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, 
  FaFacebook, FaTwitter, FaInstagram, FaClinicMedical 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      {/* Wave divider at top */}
      <svg 
        className="w-full"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill="#ffffff" 
          d="M0,50 C150,150 350,0 500,50 C700,100 800,0 1000,50 C1200,100 1300,0 1440,50 L1440,100 L0,100 Z"
        />
      </svg>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">USHA CLINIC</h3>
            <p className="mb-4">
              Providing classical homeopathic treatment in Kolkata since 1967.
            </p>
            <div className="flex items-center mb-2">
              <FaClinicMedical className="mr-2" />
              <span>Founded by Dr. S.K. Maitra</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-green-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-green-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-300">About Dr. Maitra</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-300">Our Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-300">Book Appointment</Link>
              </li>
              <li>
                <Link href="/treatment" className="hover:text-green-300">Treatment Areas</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>
                  23/B/13, Ramkrishna Sarani,<br />
                  Vivekananda Pally, Behala,<br />
                  Kolkata - 700060
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <div>
                  <a href="tel:9830409535" className="hover:text-green-300 block">9830409535</a>
                  <a href="tel:9230559443" className="hover:text-green-300 block">9230559443</a>
                  <a href="tel:9830579535" className="hover:text-green-300 block">9830579535</a>
                </div>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <a href="tel:03335948742" className="hover:text-green-300">
                  033-35948742 (Landline)
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a href="mailto:atanumaitra2013@gmail.com" className="hover:text-green-300">
                  atanumaitra2013@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3" />
                <span>Mon-Sat: 10AM - 8PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Clinic Location</h3>
            <div className="h-48 rounded-lg overflow-hidden shadow-lg">
          
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
            <p className="mt-2 text-sm">
              Besides Kishore Bharati School<br />
              Opposite Vivekananda Sporting Club
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-6 text-center">
          <p>
            © {new Date().getFullYear()} USHA CLINIC - Dr. Atanu Kumar Maitra, DMS, CAH. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Website Develope & Maintained by Digital Exposure Online Services .
          </p>
        </div>
      </div>
    </footer>
  );
}