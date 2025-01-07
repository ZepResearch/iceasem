"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Instagram, Twitter, ArrowRight, Facebook, Youtube } from 'lucide-react'
import { Button } from "@/components/ui/button"

const aboutLinks = [
  { name: "Conference", href: "/about-conference" },
  { name: "Zep Research", href: "/about-organizers" },
  { name: "Committee", href: "/committee" },
  { name: "Sponsorship", href: "/sponsorship" },
  { name: "Speakers", href: "/speakers" },
]

const callForPapersLinks = [
  { name: "Theme and Topics", href: "/theme-and-topics" },
  { name: "Papers Format", href: "/papers-format" },
  { name: "Mode of Presentation", href: "/mode-of-presentation" },
]

const quickLinks = [
  { name: "Submission", href: "/submission" },
  { name: "Venue", href: "/venue" },
  { name: "Contact", href: "/contact" },
  { name: "Award", href: "/award" },
  { name: "Registration", href: "/registration" },
]

const legalLinks = [
  { name: "Terms & Conditions", href: "/terms-&-condition" },
  { name: "Cancellation Policy", href: "/cancellation-policy" },
  { name: "Privacy Policy", href: "/privacy-policy" },
]

const socialLinks = [
    { 
        icon: Facebook, 
        href: "https://linkedin.com",
        label: "Facebook"
      },
      { 
          icon: Instagram, 
          href: "https://instagram.com",
          label: "Instagram"
        },
        { 
            icon: Twitter, 
            href: "https://twitter.com",
            label: "Twitter"
          },
        { 
          icon: Linkedin, 
          href: "https://linkedin.com",
          label: "LinkedIn"
        },
        { 
            icon: Youtube, 
            href: "https://twitter.com",
            label: "Youtube"
          },
 
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#c5e167] to-[#a4d8b4] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Heading */}
          <motion.h2 
            variants={item}
            className="text-4xl md:text-5xl font-bold text-[#1d3c34] max-w-2xl leading-tight"
          >
            Where Science, Engineering, and Management Converge
          </motion.h2>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* About Links */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1d3c34]">About</h3>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#1d3c34]/80 hover:text-[#1d3c34] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Call for Papers Links */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1d3c34]">Call for Papers</h3>
              <ul className="space-y-3">
                {callForPapersLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#1d3c34]/80 hover:text-[#1d3c34] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1d3c34]">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#1d3c34]/80 hover:text-[#1d3c34] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1d3c34]">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#1d3c34]/80 hover:text-[#1d3c34] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links and CTA */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1d3c34]">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1d3c34] text-white p-3 rounded-full hover:bg-[#1d3c34]/80 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <Button 
                variant="default" 
                className="bg-[#ff9966] hover:bg-[#ff9966]/90 text-[#1d3c34] font-semibold px-6 py-3 rounded-full transition-colors duration-300"
              >
              <Link href="/registration" >
                Register Now
              </Link>
              </Button>
              <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <span className="inline-block px-3 py-1 bg-[#ff9966]/20 text-[#ff9966] rounded-full text-xs font-medium">
                  Call for Papers
                </span>
                <h3 className="text-2xl font-bold text-[#1d3c34]">Submit your paper</h3>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1d3c34] text-white px-6 py-3 rounded-full flex items-center justify-between w-full group transition-colors duration-300 hover:bg-[#1d3c34]/90"
                >
                <Link href="/submission" className="inline-flex">
                  <span className="font-semibold">Submit now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          variants={item}
          className="mt-16 pt-8 border-t border-[#1d3c34]/60 text-center text-sm text-[#1d3c34]/90"
        >
          © 2025 ICASEM. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

