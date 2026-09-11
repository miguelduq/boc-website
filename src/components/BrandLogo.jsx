export function BrandLogo({ compact = false }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="/#home">
      <span className="brand__mark" aria-hidden="true"><img src="/boc-logo.png" alt="" /></span>
      <span className="brand__wordmark"><strong>Birds On Cloud</strong><small>BoC</small></span>
      <span className="sr-only">Birds On Cloud — Home</span>
    </a>
  );
}

