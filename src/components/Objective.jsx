import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Target, Users, Lightbulb, Globe, BookOpen, Award, Handshake, TrendingUp } from 'lucide-react'

export default function ObjectivesSection() {
  return (
    <div className="w-full bg-[#f0f4f8] py-12 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-4 bg-[#00adef] rounded-full"></div>
            <span className="text-gray-600 text-sm lg:text-base font-medium">Conference Objectives</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#07416b] leading-tight mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            ICASEM 2025 aims to foster innovation, collaboration, and knowledge exchange across multiple disciplines
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-4 grid-rows-1 gap-6 h-[4 00px]">
          {/* Card 1 - Knowledge Exchange */}
          <div className="row-span-2">
            <Card className="h-full bg-white rounded-2xl p-6 relative overflow-hidden border-l-4 border-[#00adef] hover:shadow-lg transition-shadow duration-300">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#07416b] mb-4">
                Knowledge Exchange
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Facilitate the sharing of cutting-edge research findings, innovative methodologies, and best practices across applied sciences, engineering, and management disciplines.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">Research Presentations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">Technical Sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">Poster Exhibitions</span>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#00adef] text-white px-3 py-1 rounded-full text-xs font-semibold">
                CORE
              </div>
            </Card>
          </div>

          {/* Card 2 - Global Collaboration */}
          <div className="row-span-2 ">
            <Card className="h-full bg-white rounded-2xl p-6 relative overflow-hidden border-l-4 border-[#07416b] hover:shadow-lg transition-shadow duration-300">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#07416b] to-[#00adef] rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#07416b] mb-4">
                Global Collaboration
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Build international partnerships and foster cross-cultural collaboration among researchers, academics, and industry professionals from diverse backgrounds.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#07416b] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">International Networks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#07416b] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">Cultural Exchange</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#07416b] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">Joint Research</span>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#07416b] text-white px-3 py-1 rounded-full text-xs font-semibold">
                GLOBAL
              </div>
            </Card>
          </div>

          {/* Card 3 - Innovation & Technology */}
          <div className="row-span-2 ">
            <Card className="h-full bg-white rounded-2xl p-6 relative overflow-hidden border-l-4 border-[#00adef] hover:shadow-lg transition-shadow duration-300">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-2xl flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#07416b] mb-4">
                Innovation & Technology
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Promote technological advancement and innovative solutions that address real-world challenges in science, engineering, and management sectors.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">Emerging Technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">Innovation Showcase</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00adef] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">Tech Demonstrations</span>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#00adef] text-white px-3 py-1 rounded-full text-xs font-semibold">
                TECH
              </div>
            </Card>
          </div>

          {/* Card 4 - Industry Partnership */}
          <div className="row-span-2 ">
            <Card className="h-full bg-white rounded-2xl p-6 relative overflow-hidden border-l-4 border-[#07416b] hover:shadow-lg transition-shadow duration-300">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#07416b] to-[#00adef] rounded-2xl flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#07416b] mb-4">
                Industry Partnership
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Bridge the gap between academia and industry by creating opportunities for collaboration, knowledge transfer, and practical application of research.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#07416b] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">Corporate Partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#07416b] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">Technology Transfer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#07416b] rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-gray-600">Career Opportunities</span>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#07416b] text-white px-3 py-1 rounded-full text-xs font-semibold">
                INDUSTRY
              </div>
            </Card>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {/* Knowledge Exchange */}
          <Card className="bg-white rounded-2xl p-6 border-l-4 border-[#00adef] hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#07416b] mb-2">Knowledge Exchange</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Facilitate sharing of cutting-edge research findings and innovative methodologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#00adef]/10 text-[#00adef] px-2 py-1 rounded-full text-xs">Research</span>
                  <span className="bg-[#00adef]/10 text-[#00adef] px-2 py-1 rounded-full text-xs">Sessions</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Global Collaboration */}
          <Card className="bg-white rounded-2xl p-6 border-l-4 border-[#07416b] hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#07416b] to-[#00adef] rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#07416b] mb-2">Global Collaboration</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Build international partnerships and foster cross-cultural collaboration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#07416b]/10 text-[#07416b] px-2 py-1 rounded-full text-xs">Networks</span>
                  <span className="bg-[#07416b]/10 text-[#07416b] px-2 py-1 rounded-full text-xs">Exchange</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Innovation & Technology */}
          <Card className="bg-white rounded-2xl p-6 border-l-4 border-[#00adef] hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#07416b] mb-2">Innovation & Technology</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Promote technological advancement and innovative solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#00adef]/10 text-[#00adef] px-2 py-1 rounded-full text-xs">Innovation</span>
                  <span className="bg-[#00adef]/10 text-[#00adef] px-2 py-1 rounded-full text-xs">Tech</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Industry Partnership */}
          <Card className="bg-white rounded-2xl p-6 border-l-4 border-[#07416b] hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#07416b] to-[#00adef] rounded-xl flex items-center justify-center flex-shrink-0">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#07416b] mb-2">Industry Partnership</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Bridge the gap between academia and industry collaboration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#07416b]/10 text-[#07416b] px-2 py-1 rounded-full text-xs">Partnership</span>
                  <span className="bg-[#07416b]/10 text-[#07416b] px-2 py-1 rounded-full text-xs">Transfer</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Knowledge Exchange */}
          <Card className="bg-white rounded-2xl p-6 border-l-4 border-[#00adef] hover:shadow-lg transition-shadow duration-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#07416b] mb-2">Knowledge Exchange</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
              Facilitate the sharing of cutting-edge research findings, innovative methodologies, and best practices across applied sciences, engineering, and management disciplines.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-[#00adef]/10 text-[#00adef] px-3 py-1 rounded-full text-xs">Research Presentations</span>
              <span className="bg-[#00adef]/10 text-[#00adef] px-3 py-1 rounded-full text-xs">Technical Sessions</span>
              <span className="bg-[#00adef]/10 text-[#00adef] px-3 py-1 rounded-full text-xs">Poster Exhibitions</span>
            </div>
          </Card>

          {/* Global Collaboration */}
          <Card className="bg-white rounded-2xl p-6 border-l-4 border-[#07416b] hover:shadow-lg transition-shadow duration-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#07416b] to-[#00adef] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#07416b] mb-2">Global Collaboration</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
              Build international partnerships and foster cross-cultural collaboration among researchers, academics, and industry professionals from diverse backgrounds.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-[#07416b]/10 text-[#07416b] px-3 py-1 rounded-full text-xs">International Networks</span>
              <span className="bg-[#07416b]/10 text-[#07416b] px-3 py-1 rounded-full text-xs">Cultural Exchange</span>
              <span className="bg-[#07416b]/10 text-[#07416b] px-3 py-1 rounded-full text-xs">Joint Research</span>
            </div>
          </Card>

          {/* Innovation & Technology */}
          <Card className="bg-white rounded-2xl p-6 border-l-4 border-[#00adef] hover:shadow-lg transition-shadow duration-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00adef] to-[#07416b] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#07416b] mb-2">Innovation & Technology</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
              Promote technological advancement and innovative solutions that address real-world challenges in science, engineering, and management sectors.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-[#00adef]/10 text-[#00adef] px-3 py-1 rounded-full text-xs">Emerging Technologies</span>
              <span className="bg-[#00adef]/10 text-[#00adef] px-3 py-1 rounded-full text-xs">Innovation Showcase</span>
              <span className="bg-[#00adef]/10 text-[#00adef] px-3 py-1 rounded-full text-xs">Tech Demonstrations</span>
            </div>
          </Card>

          {/* Industry Partnership */}
          <Card className="bg-white rounded-2xl p-6 border-l-4 border-[#07416b] hover:shadow-lg transition-shadow duration-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#07416b] to-[#00adef] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#07416b] mb-2">Industry Partnership</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
              Bridge the gap between academia and industry by creating opportunities for collaboration, knowledge transfer, and practical application of research.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-[#07416b]/10 text-[#07416b] px-3 py-1 rounded-full text-xs">Corporate Partnerships</span>
              <span className="bg-[#07416b]/10 text-[#07416b] px-3 py-1 rounded-full text-xs">Technology Transfer</span>
              <span className="bg-[#07416b]/10 text-[#07416b] px-3 py-1 rounded-full text-xs">Career Opportunities</span>
            </div>
          </Card>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 lg:mt-16">
          <Card className="bg-white rounded-2xl p-6 lg:p-8 border-t-4 border-[#00adef]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00adef] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-[#07416b]">6</div>
                <div className="text-gray-600 text-sm">Core Objectives</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#07416b] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-[#07416b]">15+</div>
                <div className="text-gray-600 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00adef] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-[#07416b]">50+</div>
                <div className="text-gray-600 text-sm">Research Papers</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#07416b] rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-[#07416b]">95%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
