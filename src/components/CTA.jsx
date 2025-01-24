'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Building, MapPin, ClipboardList, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'



const MotionCard = motion(Card);

function CTACard({ title, description, color, icon, className, buttonText, pattern ,href}) {
  return (
    <motion.a
    href={href}
    >
    <MotionCard 
      className={`relative overflow-hidden group hover:shadow-lg transition-shadow ${color} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      >
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div className="w-full h-full bg-texture" 
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(pattern)}")`,
          }}
          />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/20"></div>
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url("data:image/png;base64,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")' }}></div>
      <CardHeader className="relative">
        <motion.div 
          className="absolute top-4 right-4 bg-white/90 rounded-lg p-2 shadow-sm"
          whileHover={{ rotate: 15 }}
          >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </CardHeader>
      <CardContent className="relative flex flex-col justify-between h-full">
        <p className="text-white/90 mb-4">{description}</p>
        <Button variant="secondary" className="w-full mt-4 group bg-white/20 hover:bg-white/30 text-white border-white/30">
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </MotionCard>
   </motion.a>
  )
}

const patterns = {
  awards: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path d="M30 20l-4 4-4-4h8zm0 20l-4-4-4 4h8z" fill="white" fill-opacity="0.5"/></svg>`,
  sponsorship: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path d="M30 20v20M20 30h20" stroke="white" stroke-width="3" stroke-opacity="0.5"/></svg>`,
  committee: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="10" fill="none" stroke="white" stroke-width="3" stroke-opacity="0.5"/></svg>`,
  venue: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect x="20" y="20" width="20" height="20" fill="none" stroke="white" stroke-width="3" stroke-opacity="0.5"/></svg>`,
  register: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path d="M20 20l20 20M40 20l-20 20" stroke="white" stroke-width="3" stroke-opacity="0.5"/></svg>`,
  selfBelief: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path d="M30 20v20M20 30h20M25 25l10 10M35 25l-10 10" stroke="white" stroke-width="3" stroke-opacity="0.5"/></svg>`
};

export default function CTASection() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="grid gap-6">
          {/* Top Two Cards */}
          <div className="grid sm:grid-cols-2 grid-cols-1   gap-6">
            <CTACard
            href="/awards"
              title="Awards"
              description="Recognize excellence and celebrate achievements in various categories"
              color="bg-gradient-to-br from-rose-500 to-rose-600"
              icon={<Trophy className="w-5 h-5" />}
              buttonText="View Awards"
              pattern={patterns.awards}
            />
            <CTACard
            href="/sponsorship"
              title="Sponsorship"
              description="Partner with us and gain visibility at our prestigious event"
              color="bg-gradient-to-br from-emerald-500 to-emerald-600"
              icon={<Users className="w-5 h-5" />}
              buttonText="Become a Sponsor"
              pattern={patterns.sponsorship}
            />
          </div>
          {/* Full Width Card */}
          <CTACard
            href="/committee"
            title="Committee"
            description="Learn how to strategize and formulate your own professional goals. Join our dedicated team organizing this spectacular event."
            color="bg-gradient-to-br from-pink-500 to-pink-600"
            icon={<Building className="w-5 h-5" />}
            className="min-h-[250px]"
            buttonText="Meet the Committee"
            pattern={patterns.committee}
          />
        </div>

        {/* Right Column */}
        <div className="grid gap-6">
          {/* Full Width Card */}
          <CTACard
            href="/venue"
            title="Venue"
            description="Develop your sense of belonging and an active involvement in meaningful experiences. Explore our world-class facilities and event spaces."
            color="bg-gradient-to-br from-orange-500 to-orange-600"
            icon={<MapPin className="w-5 h-5" />}
            className="min-h-[250px]"
            buttonText="Explore Venue"
            pattern={patterns.venue}
          />
          {/* Bottom Two Cards */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            <CTACard
            href="/registration"
              title="Register"
              description="Adapt your strategies to maximize personal and professional success"
              color="bg-gradient-to-br from-blue-500 to-blue-600"
              icon={<ClipboardList className="w-5 h-5" />}
              buttonText="Register Now"
              pattern={patterns.register}
            />
            <CTACard
               href="/about-organizers"
              title="About Organization"
              description="Gain confidence in your abilities and foment an empowered mindset"
              color="bg-gradient-to-br from-purple-500 to-purple-600"
              icon={<Users className="w-5 h-5" />}
              buttonText="Learn More"
              pattern={patterns.selfBelief}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

