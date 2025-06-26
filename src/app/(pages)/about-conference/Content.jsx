"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight, BookOpen, Cog, TrendingUp } from "lucide-react"

export default function AboutConferencePage() {
  const conferenceHighlights = [
    {
      icon: <BookOpen className="h-8 w-8 text-[#00adef]" />,
      title: "Applied Science Innovation",
      description:
        "Explore cutting-edge research and practical applications in applied sciences that solve real-world challenges.",
    },
    {
      icon: <Cog className="h-8 w-8 text-[#00adef]" />,
      title: "Engineering Excellence",
      description: "Discover breakthrough engineering solutions and technologies shaping the future of industry.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#00adef]" />,
      title: "Management Innovation",
      description: "Learn advanced management strategies and methodologies for modern organizational success.",
    },
  ]

  const whyAttendReasons = [
    {
      title: "Explore Cutting-Edge Research",
      description:
        "Gain insights into groundbreaking research in applied sciences, engineering innovations, and management methodologies that are driving technological advancement and organizational excellence.",
    },
    {
      title: "Network with Global Experts",
      description:
        "Connect with 50+ distinguished academicians, 100+ research scholars, and 25+ industry professionals from over 50 countries, all dedicated to advancing applied science, engineering, and management.",
    },
    {
      title: "Foster International Collaboration",
      description:
        "Build partnerships with leading researchers and industry experts to spark new ideas, joint research projects, and cross-disciplinary collaborations.",
    },
    {
      title: "Recognition and Awards",
      description:
        "Compete for 10+ prestigious awards recognizing outstanding contributions to applied science, engineering innovation, and management excellence.",
    },
    {
      title: "Practical Knowledge Exchange",
      description:
        "Participate in dynamic technical sessions, workshops, and panel discussions focused on real-world applications and industry best practices.",
    },
    {
      title: "Publication Opportunities",
      description:
        "Present your research and get published in indexed journals, contributing to the global knowledge base in applied sciences, engineering, and management.",
    },
  ]

  return (
    <main className="bg-[#f0f4f8]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large circle in top right */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#00adef]/20"></div>

          {/* Small circle in top left */}
          <div className="absolute left-10 top-20 w-24 h-24 rounded-full bg-[#07416b]/30"></div>

          {/* Medium circle in bottom left */}
          <div className="absolute -left-10 bottom-40 w-40 h-40 rounded-full bg-[#00adef]/15"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07416b] mb-6">
              About
              <span className="relative inline-block mx-2 ml-4">
                <span className="relative z-10">ICASEM</span>
                <span className="absolute inset-0 bg-[#00adef] rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
              2025
            </h1>
            <p className="text-xl text-[#07416b] mb-8">
              International Conference on Applied Science, Engineering & Management
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center bg-white rounded-full px-5 py-2 shadow-sm border border-[#00adef]/20">
                <Calendar className="h-5 w-5 text-[#00adef] mr-2" />
                <span className="text-[#07416b]">November 14-15, 2025</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-5 py-2 shadow-sm border border-[#00adef]/20">
                <MapPin className="h-5 w-5 text-[#00adef] mr-2" />
                <span className="text-[#07416b]">Singapore</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-5 py-2 shadow-sm border border-[#00adef]/20">
                <Users className="h-5 w-5 text-[#00adef] mr-2" />
                <span className="text-[#07416b]">500+ Global Participants</span>
              </div>
            </div>
            <Link href="/registration">
              <Button className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0099d4] hover:to-[#05334a] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About the Conference Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">About the Conference</h2>
              <p className="text-[#07416b]/80 mb-4">
                The International Conference on Applied Science, Engineering & Management (ICASEM) 2025, taking place in
                the dynamic city-state of Singapore, aims to foster innovation and collaboration across multiple
                disciplines where applied science, engineering excellence, and management innovation converge.
              </p>
              <p className="text-[#07416b]/80 mb-4">
                From November 14 to 15, 2025, ICASEM will bring together leading researchers, industry professionals,
                and academics from around the world to share cutting-edge research, practical solutions, and
                technological breakthroughs.
              </p>
              <p className="text-[#07416b]/80">
                The conference features keynote presentations, technical sessions, and interactive workshops designed to
                advance knowledge and foster partnerships that drive innovation in applied sciences, engineering, and
                management. With a focus on practical applications and forward-thinking research, ICASEM 2025 promises
                to be an inspiring platform for shaping the future of multidisciplinary collaboration.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px] border-4 border-[#00adef]/20">
              <Image
                src="/gallery/about-conference.webp"
                alt="ICASEM Conference"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center border border-[#00adef]/30">
                  <span className="text-[#07416b] font-medium">Join us in Singapore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gradient-to-br from-[#f0f4f8] to-[#e8f2ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Our Mission</h3>
            <p className="text-xl text-[#07416b]/80 mb-8">
              ICASEM aims to bridge the gap between theoretical knowledge and practical application by bringing together
              leading researchers, industry professionals, and academics to share innovations, discuss challenges, and
              forge partnerships that advance applied science, engineering, and management globally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#00adef]/20 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-3xl font-bold text-[#07416b] mb-2">500+</h3>
                <p className="text-[#07416b]/80">Global Participants</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#00adef]/20 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-3xl font-bold text-[#07416b] mb-2">3</h3>
                <p className="text-[#07416b]/80">Core Disciplines: Applied Science, Engineering, Management</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#00adef]/20 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-3xl font-bold text-[#07416b] mb-2">1</h3>
                <p className="text-[#07416b]/80">
                  Vision: Advancing Innovation Through Multidisciplinary Collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-12 text-center">Conference Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conferenceHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-[#f0f4f8] rounded-3xl p-8 text-center border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{highlight.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-[#07416b] mb-4">{highlight.title}</h3>
                <p className="text-[#07416b]/80">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-[#07416b]/80 mb-6">
              Join us in Singapore from November 14-15, 2025, to be part of a global community dedicated to advancing
              applied science, engineering excellence, and management innovation!
            </p>
            <Link href="/schedule">
              <Button className="bg-gradient-to-r from-[#07416b] to-[#00adef] hover:from-[#05334a] hover:to-[#0099d4] text-white rounded-full text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                View Conference Schedule
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Why Attend ICASEM 2025</h2>
            <p className="text-[#07416b]/80">
              The International Conference on Applied Science, Engineering & Management (ICASEM) is the premier platform
              for exploring innovative solutions and advancing multidisciplinary research and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyAttendReasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-sm border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-[#07416b] mb-3 group-hover:text-[#00adef] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-[#07416b]/80">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Attend Section */}
      <section className="py-16 bg-gradient-to-br from-[#e8f2ff] to-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-12 text-center">Who Can Attend</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#00adef]/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#07416b] mb-3">Academicians & Researchers</h3>
              <p className="text-[#07416b]/80">
                Present your research, exchange knowledge, and collaborate with peers to advance applied science,
                engineering, and management disciplines.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#00adef]/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#07416b] mb-3">Industry Professionals</h3>
              <p className="text-[#07416b]/80">
                Explore innovative solutions and cutting-edge technologies that can drive growth and efficiency in your
                industry sector.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#00adef]/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#07416b] mb-3">Engineers & Technologists</h3>
              <p className="text-[#07416b]/80">
                Discover breakthrough engineering solutions and emerging technologies that are shaping the future of
                various industries.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#00adef]/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#07416b] mb-3">Management Professionals</h3>
              <p className="text-[#07416b]/80">
                Learn advanced management strategies, organizational methodologies, and leadership approaches for modern
                business success.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#00adef]/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#07416b] mb-3">Students & Early Career Researchers</h3>
              <p className="text-[#07416b]/80">
                Learn from experts, present your research, and build professional networks to advance your career in
                applied sciences, engineering, or management.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#00adef]/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#07416b] mb-3">Entrepreneurs & Innovators</h3>
              <p className="text-[#07416b]/80">
                Connect with researchers and industry experts to explore new technologies, business opportunities, and
                collaborative ventures.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#00adef]/20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold text-[#07416b] mb-2">Ready to join ICASEM 2025?</h3>
                <p className="text-[#07416b]/80 max-w-xl">
                  Register now to secure your spot at the premier conference on applied science, engineering, and
                  management innovation.
                </p>
              </div>
              <Link
                href="/registration"
                className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0099d4] hover:to-[#05334a] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
