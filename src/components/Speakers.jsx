"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, MapPin, Briefcase, GraduationCap, Award, Globe, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pb } from "@/lib/pocketbase"
import Link from "next/link"

// Speaker categories for ICASEM
const speakerCategories = [
  { id: "Guest Speaker", title: "Guest Speaker" },
  { id: "Keynote Speaker", title: "Keynote Speaker" },
  { id: "Conference Chair", title: "Conference Chair" },
  { id: "Conference Co-Chair", title: "Conference Co-Chair" },
  { id: "Session Chair", title: "Session Chair" },
];

// Speaker card component
const SpeakerCard = ({ speaker, onMoreInfo }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative p-1">
        {/* Speaker image */}
        <div className="relative h-[280px] w-full rounded-2xl overflow-hidden mb-4">
          <Image 
            src={`https://icasem-robotechsummit.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`} 
            alt={speaker.name} 
            fill 
            className="object-contain" 
          />

          {/* Floating expertise tags */}
          {speaker.expertise && (
            <div className="absolute top-3 left-3 right-3">
              <div className="flex flex-wrap gap-1">
                {speaker.expertise?.slice(0, 2).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#00adef]/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Speaker info */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-[#07416b] mb-1 group-hover:text-[#00adef] transition-colors">
            {speaker.name}
          </h3>
          <p className="text-gray-700 font-medium mb-1">{speaker.role}</p>

          <div className="flex items-center gap-1.5 text-gray-600 text-sm mb-2">
            <GraduationCap className="h-3.5 w-3.5 text-[#00adef]" />
            <span className="line-clamp-1">{speaker.college}</span>
          </div>

          <div className="flex items-center gap-1.5 text-gray-600 text-sm mb-4">
            <MapPin className="h-3.5 w-3.5 text-[#00adef]" />
            <span>{speaker.country}</span>
          </div>

          <Button
            onClick={() => onMoreInfo(speaker)}
            className="w-full bg-gradient-to-r from-[#07416b] to-[#00adef] hover:from-[#05334a] hover:to-[#0099d4] text-white font-medium border-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Profile
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

// Speaker detail drawer component
const SpeakerDrawer = ({ isOpen, onClose, speaker }) => (
  <AnimatePresence>
    {isOpen && speaker && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={onClose}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="fixed right-0 top-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-[100] overflow-y-auto"
        >
          <div className="p-6 flex flex-col h-full relative pt-16">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#00adef] hover:text-white transition-colors z-10"
              aria-label="Close drawer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Speaker image */}
            <div className="relative h-[300px] w-full rounded-3xl overflow-hidden border-4 border-[#00adef]/20 mt-6 mb-6">
              <Image 
                src={`https://icasem-robotechsummit.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`} 
                alt={speaker.name} 
                fill 
                className="object-contain " 
              />
            </div>

            {/* Speaker info */}
            <h2 className="text-3xl font-bold text-[#07416b] mb-2">{speaker.name}</h2>
            <h3 className="text-xl text-[#00adef] font-semibold mb-4">{speaker.role}</h3>

            <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <GraduationCap className="h-4 w-4 text-[#00adef]" />
              <span>{speaker.college}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
              <MapPin className="h-4 w-4 text-[#00adef]" />
              <span>{speaker.country}</span>
            </div>

   
     
            <div className="h-px w-full bg-gray-200 mb-6"></div>

            <h4 className="text-lg font-semibold text-[#07416b] mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[#00adef]" />
              Biography
            </h4>
              <p className="text-gray-600 leading-relaxed flex-grow overflow-y-scroll h-[300px]">{speaker.bio}</p>

            <div className="h-px w-full bg-gray-200 my-6"></div>

            <Button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-[#07416b] to-[#00adef] hover:from-[#05334a] hover:to-[#0099d4] text-white font-medium border-0 rounded-full py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Close Profile
            </Button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
)

export default function SpeakerSection() {
  const [activeCategory, setActiveCategory] = useState("Guest Speaker")
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [speakers, setSpeakers] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch speakers from ICASEM collection
        const records = await pb.collection("ICASEM_speakers").getFullList({
          sort: "name",
          requestKey: null,
        })

        if (records && records.length > 0) {
          // Group speakers by category
          const groupedSpeakers = records.reduce((acc, speaker) => {
            const category = speaker.category;
            if (!acc[category]) {
              acc[category] = []
            }

            acc[category].push({
              name: speaker.name,
              role: speaker.role,
              image: speaker.image,
              bio: speaker.bio,
              id: speaker.id,
              collectionId: speaker.collectionId,
              college: speaker.college,
              country: speaker.country,
              expertise: speaker.expertise ? speaker.expertise.split(',').map(item => item.trim()) : [],
              achievements: speaker.achievements ? speaker.achievements.split(',').map(item => item.trim()) : [],
            })

            return acc
          }, {})

          // Ensure all categories exist in the grouped speakers object
          speakerCategories.forEach(({ id }) => {
            if (!groupedSpeakers[id]) {
              groupedSpeakers[id] = []
            }
          })

          setSpeakers(groupedSpeakers)
        } else {
          // Initialize empty categories if no records found
          const emptyCategories = {}
          speakerCategories.forEach(({ id }) => {
            emptyCategories[id] = []
          })
          setSpeakers(emptyCategories)
        }

        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch speakers:", err)
        setError("Failed to load speakers. Please try again later.")
        setLoading(false)
      }
    }

    fetchSpeakers()
  }, [])

  const handleMoreInfo = (speaker) => {
    setSelectedSpeaker(speaker)
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <section className="py-16 lg:py-20 relative bg-[#f0f4f8] text-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-4 bg-[#00adef] rounded-full"></div>
            <span className="text-gray-600 text-sm lg:text-base font-medium">Conference Speakers</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-[#07416b] leading-tight mb-6">
            Distinguished Speakers & Experts
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00adef] to-[#07416b] mx-auto mb-8 rounded-full"></div>

          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Meet the brilliant minds shaping the future of Applied Science, Engineering & Management. Learn from
            industry leaders and renowned academics from around the world.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {speakerCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#00adef] to-[#07416b] text-white shadow-lg shadow-[#00adef]/20"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-[#00adef]/30"
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center min-h-[200px]">
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
        )}

        {/* Error state */}
        {error && (
          <div className="relative bg-red-50 rounded-3xl border border-red-200 p-6 max-w-md mx-auto">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        )}

        {/* Speakers grid */}
        {!loading && !error && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {speakers[activeCategory]?.length > 0 ? (
                speakers[activeCategory].map((speaker, index) => (
                  <motion.div
                    key={speaker.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <SpeakerCard speaker={speaker} onMoreInfo={handleMoreInfo} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <div className="relative bg-white rounded-3xl border border-gray-200 p-8 max-w-md mx-auto">
                    <Globe className="w-12 h-12 text-[#00adef] mx-auto mb-4" />
                    <p className="text-gray-600 text-lg font-medium mb-2">Speakers Coming Soon</p>
                    <p className="text-gray-500 text-sm">
                      We're finalizing our speaker lineup for this category. Check back soon for updates!
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#07416b] to-[#00adef] rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Want to be a part of the conference?</h3>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our distinguished panel of experts and share your research with the global ICASEM community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submission">
              <Button className="bg-white text-[#07416b] px-8 py-3 rounded-full hover:bg-gray-100 font-semibold">
                Submit Abstract
              </Button>
            </Link>
             
            </div>
          </div>
        </div>

        {/* Speaker detail drawer */}
        <SpeakerDrawer isOpen={isDrawerOpen} onClose={closeDrawer} speaker={selectedSpeaker} />
      </div>
    </section>
  )
}