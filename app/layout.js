import { Oswald, Merienda, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import { FloatingButtons } from "./component/Floating";
import Footer from "./component/Footer";
import ScrollReveal from "./component/ScrollReveal";

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  preload: true,
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-oswald",
  display: "swap",
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://www.dratanukrmaitra.in"),
  title: {
    default:
      "Best Homeopathy Doctor in Behala, Kolkata | Dr. Atanu Kumar Maitra - USHA CLINIC",
    template: "%s | Dr. Atanu Kumar Maitra - USHA CLINIC",
  },
  description:
    "Consult Dr. Atanu Kumar Maitra (DMS, CAH), the best homeopathy doctor in Behala, Kolkata with 46+ years experience. Specialized classical treatment for chronic diseases, migraine, sinusitis, hair fall, skin allergies, IBS & gynecology in Behala & Thakurpukur, Kolkata.",
  keywords: [
    "Best Homeopathy Doctor in Behala,kolkata",
    "Homeopathy Doctor in Behala",
    "Best Homeopathy Doctor in Kolkata",
    "Best Homeopathy Clinic in Behala",
    "Homeopathy Doctor in Thakurpukur kolkata",
    "Homeopathic Doctor in Behala Kolkata",
    "Usha Clinic Behala",
    "Dr Atanu Kumar Maitra",
    "Classical Homeopathy Kolkata",
    "Best Homeopath in South Kolkata",
    "Sinusitis Doctor Behala",
    "Hair Fall Homeopathy Kolkata",
    "Skin Allergy Specialist Homeopathy Kolkata",
    "Fatty Liver Homeopathy Treatment Kolkata",
    "Chronic Disease Homeopath Kolkata",
  ],
  authors: [
    {
      name: "Dr. Atanu Kumar Maitra, DMS, CAH",
      url: "https://www.dratanukrmaitra.in",
    },
  ],
  creator: "Dr. Atanu Kumar Maitra",
  publisher: "USHA CLINIC",
  alternates: {
    canonical: "https://www.dratanukrmaitra.in",
  },
  openGraph: {
    title:
      "Best Homeopathy Doctor in Behala, Kolkata | Dr. Atanu Kumar Maitra (USHA CLINIC)",
    description:
      "46+ years clinical excellence in Classical Homeopathy in Behala, Kolkata. Over 10 lakh patients treated with 70%+ recovery rate for chronic diseases.",
    url: "https://www.dratanukrmaitra.in",
    siteName: "USHA CLINIC - Dr. Atanu Kumar Maitra",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/img5.png",
        width: 1200,
        height: 630,
        alt: "Dr. Atanu Kumar Maitra - Best Homeopathy Doctor in Behala Kolkata at Usha Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Homeopathy Doctor in Behala, Kolkata | Dr. Atanu Kumar Maitra",
    description:
      "Trusted classical homeopathic healing for chronic diseases in Behala & Thakurpukur, Kolkata since 1967.",
    images: ["/img5.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Behala, Kolkata",
    "geo.position": "22.50069;88.308738",
    ICBM: "22.50069, 88.308738",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.dratanukrmaitra.in/#clinic",
      name: "USHA CLINIC - Dr. Atanu Kumar Maitra",
      alternateName: [
        "Usha Clinic Behala",
        "Best Homeopathy Clinic in Behala",
        "Dr. Atanu Maitra Homeopathy Clinic",
      ],
      url: "https://www.dratanukrmaitra.in",
      logo: "https://www.dratanukrmaitra.in/usha_clinic_logo.png",
      image: "https://www.dratanukrmaitra.in/img5.png",
      description:
        "Best Homeopathy Clinic in Behala, Kolkata. Established in July 1967, providing classical homeopathic treatments by Dr. Atanu Kumar Maitra (DMS, CAH) with 46+ years experience.",
      telephone: "+91-9830409535",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "23/B/13, Ramkrishna Sarani, Vivekananda Pally, Beside Kishore Bharati School & Nivedita College, Opp. Vivekananda Sporting Club",
        addressLocality: "Behala, Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700060",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 22.50069,
        longitude: 88.308738,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "14:00",
        },
      ],
      areaServed: [
        { "@type": "AdministrativeArea", name: "Behala, Kolkata" },
        { "@type": "AdministrativeArea", name: "Thakurpukur, Kolkata" },
        { "@type": "AdministrativeArea", name: "Taratala, Kolkata" },
        { "@type": "AdministrativeArea", name: "Sakher Bazar, Kolkata" },
        { "@type": "AdministrativeArea", name: "Silpara, Kolkata" },
        { "@type": "AdministrativeArea", name: "James Long Sarani, Kolkata" },
        {
          "@type": "AdministrativeArea",
          name: "Diamond Harbour Road, Kolkata",
        },
        { "@type": "AdministrativeArea", name: "Kolkata, West Bengal" },
      ],
      medicalSpecialty: [
        "Homeopathy",
        "Classical Homeopathy",
        "Chronic Disease Management",
        "Respiratory Allergies & Sinusitis",
        "Dermatology & Hair Fall",
        "Gastroenterology & Fatty Liver",
        "Gynecology & PCOD",
      ],
      founder: {
        "@type": "Person",
        name: "Dr. S.K. Maitra",
      },
      physician: {
        "@type": "Physician",
        "@id": "https://www.dratanukrmaitra.in/#physician",
        name: "Dr. Atanu Kumar Maitra",
        jobTitle: "Chief Homeopathic Physician & Consultant",
        honorificPrefix: "Dr.",
        honorificSuffix: "DMS, CAH",
        description:
          "Best Homeopathy Doctor in Behala, Kolkata with 46+ years clinical experience. Formerly attached with D.N. De Hospital and Ramkrishna Mission Homeo Medical Unit.",
        image: "https://www.dratanukrmaitra.in/img6.png",
        medicalSpecialty: "Homeopathy",
        alumniOf:
          "DMS (Diploma in Medical Services), CAH (Certificate in Advanced Homeopathy)",
        knowsAbout: [
          "Classical Homeopathy",
          "Chronic Sinusitis & Migraine",
          "Alopecia & Hair Loss",
          "Skin Allergies & Eczema",
          "Fatty Liver & IBS Colitis",
          "Female Hormonal Disorders & PCOD",
        ],
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${merienda.variable} ${oswald.variable} ${plusJakarta.variable} antialiased`}
        style={{
          fontFamily: "var(--font-oswald), sans-serif",
          letterSpacing: "0.05em",
        }}
      >
        <ScrollReveal />
        <Navbar />

        {children}
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
