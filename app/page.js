"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Stethoscope, BookOpen, Award, Users, GraduationCap, FileText, Calendar } from "lucide-react";
import ContactSection from "./component/ContactSec";


export default function Home() {
  const titles = [
    "Classical Homeopathic Treatment Since 1967",
    "Three Generations of Healing Expertise",
    "Your Health is Our Sacred Responsibility",
  ];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Treatment specialties data
  const specialties = [
    { name: "Hair Fall Treatment", icon: "🧑‍🦲" },
    { name: "Migraine Management", icon: "🤯" },
    { name: "Chronic Sinusitis", icon: "👃" },
    { name: "Allergic Rhinitis", icon: "🤧" },
    { name: "Tonsillitis Care", icon: "👄" },
    { name: "Skin Allergies", icon: "👐" },
    { name: "Rheumatic Disorders", icon: "🦵" },
    { name: "Gastric Issues", icon: "🤢" },
    { name: "Fatty Liver", icon: "🫁" },
    { name: "Colitis & IBS", icon: "🧻" },
    { name: "Piles Treatment", icon: "🪑" },
    { name: "Gynecological Issues", icon: "👩" },
    { name: "Infertility (Male/Female)", icon: "👶" },
    { name: "Hydrocele", icon: "👨" },
    { name: "Prostatic Hypertrophy", icon: "👴" },
    { name: "Children's Diseases", icon: "🧒" },
  ];

  return (
    <div className="relative w-full overflow-hidden text-neutral-700">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/vid3.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-green-800/30"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-8 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-in-out transform text-white">
              {titles[currentTitle]}
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90 transition-opacity duration-1000 ease-in-out">
              Dr. Atanu Kumar Maitra, DMS, CAH continues the legacy of Usha Clinic established in 1967, providing classical homeopathic treatment with over 46 years of clinical experience.
            </p>
            <button className="bg-white text-green-700 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Book an Appointment
            </button>
          </div>
        </div>
        <svg className="absolute -bottom-12 left-0 w-full" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z" />
        </svg>
      </div>

      {/* Clinic Introduction */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image src="/img5.png" alt="Usha Clinic Interior" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-green-800 mb-6">Welcome to Usha Clinic</h2>
            <p className="text-gray-700 mb-4">
              Located at <strong>23/B/13, Ramkrishna Sarani, Vivekananda Pally, Behala, Kolkata - 700060</strong>, our clinic is conveniently situated beside Kishore Bharati School and Nivedita College, opposite Vivekananda Sporting Club.
            </p>
            <p className="text-gray-700 mb-4">
              Founded in July 1967 by Dr. S.K. Maitra, Usha Clinic has been serving the community with compassionate homeopathic care for over five decades. Now under the expert guidance of Dr. Atanu Kumar Maitra, DMS, CAH, we continue this legacy with modern approaches rooted in classical homeopathy.
            </p>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-bold text-green-800 mb-2">Clinic Hours:</h3>
              <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 2:00 PM</p>
              <p className="mt-2"><strong>Emergency:</strong> Available on call</p>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor's Profile Section */}
      <div className="bg-green-50 py-20 px-8 md:px-20 relative">
        <svg className="absolute top-0 left-0 w-full rotate-180" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z" />
        </svg>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">About Dr. Atanu Kumar Maitra</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="text-green-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Qualifications</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• DMS (Diploma in Medical Services)</li>
                <li>• CAH (Certificate in Advanced Homeopathy)</li>
                <li>• 46+ Years Clinical Experience</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="text-green-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Professional Journey</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Treated 10+ Lakh Patients</li>
                <li>• 70%+ Success Rate</li>
                <li>• Formerly attached with D.N. De Hospital</li>
                <li>• Served at Ramkrishna Mission Homeo Medical Unit</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-green-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Academic Contributions</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Published numerous medical papers</li>
                <li>• Regular speaker at medical conferences</li>
                <li>• Taught many homeopathic students</li>
                <li>• Attended multiple Science Congress events</li>
              </ul>
            </div>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z" />
        </svg>
      </div>

      {/* Treatment Specialties */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">Our Treatment Specialties</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="border border-green-100 rounded-lg p-4 text-center hover:bg-green-50 transition-colors">
                <span className="text-3xl mb-2 block">{specialty.icon}</span>
                <h3 className="font-medium text-green-800">{specialty.name}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Medicine Philosophy</h3>
            <p className="text-gray-700 mb-4">
              At Usha Clinic, we dispense only the finest quality homeopathic medicines from reputed Indian and German manufacturers. Our medicines are carefully selected for their purity and effectiveness.
            </p>
            <p className="text-gray-700">
              We maintain strict quality control measures to ensure that every patient receives medications that meet the highest standards of homeopathic practice.
            </p>
          </div>
        </div>
      </div>

      {/* Generational Legacy */}
      <div className="bg-green-800 text-white py-20 px-8 md:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">A Legacy of Healing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Three Generations</h3>
              <p>From Dr. S.K. Maitra in 1967 to Dr. Atanu Kumar Maitra today - a family tradition of healing</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">55+ Years</h3>
              <p>Continuous service to the Kolkata community since 1967</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Charitable Service</h3>
              <p>Dedication to serving underprivileged communities through various charitable organizations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">Patient Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial cards would go here */}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <div className="bg-green-800 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Begin Your Healing Journey</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to schedule a consultation with Dr. Atanu Kumar Maitra
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:9830409535" className="bg-white text-green-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
            Call: 9830409535
          </a>
          <a href="tel:9230559443" className="bg-white text-green-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
            Alt: 9230559443
          </a>
          <a href="tel:03335948742" className="bg-white text-green-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
            Landline: 033-35948742
          </a>
        </div>
        <div className="mt-4">
          <a href="mailto:atanumaitra2013@gmail.com" className="text-white hover:underline">
            Email: atanumaitra2013@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}