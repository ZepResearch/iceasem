"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Ticket } from "lucide-react"
import Link from "next/link"

const ticketTypes = [
  {
    type: "VIRTUAL",
    role: "PRESENTER",
    color: "bg-emerald-600",
    price: 219,
    benefits: [
      "Full conference access",
      "Networking sessions",
      "Workshop materials",
      "Online Q&A sessions",
      "Digital certificate of attendance",
    ],
  },
  {
    type: "PHYSICAL",
    role: "PRESENTER",
    color: "bg-emerald-600",
    price: 319,
    benefits: [
      "All Virtual Presenter benefits",
      "VIP networking dinner",
      "Priority seating",
      "Exclusive roundtable sessions",
      "1-year membership access",
    ],
  },
  {
    type: "VIRTUAL",
    role: "LISTENER",
    color: "bg-sky-600",
    price: 99,
    benefits: [
      "Full conference access",
      "Online networking sessions",
      "Digital workshop materials",
      "Access to recorded sessions",
      "Digital certificate of attendance",
    ],
  },
  {
    type: "PHYSICAL",
    role: "LISTENER",
    color: "bg-sky-600",
    price: 199,
    benefits: [
      "All Virtual Listener benefits",
      "In-person networking opportunities",
      "Physical workshop materials",
      "Lunch and refreshments",
      "Guided tour of conference venue",
    ],
  },
]

function TicketCard({ ticket, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
    >
      <Card className="overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className={`${ticket.color} p-4 text-white`}>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-2xl font-bold">{ticket.type}</div>
              <div className="text-sm opacity-80">{ticket.role}</div>
            </div>

            <div className="flex flex-col items-center px-2">
              <div className="w-16 border-t border-dashed border-white/30" />
              <Ticket className="my-1 h-4 w-4 rotate-90 transform" />
              <div className="w-16 border-t border-dashed border-white/30" />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">
                {ticket.type} {ticket.role} Pass
              </div>
              <div className="text-base font-semibold">Conference Access</div>
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold ${ticket.color} bg-clip-text text-transparent`}>${ticket.price}</div>
              <div className="text-xs text-gray-500">/person</div>
            </div>
          </div>
        </div>

        <div className="p-4 flex-grow flex flex-col justify-between">
          <ul className="space-y-2 text-sm">
            {ticket.benefits.map((item, index) => (
              <li key={index} className="flex items-center">
                <Check className={`mr-2 h-3 w-3 ${ticket.color} flex-shrink-0`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href="/registration">
              <Button className={`w-full ${ticket.color} hover:opacity-90 text-white transition-opacity duration-300`}>
                Register Now
              </Button>
            </Link>
            <p className="mt-2 text-center text-xs text-gray-500">Limited seats available</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function ConferenceTickets() {
  return (
    <div className="min-h-full  p-8 py-24">
      <div className="mx-auto max-w-7xl space-y-16">
        <section>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl mb-8 text-center text-gray-900 font-medium text-pretty"
          >
            Presenter Tickets
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {ticketTypes
              .filter((ticket) => ticket.role === "PRESENTER")
              .map((ticket, index) => (
                <TicketCard key={`${ticket.type}-${ticket.role}`} ticket={ticket} index={index} />
              ))}
          </div>
        </section>

        <section>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl mb-8 text-center text-gray-900 font-medium text-pretty"
          >
            Listener Tickets
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {ticketTypes
              .filter((ticket) => ticket.role === "LISTENER")
              .map((ticket, index) => (
                <TicketCard key={`${ticket.type}-${ticket.role}`} ticket={ticket} index={index} />
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}

