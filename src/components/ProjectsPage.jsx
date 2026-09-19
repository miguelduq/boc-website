import { projects } from "../data/projectsData";
import { ProjectCard } from "./ProjectCard";

export function ProjectsPage({ onNavigate }) {
  return (
    <>
      <header className="projects-page__hero" id="home">
        <div className="projects-page__grid" aria-hidden="true" />
        <div className="container projects-page__hero-layout">
          <div>
            <p className="eyebrow eyebrow--light">Projects</p>
            <h1>Real workflows, delivered end to end.</h1>
          </div>
          <p>Case studies showing how we connect data engineering, Business Intelligence and automation to solve complete business problems. Select a project to see the challenge, the solution and the results.</p>
        </div>
      </header>

      <section className="projects-page section-dark" aria-label="All projects">
        <div className="container">
          <p className="projects-page__count">{projects.length} {projects.length === 1 ? "case study" : "case studies"}</p>
          <div className={"projects-page__list" + (projects.length === 1 ? " projects-page__list--single" : "")}>
            {projects.map((project, index) => (
              <ProjectCard index={index} key={project.slug} onExplore={onNavigate} project={project} variant={projects.length > 1 ? "tile" : "feature"} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
