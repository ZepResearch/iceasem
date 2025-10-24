"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  MapPin,
  Navigation,
  Building,
  Utensils,
  Landmark,
  Trees,
  ShoppingBag,
  Palette,
  Plane,
  Train,
  Car,
  Wifi,
  Camera,
  Star,
  Globe,
  Mountain,
  Store,
} from "lucide-react"
import { useState } from "react"

export default function VenuePage() {
  const venueFeatures = [
    {
      icon: <Building className="h-5 w-5 text-[#00adef]" />,
      title: "World-Class Facilities",
      description: "State-of-the-art conference halls with advanced AV technology and flexible seating arrangements",
    },
    {
      icon: <Wifi className="h-5 w-5 text-[#00adef]" />,
      title: "High-Speed Connectivity",
      description: "Complimentary high-speed WiFi throughout the venue with dedicated bandwidth for presentations",
    },
    {
      icon: <Utensils className="h-5 w-5 text-[#00adef]" />,
      title: "Premium Catering",
      description: "International cuisine and networking spaces with stunning Marina Bay views",
    },
    {
      icon: <Car className="h-5 w-5 text-[#00adef]" />,
      title: "Convenient Access",
      description: "Direct MRT connection and proximity to Changi Airport with excellent transportation links",
    },
  ]

  const nearbyAttractions = [
  {
    title: "Petronas Twin Towers",
    description:
      "Kuala Lumpur’s most iconic landmark featuring a sky bridge and stunning city views.",
    distance: "2.0 km",
    icon: <Landmark className="h-8 w-8 text-[#00adef]" />,
    image:
      "https://images.unsplash.com/photo-1472017053394-b29fded587cd?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=3570",
    rating: 4.8,
  },
  {
    title: "KL Tower (Menara Kuala Lumpur)",
    description:
      "Observation tower offering panoramic views of the city skyline and a revolving restaurant.",
    distance: "2.5 km",
    icon: <Camera className="h-8 w-8 text-[#00adef]" />,
    image:
      "https://images.unsplash.com/photo-1496031304571-f63558898308?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=3570",
    rating: 4.7,
  },
  {
    title: "Batu Caves",
    description:
      "Famous limestone hill with colorful temples and a giant golden Lord Murugan statue.",
    distance: "13 km",
    icon: <Mountain className="h-8 w-8 text-[#00adef]" />,
    image:
      "https://images.unsplash.com/photo-1589304122321-2344bad22557?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=3174",
    rating: 4.6,
  },
  {
    title: "Bukit Bintang",
    description:
      "Kuala Lumpur’s shopping and entertainment district, filled with malls, cafes, and nightlife.",
    distance: "1.8 km",
    icon: <ShoppingBag className="h-8 w-8 text-[#00adef]" />,
    image:
      "https://images.unsplash.com/photo-1712601979098-15dccb4d0996?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=3570",
    rating: 4.5,
  },
  {
    title: "Central Market",
    description:
      "Vibrant heritage market showcasing Malaysian crafts, souvenirs, and local delicacies.",
    distance: "2.2 km",
    icon: <Store className="h-8 w-8 text-[#00adef]" />,
    image:
      "https://images.unsplash.com/photo-1695782332230-27790b9490b4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=3570",
    rating: 4.4,
  },
  {
    title: "Merdeka Square",
    description:
      "Historical square surrounded by colonial buildings where Malaysia declared independence.",
    distance: "2.4 km",
    icon: <Landmark className="h-8 w-8 text-[#00adef]" />,
    image:
      "https://images.unsplash.com/photo-1663237155810-a292cca8fe47?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=3570",
    rating: 4.6,
  },
];


  const transportationOptions = [
    {
      icon: <Plane className="h-6 w-6 text-[#00adef]" />,
      title: "From Changi Airport",
      description: "30 minutes by taxi or MRT. Direct connection via Downtown Line to Bayfront Station.",
      time: "30 min",
    },
    {
      icon: <Train className="h-6 w-6 text-[#00adef]" />,
      title: "MRT Access",
      description: "Bayfront MRT Station (CE1/DT16) is directly connected to the convention centre.",
      time: "Direct",
    },
    {
      icon: <Car className="h-6 w-6 text-[#00adef]" />,
      title: "By Car/Taxi",
      description: "Ample parking available. Easy access via major expressways and city roads.",
      time: "Varies",
    },
  ]
const [showVirtualTour, setShowVirtualTour] = useState(false)
  return (
    <main className="bg-[#f0f4f8]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large blob in top right */}
          <div
            className="absolute -right-40 -top-40 w-[30rem] h-[30rem] opacity-20"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: "linear-gradient(45deg, #00adef, #07416b)",
            }}
          ></div>

          {/* Small circle in bottom left */}
          <div className="absolute left-20 bottom-20 w-16 h-16 rounded-full bg-[#00adef]/30"></div>

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-[#07416b]/20"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07416b] mb-6">
              Conference
              <span className="relative inline-block mx-2">
                <span className="relative z-10">Venue</span>
                <span className="absolute inset-0 bg-[#00adef] rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
            </h1>
             <p className="text-xl text-[#07416b]/80 mb-8">Join us at  Kuala Lumper, Malaysia
</p>{/*Join us at  Marina Bay Convention Centre, Singapore*/}

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-2xl p-4 border border-[#00adef]/20 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full flex items-center justify-center">
                    <Building className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#07416b]">50,000</div>
                </div>
                <div className="text-[#07416b]/80 text-sm">sqm Convention Space</div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#00adef]/20 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full flex items-center justify-center">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#07416b]">World</div>
                </div>
                <div className="text-[#07416b]/80 text-sm">Class Facilities</div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#00adef]/20 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full flex items-center justify-center">
                    <Train className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#07416b]">Direct</div>
                </div>
                <div className="text-[#07416b]/80 text-sm">MRT Connection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-[#f0f4f8] to-[#e8f2ff] rounded-3xl overflow-hidden shadow-sm border border-[#00adef]/20">
           { /* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00adef]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#07416b]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                  <div className="relative p-8 md:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00adef] to-[#07416b] p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                        <Building className="h-6 w-6 text-[#07416b]" />
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#07416b]">Kuala Lumper, Malaysia
</h2>
                      </div>

                      <div className="space-y-6 text-[#07416b]/80">
                      <p>
                        The venue for 2<sup>nd</sup>ICASEM 2025 will be declared soon and will be located in Kuala Lumper, Malaysia
.
                      </p>

                      <div className="space-y-4">
                        <h3 className="text-xl font-medium text-[#07416b]">Venue Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {venueFeatures.map((feature, index) => (
                          <div
                          key={index}
                          className="bg-white rounded-2xl p-4 border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group"
                          >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                            </div>
                            <div>
                            <h4 className="font-semibold text-[#07416b] text-sm mb-1">{feature.title}</h4>
                            <p className="text-[#07416b]/70 text-xs leading-relaxed">{feature.description}</p>
                            </div>
                          </div>
                          </div>
                        ))}
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-[#00adef]/20 p-6 mt-8">
                        <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-5 w-5 text-[#00adef]" />
                        <h3 className="text-lg font-medium text-[#07416b]">Address</h3>
                        </div>
                        <p className="text-[#07416b]/80 mb-4">Venue will be declared soon, Kuala Lumper, Malaysia
</p>
                        <div className="flex items-center gap-2 text-sm text-[#07416b]/60">
                        {/* <Train className="h-4 w
                      </div>
                      <p className="text-[#07416b]/80 mb-4">[Declared Soon]</p>
                      <div className="flex items-center gap-2 text-sm text-[#07416b]/60">
                        {/* <Train className="h-4 w-4 text-[#00adef]" /> */}
                        {/* <span>Bayfront MRT Station (CE1/DT16) - Direct Connection</span> */}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0099d4] hover:to-[#05334a] text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                      <Navigation className="mr-2 h-5 w-5" />
                      Get Directions
                    </Button>
                  {/* <Button
  variant="outline"
  className="border-[#07416b] text-[#07416b] hover:bg-[#07416b] hover:text-white rounded-full px-6 py-3 transition-all duration-300"
  onClick={() => setShowVirtualTour(true)}
>
  <Camera className="mr-2 h-5 w-5" />
  Virtual Tour
</Button> */}
                  </div>
                </div>

                <div>
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border-4 border-[#00adef]/20">
                    <Image
                      src="https://images.unsplash.com/photo-1512580687892-1b04e29ea66f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3901"
                      alt="Marina Bay Convention Centre Singapore"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07416b]/80 to-transparent"></div>

                    {/* Floating elements */}
                    <div className="absolute top-1/4 right-1/4 h-12 w-12 rounded-full bg-[#00adef]/30 blur-xl opacity-70 animate-pulse"></div>
                    <div
                      className="absolute bottom-1/3 left-1/3 h-16 w-16 rounded-full bg-[#07416b]/30 blur-xl opacity-70 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Venue name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center border border-[#00adef]/30">
                        <span className="text-[#07416b] font-medium">Kuala Lumper, Malaysia
Premier Convention Venue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      {/* <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Getting There</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00adef] to-[#07416b] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#07416b]/80 max-w-2xl mx-auto">
              Marina Bay Convention Centre is easily accessible from anywhere in Singapore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {transportationOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-[#07416b] mb-2">{option.title}</h3>
                <p className="text-[#07416b]/80 text-sm mb-3 leading-relaxed">{option.description}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full"></div>
                  <span className="text-[#00adef] font-semibold text-sm">{option.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-[#00adef]/20 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#07416b] mb-6">Detailed Transportation Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-[#07416b] mb-3">From Changi Airport:</h4>
                <ul className="space-y-2 text-[#07416b]/80">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#00adef] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>By MRT:</strong> Take the East West Line to Tanah Merah, transfer to Downtown Line to
                      Bayfront Station (30-40 minutes)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#00adef] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>By Taxi:</strong> Direct journey takes approximately 30 minutes depending on traffic
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#00adef] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Airport Shuttle:</strong> Premium shuttle services available with advance booking
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#07416b] mb-3">Local Transportation:</h4>
                <ul className="space-y-2 text-[#07416b]/80">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#07416b] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>MRT:</strong> Bayfront Station (CE1/DT16) with direct underground connection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#07416b] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Bus Services:</strong> Multiple bus routes serve the Marina Bay area
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#07416b] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Parking:</strong> Ample parking spaces available at competitive rates
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Location Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Location</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00adef] to-[#07416b] mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="relative bg-[#f0f4f8] rounded-3xl border border-[#00adef]/20 overflow-hidden p-4 shadow-sm">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#00adef]/10 to-[#07416b]/10 opacity-50"></div>

            <div className="relative rounded-2xl overflow-hidden h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176894834147!2d103.85594731475394!3d1.2830688990637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190d593a26b5%3A0x7a2b2b2b2b2b2b2b!2sMarina%20Bay%20Sands!5e0!3m2!1sen!2ssg!4v1635000000000!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Explore Kuala Lumper, Malaysia </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00adef] to-[#07416b] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#07416b]/80 max-w-2xl mx-auto">
              Discover iconic attractions within walking distance of  2<sup>nd</sup>ICASEM 2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl border border-[#00adef]/20 overflow-hidden group hover:shadow-xl transition-all duration-300 shadow-sm"
              >

                <div className="relative">
                  <div className="h-48 w-full overflow-hidden">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Rating badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-semibold text-[#07416b]">{attraction.rating}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#00adef] to-[#07416b] p-0.5 mb-4 -mt-12 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                        {attraction.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-[#07416b] mb-2 group-hover:text-[#00adef] transition-colors duration-300">
                      {attraction.title}
                    </h3>
                    <p className="text-[#07416b]/80 mb-4 text-sm leading-relaxed">{attraction.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#07416b]/60">
                        {/* <MapPin className="h-4 w-4 text-[#00adef]" />
                        <span className="text-sm">{attraction.distance} away</span> */}
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#00adef] text-[#00adef] hover:bg-[#00adef] hover:text-white rounded-full text-xs"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-white rounded-3xl border border-[#00adef]/20 overflow-hidden p-8 shadow-sm">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#00adef]/10 to-[#07416b]/10 opacity-50"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#07416b] mb-3">Ready to Join  2<sup>nd</sup>ICASEM 2025?</h3>
                <p className="text-[#07416b]/80 mb-6">
                  Experience Kuala Lumper, Malaysia  premier conference venue and be part of the global Applied Science, Engineering
                  & Management community.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/registration">
                    <Button className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0099d4] hover:to-[#05334a] text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-[#07416b] text-[#07416b] hover:bg-[#07416b] hover:text-white rounded-full px-8 py-3 transition-all duration-300"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Virtual Tour Modal */}
{showVirtualTour && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-3xl border border-[#00adef]/20 overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl">
      <div className="flex items-center justify-between p-6 border-b border-[#00adef]/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-lg flex items-center justify-center">
            <Camera className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-[#07416b]">Virtual Tour - Marina Bay Convention Centre</h3>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowVirtualTour(false)}
          className="border-[#07416b] text-[#07416b] hover:bg-[#07416b] hover:text-white rounded-full"
        >
          ✕
        </Button>
      </div>
      <div className="p-6">
        <div className="rounded-2xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!4v1750879848773!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ1I3Y3piOUFF!2m2!1d1.286744930631622!2d103.8543872077277!3f277.2678614574391!4f-8.846132534092959!5f0.7820865974627469" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>
)}
    </main>
  )
}
