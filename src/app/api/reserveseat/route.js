import { NextResponse } from "next/server"
import { Resend } from "resend"
import { userConfirmationTemplate } from "@/emails/user-confirmation-template"
import { adminNotificationTemplate } from "@/emails/admin-notification-template"

const resend = new Resend(process.env.RESEND_API_KEY)
const adminEmail = process.env.ADMIN_EMAIL || "submit@icasem.org"

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, email, phone, country, organization } = data

    // Validate required fields
    if (!name || !email || !phone || !country || !organization) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "ICASEM . <noreply@icasem.org>",
      to: email,
      subject: "ICASEM. Registration Seat Confirmation",
      html: userConfirmationTemplate(data),
    })

    // Send notification email to admin
    await resend.emails.send({
      from: "ICASEM. Registration <noreply@icasem.org>",
      to: "submit@icasem.org",
      subject: "New ICASEM. Prebook Registration  ",
      html: adminNotificationTemplate(data),
    })

    // Store the registration data in your database here
    // This is where you would add code to save to your database

    return NextResponse.json({ success: true, message: "Registration successful" }, { status: 200 })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}
