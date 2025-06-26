"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Presentation, ImageIcon, Monitor, Check, Users, Globe, Award } from "lucide-react"

export default function ModeOfPresentationPage() {
  const presentationGuidelines = [
    "Be concise and focused. Clearly communicate your research question, methodology, findings, and implications within the allotted time for Applied Science, Engineering & Management topics.",
    "Use visuals effectively. Incorporate clear, high-quality visuals, diagrams, and charts that enhance understanding of your technical research and management insights.",
    "Practice your presentation. Rehearse to ensure smooth delivery and timing, especially for complex technical concepts and interdisciplinary research.",
    "Prepare for questions. Anticipate potential questions from diverse audiences including researchers, engineers, and management professionals.",
    "Engage with your audience. Encourage questions and discussion to maximize the impact of your presentation and foster collaboration across disciplines.",
    "Follow technical standards. Ensure your presentation meets IEEE formatting guidelines and includes proper citations for academic rigor.",
  ]

  const presentationStats = [
    {
      icon: <Users className="h-6 w-6 text-[#00adef]" />,
      number: "500+",
      label: "Expected Attendees",
    },
    {
      icon: <Globe className="h-6 w-6 text-[#00adef]" />,
      number: "15+",
      label: "Countries Represented",
    },
    {
      icon: <Award className="h-6 w-6 text-[#00adef]" />,
      number: "20+",
      label: "Technical Sessions",
    },
  ]

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
              Mode of
              <span className="relative inline-block mx-2 ml-6">
                <span className="relative z-10">Presentation</span>
                <span className="absolute inset-0 bg-[#00adef] rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
            </h1>
            <p className="text-xl text-[#07416b]/80 mb-8">
              Discover the different ways to present your research at ICASEM 2025: Applied Science, Engineering &
              Management
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {presentationStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 border border-[#00adef]/20 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-[#07416b]">{stat.number}</div>
                  </div>
                  <div className="text-[#07416b]/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speak at the Event Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px] border-4 border-[#00adef]/20">
              <Image
                src="https://plus.unsplash.com/premium_photo-1705267935935-53ee91453a52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Oral Presentation at ICASEM"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07416b]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center border border-[#00adef]/30">
                  <span className="text-[#07416b] font-medium">Share your research insights with global experts</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full p-3 mr-4">
                  <Presentation className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#07416b]">Oral Presentation</h2>
              </div>
              <p className="text-[#07416b]/80 mb-6">
                Present your research in a 15-minute oral presentation followed by a 5-minute Q&A session. This format
                is ideal for sharing detailed findings in Applied Science, Engineering & Management and engaging
                directly with international experts and industry professionals.
              </p>

              <div className="bg-[#f0f4f8] rounded-3xl p-6 mb-6 border border-[#00adef]/20">
                <h3 className="text-xl font-bold text-[#07416b] mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#00adef] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">
                      PowerPoint or PDF presentation (16:9 format, IEEE compliant)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#00adef] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">
                      Concise overview of your research methodology and technical approach
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#00adef] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">
                      Clear presentation of key findings and practical implications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#00adef] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">
                      Brief bio highlighting your expertise in Applied Science, Engineering, or Management
                    </span>
                  </li>
                </ul>
              </div>
              <Link href="/submission">
                <Button className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0099d4] hover:to-[#05334a] text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Submit for Oral Presentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Show a Poster Section */}
      <section className="py-16 bg-gradient-to-br from-[#f0f4f8] to-[#e8f2ff]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#07416b] to-[#00adef] rounded-full p-3 mr-4">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#07416b]">Poster Presentation</h2>
              </div>
              <p className="text-[#07416b]/80 mb-6">
                Present your research in a visual format during our dedicated poster sessions. This interactive format
                allows for in-depth discussions with interested attendees and is perfect for showcasing technical
                diagrams, experimental results, and management frameworks.
              </p>

              <div className="bg-white rounded-3xl p-6 mb-6 border border-[#00adef]/20">
                <h3 className="text-xl font-bold text-[#07416b] mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#07416b] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">
                      A0 size poster (841 × 1189 mm) in portrait orientation, IEEE format
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#07416b] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">
                      Clear visual representation with technical diagrams and data visualization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#07416b] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">
                      QR code linking to additional resources or full paper (optional)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#07416b] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">
                      Handouts or business cards for networking with industry professionals
                    </span>
                  </li>
                </ul>
              </div>
              <Link href="/submission">
                <Button className="bg-gradient-to-r from-[#07416b] to-[#00adef] hover:from-[#05334a] hover:to-[#0099d4] text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Submit for Poster Presentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px] order-1 lg:order-2 border-4 border-[#07416b]/20">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661587798846-2b2bdbe5abc0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Poster Presentation at ICASEM"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07416b]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center border border-[#00adef]/30">
                  <span className="text-[#07416b] font-medium">Engage in meaningful technical discussions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Present Online Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px] border-4 border-[#00adef]/20">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661483130874-527d2f9e5746?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Virtual Presentation at ICASEM"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07416b]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center border border-[#00adef]/30">
                  <span className="text-[#07416b] font-medium">Present from anywhere in the world</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full p-3 mr-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#07416b]">Virtual Presentation</h2>
              </div>
              <p className="text-[#07416b]/80 mb-6">
                Can't attend in Singapore? Present your research virtually through our advanced online platform. This
                hybrid option provides flexibility while still allowing for meaningful engagement with the global
                Applied Science, Engineering & Management community.
              </p>

              <div className="bg-[#f0f4f8] rounded-3xl p-6 mb-6 border border-[#00adef]/20">
                <h3 className="text-xl font-bold text-[#07416b] mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#00adef] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">
                      PowerPoint or PDF presentation (16:9 format, optimized for screen sharing)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#00adef] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">
                      Stable internet connection (minimum 10 Mbps upload for HD quality)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#00adef] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">HD webcam and professional-quality microphone or headset</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#00adef] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#07416b]/80">Pre-recorded backup of your presentation (recommended)</span>
                  </li>
                </ul>
              </div>
              <Link href="/submission">
                <Button className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0099d4] hover:to-[#05334a] text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Submit for Virtual Presentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Guidelines Section */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-12 text-center">Presentation Guidelines</h2>
            <p className="text-[#07416b]/80 text-center mb-8 text-lg">
              Regardless of your presentation mode, please adhere to the following guidelines to ensure a smooth and
              engaging experience for all ICASEM 2025 participants:
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#00adef]/20">
              <div className="grid grid-cols-1 gap-6">
                {presentationGuidelines.map((guideline, index) => (
                  <div
                    key={index}
                    className="flex items-start group hover:bg-[#f0f4f8] p-4 rounded-2xl transition-colors duration-300"
                  >
                    <div className="bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-[#07416b]/80 leading-relaxed">{guideline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-12 text-center">Technical Requirements</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f0f4f8] rounded-3xl p-6 border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Presentation className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#07416b] mb-3">Presentation Format</h3>
                <ul className="text-[#07416b]/80 text-sm space-y-2">
                  <li>• IEEE compliant formatting</li>
                  <li>• 16:9 aspect ratio</li>
                  <li>• Maximum 20 slides</li>
                  <li>• PDF or PowerPoint format</li>
                </ul>
              </div>

              <div className="bg-[#f0f4f8] rounded-3xl p-6 border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#07416b] mb-3">Poster Specifications</h3>
                <ul className="text-[#07416b]/80 text-sm space-y-2">
                  <li>• A0 size (841 × 1189 mm)</li>
                  <li>• Portrait orientation</li>
                  <li>• High resolution (300 DPI)</li>
                  <li>• Professional printing quality</li>
                </ul>
              </div>

              <div className="bg-[#f0f4f8] rounded-3xl p-6 border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#07416b] mb-3">Virtual Setup</h3>
                <ul className="text-[#07416b]/80 text-sm space-y-2">
                  <li>• HD webcam (1080p minimum)</li>
                  <li>• Professional microphone</li>
                  <li>• Stable internet (10+ Mbps)</li>
                  <li>• Backup presentation file</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#e8f2ff] to-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#00adef]/20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold text-[#07416b] mb-2">Ready to Present Your Research?</h3>
                <p className="text-[#07416b]/80 max-w-xl">
                  Choose your preferred presentation mode and submit your proposal for ICASEM 2025. Join the global
                  community of Applied Science, Engineering & Management researchers.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/submission">
                  <Button className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0099d4] hover:to-[#05334a] text-white rounded-full whitespace-nowrap px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    Submit Your Presentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href="/papers-format"
                  className="inline-flex items-center justify-center rounded-full border border-[#07416b] px-6 py-3 text-sm font-medium text-[#07416b] hover:bg-[#07416b] hover:text-white transition-all duration-300"
                >
                  View Format Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
