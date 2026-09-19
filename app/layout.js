import {
  Geist,
  Geist_Mono,
  Oswald,
  Merienda,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import { FloatingButtons } from "./component/Floating";
import Footer from "./component/Footer";
import ScrollReveal from "./component/ScrollReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title:
    "USHA CLINIC | Classical Homeopathic Treatment in Behala, Kolkata Since 1967",
  description:
    "Experience classical homeopathy by Dr. Atanu Kumar Maitra (DMS, CAH) with 46+ years clinical experience. Specialized care for chronic diseases, migraine, sinusitis, hair fall, skin allergies, IBS, and gynecology in Behala, Kolkata.",
  keywords: [
    "Homeopathy Kolkata",
    "Usha Clinic",
    "Dr Atanu Kumar Maitra",
    "Classical Homeopathy Behala",
    "Homeopathic Doctor Kolkata",
    "Sinusitis Treatment Homeopathy",
    "Hair Fall Homeopathy Kolkata",
    "Chronic Disease Homeopath Kolkata",
  ],
  authors: [{ name: "Dr. Atanu Kumar Maitra, DMS, CAH" }],
  openGraph: {
    title: "USHA CLINIC - Classical Homeopathic Treatment Since 1967",
    description:
      "Holistic, safe, and effective homeopathic healing in Kolkata. Over 10 lakh patients treated with 70%+ success rate.",
    url: "https://ushaclinic.com",
    siteName: "USHA CLINIC",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var clean = function() {
                    if (document.body && document.body.hasAttribute('cz-shortcut-listen')) {
                      document.body.removeAttribute('cz-shortcut-listen');
                    }
                  };
                  clean();
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      if (mutations[i].attributeName === 'cz-shortcut-listen') {
                        clean();
                      }
                    }
                  });
                  if (document.body) {
                    observer.observe(document.body, { attributes: true, attributeFilter: ['cz-shortcut-listen'] });
                  } else {
                    document.addEventListener('DOMContentLoaded', function() {
                      clean();
                      if (document.body) {
                        observer.observe(document.body, { attributes: true, attributeFilter: ['cz-shortcut-listen'] });
                      }
                    });
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${merienda.variable} ${oswald.variable} ${playfair.variable} ${plusJakarta.variable} antialiased`}
        style={{
          fontFamily: "var(--font-oswald)",
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
