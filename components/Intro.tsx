import { site } from "@/lib/content";

export function Intro() {
  return (
    <section className="intro section-pad">
      <div className="section-kicker">01 / The approach</div>
      <div className="intro-grid">
        <h2>Less decoration. More decisions.</h2>
        <div className="intro-copy">
          <p>{site.name} designs homes, renovations and intimate commercial spaces around proportion, light and material.</p>
          <p>Every room starts with how it needs to feel, then gets edited until only the useful, beautiful things remain.</p>
        </div>
      </div>
    </section>
  );
}
