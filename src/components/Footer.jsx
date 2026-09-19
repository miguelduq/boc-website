import { ArrowUp } from "lucide-react";
import { brand } from "../data/siteData";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top"><BrandLogo /><p>Data & BI · Data Engineering · Automation · Market Intelligence</p><a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={18} /></a></div>
      <div className="container site-footer__bottom"><p>© {new Date().getFullYear()} Birds On Cloud · {brand.location}</p><p>{brand.tagline}</p></div>
    </footer>
  );
}
