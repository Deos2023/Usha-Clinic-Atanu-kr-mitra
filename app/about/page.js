"use client";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Award,
  Users,
  GraduationCap,
  FileText,
  HeartPulse,
  Leaf,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Phone,
  Calendar,
  Stethoscope,
} from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function About() {
  const galleryItems = [
    {
      src: "/img1.jpg",
      title: "Clinical Consultations",
      subtitle: "Personalized case analysis",
    },
    {
      src: "/img2.jpg",
      title: "German Quality Remedies",
      subtitle: "Strictly potentized dilutions",
    },
    {
      src: "/img3.jpg",
      title: "Decades of Healing",
      subtitle: "Serving families since 1967",
    },
    {
      src: "/img4.jpg",
      title: "Community Service",
      subtitle: "Dedicated medical outreach",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-b from-green-950 via-emerald-900 to-green-900 text-white overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>
              Three Generations of Classical Homeopathy • Established 1967
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-merienda)]">
            About Usha Clinic & Legacy
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            Founded by <strong>Dr. S.K. Maitra</strong> in July 1967 and carried
            forward by <strong>Dr. Atanu Kumar Maitra (DMS, CAH)</strong>,
            providing compassionate, scientifically grounded classical
            homeopathic healthcare in Kolkata for over 55 years.
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

      {/* Our Healing Legacy Section */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 space-y-6 reveal-left">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Our Foundation
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-[family-name:var(--font-merienda)]">
                Our Healing Legacy Since 1967
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Founded in July 1967 by{" "}
                <strong className="text-gray-900">Dr. S.K. Maitra</strong>, Usha
                Clinic began as a modest homeopathic practice in Behala,
                Kolkata. What started as a dedicated neighborhood healing room
                has grown into one of South Kolkata&apos;s most respected
                centers for classical constitutional homeopathy.
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                Over our 55+ years of continuous service, we have treated more
                than{" "}
                <strong className="text-emerald-800 font-semibold">
                  10 lakh patients
                </strong>{" "}
                with an exceptional success rate exceeding 70% in chronic,
                non-responsive ailments.
              </p>

              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-sm text-gray-700">
                <p>
                  📍 <strong>Clinic Address:</strong> 23/B/13, Ramkrishna
                  Sarani, Vivekananda Pally, Behala, Kolkata - 700060 (Beside
                  Kishore Bharati School & Nivedita College, opposite
                  Vivekananda Sporting Club).
                </p>
              </div>
            </div>

            <div className="md:col-span-6 relative reveal-right">
              <div className="relative h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/img6.png"
                  alt="Dr. Atanu Kumar Maitra - Best Homeopathy Doctor in Behala Kolkata Consultation at Usha Clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-bold">Dr. Atanu Kumar Maitra</p>
                  <p className="text-xs text-emerald-200">
                    Chief Physician • DMS, CAH (46+ Years Experience)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor's In-Depth Profile Section */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-50 to-emerald-50/30 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Physician Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
              Dr. Atanu Kumar Maitra (DMS, CAH)
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              A master clinician combining classical Hahnemannian principles
              with four and a half decades of practical experience.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
            <div className="md:col-span-5 relative reveal-left">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/img7.png"
                  alt="Dr. Atanu Kumar Maitra DMS CAH - Homeopathy Doctor in Behala diagnosing patient case"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-6 reveal-right">
              <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm space-y-3">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <GraduationCap className="text-emerald-700" /> Qualifications
                  & Experience
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>DMS</strong> (Diploma in Medical Services),{" "}
                      <strong>CAH</strong> (Certificate in Advanced Homeopathy)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>46+ years</strong> of dedicated clinical practice
                      in classical constitutional homeopathy
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Formerly attached with prestigious{" "}
                      <strong>D.N. De Hospital</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Served at{" "}
                      <strong>Ramkrishna Mission Homeo Medical Unit</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm space-y-3">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <FileText className="text-emerald-700" /> Academic &
                  Scientific Contributions
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Published 100+ medical papers and articles in esteemed
                      health journals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Invited speaker at National Science Congresses and medical
                      conferences
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Mentor to generations of practicing homeopathic doctors in
                      West Bengal
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Philosophy Section */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6 reveal-left">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-merienda)]">
              Treating the Whole Person, Not Just Symptoms
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              At Usha Clinic, we practice classical homeopathy in its purest
              form, adhering to the foundational principles laid down by Dr.
              Samuel Hahnemann. We believe that disease is an expression of
              internal vital disturbance.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Instead of masking symptoms with suppressive drugs, each patient
              receives an individualized single remedy matched to their genetic,
              physical, and psychological profile to stimulate permanent
              self-healing.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Zero Side Effects</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Zero Steroids</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 relative reveal-right">
            <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/img8.png"
                alt="Pure German Homeopathic Medicines and Dilutions at Usha Clinic Behala Kolkata"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Service & Key Metrics */}
      <section className="bg-gradient-to-b from-green-900 to-emerald-950 text-white py-20 px-6 md:px-16 lg:px-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
              Impact & Trust
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-merienda)]">
              Community Service & Milestones
            </h2>
            <p className="text-emerald-100/80 max-w-2xl mx-auto text-base">
              Dedicated to making classical homeopathic healing accessible to
              all sections of society.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center reveal-scale delay-100">
              <div className="text-4xl font-bold text-emerald-300 mb-2">
                55+
              </div>
              <div className="text-sm text-emerald-100">Years of Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center reveal-scale delay-200">
              <div className="text-4xl font-bold text-emerald-300 mb-2">
                10 Lakh+
              </div>
              <div className="text-sm text-emerald-100">Patients Treated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center reveal-scale delay-300">
              <div className="text-4xl font-bold text-emerald-300 mb-2">
                70%+
              </div>
              <div className="text-sm text-emerald-100">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center reveal-scale delay-400">
              <div className="text-4xl font-bold text-emerald-300 mb-2">
                100+
              </div>
              <div className="text-sm text-emerald-100">Medical Papers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Clinic Gallery Section */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Visual Highlights
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
              Usha Clinic Through The Years
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              A glimpse into our clinical practice, authentic remedies, and
              decades of healing heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-100 group cursor-pointer reveal-scale"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <Image
                  src={item.src}
                  alt={`${item.title} - Best Homeopathy Clinic in Behala Kolkata`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <h4 className="font-bold text-base">{item.title}</h4>
                  <p className="text-xs text-emerald-200">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Action Banner */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white py-16 px-6 text-center reveal-scale">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-merienda)]">
            Experience the Healing Power of Homeopathy
          </h2>
          <p className="text-emerald-100 text-base max-w-2xl mx-auto">
            Schedule a personal consultation with Dr. Atanu Kumar Maitra at Usha
            Clinic today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:9830409535"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 9830409535</span>
            </a>
            <Link
              href="/contact"
              className="bg-white hover:bg-emerald-50 text-emerald-900 font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
