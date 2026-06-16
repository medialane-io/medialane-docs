"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Link from "next/link";
import { Menu } from "lucide-react";
import { NavCommandMenu, useNavCommandMenu } from "@medialane/ui";
import { NAV_COMMANDS } from "@/lib/nav-commands";
import { NavThemeToggle } from "@/components/nav-theme-toggle";
import { TranslateButton } from "@/components/translate-button";
import { Aurora } from "@/components/ui/aurora";
import { MedialaneLogo } from "@/components/brand/medialane-logo";

/**
 * Trigger button at the top-left that opens the command menu.
 * Identical pattern to medialane-io's NavTrigger so muscle memory carries
 * between docs.medialane.io and medialane.io.
 */
function NavTrigger() {
  const { open } = useNavCommandMenu();
  return (
    <button
      onClick={open}
      className="flex items-center gap-1.5 focus-visible:outline-none group"
      aria-label="Open navigation"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icon.png" alt="Medialane" className="h-8 w-8 opacity-90 group-hover:opacity-100 transition-opacity" />
      <Menu className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
    </button>
  );
}

/**
 * App shell — full-width canvas, no sidebar. Navigation lives entirely in
 * the cmdk-powered NavCommandMenu (open via the trigger or ⌘K). Migrated
 * from the previous SidebarProvider/AppSidebar pattern 2026-05-27 to
 * match medialane-io.
 */
function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavCommandMenu commands={NAV_COMMANDS} footerSlot={<NavThemeToggle />} />
      <div className="relative min-h-screen flex flex-col bg-background">
        <div className="fixed top-4 left-4 sm:left-6 lg:left-8 z-50 flex items-center gap-1.5">
          <NavTrigger />
        </div>
        <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
        <footer className="bg-background border-t border-border/60 px-6 py-8 mt-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MedialaneLogo />
            </div>
            <nav className="flex items-center gap-4 flex-wrap justify-center">
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/apps" className="hover:text-foreground transition-colors">Apps</Link>
              <Link href="/learn" className="hover:text-foreground transition-colors">Learn</Link>
              <Link href="/dev" className="hover:text-foreground transition-colors">Developers</Link>
              <Link href="/guidelines" className="hover:text-foreground transition-colors">Guidelines</Link>
              <Link href="/support" className="hover:text-foreground transition-colors">Support</Link>
              <Link href="/dao" className="hover:text-foreground transition-colors">DAO</Link>
              <Link href="/links" className="hover:text-foreground transition-colors">Links</Link>
              <a href="https://x.com/medialane_io" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X</a>
            </nav>
            <p className="text-xs">© {new Date().getFullYear()} Medialane DAO</p>
          </div>
        </footer>
      </div>
    </>
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
