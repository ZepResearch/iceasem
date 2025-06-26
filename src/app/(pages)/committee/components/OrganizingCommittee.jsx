"use client"

import { useEffect, useState } from "react"
import { Twitter, Linkedin, Globe, Users, Award, GraduationCap, Sparkles, AlertTriangle } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { pb } from "@/lib/pocketbase"
import Link from "next/link"

export default function CommitteePage() {
  const [committee, setCommittee] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCommittee = async () => {
      try {
        // Updated collection name for ICASEM
        const records = await pb.collection("ICASEM_committee").getFullList({
          sort: "name",
          requestKey: null,
        })
        setCommittee(records)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCommittee()
  }, [])

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-[#f0f4f8]">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="relative bg-white rounded-3xl border border-[#00adef]/20 overflow-hidden shadow-sm p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00adef]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#07416b]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00adef] to-[#07416b] p-0.5 mb-6 animate-pulse">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <Award className="h-8 w-8 text-[#07416b]" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#07416b] mb-4">Loading Committee Data...</h2>
              <p className="text-[#07416b]/80">Please wait while we fetch the organizing committee information</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-20 min-h-screen bg-[#f0f4f8]">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="relative bg-white rounded-3xl border border-[#00adef]/20 overflow-hidden shadow-sm p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00adef]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#07416b]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00adef] to-[#07416b] p-0.5 mb-6">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <AlertTriangle className="h-8 w-8 text-[#07416b]" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#07416b] mb-4">Error Loading Committee Data</h2>
              <p className="mt-4 text-[#07416b]/80">{error}</p>
              <p className="mt-2 text-[#07416b]/60 text-sm">
                Please refresh the page or contact support if the issue persists
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
              Organizing
              <span className="relative inline-block mx-2 ml-4">
                <span className="relative z-10">Committee</span>
                <span className="absolute inset-0 bg-[#00adef] rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
            </h1>
            <p className="text-xl text-[#07416b]/80 mb-8">
              Meet the distinguished experts behind ICASEM 2025: International Conference on Applied Science,
              Engineering & Management
            </p>
          </div>
        </div>
      </section>

      {/* Committee Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-[#f0f4f8] to-[#e8f2ff] rounded-3xl overflow-hidden shadow-sm border border-[#00adef]/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00adef]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#07416b]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00adef] to-[#07416b] p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <Users className="h-8 w-8 text-[#07416b]" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#07416b]">
                  Advancing Innovation Through Multidisciplinary Excellence
                </h2>

                <div className="space-y-6 text-[#07416b]/80">
                  <p>
                    Our organizing committee brings together distinguished experts from Applied Science, Engineering,
                    and Management to create a truly interdisciplinary forum for innovation and collaboration. With
                    backgrounds spanning advanced materials, artificial intelligence, sustainable engineering, and
                    strategic management, they work together to address complex global challenges and foster
                    breakthrough solutions.
                  </p>
                  <p>
                    Each committee member contributes unique expertise and perspectives, ensuring ICASEM 2025 delivers
                    cutting-edge research presentations, meaningful networking opportunities, and practical insights
                    that drive technological advancement and organizational excellence.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                  <div className="bg-white rounded-xl border border-[#00adef]/20 p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-3xl font-bold text-[#07416b] mb-1">{committee.length || "25+"}</div>
                    <div className="text-[#07416b]/80">Expert Committee Members</div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#00adef]/20 p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-3xl font-bold text-[#07416b] mb-1">15+</div>
                    <div className="text-[#07416b]/80">Disciplines Represented</div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#00adef]/20 p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-3xl font-bold text-[#07416b] mb-1">50+</div>
                    <div className="text-[#07416b]/80">Countries & Institutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members Grid */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Meet Our Distinguished Committee</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00adef] to-[#07416b] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#07416b]/80 max-w-2xl mx-auto">
              Our committee members bring diverse expertise in Applied Science, Engineering, and Management to ensure a
              successful and impactful conference experience
            </p>
          </div>

          {committee.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {committee.map((member) => (
                <div key={member.id} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00adef]/20 to-[#07416b]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                  <div className="relative bg-white rounded-3xl border border-[#00adef]/20 overflow-hidden h-full transition-all group-hover:shadow-xl shadow-sm duration-300">
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-[#00adef]/20 to-[#07416b]/20"></div>

                    <div className="relative p-6 flex flex-col items-center">
                      <div className="relative h-40 w-40 rounded-full p-1 bg-gradient-to-br from-[#00adef] to-[#07416b] mb-6 group-hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00adef] to-[#07416b] blur-md opacity-50"></div>
                        <Avatar className="h-full w-full border-2 border-white relative z-10">
                          <AvatarImage
                            src={`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${member.collectionId}/${member.id}/${member.img}`}
                            alt={member.name}
                            className="object-contain bg-[#f0f4f8]"
                          />
                          <AvatarFallback className="bg-gradient-to-br from-[#00adef] to-[#07416b] text-white text-2xl">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>

                      <h3 className="text-xl font-bold text-[#07416b] text-center mb-2 group-hover:text-[#00adef] transition-colors duration-300">
                        {member.name}
                      </h3>

                      <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00adef]/10 to-[#07416b]/10 border border-[#00adef]/20 mb-4">
                        <p className="text-sm text-[#07416b] font-medium text-center">{member.designation}</p>
                      </div>

                      <p className="text-[#07416b]/80 text-center mb-3 text-sm leading-relaxed">{member.details}</p>

                      <div className="flex items-center gap-2 mt-auto">
                        <Globe className="h-4 w-4 text-[#00adef]" />
                        <span className="text-sm text-[#07416b]/70">{member.country}</span>
                      </div>

                      {/* Social Media Links */}
                      {(member.twitter || member.linkedin) && (
                        <div className="flex gap-3 mt-4">
                          {member.twitter && (
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-8 w-8 flex items-center justify-center rounded-full bg-[#f0f4f8] border border-[#00adef]/20 text-[#07416b] hover:bg-[#00adef] hover:text-white transition-all duration-300 hover:scale-110"
                            >
                              <Twitter className="h-4 w-4" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-8 w-8 flex items-center justify-center rounded-full bg-[#f0f4f8] border border-[#00adef]/20 text-[#07416b] hover:bg-[#07416b] hover:text-white transition-all duration-300 hover:scale-110"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty state when no committee members are loaded */
            <div className="text-center py-16">
              <div className="bg-white rounded-3xl border border-[#00adef]/20 p-12 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#07416b] mb-4">Committee Members Coming Soon</h3>
                <p className="text-[#07416b]/80 text-lg mb-6">
                  We're finalizing our distinguished organizing committee for ICASEM 2025. Check back soon to meet the
                  experts who will be leading this premier conference.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-[#07416b]/60">
                    <GraduationCap className="w-4 h-4 text-[#00adef]" />
                    <span>Academic Leaders</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#07416b]/60">
                    <Award className="w-4 h-4 text-[#00adef]" />
                    <span>Industry Experts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#07416b]/60">
                    <Users className="w-4 h-4 text-[#00adef]" />
                    <span>Research Pioneers</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Committee Roles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Committee Structure</h2>
            <p className="text-[#07416b]/80 text-lg">
              Our organizing committee is structured to ensure comprehensive coverage of all conference aspects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#f0f4f8] rounded-3xl p-6 border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#07416b] mb-3">Conference Chairs</h3>
              <p className="text-[#07416b]/80 text-sm">
                Overall conference leadership and strategic direction for ICASEM 2025
              </p>
            </div>

            <div className="bg-[#f0f4f8] rounded-3xl p-6 border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#07416b] mb-3">Program Committee</h3>
              <p className="text-[#07416b]/80 text-sm">Technical program development and research track coordination</p>
            </div>

            <div className="bg-[#f0f4f8] rounded-3xl p-6 border border-[#00adef]/20 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#07416b] mb-3">Review Committee</h3>
              <p className="text-[#07416b]/80 text-sm">
                Peer review process and quality assurance for submitted papers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Committee CTA */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-white rounded-3xl border border-[#00adef]/20 overflow-hidden p-8 shadow-sm">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#00adef]/10 to-[#07416b]/10 opacity-50"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#07416b] mb-3">Interested in Contributing?</h3>
                <p className="text-[#07416b]/80 mb-6">
                  We're always looking for passionate experts in Applied Science, Engineering & Management to join our
                  reviewer pool for future conferences. Share your expertise and help shape the future of
                  multidisciplinary research and innovation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0099d4] hover:to-[#05334a] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                      Express Interest
                    </button>
                  </Link>
                  {/* <Link href="/call-for-papers">
                    <button className="border border-[#07416b] text-[#07416b] hover:bg-[#07416b] hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
                      Review Guidelines
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
