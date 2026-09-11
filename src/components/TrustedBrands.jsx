import { LogoMarquee } from "./LogoMarquee";
import { brands } from "../data/credibilityData";

function BrandLogo({ brand }) {
  return (
    <article className="brand-logo" title={brand.logo ? brand.name : brand.logoFile}>
      {brand.logo ? (
        <img
          alt={brand.name}
          draggable="false"
          src={brand.logo}
          style={brand.scale ? { "--brand-logo-scale": brand.scale } : undefined}
        />
      ) : (
        <div className="brand-tile__placeholder">
          <small>Logo placeholder</small>
          <span>{brand.name}</span>
        </div>
      )}
    </article>
  );
}

export function TrustedBrands() {
  return (
    <section className="credibility-strip trusted-brands" aria-labelledby="trusted-brands-title">
      <div className="container credibility-strip__heading">
        <div>
          <h2 id="trusted-brands-title">Trusted Brands</h2>
        </div>
        <p>Brands our team has worked with</p>
      </div>
      <LogoMarquee ariaLabel="Trusted brands. Drag horizontally to browse.">
        {brands.map((brand) => (
          <BrandLogo brand={brand} key={brand.name} />
        ))}
      </LogoMarquee>
    </section>
  );
}
