import { ArrowUp } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top"><BrandLogo /><p>Business Intelligence · Process Automation · Cloud Computing</p><a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={18} /></a></div>
      <div className="container site-footer__bottom"><p>© {new Date().getFullYear()} Birds On Cloud. All rights reserved.</p><p>We turn data into strategic intelligence.</p></div>
    </footer>
  );
}

