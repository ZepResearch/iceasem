import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ToastProvider } from "@/components/ui/ToastProvider";
import TawkToChat from "@/components/TawkToChat";
import { FloatingWhatsAppButton } from "@/components/whatsapp";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.icasem.org/'),
  title: {
    default: 'ICASEM: Applied Science & Management Conference',
    template: '%s | ICASEM '
  },
  description: 'International Conference on Applied Science, Engineering & Management (ICASEM) - A global platform for researchers, scientists, engineers, and professionals to exchange knowledge and foster innovation.',
  keywords: [
    'ICASEM',
    'international conference',
    'applied science',
    'engineering',
    'management',
    'research conference',
    'academic conference',
    'Vietnam conference',
    'scientific research',
    'innovation'
  ],
  authors: [{ name: 'ICASEM Organization' }],
  creator: 'ICASEM Organization',
  publisher: 'ICASEM Organization',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'ICASEM: Applied Science & Management Conference',
    description: 'Join global researchers, scientists, and professionals at ICASEM 2024 to explore cutting-edge developments in applied science, engineering, and management.',
    url: 'https://www.icasem.org/',
    siteName: 'ICASEM 2024',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICASEM: Applied Science & Management Conference',
    description: 'Join global researchers, scientists, and professionals at ICASEM 2024 to explore cutting-edge developments in applied science, engineering, and management.',
  },
  alternates: {
    canonical: 'https://www.icsthm.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-12 bg-[#f0f4f8] `}
        >
          {/* <!-- Google tag (gtag.js) --> */}
         

        <Nav/>
        {children}
        <Footer/>
        <ToastProvider/>
        <TawkToChat/>
        <FloatingWhatsAppButton phoneNumber="919237388328" message="" />
      </body>
    </html>
  );
}
