import { brand } from "../data/siteData";
import { AboutContent } from "./AboutContent";

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-page__hero section-light" aria-labelledby="about-page-title">
        <div className="container about-page__hero-layout">
          <div className="about-page__hero-content" data-reveal>
            <p className="eyebrow">Who we are</p>
            <h1 id="about-page-title">A specialized partner for the entire data journey.</h1>
            <p className="about-page__lead">{brand.positioning}</p>
          </div>
          <dl className="about-facts" data-reveal>
            <div><dt>Based in</dt><dd>{brand.location}</dd></div>
            <div><dt>Operating since</dt><dd>{brand.since}</dd></div>
            <div><dt>Working with</dt><dd>Companies in Brazil and abroad</dd></div>
            <div><dt>What we are</dt><dd>A technology & data consulting company</dd></div>
          </dl>
        </div>
      </section>
      <AboutContent />
    </div>
  );
}
