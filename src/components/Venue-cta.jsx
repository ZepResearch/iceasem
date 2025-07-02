import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, Plane, Hotel, Utensils, Camera, Wifi, Car, ArrowRight, Star, Globe } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function VenueCtaSection() {
  const venueFeatures = [
    {
      icon: <Wifi className="w-5 h-5" />,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the venue"
    },
    {
      icon: <Utensils className="w-5 h-5" />,
      title: "Catering Services",
      description: "Premium dining options and refreshment breaks"
    },
    {
      icon: <Car className="w-5 h-5" />,
      title: "Easy Access",
      description: "Direct MRT connection and ample parking facilities"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: "Modern AV Equipment",
      description: "State-of-the-art audio-visual technology"
    }
  ]

 

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-4 bg-[#00adef] rounded-full"></div>
            <span className="text-gray-600 text-sm lg:text-base font-medium">Conference Venue</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#07416b] leading-tight mb-6">
            Exact Venue will be announced soon!
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Experience ICASEM 2025 in Singapore's premier convention facility, located in the heart of Singapore with world-class amenities and stunning city views
          </p>
        </div>

        {/* Main Venue Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left - Venue Image and Details */}
          <div className="space-y-6">
            <Card className="overflow-hidden rounded-2xl">
              <div className="relative h-64 sm:h-80 lg:h-96">
                <div className="w-full h-full bg-gradient-to-br from-[#00adef] to-[#07416b] flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1551395722-0ac9e89cee11?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Marina Bay Convention Centre"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#00adef]" />
                    <span className="text-sm font-semibold text-[#07416b]"> Singapore</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Venue Features */}
            <Card className="p-6 rounded-2xl border-l-4 border-[#00adef]">
              <h3 className="text-xl font-bold text-[#07416b] mb-4">Venue Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venueFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#00adef]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-[#00adef]">{feature.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#07416b] text-sm">{feature.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right - Event Details and Schedule */}
          <div className="space-y-6">
            {/* Event Schedule */}
            <Card className="p-6 rounded-2xl border-l-4 border-[#07416b]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#07416b] to-[#00adef] rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#07416b]">Conference Schedule</h3>
                  <p className="text-gray-600 text-sm">November 14-15, 2025</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-[#f0f4f8] rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#00adef]" />
                    <span className="font-semibold text-[#07416b] text-sm">Day 1 - Nov 14</span>
                  </div>
                  <span className="text-gray-600 text-sm">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#f0f4f8] rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#00adef]" />
                    <span className="font-semibold text-[#07416b] text-sm">Day 2 - Nov 15</span>
                  </div>
                  <span className="text-gray-600 text-sm">9:00 AM - 5:00 PM</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-[#00adef]/10 to-[#07416b]/10 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-[#07416b]" />
                  <span className="font-semibold text-[#07416b] text-sm">Hybrid Format Available</span>
                </div>
                <p className="text-gray-600 text-xs">Join us in-person or participate virtually through our interactive online platform</p>
              </div>
            </Card>

            {/* Location Benefits */}
            <Card className="p-6 rounded-2xl border-t-4 border-[#00adef]">
              <h3 className="text-xl font-bold text-[#07416b] mb-4">Why Singapore?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full"></div>
                  <span className="text-gray-600 text-sm">World-class convention facilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full"></div>
                  <span className="text-gray-600 text-sm">Strategic location in Singapore's business district</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full"></div>
                  <span className="text-gray-600 text-sm">Easy access via public transportation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full"></div>
                  <span className="text-gray-600 text-sm">Surrounded by iconic attractions</span>
                </div>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/venue" >
              <Button className="bg-[#00adef] text-white px-6 py-3 rounded-full hover:bg-[#0099d4] flex-1">
                View Venue Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
              <Button variant="outline" className="border-[#07416b] text-[#07416b] hover:bg-[#07416b] hover:text-white px-6 py-3 rounded-full flex-1">
                Get Directions
                <MapPin className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  )
}
