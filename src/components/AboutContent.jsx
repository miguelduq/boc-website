import { values } from "../data/siteData";
import { SectionTitle } from "./SectionTitle";
import { ValueCard } from "./ValueCard";

export function AboutContent() {
  return (
    <section className="about section-light" aria-labelledby="about-title">
      <div className="container about__mission">
        <div data-reveal>
          <p className="eyebrow">Who we are</p>
          <h2 id="about-title">Technology with a clear business purpose.</h2>
        </div>
        <div className="mission-card" data-reveal>
          <span>Our mission</span>
          <blockquote>“Our mission is to empower organizations by transforming data into strategic intelligence.”</blockquote>
          <p>We drive innovation through digital solutions that help businesses unlock the full value of their data, make smarter decisions, and achieve sustainable growth with modern technology.</p>
        </div>
      </div>
      <div className="container values-block">
        <SectionTitle eyebrow="Core values" title="Principles behind every decision." />
        <div className="values-grid">
          {values.map((value) => <ValueCard key={value.title} value={value} />)}
        </div>
      </div>
    </section>
  );
}
