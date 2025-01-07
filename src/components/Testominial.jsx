'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star, Award } from 'lucide-react'
import Image from "next/image"

const testimonials = [
  {
    rating: 4.5,
    text: "The International Conference on Applied Science, Engineering & Management provided an excellent platform for knowledge sharing and networking. The diverse range of topics covered was truly impressive.",
    author: "Dr. Emily Chen",
    position: "Professor of Engineering, MIT"
  },
  {
    rating: 5,
    text: "As a researcher in applied science, I found the conference to be incredibly valuable. The keynote speakers were world-class, and the parallel sessions offered deep insights into cutting-edge research.",
    author: "Dr. Michael Rodriguez",
    position: "Senior Researcher, NASA"
  },
  {
    rating: 4.5,
    text: "The conference's focus on interdisciplinary approaches in science, engineering, and management was refreshing. It fostered collaborations that I believe will lead to groundbreaking innovations.",
    author: "Prof. Sarah Thompson",
    position: "Dean, School of Management, Stanford University"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function TestimonialSection() {
  return (
    <section className="w-full min-h-full bg-neutral-50 p-8">
      <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Left Column - Image Section */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />
          <Image
            src="https://plus.unsplash.com/premium_photo-1682310144714-cb77b1e6d64a?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Conference hall"
            width={600}
            height={800}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 z-20 max-w-sm">
            <h1 className="text-4xl font-bold leading-tight text-white">
              Insights from{" "}
              <span className="bg-white text-black px-2 py-1 rounded-lg ">
                Distinguished Attendees
              </span>{" "}
              at ICASEM <Award className="inline-block ml-2" />
            </h1>
          </div>
          <div className="absolute bottom-8 right-8 z-20">
            <span className="text-6xl font-bold text-white">1000+</span>
            <span className="text-xl font-semibold text-white block">Participants</span>
          </div>
        </div>

        {/* Right Column - Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 rounded-3xl hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(testimonial.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-semibold">{testimonial.author}</h3>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

