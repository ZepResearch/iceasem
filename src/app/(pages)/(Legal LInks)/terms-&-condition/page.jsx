import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-2 pb-2 inline-block">
        Terms and Conditions
      </h1>
      
      <Card className="mt-8 bg-white shadow-lg">
        <CardHeader className="bg-gradient-to-br from-[#67b4e1] to-[#a4bad8] text-white rounded-md">
          <CardTitle className="text-2xl drop-shadow-md">Welcome to ICASEM</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Please review these Terms and Conditions for the International Conference on Applied Science, Engineering & Management.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="registration">
              <AccordionTrigger>Registration and Payment</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Full payment must be received to confirm registration.</li>
                  <li>Early bird rates are available until the specified deadline.</li>
                  <li>Student registrations require valid student ID verification.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="submission">
              <AccordionTrigger>Paper Submission Guidelines</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>All submissions must be original and unpublished.</li>
                  <li>Papers must follow the provided formatting template.</li>
                  <li>At least one author must register and present at the conference.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cancellation">
              <AccordionTrigger>Cancellation Policy</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Cancellations before [date] receive 70% refund.</li>
                  <li>No refunds for cancellations after [date].</li>
                  <li>Substitutions from the same organization are permitted.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="presentation">
              <AccordionTrigger>Presentation Requirements</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Presenters must adhere to allocated time slots.</li>
                  <li>Presentation materials must be submitted 24 hours in advance.</li>
                  <li>Technical requirements will be communicated prior to the conference.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="intellectual-property">
              <AccordionTrigger>Publication Rights</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Accepted papers will be published in conference proceedings.</li>
                  <li>Authors retain copyright while granting publication rights.</li>
                  <li>Selected papers may be recommended for journal publication.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="liability">
              <AccordionTrigger>Liability and Insurance</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Participants are responsible for their own insurance coverage.</li>
                  <li>The organizers are not liable for personal injuries or property damage.</li>
                  <li>Participants must comply with venue safety regulations.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              For inquiries about these terms, please contact the ICASEM Secretariat:
            </p>
            <p className="text-gray-700 font-semibold mt-2">
              Email: submit@icasem.org<br />
              Phone: +91 82600 80050  
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}