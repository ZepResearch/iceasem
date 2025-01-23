'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CalendarDays, FileText, FileCheck, UserCheck } from 'lucide-react'
import Link from "next/link"
import PocketBase from 'pocketbase'
import { Separator } from "@/components/ui/separator"

// Initialize PocketBase
const pb = new PocketBase('https://icasem.pockethost.io')

// Define the structure of our timeline item


// Map string names to icon components
const iconMap = {
  CalendarDays,
  FileText,
  FileCheck,
  UserCheck
}

export function Dates() {
  const [timelineData, setTimelineData] = useState([])

  useEffect(() => {
    async function fetchTimelineData() {
      try {
        const records = await pb.collection('dates').getFullList({
          sort: '-created',
          requestKey: null,
        })

        const formattedData = records.map((record, index) => ({
          date: record.date,
          title: record.title,
          description: record.description,
          icon: iconMap[record.icon],
          align: index % 2 === 0 ? 'left' : 'right'
        })).reverse()

        setTimelineData(formattedData)
      } catch (error) {
        console.error("Error fetching timeline data:", error)
      }
    }

    fetchTimelineData()
  }, [])

  return (
    <>
      <div className="py-12 max-w-6xl mx-auto">
        <p className="mx-auto text-pretty text-center text-4xl font-medium tracking-tight border-2 border-black  py-2 text-gray-950 sm:text-5xl ">
          Key Dates to Remember
        </p>
        <div className="  px-4 sm:px-6 lg:px-8 py-12 border-l-2 border-r-2 border-black">
          <div className="relative">
          <div className="space-y-4">
      {timelineData.map((item, index) => (
        <motion.div
          key={item.date}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              {item.icon && <item.icon className="w-5 h-5 text-primary" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <p className="text-base text-muted-foreground mt-1">{item.description}</p>
            </div>
          </div>
          {index < timelineData.length - 1 && <Separator className="my-4" />}
        </motion.div>
      ))}
    </div>
          </div>
        </div>
        <Link href={'/schedule'} className="width-full bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-black py-4 border-2">
            <div className="text-center font-mono text-3xl">
              Schedule
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

