export function ValueCard({ value }) {
  return <article className="value-card" data-reveal><span>{value.number}</span><h3>{value.title}</h3><p>{value.description}</p></article>;
}

