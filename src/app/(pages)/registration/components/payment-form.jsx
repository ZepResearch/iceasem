"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CreditCard, Building2 } from "lucide-react"

export function PaymentForm({
  isOpen,
  onClose,
  packageName,
  amount,
  taxRate = 0.05,
  currency = "USD",
  onSubmit,
  isLoading,
}) {
  const [formData, setFormData] = useState({
    billing_email: "",
    billing_name: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
    billing_country: "",
    billing_tel: "",
    billing_organization: "",
    billing_designation: "",
  })

  // Ensure amount is a number and has a default value
  const numericAmount = typeof amount === "number" ? amount : 0

  // Calculate tax amount and total - ensure proper calculation and decimal precision
  const taxAmount = Number((numericAmount * (taxRate || 0)).toFixed(2))
  const totalAmount = Number((numericAmount + taxAmount).toFixed(2))

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const currencySymbol = currency === "USD" ? "$" : "€"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white border border-[#bfdbfe] text-[#07416b] shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 text-[#07416b] flex items-center gap-2">
            <Building2 className="h-6 w-6 text-[#00adef]" />
            ICASEM 2025 Sponsorship Payment
          </DialogTitle>
        </DialogHeader>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30"></div>

        <form onSubmit={handleSubmit} className="space-y-4 relative h-[500px] overflow-y-scroll">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_name" className="text-[#07416b] font-medium">
                Full Name *
              </Label>
              <Input
                id="billing_name"
                name="billing_name"
                required
                onChange={handleChange}
                placeholder="Enter your full name"
                className="bg-[#f0f4f8] border-[#bfdbfe] text-[#07416b] placeholder:text-[#07416b]/50 focus:border-[#00adef] focus:ring-[#00adef]/20"
              />
            </div>
            <div>
              <Label htmlFor="billing_email" className="text-[#07416b] font-medium">
                Email Address *
              </Label>
              <Input
                id="billing_email"
                name="billing_email"
                type="email"
                required
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="bg-[#f0f4f8] border-[#bfdbfe] text-[#07416b] placeholder:text-[#07416b]/50 focus:border-[#00adef] focus:ring-[#00adef]/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_organization" className="text-[#07416b] font-medium">
                Organization *
              </Label>
              <Input
                id="billing_organization"
                name="billing_organization"
                required
                onChange={handleChange}
                placeholder="Your organization name"
                className="bg-[#f0f4f8] border-[#bfdbfe] text-[#07416b] placeholder:text-[#07416b]/50 focus:border-[#00adef] focus:ring-[#00adef]/20"
              />
            </div>
            <div>
              <Label htmlFor="billing_designation" className="text-[#07416b] font-medium">
                Designation *
              </Label>
              <Input
                id="billing_designation"
                name="billing_designation"
                required
                onChange={handleChange}
                placeholder="Your job title"
                className="bg-[#f0f4f8] border-[#bfdbfe] text-[#07416b] placeholder:text-[#07416b]/50 focus:border-[#00adef] focus:ring-[#00adef]/20"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billing_address" className="text-[#07416b] font-medium">
              Address *
            </Label>
            <Input
              id="billing_address"
              name="billing_address"
              required
              onChange={handleChange}
              placeholder="Street address"
              className="bg-[#f0f4f8] border-[#bfdbfe] text-[#07416b] placeholder:text-[#07416b]/50 focus:border-[#00adef] focus:ring-[#00adef]/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_city" className="text-[#07416b] font-medium">
                City *
              </Label>
              <Input
                id="billing_city"
                name="billing_city"
                required
                onChange={handleChange}
                placeholder="City"
                className="bg-[#f0f4f8] border-[#bfdbfe] text-[#07416b] placeholder:text-[#07416b]/50 focus:border-[#00adef] focus:ring-[#00adef]/20"
              />
            </div>
            <div>
              <Label htmlFor="billing_state" className="text-[#07416b] font-medium">
                State/Province *
              </Label>
              <Input
                id="billing_state"
                name="billing_state"
                required
                onChange={handleChange}
                placeholder="State or Province"
                className="bg-[#f0f4f8] border-[#bfdbfe] text-[#07416b] placeholder:text-[#07416b]/50 focus:border-[#00adef] focus:ring-[#00adef]/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_zip" className="text-[#07416b] font-medium">
                ZIP/Postal Code *
              </Label>
              <Input
                id="billing_zip"
                name="billing_zip"
                required
                onChange={handleChange}
                placeholder="ZIP or Postal Code"
                className="bg-[#f0f4f8] border-[#bfdbfe] text-[#07416b] placeholder:text-[#07416b]/50 focus:border-[#00adef] focus:ring-[#00adef]/20"
              />
            </div>
            <div>
              <Label htmlFor="billing_country" className="text-[#07416b] font-medium">
                Country *
              </Label>
              <Input
                id="billing_country"
                name="billing_country"
                required
                onChange={handleChange}
                placeholder="Country"
                className="bg-[#f0f4f8] border-[#bfdbfe] text-[#07416b] placeholder:text-[#07416b]/50 focus:border-[#00adef] focus:ring-[#00adef]/20"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billing_tel" className="text-[#07416b] font-medium">
              Phone Number *
            </Label>
            <Input
              id="billing_tel"
              name="billing_tel"
              type="tel"
              required
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="bg-[#f0f4f8] border-[#bfdbfe] text-[#07416b] placeholder:text-[#07416b]/50 focus:border-[#00adef] focus:ring-[#00adef]/20"
            />
          </div>

          <div className="mt-6 space-y-2 p-4 bg-[#f0f4f8] rounded-xl border border-[#bfdbfe]">
            <div className="flex justify-between">
              <Label className="text-[#07416b] font-medium">Sponsorship Package:</Label>
              <div className="font-medium text-[#07416b]">{packageName || "ICASEM Sponsorship"}</div>
            </div>
            <div className="flex justify-between">
              <Label className="text-[#07416b]/80">Subtotal:</Label>
              <div className="font-medium text-[#07416b]">
                {currencySymbol}
                {numericAmount.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between">
              <Label className="text-[#07416b]/80">Processing Fee ({((taxRate || 0) * 100).toFixed(0)}%):</Label>
              <div className="font-medium text-[#07416b]">
                {currencySymbol}
                {taxAmount.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between pt-2 border-t border-[#bfdbfe]">
              <Label className="text-[#07416b] font-semibold">Total Amount:</Label>
              <div className="text-xl font-bold text-[#00adef]">
                {currencySymbol}
                {totalAmount.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#f0f4f8] to-[#e8f2ff] rounded-xl p-4 border border-[#bfdbfe]">
            <p className="text-sm text-[#07416b]/80 text-center">
              🔒 Your payment is secured by CCAvenue's encrypted payment gateway. You will be redirected to complete
              your transaction safely.
            </p>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0284c7] hover:to-[#1e40af] text-white rounded-full h-12 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing Payment...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" /> Proceed to Secure Payment
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
