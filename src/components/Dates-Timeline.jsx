"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Calendar, Clock, FileText, UserCheck, Award, Users, MapPin, Presentation } from "lucide-react"
import { pb } from "@/lib/pocketbase"

// Icon mapping based on title keywords for ICASEM
const getIconForTitle = (title) => {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes("registration")) return UserCheck
  if (lowerTitle.includes("abstract") || lowerTitle.includes("submission")) return FileText
  if (lowerTitle.includes("paper") || lowerTitle.includes("deadline")) return Calendar
  if (lowerTitle.includes("conference") || lowerTitle.includes("event")) return Presentation
  if (lowerTitle.includes("award") || lowerTitle.includes("recognition")) return Award
  if (lowerTitle.includes("venue") || lowerTitle.includes("location")) return MapPin
  if (lowerTitle.includes("speaker") || lowerTitle.includes("keynote")) return Users
  return Clock
}

export default function TimelineSection() {
  const [timelineItems, setTimeline] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDates() {
      try {
        setLoading(true)
        const records = await pb.collection("ICASEM_dates").getFullList({
          sort: "created",
          requestKey: null
        })
        setTimeline(records)
      } catch (err) {
        console.error("Error fetching dates:", err)
        setError("Failed to load timeline dates")
      } finally {
        setLoading(false)
      }
    }
    fetchDates()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]" id="timeline">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00adef] animate-spin"></div>
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-l-[#07416b] animate-spin"
            style={{ animationDuration: "1.5s" }}
          ></div>
          <div
            className="absolute inset-4 rounded-full border-2 border-transparent border-r-[#00adef] animate-spin"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4 bg-red-50 rounded-lg border border-red-200">
        <p className="font-medium">{error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-full relative bg-[#f0f4f8] py-16 lg:py-20 px-3 sm:px-4 md:px-6">
      {/* Background Pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#00adef_1px,transparent_1px)]",
          "opacity-10",
        )}
      />

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#f0f4f8] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-4 bg-[#00adef] rounded-full"></div>
            <span className="text-gray-600 text-sm lg:text-base font-medium">Conference Timeline</span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#07416b] leading-tight mb-6">
              Important Dates for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00adef] to-[#07416b]">
                2nd  ICASEM 2025
              </span>
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-[#00adef] to-[#07416b] mx-auto mb-8 rounded-full"></div>

            <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Stay updated with all the key dates and deadlines for the International Conference on Applied Science,
              Engineering & Management
            </p>
          </div>
        </div>

        {/* Timeline Cards Grid */}
        {timelineItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {timelineItems.map((item, index) => {
              const IconComponent = getIconForTitle(item.title)
              const isExpired = index === 0
              
              return (
                <div key={item.id} className="group">
                  {/* Card with ICASEM styling */}
                  <div className={`relative bg-white border-2 ${isExpired ? 'border-gray-300 opacity-75' : 'border-gray-200 hover:border-[#00adef]'} transition-all duration-300 h-80 rounded-2xl overflow-hidden ${isExpired ? 'shadow-sm' : 'shadow-sm hover:shadow-xl'}`}>
                    {/* Strike-through line for expired item */}
                    {isExpired && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <div className="w-full h-0.5 bg-red-500 transform -rotate-12"></div>
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-6 h-full flex flex-col relative">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={`w-14 h-14 ${isExpired ? 'bg-gray-400' : 'bg-gradient-to-br from-[#00adef] to-[#07416b]'} rounded-xl flex items-center justify-center ${isExpired ? '' : 'group-hover:scale-110'} transition-transform duration-300`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="mb-6">
                        <div className="flex gap-1">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 h-8 ${
                                isExpired 
                                  ? 'bg-gray-300' 
                                  : i % 2 === 0 ? "bg-[#00adef]" : "bg-[#07416b]"
                              } transform skew-x-12 ${isExpired ? 'opacity-30' : 'opacity-20 group-hover:opacity-40'} transition-opacity duration-300`}
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl font-bold ${isExpired ? 'text-gray-500 line-through' : 'text-[#07416b] group-hover:text-[#00adef]'} mb-4 leading-tight transition-colors duration-300`}>
                        {item.title?.toUpperCase()}
                      </h3>

                      {/* Date */}
                      <div className="mb-4">
                        <p className={`font-bold text-lg ${isExpired ? 'text-gray-400 line-through' : 'bg-clip-text text-transparent bg-gradient-to-r from-[#00adef] to-[#07416b]'}`}>
                          {item.date}
                        </p>
                      </div>

                      {/* Description (if available) */}
                      {item.description && (
                        <div className="flex-grow">
                          <p className={`text-sm leading-relaxed ${isExpired ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                        </div>
                      )}

                      {/* Expired label */}
                      {isExpired && (
                        <div className="mt-4">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                            EXPIRED
                          </span>
                        </div>
                      )}

                      {/* Bottom accent */}
                      <div className="mt-auto pt-4">
                        <div className={`h-1 w-full rounded-full ${isExpired ? 'bg-gray-300 opacity-30' : 'bg-gradient-to-r from-[#00adef] to-[#07416b] opacity-20 group-hover:opacity-60'} transition-opacity duration-300`}></div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    {!isExpired && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00adef]/5 to-[#07416b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-12 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#07416b] mb-4">Timeline Coming Soon</h3>
              <p className="text-gray-600 text-lg mb-6">
                We're finalizing the important dates and deadlines for ICASEM 2025. Check back soon for updates!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4 text-[#00adef]" />
                  <span>Registration Dates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FileText className="w-4 h-4 text-[#00adef]" />
                  <span>Submission Deadlines</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Presentation className="w-4 h-4 text-[#00adef]" />
                  <span>Conference Events</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
 
      </div>
    </div>
  )
}