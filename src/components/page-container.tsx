import { cn } from "@/lib/utils";

type PageWidth = "narrow" | "default" | "wide";

const WIDTH: Record<PageWidth, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
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
        "container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20",
        WIDTH[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
