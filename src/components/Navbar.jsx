"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { MicroscopeIcon } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { MobileNav } from "./ui/MobileNav"
import Image from "next/image"

const aboutItems = [
  {
    title: "About Conference",
    href: "/about-conference",
    description: "Learn more about our conference and its objectives",
  },
  {
    title: "About ZEP Research",
    href: "/about-organizers",
    description: "Discover ZEP Research and our mission",
  },
]

const paperItems = [
  {
    title: "Theme and Topics",
    href: "/theme-and-topics",
    description: "Explore the conference themes and topics",
  },
  {
    title: "Papers Format",
    href: "/papers-format",
    description: "Guidelines for paper submissions",
  },
  {
    title: "Mode of Presentation",
    href: "/mode-of-presentation",
    description: "Learn about different presentation modes",
  },
  {
    title: "Schedule",
    href: "/schedule",
    description: "Learn about all day schedule",
  },
]

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <motion.a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          whileHover={{ scale: 1.02 }}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </motion.a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0)
  })

  return (
    <motion.div
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-background"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-16 items-center px-4 max-w-screen-2xl mx-auto">
        {/* Mobile Menu */}
        <MobileNav />

        {/* Left Section - Hidden on Mobile */}
        <div className="hidden lg:flex gap-6 mr-6">
          <Link
            href="/committee"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Committee
          </Link>
          <Link
            href="/submission"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Submission
          </Link>
          <Link
            href="/sponsorship"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Sponsorship
          </Link>
          <Link
            href="/venue"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Venue
          </Link>
          {/* <Link
            href="/schedule"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            schedule
          </Link> */}
        </div>

        {/* Center Logo */}
        <motion.div
          className="flex-1 flex justify-center "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center space-x-2 ml-20">
          <h1 className=" font-bold font-mono text-3xl inline-flex items-center"><MicroscopeIcon/>|ICASEM</h1>
          </Link>
        </motion.div>

        {/* Right Section - Hidden on Mobile */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <span className="flex items-center">
                    About 
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {aboutItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <span className="flex items-center">
                    Call for Paper 
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {paperItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact Us
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/registration"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
            >
              Registration
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

