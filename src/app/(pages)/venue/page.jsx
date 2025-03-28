import React from 'react'
import VenuePage from './Content'

export const metadata = {
  title: 'ICASEM 2025 Venue | Intl. Conf. on Science & Engg.',
  description: 'Learn about ICASEM 2025, a premier conference uniting global experts in applied science, engineering, and management. Join us in Vietnam for groundbreaking research and networking.',
  keywords: [
    'ICASEM 2025',
    'about ICASEM',
    'applied science conference',
    'engineering conference',
    'management conference',
    'Vietnam conference 2025',
    'academic conference',
    'research conference',
    'scientific networking',
    'innovation conference'
  ],
  openGraph: {
    title: 'ICASEM 2025 Venue | Intl. Conf. on Science & Engg.',
    description: 'Join ICASEM 2025 in Vietnam, a top conference for applied science, engineering & management. Connect with global experts & explore groundbreaking research.',
    type: 'website',
    
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ICASEM 2025',
    description: 'Join leading experts at ICASEM 2025 in Vietnam. Explore cutting-edge research in applied science, engineering, and management.',
   
  },
  alternates: {
    canonical: 'https://www.icsthm.com/venue'
  },
}
function page() {
  return (
    <div>
      <VenuePage/>
    </div>
  )
}

export default page
