import React from 'react'
import SubmissionGuidelines from './Content'
export const metadata = {
  title: 'ICASEM 2025 Submission Guidelines ',
  description: 'Join ICASEM 2025 in Vietnam, a top conference for applied science, engineering & management. Connect with global experts & explore groundbreaking research.',
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
    title: 'ICASEM 2025 Submission Guidelines ',
    description: 'Join leading experts at ICASEM 2025 in Vietnam. Explore cutting-edge research in applied science, engineering, and management while networking with global innovators.',
    type: 'website',
    
  },
  alternates: {
    canonical: 'https://www.icsthm.com/papers-format'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ICASEM 2025',
    description: 'Join leading experts at ICASEM 2025 in Vietnam. Explore cutting-edge research in applied science, engineering, and management.',
   
  }
}
function page() {
  return (
    <div>
      <SubmissionGuidelines/>
    </div>
  )
}

export default page
