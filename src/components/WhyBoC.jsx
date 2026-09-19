import { ArrowRight, Check } from "lucide-react";
import { dataJourney, differentiators } from "../data/siteData";

export function WhyBoC({ showFlow = true }) {
  const columns = [differentiators.specialists, differentiators.company];
  return (
    <section className="why section-dark" id="why" aria-labelledby="why-title">
      <div className="container">
        <div className="why__head" data-reveal>
          <div>
            <p className="eyebrow eyebrow--light">Why Birds On Cloud</p>
            <h2 id="why-title">The flexibility of specialists. <span>The reliability of a structured company.</span></h2>
          </div>
          <p>Between a large technology consultancy and an individual freelancer, there is space for a specialized partner that is close to the business and structured to deliver.</p>
        </div>

        <div className="why__panel" data-reveal>
          {columns.map((column) => (
            <div className="why__column" key={column.label}>
              <h3>{column.label}</h3>
              <ul>{column.items.map((item) => <li key={item}><Check aria-hidden="true" size={16} /><span>{item}</span></li>)}</ul>
            </div>
          ))}
        </div>

        {showFlow && (
        <div className="why__flow" data-reveal>
          <p><strong>Solution-first, not tool-first.</strong> We connect what each problem needs, end to end:</p>
          <ol aria-label="End-to-end data journey">
            {dataJourney.map((stage, index) => (
              <li key={stage.step}>
                <span>{stage.title}</span>
                {index < dataJourney.length - 1 && <ArrowRight aria-hidden="true" size={14} />}
              </li>
            ))}
          </ol>
        </div>
        )}
      </div>
    </section>
  );
}
