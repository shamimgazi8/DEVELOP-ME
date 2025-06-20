"use client";

import ThemeToggleButton from "../components/ThemeToggle";
import About from "./AboutSection";
import ContactSection from "./ContactSection";
import Hero from "./HeroSection";
import Skills from "./SkillsSections";
import WorkProcess from "./WorkProcess";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <WorkProcess />
      <ContactSection />

      <div className="fixed bottom-[100px] right-0 z-50  p-2 rounded-l-2xl bg-[color:var(--text-color)]">
        <ThemeToggleButton />
      </div>
    </>
  );
}
