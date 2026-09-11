import { AboutContent } from "./AboutContent";

export function AboutPage() {
  return (
    <>
      <section className="about-page__hero section-light" aria-labelledby="about-page-title">
        <div className="container about-page__hero-content" data-reveal>
          <p className="eyebrow">About Birds On Cloud</p>
          <h1 id="about-page-title">People, data and technology working toward clearer decisions.</h1>
        </div>
      </section>
      <AboutContent />
    </>
  );
}
