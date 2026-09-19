"use client";
import { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaUserMd,
  FaCheckCircle,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
    const { name, phone, message, service } = formData;

    // Format the WhatsApp message
    const whatsappMessage =
      `*New Appointment Request for USHA CLINIC*%0A%0A` +
      `*Name:* ${encodeURIComponent(name || "Not provided")}%0A` +
      `*Phone:* ${encodeURIComponent(phone || "Not provided")}%0A` +
      `*Health Concern:* ${encodeURIComponent(service || "Not specified")}%0A%0A` +
      `*Message:*%0A${encodeURIComponent(message || "No message provided")}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919830409535?text=${whatsappMessage}`, "_blank");
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-gray-50 to-emerald-50/40 py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wide uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
            Schedule Your Consultation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Directly connect with Dr. Atanu Kumar Maitra for classical
            homeopathic diagnosis and personalized care.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Information Cards */}
          <div className="md:col-span-5 space-y-6 reveal-left">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <FaUserMd className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Dr. Atanu Kumar Maitra
                  </h3>
                  <p className="text-emerald-700 font-medium text-sm">
                    DMS, CAH | 46+ Years Experience
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Carrying forward 3 generations of classical homeopathic
                    healing since 1967.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Clinic Address
                  </h3>
                  <p className="text-gray-700 text-sm mt-1">
                    23/B/13, Ramkrishna Sarani, Vivekananda Pally, Behala,
                    Kolkata - 700060
                  </p>
                  <p className="text-xs text-emerald-700 mt-2 font-medium bg-emerald-50 p-2 rounded-lg inline-block">
                    Beside Kishore Bharati School, opposite Vivekananda Sporting
                    Club
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <FaPhone className="text-xl" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    Direct Contact Numbers
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href="tel:9830409535"
                      className="text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      9830409535
                    </a>
                    <a
                      href="tel:9230559443"
                      className="text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      9230559443
                    </a>
                    <a
                      href="tel:9830579535"
                      className="text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      9830579535
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 pt-1">
                    Landline:{" "}
                    <a
                      href="tel:03335948742"
                      className="hover:underline font-medium text-gray-700"
                    >
                      033-35948742
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Clinic Hours
                  </h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Mon - Sat: <strong>9:00 AM - 8:00 PM</strong>
                  </p>
                  <p className="text-gray-700 text-sm">
                    Sun: <strong>10:00 AM - 2:00 PM</strong>
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    Emergency consultation available on call
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Booking Form */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-emerald-100/80 relative reveal-right">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Book via WhatsApp
                </h3>
                <p className="text-gray-500 text-sm">
                  Instant message pre-filled to clinic desk
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/20">
                <FaWhatsapp className="text-xl" />
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Patient Name <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-gray-800"
                  required
                />
              </div>

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
                  placeholder="e.g. +91 9830409535"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-gray-800"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Primary Health Concern
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all text-gray-800 bg-white"
                >
                  <option value="">Select health condition</option>
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
                  Symptoms & History <span className="text-emerald-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Briefly describe your symptoms, duration, or any current medications..."
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

              <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-2">
                <span className="flex items-center gap-1">
                  <FaCheckCircle className="text-emerald-600" /> Direct WhatsApp
                  Routing
                </span>
                <span className="flex items-center gap-1">
                  <FaCheckCircle className="text-emerald-600" /> Zero Wait Time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
