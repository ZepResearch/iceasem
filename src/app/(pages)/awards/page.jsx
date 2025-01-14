import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Users } from 'lucide-react'

export default function AwardsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <h1 className="text-5xl mx-auto font-bold text-center mb-2 pb-2 underline underline-offset-4 decoration-lime-400 decoration-wavy">
        Academic Excellence
      </h1>
      <p className="text-xl text-lime-500 mb-6 text-center drop-shadow-sm">
        in Applied Science, Engineering & Management
      </p>
      <p className="text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
        At the International Conference on Applied Science, Engineering & Management (ICASEM), 
        we recognize outstanding research and innovative solutions across multiple disciplines. 
        Our awards celebrate scholarly excellence and practical applications that advance 
        the fields of science, engineering, and management.
      </p>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <AwardCard
          icon={<Award className="w-10 h-10 text-lime-600" />}
          title="Outstanding Research Award"
          description="Recognizes exceptional research contributions that demonstrate innovation, methodological rigor, and significant impact in their respective fields."
          highlights={[
            "Celebrates groundbreaking research methodologies and findings.",
            "Honors work that bridges theory and practical applications."
          ]}
        />

        <AwardCard
          icon={<BookOpen className="w-10 h-10 text-lime-600" />}
          title="Best Paper Award"
          description="Presented to research that exemplifies excellence in scholarly writing, analytical depth, and potential for real-world application."
          highlights={[
            "Recognizes outstanding academic contributions.",
            "Rewards research with significant practical implications."
          ]}
        />

        <AwardCard
          icon={<Users className="w-10 h-10 text-lime-600" />}
          title="Young Researcher Award"
          description="Celebrates emerging scholars who demonstrate exceptional promise and innovative approaches in their research endeavors."
          highlights={[
            "Supports early-career researchers and graduate students.",
            "Promotes fresh perspectives in applied sciences and management."
          ]}
        />
      </div>

      <Card className="bg-white shadow-lg">
        <CardHeader className="bg-gradient-to-br from-[#c5e167] to-[#a4d8b4] text-white rounded-md">
          <CardTitle className="text-2xl">Submit Your Research</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Present your research at ICASEM and join a community of distinguished scholars 
            and practitioners. Share your innovations, receive valuable feedback, and 
            contribute to advancing knowledge in your field.
          </p>
          <p className="text-lime-600 leading-relaxed font-semibold text-center mt-6">
            Submit your paper for the International Conference on Applied Science, 
            Engineering & Management and compete for these prestigious awards.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function AwardCard({ icon, title, description, highlights }) {
  return (
    <Card className="bg-white shadow-lg h-full flex flex-col">
      <CardHeader className="flex flex-col items-center pt-6 pb-2">
        {icon}
        <CardTitle className="text-xl text-center mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <Badge variant="outline" className="mr-2 mt-1 flex-shrink-0">•</Badge>
              <span className="text-gray-700 leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}