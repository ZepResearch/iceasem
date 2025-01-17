'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {  Check, Ticket } from 'lucide-react'
import Link from "next/link"


export default function ConferenceTickets() {
  return (
    <div className="min-h-full  p-8 py-24">
      <div className="mx-auto max-w-7xl">
      <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl mb-12 text-pretty  text-center text-gray-900 font-bold"
            >Conference Tickets
            </motion.h1>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left side - Conference Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-full overflow-hidden rounded-2xl bg-gray-200 lg:col-span-1"
          >
            <img
              src='/ticket.jpg'
              alt="Conference"
              className="h-full w-full object-cover select-none"
            />
          </motion.div>

          {/* Right side - Tickets Grid */}
          <div className="space-y-6 lg:col-span-2">


            <div className="grid gap-6 sm:grid-cols-2">
              {/* Virtual Pass Ticket */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="bg-yellow-400 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-2xl font-bold">VIRTUAL</div>
                        <div className="text-sm opacity-80">PASS</div>
                      </div>
                      
                      <div className="flex flex-col items-center px-2">
                        <div className="w-16 border-t border-dashed border-white/30" />
                        <Ticket className="my-1 h-4 w-4 rotate-90 transform" />
                        <div className="w-16 border-t border-dashed border-white/30" />
                      </div>

                      <div className="space-y-1 text-right">
                        <div className="text-2xl font-bold">ONLINE</div>
                        <div className="text-sm opacity-80">ACCESS</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Virtual Pass</div>
                        <div className="text-base font-semibold">Full Conference Access</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-400 drop-shadow-md">$219</div>
                        <div className="text-xs text-gray-500">/person</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <ul className="space-y-2 text-sm">
                      {['Full conference access', 'Networking sessions', 'Workshop materials', 'Lunch and refreshments', 'Certificate of attendance'].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="mr-2 h-3 w-3 text-blue-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                    <Link href={"/registration"}>
                      <Button className="w-full bg-yellow-400 hover:bg-yellow-500" >Register Now</Button>
                      </Link>
                      <p className="mt-2 text-center text-xs text-gray-500">Limited seats available</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Early Bird Physical Pass Ticket */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="bg-blue-600 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-2xl font-bold">PHYSICAL</div>
                        <div className="text-sm opacity-80">PASS</div>
                      </div>
                      
                      <div className="flex flex-col items-center px-2">
                        <div className="w-16 border-t border-dashed border-white/30" />
                        <Ticket className="my-1 h-4 w-4 rotate-90 transform" />
                        <div className="w-16 border-t border-dashed border-white/30" />
                      </div>

                      <div className="space-y-1 text-right">
                        <div className="text-2xl font-bold">EARLY</div>
                        <div className="text-sm opacity-80">BIRD</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Early Bird Physical Pass</div>
                        <div className="text-base font-semibold">VIP Experience</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">$319</div>
                        <div className="text-xs text-gray-500">/person</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <ul className="space-y-2 text-sm">
                      {['All Professional Pass benefits', 'VIP networking dinner', 'Priority seating', 'Exclusive roundtable sessions', '1-year membership access'].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="mr-2 h-3 w-3 text-blue-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                        <Link href={"/registration"}>
                      <Button  className="w-full bg-blue-600 text-white hover:bg-blue-700">
                        Register Now
                      </Button>
                    </Link>
                      <p className="mt-2 text-center text-xs text-gray-500">Limited seats available</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

