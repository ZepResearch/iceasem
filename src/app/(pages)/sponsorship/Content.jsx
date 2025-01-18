'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

const packages = [
  {
    name: "Platinum",
    price: 15000,
    isPopular: true,
    benefits: [
      "1 VIP participating in the conference",
      "Complementary registration for 12 Students and 5 Faculties",
      "Stage honor to the Sponsor Party",
      "Full Page add on the conference proceeding book",
      "Brand carried in all website and promotional activities",
      "Event called by title sponsor",
      "Networking opportunities with different delegates",
      "Media Coverage",
      "2 Feedback video bites featured on YouTube channel"
    ]
  },
  {
    name: "Diamond",
    price: 12000,
    benefits: [
      "1 Session Chair participating from the sponsor side",
      "Complementary registration for 10 Students and 3 Faculties",
      "Full Page add on the conference proceeding book",
      "Brand carried in all website and promotional activities",
      "Public announcement recognizing the Sponsor",
      "Networking opportunities with different delegates",
      "Logo used on all website activities and campaigns",
      "5 minutes slot for media Coverage",
      "1 Feedback video featured on the YouTube channel"
    ]
  },
  {
    name: "Gold",
    price: 10000,
    benefits: [
      "Complementary registration for 8 Students and 2 Faculties",
      "Full page add on conference proceedings",
      "Announcement recognition of the sponsor during valedictory function",
      "Logos used in all promotional materials",
      "One anchor can join from the sponsor side",
      "Networking opportunities with different delegates",
      "A standee of the sponsor side on the registration desk"
    ]
  },
  {
    name: "Silver",
    price: 7500,
    benefits: [
      "Complementary registration for 5 Students and 1 Faculty",
      "2 volunteers at the registration desk from the sponsor side",
      "Half page add on Conference proceeding book",
      "Brand carried out in few promotional activities",
      "Networking opportunities with different delegates",
      "Print media coverage"
    ]
  }
]

export default function PricingPage() {
  const [billingType, setBillingType] = useState('standard')
  
    const [isLoading, setIsLoading] = useState(null)
    const host = process.env.NEXT_PUBLIC_APP_URL
  
    const generateOrderId = () => {
      return `SPO${Date.now()}${Math.floor(Math.random() * 1000)}`
    }
  
    const initiateCCavenuePayment = async (packageName, amount) => {
      try {
        setIsLoading(packageName)
  
        const paymentData = {
          merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
          order_id: generateOrderId(),
          amount: amount.toString(),
          currency: "USD",
          redirect_url: `${host}/api/ccavenue/handle`,
          cancel_url: `${host}/api/ccavenue/handle`,
          language: "EN"
        }
  
        const response = await fetch("/api/ccavenue/encrypt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        })
  
        if (!response.ok) {
          throw new Error("Failed to encrypt order data")
        }
  
        const { encRequest } = await response.json()
  
        const form = document.createElement("form")
        form.method = "POST"
        form.action = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"
  
        const fields = {
          encRequest,
          access_code: process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE,
          merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
        }
  
        Object.entries(fields).forEach(([key, value]) => {
          const input = document.createElement("input")
          input.type = "hidden"
          input.name = key
          input.value = value
          form.appendChild(input)
        })
  
        document.body.appendChild(form)
        form.submit()
      } catch (error) {
        console.error("Payment initiation failed:", error)
        alert("Failed to initiate payment. Please try again.")
      } finally {
        setIsLoading(null)
      }
    } 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-blue-50 py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl"
          >
            Conference Sponsorship Packages
          </motion.h1>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4 lg:gap-8 mt-8"
          >
            {packages.map((pkg, index) => (
              <motion.div key={pkg.name} variants={item}>
                <Card className={`relative h-full ${
                  pkg.isPopular 
                    ? 'bg-[#0F172A] text-white border-0' 
                    : 'bg-white border border-gray-200'
                }`}>
                  {pkg.isPopular && (
                    <div className="absolute -top-3 right-4 px-3 py-1 text-xs font-medium bg-gradient-to-br from-[#67c9e1] to-[#a9a4d8] text-white rounded-full">
                      Popular
                    </div>
                  )}
                  <CardHeader className="pb-8">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">${pkg.price.toLocaleString()}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full ${
                        pkg.isPopular 
                          ? 'bg-gradient-to-br from-[#67b0e1] to-[#a4a9d8] hover:bg-[#4ADE80]/90 text-[#f5f5f5]' 
                          : 'bg-[#0F172A] hover:bg-[#0F172A]/90 text-white'
                      }`}
                      onClick={() => initiateCCavenuePayment(pkg.name, pkg.price)}
                      disabled={isLoading === pkg.name}
                    >
                      {isLoading === pkg.name ? 'Processing...' : 'Become a Sponsor'}
                    </Button>
                    <Link href="/contact">
                      <Button
                        variant="outline" 
                        className={`w-full mt-2 ${
                          pkg.isPopular 
                            ? 'border-white text-black hover:bg-white/10 hover:text-white' 
                            : 'border-[#0F172A] hover:bg-[#0F172A]/10'
                        }`}
                      >
                        Contact Us
                      </Button>
                    </Link>
                    <div className="pt-6">
                      <p className={`text-sm font-medium mb-4 ${
                        pkg.isPopular ? 'text-white' : 'text-[#0F172A]'
                      }`}>
                        BENEFITS
                      </p>
                      <ul className="space-y-3">
                        {pkg.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3">
                            <Check className="h-4 w-4 shrink-0 mt-1 text-[#4ADE80]" />
                            <span className={`text-sm ${
                              pkg.isPopular ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

