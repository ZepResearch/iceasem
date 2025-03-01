"use client"

import * as React from "react"
import Link from "next/link"
import { Building2, ChevronDown, Menu } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <Image src={"/logo.svg"} alt="ZEP Research" width={100} height={100} />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-6">
          <Accordion type="single" collapsible>
            <div className="flex flex-col space-y-3">
              <Link
                href="/committee"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Committee
              </Link>
              <Link
                href="/submission"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Submission
              </Link>
              <Link
                href="/sponsorship"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Sponsorship
              </Link>
            </div>
            
            <AccordionItem value="about">
              <AccordionTrigger>About</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/about-conference"
                    className="text-sm transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    About Conference
                  </Link>
                  <Link
                    href="/about-organizers"
                    className="text-sm transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    About ZEP Research
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="papers">
              <AccordionTrigger>Call for Paper</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/theme-and-topics"
                    className="text-sm transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Theme and Topics
                  </Link>
                  <Link
                    href="/papers-format"
                    className="text-sm transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Papers Format
                  </Link>
                  <Link
                    href="/mode-of-presentation"
                    className="text-sm transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Mode of Presentation
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="flex flex-col space-y-3 mt-3">
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/registration"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Registration
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

