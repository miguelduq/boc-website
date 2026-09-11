import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import { contacts } from "../data/siteData";

export function CTA() {
  return (
    <section className="contact section-dark" id="contact" aria-labelledby="contact-title">
      <div className="contact__pattern" aria-hidden="true" />
      <div className="container contact__layout">
        <div data-reveal><p className="eyebrow eyebrow--light">Contact</p><h2 id="contact-title">Let’s turn your data into a clearer next move.</h2></div>
        <div className="contact__aside" data-reveal><p>Tell us where your data, processes or technology need to work better.</p><a className="button button--lime" href={`mailto:${contacts.email}`}>Start a conversation <ArrowUpRight size={18} /></a></div>
      </div>
      <div className="container contact-links" data-reveal>
        <a href={`mailto:${contacts.email}`}><Mail size={18} /><span>Email</span><strong>{contacts.email}</strong></a>
        <a href={contacts.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span>LinkedIn</span><strong>birds-on-cloud</strong></a>
        <a href={contacts.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /><span>Instagram</span><strong>@birdsoncloud</strong></a>
      </div>
    </section>
  );
}

