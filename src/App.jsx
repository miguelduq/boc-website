import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AboutPage } from "./components/AboutPage";
import { AboutTeaser } from "./components/AboutTeaser";
import { Certifications } from "./components/Certifications";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectDetail } from "./components/ProjectDetail";
import { SectionTitle } from "./components/SectionTitle";
import { ServiceCard } from "./components/ServiceCard";
import { Statistics } from "./components/Statistics";
import { TrustedBrands } from "./components/TrustedBrands";
import { projects } from "./data/projectsData";
import { services } from "./data/siteData";

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  const projectMatch = pathname.match(/^\/projects\/([^/]+)\/?$/);
  const isAboutPage = /^\/about\/?$/.test(pathname);
  const activeProject = projectMatch
    ? projects.find((project) => project.slug === decodeURIComponent(projectMatch[1]))
    : null;

  useEffect(() => {
    const updatePath = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  useEffect(() => {
    document.title = activeProject
      ? activeProject.title + " | Birds On Cloud"
      : isAboutPage
        ? "About | Birds On Cloud"
        : "Birds On Cloud | Data & Business Intelligence";
  }, [activeProject, isAboutPage]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  const navigate = (event, path) => {
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
    ) return;

    event.preventDefault();
    window.history.pushState({}, "", path);
    setPathname(window.location.pathname);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  if (activeProject) {
    return (
      <>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">
          <ProjectDetail project={activeProject} />
          <CTA />
        </main>
        <Footer />
      </>
    );
  }

  if (isAboutPage) {
    return (
      <>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">
          <AboutPage />
          <CTA />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustedBrands />
        <Certifications />

        <section className="intro section-light" aria-labelledby="intro-title">
          <div className="container intro__layout">
            <p className="eyebrow" data-reveal>Birds On Cloud</p>
            <div data-reveal>
              <h2 id="intro-title">Data has more value when it becomes clear, useful and actionable.</h2>
              <p>We design data-driven solutions that improve decision-making, increase operational efficiency, and accelerate digital transformation. From interactive Power BI dashboards to Power Automate workflows and cloud-based solutions, we empower businesses to make smarter decisions and achieve sustainable growth.</p>
            </div>
          </div>
        </section>
        <Statistics />

        <section className="services section-light" id="services" aria-labelledby="services-heading">
          <div className="container">
            <SectionTitle eyebrow="Services" title="Clarity for every layer of the business." copy="Data-driven solutions designed to improve decision-making, operational efficiency, and digital transformation." titleId="services-heading" />
            <div className="services__grid">
              {services.map((service, index) => <ServiceCard key={service.title} service={service} featured={index === 1} />)}
            </div>
          </div>
        </section>

        <section className="capabilities section-mint" aria-labelledby="capabilities-title">
          <div className="container capabilities__layout">
            <div className="capabilities__copy" data-reveal>
              <p className="eyebrow">Connected capabilities</p>
              <h2 id="capabilities-title">From complex signals to an intelligible view.</h2>
              <p>Business Intelligence, automation and cloud solutions work together to help organizations unlock the full value of their data.</p>
              <a className="text-link" href="#contact">Discuss your data needs <ArrowRight size={17} /></a>
            </div>
            <div className="capability-console" data-reveal aria-label="Connected capabilities visualization">
              <div className="capability-console__head"><span>BoC / Data intelligence</span><span>Connected</span></div>
              <div className="capability-console__chart" aria-hidden="true">
                <div className="chart-axis"><i /><i /><i /><i /></div>
                <div className="chart-columns"><i style={{ "--height": "34%" }} /><i style={{ "--height": "48%" }} /><i style={{ "--height": "42%" }} /><i style={{ "--height": "66%" }} /><i style={{ "--height": "59%" }} /><i style={{ "--height": "82%" }} /><i style={{ "--height": "92%" }} /></div>
                <div className="chart-line" />
              </div>
              <div className="capability-console__legend"><span>Market intelligence</span><span>Power BI</span><span>Automation</span><span>Cloud</span></div>
            </div>
          </div>
        </section>

        <section className="projects section-dark" id="projects" aria-labelledby="projects-heading">
          <div className="container">
            <SectionTitle eyebrow="Projects" title="Data workflows built for business use." copy="Explore a delivered end-to-end solution that connects data preparation, Business Intelligence, automation and presentation." tone="light" titleId="projects-heading" />
            <div className="projects__grid">
              {projects.filter((project) => project.featured).map((project, index) => (
                <ProjectCard
                  index={index}
                  key={project.slug}
                  onExplore={navigate}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>
        <AboutTeaser />

        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
