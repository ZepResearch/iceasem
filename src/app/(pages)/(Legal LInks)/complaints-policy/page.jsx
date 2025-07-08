import React from 'react'
import ComplaintsPolicy from './Content'
export const metadata = {
  title: 'Complaints Policy - International Conference on Applied Science, Engineering & Management',
  description: 'Join ICASEM 2024 in Singapore. A 2-day multidisciplinary conference bringing together 1000+ academics and professionals from 50+ countries for cutting-edge research in applied science, engineering, and management.',
  keywords: ['ICASEM', 'applied science conference', 'engineering conference', 'management conference', 'academic conference Singapore', 'research conference 2024'],
  alternates: {
    canonical: 'https://www.icasem.org/complaints-policy',
  },
  openGraph: {
    title: 'ICASEM 2024 - International Conference on Applied Science, Engineering & Management',
    description: 'Join ICASEM 2024 in Singapore. A premier academic conference featuring 30+ workshops and global researchers.',
   
    type: 'website',
    locale: 'en_US',
    site_name: 'ICASEM 2024',
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
