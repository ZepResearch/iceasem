"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  FileText,
  Globe,
  Lightbulb,
  Users,
  Cog,
  BookOpen,
  TrendingUp,
  Building2,
  Database,
} from "lucide-react"

export default function ThemeAndTopicsPage() {
  const topics = [
    {
      icon: <BookOpen className="h-8 w-8 text-[#00adef]" />,
      title: "Applied Sciences",
      content: [
        "Advanced Materials and Nanotechnology",
        "Biotechnology and Bioengineering",
        "Applied Physics and Chemistry",
      ],
    },
    {
      icon: <Cog className="h-8 w-8 text-[#00adef]" />,
      title: "Engineering Innovation",
      content: [
        "Artificial Intelligence and Machine Learning Applications",
        "Robotics and Automation Systems",
        "Smart Manufacturing Technologies",
      ],
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#00adef]" />,
      title: "Management and Leadership",
      content: [
        "Strategic Management and Innovation",
        "Project Management Methodologies",
        "Digital Transformation Leadership",
      ],
    },
    {
      icon: <Globe className="h-8 w-8 text-[#00adef]" />,
      title: "Sustainable Technologies",
      content: ["Green Engineering Solutions", "Renewable Energy Systems", "Sustainable Manufacturing Practices"],
    },
    {
      icon: <Database className="h-8 w-8 text-[#00adef]" />,
      title: "Information Technology",
      content: [
        "Cloud Computing and Big Data Analytics",
        "Cybersecurity and Network Systems",
        "Internet of Things Applications",
      ],
    },
    {
      icon: <Building2 className="h-8 w-8 text-[#00adef]" />,
      title: "Industrial Engineering",
      content: ["Supply Chain Optimization", "Quality Management Systems", "Operations Research"],
    },
    {
      icon: <Users className="h-8 w-8 text-[#00adef]" />,
      title: "Civil and Environmental Engineering",
      content: ["Smart Infrastructure Development", "Environmental Impact Assessment", "Sustainable Urban Planning"],
    },
    {
      icon: <FileText className="h-8 w-8 text-[#00adef]" />,
      title: "Research Methodologies",
      content: ["Advanced Research Methods", "Data Analysis and Interpretation", "Experimental Design Techniques"],
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#00adef]" />,
      title: "Business Analytics",
      content: ["Predictive Analytics in Business", "Decision Support Systems", "Business Process Optimization"],
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#00adef]" />,
      title: "Industry 4.0",
      content: ["Digital Twin Technology", "Industrial IoT Applications", "Smart Factory Solutions"],
    },
  ]

  const submissionSteps = [
    {
      number: "1",
      title: "Prepare Your Abstract",
      description:
        "Submit a 300-word abstract outlining your research question, methodology, findings, and relevance to Applied Science, Engineering & Management themes.",
    },
    {
      number: "2",
      title: "Abstract Review",
      description:
        "Abstracts will be reviewed by our multidisciplinary committee of experts. If accepted, you'll be invited to submit a full paper.",
    },
    {
      number: "3",
      title: "Full Paper Submission",
      description:
        "Submit your full paper (6-8 pages) following IEEE formatting guidelines. All papers undergo double-blind peer review by domain experts.",
    },
    {
      number: "4",
      title: "Presentation",
      description:
        "Accepted papers will be presented as oral presentations, poster sessions, or virtual presentations based on your preference and committee recommendations.",
    },
  ]

  return (
    <main className="bg-[#f0f4f8]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large blob in top right */}
          <div
            className="absolute -right-40 -top-40 w-[30rem] h-[30rem] opacity-20"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: "linear-gradient(45deg, #00adef, #07416b)",
            }}
          ></div>

          {/* Small circle in bottom left */}
          <div className="absolute left-20 bottom-20 w-16 h-16 rounded-full bg-[#00adef]/30"></div>

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-[#07416b]/20"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07416b] mb-6">
              Conference
              <span className="relative inline-block mx-2">
                <span className="relative z-10">Tracks</span>
                <span className="absolute inset-0 bg-[#00adef] rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
            </h1>
            <p className="text-xl text-[#07416b]/80 mb-8">Explore the research areas and themes for 2<sup>nd</sup>ICASEM 2025</p>
          </div>
        </div>
      </section>

      {/* Conference Theme Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block border border-[#07416b] rounded-full px-4 py-1 text-sm mb-6 text-[#07416b]">
                Conference Theme
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">
                "Advancing Innovation Through Multidisciplinary Excellence in Applied Science, Engineering & Management"
              </h2>
              <p className="text-[#07416b]/80 mb-4">
                2<sup>nd</sup>ICASEM 2025 explores how the convergence of Applied Science, Engineering, and Management is driving
                unprecedented innovation and solving complex global challenges. As traditional boundaries between
                disciplines continue to blur, new opportunities emerge for breakthrough research and practical
                applications that benefit society.
              </p>
              <p className="text-[#07416b]/80">
                This conference brings together researchers, engineers, managers, and innovators from diverse fields to
                examine cutting-edge developments and future possibilities. We invite contributions that highlight
                innovative approaches to real-world problems, novel applications of technology, and critical
                perspectives on the methodological and practical implications of multidisciplinary research.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px] border-4 border-[#00adef]/20">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Applied Science Engineering Management Innovation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07416b]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center border border-[#00adef]/30">
                  <span className="text-[#07416b] font-medium">Shaping the future through innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 bg-gradient-to-br from-[#f0f4f8] to-[#e8f2ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Conference Tracks</h2>
            <p className="text-[#07416b]/80">
              Research topics and areas available for paper submissions across Applied Science, Engineering & Management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm h-full border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{topic.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-[#07416b] mb-4 group-hover:text-[#00adef] transition-colors duration-300">
                  {topic.title}
                </h3>
                <ul className="space-y-3">
                  {topic.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-[#00adef]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#00adef]"></div>
                      </div>
                      <span className="text-[#07416b]/80 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Submit Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">How to Submit Your Research</h2>
            <p className="text-[#07416b]/80">
              We welcome submissions from researchers, practitioners, and students across all disciplines. The
              submission process involves the following steps:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {submissionSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#f0f4f8] rounded-3xl p-6 shadow-sm relative overflow-hidden border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#00adef]/10 rounded-full group-hover:bg-[#00adef]/20 transition-colors duration-300"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#07416b] mb-3 group-hover:text-[#00adef] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#07416b]/80 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/registration">
              <Button className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0099d4] hover:to-[#05334a] text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Register Now
              </Button>
            </Link>
            <Link href="/submission">
              <Button
                variant="outline"
                className="border-[#07416b] text-[#07416b] hover:bg-[#07416b] hover:text-white rounded-full px-8 py-3 transition-all duration-300"
              >
                Submit Paper <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
              <h3 className="text-2xl lg:text-4xl font-bold mb-4">Ready to Share Your Research?</h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Submit your research paper and be part of the global conversation on Applied Science, Engineering &
                Management innovation at 2<sup>nd</sup>ICASEM 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/submission">
                  <Button className="bg-white text-[#07416b] px-8 py-4 rounded-full hover:bg-gray-100 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Submit Your Paper
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/registration">
                  <Button
                    variant="outline"
                    className="border-white text-black hover:bg-white hover:text-[#07416b] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                  >
                    Register for Conference
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
