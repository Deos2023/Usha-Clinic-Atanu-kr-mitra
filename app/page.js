"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Award,
  Users,
  GraduationCap,
  FileText,
  Calendar,
  CheckCircle2,
  Sparkles,
  Star,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Clock,
  Phone,
} from "lucide-react";
import ContactSection from "./component/ContactSec";

const TITLES = [
  "Classical Homeopathic Treatment Since 1967",
  "Three Generations of Healing Expertise",
  "Your Health is Our Sacred Responsibility",
  "Pure German & Indian Homeopathic Medicines",
];

const KEY_METRICS = [
  {
    value: "55+",
    label: "Years of Service",
    desc: "Classical care since 1967",
  },
  {
    value: "10 Lakh+",
    label: "Patients Treated",
    desc: "Across Kolkata & West Bengal",
  },
  {
    value: "70%+",
    label: "Clinical Success Rate",
    desc: "In chronic longstanding cases",
  },
  {
    value: "100%",
    label: "German / Pure Remedies",
    desc: "Schwabe & authentic potencies",
  },
  {
    value: "46+ Years",
    label: "Doctor's Experience",
    desc: "Dr. Atanu Kumar Maitra (DMS, CAH)",
  },
  {
    value: "3",
    label: "Generations of Healing",
    desc: "Founded by Dr. S.K. Maitra",
  },
  {
    value: "100% Safe",
    label: "Zero Side Effects",
    desc: "Safe for all age groups",
  },
  {
    value: "100+",
    label: "Medical Research Papers",
    desc: "National Congress contributions",
  },
];

const SPECIALTIES = [
  {
    name: "Hair Fall & Alopecia",
    icon: "🧑‍🦲",
    category: "Skin & Hair",
    desc: "Targeted root-cause remedies for pattern hair loss and alopecia.",
  },
  {
    name: "Migraine Management",
    icon: "🤯",
    category: "Head & ENT",
    desc: "Long-term relief from throbbing vascular and stress headaches.",
  },
  {
    name: "Chronic Sinusitis",
    icon: "👃",
    category: "Head & ENT",
    desc: "Clearing chronic nasal congestion and polyps without surgery.",
  },
  {
    name: "Allergic Rhinitis",
    icon: "🤧",
    category: "Head & ENT",
    desc: "Building respiratory immunity against dust, pollen & seasonal triggers.",
  },
  {
    name: "Tonsillitis Care",
    icon: "👄",
    category: "Head & ENT",
    desc: "Preventing recurrent throat infections in adults and children.",
  },
  {
    name: "Skin Allergies & Eczema",
    icon: "👐",
    category: "Skin & Hair",
    desc: "Gentle healing for urticaria, dermatitis, and fungal rashes.",
  },
  {
    name: "Rheumatic & Joint Pain",
    icon: "🦵",
    category: "Pain & Mobility",
    desc: "Relief from osteoarthritis, sciatica, and cervical spondylosis.",
  },
  {
    name: "Gastric Issues & Acidity",
    icon: "🤢",
    category: "Digestive & Liver",
    desc: "Treating chronic dyspepsia, GERD, and hyperacidity permanently.",
  },
  {
    name: "Fatty Liver Management",
    icon: "🫁",
    category: "Digestive & Liver",
    desc: "Reversing Grade 1 & 2 hepatic steatosis with natural healing.",
  },
  {
    name: "Colitis & IBS",
    icon: "🧻",
    category: "Digestive & Liver",
    desc: "Regulating bowel motility and soothing abdominal cramps.",
  },
  {
    name: "Piles & Fissures",
    icon: "🪑",
    category: "Digestive & Liver",
    desc: "Non-surgical pain relief and healing for hemorrhoidal flareups.",
  },
  {
    name: "Gynecological Issues",
    icon: "👩",
    category: "Women & Child",
    desc: "Natural regulation for PCOD/PCOS, cysts, and cycle pain.",
  },
  {
    name: "Infertility (Male/Female)",
    icon: "👶",
    category: "Women & Child",
    desc: "Constitutional treatment to enhance reproductive vitality.",
  },
  {
    name: "Hydrocele Treatment",
    icon: "👨",
    category: "Men's Health",
    desc: "Gentle resorption and reduction of fluid accumulation.",
  },
  {
    name: "Prostatic Hypertrophy",
    icon: "👴",
    category: "Men's Health",
    desc: "Relieving urinary retention and enlarged prostate symptoms.",
  },
  {
    name: "Children's Diseases",
    icon: "🧒",
    category: "Women & Child",
    desc: "Safe, sweet, and effective care for kids' recurrent illnesses.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sourav Ganguly",
    location: "Behala, Kolkata",
    condition: "Chronic Sinusitis (7 Years)",
    rating: 5,
    quote:
      "I was suffering from severe sinus headaches and nasal blockage for over 7 years. Dr. Atanu Kumar Maitra's classical remedies cured me completely within 4 months. Our whole family visits Usha Clinic.",
  },
  {
    name: "Mousumi Mukherjee",
    location: "Tollygunge, Kolkata",
    condition: "Migraine & Severe Hair Fall",
    rating: 5,
    quote:
      "Constant migraines were affecting my daily work. With Dr. Maitra's individualized medicines, my headache episodes stopped, and hair density improved dramatically without any side effects.",
  },
  {
    name: "Debashis Roy",
    location: "Alipore, Kolkata",
    condition: "Fatty Liver & IBS",
    rating: 5,
    quote:
      "Outstanding diagnostic precision. Dr. Maitra treated my Grade-2 fatty liver and chronic digestive issues when other doctors only offered temporary antacids. 55+ years of legacy speaks for itself.",
  },
];

