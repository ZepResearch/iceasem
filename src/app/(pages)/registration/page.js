import React from 'react'

import RegistrationPage from './Content'
import { CONFERENCE } from "@/constants/conference"
export const metadata = {
  title: `${CONFERENCE.shortForm} ${CONFERENCE.year} Registration`,
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
    title: `${CONFERENCE.shortForm} ${CONFERENCE.year} Registration`,
    description: `Join leading experts at ${CONFERENCE.name} in ${CONFERENCE.venue.location}. Explore cutting-edge research while networking with global innovators.`,
    type: 'website',
    
  },
  alternates: {
    canonical: 'https://www.icsthm.com/registration'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONFERENCE.shortForm} ${CONFERENCE.year} Registration`,
    description: `Join leading experts at ${CONFERENCE.name} in ${CONFERENCE.venue.location}. Explore cutting-edge research in applied science, engineering, and management.`,
   
  }
}
function page() {
  return (
    <div>
       <RegistrationPage/>
    </div>
  )
}

export default page