'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin, Users, Mail, Phone, Globe, Award } from 'lucide-react'

export default function AboutCompany() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut',
        staggerChildren: 0.1 
      } 
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const conferenceFeatures = [
    { icon: CalendarDays, text: "2-day event: May 22nd - 23rd, 2025" },
    { icon: MapPin, text: "Vietnam" },
    { icon: Users, text: "500+ Expected Attendees" },
    { icon: Globe, text: "International Speakers" },
    { icon: Mail, text: "info@icasem.com" },
    { icon: Phone, text: "+91 7358737843" },
  ]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1 border-lime-600">About Zep Research</Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">International Conference on Applied Science, Engineering & Management</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A premier event bringing together industry professionals, researchers, and academics from around the world.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center pb-12">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary underline  decoration-wavy decoration-green-500">Zep Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground px-12">
              At Zep Research, we specialize in organizing and hosting academic conferences and webinars that bring together researchers, educators, and professionals from around the globe. Our expertly curated events foster meaningful exchanges of ideas, knowledge sharing, and collaborations, creating opportunities for both seasoned scholars and emerging researchers to connect and grow.
            </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary underline  decoration-wavy decoration-green-500">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our mission is to advance the field of tourism and hospitality management by providing a platform for knowledge exchange, networking, and collaboration. We strive to address current challenges, explore emerging opportunities, and shape the future of the industry through insightful discussions and presentations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary underline  decoration-wavy decoration-green-500">Conference Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  {conferenceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <feature.icon className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardContent className="p-6">
              <CardDescription className="text-lg font-medium text-primary mb-2">
                Join us in shaping the future of tourism and hospitality
              </CardDescription>
              <p className="text-muted-foreground">
              April - 23rd, 2025 • Vietnam
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}