import About from "@/components/About";
import Buttons from "@/components/buttons";
import CoOrganizationLogos from "@/components/Co-OrganiztionLogo";
import CTASection from "@/components/CTA";
import { Dates } from "@/components/Dates";
import FAQ from "@/components/FAQ";

import { Hero } from "@/components/Hero";

import Objective from "@/components/Objective";
import SDGSection from "@/components/SDGS";
import SpeakerSection from "@/components/Speakers";
import Testimonial from "@/components/Testominial";

import TicketCTA from "@/components/TicketCTA";


export default function Home() {
  return (
    <main>
      <Hero/>
      <CoOrganizationLogos/>
      <About/>
      <Buttons/>
      <Objective/>
      <SpeakerSection/>
      <SDGSection/>
      <Dates/>
      <CTASection/>
      <TicketCTA/>
      <Testimonial/>
      <FAQ/>
    </main>
  );
}
