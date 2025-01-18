"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Instagram, Twitter, ArrowRight, Facebook, Youtube, PhoneCall, MapPin, MailIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

const aboutLinks = [
  { name: "Conference", href: "/about-conference" },
  { name: "Zep Research", href: "/about-organizers" },
  { name: "Committee", href: "/committee" },
  { name: "Sponsorship", href: "/sponsorship" },
  // { name: "Speakers", href: "/speakers" },
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
  { name: "Award", href: "/awards" },
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
        href: "https://www.facebook.com/profile.php?id=61561809783777",
        label: "Facebook"
      },
        { 
          icon: Instagram, 
          href: "https://www.instagram.com/zepresearch",
          label: "Instagram"
        },
        { 
            icon: Twitter, 
            href: "https://x.com/Zepresearch",
            label: "Twitter"
          },
        { 
          icon: Linkedin, 
          href: "https://www.linkedin.com/company/zep-research/",
          label: "LinkedIn"
        },
        { 
            icon: Youtube, 
            href: "https://youtube.com/@zepresearch",
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
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-900 py-8 px-4 md:px-8">
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
            className="text-4xl md:text-5xl font-bold text-[#c4d2f8] max-w-2xl leading-tight"
          >
          <Image src="/whiteLogo.svg" width={150} height={50} alt="ICASEM" className="pb-4 " />
            Where Science, Engineering, and Management Converge
          </motion.h2>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
            {/* About Links */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#c4d2f8]">About</h3>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#c4d2f8]/80 hover:text-[#c4d2f8] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Call for Papers Links */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#c4d2f8]">Call for Papers</h3>
              <ul className="space-y-3">
                {callForPapersLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#c4d2f8]/80 hover:text-[#c4d2f8] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#c4d2f8]">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#c4d2f8]/80 hover:text-[#c4d2f8] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#c4d2f8]">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#c4d2f8]/80 hover:text-[#c4d2f8] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links and CTA */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-[#c4d2f8]">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4d66ac] text-white p-3 rounded-full hover:bg-[#4360b1]/80 transition-colors duration-300"
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
                className="bg-[#ff9966] hover:bg-[#ff9966]/90 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
              >
              <Link href="/registration" >
                Register Now
              </Link>
              </Button>
              <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <span className="inline-block px-3 py-1 bg-[#ff9966]/20 text-[#ff9966] rounded-full text-xs font-medium">
                  Call for Papers
                </span>
                <h3 className="text-2xl font-bold text-gray-900">Submit your paper</h3>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#c4d2f8] text-gray-900 px-6 py-3 rounded-full flex items-center justify-between w-full group transition-colors duration-300 hover:bg-[#c4d2f8]/90"
                >
                <Link href="/submission" className="inline-flex items-center gap-2">
                  <span className="font-semibold ">Submit now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div variants={item} className="pt-2">
              <h3 className="text-xl font-semibold text-[#c4d2f8]">Contact Us</h3>
              <ul className=" gap-7  flex">
                <li className="text-[#c4d2f8] text-lg inline-flex gap-2">
                  <span className="font-semibold"><MailIcon/></span> submit@icasem.org
                </li>
                <li className="text-[#c4d2f8] text-lg inline-flex gap-2">
                  <span className="font-semibold"><PhoneCall/></span>91+ 82600 80050
                </li>
                <li className="text-[#c4d2f8] text-lg inline-flex gap-2">
                  <span className="font-semibold"><MapPin/></span> Vietnam
                </li>
              </ul>
            </motion.div>
        {/* Copyright */}
        <motion.div 
          variants={item}
          className="mt-4 pt-2 border-t border-[#c4d2f8]/60 text-center text-base text-[#c4d2f8]/90"
        >
          © 2025 ICASEM. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

