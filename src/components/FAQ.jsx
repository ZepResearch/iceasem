"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Mail, Phone, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function FaqSection() {
  const [openItems, setOpenItems] = useState([0]) // First item open by default

  const toggleItem = (index) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  // Function to open Tawk.to chat
  const openTawkToChat = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize()
    } else {
      // Fallback if Tawk_API is not ready yet
      setTimeout(() => {
        if (window.Tawk_API && window.Tawk_API.maximize) {
          window.Tawk_API.maximize()
        }
      }, 1000)
    }
  }

  const faqCategories = [
    {
      title: "Registration & Participation",
      faqs: [
        {
          question: "How do I register for ICASEM 2024?",
          answer:
            "You can register online through our official website. Early bird registration is available until October 15, 2024. Choose between in-person attendance in Singapore or virtual participation through our hybrid platform.",
        },
        {
          question: "What are the registration fees?",
          answer:
            "Registration fees vary by category: Academic/Student: $299 (Early Bird: $249), Industry Professional: $399 (Early Bird: $349), Virtual Attendance: $199 (Early Bird: $149). All fees include conference materials, meals, and networking events.",
        },
        {
          question: "Can I attend virtually?",
          answer:
            "Yes! ICASEM 2024 offers a hybrid format. Virtual attendees can participate in live sessions, access recorded presentations, join networking rooms, and interact with speakers through our advanced online platform.",
        },
        {
          question: "What is included in the registration fee?",
          answer:
            "Registration includes access to all sessions, conference materials, welcome reception, coffee breaks, lunch on both days, networking dinner, certificate of participation, and access to presentation recordings for 6 months.",
        },
      ],
    },
    {
      title: "Paper Submission & Presentation",
      faqs: [
        {
          question: "What is the paper submission deadline?",
          answer:
            "The final deadline for paper submission is October 30, 2024. We recommend submitting early for better review scheduling. Accepted papers will be notified by November 5, 2024.",
        },
        {
          question: "What are the presentation formats available?",
          answer:
            "We offer multiple presentation formats: Oral presentations (15-20 minutes), Poster sessions, Panel discussions, and Workshop presentations. Virtual presenters can join via video conference with full interaction capabilities.",
        },
        {
          question: "Will papers be published?",
          answer:
            "Yes, accepted papers will be published in our conference proceedings with ISBN. Selected high-quality papers will be recommended for publication in partner journals indexed in Scopus and Web of Science.",
        },
        {
          question: "What are the paper formatting guidelines?",
          answer:
            "Papers should follow IEEE format, be 6-8 pages long, include abstract (150-200 words), keywords, and references. Detailed formatting guidelines and templates are available on our website.",
        },
      ],
    },
    {
      title: "Travel & Accommodation",
      faqs: [
        {
          question: "Do you provide visa support letters?",
          answer:
            "Yes, we provide official invitation letters for visa applications. Request your letter through the registration portal after completing your registration and payment. Processing takes 3-5 business days.",
        },
        {
          question: "Are there recommended hotels near the venue?",
          answer:
            "We have partnerships with several hotels offering special conference rates: Marina Bay Sands, The Ritz-Carlton, Pan Pacific Singapore, and Holiday Inn Express. Book through our portal for discounted rates.",
        },
        {
          question: "How do I get from the airport to the venue?",
          answer:
            "Changi Airport is 30 minutes from Marina Bay. Options include: MRT (most economical), taxi (convenient), Grab/Uber (app-based), or airport shuttle. The venue is directly connected to Bayfront MRT station.",
        },
        {
          question: "What COVID-19 safety measures are in place?",
          answer:
            "We follow Singapore's health guidelines. Current measures include optional mask-wearing, hand sanitizing stations, and flexible attendance options. Virtual participation remains available for those unable to travel.",
        },
      ],
    },
    {
      title: "Technical & General",
      faqs: [
        {
          question: "What technical equipment is provided?",
          answer:
            "All presentation rooms feature modern AV equipment: projectors, microphones, laser pointers, laptops with standard software, high-speed WiFi, and technical support staff. Bring your presentation on USB or email it in advance.",
        },
        {
          question: "Is there networking opportunities?",
          answer:
            "We organize welcome reception, networking lunch, coffee breaks, poster sessions, and a conference dinner. Our mobile app also facilitates networking with attendee matching and messaging features.",
        },
        {
          question: "Can I get a certificate of attendance?",
          answer:
            "Yes, all registered participants receive a digital certificate of attendance. Physical certificates can be requested for an additional fee. Certificates include conference details, dates, and your participation status.",
        },
        {
          question: "What is the cancellation policy?",
          answer:
            "Cancellations before October 1: 90% refund. October 1-15: 50% refund. After October 15: No refund, but registration can be transferred to another person or converted to virtual attendance.",
        },
      ],
    },
  ]

  const contactOptions = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Support",
      description: "Get detailed answers to your questions",
      contact: "submit@icasem.org",
      href:"mailto:submit@icasem.org",
      action: "Send Email",
      type: "link"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+91 78488 54815",
      href:"tel:+917848854815",
      action: "Call Now",
      type: "link"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Live Chat",
      description: "Instant support during business hours",
      contact: "Available 9 AM - 6 PM IST",
      action: "Start Chat",
      type: "chat"
    },
  ]

  return (
    <div className="w-full bg-[#f0f4f8] py-12 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-4 bg-[#00adef] rounded-full"></div>
            <span className="text-gray-600 text-sm lg:text-base font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#07416b] leading-tight mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about ICASEM 2025. Can't find what you're looking for? Contact our support
            team.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#07416b]">{category.title}</h3>
              </div>

              {/* FAQ Items */}
              <div className="space-y-3">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex // Unique index across all categories
                  const isOpen = openItems.includes(globalIndex)

                  return (
                    <Card key={faqIndex} className="overflow-hidden rounded-2xl border-l-4 border-[#00adef]">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full p-4 lg:p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-[#07416b] text-sm lg:text-base pr-4">{faq.question}</h4>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-[#00adef]" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#00adef]" />
                            )}
                          </div>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <Card className="p-8 rounded-2xl bg-white border-t-4 border-[#00adef] mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#07416b] mb-4">ICASEM 2025 at a Glance</h3>
            <p className="text-gray-600 text-base lg:text-lg">Key information about the conference</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00adef] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <div className="text-2xl font-bold text-[#07416b]">Days</div>
              <div className="text-gray-600 text-sm">Nov 14-15, 2024</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#07416b] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">25+</span>
              </div>
              <div className="text-2xl font-bold text-[#07416b]">Speakers</div>
              <div className="text-gray-600 text-sm">International Experts</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00adef] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">15</span>
              </div>
              <div className="text-2xl font-bold text-[#07416b]">Sessions</div>
              <div className="text-gray-600 text-sm">Technical & Keynote</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#07416b] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">500+</span>
              </div>
              <div className="text-2xl font-bold text-[#07416b]">Attendees</div>
              <div className="text-gray-600 text-sm">Expected Participants</div>
            </div>
          </div>
        </Card>

        {/* Contact Support */}
        <div className="text-center mb-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#07416b] mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 text-base lg:text-lg mb-8">
            Our support team is here to help you with any inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#00adef]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white">{option.icon}</div>
              </div>
              <h4 className="text-lg font-bold text-[#07416b] mb-2">{option.title}</h4>
              <p className="text-gray-600 text-sm mb-3">{option.description}</p>
              <p className="text-[#00adef] font-semibold text-sm mb-4">{option.contact}</p>
              
              {option.type === "chat" ? (
                <Button
                  onClick={openTawkToChat}
                  variant="outline"
                  className="border-[#00adef] text-[#00adef] hover:bg-[#00adef] hover:text-white w-full"
                >
                  {option.action}
                </Button>
              ) : (
                <Link href={option.href} className="w-full">
                  <Button
                    variant="outline"
                    className="border-[#00adef] text-[#00adef] hover:bg-[#00adef] hover:text-white w-full"
                  >
                    {option.action}
                  </Button>
                </Link>
              )}
            </Card>
          ))}
        </div>

     
      </div>
    </div>
  )
}