'use client'

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Calendar, CreativeCommonsIcon, MapPin, NutIcon, MicroscopeIcon } from 'lucide-react'
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { WaveTexture } from "./ui/wave-texture"
import { PinPoint } from "./ui/pin-point"

export function Hero() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-12 mt-12">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-r from-[#f3ff75] via-yellow-200 to-lime-300 p-8 h-full rounded-br-none rounded-tr-[150px]">
            <div className="relative z-10 flex flex-col h-full">
              {/* <Image
                src="/icasem_black.svg"
                alt="Atacama Group"
                width={170}
                height={170}
                className="mb-8"
              />
              */}
              <h1 className="mb-8 font-bold font-mono text-3xl inline-flex items-center"><MicroscopeIcon/>|ICASEM</h1>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              International Conference on {" "}
                <span className="underline decoration-wavy decoration-green-500">
                Applied Science, Engineering & Management 
                </span>{" "}
               
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-black text-white hover:bg-black/90">
                 Register Now
                </Button>
                <Button className="bg-black text-white hover:bg-black/90">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                 
                    <img
                      alt='speaker1'
                      src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      className="h-8 w-8 rounded-full border-2 border-white bg-gray-900"
                    />
                    <img
                      alt='speaker2'
                      src='https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      className="h-8 w-8 rounded-full border-2 border-white bg-gray-800 object-contain"
                    />
                    <img
                      alt='speaker2'
                      src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      className="h-8 w-8 rounded-full border-2 border-white bg-gray-900 object-contain"
                    />
                </div>
                <span className="text-sm font-medium">
                  17+ Speakers of our  organization
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-red-500 font-medium mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  April 15-17, 2024
                </div>
                <div className="flex items-center gap-2 ">
                  <MapPin className="h-4 w-4" />
                  Vietnam
                </div>
              </div>
            </div>
            <WaveTexture className="absolute bottom-0 left-0 h-32 w-32 text-green-400/20 rotate-45" />
          </Card>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="relative overflow-hidden h-full rounded-bl-none rounded-tl-[150px]">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Desert Landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col">
              <Card className="self-start p-4 bg-white/90 backdrop-blur flex items-center gap-4 mb-8">
                <div>
                  <p className="font-medium text-sm">Networking Events</p>
                  <p className="text-xs text-gray-600">Connect with <br />  industry leaders</p>
                </div>
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Card>

              <PinPoint label="Applied Science" x="20%" y="30%" />
              <PinPoint label="Engineering" x="40%" y="50%" />
              <PinPoint label="Management" x="70%" y="40%" />

              <div className="mt-auto">
                <div className="flex gap-2 justify-end mb-4">
                  <Button variant="outline" className="bg-white/80">
                    Find us on social networks
                  </Button>
                </div>
                <Card className="bg-white/90 backdrop-blur p-4">
                  <p className="text-sm">
                  Join leading researchers, engineers, and management professionals for three days of knowledge sharing and networking.                  </p>
                </Card>
              </div>
            </div>
            <WaveTexture className="absolute bottom-0 right-0 h-32 w-32 text-blue-400/20 -rotate-45" />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

