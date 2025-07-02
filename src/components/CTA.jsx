import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, MapPin, Presentation, Users, Calendar, Building2, ArrowRight, Star } from 'lucide-react'
import Link from "next/link"

export default function CtaSection() {
  const cards = [
    {
      id: 'awards',
      title: 'Awards',
      description: 'Recognizing outstanding contributions in Applied Science, Engineering & Management, celebrating innovation and excellence that drives technological advancement and societal impact.',
      href: '/awards',
      icon: <Trophy className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 'venue',
      title: 'Venue',
      description: 'Join us in the vibrant city of Singapore from November 14-15, or participate virtually through our interactive online platform—experience ICASEM your way.',
      href: '/venue',
      icon: <MapPin className="w-6 h-6" />,
      color: 'navy'
    },
    {
      id: 'sponsorship',
      title: 'Sponsorship',
      description: 'Partner with ICASEM to showcase your organization\'s commitment to Applied Science, Engineering & Management and connect with global industry leaders.',
      href: '/sponsorship',
      icon: <Presentation className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 'committee',
      title: 'Committee',
      description: 'Meet our distinguished panel of Applied Science, Engineering & Management experts, researchers, and thought leaders shaping the conference\'s vision.',
      href: '/committee',
      icon: <Users className="w-6 h-6" />,
      color: 'navy'
    },
    {
      id: 'schedule',
      title: 'Schedule',
      description: 'Explore our comprehensive 2-day agenda featuring keynotes, technical sessions, workshops, and networking events on Applied Science, Engineering & Management.',
      href: '/schedule',
      icon: <Calendar className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 'organizer',
      title: 'Organizer',
      description: 'Learn about the organizing team behind ICASEM and their dedication to advancing Applied Science, Engineering & Management research and innovation.',
      href: '/about-organizers',
      icon: <Building2 className="w-6 h-6" />,
      color: 'navy'
    }
  ]

  return (
    <div className="w-full bg-[#f0f4f8] py-12 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-4 bg-[#00adef] rounded-full"></div>
            <span className="text-gray-600 text-sm lg:text-base font-medium">Conference Information</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#07416b] leading-tight mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover all aspects of ICASEM 2025 - from awards and venue details to sponsorship opportunities and our organizing committee
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-4 gap-6 h-[800px]">
          {/* Awards Card - Large */}
          <div className="col-span-2 row-span-2">
            <Card className="h-full bg-white rounded-2xl p-8 relative overflow-hidden border-l-4 border-[#00adef] hover:shadow-xl transition-all duration-300 group">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00adef]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#07416b] mb-4">Excellence Awards</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Recognizing outstanding contributions in Applied Science, Engineering & Management, celebrating innovation and excellence that drives technological advancement and societal impact.
              </p>

              {/* Award Categories */}
              <div className="grid md:grid-cols-3 grid-cols-1 gap-1 mb-3">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-[#00adef]" />
                  <span className="text-sm text-gray-600">BEST PAPER PRESENTATION AWARD</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-[#00adef]" />
                  <span className="text-sm text-gray-600">BEST PAPER AWARD</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-[#00adef]" />
                  <span className="text-sm text-gray-600 uppercase">Best International student presentation Award</span>
                </div>
              
              </div>

              {/* CTA */}
              <Link href="/awards">
                <Button className="bg-[#00adef] text-white px-6 py-3 rounded-full hover:bg-[#0099d4] group-hover:translate-x-1 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              {/* Badge */}
              <div className="absolute top-6 right-6 bg-[#00adef] text-white px-4 py-2 rounded-full text-sm font-semibold">
                AWARDS
              </div>
            </Card>
          </div>

          {/* Venue Card */}
          <div className="row-span-2">
            <Card className="h-full bg-white rounded-2xl p-6 relative overflow-hidden border-l-4 border-[#07416b] hover:shadow-xl transition-all duration-300 group">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#07416b] to-[#00adef] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#07416b] mb-4">Singapore Venue</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Join us in the vibrant city of Singapore from November 14-15, or participate virtually through our interactive online platform.
              </p>

              {/* Venue Details */}
              <div className="space-y-3 mb-6">
                {/* <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#07416b] rounded-full"></div>
                  <span className="text-xs text-gray-600">Marina Bay Convention Centre</span>
                </div> */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#07416b] rounded-full"></div>
                  <span className="text-xs text-gray-600">Hybrid Format Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#07416b] rounded-full"></div>
                  <span className="text-xs text-gray-600">Nov 14<sup>th</sup>-15<sup>th</sup>, 2025</span>
                </div>
              </div>

              {/* CTA */}
              <Link href="/venue">
                <Button variant="outline" className="border-[#07416b] text-[#07416b] hover:bg-[#07416b] hover:text-white w-full group-hover:translate-y-1 transition-all duration-300">
                  View Details
                </Button>
              </Link>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#07416b] text-white px-3 py-1 rounded-full text-xs font-semibold">
                VENUE
              </div>
            </Card>
          </div>

          {/* Sponsorship Card */}
          <div className="row-span-2 row-start-3">
            <Card className="h-full bg-white rounded-2xl p-6 relative overflow-hidden border-l-4 border-[#00adef] hover:shadow-xl transition-all duration-300 group">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Presentation className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#07416b] mb-4">Partnership</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Partner with ICASEM to showcase your organization's commitment to Applied Science, Engineering & Management.
              </p>

              {/* Sponsorship Levels */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full"></div>
                  <span className="text-xs text-gray-600">Platinum Sponsor</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full"></div>
                  <span className="text-xs text-gray-600">Gold Sponsor</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full"></div>
                  <span className="text-xs text-gray-600">Silver Sponsor</span>
                </div>
              </div>

              {/* CTA */}
              <Link href="/sponsorship">
                <Button variant="outline" className="border-[#00adef] text-[#00adef] hover:bg-[#00adef] hover:text-white w-full group-hover:translate-y-1 transition-all duration-300">
                  Become Partner
                </Button>
              </Link>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#00adef] text-white px-3 py-1 rounded-full text-xs font-semibold">
                SPONSOR
              </div>
            </Card>
          </div>

          {/* Committee Card */}
          <div className="col-span-2 row-start-4">
            <Card className="h-full bg-white rounded-2xl p-6 relative overflow-hidden border-l-4 border-[#07416b] hover:shadow-xl transition-all duration-300 group">
              {/* Background Pattern */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#07416b]/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              
              {/* Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#07416b] to-[#00adef] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#07416b] mb-3">Expert Committee</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Meet our distinguished panel of Applied Science, Engineering & Management experts, researchers.
                  </p>

                  {/* Committee Stats */}
              
                </div>

                {/* CTA */}
                <Link href="/committee">
                  <Button className="bg-[#07416b] text-white px-4 py-2 rounded-full hover:bg-[#05334a] group-hover:translate-x-1 transition-all duration-300">
                    Meet Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#07416b] text-white px-3 py-1 rounded-full text-xs font-semibold">
                COMMITTEE
              </div>
            </Card>
          </div>

          {/* Schedule Card */}
          <div className="row-start-3">
            <Card className="h-full bg-white rounded-2xl p-6 relative overflow-hidden border-l-4 border-[#00adef] hover:shadow-xl transition-all duration-300 group">
              {/* Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#07416b] mb-1">2-Day Schedule</h3>
              
              {/* Schedule Highlights */}
            

              {/* CTA */}
              <Link href="/schedule">
                <Button variant="outline" className="border-[#00adef] text-[#00adef] hover:bg-[#00adef] hover:text-white w-full text-sm group-hover:translate-y-1 transition-all duration-300">
                  View Schedule
                </Button>
              </Link>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#00adef] text-white px-2 py-1 rounded-full text-xs font-semibold">
                SCHEDULE
              </div>
            </Card>
          </div>

          {/* Organizer Card */}
          <div className="row-start-3">
            <Card className="h-full bg-white rounded-2xl p-6 relative overflow-hidden border-l-4 border-[#07416b] hover:shadow-xl transition-all duration-300 group">
              {/* Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#07416b] to-[#00adef] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#07416b] mb-1">Organizing Team</h3>
             

              {/* Organizer Info */}
           

              {/* CTA */}
              <Link href="/about-organizers">
                <Button variant="outline" className="border-[#07416b] text-[#07416b] hover:bg-[#07416b] hover:text-white w-full text-sm group-hover:translate-y-1 transition-all duration-300">
                  About Us
                </Button>
              </Link>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#07416b] text-white px-2 py-1 rounded-full text-xs font-semibold">
                TEAM
              </div>
            </Card>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <Card key={card.id} className={`bg-white rounded-2xl p-6 border-l-4 ${card.color === 'blue' ? 'border-[#00adef]' : 'border-[#07416b]'} hover:shadow-lg transition-shadow duration-300`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${card.color === 'blue' ? 'bg-gradient-to-br from-[#00adef] to-[#07416b]' : 'bg-gradient-to-br from-[#07416b] to-[#00adef]'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#07416b] mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{card.description}</p>
                  <Link href={card.href}>
                    <Button variant="outline" className={`${card.color === 'blue' ? 'border-[#00adef] text-[#00adef] hover:bg-[#00adef]' : 'border-[#07416b] text-[#07416b] hover:bg-[#07416b]'} hover:text-white text-sm`}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {cards.map((card, index) => (
            <Card key={card.id} className={`bg-white rounded-2xl p-6 border-l-4 ${card.color === 'blue' ? 'border-[#00adef]' : 'border-[#07416b]'} hover:shadow-lg transition-shadow duration-300`}>
              <div className="text-center mb-4">
                <div className={`w-16 h-16 ${card.color === 'blue' ? 'bg-gradient-to-br from-[#00adef] to-[#07416b]' : 'bg-gradient-to-br from-[#07416b] to-[#00adef]'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#07416b] mb-2">{card.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">{card.description}</p>
              <Link href={card.href}>
                <Button className={`${card.color === 'blue' ? 'bg-[#00adef] hover:bg-[#0099d4]' : 'bg-[#07416b] hover:bg-[#05334a]'} text-white w-full rounded-full`}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16">
          <Card className="bg-gradient-to-r from-[#07416b] to-[#00adef] rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-4xl font-bold mb-4">Ready to Join ICASEM 2025?</h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Don't miss this opportunity to be part of Singapore's premier Applied Science, Engineering & Management conference
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/registration">
                <Button className="bg-white text-[#07416b] px-8 py-4 rounded-full hover:bg-gray-100 text-lg font-semibold">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </Link>
                <Link href="/sponsorship">
                <Button variant="outline" className="border-white text-black hover:bg-white hover:text-[#07416b] px-8 py-4 rounded-full text-lg font-semibold">
           Become Sponsor
                </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
