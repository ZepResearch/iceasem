"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, FileText, Check, ArrowRight, BookOpen, Users, Award } from "lucide-react"

export default function PapersFormatPage() {
  const generalRequirements = [
    "Use the provided IEEE templates without modifying margins, font sizes, or styles",
    "Abstract submissions should not exceed 300 words with 4-6 keywords",
    "Full papers should be between 6-8 pages, including figures, tables, and references",
    "All submissions must be in PDF format with embedded fonts",
    "Papers must be original work not previously published or under review elsewhere",
  ]

  const templates = [
    {
      title: "Abstract Template",
      description: "The abstract should be a concise summary of your research, not exceeding 300 words. It should include the research objectives, methodology, results, and conclusions. Use clear, concise language and avoid jargon or acronyms.",
      file: "/templates/ICASEM_Abstract_Template.docx",
      icon: <FileText className="h-6 w-6 text-[#00adef]" />,
      format: "DOCX",
    },
    {
      title: "Full Paper Template",
      description: "Full papers should be between 3000-5000 words, excluding references and appendices. Use Times New Roman, 12-point font, double-spaced. Include an abstract, keywords, introduction, methodology, results, discussion, conclusion, and references. Follow APA 7th edition for citations and references.",
      file: "/templates/ICASEM_Fullpaper_Template.docx",
      icon: <BookOpen className="h-6 w-6 text-[#00adef]" />,
      format: "DOCX",
    },
    {
      title: "Presentation Template",
      description: "Posters should be designed in A0 size (841 x 1189 mm) in portrait orientation. Use a clear, readable font (at least 24-point for body text, larger for headings). Include a title, authors, affiliation, introduction, methods, results, conclusions, and key references. Use graphics, charts, and images to convey your research visually.",
      file: "/templates/ICASEM_Presentation_Template.pptx",
      icon: <Users className="h-6 w-6 text-[#00adef]" />,
      format: "PPTX",
    },
  ]

  const submissionTypes = [
    {
      title: "Research Papers",
      description: "Original research contributions in Applied Science, Engineering & Management",
      requirements: ["6-8 pages", "IEEE format", "Double-blind review", "Oral presentation"],
      icon: <BookOpen className="h-8 w-8 text-[#00adef]" />,
    },
    {
      title: "Short Papers",
      description: "Work-in-progress, case studies, or preliminary research findings",
      requirements: ["4-6 pages", "IEEE format", "Peer review", "Poster session"],
      icon: <FileText className="h-8 w-8 text-[#00adef]" />,
    },
    {
      title: "Industry Papers",
      description: "Practical applications and industry case studies",
      requirements: ["4-8 pages", "IEEE format", "Industry review", "Special session"],
      icon: <Award className="h-8 w-8 text-[#00adef]" />,
    },
  ]

  return (
    <main className="bg-[#f0f4f8]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Geometric shapes */}
          <div
            className="absolute right-[10%] top-[20%] w-32 h-32 bg-[#00adef]/20"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              transform: "rotate(15deg)",
            }}
          ></div>
          <div
            className="absolute left-[15%] bottom-[30%] w-24 h-24 bg-[#07416b]/15"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              transform: "rotate(-10deg)",
            }}
          ></div>

          {/* Small floating circles */}
          <div
            className="absolute left-[20%] top-[15%] w-16 h-16 rounded-full bg-[#00adef]/20 animate-pulse"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute right-[25%] bottom-[20%] w-12 h-12 rounded-full bg-[#07416b]/15 animate-pulse"
            style={{ animationDelay: "-2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07416b] mb-6">
              Paper Format
              <span className="relative inline-block mx-2 ml-4">
                <span className="relative z-10">Guidelines</span>
                <span className="absolute inset-0 bg-[#00adef] rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
            </h1>
            <p className="text-xl text-[#07416b]/80 mb-8">
              Download templates and learn how to format your 2<sup>nd</sup>ICASEM 2025 submission
            </p>
          </div>
        </div>
      </section>

      {/* Paper Format Guidelines Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px] border-4 border-[#00adef]/20">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Paper Format Guidelines"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07416b]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center border border-[#00adef]/30">
                  <span className="text-[#07416b] font-medium">Ensure your research meets standards</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Paper Format Guidelines</h2>
              <p className="text-[#07416b]/80 mb-4">
                All submissions to 2<sup>nd</sup>ICASEM 2025 must follow IEEE formatting guidelines to ensure consistency,
                readability, and professional presentation. We provide comprehensive templates for different types of
                submissions to streamline this process.
              </p>
              <p className="text-[#07416b]/80 mb-6">
                Please carefully review the guidelines below and use the appropriate template for your submission type.
                Papers that do not follow these guidelines will be returned for revision before being considered for
                review.
              </p>

              {/* <div className="bg-[#f0f4f8] rounded-3xl p-6 border border-[#00adef]/20">
                <h3 className="text-xl font-bold text-[#07416b] mb-4">General Requirements</h3>
                <ul className="space-y-3">
                  {generalRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#00adef] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-[#07416b]/80 text-sm leading-relaxed">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>



      {/* Citation Style Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#07416b] mb-6">Citation Style</h2>
              <p className="text-[#07416b]/80 mb-4">
                2<sup>nd</sup>ICASEM 2025 uses the IEEE citation style for all submissions. Please ensure that your references are
                formatted according to this standard. The templates provided include examples of how to format different
                types of references including journal articles, conference papers, books, and web sources.
              </p>
              <p className="text-[#07416b]/80 mb-6">
                For detailed information on IEEE citation style, please refer to the IEEE Reference Guide or consult the
                IEEE Editorial Style Manual available on the IEEE website.
              </p>
              <div className="bg-[#f0f4f8] rounded-2xl p-4 border border-[#00adef]/20">
                <h4 className="font-semibold text-[#07416b] mb-2">IEEE Reference Example:</h4>
                <p className="text-sm text-[#07416b]/80 font-mono">
                  [1] A. Author, "Title of paper," in Proc. ICASEM, Kuala Lumper, Malaysia, 2025, pp. 1-8.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#07416b] mb-6">Language & Quality</h2>
              <p className="text-[#07416b]/80 mb-4">
                All submissions must be in English with clear, professional writing. We strongly recommend having your
                paper reviewed by a native English speaker or professional editing service before submission to ensure
                clarity and readability.
              </p>
              <p className="text-[#07416b]/80 mb-6">
                Pay particular attention to the clarity of your abstract, introduction, and conclusion, as these
                sections are critical for reviewers and readers to understand the significance and contribution of your
                work.
              </p>
              <div className="bg-[#f0f4f8] rounded-2xl p-4 border border-[#00adef]/20">
                <h4 className="font-semibold text-[#07416b] mb-2">Quality Checklist:</h4>
                <ul className="text-sm text-[#07416b]/80 space-y-1">
                  <li>• Grammar and spelling check</li>
                  <li>• Clear and concise writing</li>
                  <li>• Proper technical terminology</li>
                  <li>• Consistent formatting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Templates Section */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Download Templates</h2>
            <p className="text-[#07416b]/80">Use our official IEEE-compliant templates for your submissions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm text-center border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{template.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-[#07416b] mb-4 group-hover:text-[#00adef] transition-colors duration-300">
                  {template.title}
                </h3>
                <p className="text-[#07416b]/80 mb-4 text-sm leading-relaxed">{template.description}</p>
                <div className="mb-6">
                  <span className="bg-[#00adef]/10 text-[#00adef] px-3 py-1 rounded-full text-xs font-semibold">
                    {template.format}
                  </span>
                </div>
                <Link href={template.file}>
                  <Button
                    variant="outline"
                    className="border-[#00adef] text-[#00adef] hover:bg-[#00adef] hover:text-white rounded-full w-full group-hover:translate-y-1 transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Template
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-12 text-center">Submission Tips</h2>

            <div className="bg-[#f0f4f8] rounded-3xl p-8 shadow-sm border border-[#00adef]/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#07416b] mb-2">Start Early</h3>
                    <p className="text-[#07416b]/80 text-sm leading-relaxed">
                      Begin preparing your submission well before the deadline to allow time for revisions, formatting,
                      and quality checks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#07416b] mb-2">Follow IEEE Standards</h3>
                    <p className="text-[#07416b]/80 text-sm leading-relaxed">
                      Strictly adhere to IEEE formatting requirements, including page limits, citation style, and
                      template usage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#07416b] mb-2">Clear Abstract</h3>
                    <p className="text-[#07416b]/80 text-sm leading-relaxed">
                      Write a concise, informative abstract that clearly states your research question, methodology, key
                      findings, and contribution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#07416b] mb-2">Quality Review</h3>
                    <p className="text-[#07416b]/80 text-sm leading-relaxed">
                      Thoroughly proofread for errors and have colleagues review your paper for clarity and technical
                      accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#07416b] to-[#00adef] rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-4xl font-bold mb-4">Ready to Submit Your Research?</h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Download the appropriate template and prepare your submission for 2<sup>nd</sup>ICASEM 2025 following our IEEE
                formatting guidelines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/submission">
                  <Button className="bg-white text-[#07416b] px-8 py-4 rounded-full hover:bg-gray-100 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Submit Your Paper
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/theme-and-topics">
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white hover:text-[#07416b] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                  >
                    View Research Topics
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
