export const metadata = {
  title:
    "Specialized Homeopathic Treatments & Diseases | Best Homeopathy Clinic in Behala Kolkata",
  description:
    "Expert classical homeopathic treatment for chronic sinusitis, migraine, alopecia/hair fall, skin allergies, fatty liver, IBS & gynecology by Dr. Atanu Kumar Maitra in Behala & Thakurpukur, Kolkata.",
  keywords: [
    "Best Homeopathy Clinic in Behala",
    "Homeopathy Doctor in Behala",
    "Best Homeopathy Doctor in Kolkata",
    "Homeopathy Doctor in Thakurpukur kolkata",
    "Sinusitis Treatment Homeopathy Kolkata",
    "Hair Fall Homeopathy Behala",
    "Skin Allergy Treatment Kolkata",
    "Fatty Liver Homeopathy Kolkata",
  ],
  alternates: {
    canonical: "https://www.dratanukrmaitra.in/services",
  },
  openGraph: {
    title:
      "Specialized Homeopathic Treatments | Best Homeopathy Clinic in Behala Kolkata",
    description:
      "Permanent relief and constitutional cures for chronic diseases using 100% genuine German remedies at Usha Clinic, Behala, Kolkata.",
    url: "https://www.dratanukrmaitra.in/services",
    images: ["/img8.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does classical homeopathy differ from allopathic or patent remedies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Classical homeopathy follows the single-remedy principle founded by Dr. Samuel Hahnemann. Instead of giving broad-spectrum symptom suppressors or mixed syrups, Dr. Atanu Kumar Maitra evaluates your complete mental, physical, and thermal constitution to prescribe one precise remedy that activates your body's self-healing vital force.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to cure chronic diseases like sinusitis, fatty liver, or PCOD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While acute ailments like fever or tonsillitis respond within hours to days, longstanding chronic conditions (5–10 years old) generally show noticeable improvement within 4 to 8 weeks. Complete recovery depends on disease severity, lifestyle, and constitutional responsiveness.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any side effects or steroids in your homeopathic medicines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely zero steroids and zero harmful chemicals. At Usha Clinic, we dispense only genuine medicines sourced from authorized German and Indian pharmacopoeias (Schwabe, Reckeweg, SBL). They are 100% safe for infants, pregnant women, and senior citizens.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take homeopathic medicines alongside my regular BP or diabetes prescriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Homeopathic medicines do not interfere with conventional allopathic medications for high blood pressure, diabetes, or thyroid. You can safely continue your essential life-saving medications with a 30-minute interval between doses.",
      },
    },
    {
      "@type": "Question",
      name: "What dietary precautions should I observe while taking homeopathic medicines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is generally advised to keep your mouth clean and avoid strong pungent substances like raw garlic, raw onion, and camphor 15–20 minutes before and after taking your dose. Normal cooked foods are completely permissible unless specifically advised.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an appointment with Dr. Atanu Kumar Maitra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book directly via WhatsApp using our instant consultation form or call us at 9830409535 / 9230559443. Walk-ins are also welcome during daily clinic hours (Mon–Sat: 9 AM–8 PM, Sun: 10 AM–2 PM).",
      },
    },
  ],
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}
