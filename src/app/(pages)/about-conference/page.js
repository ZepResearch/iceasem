'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <section className="py-16 bg-lime-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-8 text-gray-900">About the International Conference on Applied Science, Engineering & Management </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className='text-3xl text-pretty font-medium underline  decoration-wavy decoration-green-500'>About ICASEM</CardTitle>
                <CardDescription>Advancing Knowledge and Innovation in Vietnam</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-900 mb-4">
                Welcome to the International Conference on Applied Science, Engineering & Management (ICASEM), a distinguished academic platform designed to unite researchers, scientists, engineers, and professionals from across the globe. ICASEM serves as a catalyst for knowledge exchange, fostering innovation and collaboration in the rapidly evolving fields of applied science, engineering, and management.
                </p>
                <p className="text-gray-900">
                Our conference showcases cutting-edge research and practical advancements, encouraging interdisciplinary dialogue and partnerships to address complex global challenges. By providing a dynamic environment for presentations, workshops, and networking, ICASEM supports academic excellence and professional growth, shaping the future of research and innovation in Vietnam and beyond.                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-64 md:h-full"
          >
            <Image
              src="/assets/about.jpg"
              alt="Illustration of applied science, engineering, and management concepts"
              layout="fill"
              objectFit="contain"
              className="rounded-3xl"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex sm:flex-row flex-col justify-start gap-14"
        >
          <Card className="max-w-3xl">
            <CardHeader>
              <CardTitle className='text-3xl text-pretty font-medium underline  decoration-wavy decoration-green-500'>Join Us in Advancing Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-900 mb-4">
                By participating in our conference, you&apos;ll have the opportunity to:
              </p>
              <ul className="list-disc list-inside text-gray-900 space-y-2">
                <li>Engage with leading experts in applied science, engineering, and management</li>
                <li>Explore innovative solutions to industry challenges</li>
                <li>Network with professionals and researchers from diverse backgrounds</li>
                <li>Contribute to shaping the future of these fields in Vietnam and beyond</li>
                <li>Learn about the latest advancements and best practices in your area of expertise</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="max-w-3xl">
            <CardHeader>
              <CardTitle className='text-3xl text-pretty font-medium underline  decoration-wavy decoration-green-500'>Our Mission</CardTitle>
              <CardDescription>Driving innovation and excellence in applied fields</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-gray-900 mb-4">
              <strong>What We Stand For:</strong> ICASEM advances applied science, engineering, and management by uniting global experts, fostering collaboration, and promoting innovative solutions to address practical challenges and drive progress across industries and communities.
              </p>
              <p className="text-gray-900 mb-4">
              <strong>Our Commitment:</strong>We create opportunities for collaboration, showcase groundbreaking research, and exchange ideas to empower participants in addressing real-world challenges, driving transformative solutions, and enhancing the quality of life globally.
              </p>
              <p className="text-gray-900">
              <strong>Shaping the Future:</strong>ICASEM bridges academia and industry, promoting impactful solutions to global challenges through research and innovation, inspiring progress, and supporting sustainable development to benefit society and industries worldwide.

              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Why Attend Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className='text-3xl text-pretty font-medium underline  decoration-wavy decoration-green-500'>Why Attend ICASEM 2025</CardTitle>
              <CardDescription>A unique opportunity to engage with global experts and innovators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Learn from Leading Experts</h3>
                  <p className="text-gray-900 mb-6">
                    Connect with 50+ renowned specialists in applied science, engineering, and management. Gain valuable insights into the latest research, innovations, and best practices driving progress in these fields.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Discover Cutting-Edge Research</h3>
                  <p className="text-gray-900 mb-6">
                    Explore groundbreaking studies and practical applications aimed at solving real-world challenges. Learn about actionable solutions you can implement in your organization or research initiatives.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Collaborate for Innovation</h3>
                  <p className="text-gray-900 mb-6">
                    Foster collaborations with thought leaders, industry professionals, and fellow researchers. Build connections that can lead to impactful projects and advancements in your field.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Engage in Interactive Sessions</h3>
                  <p className="text-gray-900 mb-6">
                    Participate in dynamic workshops, panel discussions, and Q&A sessions on topics like artificial intelligence, sustainable engineering, and innovative management practices. Equip yourself with practical tools to address industry challenges effectively.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Shape the Future of Your Field</h3>
                  <p className="text-gray-900 mb-6">
                    Contribute to shaping the future of applied science, engineering, and management in Vietnam and beyond. Your ideas, insights, and engagement can drive meaningful progress in these crucial fields.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Gain a Global Perspective</h3>
                  <p className="text-gray-900 mb-6">
                    Network with experts and participants from diverse backgrounds and regions. Broaden your understanding of global trends and explore a variety of innovative approaches in your field.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Who Can Attend Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className='text-3xl text-pretty font-medium underline  decoration-wavy decoration-green-500'>Who Can Attend</CardTitle>
              <CardDescription>Join our diverse community of innovators and experts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Researchers & Scientists",
                    description: "Present your findings, exchange ideas, and collaborate on pioneering solutions in applied science and engineering."
                  },
                  {
                    title: "Engineers & Technologists",
                    description: "Stay informed about the latest technological advancements and engineering practices to drive innovation in your field."
                  },
                  {
                    title: "Managers & Business Leaders",
                    description: "Explore new management strategies and technologies to enhance organizational performance and competitiveness."
                  },
                  {
                    title: "Industry Professionals",
                    description: "Discover new applications of research and innovative practices to solve real-world challenges in your industry."
                  },
                  {
                    title: "Academicians & Educators",
                    description: "Gain insights into the latest developments in applied fields to enhance your teaching and research activities."
                  },
                  {
                    title: "Students & Young Professionals",
                    description: "Build knowledge, expand your network, and contribute to discussions shaping the future of applied science, engineering, and management."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-900">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg font-semibold text-gray-900">
                  Join us in Vietnam on September 15<sup>th</sup> - 17<sup>th</sup>, 2025 for a transformative experience that empowers you to lead innovation and advance your field!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

