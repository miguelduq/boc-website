import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const links = [["What we solve", "/#solve"], ["Services", "/#services"], ["Projects", "/projects"], ["Who we are", "/about"], ["Contact", "/#contact"]];

const isCurrent = (href) => {
  if (href.includes("#")) return false;
  const path = window.location.pathname.replace(/\/$/, "");
  return path === href || path.startsWith(href + "/");
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container navbar">
        <BrandLogo compact />
        <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="primary-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"} onClick={() => setIsOpen((current) => !current)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`primary-nav ${isOpen ? "primary-nav--open" : ""}`} id="primary-navigation" aria-label="Primary navigation">
          <ul>{links.map(([label, href]) => <li key={href}><a aria-current={isCurrent(href) ? "page" : undefined} href={href} onClick={closeMenu}>{label}</a></li>)}</ul>
          <a className="nav-cta" href="/#contact" onClick={closeMenu}>Start a conversation</a>
        </nav>
      </div>
    </header>
  );
}

