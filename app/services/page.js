"use client";
import Image from "next/image";
import { FaClinicMedical, FaUserMd,  FaBookMedical, FaPhoneAlt, FaCalendarAlt, FaMedal, FaFileMedicalAlt, FaMedkit } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaUserMd className="text-4xl text-green-700" />,
      title: "Classical Homeopathic Treatment",
      description: "46 years of professional experience treating acute and chronic ailments with classical homeopathic approaches.",
      details: [
        "Personalized constitutional treatment",
        "Chronic disease management",
        "Acute condition care",
        "Whole-person approach",
        "Follow-up and progress monitoring"
      ]
    },
    {
      icon: <FaFileMedicalAlt className="text-4xl text-green-700" />,
      title: "Specialized Treatment Areas",
      description: "Expert care for specific health conditions with proven results.",
      details: [
        "Hair fall & skin diseases",
        "Migraine & Sinusitis",
        "Allergic rhinitis & Tonsillitis",
        "Rheumatic & Gastric troubles",
        "Gynaecological issues & infertility",
        "Prostatic Hypertrophy & Hydrocele"
      ]
    },
    {
      icon: <FaClinicMedical className="text-4xl text-green-700" />,
      title: "Clinic treatment",
      description: "Comprehensive homeopathic care at USHA CLINIC since 1967.",
      details: [
        "New patient consultations",
        "Follow-up visits",
        "Acute care treatment",
        "Chronic disease management",
        "Preventive homeopathy"
      ]
    },
    {
      icon: <FaBookMedical className="text-4xl text-green-700" />,
      title: "Professional Experience",
      description: "Four and a half decades of dedicated medical treatment.",
      details: [
        "Over 10 lakh patients treated",
        "70%+ success rate",
        "Former medical officer at D.N. De Hospital",
        "Ramkrishna mission Homeo Medical unit",
        "Various charitable organizations"
      ]
    }
  ];

  return (
    <div className="relative w-full overflow-hidden text-neutral-600">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        {/* Hero Image Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-green-800">
          {/* <Image
            src="/clinic-hero.jpg"
            alt="USHA CLINIC Homeopathic treatment"
            fill
            className="object-cover"
          /> */}
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Usha Clinic Treatment
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Classical Homeopathic Treatment Since 1967
          </p>
        </div>

        {/* Wavey Bottom */}
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

      {/* All treatment Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">
            Our Homeopathic Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="border border-green-100 rounded-lg p-6 hover:shadow-lg transition-all hover:border-green-200"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="text-gray-700 space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Medicine Quality Section */}
      <div className="bg-gray-100 py-20 px-8 md:px-20 relative">
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">
            Our Medicine Standards
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 text-lg">
                At USHA CLINIC, we dispense only the highest quality homeopathic medicines from the best Indian and German manufacturers. Our medicines are carefully selected for their purity and potency.
              </p>
              <ul className="text-gray-700 space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Premium branded medicines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>German and Indian manufacturers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Properly stored and maintained</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Fresh stock regularly replenished</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-800 mb-4">Our Treatment Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCalendarAlt className="text-green-600 mr-3 mt-1" />
                  <span><strong>46+ years</strong> of clinical experience</span>
                </li>
                <li className="flex items-start">
                  <FaClinicMedical className="text-green-600 mr-3 mt-1" />
                  <span>Established in <strong>1967</strong> by Dr. S.K. Maitra</span>
                </li>
                <li className="flex items-start">
                  <FaUserMd className="text-green-600 mr-3 mt-1" />
                  <span>Currently led by <strong>Dr. Atanu Kumar Maitra, DMS, CAH</strong></span>
                </li>
                <li className="flex items-start">
                  <FaMedkit className="text-green-600 mr-3 mt-1" />
                  <span><strong>10+ lakh patients</strong> treated successfully</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
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

      {/* Clinic Information Section */}
      <div className="bg-green-800 text-white py-20 px-8 md:px-20 relative">
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
        <div className="max-w-6xl py-16 mb-5 mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Visit USHA CLINIC
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white text-green-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Clinic Address</h3>
                <p className="mb-6">
                  23/B/13, Ramkrishna Sarani, Vivekananda Pally,<br />
                  Behala, Kolkata - 700060<br />
                  (Besides Kishore Bharati school and Nivedita College,<br />
                  opposite Vivekananda Sporting club)
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaPhoneAlt className="mr-3 mt-1" />
                    <div>
                      <strong>Mobile:</strong><br />
                      9830409535<br />
                      9230559443<br />
                      9830579535
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaPhoneAlt className="mr-3 mt-1" />
                    <div>
                      <strong>Landline:</strong> 033-35948742
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaClinicMedical className="mr-3 mt-1" />
                    <div>
                      <strong>Email:</strong> atanumaitra2013@gmail.com
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">About Dr. Atanu Kumar Maitra</h3>
              <p className="mb-6">
                With 46 years of professional and clinical experience, Dr. Maitra provides classical and modern Homeopathic treatment to patients suffering from all acute and chronic ailments. He has served at D.N. De Hospital, Ramkrishna mission Homeo Medical unit, and various charitable organizations.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Clinic Legacy</h3>
              <p className="mb-6">
                USHA CLINIC was founded in 1967 by Dr. S.K. Maitra, continuing a family tradition of homeopathic excellence. Dr. Atanu Kumar Maitra carries forward this legacy with the same dedication and commitment to healing.
              </p>
              
              <button className="bg-white text-green-800 px-6 py-3 rounded hover:bg-gray-100 font-semibold">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
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

      {/* CTA Section */}
      <div className="bg-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Schedule Your Consultation</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Begin your journey to better health with classical homeopathic treatment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:9830409535" 
            className="bg-green-700 text-white px-8 py-3 rounded font-semibold hover:bg-green-800 transition-colors"
          >
            Call Now: 9830409535
          </a>
          <a 
            href="mailto:atanumaitra2013@gmail.com" 
            className="bg-blue-500 text-white px-8 py-3 rounded font-semibold hover:bg-blue-600 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}