"use client";
import { useState } from "react";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaUserMd } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    service: ""
  });

  const services = [
    "Homeopathic Consultation",
    "Acute Ailments Treatment",
    "Chronic Disease Management",
    "Hair & Skin Conditions",
    "Gynaecological Issues",
    "Children's Health",
    "Other Health Concerns"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendWhatsAppMessage = () => {
    const { name, phone, message, service } = formData;
    
    // Format the WhatsApp message
    const whatsappMessage = `*New Appointment Request for USHA CLINIC*%0A%0A` +
                          `*Name:* ${name || 'Not provided'}%0A` +
                          `*Phone:* ${phone || 'Not provided'}%0A` +
                          `*Health Concern:* ${service || 'Not specified'}%0A%0A` +
                          `*Message:*%0A${message || 'No message provided'}`;
    
    // Open WhatsApp with pre-filled message to your number
    window.open(`https://wa.me/919830409535?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="bg-gray-100 py-32 px-8 md:px-20 relative">
      {/* Top wave divider */}
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

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-6">Contact USHA CLINIC</h2>
          
          <div className="flex items-start mb-6">
            <FaUserMd className="text-green-700 mt-1 mr-3" />
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-1">Dr. Atanu Kumar Maitra</h3>
              <p className="text-gray-700">
                DMS, CAH | 46+ years of experience
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <FaMapMarkerAlt className="text-green-700 mt-1 mr-3" />
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-1">Clinic Address</h3>
              <p className="text-gray-700">
                23/B/13, Ramkrishna Sarani,<br />
                Vivekananda Pally, Behala,<br />
                Kolkata - 700060
              </p>
              <p className="text-sm mt-2">
                (Besides Kishore Bharati School, opposite Vivekananda Sporting Club)
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <FaPhone className="text-green-700 mt-1 mr-3" />
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-1">Contact Numbers</h3>
              <a 
                href="tel:9830409535" 
                className="text-gray-700 hover:text-green-600 block"
              >
                9830409535
              </a>
              <a 
                href="tel:9230559443" 
                className="text-gray-700 hover:text-green-600 block"
              >
                9230559443
              </a>
              <a 
                href="tel:9830579535" 
                className="text-gray-700 hover:text-green-600 block"
              >
                9830579535
              </a>
              <a 
                href="tel:03335948742" 
                className="text-gray-700 hover:text-green-600 block mt-2"
              >
                033-35948742 (Landline)
              </a>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <FaEnvelope className="text-green-700 mt-1 mr-3" />
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-1">Email</h3>
              <a 
                href="mailto:atanumaitra2013@gmail.com" 
                className="text-gray-700 hover:text-green-600"
              >
                atanumaitra2013@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <FaClock className="text-green-700 mt-1 mr-3" />
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-1">Clinic Hours</h3>
              <p className="text-gray-700">Monday to Saturday: 10AM - 8PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-green-800 mb-6">Book an Appointment</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-gray-700 mb-2">Health Concern</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select your health concern</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Your Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Briefly describe your symptoms or health concerns"
                required
              ></textarea>
            </div>
            <button
              onClick={sendWhatsAppMessage}
              disabled={!formData.name || !formData.phone || !formData.message}
              className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 font-semibold w-full flex items-center justify-center gap-2  disabled:cursor-not-allowed transition-colors"
            >
              <FaWhatsapp className="text-xl" /> Send Appointment Request
            </button>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
        />
      </svg>
    </div>
  );
}