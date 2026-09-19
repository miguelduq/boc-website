import { ArrowDown, ArrowUpRight } from "lucide-react";
import { brand } from "../data/siteData";

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">Technology & data consulting</p>
          <h1 id="hero-title">Turning complexity into <span>business performance.</span></h1>
          <p className="hero__lead">{brand.positioning}</p>
          <div className="hero__actions">
            <a className="button button--lime" href="#contact">Start a conversation <ArrowUpRight size={18} /></a>
            <a className="text-link text-link--light" href="#solve">See what we solve <ArrowDown size={16} /></a>
          </div>
        </div>
        <div className="data-orbit" aria-label="Birds On Cloud end-to-end data capabilities">
          <div className="data-orbit__topline"><span>BoC / End-to-end data journey</span><span className="status-dot">Solution-first</span></div>
          <div className="data-orbit__canvas" aria-hidden="true">
            <div className="orbit-ring orbit-ring--one" /><div className="orbit-ring orbit-ring--two" />
            <div className="orbit-core"><img src="/boc-logo.png" alt="" /></div>
            <div className="signal signal--one">Data & BI</div><div className="signal signal--two">Engineering</div><div className="signal signal--three">Market intelligence</div><div className="signal signal--four">Automation</div>
          </div>
          <div className="data-orbit__footer"><span>Complexity</span><div className="data-flow"><i /><i /><i /><i /><i /><i /></div><span>Business performance</span></div>
        </div>
      </div>
      <div className="container hero__footnote"><span>{brand.location} · Since {brand.since}</span><span>Scroll to discover</span></div>
    </section>
  );
}
