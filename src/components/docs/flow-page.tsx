import type { ReactNode } from "react";
import { Section } from "@/components/docs";

export interface FlowContent {
  title: string;
  lead: string;
  serviceId: string;
  see?: ReactNode;
  gets: string[];
}

export function FlowPage({ content }: { content: FlowContent }) {
  const { title, lead, serviceId, see, gets } = content;
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
        <Section title="What is included">
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            {gets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
