import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CONFERENCE } from "@/constants/conference"
export const metadata = {
  title: `${CONFERENCE.shortForm} ${CONFERENCE.year} Cancellation Policy`,
  description: `Join ${CONFERENCE.name} in ${CONFERENCE.venue.location} on ${CONFERENCE.date}. Connect with global experts and explore groundbreaking research.`,
  keywords: [
    `${CONFERENCE.shortForm} ${CONFERENCE.year}`,
    'about ICASEM',
    'applied science conference',
    'engineering conference',
    'management conference',
    `${CONFERENCE.venue.location} conference ${CONFERENCE.year}`,
    'academic conference',
    'research conference',
    'scientific networking',
    'innovation conference'
  ],
  openGraph: {
    title: `${CONFERENCE.shortForm} ${CONFERENCE.year} Cancellation Policy`,
    description: `Join leading experts at ${CONFERENCE.name} in ${CONFERENCE.venue.location}. Explore cutting-edge research and connect with global innovators.`,
    type: 'website',
    
  },
  alternates: {
    canonical: 'https://www.icsthm.com/cancellation-policy'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONFERENCE.shortForm} ${CONFERENCE.year} Cancellation Policy`,
    description: `Join leading experts at ${CONFERENCE.name} in ${CONFERENCE.venue.location}. Explore cutting-edge research in applied science, engineering, and management.`,
   
  }
}
export default function CancellationPolicy() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Card className="bg-blue-50 border-none">
        <CardHeader className="bg-gradient-to-br from-[#6792e1] to-[#a4bfd8] text-white py-8">
          <CardTitle className="text-3xl font-bold text-center drop-shadow-md">Cancellation Policy</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <section className="mb-10">
            <h1 className="text-2xl font-semibold text-blue-600 mb-4">Overview</h1>
            <p className="text-gray-700 leading-relaxed">
              This policy outlines the terms for cancellation of registration and paper submission for {CONFERENCE.name} ({CONFERENCE.shortForm}).
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Refund Schedule</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2 text-blue-600">Timing</TableHead>
                  <TableHead className="text-blue-600">Refund Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Full refund if cancelled 60+ days before the conference</TableCell>
                  <TableCell>100% refund</TableCell>
                </TableRow>
              
                <TableRow>
                  <TableCell className="font-medium">60 days before conference</TableCell>
                  <TableCell>No refund</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <Separator className="my-8" />


          <Separator className="my-8" />

          <section className="mb-10">
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Special Considerations</h4>
            <p className="text-gray-700 leading-relaxed">
              Accepted papers withdrawn from the conference will still appear in the proceedings unless withdrawn before the camera-ready submission deadline. Author substitutions must be approved by the program committee.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h5 className="text-2xl font-semibold text-blue-600 mb-4">Support</h5>
            <p className="text-gray-700 leading-relaxed mb-2">
              For assistance with cancellations or special circumstances, contact the conference secretariat.
            </p>
            <Link href={"/contact"}>
              <Button variant={'outline'}>Contact us</Button>
            </Link>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}