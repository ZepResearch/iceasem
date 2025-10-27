"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Calendar, MapPin, Youtube, Mail, Phone, Globe, Users, Award, BookOpen, Building2 } from 'lucide-react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Navigation links grouped for footer
  const footerLinks = [
    {
      title: "About",
      links: [
        { href: "/about-conference", label: "About Conference" },
        { href: "/about-organizers", label: "About Organizers" },
      ],
    },
    {
      title: "Program",
      links: [
        { href: "/theme-and-topics", label: "Themes and Topics" },
        { href: "/papers-format", label: "Paper Formats" },
        { href: "/mode-of-presentation", label: "Mode of Presentation" },
        { href: "/schedule", label: "Conference Schedule" },
      ],
    },
    {
      title: "Participate",
      links: [
        { href: "/committee", label: "Committee" },
        { href: "/submission", label: "Submission" },
        { href: "/venue", label: "Venue" },
        { href: "/awards", label: "Awards" },
      ],
    },
    {
      title: "Connect",
      links: [
        { href: "/contact", label: "Contact" },
        { href: "/sponsorship", label: "Exhibit & Sponsor" },
        { href: "/registration", label: "Registration" },
        // { href: "/privacy-policy", label: "Privacy Policy" },
      ],
    },
  ]

  // Quick stats for the conference
  const conferenceStats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "500+",
      label: "Expected Attendees",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      number: "50+",
      label: "Countries",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      number: "100+",
      label: "Research Papers",
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "25+",
      label: "Expert Speakers",
    },
  ]

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-[#07416b] text-white overflow-hidden">
      {/* 3D Geometric Elements with ICASEM colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large sphere */}
        <div
          className="absolute -right-20 -bottom-40 w-80 h-80 rounded-full bg-gradient-to-tl from-[#00adef]/30 via-[#07416b]/40 to-[#00adef]/30"
          style={{ filter: "blur(40px)" }}
        ></div>

        {/* Small floating circles */}
        <div
          className="absolute left-1/4 top-1/4 w-16 h-16 rounded-full bg-[#00adef]/10 animate-pulse"
          style={{ animationDelay: "0s" }}
        ></div>

        <div
          className="absolute right-1/3 top-1/2 w-12 h-12 rounded-full bg-[#00adef]/10 animate-pulse"
          style={{ animationDelay: "-2s" }}
        ></div>

        <div
          className="absolute left-1/2 bottom-1/4 w-20 h-20 rounded-full bg-[#00adef]/10 animate-pulse"
          style={{ animationDelay: "-1s" }}
        ></div>

        {/* Geometric shapes */}
        <div
          className="absolute left-10 bottom-10 w-32 h-32 bg-[#00adef]/5"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            transform: "rotate(15deg)",
          }}
        ></div>

        <div
          className="absolute right-1/4 top-10 w-24 h-24 bg-[#00adef]/5"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            transform: "rotate(-10deg)",
          }}
        ></div>

        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-px w-full bg-[#00adef] absolute top-1/4"></div>
          <div className="h-px w-full bg-[#00adef] absolute top-2/4"></div>
          <div className="h-px w-full bg-[#00adef] absolute top-3/4"></div>
          <div className="w-px h-full bg-[#00adef] absolute left-1/4"></div>
          <div className="w-px h-full bg-[#00adef] absolute left-2/4"></div>
          <div className="w-px h-full bg-[#00adef] absolute left-3/4"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-7xl">
        {/* Top Section with Conference Info and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-2">
          {/* Left Side - Conference Information */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Link href="/">
                <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-md px-6 rounded-lg py-2 ">
                  <Image
                    src="/logo.svg" 
                    alt="ICASEM Logo"
                    width={200}  
                    height={50}
                    className="  z-10"
                  />
                </div>
              </Link>
            </div>

            
            <p className="text-white/80 mb-6 max-w-xl leading-relaxed">
              Join us for Kuala Lumpur, Malaysia
 conference bringing together leading researchers to explore cutting-edge innovations in Applied Science, Engineering & Management. 
            
            </p>

         
          </div>

          {/* Right Side - Conference Stats */}
          <div className="grid grid-cols-1 gap-1">
             {/* Conference Details */}
            <div className="space-y-2 mb-2">
              <div className="grid grid-cols-2 gap-4">

              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00adef]/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#00adef]" />
                </div>
                <div>
                  <p className="text-white font-semibold">November 14 <sup>th</sup> -15<sup>th</sup> , 2025</p>
                  <p className="text-white/70 text-sm">Two days of innovation and networking</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00adef]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#00adef]" />
                </div>
                <div>
                  <p className="text-white font-semibold">Kuala Lumper, Malaysia</p>
                  <p className="text-white/70 text-sm">Exact Venue will decalare soon</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00adef]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#00adef]" />
                </div>
                <div>
                  <a
                    href="mailto:submit@icasem.org"
                    className="text-white font-semibold hover:text-[#00adef] transition-colors"
                  >
                    submit@icasem.org
                  </a>
                  <p className="text-white/70 text-sm">Paper submissions & inquiries</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00adef]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#00adef]" />
                </div>
                <div>
                  <a
                    href="tel:+917848854815"
                    className="text-white font-semibold hover:text-[#00adef] transition-colors"
                  >
                    +91 9237388328
                  </a>
                  <p className="text-white/70 text-sm">Conference support hotline</p>
                </div>
              </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00adef] transition-colors group"
              >
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00adef] transition-colors group"
              >
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00adef] transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00adef] transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00adef] transition-colors group"
              >
                <Youtube className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-4 text-[#00adef]">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/70  hover:text-[#00adef] transition-colors flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

    

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0 md:border-r-2 md:border-b-0 border-b-2  pb-4">
            <p className="text-white/60 text-sm">
              © 2025 ICASEM. All rights reserved. Organized with excellence in Kuala Lumpur, Malaysia
.
            </p>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2  gap-8 text-center">
            <Link href="/terms-&-condition" className="text-white/60 text-sm hover:text-[#00adef] transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-white/60 text-sm hover:text-[#00adef] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cancellation-policy" className="text-white/60 text-sm hover:text-[#00adef] transition-colors">
              Cancellation Policy
            </Link>
            <Link href="/complaints-policy" className="text-white/60 text-sm hover:text-[#00adef] transition-colors">
             Complaints Policy
            </Link>



            <Link href="/disability-discrimination-policy" className="text-white/60 text-sm hover:text-[#00adef] transition-colors ">
             Disability Discrimination Policy
            </Link>
            <Link href="/health-and-safety-policy" className="text-white/60 text-sm hover:text-[#00adef] transition-colors">
             Health and Safety Policy
            </Link>
            <Link href="/equal-treatment-policy" className="text-white/60 text-sm hover:text-[#00adef] transition-colors">
             Equal Treatment Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 w-12 h-12 rounded-full bg-[#00adef] text-white flex items-center justify-center shadow-lg transition-all duration-300 z-50 hover:bg-[#0099d4] ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}
