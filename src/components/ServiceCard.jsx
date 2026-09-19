import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ service, featured = false }) {
  const Icon = service.icon;
  return (
    <article className={`service-card ${featured ? "service-card--featured" : ""}`} data-reveal>
      <div className="service-card__topline"><span>{service.number}</span><span className="service-card__icon" aria-hidden="true"><Icon size={21} strokeWidth={1.6} /></span></div>
      <h3>{service.title}</h3><p>{service.description}</p>
      {service.items.length > 0 && <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>}
      {service.tools?.length > 0 && <p className="service-card__tools">{service.tools.join(" · ")}</p>}
      <a href="#contact" aria-label={`Talk to us about ${service.title}`}>Talk to us <ArrowUpRight size={16} /></a>
    </article>
  );
}
