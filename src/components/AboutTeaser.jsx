import { ArrowRight } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="about-teaser section-light" aria-labelledby="about-teaser-title">
      <div className="container about-teaser__layout">
        <div data-reveal>
          <p className="eyebrow">About Birds On Cloud</p>
          <h2 id="about-teaser-title">Technology with a clear business purpose.</h2>
        </div>
        <div data-reveal>
          <p>We turn data, technology and business context into practical decisions that create sustainable value.</p>
          <a className="text-link" href="/about">Meet Birds On Cloud <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}
