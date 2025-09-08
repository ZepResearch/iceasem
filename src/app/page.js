import About from "@/components/About";
import CoOrganizationLogos from "@/components/Co-OrganiztionLogo";
import CPD from "@/components/CPD";

import CtaSection from "@/components/CTA";
import TimelineSection from "@/components/Dates-Timeline";
import FaqSection from "@/components/FAQ";
import Hero from "@/components/Hero";
import Objective from "@/components/Objective";
import SDGSection from "@/components/SDGS";
import SpeakerSection from "@/components/Speakers";
import VenueCtaSection from "@/components/Venue-cta";


export default function Home() {
  return (
    <main>
      <Hero/>
      <CPD/>
      <CoOrganizationLogos/>
      <About/>
      <Objective/>
      <TimelineSection/>
      <SpeakerSection/>
      <CtaSection/>
      <VenueCtaSection/>
      <FaqSection/>
      {/* 
      <SDGSection/>
       */}
    </main>
  );
}
