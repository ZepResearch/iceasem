import {
  ChevronRight,
  Users,
  FileText,
  Sparkles,
  CreditCard,
  Ticket,
  Mail,
  Calendar,
  Info,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Brain,
  Video,
  Award,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Guidline from "./guidline"

function ExtraContentBelowTabs() {
  return (
    <div>
      {/* Registration Process Section */}
      <section className="py-16 bg-white">
  <Guidline />
      </section>

      {/* Cancellation Policy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#f0f4f8] border border-[#bfdbfe] rounded-3xl p-8 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] flex items-center justify-center mr-4">
                    <Info className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#07416b]">Cancellation Policy</h3>
                </div>

                <p className="text-[#07416b]/80 mb-6">
                  We understand that plans can change. Our cancellation policy for ICASEM 2025 is designed to be fair
                  and flexible:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#bfdbfe] flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <svg className="h-3 w-3 text-[#00adef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#07416b]/80">Full refund if cancelled 60+ days before the conference</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#bfdbfe] flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <svg className="h-3 w-3 text-[#00adef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#07416b]/80">
                      No refund if cancelled 60 days or less before the conference
                    </span>
                  </li>
                </ul>

                <p className="text-[#07416b]/80 mb-6">
                  All cancellations must be made in writing to submit@icasem.org. Transfer of registration to another
                  person is allowed up to 7 days before the conference.
                </p>

                <Link href="/cancellation-policy">
                  <Button
                    variant="outline"
                    className="border-[#00adef] text-[#07416b] hover:bg-gradient-to-r hover:from-[#00adef] hover:to-[#07416b] hover:text-white rounded-full transition-all duration-300"
                  >
                    Read Full Policy
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-[#f0f4f8] to-[#e8f2ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Registration Benefits</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00adef] to-[#07416b] mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden p-6 shadow-sm group hover:shadow-md transition-all">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-0 group-hover:opacity-20 transition-opacity"></div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 mb-4">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                    <FileText className="h-6 w-6 text-[#00adef]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#07416b] mb-3">Conference Materials</h3>
                <p className="text-[#07416b]/80">
                  Access to all conference proceedings, research papers, and presentation materials
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden p-6 shadow-sm group hover:shadow-md transition-all">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-0 group-hover:opacity-20 transition-opacity"></div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 mb-4">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                    <Users className="h-6 w-6 text-[#00adef]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#07416b] mb-3">International Networking</h3>
                <p className="text-[#07416b]/80">
                  Connect with researchers and professionals from Singapore and worldwide
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden p-6 shadow-sm group hover:shadow-md transition-all">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-0 group-hover:opacity-20 transition-opacity"></div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 mb-4">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                    <Sparkles className="h-6 w-6 text-[#00adef]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#07416b] mb-3">Interactive Sessions</h3>
                <p className="text-[#07416b]/80">Participate in workshops, panel discussions, and Q&A sessions</p>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden p-6 shadow-sm group hover:shadow-md transition-all">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-0 group-hover:opacity-20 transition-opacity"></div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 mb-4">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                    <TrendingUp className="h-6 w-6 text-[#00adef]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#07416b] mb-3">Career Development</h3>
                <p className="text-[#07416b]/80">
                  Learn new skills, explore career opportunities, and discover business concepts
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden p-6 shadow-sm group hover:shadow-md transition-all">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-0 group-hover:opacity-20 transition-opacity"></div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 mb-4">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                    <BookOpen className="h-6 w-6 text-[#00adef]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#07416b] mb-3">Publication Opportunities</h3>
                <p className="text-[#07416b]/80">
                  Publication opportunities in Scopus/WOS/Google Scholar indexed journals
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden p-6 shadow-sm group hover:shadow-md transition-all">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-0 group-hover:opacity-20 transition-opacity"></div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 mb-4">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                    <Brain className="h-6 w-6 text-[#00adef]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#07416b] mb-3">Knowledge Exchange</h3>
                <p className="text-[#07416b]/80">
                  Exchange knowledge with presenters, session chairs, keynote speakers and attendees
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden p-6 shadow-sm group hover:shadow-md transition-all">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-0 group-hover:opacity-20 transition-opacity"></div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 mb-4">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                    <Video className="h-6 w-6 text-[#00adef]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#07416b] mb-3">Video Documentation</h3>
                <p className="text-[#07416b]/80">
                  Conference highlights and presentations will be featured on our social media channels
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden p-6 shadow-sm group hover:shadow-md transition-all">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-0 group-hover:opacity-20 transition-opacity"></div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 mb-4">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                    <Award className="h-6 w-6 text-[#00adef]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#07416b] mb-3">Digital Certificates</h3>
                <p className="text-[#07416b]/80">
                  Receive official participation and presentation certificates for your professional profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden p-8 shadow-sm">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-20"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-[#07416b] mb-3">Ready to Join ICASEM 2025?</h3>
                <p className="text-[#07416b]/80 mb-6">
                  Register now to secure your spot at the International Conference Applied Science, Engineering &
                  Management in Singapore.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/submission">
                    <Button className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0284c7] hover:to-[#1e40af] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      Submit Your Paper
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-[#00adef] text-[#07416b] hover:bg-gradient-to-r hover:from-[#00adef] hover:to-[#07416b] hover:text-white rounded-full transition-all duration-300"
                    >
                      Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExtraContentBelowTabs
