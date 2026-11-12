"use client";

import { useState } from "react";
import { materials } from "@/lib/content";
import { HeroReveal } from "./HeroReveal";
import { Intro } from "./Intro";
import { ProjectTour } from "./ProjectTour";
import { MoodBoard } from "./MoodBoard";
import { StyleQuiz } from "./StyleQuiz";
import { Footer } from "./Footer";

export function Site() {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[3].name);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Aster House home">Aster House</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#mood">Mood</a>
          <a href="#quiz">Style quiz</a>
        </nav>
        <a className="header-cta" href="#quiz">Enquire</a>
      </header>

      <div id="top">
        <HeroReveal />
        <Intro />
        <ProjectTour />
        <MoodBoard selectedMaterial={selectedMaterial} onSelectMaterial={setSelectedMaterial} />
        <StyleQuiz selectedMaterial={selectedMaterial} />
      </div>

      <Footer />
    </main>
  );
}
