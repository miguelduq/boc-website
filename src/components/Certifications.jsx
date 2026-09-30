import { Award } from "lucide-react";
import { certifications } from "../data/credibilityData";

// One card per certification, grouped by issuer so the same brand stays together.
function byIssuer(items) {
  const order = [];
  items.forEach((item) => { if (!order.includes(item.issuer)) order.push(item.issuer); });
  return [...items].sort((a, b) => order.indexOf(a.issuer) - order.indexOf(b.issuer));
}

export function Certifications({ title = "Certifications", description = "Credentials held by BoC professionals", intro = false }) {
  const items = byIssuer(certifications);

  return (
    <section className={"credibility-strip certifications" + (intro ? " certifications--intro" : "")} aria-labelledby="certifications-title">
      <div className="container credibility-strip__heading">
        <div>
          <h2 id="certifications-title">{title}</h2>
        </div>
        <p>{description}</p>
      </div>
      <div className="container certification-grid">
        {items.map((certification) => (
          <article className="certification-card" data-reveal key={certification.name}>
            <div className="certification-card__issuer">
              {certification.logo ? (
                <img alt={certification.issuer} draggable="false" src={certification.logo} />
              ) : (
                <>
                  <Award aria-hidden="true" size={15} strokeWidth={1.7} />
                  <span>{certification.issuer}</span>
                </>
              )}
            </div>
            <h3>{certification.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
