import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">Business intelligence · Data solutions</p>
          <h1 id="hero-title">We turn data into <span>strategic intelligence.</span></h1>
          <p className="hero__lead">Birds On Cloud helps organizations unlock the full potential of their data through Business Intelligence, Process Automation, Cloud Computing, and Technology Training.</p>
          <div className="hero__actions">
            <a className="button button--lime" href="#contact">Start a conversation <ArrowUpRight size={18} /></a>
            <a className="text-link text-link--light" href="#services">Explore our services <ArrowDown size={16} /></a>
          </div>
        </div>
        <div className="data-orbit" aria-label="Birds On Cloud data capabilities">
          <div className="data-orbit__topline"><span>BoC / Intelligence layer</span><span className="status-dot">Live thinking</span></div>
          <div className="data-orbit__canvas" aria-hidden="true">
            <div className="orbit-ring orbit-ring--one" /><div className="orbit-ring orbit-ring--two" />
            <div className="orbit-core"><img src="/boc-logo.png" alt="" /></div>
            <div className="signal signal--one">Market</div><div className="signal signal--two">Power BI</div><div className="signal signal--three">Cloud</div><div className="signal signal--four">Automation</div>
          </div>
          <div className="data-orbit__footer"><span>Raw data</span><div className="data-flow"><i /><i /><i /><i /><i /><i /></div><span>Clear decisions</span></div>
        </div>
      </div>
      <div className="container hero__footnote"><span>Data · Process · Cloud · Knowledge</span><span>Scroll to discover</span></div>
    </section>
  );
}

