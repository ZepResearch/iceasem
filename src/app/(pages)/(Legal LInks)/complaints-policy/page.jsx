import React from 'react'
import ComplaintsPolicy from './Content'
import { CONFERENCE } from "@/constants/conference"
export const metadata = {
  title: `Complaints Policy - ${CONFERENCE.name}`,
  description: `Join ${CONFERENCE.shortForm} ${CONFERENCE.year} in ${CONFERENCE.venue.location} on ${CONFERENCE.date} for a multidisciplinary research conference.`,
  keywords: [CONFERENCE.shortForm, 'applied science conference', 'engineering conference', 'management conference', `${CONFERENCE.venue.location} conference`, `research conference ${CONFERENCE.year}`],
  alternates: {
    canonical: 'https://www.icasem.org/complaints-policy',
  },
  openGraph: {
    title: `${CONFERENCE.shortForm} ${CONFERENCE.year} - ${CONFERENCE.name}`,
    description: `Join ${CONFERENCE.shortForm} in ${CONFERENCE.venue.location} for a multidisciplinary research conference.`,
   
    type: 'website',
    locale: 'en_US',
    site_name: `${CONFERENCE.shortForm} ${CONFERENCE.year}`,
  },
}

function page() {
  return (
    <div>
      <ComplaintsPolicy/>
    </div>
  )
}

export default page
