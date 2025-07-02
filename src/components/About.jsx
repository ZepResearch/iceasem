import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Calendar } from 'lucide-react'
import Link from 'next/link'

function About() {
  return (
    <div className='max-w-screen-2xl mx-auto bg-[#f0f4f8]  '>
       <div className="px-6 py-4">
          <Card className="bg-white rounded-2xl p-6 lg:p-8 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left side - Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-2xl overflow-hidden flex items-center justify-center">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1663089905440-78880eab98c1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="About ICASEM Conference"
                      width={500}
                      height={400}
                      className="w-full h-full object-cover "
                    />
                  </div>
             
                </div>
              </div>

              {/* Right side - Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 bg-[#00adef] rounded-full"></div>
                  <span className="text-gray-600 text-sm lg:text-base font-medium">About Conference</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-[#07416b] leading-tight mb-6">
                  Advancing Science Through Collaboration
                </h2>

                <div className="space-y-4 mb-8">
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    The International Conference on Applied Science, Engineering & Management (ICASEM) brings together
                    leading researchers, industry professionals, and academics from around the world to share
                    cutting-edge innovations and foster meaningful collaborations.
                  </p>

                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    Our mission is to create a platform where theoretical knowledge meets practical application, driving
                    forward the frontiers of science and engineering for a better tomorrow.
                  </p>
                </div>

                {/* Key highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#00adef] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#07416b] font-semibold text-sm lg:text-base">
                      Peer-reviewed Publications
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#00adef] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#07416b] font-semibold text-sm lg:text-base">Global Networking</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#00adef] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#07416b] font-semibold text-sm lg:text-base">Industry Partnerships</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#00adef] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-[#07416b] font-semibold text-sm lg:text-base">Innovation Showcase</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 lg:gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-[#07416b]">2+</div>
                    <div className="text-gray-600 text-sm">Years Running</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-[#07416b]">500+</div>
                    <div className="text-gray-600 text-sm">Past Attendees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-[#07416b]">50+</div>
                    <div className="text-gray-600 text-sm">Research Papers</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about-conference">
                  <Button className="bg-[#00adef] text-white px-6  rounded-full hover:bg-[#0099d4] text-base py-6">
                    Learn More
                  </Button>
                  </Link>
                  <Link href="/schedule">
                  <button className="flex items-center justify-center gap-2 text-[#07416b] hover:text-[#00adef] px-6 py-3 border border-[#07416b] rounded-full hover:border-[#00adef] transition-colors text-base">
                    <Calendar className="w-5 h-5" />
                    View Schedule
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
    </div>
  )
}

export default About
