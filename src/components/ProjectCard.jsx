import { ArrowUpRight } from "lucide-react";
import { ProjectImage } from "./ProjectImage";

export function ProjectCard({ project, index = 0, onExplore, variant = "feature" }) {
  const href = "/projects/" + project.slug;

  return (
    <article className={"project-card" + (variant === "tile" ? " project-card--tile" : "")} data-reveal>
      <a
        className="project-card__link"
        href={href}
        onClick={(event) => onExplore?.(event, href)}
      >
      <div className="project-card__visual">
        <ProjectImage media={project.images.cover} compact />
      </div>
      <div className="project-card__content">
        <span className="project-card__number">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <p className="project-card__status">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {variant === "tile" && <p className="project-card__discipline">{project.discipline}</p>}
          <span className="project-card__cta">Explore case <ArrowUpRight size={17} /></span>
        </div>
        <span className="project-card__arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
      </div>
      </a>
    </article>
  );
}
