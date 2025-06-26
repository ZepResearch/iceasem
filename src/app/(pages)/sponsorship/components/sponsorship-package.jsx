"use client"

import { motion } from "framer-motion"
import { Check, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SponsorshipPackage({ title, price, color, icon, benefits, onSelect }) {
  const getGradientClasses = () => {
    return `bg-gradient-to-r ${color}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#bfdbfe]/20 to-[#00adef]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity"></div>

      <div className="relative bg-white rounded-2xl border border-[#bfdbfe] overflow-hidden h-full transition-all group-hover:bg-[#f0f4f8] shadow-sm hover:shadow-md">
        <div className={`absolute top-0 left-0 right-0 h-2 ${getGradientClasses()}`}></div>

        <div className="p-6 flex flex-col h-full">
          <div className="mb-4 flex justify-between items-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#f0f4f8] text-[#00adef] border border-[#bfdbfe]">
              ICASEM Sponsorship
            </span>
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${getGradientClasses()} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">{icon}</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#07416b] mb-2 group-hover:text-[#00adef] transition-colors duration-300">
            {title}
          </h3>

          <div className="mb-4">
            <span className="text-3xl font-bold text-[#00adef]">${price.toLocaleString()}</span>
            <span className="text-sm text-[#07416b]/60 ml-1">USD</span>
          </div>

          <div className="space-y-3 mb-6 flex-grow">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                <span className="text-[#07416b]/80 text-sm leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={onSelect}
            className={`w-full ${getGradientClasses()} hover:brightness-110 text-white border-0 rounded-full h-12 font-medium shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Choose {title} Package
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
