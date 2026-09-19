import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AboutPage } from "./components/AboutPage";
import { AboutTeaser } from "./components/AboutTeaser";
import { Certifications } from "./components/Certifications";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProblemSection } from "./components/ProblemSection";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectDetail } from "./components/ProjectDetail";
import { ProjectsPage } from "./components/ProjectsPage";
import { SectionTitle } from "./components/SectionTitle";
import { ServiceCard } from "./components/ServiceCard";
import { Statistics } from "./components/Statistics";
import { TrustedBrands } from "./components/TrustedBrands";
import { WhyBoC } from "./components/WhyBoC";
import { projects } from "./data/projectsData";
import { services } from "./data/siteData";

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  const projectMatch = pathname.match(/^\/projects\/([^/]+)\/?$/);
  const isAboutPage = /^\/about\/?$/.test(pathname);
  const isProjectsPage = /^\/projects\/?$/.test(pathname);
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
        ? "Who we are | Birds On Cloud"
        : isProjectsPage
          ? "Projects | Birds On Cloud"
        : "Birds On Cloud | Technology & Data Consulting";
  }, [activeProject, isAboutPage, isProjectsPage]);

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

  if (isProjectsPage) {
    return (
      <>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">
          <ProjectsPage onNavigate={navigate} />
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
        <ProblemSection />
        <Statistics />

        <section className="services section-light" id="services" aria-labelledby="services-heading">
          <div className="container">
            <SectionTitle eyebrow="Services" title="Five ways we raise your data maturity." copy="Consulting in technology and data, organized around the problems we solve, not around a single tool." titleId="services-heading" />
            <div className="services__grid">
              {services.map((service, index) => <ServiceCard key={service.title} service={service} featured={index === services.length - 1} />)}
            </div>
          </div>
        </section>

        <WhyBoC />

        <section className="projects section-dark" id="projects" aria-labelledby="projects-heading">
          <div className="container">
            <SectionTitle eyebrow="Projects" title="Real workflows, delivered end to end." copy="See how a manual, file-dependent routine became a structured flow connecting data engineering, Business Intelligence and automation." tone="light" titleId="projects-heading" />
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
            <a className="text-link text-link--light projects__all" href="/projects" onClick={(event) => navigate(event, "/projects")}>View all projects <ArrowRight size={17} /></a>
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
