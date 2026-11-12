"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { materials, quizQuestions, site, styleFromAnswers } from "@/lib/content";

type Props = { selectedMaterial: string };

export function StyleQuiz({ selectedMaterial }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const material = selectedMaterial;

  const question = quizQuestions[step];
  const result = useMemo(() => styleFromAnswers(answers), [answers]);
  const progress = ((step + 1) / quizQuestions.length) * 100;

  const choose = (value: string) => {
    const next = { ...answers, [question.id]: value };
    setAnswers(next);
    if (step < quizQuestions.length - 1) setStep(step + 1);
  };

  const sendToWhatsApp = () => {
    const budget = answers.budget || "Not sure yet";
    const lines = [
      `Hi ${site.name}, I just completed your style quiz.`,
      "",
      `Style: ${result}`,
      `Budget: ${budget}`,
      `City: ${city || "Not specified"}`,
      `Material I liked: ${material}`,
      `Name: ${name || "Not specified"}`,
      "",
      "I'd love to talk about my space."
    ];
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="quiz" className="quiz section-pad">
      <div className="section-heading">
        <div className="section-kicker">04 / Your style</div>
        <h2>A five-question shortcut to a room that feels like yours.</h2>
      </div>

      {step < quizQuestions.length ? (
        <div className="quiz-shell">
          <div className="quiz-topline">
            <span>0{step + 1} / 05</span>
            <div className="progress" aria-label={`Question ${step + 1} of ${quizQuestions.length}`}>
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>
          <h3>{question.title}</h3>
          <div className="quiz-options">
            {question.options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`quiz-option ${answers[question.id] === option.value ? "is-selected" : ""}`}
                onClick={() => choose(option.value)}
              >
                <span className="quiz-image"><Image src={option.image} alt="" fill sizes="(max-width: 700px) 50vw, 300px" /></span>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
          <div className="quiz-controls">
            <button type="button" className="plain-button" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0}>Back</button>
            <span>Choose one to continue</span>
          </div>
        </div>
      ) : (
        <div className="result-shell">
          <div className="result-image">
            <Image src="/images/quiz-result.svg" alt="Warm neutral interior mood board" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="result-copy">
            <div className="eyebrow">Your starting point</div>
            <h3>{result}</h3>
            <p>{result === "Quiet luxury" ? "Refined materials, low contrast and a few pieces with real presence." : result === "Earthy modern" ? "Natural texture, warmer colour and rooms that feel collected rather than decorated." : "Soft neutrals, honest materials and enough restraint for the architecture to breathe."}</p>
            <div className="result-details">
              <label>Name <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" /></label>
              <label>City <input value={city} onChange={(event) => setCity(event.target.value)} placeholder="Your city" /></label>
              <label>Material <select value={material} disabled>{materials.map((item) => <option key={item.id}>{item.name}</option>)}</select></label>
            </div>
            <button className="whatsapp-button" type="button" onClick={sendToWhatsApp}>Send this to {site.name} on WhatsApp ↗</button>
            <button className="reset-button" type="button" onClick={() => { setAnswers({}); setStep(0); }}>Retake the quiz</button>
          </div>
        </div>
      )}
    </section>
  );
}
