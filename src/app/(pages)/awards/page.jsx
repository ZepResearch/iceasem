"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Trophy, GraduationCap, Star, Users, FileText } from "lucide-react"
import Link from "next/link"

export default function AwardsPage() {
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
          <div className="absolute left-20 bottom-20 w-16 h-16 rounded-full bg-gradient-to-br from-[#00adef] to-[#07416b] opacity-40"></div>

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] opacity-30"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07416b] mb-6">
              Conference
              <span className="relative inline-block mx-2">
                <span className="relative z-10 bg-gradient-to-r from-[#00adef] to-[#07416b] bg-clip-text text-transparent">
                  Awards
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] rounded-full transform -rotate-1 scale-110 z-0 opacity-30"></span>
              </span>
            </h1>
            <p className="text-xl text-[#07416b]/80 mb-8">
              Recognizing excellence in sustainability, innovation, and future technologies research
            </p>
          </div>
        </div>
      </section>

      {/* Awards Scholarship */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-[#f0f4f8] rounded-3xl overflow-hidden shadow-sm">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f0f4f8]">
                    <GraduationCap className="h-8 w-8 text-[#00adef]" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#07416b]">
                  About Zep Research's Grants and Scholarships
                </h2>

                <div className="space-y-6 text-[#07416b]/80 text-left max-w-3xl mx-auto">
                  <p>
                    Zep Research is dedicated to helping young scholars achieve their research and academic goals, while
                    encouraging them to apply the principles of interdisciplinary study to their work.
                  </p>

                  <p>
                    Zep Research offers full or partial scholarships covering conference registration fees to select
                    postgraduate students and early career academics who might not otherwise have the financial
                    resources to attend our academic conferences.
                  </p>

                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-6 mt-8">
                    <h3 className="text-xl font-semibold text-[#07416b] mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Who can receive Zep Research's grant or scholarship?
                    </h3>
                    <p className="text-[#07416b]/80">
                      Awards are based on the appropriateness of the educational opportunity in relation to the
                      applicant's field of study, financial need, and contributions to their community and to Zep
                      Research's mission of interdisciplinarity. Scholarships will be awarded based on the availability
                      of funds from Zep Research and will vary with each conference.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-6">
                    <h3 className="text-xl font-semibold text-[#07416b] mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      How are recipients selected?
                    </h3>
                    <p className="text-[#07416b]/80 mb-4">
                      The Conference Program Committee of The 2nd ICSIFT will award scholarships to eligible applicants
                      who have submitted exceptional abstracts that have passed the blind peer review process and been
                      accepted for presentation at the conference.
                    </p>
                    <p className="text-[#07416b]/80">
                      Another chance to get the scholarship is for those who presented their research work exceptionally
                      in the conference.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#00adef] to-[#07416b] rounded-xl p-6 text-white">
                    <h3 className="text-xl font-semibold mb-4">Details of Scholarship</h3>
                    <p className="text-lg">
                      A <span className="font-bold">50% fee refund</span> will be provided to the best paper and best
                      paper presenters.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-4">
                    <div className="text-3xl font-bold text-[#00adef] mb-1">50%</div>
                    <div className="text-[#07416b]/80">Fee Refund</div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-4">
                    <div className="text-3xl font-bold text-[#00adef] mb-1">1</div>
                    <div className="text-[#07416b]/80">Award Categories</div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-4">
                    <div className="text-3xl font-bold text-[#00adef] mb-1">100%</div>
                    <div className="text-[#07416b]/80">Merit Based</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-16 bg-gradient-to-br from-[#f0f4f8] to-[#e8f2ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07416b] mb-6">Award Categories</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00adef] to-[#07416b] mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Best Talk Award */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-3xl blur-xl opacity-70"></div>

              <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-50"></div>

                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 -mt-4 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                        <Trophy className="h-10 w-10 text-[#00adef]" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#07416b] text-center mb-4 group-hover:text-[#00adef] transition-colors duration-300">
                    BEST PAPER PRESENTATION AWARD
                  </h3>

                  <div className="space-y-4 text-[#07416b]/80 flex-grow">
                    <p>
                      Recognizing exceptional oral presentation skills, clarity of communication, and audience
                      engagement. This award celebrates researchers who can effectively convey complex ideas in
                      sustainability and innovation in an accessible and compelling manner.
                    </p>

                    <div className="bg-[#f0f4f8] rounded-xl border border-[#bfdbfe] p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-[#00adef]" />
                        <span className="text-[#07416b] font-medium">Award Criteria</span>
                      </div>

                      <ul className="space-y-2 pl-7">
                        <li className="list-disc text-[#07416b]/80">Clarity and organization of presentation</li>
                        <li className="list-disc text-[#07416b]/80">Quality of visual materials</li>
                        <li className="list-disc text-[#07416b]/80">Engagement with audience</li>
                        <li className="list-disc text-[#07416b]/80">Handling of Q&A session</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Paper Award */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#93c5fd] to-[#60a5fa] rounded-3xl blur-xl opacity-70"></div>

              <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-[#93c5fd] to-[#60a5fa] opacity-50"></div>

                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 -mt-4 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                        <FileText className="h-10 w-10 text-[#00adef]" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#07416b] text-center mb-4 group-hover:text-[#00adef] transition-colors duration-300">
                    BEST PAPER AWARD
                  </h3>

                  <div className="space-y-4 text-[#07416b]/80 flex-grow">
                    <p>
                      Honoring outstanding research papers that demonstrate methodological rigor, innovative approaches,
                      and significant contributions to sustainability and future technologies. This award recognizes the
                      highest quality of written scholarship presented at the conference.
                    </p>

                    <div className="bg-[#f0f4f8] rounded-xl border border-[#bfdbfe] p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-[#00adef]" />
                        <span className="text-[#07416b] font-medium">Award Criteria</span>
                      </div>

                      <ul className="space-y-2 pl-7">
                        <li className="list-disc text-[#07416b]/80">Originality and innovation</li>
                        <li className="list-disc text-[#07416b]/80">Methodological rigor</li>
                        <li className="list-disc text-[#07416b]/80">Significance of findings</li>
                        <li className="list-disc text-[#07416b]/80">Quality of writing and organization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Student Award */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-3xl blur-xl opacity-70"></div>

              <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-50"></div>

                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 -mt-4 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                        <GraduationCap className="h-10 w-10 text-[#00adef]" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#07416b] text-center mb-4 uppercase group-hover:text-[#00adef] transition-colors duration-300">
                    Best International student presentation Award
                  </h3>

                  <div className="space-y-4 text-[#07416b]/80 flex-grow">
                    <p>
                      Celebrating outstanding research contributions from student participants. This award recognizes
                      emerging scholars who demonstrate exceptional promise, innovative thinking, and high-quality
                      research in sustainability while still pursuing their academic degrees.
                    </p>

                    <div className="bg-[#f0f4f8] rounded-xl border border-[#bfdbfe] p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-[#00adef]" />
                        <span className="text-[#07416b] font-medium">Award Criteria</span>
                      </div>

                      <ul className="space-y-2 pl-7">
                        <li className="list-disc text-[#07416b]/80">Quality of research</li>
                        <li className="list-disc text-[#07416b]/80">Independence of work</li>
                        <li className="list-disc text-[#07416b]/80">Presentation skills</li>
                        <li className="list-disc text-[#07416b]/80">Potential impact of research</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Judging Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-[#f0f4f8] rounded-3xl overflow-hidden shadow-sm">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full blur-3xl opacity-30"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                      <Users className="h-6 w-6 text-[#00adef]" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#07416b]">Judging Process</h2>
                </div>

                <div className="space-y-6 text-[#07416b]/80">
                  <p>
                    All submissions and presentations at ICSIFT 2025 will be evaluated by our panel of expert judges,
                    comprising leading researchers, industry professionals, and academic leaders in sustainability,
                    innovation, and future technologies.
                  </p>

                  <div className="space-y-6 mt-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] text-white font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-[#07416b] mb-2">Initial Screening</h3>
                        <p className="text-[#07416b]/80">
                          All eligible submissions are reviewed by the scientific committee to create a shortlist of
                          candidates for each award category.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] text-white font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-[#07416b] mb-2">Live Evaluation</h3>
                        <p className="text-[#07416b]/80">
                          Judges attend presentations and evaluate them based on the specific criteria for each award
                          category.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] text-white font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-[#07416b] mb-2">Final Selection</h3>
                        <p className="text-[#07416b]/80">
                          The judging panel meets to review all evaluations and select the winners for each category.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] text-white font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-[#07416b] mb-2">Award Ceremony</h3>
                        <p className="text-[#07416b]/80">
                          Winners are announced and recognized during the closing ceremony on December 27, 2025.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#f0f4f8] to-[#e8f2ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-white rounded-3xl border border-[#bfdbfe] overflow-hidden p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#bfdbfe] to-[#93c5fd] opacity-20"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-[#07416b] mb-3">Ready to Showcase Your Research?</h3>
                <p className="text-[#07416b]/80 mb-6">
                  Submit your paper and register for ICSIFT 2025 to be considered for our prestigious awards.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/submission">
                    <Button className="bg-gradient-to-r from-[#00adef] to-[#07416b] hover:from-[#0284c7] hover:to-[#1e40af] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      Submit Your Paper
                    </Button>
                  </Link>

                  <Link href="/registration">
                    <Button
                      variant="outline"
                      className="border-2 border-[#00adef] text-[#07416b] hover:bg-gradient-to-r hover:from-[#00adef] hover:to-[#07416b] hover:text-white rounded-full transition-all duration-300"
                    >
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
