"use client";

import Image from "next/image";
import { materials } from "@/lib/content";

type Props = { selectedMaterial: string; onSelectMaterial: (name: string) => void };

export function MoodBoard({ selectedMaterial, onSelectMaterial }: Props) {
  const selected = materials.find((item) => item.name === selectedMaterial) ?? materials[3];

  return (
    <section id="mood" className="mood section-pad">
      <div className="section-heading">
        <div className="section-kicker">03 / Build a mood</div>
        <h2>Start with one material. See where it takes the room.</h2>
      </div>

      <div className="mood-stage">
        <div className="mood-room" style={{ background: selected.tone }}>
          <Image src="/images/mood-room.svg" alt="Neutral living room mood board" fill sizes="100vw" />
          <div className="mood-wash" style={{ background: selected.tone }} />
          <div className="mood-caption">
            <span>{selected.name}</span>
            <p>{selected.note}</p>
          </div>
        </div>
      </div>

      <div className="swatches" aria-label="Material choices">
        {materials.map((material) => (
          <button
            key={material.id}
            type="button"
            className={`swatch ${selected.id === material.id ? "is-selected" : ""}`}
            aria-pressed={selected.id === material.id}
            onClick={() => onSelectMaterial(material.name)}
          >
            <span className="swatch-image"><Image src={material.texture} alt="" fill sizes="72px" /></span>
            <span>{material.name}</span>
          </button>
        ))}
      </div>

      <p className="save-note">Chosen material: <strong>{selected.name}</strong>. It will carry into your style result.</p>
      <a className="text-link" href="#quiz">Save this to my enquiry ↗</a>
    </section>
  );
}
