import { cn } from "@/lib/utils";

/**
 * Shared page container. Every top-level page and section layout should
 * wrap its content in <PageContainer> so inner spacing — horizontal
 * gutter, vertical rhythm, and max content width — stays consistent
 * across docs.medialane.io.
 *
 * Width presets:
 *   - narrow  (max-w-3xl) — long-form lists, link directories
 *   - default (max-w-5xl) — most marketing + hub pages (home, about, apps)
 *   - wide    (max-w-6xl) — section layouts (/docs, /learn, /guidelines, /dao, /contact)
 *
 * Gutter (px-4 sm:px-6 lg:px-8) matches medialane-io's NavTrigger offset
 * so content edges align with the trigger button on every breakpoint.
 *
 * Pass `space-y-*` (or any other layout-level utilities) via `className`.
 */
type PageWidth = "narrow" | "default" | "wide";

const WIDTH: Record<PageWidth, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
};

interface PageContainerProps {
  children: React.ReactNode;
  width?: PageWidth;
  className?: string;
}

export function PageContainer({ children, width = "default", className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20",
        WIDTH[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
