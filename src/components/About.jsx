"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import CountUp from "react-countup";
export default function About() {
  return (
    <div className="container h-full mx-auto p-4 py-12">
      <div className="grid gap-4  md:grid-cols-2">
        {/* Left Side - Marathon Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="relative h-[710px]  overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t  from-black/70 to-black/30" />
            <img
              src="https://images.unsplash.com/photo-1553851919-596510268b99?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Marathon runner"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div>
                <h1 className="md:text-9xl text-8xl font-mono font-bold text-white ">
                  About
                </h1>
                <h1 className="md:text-7xl text-5xl font-mono font-bold text-[#f3ff75] md:-mt-6 -mt-4">
                  Conference
                  
                </h1>
                <p></p>
              </div>
              <div>
               
                <p className="md:text-base text-sm text-gray-200 mb-0.5 text-justify">Welcome to the International Conference on Applied Science, Engineering & Management (ICASEM), a premier platform that brings together leading researchers, academics, and students to exchange groundbreaking ideas and innovations across multidisciplinary domains.</p>
                <p className="md:text-sm text-xs  text-gray-200 mb-4 text-justify">Our conference is dedicated to fostering collaboration, promoting knowledge-sharing, and advancing the frontiers of Applied Science, Engineering, and Management. Whether you’re presenting cutting-edge research, networking with peers, or exploring new opportunities for collaboration, ICASEM provides the perfect environment to engage with the global academic and professional community.</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#f3ff75] text-black px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
                >
                  Know more
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Right Side - Grid Layout */}
        <div className="flex flex-col gap-4">
          {/* Half Marathon Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="relative  overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
              <img
                src="https://images.unsplash.com/photo-1521019795854-14e15f600980?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Half Marathon runners"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between items-start">
                <div className="mb-4">
                  <h2 className="md:text-8xl text-4xl font-bold text-white mb-2 ">Attendees</h2>
                  <div className="md:text-7xl text-3xl font-bold text-white mb-2"> <CountUp
                          end={8000}
                          duration={2.5}
                          decimals={8000 % 1 !== 0 ? 1 : 0}
                        />+</div>
                  <p className="text-sm text-gray-200 ">5,087 of 8,000 Registered </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-500 text-white px-6 md:py-3 py-1 rounded-lg md:font-semibold inline-flex items-center gap-2"
                >
                  Register Here
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </Card>
          </motion.div>

          {/* 10K and 5K Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* 10K Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="relative h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                <img
                  src="https://images.unsplash.com/photo-1527577440030-436a36b07401?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="10K runner"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div>
                  <h2 className="md:text-5xl text-2xl font-bold text-white  mb-">Speaker</h2>

                    <div className="md:text-5xl text-2xl font-bold text-white mb-"> <CountUp
                          end={35}
                          duration={2.5}
                          decimals={35 % 1 !== 0 ? 1 : 0}
                        />+</div>
                    <p className="text-xs text-gray-200">Gain insights from renowned speakers</p>
                  </div>
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2"
                  >
                    Register Here
                    <ArrowRight className="h-4 w-4" />
                  </motion.button> */}
                </div>
              </Card>
            </motion.div>

            {/* 5K Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="relative h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                <img
                  src="https://images.unsplash.com/photo-1541079606130-1f46216e419d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="5K runner"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div>
                    <div className="md:text-5xl font-bold text-white mb-"><CountUp
                            end={999}
                            duration={2.5}
                            decimals={1} // Specifies the number of decimal places
                            formattingFn={(value) => (value / 10).toFixed(1)}
                        />%</div>
                  <h2 className="md:text-4xl text-sm font-bold text-white mb-2 ">Uptime guarantee</h2>
                    <p className="text-xs text-gray-200">Build connections with industry leaders, researchers, and like-minded professionals.</p>
                  </div>
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2"
                  >
                    Register Here
                    <ArrowRight className="h-4 w-4" />
                  </motion.button> */}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

