import { projects } from "@/lib/content";
import { ImageBlock } from "./ImageBlock";

export function ProjectTour() {
  return (
    <section id="work" className="projects section-pad">
      <div className="section-heading editorial-heading">
        <div className="section-kicker">02 / Selected work</div>
        <h2>Three rooms, three different ways to slow down.</h2>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project editorial-project" key={project.title}>
            <div className="project-meta">
              <div className="project-index" aria-hidden="true">0{index + 1}</div>
              <div className="project-title">
                <p className="project-type">{project.location}</p>
                <h3>{project.title}</h3>
                <p className="project-location">Residential interior · {index === 0 ? "New Delhi" : index === 1 ? "Gurugram" : "South Delhi"}</p>
              </div>
            </div>

            <div className="tour editorial-tour">
              {project.images.map((image, imageIndex) => (
                <figure className="tour-shot" key={image.src}>
                  <div className="shot-number">0{imageIndex + 1}</div>
                  <ImageBlock src={image.src} alt={image.alt} />
                  <figcaption>
                    <span>{image.label}</span>
                    <span>{imageIndex === 1 ? "Material study →" : "View →"}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="design-note editorial-note">
              <span>Design decision</span>
              <p>{project.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
