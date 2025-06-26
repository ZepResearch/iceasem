"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Users, Globe, Award, BookOpen, Cog, TrendingUp, Building2 } from "lucide-react"

export default function AboutOrganizersPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Conference Chair",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Program Director",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Emma Watkins",
      role: "Research Coordinator",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Thomas Mann",
      role: "Technical Lead",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const achievements = [
    {
      icon: <Globe className="h-8 w-8 text-[#00adef]" />,
      title: "Global Reach",
      description: "Conferences and research initiatives spanning 50+ countries across 6 continents",
    },
    {
      icon: <Users className="h-8 w-8 text-[#00adef]" />,
      title: "Academic Network",
      description: "Connected network of 15,000+ researchers, academics, and industry professionals",
    },
    {
      icon: <Award className="h-8 w-8 text-[#00adef]" />,
      title: "Research Excellence",
      description: "Facilitated publication of 8,000+ peer-reviewed research papers in indexed journals",
    },
    {
      icon: <Target className="h-8 w-8 text-[#00adef]" />,
      title: "Industry Impact",
      description: "Partnerships with 300+ organizations driving innovation in applied sciences and engineering",
    },
  ]

  const focusAreas = [
    {
      icon: <BookOpen className="h-6 w-6 text-[#00adef]" />,
      title: "Applied Science Research",
      description: "Advancing theoretical knowledge into practical applications",
    },
    {
      icon: <Cog className="h-6 w-6 text-[#00adef]" />,
      title: "Engineering Innovation",
      description: "Promoting breakthrough technologies and engineering solutions",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#00adef]" />,
      title: "Management Excellence",
      description: "Developing modern management strategies and organizational methodologies",
    },
    {
      icon: <Building2 className="h-6 w-6 text-[#00adef]" />,
      title: "Industry Collaboration",
      description: "Bridging academia and industry for practical implementation",
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
              About
              <span className="relative inline-block mx-2 ml-4">
                <span className="relative z-10">Organizers</span>
                <span className="absolute inset-0 bg-[#00adef] rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
            </h1>
            <p className="text-xl text-[#07416b]/80 mb-8">
              Meet the team behind the International Conference on Applied Science, Engineering & Management
            </p>
          </div>
        </div>
      </section>

      {/* About ICASEM Organizers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px] border-4 border-[#00adef]/20">
              <Image
                src="/gallery/organizer.webp"
                alt="ICASEM Organizing Team"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center border border-[#00adef]/30">
                  <span className="text-[#07416b] font-medium">Excellence in Organization</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">About Zep Research Organizers</h2>
              <p className="text-[#07416b]/80 mb-4">
              Zep Research is a global leader in advancing academic excellence and fostering innovation. Specializing in organizing impactful conferences, research initiatives, and collaboration opportunities, Zep Research creates dynamic environments where researchers, academics, and industry professionals come together to share knowledge, exchange ideas, and collaborate on groundbreaking work across various industries.
              </p>
              <p className="text-[#07416b]/80 mb-4">
              With a commitment to providing a platform for high-quality research dissemination, Zep Research enables individuals and institutions to engage in meaningful discussions about emerging trends, challenges, and solutions. The focus spans diverse fields such as tourism, hospitality, education, sustainability, and technology. By connecting experts, thought leaders, and innovators, Zep Research drives progress and fosters advancements that leave a lasting impact on both academia and industry.
              </p>
           
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
              At ICASEM, our mission is to bridge the gap between theoretical knowledge and practical application by
              fostering innovation, encouraging cross-disciplinary collaboration, and accelerating breakthroughs in
              Applied Science, Engineering & Management. We believe that transformative solutions emerge when diverse
              minds unite — researchers, engineers, managers, and innovators working together.
            </p>
            <p className="text-xl text-[#07416b]/80">
              ICASEM is more than a conference; it's a catalyst for real-world impact. Our goal is to create a
              collaborative ecosystem where cutting-edge research meets practical implementation, partnerships flourish
              organically, and emerging talents are empowered to lead the next generation of technological and
              managerial advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-12 text-center">Our Focus Areas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-[#f0f4f8] rounded-3xl p-6 text-center border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{area.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-[#07416b] mb-2">{area.title}</h3>
                <p className="text-[#07416b]/80 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-12 text-center">Our Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{achievement.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-[#07416b] mb-4">{achievement.title}</h3>
                <p className="text-[#07416b]/80">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Our Vision</h3>
            <p className="text-xl text-[#07416b]/80 mb-8">
              To be the premier global platform for advancing Applied Science, Engineering & Management through
              innovative research, collaborative partnerships, and knowledge exchange that drives technological progress
              and organizational excellence worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-[#f0f4f8] rounded-3xl p-6 border border-[#00adef]/20">
                <div className="text-3xl font-bold text-[#07416b] mb-2">2025</div>
                <p className="text-[#07416b]/80">Year of Innovation</p>
              </div>

              <div className="bg-[#f0f4f8] rounded-3xl p-6 border border-[#00adef]/20">
                <div className="text-3xl font-bold text-[#07416b] mb-2">500+</div>
                <p className="text-[#07416b]/80">Expected Participants</p>
              </div>

              <div className="bg-[#f0f4f8] rounded-3xl p-6 border border-[#00adef]/20">
                <div className="text-3xl font-bold text-[#07416b] mb-2">50+</div>
                <p className="text-[#07416b]/80">Countries Represented</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Optional, currently commented out but ready for use */}
      {/* <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-12 text-center">ICASEM Organizing Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm group border border-[#00adef]/20 hover:shadow-lg transition-all duration-300">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07416b]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#07416b]">{member.name}</h3>
                  <p className="text-[#07416b]/80">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#e8f2ff] to-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#00adef]/20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold text-[#07416b] mb-2">Partner with ICASEM</h3>
                <p className="text-[#07416b]/80 max-w-xl">
                  Interested in collaborating with us for future conferences or research initiatives? Get in touch to
                  explore partnership opportunities in Applied Science, Engineering & Management.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0099d4] hover:to-[#05334a] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
