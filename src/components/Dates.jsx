"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import Link from "next/link"
import PocketBase from "pocketbase"
import { Card, CardContent } from "@/components/ui/card"

// Initialize PocketBase
const pb = new PocketBase("https://icasem.pockethost.io")

export function Dates() {
  const [timelineData, setTimelineData] = useState([])

  useEffect(() => {
    async function fetchTimelineData() {
      try {
        const records = await pb.collection("dates").getFullList({
          sort: "-created",
          requestKey: null,
        })

        const formattedData = records
          .map((record) => ({
            date: record.date,
            title: record.title,
          }))
          .reverse()

        setTimelineData(formattedData)
      } catch (error) {
        console.error("Error fetching timeline data:", error)
      }
    }

    fetchTimelineData()
  }, [])

  return (
    <div className="min-h-full  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-4xl md:text-5xl font-medium   drop-shadow-sm">
            Important Dates
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <Card className=" bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 border-blue-100 hover:border-blue-300">
               

                <CardContent className="pt-12 pb-8 px-6">
                  <div className="relative">
                    <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-0.5 shadow-lg">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-blue-600 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                      <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 rounded-xl py-3 px-4 shadow-inner">
                        <p className="text-blue-800 font-semibold tracking-wide text-lg">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg hover:shadow-blue-500/50 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            View Full Schedule
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

