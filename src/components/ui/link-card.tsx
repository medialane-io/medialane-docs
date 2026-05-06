import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type LinkCardProps = {
  href: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  eyebrow?: string;
  external?: boolean;
  className?: string;
  compact?: boolean;
  showArrow?: boolean;
};

export function LinkCard({
  href,
  title,
  description,
  icon: Icon,
  eyebrow,
  external = false,
  className,
  compact = false,
  showArrow = false,
}: LinkCardProps) {
  const content = (
    <div className={cn("group bento-cell hover:border-primary/40 transition-colors h-full", compact ? "p-4" : "p-5", className)}>
      <div className="flex items-start gap-4">
        {Icon && (
          <div className={cn("rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors", compact ? "h-9 w-9" : "h-10 w-10")}>
            <Icon className={cn("text-primary", compact ? "h-4 w-4" : "h-5 w-5")} />
          </div>
        )}
        <div className="space-y-1 flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="font-semibold text-sm">{title}</p>
              {eyebrow && <p className="text-xs font-mono text-primary/70 mt-1">{eyebrow}</p>}
            </div>
            {external && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0" />}
            {showArrow && <ArrowRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link href={href}>{content}</Link>
  );
}

