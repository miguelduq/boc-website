import { painPoints, whoFeelsThePain } from "../data/siteData";

export function ProblemSection() {
  return (
    <section className="problem section-light" id="solve" aria-labelledby="problem-title">
      <div className="container problem__layout">
        <div className="problem__intro" data-reveal>
          <p className="eyebrow">What we solve</p>
          <h2 id="problem-title">Most companies don’t struggle because they lack data.</h2>
          <p>They struggle because data is fragmented, processes are inefficient, technical capacity is limited, and information does not reach decision-makers in the right way.</p>
        </div>
        <div data-reveal>
          <p className="problem__label">Does this sound familiar?</p>
          <ol className="problem__list">
            {painPoints.map((point, index) => (
              <li key={point}><span>{String(index + 1).padStart(2, "0")}</span><p>{point}</p></li>
            ))}
          </ol>
        </div>
      </div>
      <div className="container problem__footer" data-reveal>
        <div>
          <p className="problem__label">Who usually feels it first</p>
          <ul className="chip-list">{whoFeelsThePain.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <p className="problem__answer">We help organizations address these challenges by <strong>increasing data maturity</strong> and building the structures needed to turn information into business value.</p>
      </div>
    </section>
  );
}
