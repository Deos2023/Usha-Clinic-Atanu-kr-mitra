"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaClinicMedical,
  FaUserMd,
  FaPhoneAlt,
  FaCalendarAlt,
  FaMedkit,
  FaCheckCircle,
  FaChevronDown,
  FaShieldAlt,
  FaFlask,
  FaHeartbeat,
  FaLeaf,
  FaWhatsapp,
  FaArrowRight,
  FaQuestionCircle,
} from "react-icons/fa";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
  Clock,
  Award,
  HelpCircle,
  ArrowUpRight,
  Activity,
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const treatmentCategories = [
    {
      id: "respiratory",
      title: "Respiratory & ENT Allergies",
      icon: "👃",
      headline: "Permanent Cure for Chronic Sinusitis, Rhinitis & Tonsillitis",
      overview:
        "Homeopathy strengthens mucosal immunity rather than temporarily drying symptoms with antihistamines. Under Dr. Maitra's classical approach, sinus blockages and recurring infections are eradicated at their root.",
      conditions: [
        {
          name: "Chronic Sinusitis & Ethmoidal Blockage",
          detail:
            "Relief from facial pressure, chronic post-nasal drip, and frontal morning headaches.",
        },
        {
          name: "Allergic Rhinitis & Dust Sensitivity",
          detail:
            "Permanent desensitization to weather changes, dust mites, pollen, and animal dander.",
        },
        {
          name: "Recurrent Tonsillitis & Adenoids",
          detail:
            "Safe avoidance of surgical tonsillectomy in children and teenagers.",
        },
        {
          name: "Bronchial Asthma & Wheezing",
          detail:
            "Spasmolytic gentle action reducing dependency on steroid inhalers over time.",
        },
      ],
      approach:
        "Constitutional remedies such as Silicea, Kali Bichromicum, and Tuberculinum selected according to personal thermal reactivity and symptom triggers.",
    },
    {
      id: "dermatology",
      title: "Hair Loss & Skin Diseases",
      icon: "🧴",
      headline: "Holistic Healing for Alopecia, Eczema, Psoriasis & Rashes",
      overview:
        "Skin disorders are external expressions of internal constitutional imbalance. Applying steroid creams merely suppresses eruptions deeper into the organs. Classical homeopathy stimulates natural skin regeneration.",
      conditions: [
        {
          name: "Alopecia Areata & Pattern Baldness",
          detail:
            "Re-activating dormant hair follicles and correcting underlying nutritional or autoimmune stressors.",
        },
        {
          name: "Chronic Eczema & Atopic Dermatitis",
          detail:
            "Soothing intense itching, dry flaking, weeping cracks, and skin thickening.",
        },
        {
          name: "Psoriasis & Plaque Formation",
          detail:
            "Modulating immune hyperactivity to eliminate silvery scales and joint discomfort.",
        },
        {
          name: "Urticaria & Chronic Hives",
          detail:
            "Stopping recurrent itchy wheals triggered by food, cold, or stress.",
        },
      ],
      approach:
        "Deep-acting remedies like Graphites, Sulphur, Psorinum, and Lycopodium tailored to exact lesion appearance and modal factors.",
    },
    {
      id: "digestive",
      title: "Gastrointestinal & Liver",
      icon: "🫁",
      headline: "Reversing Fatty Liver, IBS, Gastric Trouble & Hemorrhoids",
      overview:
        "Gastrointestinal health dictates overall vitality. Dr. Maitra has decades of clinical success in reversing early-stage hepatic steatosis and healing chronic bowel dysfunctions without lifetime antacids.",
      conditions: [
        {
          name: "Fatty Liver (Grade 1 & Grade 2)",
          detail:
            "Improving lipid metabolism in hepatocytes and reducing elevated SGPT/SGOT enzyme levels.",
        },
        {
          name: "Irritable Bowel Syndrome (IBS) & Colitis",
          detail:
            "Normalizing bowel motility, eliminating mucus discharge, and calming stress-induced diarrhea.",
        },
        {
          name: "Chronic Dyspepsia, GERD & Acidity",
          detail:
            "Treating esophageal reflux, burning heartburn, and persistent bloating after meals.",
        },
        {
          name: "Piles (Hemorrhoids) & Anal Fissures",
          detail:
            "Non-surgical relief from rectal bleeding, painful burning, and venous congestion.",
        },
      ],
      approach:
        "Remedies such as Chelidonium, Nux Vomica, Lycopodium, and Carduus Marianus to restore hepatic balance and digestive secretions.",
    },
    {
      id: "gynecology",
      title: "Women's Health & Fertility",
      icon: "👩",
      headline: "Natural Hormone Harmony for PCOD, Cysts & Infertility",
      overview:
        "Homeopathy gently rebalances the endocrine system, regulating pituitary-ovarian communication without synthetic hormonal pills or invasive procedures.",
      conditions: [
        {
          name: "PCOD & Polycystic Ovarian Syndrome",
          detail:
            "Dissolving ovarian cysts, restoring natural menstrual rhythm, and tackling hirsutism.",
        },
        {
          name: "Irritable Menses & Dysmenorrhea",
          detail:
            "Relief from debilitating uterine cramps, heavy clots, and severe premenstrual distress.",
        },
        {
          name: "Male & Female Infertility",
          detail:
            "Enhancing ovulatory quality and boosting sperm count and motility organically.",
        },
        {
          name: "Menopausal Syndrome & Hot Flushes",
          detail:
            "Smoothing emotional volatility, night sweats, and bone density maintenance.",
        },
      ],
      approach:
        "Pulsatilla, Sepia, Natrum Muriaticum, and Folliculinum prescribed on individualized hormonal and emotional constitutions.",
    },
    {
      id: "musculoskeletal",
      title: "Joint Pain & Spondylosis",
      icon: "🦵",
      headline: "Long-term Mobility in Osteoarthritis, Cervical & Sciatica",
      overview:
        "Rather than masking joint degeneration with harmful painkillers, homeopathic medicines reduce synovial inflammation and strengthen ligamentous resilience.",
      conditions: [
        {
          name: "Cervical & Lumbar Spondylosis",
          detail:
            "Relieving neck stiffness, shooting arm numbness, and lower back disc compression.",
        },
        {
          name: "Frozen Shoulder & Adhesive Capsulitis",
          detail:
            "Restoring full range of motion and peaceful sleep without painful steroid injections.",
        },
        {
          name: "Osteoarthritis of Knee Joints",
          detail:
            "Slowing cartilage breakdown, easing morning stiffness, and reducing swelling.",
        },
        {
          name: "Sciatica & Neuralgic Nerve Pains",
          detail:
            "Relieving radiating nerve pain from lower lumbar spine down into the feet.",
        },
      ],
      approach:
        "Rhus Toxicodendron, Bryonia Alba, Causticum, and Kalmia Latifolia targeting exact modalities (aggravation by rest or motion).",
    },
    {
      id: "pediatric",
      title: "Pediatric & Child Wellness",
      icon: "🧒",
      headline: "Gentle, Sweet & Safe Medicines for Children's Immunity",
      overview:
        "Children respond with remarkable speed to pure homeopathic globules. Zero chemicals, zero bitter tastes, and complete safety from side effects.",
      conditions: [
        {
          name: "Recurrent Cough, Colds & Tonsils",
          detail:
            "Building natural resistance to seasonal school infections and environmental dampness.",
        },
        {
          name: "Difficult Dentition & Diarrhea",
          detail:
            "Soothing infant restlessness, gum irritation, and teething digestive upsets.",
        },
        {
          name: "Bedwetting (Nocturnal Enuresis)",
          detail:
            "Resolving neurological and psychological bladder control delays gently.",
        },
        {
          name: "Appetite Loss & Delayed Milestones",
          detail:
            "Improving nutrient assimilation and healthy childhood physical and mental growth.",
        },
      ],
      approach:
        "Chamomilla, Calcarea Phosphorica, Belladonna, and Baryta Carbonica in mild, child-friendly potencies.",
    },
  ];

  const faqs = [
    {
      q: "How does classical homeopathy differ from allopathic or patent remedies?",
      a: "Classical homeopathy follows the single-remedy principle founded by Dr. Samuel Hahnemann. Instead of giving broad-spectrum symptom suppressors or mixed syrups, Dr. Atanu Kumar Maitra evaluates your complete mental, physical, and thermal constitution to prescribe one precise remedy that activates your body's self-healing vital force.",
    },
    {
      q: "How long does it take to cure chronic diseases like sinusitis, fatty liver, or PCOD?",
      a: "While acute ailments like fever or tonsillitis respond within hours to days, longstanding chronic conditions (5–10 years old) generally show noticeable improvement within 4 to 8 weeks. Complete recovery depends on disease severity, lifestyle, and constitutional responsiveness.",
    },
    {
      q: "Are there any side effects or steroids in your homeopathic medicines?",
      a: "Absolutely zero steroids and zero harmful chemicals. At Usha Clinic, we dispense only genuine medicines sourced from authorized German and Indian pharmacopoeias (Schwabe, Reckeweg, SBL). They are 100% safe for infants, pregnant women, and senior citizens.",
    },
    {
      q: "Can I take homeopathic medicines alongside my regular BP or diabetes prescriptions?",
      a: "Yes. Homeopathic medicines do not interfere with conventional allopathic medications for high blood pressure, diabetes, or thyroid. You can safely continue your essential life-saving medications with a 30-minute interval between doses.",
    },
    {
      q: "What dietary precautions should I observe while taking homeopathic medicines?",
      a: "It is generally advised to keep your mouth clean and avoid strong pungent substances like raw garlic, raw onion, and camphor 15–20 minutes before and after taking your dose. Normal cooked foods are completely permissible unless specifically advised.",
    },
    {
      q: "How do I book an appointment with Dr. Atanu Kumar Maitra?",
      a: "You can book directly via WhatsApp using our instant consultation form or call us at 9830409535 / 9230559443. Walk-ins are also welcome during daily clinic hours (Mon–Sat: 9 AM–8 PM, Sun: 10 AM–2 PM).",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-b from-green-950 via-emerald-900 to-green-900 text-white overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>
              Comprehensive Clinical Homeopathic Care • Behala, Kolkata
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-merienda)]">
            Specialized Homeopathic Treatments
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            Over 46 years of proven clinical expertise by{" "}
            <strong>Dr. Atanu Kumar Maitra (DMS, CAH)</strong> in treating
            complex, longstanding chronic ailments with pure German & Indian
            homeopathic pharmacopoeia.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#specialties-detail"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105"
            >
              View Clinical Scope
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl transition-all"
            >
              Book Consultation
            </Link>
          </div>
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

      {/* 4 Core Pillars */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:shadow-lg transition-all reveal-scale delay-100">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl mb-4">
              <FaUserMd />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Constitutional Care
            </h3>
            <p className="text-gray-600 text-sm">
              Deep-acting individualized remedies addressing biological root
              causes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:shadow-lg transition-all reveal-scale delay-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl mb-4">
              <FaFlask />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Pure German Standards
            </h3>
            <p className="text-gray-600 text-sm">
              High-potency genuine dilutions from Schwabe & authentic
              pharmacopoeias.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:shadow-lg transition-all reveal-scale delay-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Zero Steroids or Toxins
            </h3>
            <p className="text-gray-600 text-sm">
              Completely non-toxic, gentle on liver and kidneys, safe for all
              age groups.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:shadow-lg transition-all reveal-scale delay-400">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl mb-4">
              <FaClinicMedical />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              55+ Years Heritage
            </h3>
            <p className="text-gray-600 text-sm">
              Trusted by 3 generations of families in Kolkata since July 1967.
            </p>
          </div>
        </div>
      </section>

      {/* Deep-Dive Treatment Specializations (SEO Focused) */}
      <section
        id="specialties-detail"
        className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-slate-50/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Detailed Scope of Medicine
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
              Comprehensive Condition Analysis
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Explore how classical homeopathy permanently resolves major acute
              and chronic disease spectrums.
            </p>
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10 reveal">
            {treatmentCategories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 scale-105"
                    : "bg-white text-gray-700 border border-slate-200 hover:bg-emerald-50 hover:text-emerald-800"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Detailed Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-100 transition-all reveal-up">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
              <span className="text-5xl p-4 bg-emerald-50 rounded-2xl">
                {treatmentCategories[activeTab].icon}
              </span>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Clinical Department
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {treatmentCategories[activeTab].headline}
                </h3>
              </div>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100/60">
              {treatmentCategories[activeTab].overview}
            </p>

            <h4 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-700" />
              Conditions Effectively Treated:
            </h4>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {treatmentCategories[activeTab].conditions.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-slate-100 bg-slate-50/60 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all"
                >
                  <h5 className="font-bold text-gray-900 text-base mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item.name}</span>
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed pl-6">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-300 font-bold mb-1">
                  Clinical Protocol
                </p>
                <p className="text-sm text-emerald-100">
                  {treatmentCategories[activeTab].approach}
                </p>
              </div>
              <a
                href="#consultation-flow"
                className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-all flex-shrink-0"
              >
                Learn Our Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Healing Methodology */}
      <section
        id="consultation-flow"
        className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
              Our 4-Step Holistic Healing Protocol
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              How Dr. Atanu Kumar Maitra conducts personalized constitutional
              treatment for permanent healing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:border-emerald-300 hover:-translate-y-2 transition-all group reveal-up delay-100">
              <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white font-bold text-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-900/20 group-hover:bg-emerald-600 transition-colors">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Complete Case Taking
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Detailed evaluation of physical symptoms, emotional state,
                thermal preferences, sleep cycles, and past medical history.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:border-emerald-300 hover:-translate-y-2 transition-all group reveal-up delay-200">
              <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white font-bold text-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-900/20 group-hover:bg-emerald-600 transition-colors">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Miasmatic Diagnosis
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Identifying the underlying inherited or acquired miasmatic
                diathesis to prevent future disease recurrence.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:border-emerald-300 hover:-translate-y-2 transition-all group reveal-up delay-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white font-bold text-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-900/20 group-hover:bg-emerald-600 transition-colors">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Pure German Potencies
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dispensing fresh, highly active medicinal potencies prepared
                strictly according to Hahnemannian organon standards.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:border-emerald-300 hover:-translate-y-2 transition-all group reveal-up delay-400">
              <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white font-bold text-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-900/20 group-hover:bg-emerald-600 transition-colors">
                04
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Systematic Follow-up
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regular progress reviews and dosage adjustment until complete
                sustained recovery and immunity stabilization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (SEO & Rich Snippet Ready) */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-slate-50/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              Patient Guidance
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-merienda)]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Common questions answered regarding classical homeopathy, safety,
              and consultation protocols.
            </p>
          </div>

          <div className="space-y-4 reveal-up">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-gray-900 text-base sm:text-lg"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <FaChevronDown
                    className={`w-4 h-4 text-emerald-700 transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Clinic & Booking Action Banner */}
      <section className="bg-gradient-to-r from-emerald-900 via-green-900 to-teal-950 text-white py-16 px-6 relative overflow-hidden reveal-scale">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
              Ready For Long-Term Wellness?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-merienda)]">
              Schedule Your Homeopathic Consultation
            </h2>
            <p className="text-emerald-100/90 text-sm sm:text-base">
              Visit Usha Clinic at 23/B/13, Ramkrishna Sarani, Vivekananda
              Pally, Behala, Kolkata - 700060 or send an instant WhatsApp
              appointment request.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <a
              href="https://wa.me/919830409535"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:9830409535"
              className="bg-white hover:bg-emerald-50 text-emerald-900 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaPhoneAlt />
              <span>Call: 9830409535</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
