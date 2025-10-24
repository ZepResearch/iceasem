import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, ArrowLeft, Calendar } from "lucide-react"

export const submissionSuccessMetadata = {
  title: "Success Submission | ICASEM: International Conference Applied Science, Engineering & Management",
  description:
    "Successfully submitted your research to ICASEM 2025 in Kuala Lumper, Malaysia. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
  keywords: [
    "ICASEM submission",
    "Bangkok conference paper",
    "sustainability research",
    "innovation research",
    "future technologies paper",
    "submission guidelines",
    "submission deadline",
    "conference proposal"
  ],

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    url: "https://www.icasem.org/submission/success",
    title: "Paper Submission | ICASEM: International Conference Applied Science, Engineering & Management",
    description:
      "Submit your research to ICASEM 2025 in Kuala Lumper, Malaysia. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
    siteName: "ICASEM",
    images: [
      {
        url: "https://www.icasem.org/opengraph.png",
        width: 1200,
        height: 630,
        alt: "ICASEM Submission Information",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Paper Submission | ICASEM: International Conference Applied Science, Engineering & Management",
    description:
      "Submit your research to ICASEM 2025 in Kuala Lumper, Malaysia. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
    images: ["https://www.icasem.org/opengraph.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.icasem.org/submission/success",
  },

  // Structured data
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Paper Submission | ICASEM: International Conference Applied Science, Engineering & Management",
      description:
        "Submit your research to ICASEM 2025 in Kuala Lumper, Malaysia. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
      url: "https://www.icasem.org/submission/success",
      mainEntity: {
        "@type": "HowTo",
        name: "ICASEM Submission Process",
        description: "Step-by-step guide to submitting your research to ICASEM",
        step: [
          {
            "@type": "HowToStep",
            name: "Prepare Manuscript",
            text: "Format your paper according to the conference guidelines"
          },
          {
            "@type": "HowToStep",
            name: "Create Account",
            text: "Register on the submission portal"
          },
          {
            "@type": "HowToStep",
            name: "Submit Abstract",
            text: "Upload your abstract and author information"
          },
          {
            "@type": "HowToStep",
            name: "Upload Full Paper",
            text: "Submit your complete manuscript before the deadline"
          }
        ]
      },
    }),
  },
};
export default function SubmissionSuccess() {
  return (
    <main className="bg-[#f5f9fa]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large blob in top right */}
          <div
            className="absolute -right-40 -top-40 w-[30rem] h-[30rem] opacity-20"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: "linear-gradient(45deg, #3c525c, #4d6072)",
            }}
          ></div>

          {/* Small circle in bottom left */}
          <div className="absolute left-20 bottom-20 w-16 h-16 rounded-full bg-[#3c525c]/40"></div>

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-[#b9d4a3]/30"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a212e] mb-6">
              Submission
              <span className="relative inline-block mx-2 ml-4">
                <span className="relative z-10">Successful</span>
                <span className="absolute inset-0 bg-[#7cb9f1] rounded-full transform -rotate-1 scale-110 z-0"></span>
              </span>
            </h1>
            <p className="text-xl text-[#4d6672] mb-8">
              Thank you for contributing to ICASEM 2025: International Conference Applied Science, Engineering & Management
            </p>
          </div>
        </div>
      </section>

      {/* Success Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-[#d0e6ff] rounded-3xl overflow-hidden shadow-sm">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3c525c]/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4d6072]/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative p-8 md:p-12 text-center">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-500 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#e1f0f6]">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1a282e]">Your Paper Has Been Submitted</h2>

                <div className="space-y-6 text-[#4d6672] max-w-2xl mx-auto">
                  <p>
                    Thank you for submitting your paper to ICASEM 2025: International Conference on Sustainability,
                    Innovation, and Future Technologies. Your contribution is an important part of advancing research
                    and collaboration in sustainability and innovation.
                  </p>

                  <div className="bg-white rounded-xl border border-[#c5d8e4] p-6 text-left">
                    <h3 className="text-xl font-medium text-[#1a2e1a] mb-4">What Happens Next?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[#4d6072] flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">1</span>
                        </div>
                        <span>
                          Our scientific committee will review your submission and evaluate it based on relevance,
                          originality, and quality.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[#4d5e72] flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">2</span>
                        </div>
                        <span>
                          You will receive a notification regarding the status of your submission within 4-6 weeks.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[#4d6072] flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">3</span>
                        </div>
                        <span>
                          If accepted, you will receive further instructions on preparing your final paper and
                          presentation.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-center gap-4 mt-8">
                    <Calendar className="h-5 w-5 text-[#4d6072]" />
                    <span>Mark your calendar: ICASEM will take place on November 14-15, 2025</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <Button asChild className="bg-[#4d6072] hover:bg-[#3c525c] text-white rounded-full">
                    <Link href="/">
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Return to Home
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#4d6072] text-[#1a2e1a] hover:bg-[#3c525c]/50 rounded-full"
                  >
                    <Link href="/schedule">
                      View Conference Schedule
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
