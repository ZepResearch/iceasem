import About from "@/components/About";

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
      <About/>
      <Objective/>
      <SpeakerSection/>
      <CtaSection/>
      <TimelineSection/>
      <VenueCtaSection/>
      <FaqSection/>
      {/* 
      <SDGSection/>
       */}
    </main>
  );
}
