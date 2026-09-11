export function SectionTitle({ eyebrow, title, copy, tone = "dark", titleId }) {
  return (
    <div className={`section-title section-title--${tone}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-title__grid"><h2 id={titleId}>{title}</h2>{copy && <p>{copy}</p>}</div>
    </div>
  );
}
