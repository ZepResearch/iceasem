import React from 'react'
import AboutUs from './Content'
import { CONFERENCE } from "@/constants/conference"


export const metadata = {
  title: `About ${CONFERENCE.shortForm} ${CONFERENCE.year} | International Conference`,
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
    title: `About ${CONFERENCE.shortForm} ${CONFERENCE.year} | International Conference`,
    description: `Join leading experts at ${CONFERENCE.name} in ${CONFERENCE.venue.location}. Explore cutting-edge research while networking with global innovators.`,
    type: 'website',
    
  },
  alternates: {
    canonical: 'https://www.icsthm.com/about-conference'
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${CONFERENCE.shortForm} ${CONFERENCE.year}`,
    description: `Join leading experts at ${CONFERENCE.name} in ${CONFERENCE.venue.location}. Explore cutting-edge research in applied science, engineering, and management.`,
   
  }
}


function page() {
  return (
    <div>
      <AboutUs/>
    </div>
  )
}

export default page
