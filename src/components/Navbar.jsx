"use client"

import { Menu, ChevronDown, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const navLinks = [
  {
    title: "ABOUT",
    href: "#",
    dropdown: [
      { href: "/about-conference", title: "About Conference" },
      { href: "/about-organizers", title: "About Organizers" },
    ],
  },
  {
    title: "PROGRAM",
    href: "#",
    dropdown: [
      { href: "/theme-and-topics", title: "Themes and Topics" },
      { href: "/papers-format", title: "Paper Formats" },
      { href: "/mode-of-presentation", title: "Mode of Presentation" },
      { href: "/schedule", title: "Conference Schedule" },
    ],
  },
  { title: "COMMITTEE", href: "/committee" },
  { title: "SUBMISSION", href: "/submission" },
  { title: "VENUE", href: "/venue" },
  { title: "AWARDS", href: "/awards" },
  { title: "JOURNALS", href: "/journals" },

  { title: "CONTACT", href: "/contact" },
  { title: "EXHIBIT & SPONSOR", href: "/sponsorship" },
]

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4 pb-4 relative z-50">
      <div className="shadow-lg border-0 bg-white/95 backdrop-blur-sm rounded-lg">
        <header className="flex items-center justify-between px-6 py-4">
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <Image src={"/logo.svg"} alt="logo" height={300} width={190} className="text-white" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 bg-gray-50 px-8 py-3 rounded-full border text-xs relative z-50">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.title} className="relative group">
                  <div
                    className="flex items-center space-x-1 px-4 py-2 hover:bg-gray-100 rounded text-gray-700 text-xs transition-colors duration-200 cursor-pointer"
                    onMouseEnter={() => setOpenDropdown(link.title)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <span>{link.title}</span>
                    <ChevronDown className="w-3 h-3" />
                  </div>
                  
                  {/* Dropdown Menu */}
                  {openDropdown === link.title && (
                    <div 
                      className="absolute top-full left-0 mt-1 min-w-[200px] bg-white rounded-md shadow-lg border z-50"
                      onMouseEnter={() => setOpenDropdown(link.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="flex flex-col py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 hover:bg-gray-100 text-gray-700 text-xs transition-colors duration-200"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.title}
                  href={link.href}
                  className="px-4 py-2 hover:bg-gray-100 rounded text-gray-700 text-xs transition-colors duration-200"
                >
                  {link.title}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
              <span className="sr-only">Open Menu</span>
            </button>
          </div>

          {/* Register Button (Desktop) */}
          <div className="hidden md:block">
            <Link href={"/registration"}>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                REGISTER NOW
              </button>
            </Link>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={closeMobileMenu}>
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-50" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Image src={"/logo.svg"} alt="logo" height={150} width={95} className="text-white" />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Mobile Menu Navigation */}
              <nav className="flex flex-col gap-1 px-6 py-4 flex-1">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.title} className="mb-2">
                      <div className="font-medium text-gray-900 mb-1 text-sm">{link.title}</div>
                      <div className="flex flex-col pl-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="py-2 text-gray-700 hover:text-orange-500 text-sm transition-colors duration-200"
                            onClick={closeMobileMenu}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="py-2 text-gray-700 hover:text-orange-500 text-sm transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {link.title}
                    </Link>
                  )
                )}
              </nav>
              
              {/* Mobile Register Button */}
              <div className="px-6 pb-6">
                <Link href={"/registration"}>
                  <button 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    REGISTER NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default Nav