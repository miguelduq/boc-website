import { statistics } from "../data/siteData";

export function Statistics() {
  return (
    <section className="statistics" aria-label="Company statistics">
      <div className="container statistics__grid">
        {statistics.map((statistic) => (
          <article className="statistics__item" data-reveal key={statistic.label}>
            <strong>{statistic.value}</strong>
            <p>{statistic.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
