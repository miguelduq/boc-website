import { Award } from "lucide-react";
import { LogoMarquee } from "./LogoMarquee";
import { certifications } from "../data/credibilityData";

function CertificationCard({ certification }) {
  return (
    <article className="certification-card">
      <div className="certification-card__issuer">
        {certification.logo ? (
          <img alt="" draggable="false" src={certification.logo} />
        ) : (
          <Award aria-hidden="true" size={19} strokeWidth={1.5} />
        )}
        <span>{certification.issuer}</span>
      </div>
      <h3>{certification.name}</h3>
    </article>
  );
}

export function Certifications() {
  return (
    <section className="credibility-strip certifications" aria-labelledby="certifications-title">
      <div className="container credibility-strip__heading">
        <div>
          <h2 id="certifications-title">Certifications</h2>
        </div>
        <p>Credentials held by BoC professionals</p>
      </div>
      <LogoMarquee ariaLabel="Certifications. Drag horizontally to browse." speed={0.3}>
        {certifications.map((certification) => (
          <CertificationCard certification={certification} key={certification.name} />
        ))}
      </LogoMarquee>
    </section>
  );
}
