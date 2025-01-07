'use client'

import { motion } from "framer-motion"
import { CalendarDays, FileText, FileCheck, UserCheck } from 'lucide-react'

const timelineData = [
  {
    date: "December 29th, 2024",
    title: "Early bird registration deadline",
    description: "Submit your research on sustainable development and green technologies to benefit from exclusive early rates.",
    icon: CalendarDays,
    align: 'left',
  },
  {
    date: "January 9th, 2025",
    title: "Abstract submission deadline",
    description: "Register through our seamless paperless system and receive a virtual conference kit to enhance your experience.",
    icon: FileText,
    align: 'right',
  },
  {
    date: "January 25th, 2025",
    title: "Full paper submission Deadline",
    description: "Top submissions will be featured in our Green Innovation Showcase, highlighting groundbreaking sustainability efforts.",
    icon: FileCheck,
    align: 'left',
  },
  {
    date: "February 10th, 2025",
    title: "Final Registration Deadline",
    description: "Last chance to register for the conference.",
    icon: UserCheck,
    align: 'right',
  },
]

export function Dates() {
  return (<>
  <div className="py-12">
        <p className="mx-auto  text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl underline  decoration-wavy decoration-green-500">
        Key Dates to Remember
        </p>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-l-2 border-r-2 border-black">
      <div className="relative">
        <div className="space-y-12 md:space-y-24">
          {timelineData.map((item, index) => (
              <motion.div
              key={item.date}
              initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative ${item.align === 'left' ? 'md:mr-[50%] mr-0' : 'md:ml-[50%] ml-0'}`}
              >
              {/* Date */}
              <motion.h3 
                className={`text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                {item.date}
              </motion.h3>

              {/* Card */}
              <div className="relative">
                <div className="bg-white rounded-[2rem] border-2 border-black p-4 sm:p-6 relative">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="flex-1 order-2 sm:order-1">
                      <h4 className="text-xl font-bold mb-2 text-center sm:text-left">{item.title}</h4>
                      <p className="text-gray-600 text-center sm:text-left">{item.description}</p>
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#f3ff75] drop-shadow-sm flex items-center justify-center flex-shrink-0 order-1 sm:order-2">
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                    </div>
                  </div>
                </div>

                {/* Connector Line (if not last item) */}
                {index < timelineData.length - 1 && (
                    <div 
                    className={`absolute hidden md:block ${
                        item.align === 'left' 
                        ? 'right-0 translate-x-full' 
                        : 'left-0 -translate-x-full'
                    } top-1/2 w-[calc(100%+2rem)] border-b-2 border-dashed border-black`}
                    />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
          </>
  )
}

