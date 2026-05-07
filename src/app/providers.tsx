"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Link from "next/link";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { TranslateButton } from "@/components/translate-button";
import { Aurora } from "@/components/ui/aurora";
import { SidebarInset, SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { MedialaneLogo } from "@/components/brand/medialane-logo";

function MobileIconTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <button onClick={toggleSidebar} className="md:hidden flex items-center focus-visible:outline-none">
      <img src="/icon.png" alt="Medialane" className="h-5 w-5 opacity-90" />
    </button>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <div className="absolute top-3 left-3 z-50 flex items-center gap-1.5">
          <SidebarTrigger />
          <MobileIconTrigger />
        </div>
        <main className="flex-1 bg-background overflow-x-hidden">{children}</main>
        <footer className="bg-background border-t border-border/60 px-6 py-8 mt-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MedialaneLogo />
            </div>
            <nav className="flex items-center gap-4 flex-wrap justify-center">
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/apps" className="hover:text-foreground transition-colors">Apps</Link>
              <Link href="/learn" className="hover:text-foreground transition-colors">Learn</Link>
              <Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link>
              <Link href="/guidelines" className="hover:text-foreground transition-colors">Guidelines</Link>
              <Link href="/support" className="hover:text-foreground transition-colors">Support</Link>
              <Link href="/dao" className="hover:text-foreground transition-colors">DAO</Link>
              <Link href="/links" className="hover:text-foreground transition-colors">Links</Link>
              <a href="https://x.com/medialane_io" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X</a>
            </nav>
            <p className="text-xs">© {new Date().getFullYear()} Medialane DAO</p>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <Aurora />
      <Shell>{children}</Shell>
      <TranslateButton />
      <Toaster richColors position="bottom-right" />
    </ThemeProvider>
  );
}
