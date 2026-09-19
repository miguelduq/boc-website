import { ArrowRight } from "lucide-react";
import { brand } from "../data/siteData";

export function AboutTeaser() {
  return (
    <section className="about-teaser section-light" aria-labelledby="about-teaser-title">
      <div className="container about-teaser__layout">
        <div data-reveal>
          <p className="eyebrow">Who we are</p>
          <h2 id="about-teaser-title">A partner that starts with your business, not with a tool.</h2>
        </div>
        <div data-reveal>
          <p>Based in {brand.location} and operating since {brand.since}, we work with companies in Brazil and abroad that want to increase their data maturity.</p>
          <a className="text-link" href="/about">Meet Birds On Cloud <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}
