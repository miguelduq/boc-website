import { ArrowDown } from "lucide-react";

function FlowColumn({ eyebrow, title, steps, tone }) {
  return (
    <article className={"before-after__column before-after__column--" + tone}>
      <p>{eyebrow}</p>
      <h3>{title}</h3>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span>{step}</span>
            {index < steps.length - 1 && <ArrowDown aria-hidden="true" size={16} />}
          </li>
        ))}
      </ol>
    </article>
  );
}

export function BeforeAfter({ before, after }) {
  return (
    <div className="before-after">
      <FlowColumn eyebrow="Previous workflow" title="Before" steps={before} tone="before" />
      <div className="before-after__shift" aria-hidden="true"><span>Structured transformation</span></div>
      <FlowColumn eyebrow="Automated workflow" title="After" steps={after} tone="after" />
    </div>
  );
}
