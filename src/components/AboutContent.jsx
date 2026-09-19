import { ArrowRight } from "lucide-react";
import { automationAreas, beliefs, startingQuestions, values, whoFeelsThePain } from "../data/siteData";
import { certifications } from "../data/credibilityData";
import { Certifications } from "./Certifications";
import { SectionTitle } from "./SectionTitle";
import { ValueCard } from "./ValueCard";
import { WhyBoC } from "./WhyBoC";

export function AboutContent() {
  return (
    <>
      <section className="about section-light" aria-labelledby="about-title">
        <div className="container about__story">
          <div data-reveal>
            <p className="eyebrow">Our role</p>
            <h2 id="about-title">Every project starts with the business challenge.</h2>
          </div>
          <div className="about__story-copy" data-reveal>
            <p>We work with companies that want to increase their data maturity, improve the way information flows across the business and make better use of technology to support decisions and operations.</p>
            <p>Our expertise covers the entire data journey: from integrating and structuring information from different sources to building Business Intelligence solutions, automating processes, creating data governance structures and transforming market and business data into actionable intelligence.</p>
            <p className="about__story-highlight">Technology is only part of the equation. First we understand where time, effort and value are being lost; then we design the right solution for that reality.</p>
          </div>
        </div>

        <div className="container about__questions">
          <p className="problem__label" data-reveal>The questions we start with</p>
          <ol className="question-grid">
            {startingQuestions.map((question, index) => (
              <li data-reveal key={question}><span>{String(index + 1).padStart(2, "0")}</span><p>{question}</p></li>
            ))}
          </ol>
          <div className="outcome-chain" data-reveal aria-label="How we connect technology to outcomes">
            <p>Better technology <ArrowRight aria-hidden="true" size={16} /> <strong>better processes</strong></p>
            <p>Better data <ArrowRight aria-hidden="true" size={16} /> <strong>better decisions</strong></p>
            <p>Better decisions <ArrowRight aria-hidden="true" size={16} /> <strong>better business outcomes</strong></p>
          </div>
        </div>
      </section>

      <section className="beliefs section-mint" aria-labelledby="beliefs-title">
        <div className="container">
          <SectionTitle eyebrow="What we believe" title="Our point of view on data." copy="The ideas behind how we scope, build and deliver every project." titleId="beliefs-title" />
          <div className="beliefs__grid">
            {beliefs.map((belief, index) => (
              <article className="belief-card" data-reveal key={belief.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{belief.title}</h3>
                <p>{belief.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhyBoC showFlow={false} />

      <section className="audience section-light" aria-labelledby="audience-title">
        <div className="container audience__layout">
          <div data-reveal>
            <p className="eyebrow">Who we work with</p>
            <h2 id="audience-title">Organizations ready to raise their data maturity.</h2>
            <p className="audience__copy">There is no minimum company size. We work with established groups and with companies that are just starting and want a technology partner to grow with.</p>
            <p className="audience__copy">The conversation usually starts with a CTO, a commercial manager or any leader who wants to increase the data maturity of their area.</p>
          </div>
          <div className="audience__panels">
            <div className="audience__panel" data-reveal>
              <p className="problem__label">Who usually feels the pain first</p>
              <ul className="audience__list">{whoFeelsThePain.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="audience__panel" data-reveal>
              <p className="problem__label">Areas where we have already automated processes</p>
              <ul className="chip-list">{automationAreas.map((area) => <li key={area}>{area}</li>)}</ul>
              <p className="audience__example">From generating extensive recap presentations to reporting marketing campaign performance.</p>
            </div>
          </div>
        </div>
      </section>

      <Certifications
        intro
        title="Certified professionals, prepared in-house."
        description={`We prepare our own professionals to act as consultants at our clients. Together, they hold ${certifications.length} certifications across Microsoft, AWS, Tableau, Dataiku and Cognite.`}
      />

      <section className="about section-light" aria-labelledby="mission-title">
        <div className="container about__mission">
          <div data-reveal>
            <p className="eyebrow">Mission</p>
            <h2 id="mission-title">Technology with a clear business purpose.</h2>
          </div>
          <div className="mission-card" data-reveal>
            <span>Our mission</span>
            <blockquote>“Our mission is to empower organizations by transforming data into strategic intelligence.”</blockquote>
            <p>We help businesses unlock the full value of their data, make smarter decisions, and achieve sustainable growth with modern technology.</p>
          </div>
        </div>
        <div className="container values-block">
          <SectionTitle eyebrow="Core values" title="Principles behind every decision." />
          <div className="values-grid values-grid--compact">
            {values.map((value) => <ValueCard key={value.title} value={value} />)}
          </div>
        </div>
      </section>
    </>
  );
}
