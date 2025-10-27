"use client"

import { useState } from "react"
import { ChevronRight, Award, Sparkles, Zap, Star, Check } from "lucide-react"
import { SponsorshipPackage } from "./components/sponsorship-package"
import { CCavenuePaymentForm } from "./components/payment-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExhibitAndSponsorPage() {
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePackageSelect = (packageData) => {
    setSelectedPackage(packageData)
    setIsPaymentFormOpen(true)
  }

  const handlePaymentFormClose = () => {
    setIsPaymentFormOpen(false)
  }

  const handlePaymentFormSubmit = async (formData) => {
    setIsLoading(true)
    try {
      // Combine package data with form data
      const paymentData = {
        ...formData,
        order_id: `SPONSOR-${Date.now()}`,
        currency: "USD",
        amount: selectedPackage.price,
        redirect_url: `${window.location.origin}/api/ccavenue/handle`,
        cancel_url: `${window.location.origin}/api/ccavenue/handle`,
        language: "EN",
        package_name: selectedPackage.title,
        package_type: "Sponsorship",
      }

      // Send notification email
      await fetch("/api/payment-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      // Get encrypted order data
      const encResponse = await fetch("/api/ccavenue/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      const { encRequest } = await encResponse.json()

      // Create and submit form to CCAvenue
      const form = document.createElement("form")
      form.method = "post"
      // Use the exact CCAvenue URL with the command parameter
      form.action = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"
      form.style.display = "none"

      const encRequestInput = document.createElement("input")
      encRequestInput.name = "encRequest"
      encRequestInput.value = encRequest
      form.appendChild(encRequestInput)

      const accessCodeInput = document.createElement("input")
      accessCodeInput.name = "access_code"
      accessCodeInput.value = process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE
      form.appendChild(accessCodeInput)

      // Add merchant_id as well
      const merchantIdInput = document.createElement("input")
      merchantIdInput.name = "merchant_id"
      merchantIdInput.value = process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID
      form.appendChild(merchantIdInput)

      document.body.appendChild(form)
      form.submit()
    } catch (error) {
      console.error("Payment processing error:", error)
      setIsLoading(false)
      alert("There was an error processing your payment. Please try again.")
    }
  }

  // Sponsorship packages data
  const sponsorshipPackages = [
    {
      title: "Platinum",
      price: 15000,
      color: "from-[#00adef] to-[#07416b]",
      icon: <Award className="h-8 w-8 text-[#00adef]" />,
      benefits: [
        "1 VIP participating in the conference",
        "Complementary registration for 12 Students and 5 Faculties",
        "Stage honor to the Sponsor Party",
        "Full Page advertisement in the conference proceeding book",
        "Brand carried in all website and promotional activities",
        "Event called by title sponsor",
        "Networking opportunities with international delegates",
        "Media Coverage and press releases",
        "2 Feedback video features on YouTube channel",
        "Premium exhibition booth space",
      ],
    },
    {
      title: "Diamond",
      price: 12000,
      color: "from-[#0284c7] to-[#00adef]",
      icon: <Sparkles className="h-8 w-8 text-[#0284c7]" />,
      benefits: [
        "1 Session Chair participating from the sponsor side",
        "Complementary registration for 10 Students and 3 Faculties",
        "Full Page advertisement in the conference proceeding book",
        "Brand carried in all website and promotional activities",
        "Public announcement recognizing the Sponsor",
        "Networking opportunities with international delegates",
        "Logo used on all website activities and campaigns",
        "5 minutes slot for media Coverage",
        "1 Feedback video featured on the YouTube channel",
        "Standard exhibition booth space",
      ],
    },
    {
      title: "Gold",
      price: 10000,
      color: "from-[#60a5fa] to-[#0284c7]",
      icon: <Star className="h-8 w-8 text-[#60a5fa]" />,
      benefits: [
        "Complementary registration for 8 Students and 2 Faculties",
        "Full page advertisement in conference proceedings",
        "Announcement recognition of the sponsor during valedictory",
        "Logos used in all promotional materials",
        "One anchor can join from the sponsor side",
        "Networking opportunities with international delegates",
        "A standee of the sponsor side on the registration desk",
        "Digital exhibition space",
      ],
    },
    {
      title: "Silver",
      price: 7500,
      color: "from-[#93c5fd] to-[#60a5fa]",
      icon: <Zap className="h-8 w-8 text-[#93c5fd]" />,
      benefits: [
        "Complementary registration for 5 Students and 1 Faculty",
        "2 volunteers at the registration desk from the sponsor side",
        "Half page advertisement in Conference proceeding book",
        "Brand carried out in selected promotional activities",
        "Networking opportunities with international delegates",
        "Print media coverage",
        "Digital logo placement on website",
      ],
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
            <div className="inline-flex items-center rounded-full border border-[#bfdbfe] bg-[#f0f4f8] px-4 py-1.5 text-sm font-medium text-[#00adef] mb-6">
              <span>ICASEM 2025</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07416b] mb-6">
              Exhibit &
              <span className="relative inline-block mx-2 ml-4">
                <span className="relative z-10">Sponsorship</span>
                <span className="absolute inset-0 bg-[#00adef] rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
            </h1>

            <p className="text-xl text-[#07416b]/80 mb-8">
              Partner with  2<sup>nd</sup>ICASEM to showcase your commitment to applied science, engineering excellence, and management
              innovation
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-[#f0f4f8] rounded-3xl overflow-hidden shadow-sm">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f0f4f8]">
                    <Award className="h-8 w-8 text-[#00adef]" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#07416b]">Why Sponsor  2<sup>nd</sup>ICASEM 2025?</h2>

                <div className="space-y-6 text-[#07416b]/80">
                  <p>
                     2<sup>nd</sup>ICASEM 2025 offers a unique opportunity to connect with leading researchers, academics, and industry
                    professionals in applied science, engineering, and management. By sponsoring our conference, you'll
                    gain visibility among a diverse audience of innovators and decision-makers from Kuala Lumpur, Malaysia and around
                    the world.
                  </p>

                  <p>
                    Our sponsorship packages are designed to provide maximum exposure for your brand while supporting
                    the advancement of research and collaboration in applied sciences, engineering innovation, and
                    management excellence. Choose the package that best aligns with your goals and budget.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-4">
                    <div className="text-3xl font-bold text-[#00adef] mb-1">500+</div>
                    <div className="text-[#07416b]/80">Expected Attendees</div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-4">
                    <div className="text-3xl font-bold text-[#00adef] mb-1">Global</div>
                    <div className="text-[#07416b]/80">Audience Reach</div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-4">
                    <div className="text-3xl font-bold text-[#00adef] mb-1">15+</div>
                    <div className="text-[#07416b]/80">Research Disciplines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16 bg-gradient-to-br from-[#f0f4f8] to-[#e8f2ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Sponsorship Packages</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00adef] to-[#07416b] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#07416b]/80 max-w-2xl mx-auto">
              Select the sponsorship package that best suits your organization's goals and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipPackages.map((pkg, index) => (
              <SponsorshipPackage
                key={index}
                title={pkg.title}
                price={pkg.price}
                color={pkg.color}
                icon={pkg.icon}
                benefits={pkg.benefits}
                onSelect={() => handlePackageSelect(pkg)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-[#f0f4f8] rounded-3xl overflow-hidden shadow-sm">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full blur-3xl opacity-30"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#07416b] text-center">
                  Additional Sponsorship Benefits
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-6">
                    <h3 className="text-xl font-semibold text-[#07416b] mb-4">Brand Visibility</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">
                          Logo placement on conference website, virtual platform, and promotional materials
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">Recognition in opening and closing ceremonies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">
                          Inclusion in conference proceedings and digital materials
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-6">
                    <h3 className="text-xl font-semibold text-[#07416b] mb-4">Networking Opportunities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">
                          Direct access to researchers and academics from multiple disciplines
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">
                          Opportunity to host an exhibition booth in our showcase area
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">
                          Facilitated introductions to key participants and speakers
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-6">
                    <h3 className="text-xl font-semibold text-[#07416b] mb-4">Content Opportunities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">
                          Opportunity to present a sponsored session or workshop
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">Feature your organization's research or case studies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">Participate in panel discussions and Q&A sessions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-6">
                    <h3 className="text-xl font-semibold text-[#07416b] mb-4">Post-Conference Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">Access to conference recordings and materials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">
                          Recognition in post-conference publications and reports
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#00adef] shrink-0 mt-0.5" />
                        <span className="text-[#07416b]/80">
                          Opportunity for continued engagement with conference participants
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Sponsorship */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden p-8 shadow-sm">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-20"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-[#07416b] mb-3">Looking for a Custom Package?</h3>
                <p className="text-[#07416b]/80 mb-6">
                  We understand that every organization has unique goals and requirements. Contact us to discuss a
                  customized sponsorship package tailored to your specific needs and objectives for  2<sup>nd</sup>ICASEM 2025.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:submit@icasem.org"
                    className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0284c7] hover:to-[#1e40af] text-white px-6 py-2 rounded-full inline-flex items-center justify-center transition-all duration-300"
                  >
                    Contact Our Sponsorship Team
                  </a>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-[#00adef] text-[#07416b] hover:bg-gradient-to-r hover:from-[#00adef] hover:to-[#07416b] hover:text-white rounded-full transition-all duration-300"
                    >
                      Visit Contact Page <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Form Dialog */}
      <CCavenuePaymentForm
        isOpen={isPaymentFormOpen}
        onClose={handlePaymentFormClose}
        packageName={selectedPackage?.title}
        amount={selectedPackage?.price || 0}
        onSubmit={handlePaymentFormSubmit}
        isLoading={isLoading}
      />
    </main>
  )
}
