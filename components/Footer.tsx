import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer section-pad">
      <div className="footer-main">
        <div>
          <p className="eyebrow">{site.city}</p>
          <h2>{site.name}</h2>
        </div>
        <div className="footer-links">
          <a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagram}</a>
          <a href="#quiz">Start an enquiry ↗</a>
        </div>
      </div>
      <div className="disclaimer">
        <p>Independent website concept by {site.brand}. Not an official {site.name} website.</p>
        <p>Visual reference photography is sourced from Pexels and is illustrative, not portfolio work by {site.name}. Project names and details are placeholders.</p>
      </div>
    </footer>
  );
}
