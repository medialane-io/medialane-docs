import type { ReactNode } from "react";
import { Section } from "@/components/docs";

export interface FlowContent {
  title: string;
  lead: string;
  serviceId: string;
  see?: ReactNode;
  gets: string[];
  steps: { title: string; desc: string }[];
  resume: string;
  portalHref: string;
}

export function FlowPage({ content }: { content: FlowContent }) {
  const { title, lead, serviceId, see, gets, steps, resume, portalHref } = content;
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">{lead}</p>
        <p className="text-base text-muted-foreground">
          Service ID:{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">{serviceId}</code>
          {see ? <> {see}</> : null}
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What you get">
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            {gets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="How a run works">
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={step.title} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-base font-semibold text-foreground">
                  {index + 1}. {step.title}
                </p>
                <p className="text-base text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Pick up where you left off">
          <p>{resume}</p>
          <p>
            <a href={portalHref} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Open {title} on the portal →
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}
