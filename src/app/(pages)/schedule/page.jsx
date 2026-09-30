import React from 'react'
import ConferenceSchedule from './Content'
import { CONFERENCE } from "@/constants/conference"
export const metadata = {
  title: `${CONFERENCE.shortForm} ${CONFERENCE.year} Conference Schedule`,
  description: `Learn about ${CONFERENCE.name}, a conference uniting global experts in applied science, engineering, and management. Join us in ${CONFERENCE.venue.location} on ${CONFERENCE.date}.`,
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
    title: `${CONFERENCE.shortForm} ${CONFERENCE.year} Conference Schedule`,
    description: `Join ${CONFERENCE.name} in ${CONFERENCE.venue.location} on ${CONFERENCE.date}. Connect with global experts and explore groundbreaking research.`,
    type: 'website',
    
  },
  alternates: {
    canonical: 'https://www.icsthm.com/schedule'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONFERENCE.shortForm} ${CONFERENCE.year} Conference Schedule`,
    description: `Join leading experts at ${CONFERENCE.name} in ${CONFERENCE.venue.location}. Explore cutting-edge research in applied science, engineering, and management.`,
   
  }
}
function page() {
  return (
    <div>
      <ConferenceSchedule/>
    </div>
  )
}

export default page
