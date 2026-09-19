import { ArrowRight } from "lucide-react";
import { dataJourney } from "../data/siteData";

export function DataJourney() {
  return (
    <section className="journey section-mint" id="approach" aria-labelledby="journey-title">
      <div className="container">
        <div className="journey__head" data-reveal>
          <div>
            <p className="eyebrow">End-to-end</p>
            <h2 id="journey-title">From source to decision, in one connected flow.</h2>
          </div>
          <div>
            <p>We are <strong>solution-first, not tool-first</strong>. Instead of selling a specific technology, we connect the sources, platforms and competencies each problem needs.</p>
            <a className="text-link" href="#contact">Discuss your data journey <ArrowRight size={17} /></a>
          </div>
        </div>
        <ol className="journey__steps" data-reveal>
          {dataJourney.map((stage) => (
            <li key={stage.step}>
              <span className="journey__index">{stage.step}</span>
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
              <ul>{stage.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
            </li>
          ))}
        </ol>
        <p className="journey__note" data-reveal>Technologies our team works with across projects. Each solution uses only what the business problem requires.</p>
      </div>
    </section>
  );
}
