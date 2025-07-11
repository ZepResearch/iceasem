"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Globe, YoutubeIcon } from "lucide-react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
  })
  const [phoneNumber, setPhoneNumber] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Update formData when phoneNumber changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, phoneNumber }))
  }, [phoneNumber])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phoneNumber: "",
      })
      setPhoneNumber(undefined)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-[#f0f4f8]">
      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden">
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07416b] mb-6">
              <span className="relative inline-block mx-2 mr-4">
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-0 bg-[#00adef] rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
              Us
            </h1>
            <p className="text-xl text-[#07416b]/80 mb-8">
              Get in touch with the  2<sup>nd</sup>ICASEM team for any inquiries or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="relative bg-[#f0f4f8] rounded-3xl overflow-hidden h-full shadow-sm border">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30"></div>

                <div className="relative p-8 flex flex-col h-full">
                  <h2 className="text-2xl font-bold text-[#07416b] mb-6">Get In Touch</h2>

                  <p className="text-[#07416b]/80 mb-8">
                    Have questions about  2<sup>nd</sup>ICASEM 2025? Our team is here to help. Reach out to us using the contact
                    information below or fill out the form.
                  </p>

                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f0f4f8]">
                          <Mail className="h-5 w-5 text-[#00adef]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-[#07416b]/70">Email</p>
                        <p className="text-[#07416b] font-medium">submit@icasem.org</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f0f4f8]">
                          <Phone className="h-5 w-5 text-[#00adef]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-[#07416b]/70">Phone</p>
                        <p className="text-[#07416b] font-medium">+91 92373 88328</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f0f4f8]">
                          <MapPin className="h-5 w-5 text-[#00adef]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-[#07416b]/70">Conference Location</p>
                        <p className="text-[#07416b] font-medium">
                          Singapore
                          <br />
                          November 14th - 15th, 2025
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f0f4f8]">
                          <Globe className="h-5 w-5 text-[#00adef]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-[#07416b]/70">Conference</p>
                        <p className="text-[#07416b] font-medium">
                          International Conference Applied Science, Engineering & Management 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-[#bfdbfe]">
                    <h3 className="text-lg font-medium text-[#07416b] mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=61561809783777"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[#bfdbfe] text-[#00adef] hover:text-white hover:bg-gradient-to-r hover:from-[#00adef] hover:to-[#07416b] transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/zepresearch/"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[#bfdbfe] text-[#00adef] hover:text-white hover:bg-gradient-to-r hover:from-[#00adef] hover:to-[#07416b] transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a
                        href="https://x.com/Zepresearch"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[#bfdbfe] text-[#00adef] hover:text-white hover:bg-gradient-to-r hover:from-[#00adef] hover:to-[#07416b] transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/zep-research/"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[#bfdbfe] text-[#00adef] hover:text-white hover:bg-gradient-to-r hover:from-[#00adef] hover:to-[#07416b] transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a
                        href="https://www.youtube.com/@Zepresearch"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[#bfdbfe] text-[#00adef] hover:text-white hover:bg-gradient-to-r hover:from-[#00adef] hover:to-[#07416b] transition-all duration-300"
                      >
                        <YoutubeIcon className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.zepresearch.com/"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-[#bfdbfe] text-[#00adef] hover:text-white hover:bg-gradient-to-r hover:from-[#00adef] hover:to-[#07416b] transition-all duration-300"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="relative bg-[#f0f4f8] rounded-3xl overflow-hidden shadow-sm border">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30"></div>

                <div className="relative p-8">
                  <h2 className="text-2xl font-bold text-[#07416b] mb-6">Send Us a Message</h2>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Message Sent Successfully!</p>
                        <p className="text-green-700/80">
                          Thank you for contacting us. We'll get back to you as soon as possible.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Error Sending Message</p>
                        <p className="text-red-700/80">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-[#07416b]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-[#bfdbfe] rounded-xl text-[#07416b] placeholder-[#07416b]/50 focus:outline-none focus:ring-2 focus:ring-[#00adef]/50 focus:border-[#00adef]/50"
                          placeholder="Enter your name"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#07416b]">
                          Phone Number
                        </label>
                        <PhoneInput
                          international
                          defaultCountry="SG"
                          value={phoneNumber}
                          onChange={setPhoneNumber}
                          className="w-full px-4 py-3 bg-white border border-[#bfdbfe] rounded-xl text-[#07416b] placeholder-[#07416b]/50 focus:outline-none focus:ring-2 focus:ring-[#00adef]/50 focus:border-[#00adef]/50"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-[#07416b]">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-[#bfdbfe] rounded-xl text-[#07416b] placeholder-[#07416b]/50 focus:outline-none focus:ring-2 focus:ring-[#00adef]/50 focus:border-[#00adef]/50"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-[#07416b]">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-[#bfdbfe] rounded-xl text-[#07416b] placeholder-[#07416b]/50 focus:outline-none focus:ring-2 focus:ring-[#00adef]/50 focus:border-[#00adef]/50"
                          placeholder="What is your message about?"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-[#07416b]">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-[#bfdbfe] rounded-xl text-[#07416b] placeholder-[#07416b]/50 focus:outline-none focus:ring-2 focus:ring-[#00adef]/50 focus:border-[#00adef]/50"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative px-8 py-4 bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0284c7] hover:to-[#1e40af] text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-[#00adef]/50 focus:ring-offset-2 focus:ring-offset-[#f0f4f8] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-full w-full bg-white/10 opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-all duration-1000"></div>
                        </div>
                        <div className="relative flex items-center">
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                              Send Message
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
