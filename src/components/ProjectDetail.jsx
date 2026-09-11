import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { BeforeAfter } from "./BeforeAfter";
import { ProcessDiagram } from "./ProcessDiagram";
import { ProjectImage } from "./ProjectImage";

export function ProjectDetail({ project }) {
  return (
    <article className="project-detail">
      <header className="project-detail__hero" id="home">
        <div className="project-detail__grid" aria-hidden="true" />
        <div className="container">
          <a className="project-detail__back" href="/#projects"><ArrowLeft size={17} /> Back to projects</a>
          <div className="project-detail__hero-layout">
            <div>
              <p className="eyebrow eyebrow--light">{project.category}</p>
              <h1>{project.title}</h1>
              <p className="project-detail__lead">{project.description}</p>
              <div className="project-detail__meta"><span>{project.discipline}</span><span>End-to-end workflow</span></div>
            </div>
            <ProjectImage media={project.images.cover} />
          </div>
        </div>
      </header>

      <section className="project-detail__section project-detail__context" aria-labelledby="project-context-title">
        <div className="container project-detail__split">
          <div><p className="eyebrow">01 / Context</p><h2 id="project-context-title">{project.context.title}</h2></div>
          <div>
            <p className="project-detail__large-copy">{project.context.copy}</p>
            <p className="project-detail__note">{project.context.capabilityNote}</p>
            <ul className="project-detail__chips">{project.context.capabilitySources.map((source) => <li key={source}>{source}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="project-detail__section project-detail__challenge section-mint" aria-labelledby="project-challenge-title">
        <div className="container project-detail__split">
          <div><p className="eyebrow">02 / The challenge</p><h2 id="project-challenge-title">{project.challenge.title}</h2></div>
          <div><p className="project-detail__large-copy">{project.challenge.copy}</p><div className="project-detail__highlight">Manual handling increased repetition, file dependence and exposure to human error.</div></div>
        </div>
      </section>

      <section className="project-detail__section project-detail__transformation section-dark" aria-labelledby="transformation-title">
        <div className="container">
          <div className="project-detail__section-head"><p className="eyebrow eyebrow--light">03 / Before → After</p><h2 id="transformation-title">The transformation at a glance.</h2><p>A visual comparison of the previous workflow and the structured solution.</p></div>
          <BeforeAfter before={project.before} after={project.after} />
        </div>
      </section>

      <section className="project-detail__section project-detail__solution" aria-labelledby="project-solution-title">
        <div className="container project-detail__split">
          <div><p className="eyebrow">04 / The solution</p><h2 id="project-solution-title">{project.solution.title}</h2><p className="project-detail__large-copy">{project.solution.copy}</p></div>
          <ProjectImage media={project.images.solution} />
        </div>
      </section>

      <section className="project-detail__section project-detail__workflow section-mint" aria-labelledby="workflow-title">
        <div className="container">
          <div className="project-detail__section-head"><p className="eyebrow">05 / How it works</p><h2 id="workflow-title">One connected data workflow.</h2><p>Each layer prepares the information for the next, from source to business-ready output.</p></div>
          <ProcessDiagram label="End-to-end data automation workflow" steps={project.workflow} />
          <div className="project-detail__diagram"><ProjectImage media={project.images.workflow} /></div>
        </div>
      </section>

      <section className="project-detail__section project-detail__benefits section-dark" aria-labelledby="benefits-title">
        <div className="container">
          <div className="project-detail__section-head"><p className="eyebrow eyebrow--light">06 / Benefits</p><h2 id="benefits-title">Value created through structure and automation.</h2><p>The design is ready for verified metrics to be added later, without using unconfirmed quantitative claims.</p></div>
          <ul className="project-detail__benefit-grid">
            {project.benefits.map((benefit, index) => <li key={benefit}><span>{String(index + 1).padStart(2, "0")}</span><Check aria-hidden="true" size={17} /><strong>{benefit}</strong></li>)}
          </ul>
        </div>
      </section>

      <section className="project-detail__conclusion" aria-labelledby="conclusion-title">
        <div className="container project-detail__conclusion-layout">
          <div><p className="eyebrow">07 / Conclusion</p><h2 id="conclusion-title">From fragmented steps to a business-ready flow.</h2></div>
          <div><p>{project.conclusion}</p><a className="text-link" href="#contact">Learn more about BoC solutions <ArrowRight size={17} /></a></div>
        </div>
      </section>
    </article>
  );
}
