"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const BootSequence = dynamic(() => import("@/components/BootSequence"), {
  ssr: false,
});
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      <CustomCursor />
      <BootSequence onComplete={() => setBootComplete(true)} />
      <div
        style={{
          opacity: bootComplete ? 1 : 0,
          visibility: bootComplete ? "visible" : "hidden",
          transition: "opacity 0.9s ease",
        }}
      >
        <Navigation />
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
