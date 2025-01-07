import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CancellationPolicy() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Card className="bg-lime-50 border-none">
        <CardHeader className="bg-gradient-to-br from-[#c5e167] to-[#a4d8b4] text-white py-8">
          <CardTitle className="text-3xl font-bold text-center drop-shadow-md">Cancellation Policy</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              This policy outlines the terms for cancellation of registration and paper submission for the International Conference on Applied Science, Engineering & Management (ICASEM).
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-lime-600 mb-6">Refund Schedule</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2 text-lime-600">Timing</TableHead>
                  <TableHead className="text-lime-600">Refund Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Before paper submission deadline</TableCell>
                  <TableCell>90% refund</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">After submission, before acceptance</TableCell>
                  <TableCell>70% refund</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">After paper acceptance</TableCell>
                  <TableCell>50% refund</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">14 days before conference</TableCell>
                  <TableCell>No refund</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <Separator className="my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Cancellation Process</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>Access your ICASEM account dashboard</li>
              <li>Select 'Manage Registration'</li>
              <li>Choose 'Cancel Registration'</li>
              <li>Specify reason for cancellation</li>
              <li>Submit supporting documentation if required</li>
            </ol>
          </section>

          <Separator className="my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Special Considerations</h2>
            <p className="text-gray-700 leading-relaxed">
              Accepted papers withdrawn from the conference will still appear in the proceedings unless withdrawn before the camera-ready submission deadline. Author substitutions must be approved by the program committee.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="text-2xl font-semibold text-lime-600 mb-4">Support</h2>
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