export default function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    let interval;
    const timer = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentTitle((prev) => (prev + 1) % TITLES.length);
      }, 3500);
    }, 1500);
    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, []);

  const categories = [
    "All",
    "Head & ENT",
    "Skin & Hair",
    "Digestive & Liver",
    "Pain & Mobility",
    "Women & Child",
  ];

  const filteredSpecialties =
    activeCategory === "All"
      ? SPECIALTIES
      : SPECIALTIES.filter((item) => item.category === activeCategory);

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative w-full min-h-[92vh] sm:min-h-screen lg:min-h-[105vh] flex flex-col justify-between overflow-hidden">
        {/* Instant LCP High-Priority Background Image */}
        <Image
          src="/hero_poster.webp"
          alt="Best Homeopathy Doctor in Behala Kolkata - Usha Clinic Hero Background"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95"
        />

        {/* Background Video with Crystal-Clear Gradient Overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/hero_poster.webp"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95"
        >
          <source src="/vid3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/40 z-[1]"></div>

        {/* Decorative ambient lights */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none z-[2]"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none z-[2]"></div>

        {/* Hero Content - placed in middle section on mobile, centered/top-balanced on desktop */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 my-auto pt-20 sm:pt-24 pb-8 sm:pb-16 text-center text-white">
          {/* Top Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-emerald-200 text-xs sm:text-sm font-normal tracking-wide mb-4 sm:mb-4 animate-fade-in shadow-lg font-[family-name:var(--font-merienda)]">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>Best Homeopathy Doctor in Behala, Kolkata • Since 1967</span>
          </div>

          <h1
            className={`${
              TITLES[currentTitle] ===
              "Pure German & Indian Homeopathic Medicines"
                ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                : "text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
            } font-medium sm:font-semibold mb-5 sm:mb-5 tracking-normal min-h-[1.3em] transition-all duration-700 leading-[1.3] sm:leading-[1.18] drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)] font-[family-name:var(--font-merienda)]`}
          >
            {TITLES[currentTitle]}
          </h1>

          <p className="mb-7 sm:mb-10 text-sm sm:text-lg md:text-xl text-slate-100/95 max-w-3xl mx-auto font-light sm:font-normal leading-[1.75] sm:leading-relaxed tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-[family-name:var(--font-plus-jakarta)]">
            Consult{" "}
            <strong className="text-white font-medium text-emerald-100">
              Dr. Atanu Kumar Maitra (DMS, CAH)
            </strong>
            , widely regarded as the{" "}
            <strong className="text-emerald-200 font-semibold">
              Best Homeopathy Doctor in Behala, Kolkata
            </strong>
            . Bringing over 46 years of clinical excellence at USHA CLINIC for
            chronic diseases, sinusitis, hair fall, skin allergies, and
            digestive ailments across Behala, Thakurpukur, and Kolkata.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6 font-[family-name:var(--font-plus-jakarta)]">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white px-8 py-3.5 sm:py-4 rounded-xl font-medium text-base sm:text-lg transition-all duration-300 shadow-xl shadow-emerald-950/40 hover:scale-105 flex items-center justify-center gap-2 group tracking-wide"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/services"
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 sm:py-4 rounded-xl font-normal sm:font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg tracking-wide"
            >
              <span>Explore Treatments</span>
            </Link>
          </div>
        </div>

        {/* Subtle Wave divider at very bottom */}
        <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            className="relative block w-full h-8 sm:h-12 text-white"
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

      {/* Auto-Sliding Key Metrics Strip (For All Devices: Mobile, Tablet, Laptop, Desktop) */}
      <section className="relative z-20 w-full bg-slate-50/80 py-6 sm:py-8 border-y border-emerald-100 overflow-hidden shadow-sm">
        {/* Left and Right edge fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-scroll flex items-center gap-4 sm:gap-6 px-4">
          {[...KEY_METRICS, ...KEY_METRICS].map((metric, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-56 sm:w-64 bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl border border-emerald-100 transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 group-hover:text-emerald-600 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-900 font-bold mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-emerald-700/80 mt-0.5 font-medium">
                {metric.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clinic Introduction */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 relative reveal-left">
            <div className="relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="/img5.png"
                alt="Dr. Atanu Kumar Maitra - Best Homeopathy Doctor in Behala Kolkata Consultation Room at Usha Clinic"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-md bg-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
                  Behala, Kolkata
                </span>
                <p className="text-lg font-bold">
                  Best Homeopathy Clinic in Behala Since 1967
                </p>
                <p className="text-xs text-emerald-100">
                  Founded by Dr. S.K. Maitra • Headed by Dr. Atanu Kumar Maitra
                </p>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 reveal-scale delay-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">46+ Years</p>
                <p className="text-xs text-emerald-700 font-medium">
                  Doctor&apos;s Experience
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 space-y-6 reveal-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Authentic Classical Homeopathy in South Kolkata</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-[family-name:var(--font-merienda)]">
              Welcome to <span className="text-emerald-800">USHA CLINIC</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              If you are searching for the{" "}
              <strong className="text-emerald-900 font-semibold">
                Best Homeopathy Doctor in Behala, Kolkata
              </strong>{" "}
              or an experienced{" "}
              <strong className="text-emerald-900 font-semibold">
                Homeopathy Doctor in Thakurpukur Kolkata
              </strong>
              , USHA CLINIC offers unmatched clinical expertise. Conveniently
              located at{" "}
              <strong className="text-gray-900 font-semibold">
                23/B/13, Ramkrishna Sarani, Vivekananda Pally, Behala, Kolkata -
                700060
              </strong>{" "}
              (beside Kishore Bharati School & Nivedita College, opposite
              Vivekananda Sporting Club).
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Founded in July 1967 by Dr. S.K. Maitra, USHA CLINIC has earned
              the distinction of being the{" "}
              <strong className="text-gray-900 font-semibold">
                Best Homeopathy Clinic in Behala
              </strong>
              , treating over 10 lakh patients across 3 generations. Today,{" "}
              <strong className="text-emerald-900 font-semibold">
                Dr. Atanu Kumar Maitra (DMS, CAH)
              </strong>{" "}
              continues this legacy, providing constitutional remedies tailored
              to cure chronic, deep-seated health conditions permanently without
              side effects.
            </p>

            {/* Operating Hours Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 p-6 rounded-2xl border border-emerald-100/80 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-700" />
                  <h3 className="font-bold text-emerald-900 text-base">
                    Consultation Hours
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/60 text-emerald-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span>Open Today</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    Monday - Saturday
                  </p>
                  <p className="font-semibold text-gray-900">
                    9:00 AM – 8:00 PM
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Sunday</p>
                  <p className="font-semibold text-gray-900">
                    10:00 AM – 2:00 PM
                  </p>
                </div>
              </div>
              <p className="text-xs text-emerald-800 font-medium mt-3 pt-3 border-t border-emerald-200/50">
                <strong>Emergency Inquiries:</strong> Available on call 24/7 at{" "}
                <a href="tel:9830409535" className="underline font-bold">
                  9830409535
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Credentials Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-50 to-emerald-50/30 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Physician Background
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
              About Dr. Atanu Kumar Maitra
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              A trusted authority in classical homeopathy with over four decades
              of patient care and academic contributions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-emerald-100/60 hover:-translate-y-2 group reveal-up delay-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                Qualifications & Credentials
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>DMS</strong> (Diploma in Medical Services)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>CAH</strong> (Certificate in Advanced Homeopathy)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>46+ Years</strong> of continuous clinical practice
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Mastery in pure Hahnemannian constitutional prescribing
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-emerald-100/60 hover:-translate-y-2 group reveal-up delay-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                Hospital Attachments & Practice
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Treated <strong>10 Lakh+ Patients</strong> successfully
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>70%+ Clinical Recovery Rate</strong> in chronic
                    conditions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Formerly attached with <strong>D.N. De Hospital</strong>
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

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-emerald-100/60 hover:-translate-y-2 group reveal-up delay-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                Academic Contributions
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Published numerous medical research papers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Keynote speaker at National Science Congress events
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Mentored hundreds of homeopathic medical doctors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Active free medical camps for underserved communities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Specialties with Category Filter */}
      <section
        id="treatments"
        className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Clinical Scope
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
              Our Treatment Specialties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg mb-8">
              Targeted classical homeopathic remedies addressing deep
              constitutional causes.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/20 scale-105"
                      : "bg-slate-100 hover:bg-emerald-50 text-gray-700 hover:text-emerald-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSpecialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between reveal-scale"
                style={{ transitionDelay: `${(index % 4) * 80}ms` }}
              >
                <div>
                  <div className="text-4xl mb-4 p-3 bg-emerald-50/80 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    {specialty.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {specialty.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {specialty.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span>{specialty.category}</span>
                  <Link
                    href="/services"
                    className="hover:underline flex items-center gap-1"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Medicine Standards Card */}
          <div className="mt-14 bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden reveal-up delay-150">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                  Quality Assurance
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--font-merienda)]">
                  Our Pure Medicine Philosophy
                </h3>
                <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                  At Usha Clinic, we dispense only the finest homeopathic
                  medicines sourced directly from leading German (Schwabe, Adel,
                  Reckeweg) and authentic Indian pharmacopoeias. Every remedy is
                  preserved in pure ethyl alcohol and lactose globule bases,
                  guaranteeing zero steroid adulteration and total safety for
                  infants, pregnant women, and elderly patients.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <div className="text-center bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <HeartPulse className="w-12 h-12 text-emerald-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">100% Safe</div>
                  <div className="text-xs text-emerald-200">
                    Zero Side Effects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generational Legacy Section */}
      <section className="bg-gradient-to-b from-green-900 to-emerald-950 text-white py-20 md:py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
              Heritage of Compassion
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-merienda)]">
              A 55+ Year Legacy of Healing
            </h2>
            <p className="text-emerald-100/80 max-w-2xl mx-auto text-base sm:text-lg">
              Generations of families in Kolkata trust Usha Clinic as their
              dedicated family health guardian.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:border-emerald-400/50 hover:bg-white/15 transition-all text-center group reveal-up delay-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-800/80 text-emerald-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Three Generations</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                From Dr. S.K. Maitra in 1967 to Dr. Atanu Kumar Maitra today — a
                cherished family tradition of healing and care.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:border-emerald-400/50 hover:bg-white/15 transition-all text-center group reveal-up delay-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-800/80 text-emerald-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">55+ Years of Service</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Unbroken community medical presence in Behala, Kolkata with over
                10 lakh successfully treated patients.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:border-emerald-400/50 hover:bg-white/15 transition-all text-center group reveal-up delay-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-800/80 text-emerald-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Charitable Service</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Longstanding honorary association with Ramkrishna Mission Homeo
                Unit and community wellness programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Successful Treatments Section */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Proven Results
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
              Successful Chronic Disease Treatments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Documented high recovery rates across challenging, longstanding
              medical complaints.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/40 rounded-3xl p-8 border border-emerald-100 shadow-sm reveal-left">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-200/60">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">
                  Chronic Respiratory & Pain
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Migraine & Chronic Headache Management",
                  "Chronic Sinusitis & Nasal Polyps",
                  "Allergic Rhinitis & Sneezing Attacks",
                  "Recurrent Tonsillitis & Pharyngitis",
                  "Frozen Shoulder & Rotator Cuff Stiffness",
                  "Cervical & Lumbar Spondylosis",
                  "Chronic Dyspepsia, Acidity & Gastritis",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm sm:text-base"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/40 rounded-3xl p-8 border border-emerald-100 shadow-sm reveal-right">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-200/60">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">
                  Specialized Organ Systems
                </h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Fatty Liver Disease (Grade 1 & Grade 2)",
                  "Recurrent Pediatric Diseases & Immunity",
                  "Female Hormonal Disorders (PCOD/PCOS)",
                  "Severe Hair Fall & Alopecia Areata",
                  "Skin Allergies, Urticaria & Eczema",
                  "Osteoarthritis & Knee Joint Degeneration",
                  "Benign Prostatic Hypertrophy (BPH)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm sm:text-base"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-50 to-emerald-50/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Patient Voices
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
              Patient Experiences & Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Read how classical homeopathic treatments at Usha Clinic
              transformed the lives of patients across Kolkata.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl border border-emerald-100/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between reveal-scale"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-gray-900 text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500">{t.location}</p>
                  <span className="inline-block mt-2 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold">
                    {t.condition}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Serving Areas & Catchment Hub (High-Intent Local SEO) */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Location & Accessibility
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
              Serving Patients Across Behala, Thakurpukur & South Kolkata
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Conveniently located at Behala (Vivekananda Pally), USHA CLINIC is
              easily accessible from all major neighborhoods across South
              Kolkata and West Bengal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Area 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all group reveal-scale delay-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  📍
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-800 transition-colors">
                  Behala Core & Chowrasta
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Immediate neighborhood coverage for Chowrasta, Tram Depot,
                Sakher Bazar, Silpara, and Roy Bahadur Road (2–5 mins).
              </p>
              <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                Best Homeopathy Doctor in Behala
              </span>
            </div>

            {/* Area 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all group reveal-scale delay-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  📍
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-800 transition-colors">
                  Thakurpukur & Joka
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Direct accessibility along Diamond Harbour Road, 3A Bus Stand,
                and Joka Metro corridor (5–10 mins).
              </p>
              <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                Homeopathy Doctor in Thakurpukur kolkata
              </span>
            </div>

            {/* Area 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all group reveal-scale delay-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  📍
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-800 transition-colors">
                  Taratala & New Alipore
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Swift connectivity via Taratala Flyover, Majherhat,
                Buroshibtala, and New Alipore Block residential areas (10–15
                mins).
              </p>
              <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                Best Homeopathy Doctor in Kolkata
              </span>
            </div>

            {/* Area 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all group reveal-scale delay-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  📍
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-800 transition-colors">
                  James Long Sarani & Parnasree
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Direct bypass connectivity connecting Parnasree Pally,
                Kadamtala, Dakshin Behala Road, and Barisha.
              </p>
              <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                Best Homeopathy Clinic in Behala
              </span>
            </div>

            {/* Area 5 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all group reveal-scale delay-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  📍
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-800 transition-colors">
                  Tollygunge & Haridevpur
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Connected via Motilal Gupta Road and Karunamoyee Bridge reaching
                Kudghat and Mahanayak Uttam Kumar Metro.
              </p>
              <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                Homeopathy Doctor in Behala
              </span>
            </div>

            {/* Area 6 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all group reveal-scale delay-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  📍
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-800 transition-colors">
                  Greater Kolkata & Districts
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Patients regularly travel from Howrah, Salt Lake, North Kolkata,
                and South 24 Parganas for specialized chronic care.
              </p>
              <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                10 Lakh+ Patients Treated
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-emerald-950 text-base">
                Need Directions to USHA CLINIC?
              </h4>
              <p className="text-sm text-emerald-800/90">
                23/B/13, Ramkrishna Sarani, Vivekananda Pally, Behala, Kolkata -
                700060 (Beside Kishore Bharati School & Nivedita College, Opp.
                Vivekananda Sporting Club).
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=22.50069,88.308738"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md flex-shrink-0 flex items-center gap-2"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-emerald-900 via-green-900 to-teal-950 text-white py-16 px-6 text-center relative overflow-hidden reveal-scale">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-merienda)]">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto">
            Schedule your appointment or walk in during clinic hours for
            personalized constitutional homeopathic care.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:9830409535"
              className="bg-white text-emerald-900 hover:bg-emerald-50 px-6 py-3.5 rounded-xl font-bold shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call: 9830409535</span>
            </a>
            <a
              href="tel:9230559443"
              className="bg-white text-emerald-900 hover:bg-emerald-50 px-6 py-3.5 rounded-xl font-bold shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Alt: 9230559443</span>
            </a>
            <a
              href="tel:03335948742"
              className="bg-emerald-800/80 hover:bg-emerald-700 border border-white/20 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Landline: 033-35948742</span>
            </a>
          </div>
          <p className="text-xs text-emerald-200/80 pt-2">
            Email:{" "}
            <a
              href="mailto:atanumaitra2013@gmail.com"
              className="hover:underline font-medium text-white"
            >
              atanumaitra2013@gmail.com
            </a>{" "}
            • Kolkata, West Bengal
          </p>
        </div>
      </section>
    </div>
  );
}
