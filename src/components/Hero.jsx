'use client'

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Calendar, CreativeCommonsIcon, MapPin, NutIcon, MicroscopeIcon } from 'lucide-react'
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { WaveTexture } from "./ui/wave-texture"
import { PinPoint } from "./ui/pin-point"
import Link from "next/link"

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
          <Card className="relative overflow-hidden bg-gradient-to-tr from-blue-100 to-blue-800  p-8 h-full rounded-br-none rounded-tr-[150px]">
            <div className="relative z-10 flex flex-col h-full">
              {/* <Image
                src="/icasem_black.svg"
                alt="Atacama Group"
                width={170}
                height={170}
                className="mb-8"
              />
              */}
              {/* <h1 className="mb-8 font-bold font-mono text-3xl inline-flex items-center"><MicroscopeIcon/>|ICASEM</h1> */}
                          <Image src="/whiteLogo.svg" width={130} height={130} alt="logo" />
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              International Conference on {" "}
                <span className="">
                Applied Science, Engineering & Management 
                </span>{" "}
               
              </h1>
              <p className="text-xl">&quot;Advancing Engineering and Management for a Better Tomorrow&quot;</p>
              <div className="flex sm:flex-row flex-col-reverse  items-start  justify-start gap-3 px-4 max-w-2xl  backdrop-blur-sm  my-2 py-2 rounded-3xl">
                <img
                  src=" https://res.cloudinary.com/dwlhesiyi/image/upload/v1729260387/erph7fml9unxiowlmrmg.png"
                  alt=""
                  className="h-12 drop-shadow-lg"
                />
          <img
            src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1728043047/yqhbu4xrrwcab48qtpfw.png"
            alt=""
            className="h-12 drop-shadow-sm"
          />
          <img
            src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1728043732/dpwtq9cenauyctsvd9vg.png"
            alt=""
            className="h-12 drop-shadow-sm"
          />

        </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href={'/registration'}>
              <Button className="bg-black text-white hover:bg-black/90">
                 Register Now
                </Button>
                </Link>
                <Link href={'/about-conference'}>
                <Button className="bg-black text-white hover:bg-black/90">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
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
              <div className="flex items-center gap-4 text-base  text-gray-50 drop-shadow-md font-semibold mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  April 2nd - 3rd, 2025
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

