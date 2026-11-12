import { projects } from "@/lib/content";
import { ImageBlock } from "./ImageBlock";

export function ProjectTour() {
  return (
    <section id="work" className="projects section-pad">
      <div className="section-heading">
        <div className="section-kicker">02 / Selected work</div>
        <h2>Three rooms, three different ways to slow down.</h2>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project" key={project.title}>
            <div className="project-meta">
              <span>0{index + 1}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>
            </div>
            <div className="tour">
              {project.images.map((image) => (
                <figure className="tour-shot" key={image.src}>
                  <ImageBlock src={image.src} alt={image.alt} />
                  <figcaption>
                    <span>{image.label}</span>
                    {image.label === project.images[1].label && <span>Material note →</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="design-note"><span>Design decision</span>{project.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
