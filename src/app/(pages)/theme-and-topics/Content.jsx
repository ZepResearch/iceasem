'use client'

import { useEffect, useRef,useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, FileText, UserPlus, BirdIcon, File } from 'lucide-react'
import Link from 'next/link'
import PocketBase from 'pocketbase'


const pb = new PocketBase('https://icasem.pockethost.io')
const iconMap = {
  bird: <BirdIcon className="h-6 w-6" />,
  user: <UserPlus className="h-6 w-6" />,
  file: <FileText className="h-6 w-6" />,
  document: <File className="h-6 w-6" />
}


export default function ThemeAndTopics() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [timelineData, setTimelineData] = useState([])

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])
  useEffect(() => {
    async function fetchTimelineData() {
      try {
        const records = await pb.collection('dates').getFullList({
          sort: '-created',
          requestKey: null,
        })

        const formattedData = records.map((record) => ({
          date: record.date,
          event: record.title,
          icon: iconMap[record.icon] || <Calendar className="h-6 w-6" />
        }))

        setTimelineData(formattedData)
      } catch (error) {
        console.error("Error fetching timeline data:", error)
        // Fallback to default data if fetch fails
        setTimelineData([
          { date: "January 4, 2025", event: "Early bird registration deadline", icon: <BirdIcon className="h-6 w-6" /> },
          { date: "January 10, 2025", event: "Abstract submission deadline", icon: <UserPlus className="h-6 w-6" /> },
          { date: "February 1, 2025", event: "Full paper submission deadline", icon: <FileText className="h-6 w-6" /> },
          { date: "February 10, 2025", event: "Registration deadline", icon: <File className="h-6 w-6" /> },
        ])
      }
    }

    fetchTimelineData()
  }, [])
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

  const topics = [
    {
      title: "Applied Sciences",
      content: [
        "Advanced Materials and Nanotechnology",
        "Biotechnology and Bioengineering",
        "Applied Physics and Chemistry"
      ]
    },
    {
      title: "Engineering Innovation",
      content: [
        "Artificial Intelligence and Machine Learning Applications",
        "Robotics and Automation Systems",
        "Smart Manufacturing Technologies"
      ]
    },
    {
      title: "Management and Leadership",
      content: [
        "Strategic Management and Innovation",
        "Project Management Methodologies",
        "Digital Transformation Leadership"
      ]
    },
    {
      title: "Sustainable Technologies",
      content: [
        "Green Engineering Solutions",
        "Renewable Energy Systems",
        "Sustainable Manufacturing Practices"
      ]
    },
    {
      title: "Information Technology",
      content: [
        "Cloud Computing and Big Data Analytics",
        "Cybersecurity and Network Systems",
        "Internet of Things Applications"
      ]
    },
    {
      title: "Industrial Engineering",
      content: [
        "Supply Chain Optimization",
        "Quality Management Systems",
        "Operations Research"
      ]
    },
    {
      title: "Civil and Environmental Engineering",
      content: [
        "Smart Infrastructure Development",
        "Environmental Impact Assessment",
        "Sustainable Urban Planning"
      ]
    },
    {
      title: "Research Methodologies",
      content: [
        "Advanced Research Methods",
        "Data Analysis and Interpretation",
        "Experimental Design Techniques"
      ]
    },
    {
      title: "Business Analytics",
      content: [
        "Predictive Analytics in Business",
        "Decision Support Systems",
        "Business Process Optimization"
      ]
    },
    {
      title: "Industry 4.0",
      content: [
        "Digital Twin Technology",
        "Industrial IoT Applications",
        "Smart Factory Solutions"
      ]
    }
  ]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">Conference Themes</Badge>
          <h1 className="text-4xl font-bold text-primary mb-4">Theme and Topics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advancing innovation through interdisciplinary research in applied sciences, engineering, and management.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-br from-[#67dde1] to-[#a4a7d8] text-primary-foreground p-6">
              <CardTitle className="text-3xl">Conference Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
                The International Conference on Applied Science, Engineering & Management, scheduled for April 2nd – 3rd, 2025, in Vietnam, brings together researchers, engineers, industry professionals, and academics to share cutting-edge developments in their respective fields.
              </p>
              <p className="leading-relaxed text-lg text-muted-foreground mt-4">
                This premier conference provides a dynamic platform for knowledge exchange, featuring keynote speakers, technical sessions, and workshops focused on bridging the gap between theoretical research and practical applications.
              </p>
              <p className="leading-relaxed text-lg text-muted-foreground mt-4">
                All submissions undergo double-blind peer review, ensuring high-quality contributions that advance the fields of applied science, engineering, and management. Join us in shaping the future of technology and innovation!
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl  backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-white text-secondary-foreground p-6 border-b-2">
              <CardTitle className="text-3xl  ">Session and Tracks</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg">
              <p className="mb-6 text-lg text-black">
                The conference welcomes submissions in the following areas of applied science, engineering, and management. Related topics not listed below will also be considered.
              </p>
              <Accordion type="single" collapsible className="w-full  p-4 rounded-lg bg-gradient-to-r from-cyan-200/50 to-blue-500/30">
                {topics.map((topic, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold border-b-[1px] border-gray-950/50 hover:no-underline">{topic.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6">
                        {topic.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-800 font-medium text-base">{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-muted text-blue-500 p-6 border-b-2 border-blue-400 rounded-md">
              <CardTitle className="text-3xl">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
                Papers must present original, unpublished research and follow the IEEE format guidelines. All submissions will undergo double-blind peer review by the Technical Committee. Accepted papers will be published in the conference proceedings and indexed in major academic databases.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 mt-12 justify-center items-center mx-auto">
          <Link href={'/submission'}>
            <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" variant="default">
              <FileText className="mr-2 h-6 w-6" />
              Submit Your Paper
            </Button>
          </Link>
          <Link href={'/registration'}>
            <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" variant="secondary">
              <UserPlus className="mr-2 h-6 w-6" />
              Register for the Conference
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-tr from-[#67bae1] to-[#aca4d8] text-primary-foreground p-6">
              <CardTitle className="text-3xl flex items-center">
                <Calendar className="mr-2 h-8 w-8" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
    <ul className=" flex flex-col-reverse py-2">
      {timelineData.map((item, index) => (
        <li key={index} className="flex items-center py-1 ">
          <span className="text-lg text-muted-foreground ">
            <strong>{item.date}:</strong> {item.event}
          </span>
        </li>
      ))}
    </ul>
  </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}