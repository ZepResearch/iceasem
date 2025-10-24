import { ChevronRight, Users, Presentation, Headphones } from "lucide-react"
import { GeometricShapes } from "./geometric-shapes"

function ExtraContentAboveCard() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <GeometricShapes />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #00adef 1px, transparent 1px), linear-gradient(to bottom, #00adef 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-[#bfdbfe] bg-[#f0f4f8] px-4 py-1.5 text-sm font-medium text-[#00adef] mb-6">
              <span>ICASEM 2025</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07416b] mb-6">
              Conference
              <span className="relative inline-block mx-2">
                <span className="relative z-10">Registration</span>
                <span className="absolute inset-0 bg-[#00adef] rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
            </h1>

            <p className="text-xl text-[#07416b]/80 mb-8">
              Join us at the International Conference Applied Science, Engineering & Management in Kuala Lumper, Malaysia
            </p>
          </div>
        </div>
      </section>

      {/* Registration Options Section */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="container mx-auto px-4">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm border">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#bfdbfe] to-[#93c5fd] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f0f4f8]">
                    <Users className="h-8 w-8 text-[#00adef]" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#07416b]">Select Your Registration Type</h2>

                <div className="space-y-6 text-[#07416b]/80">
                  <p>
                    Choose the registration option that best suits your needs. All registrations include access to
                    keynote presentations, panel discussions, networking opportunities, and conference materials.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-4 flex items-center hover:shadow-md transition-shadow duration-300">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] flex items-center justify-center mr-4">
                      <Presentation className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-[#07416b] font-medium">Presenter Registration</h3>
                      <p className="text-[#07416b]/70 text-sm">For those presenting research papers and studies</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#bfdbfe] p-4 flex items-center hover:shadow-md transition-shadow duration-300">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#00adef] to-[#07416b] flex items-center justify-center mr-4">
                      <Headphones className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-[#07416b] font-medium">Listener Registration</h3>
                      <p className="text-[#07416b]/70 text-sm">For those attending without presenting papers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExtraContentAboveCard
