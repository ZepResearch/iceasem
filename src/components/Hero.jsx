"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Headphones, MapPin } from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WaveTexture } from "./ui/wave-texture"
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full relative mx-auto px-4 py-12 mt-12">
<motion.div
        className="sm:absolute top-24 sm:right-12 right-5 z-10 bg-gradient-to-r from-teal-200/80 to-lime-200/90 backdrop-blur-sm text-black p-4 rounded-lg object-center ml-12 w-64 my-4 shadow-2xl"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h3 className="font-bold text-lg mb-2">Hybrid Conference</h3>
        <p className="text-sm mb-2">Experience the conference your way:</p>
        <ul className="list-disc list-inside text-sm">
          <li>Attend in person in Vietnam</li>
          <li>Join virtually from anywhere</li>
        </ul>
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            Physical
          </span>
          <span className="flex items-center">
            <Headphones className="w-4 h-4 mr-1" />
            Virtual
          </span>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="relative overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-900 p-8 min-h-[80vh] rounded-3xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Conference Background"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
          </div>
          <div className="relative z-10 flex flex-col h-full max-w-4xl mx-auto text-white">
            {/* <Image src="/whiteLogo.svg" width={130} height={130} alt="logo" className="mb-8" /> */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              International Conference on{" "}
              <span className="text-blue-300">Applied Science, Engineering & Management</span>
            </h1>
            <p className="text-xl mb-8">&quot;Advancing Engineering and Management for a Better Tomorrow&quot;</p>

            <div className="flex flex-wrap items-center justify-start gap-4 mb-8">
              <img
                src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1729260387/erph7fml9unxiowlmrmg.png"
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
                className="h-12 drop-shadow-sm bg-white/70 rounded-2xl"
              />
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href={"/registration"}>
                <Button className="bg-blue-400 text-gray-900 hover:bg-blue-300 text-lg px-6 py-3">
                  Register Now
                </Button>
              </Link>
              <Link href={"/about-conference"}>
                <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-6 py-3">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-4">
                <img
                  alt="speaker1"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-12 w-12 rounded-full border-2 border-white object-contain bg-gray-600"
                />
                <img
                  alt="speaker2"
                  src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-12 w-12 rounded-full border-2 border-white object-contain bg-yellow-50"
                />
                <img
                  alt="speaker3"
                  src="https://plus.unsplash.com/premium_photo-1664203068007-52240d0ca48f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-12 w-12 rounded-full border-2 border-white object-contain bg-black"
                />
              </div>
              <span className="text-lg font-medium">17+ Speakers from leading organizations</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-lg font-semibold mt-auto">
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                April 2nd - 3rd, 2025
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                Vietnam
              </div>
            </div>
          </div>
          <WaveTexture className="absolute bottom-0 left-0 h-64 w-64 text-blue-400/20 rotate-45" />
        </Card>
      </motion.div>
    </section>
  )
}

