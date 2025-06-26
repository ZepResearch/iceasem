import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Calendar, MapPin, Users, ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react"
import ImportantDatesCard from "./CardDates"
import Link from "next/link"
import { Arrow } from "@radix-ui/react-select"

export default function ConferenceLanding() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] p-2 sm:p-4 md:p-6 overflow-hidden">
      <div className="w-full max-w-screen-2xl mx-auto zoom-container">
        {/* Single Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 grid-rows-auto lg:grid-rows-10 gap-2 sm:gap-4 min-h-screen">
          
          {/* Card 1 - Speaker Card */}
          <div className="col-span-2 row-span-3 lg:col-span-3 lg:row-span-5 order-4 lg:order-1">
            <div className="h-full bg-white rounded-2xl p-3 sm:p-6 xl:p-8 relative overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-[#00adef] opacity-20">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Badge */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gradient-to-r from-[#00adef] to-[#07416b] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                Testimonial
              </div>

              {/* Testimonial Text */}
              <div className="mt-8 sm:mt-12 mb-4 sm:mb-8">
                <p className="text-gray-700 text-xs sm:text-sm xl:text-base leading-relaxed italic">
                  "Working with this team has been absolutely transformative for our organization. Their expertise and dedication exceeded all expectations. The results speak for themselves - we've seen incredible growth and improvement across all metrics."
                </p>
              </div>

              {/* Author Section */}
              <div className="flex items-center space-x-3 sm:space-x-4 mt-auto">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full overflow-hidden flex items-center justify-center shadow-lg">
                    <img
                      src="/assets/heroTestimonial.png"
                      alt="Dr. Sarah Mitchell"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-lg xl:text-xl font-bold text-[#07416b] mb-1">Dr. Sarah Mitchell</h3>
                  <p className="text-[#00adef] text-xs sm:text-sm xl:text-base font-medium mb-1">Keynote Speaker</p>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="#FFD700">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tl from-[#00adef]/5 to-transparent rounded-tl-full"></div>
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-[#07416b]/5 to-transparent rounded-br-full"></div>
            </div>
          </div>

          {/* Card 2 - Important Dates Card */}
          <div className="col-span-2 row-span-3 lg:col-span-3 lg:row-span-5 lg:col-start-1 lg:row-start-6 order-2 lg:order-2">
            <ImportantDatesCard/>
          </div>

          {/* Card 3 - Main Hero Section */}
          <div className="col-span-2 sm:col-span-4 row-span-4 lg:col-span-6 lg:row-span-7 lg:col-start-4 lg:row-start-1 order-1 lg:order-3">
            <Card className="h-full bg-white rounded-2xl p-3 sm:p-6 xl:p-8 relative overflow-hidden">
              <div className="flex flex-col gap-3 sm:gap-6 xl:gap-8 h-full">
                <div className="h-full flex flex-col lg:flex-row items-center">
                  {/* Left side content */}
                  <div className="flex-1 lg:pr-6 xl:pr-8 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#07416b] leading-tight mb-3 sm:mb-4 xl:mb-6">
                      International Conference Applied Science, Engineering & Management
                    </h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 xl:gap-8 mb-4 sm:mb-6 xl:mb-8 text-[#07416b]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6" />
                        <span className="font-semibold text-sm sm:text-base xl:text-lg">November 14-15</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6" />
                        <span className="font-semibold text-sm sm:text-base xl:text-lg">Singapore</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                     <Link href="/registration">
                      <Button className="bg-[#00adef] text-white px-4 sm:px-6 xl:px-8 py-2 sm:py-3 xl:py-4 rounded-full hover:bg-[#0099d4] text-sm sm:text-base xl:text-lg w-full sm:w-auto">
                        Register Now
                      </Button>
                      </Link>
                      <Link href="/about-conference">
                      <button className="flex items-center gap-2 text-[#07416b] hover:text-[#00adef] text-sm sm:text-base xl:text-lg border p-2 rounded-2xl">
                      Learn more
                        <ArrowBigRightDash className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6" />
                      </button>
                      </Link>
                    </div>
                    

            <div className="flex scale-75 sm:flex-row flex-col-reverse items-start sm:items-center justify-center gap-3 px-4 max-w-3xl backdrop-blur-sm bg-gray-50/30 py-4 rounded-3xl mt-4">
              <img
                src="/assets/scopus.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />
              <img
                src="/assets/clarivate.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />
              <img
                src="assets/zepresearch.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />
            </div>
                  </div>

                  {/* Right side image */}
                  <div className="flex-1 mt-4 lg:mt-0">
                    <div className="w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                      <Image
                        src="/assets/hero.png"
                        alt="Conference Illustration"
                        width={400}
                        height={400}
                        className="w-full h-full object-contain drop-shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Download Button */}
                {/* <div className="text-center lg:text-left">
                  <span className="text-sm sm:text-base text-gray-600">Download the brochure</span>
                </div> */}
              </div>
            </Card>
          </div>

          {/* Card 4 - CTA Card */}
          <div className="col-span-2 sm:col-span-4 row-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-4 lg:row-start-8 order-3 lg:order-4">
            <Card className="h-full bg-white rounded-2xl p-3 sm:p-4 xl:p-6 flex flex-col sm:flex-row items-center justify-between overflow-hidden gap-3 sm:gap-0">
              {/* Center content */}
              <div className="flex-1 px-0 sm:px-4 xl:px-6 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 xl:mb-3">
                  <div className="w-1.5 xl:w-2 h-1.5 xl:h-2 bg-[#00adef] rounded-full"></div>
                  <span className="font-bold text-[#07416b] text-xs sm:text-sm xl:text-base">ICASEM 2024</span>
                </div>
                <h3 className="text-sm sm:text-base xl:text-xl font-bold text-[#07416b] mb-2 xl:mb-3">
                  Secure your spot at Singapore's premier conference
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 xl:gap-4">
                  <Link href="/registration">
                    <Button className="bg-[#00adef] text-white px-3 sm:px-4 xl:px-6 py-1.5 xl:py-2 rounded-full hover:bg-[#0099d4] text-xs sm:text-sm xl:text-base w-full sm:w-auto">
                      Register Now
                    </Button>
                  </Link>
                  <Link href="/about-conference">
                    <button className="flex items-center gap-1 xl:gap-2 text-[#07416b] hover:text-[#00adef] text-xs sm:text-sm xl:text-base">
                      <Play className="w-3 xl:w-4 h-3 xl:h-4" />
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right side - Conference dates */}
              <div className="text-center sm:text-right">
                <div className="text-lg sm:text-xl xl:text-2xl font-bold text-[#07416b]">Nov</div>
                <div className="text-sm sm:text-base xl:text-lg font-semibold text-[#00adef]">14-15</div>
                <div className="text-xs xl:text-sm text-gray-600">Singapore</div>
              </div>
            </Card>
          </div>

          {/* Card 5 - Stats Card */}
          <div className="col-span-2 row-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-8 lg:row-start-8 order-5 lg:order-5">
            <Card className="h-full bg-white rounded-2xl p-3 sm:p-4 xl:p-6 relative border-t-4 border-[#00adef] overflow-hidden">
              {/* Stats content */}
              <div className="text-center mb-3 sm:mb-4 xl:mb-6">
                <div className="bg-[#07416b] rounded-full w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3 xl:mb-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 xl:w-8 xl:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl xl:text-3xl font-bold text-[#07416b]">500+</div>
                <div className="text-gray-500 text-xs xl:text-sm">Expected Attendees</div>
              </div>

              <div className="space-y-2 sm:space-y-3 xl:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs xl:text-sm text-gray-600">Speakers</span>
                  <span className="font-bold text-[#07416b] text-xs sm:text-sm xl:text-base">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs xl:text-sm text-gray-600">Countries</span>
                  <span className="font-bold text-[#07416b] text-xs sm:text-sm xl:text-base">15+</span>
                </div>
              </div>

              <div className="absolute bottom-2 sm:bottom-3 xl:bottom-4 left-3 sm:left-4 xl:left-6 right-3 sm:right-4 xl:right-6">
                <div className="bg-gradient-to-r from-[#07416b] to-[#00adef] h-1 sm:h-1.5 xl:h-2 rounded"></div>
                <div className="text-center text-xs text-gray-500 mt-1 xl:mt-2">Registration Progress: 85%</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}