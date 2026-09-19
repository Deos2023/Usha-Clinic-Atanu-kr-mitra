"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaUserMd,
  FaCheckCircle,
  FaDirections,
} from "react-icons/fa";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    service: "",
  });

  const services = [
    "Homeopathic Consultation",
    "Chronic Sinusitis & Migraine",
    "Hair Fall & Skin Allergies",
    "Gastric, Fatty Liver & IBS",
    "Gynecological & Infertility",
    "Joint Pain & Spondylosis",
    "Children's Health",
    "Other Health Concerns",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendWhatsAppMessage = () => {
    const { name, phone, email, message, service } = formData;
    const text =
      `*New Appointment Request for USHA CLINIC*%0A%0A` +
      `*Name:* ${encodeURIComponent(name || "Not provided")}%0A` +
      `*Phone:* ${encodeURIComponent(phone || "Not provided")}%0A` +
      `*Email:* ${encodeURIComponent(email || "Not provided")}%0A` +
      `*Service Needed:* ${encodeURIComponent(service || "Not specified")}%0A%0A` +
      `*Message:*%0A${encodeURIComponent(message || "No message provided")}`;
    window.open(`https://wa.me/919830409535?text=${text}`, "_blank");
  };

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-b from-green-950 via-emerald-900 to-green-900 text-white overflow-hidden">
        {/* Glow accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>We Are Here To Assist Your Healing • Behala, Kolkata</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-merienda)]">
            Contact USHA CLINIC
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Reach out directly to Dr. Atanu Kumar Maitra for consultations,
            second opinions, or emergency guidance.
          </p>
        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            className="relative block w-full h-12 sm:h-20 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Contact Grid & Map */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Direct Access
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
              Visit Our Kolkata Clinic
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Located in the heart of Behala, accessible via major bus routes
              and Diamond Harbour Road.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Contact Details Column */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between reveal-left">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    23/B/13, Ramkrishna Sarani, Vivekananda Pally, Behala,
                    Kolkata - 700060
                  </p>
                  <p className="text-xs text-emerald-700 font-medium mt-1">
                    (Beside Kishore Bharati School & Nivedita College, opp.
                    Vivekananda Sporting Club)
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0 text-xl">
                  <FaPhone />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Phone & Helpline
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <a
                      href="tel:9830409535"
                      className="bg-white hover:bg-emerald-50 text-emerald-900 border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors"
                    >
                      9830409535
                    </a>
                    <a
                      href="tel:9230559443"
                      className="bg-white hover:bg-emerald-50 text-emerald-900 border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors"
                    >
                      9230559443
                    </a>
                    <a
                      href="tel:9830579535"
                      className="bg-white hover:bg-emerald-50 text-emerald-900 border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors"
                    >
                      9830579535
                    </a>
                  </div>
                  <p className="text-xs text-gray-500">
                    Landline:{" "}
                    <a
                      href="tel:03335948742"
                      className="hover:underline font-semibold text-gray-800"
                    >
                      033-35948742
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0 text-xl">
                  <FaClock />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Consultation Hours
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Mon - Sat: <strong>9:00 AM – 8:00 PM</strong>
                  </p>
                  <p className="text-gray-700 text-sm">
                    Sunday: <strong>10:00 AM – 2:00 PM</strong>
                  </p>
                  <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-md mt-2">
                    Emergency on Call 24/7
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Email Inquiries
                  </h3>
                  <a
                    href="mailto:atanumaitra2013@gmail.com"
                    className="text-emerald-800 hover:underline text-sm font-medium"
                  >
                    atanumaitra2013@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Column */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[420px] relative reveal-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0930969822275!2d88.30873799999999!3d22.500689999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b8a95e89345%3A0x6e1fede2aff3f6f7!2sDr.%20Atanu%20Maitra!5e0!3m2!1sen!2sin!4v1752051272727!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Form Section */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-50 to-emerald-50/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-6 reveal-left">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Easy Appointment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Book an In-Person or Online Consultation
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Dr. Atanu Kumar Maitra evaluates each case with meticulous detail.
              Fill out the consultation request to generate an instant WhatsApp
              message directly to our clinic staff.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Zero registration surcharge for appointments</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Direct communication with clinic coordination desk</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Emergency home consultations available on request</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/919830409535"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-7 bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-emerald-100/80 reveal-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Consultation Request Form
            </h3>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Full Name <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Subrata Sen"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-gray-800"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Phone Number <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 9830409535"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-gray-800"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Medical Specialty / Concern
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-gray-800 bg-white"
                >
                  <option value="">Select condition</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Symptoms & Brief History{" "}
                  <span className="text-emerald-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Describe your symptoms, how long you've had them, or any past treatments..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-gray-800"
                  required
                ></textarea>
              </div>

              <button
                onClick={sendWhatsAppMessage}
                disabled={
                  !formData.name || !formData.phone || !formData.message
                }
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-green-600/30 hover:shadow-green-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Send Appointment Request</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
