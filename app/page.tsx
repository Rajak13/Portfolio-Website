import React from "react";
import { AboutSection } from "../components/about-section";
import { CertificationsSection } from "../components/certifications-section";
import { ContactSection } from "../components/contact-section";
import { EducationSection } from "../components/education-section";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/hero-section";
import { Navigation } from "../components/navigation";
import { ProjectsSection } from "../components/projects-section";
import { ReferencesSection } from "../components/references-section";
import { SkillsSection } from "../components/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <ReferencesSection />
      </main>
      <Footer />
    </div>
  )
}
