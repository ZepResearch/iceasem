import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users, ArrowBigRightDash, ArrowBigRightDashIcon } from "lucide-react"
import Link from "next/link"
import { ReserveButton } from "./reserve-button"

export default function ConferenceLanding() {
  return (
    <div className="min-h-full bg-[#f0f4f8] p-2 sm:p-4 md:px-6 overflow-hidden z-50  ">
      <div className="w-full max-w-screen-2xl mx-auto px-4 h-full ">
        {/* Single Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 grid-rows-auto lg:grid-rows-7 gap-2 sm:gap-4 min-h-full  z-0  ">
          {/* Card 1 - Main Hero Section (Expanded) */}
          <div className="col-span-2 sm:col-span-4 row-span-4 lg:col-span-9 lg:row-span-7 lg:col-start-1 lg:row-start-1 order-1 lg:order-1">
            <Card className="h-full bg-white rounded-2xl p-3 sm:p-6 xl:p-8 relative overflow-hidden">
              <div className="flex flex-col gap-3 sm:gap-6 xl:gap-8 h-full">
                <div className="h-full flex flex-col lg:flex-row items-center">
                  {/* Left side content */}
                  <div className="flex-1 lg:pr-6 xl:pr-8 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-[#07416b] leading-tight mb-3 sm:mb-4 xl:mb-6">
                      2<sup>nd</sup> International Conference on Applied Science, Engineering & Management
                    </h1>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 xl:gap-12 mb-4 sm:mb-6 xl:mb-8 text-[#07416b]">
                      <div className="flex items-center gap-2 drop-shadow-xl">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6" />
                        <span className="font-bold text-sm sm:text-base xl:text-2xl">November 14<sup>th</sup>-15<sup>th</sup></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 drop-shadow-xl" />
                        <span className="font-bold text-sm sm:text-base xl:text-2xl">Kuala Lumpur, Malaysia</span>
                      </div>
                    </div>
                       <div className="mt-4 max-w-xs py-3">
                      <Card className="bg-[#e6f7ff] border border-[#00adef] rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                        <Users className="text-[#040f13] w-6 h-6" />
                        <span className="text-[#07416b] font-medium text-base">
                          This conference is <span className="text-[#00adef] font-semibold">Hybrid</span> (Virtual &amp; In-Person)
                        </span>
                      </Card>
                    </div>  
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                      <Link href="/registration">
                        <Button className="bg-[#00adef] text-white px-4 sm:px-6 xl:px-8 py-2 sm:py-3 xl:py-4 rounded-full hover:bg-[#0099d4] text-sm sm:text-base xl:text-lg w-full sm:w-auto">
                          Register Now
                        </Button>
                      </Link>
                      <Link href="/about-conference">
                        <button className="flex items-center hover:border-[  ]  gap-2 text-[#07416b] hover:text-[#00adef] text-sm sm:text-base xl:text-lg border p-2 rounded-2xl">
                          Learn more
                          <ArrowBigRightDash className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6" />
                        </button>
                      </Link>
                      <ReserveButton/>
                    </div>

                    <div className="flex  md:flex-row flex-col-reverse items-start sm:items-center justify-start gap-3 px-4 max-w-4xl backdrop-blur-sm bg-gray-50/30 py-4 rounded-3xl mt-4">
                      <img src="/assets/scopus.png" alt="" className="h-16   drop-shadow-lg" />
                      <img src="/assets/clarivate.png" alt="" className="h-16 drop-shadow-lg" />
                      {/* <img src="assets/cpd.png" alt="" className="h-36 drop-shadow-lg" /> */}
                      <img src="assets/zepresearch.png" alt="" className="h-16 drop-shadow-lg" />
                    </div>
                    {/* Hybrid Conference Card */}
                 

                  </div>
                  {/* Right side image */}
                  <div className="flex-1 mt-4 lg:mt-0">
                    <div className="w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                      <Image
                        src="/assets/hero.png"
                        alt="Conference Illustration"
                        width={500}
                        height={300}
                        className=" drop-shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Card 2 - Testimonial Card (Moved to align with CTA and Stats) */}
        

          {/* Card 3 - CTA Card */}
          

          {/* Card 4 - Stats Card */}
         
        </div>
      </div>
    </div>
  )
}
