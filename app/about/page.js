"use client";
import Image from "next/image";
import { BookOpen, Award, Users, GraduationCap, FileText, HeartPulse, Leaf } from "lucide-react";

export default function About() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <div className="absolute top-0 left-0 w-full h-full bg-green-800">
         
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Usha Clinic
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Three Generations of Classical Homeopathic Care Since 1967
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z" />
        </svg>
      </div>

      {/* Our Legacy Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">
            Our Healing Legacy
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gray-700 mb-6">
                Founded in July 1967 by Dr. S.K. Maitra, Usha Clinic began as a modest homeopathic practice in Behala, Kolkata. What started as a single-room clinic has grown into a renowned center for classical homeopathic treatment, now led by Dr. Atanu Kumar Maitra, DMS, CAH.
              </p>
              <p className="text-gray-700 mb-6">
                Over our 55+ years of service, we&apos;ve treated more than 10 lakh patients with a success rate exceeding 70%. Our clinic has been a healing haven for generations of families in Kolkata and beyond.
              </p>
              <p className="text-gray-700">
                Located at <strong>23/B/13, Ramkrishna Sarani, Vivekananda Pally, Behala, Kolkata - 700060</strong>, our clinic stands beside Kishore Bharati school and Nivedita College, opposite Vivekananda Sporting club.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image 
                src="/img6.png" 
                alt="Dr. Atanu Kumar Maitra"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      
{/* Successful Treatments Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">Successful Treatment of Following Diseases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Chronic Conditions</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">1.</span>
                  <span>Migraine</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">2.</span>
                  <span>Chronic Sinusitis</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">3.</span>
                  <span>Allergic Rhinitis</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">4.</span>
                  <span>Chronic Tonsillitis</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">5.</span>
                  <span>Frozen Shoulder</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">6.</span>
                  <span>Cervical Spondylosis</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">7.</span>
                  <span>Dyspepsia</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Specialized Treatments</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">8.</span>
                  <span>Fatty Liver</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">9.</span>
                  <span>All Children Diseases</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">10.</span>
                  <span>Female Diseases (Menstrual Disorders, PCOD)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">11.</span>
                  <span>Hair Fall Treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">12.</span>
                  <span>Skin Diseases</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">13.</span>
                  <span>Osteoarthritis</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">14.</span>
                  <span>Prostatic Hypertrophy</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-800 mr-2">15.</span>
                  <span>And many more chronic conditions</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600 italic">
            <p>Dr. Atanu Kumar Maitra, USHA CLINIC - Providing effective homeopathic solutions since 1967</p>
          </div>
        </div>
      </div>

      {/* Doctor's Profile Section */}
      <div className="bg-green-50 py-30 px-8 md:px-20 relative">
        <svg className="absolute top-0 left-0 w-full rotate-180" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z" />
        </svg>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">
            About Dr. Atanu Kumar Maitra
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/img7.png" 
                alt="Dr. Maitra at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Qualifications & Experience</h3>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li className="flex items-start">
                  <GraduationCap className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>• DMS (Diploma in Medical Services), CAH (Certificate in Advanced Homeopathy)</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>• 46+ years of clinical experience in classical homeopathy</span>
                </li>
                <li className="flex items-start">
                  <HeartPulse className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>• Formerly attached with D.N. De Hospital and Ramkrishna Mission Homeo Medical Unit</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>• Treated over 10 lakh patients with 70%+ success rate</span>
                </li>
              </ul>
              
              <h3 className="text-2xl font-bold text-green-800 mb-4">Academic Contributions</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <FileText className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>• Published numerous medical papers in journals and magazines</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>• Regular speaker at medical seminars, Science Congress, and conferences</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span>• Mentor to many homeopathic medical students</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z" />
        </svg>
      </div>

      {/* Treatment Philosophy Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">
            Our Treatment Philosophy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Classical Homeopathy</h3>
              <p className="text-gray-700 mb-6">
                At Usha Clinic, we practice classical homeopathy in its purest form, following the principles established by Dr. Samuel Hahnemann. Each treatment is personalized to the individual, not just the disease.
              </p>
              <p className="text-gray-700 mb-6">
                We carefully select remedies based on complete symptom pictures and constitutional analysis, ensuring treatments address the root cause of illness rather than just suppressing symptoms.
              </p>
              
              <h3 className="text-2xl font-bold text-green-800 mb-4">Medicine Quality</h3>
              <p className="text-gray-700">
                We dispense only the finest quality homeopathic medicines from reputed Indian and German manufacturers. Our medicines undergo strict quality control to ensure maximum efficacy.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/img8.png" 
                alt="Homeopathic Medicines"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Community Service Section */}
      <div className="bg-green-800 text-white py-40 px-8 md:px-20 relative">
        <svg className="absolute top-0 left-0 w-full rotate-180" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z" />
        </svg>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Community Service & Affiliations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-6 text-lg">
                Beyond our clinical practice, we are deeply committed to serving the community. Dr. Maitra has been associated with various charitable organizations throughout his career, providing free or subsidized treatment to those in need.
              </p>
              <p className="mb-6 text-lg">
                Our clinic regularly participates in health camps and community awareness programs to promote the benefits of homeopathic medicine.
              </p>
              <p className="text-lg">
                We believe in making quality homeopathic treatment accessible to all sections of society, regardless of their economic status.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">55+</div>
                <div>Years of Service</div>
              </div>
              <div className="bg-green-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">10L+</div>
                <div>Patients Treated</div>
              </div>
              <div className="bg-green-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">70%</div>
                <div>Success Rate</div>
              </div>
              <div className="bg-green-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div>Medical Papers Published</div>
              </div>
            </div>
          </div>
        </div>
        
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z" />
        </svg>
      </div>

      {/* Clinic Gallery Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">
            Usha Clinic Through The Years
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image src="/clinic-old.jpg" alt="Usha Clinic in early years" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image src="/dr-family.jpg" alt="Dr. Maitra with family" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image src="/seminar.jpg" alt="Medical seminar" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image src="/health-camp.jpg" alt="Health camp" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 px-8 text-center border-t border-gray-200">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Experience Classical Homeopathy</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Schedule a consultation with Dr. Atanu Kumar Maitra today
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:9830409535" 
            className="bg-green-700 text-white px-8 py-3 rounded font-semibold hover:bg-green-800 transition-colors"
          >
            Call: 9830409535
          </a>
          <a 
            href="mailto:atanumaitra2013@gmail.com" 
            className="bg-white text-green-700 px-8 py-3 rounded font-semibold border border-green-700 hover:bg-green-50 transition-colors"
          >
            Email Us
          </a>
        </div>
        <p className="mt-4 text-gray-600">
          Landline: 033-35948742 | Alt: 9230559443 / 9830579535
        </p>
      </div>
    </div>
  );
}