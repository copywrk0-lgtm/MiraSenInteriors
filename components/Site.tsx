"use client";

import { useState } from "react";
import { materials } from "@/lib/content";
import { HeroReveal } from "./HeroReveal";
import { Intro } from "./Intro";
import { ProjectTour } from "./ProjectTour";
import { MoodBoard } from "./MoodBoard";
import { StyleQuiz } from "./StyleQuiz";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { ScrollProgress } from "./ScrollProgress";

export function Site() {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[3].name);

  return (
    <main><ScrollProgress />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mira Sen Interiors home">Mira Sen Interiors</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#mood">Mood</a>
          <a href="#quiz">Style quiz</a>
        </nav>
        <a className="header-cta" href="#quiz">Enquire</a>
      </header>

      <div id="top">
        <HeroReveal />
        <Reveal><Intro /></Reveal>
        <Reveal><ProjectTour /></Reveal>
        <Reveal><MoodBoard selectedMaterial={selectedMaterial} onSelectMaterial={setSelectedMaterial} /></Reveal>
        <Reveal><StyleQuiz selectedMaterial={selectedMaterial} /></Reveal>
      </div>

      <Footer />
    </main>
  );
}
