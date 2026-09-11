import { ArrowDown } from "lucide-react";

export function ProcessDiagram({ steps, label }) {
  return (
    <ol className="process-diagram" aria-label={label}>
      {steps.map((step, index) => (
        <li key={step.title}>
          <span className="process-diagram__index">{String(index + 1).padStart(2, "0")}</span>
          <div><h3>{step.title}</h3><p>{step.copy}</p></div>
          {index < steps.length - 1 && <ArrowDown aria-hidden="true" className="process-diagram__arrow" size={18} />}
        </li>
      ))}
    </ol>
  );
}
