import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { WildlifeSection } from "@/components/sections/WildlifeSection";
import { VisitPlanningSection } from "@/components/sections/VisitPlanningSection";
import { ConservationSection } from "@/components/sections/ConservationSection";
import { AccommodationSection } from "@/components/sections/AccommodationSection";
import { GroupEnquirySection } from "@/components/sections/GroupEnquirySection";
import { PlanSection } from "@/components/sections/PlanSection";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* 01 — HERO (IMMERSIVE CINEMATIC) */}
      <HeroSection />

      {/* 02 — INTRODUCTION TO DUDHWA & TERAI ECOSYSTEM */}
      <IntroSection />

      {/* 03 — ICONIC WILDLIFE HIGHLIGHTS */}
      <WildlifeSection />

      {/* 04 — SAFARI & VISIT PLANNING ESSENTIALS (ZONES, BEST TIME, HOW TO REACH) */}
      <VisitPlanningSection />

      {/* 05 — HISTORY & CONSERVATION LEGACY (1977, BILLY ARJAN SINGH, 1984 RHINO) */}
      <ConservationSection />

      {/* 06 — ACCOMMODATION & TOUR PACKAGES */}
      <AccommodationSection />

      {/* 07 — GROUP ENQUIRY & INSTITUTIONAL DELEGATIONS */}
      <GroupEnquirySection />

      {/* 08 — CONTACT & PERMIT INQUIRY FORM */}
      <PlanSection />
    </div>
  );
}
