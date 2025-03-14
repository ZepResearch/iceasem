import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, MapPin, Phone } from "lucide-react"


export const metadata = {
  title: 'ICASEM 2025 Privacy Policy | Intl. Conf. on Science & Engg.',
  description: 'Learn about ICASEM 2025, a premier conference uniting global experts in applied science, engineering, and management. Join us in Vietnam for groundbreaking research and networking.',
  keywords: [
    'ICASEM 2025',
    'about ICASEM',
    'applied science conference',
    'engineering conference',
    'management conference',
    'Vietnam conference 2025',
    'academic conference',
    'research conference',
    'scientific networking',
    'innovation conference'
  ],
  openGraph: {
    title: 'ICASEM 2025 Privacy Policy | Intl. Conf. on Science & Engg.',
    description: 'Join leading experts at ICASEM 2025 in Vietnam. Explore cutting-edge research in applied science, engineering, and management while networking with global innovators.',
    type: 'website',
    
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ICASEM 2025',
    description: 'Join leading experts at ICASEM 2025 in Vietnam. Explore cutting-edge research in applied science, engineering, and management.',
   
  }
}
export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-2 pb-2 underline underline-offset-4 decoration-blue-400 decoration-wavy inline-block">
        Privacy Policy
      </h1>
      
      <Card className="mt-8 bg-white shadow-lg">
        <CardHeader className="bg-gradient-to-br from-[#679ce1] to-[#a4b4d8] text-white rounded-md">
          <CardTitle className="text-2xl drop-shadow-md">ICASEM Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            The International Conference on Applied Science, Engineering & Management (ICASEM) is committed to protecting your privacy and personal data. This policy details our data handling practices.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="information-collected">
              <AccordionTrigger>Information We Collect</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Academic Information:</strong> Research papers, abstracts, affiliations, and credentials.</li>
                  <li><strong>Personal Details:</strong> Name, contact information, and institutional affiliations.</li>
                  <li><strong>Registration Data:</strong> Payment information and conference preferences.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="information-usage">
              <AccordionTrigger>Data Usage</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Conference registration and paper submission processing.</li>
                  <li>Publication of proceedings and academic materials.</li>
                  <li>Communication about conference updates and future events.</li>
                  <li>Research collaboration facilitation among participants.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-sharing">
              <AccordionTrigger>Information Sharing</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Academic publishers for conference proceedings.</li>
                  <li>Program committee members for paper review.</li>
                  <li>Service providers for conference organization.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="academic-rights">
              <AccordionTrigger>Academic Rights</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Control over publication of research materials.</li>
                  <li>Access to submitted papers and presentation materials.</li>
                  <li>Choice in research collaboration opportunities.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-protection">
              <AccordionTrigger>Data Protection</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  We employ industry-standard security measures to protect academic and personal data, including encrypted storage and secure review processes.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Contact Information</h2>
            <div className="text-gray-700 font-medium space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2 text-primary" />
                <span>submit@icasem.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-primary" />
                <span>+91 82600 80050</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-primary" />
                <span>DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}