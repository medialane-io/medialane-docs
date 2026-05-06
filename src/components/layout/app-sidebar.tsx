"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  BookOpen, FileCode2, LifeBuoy, Info, Search,
  Sun, Moon, Zap, ChevronRight, ExternalLink,
  Image, Rocket, Store, Award, Package, Layers,
  GitBranch, Globe, Shield, FileText, Lock, Code2,
  Users, Scale, Vote, Coins,
  LayoutGrid, Link2, Building2, Scroll, Eye, User, FileCheck,
} from "lucide-react";
import { DOCS_NAV } from "@/lib/docs-nav";
import { CANONICAL } from "@/lib/canonical";
import { cn } from "@/lib/utils";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
  SidebarSeparator, useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible, CollapsibleContent, CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MedialaneLogo } from "../brand/medialane-logo";
import { MedialaneIcon } from "../brand/medialane-icon";

// ── Sub-menu data ─────────────────────────────────────────────────────────────

const LEARN_SUB = [
  { href: "/learn/nft",                    label: "What is an NFT?",          icon: Image },
  { href: "/learn/blockchain",             label: "Blockchain",               icon: Globe },
  { href: "/learn/zero-knowledge",         label: "Zero Knowledge",           icon: Lock },
  { href: "/learn/programmable-ip",        label: "Programmable IP",          icon: Code2 },
  { href: "/learn/tokenization",           label: "Tokenization",             icon: Coins },
  { href: "/learn/creator-launchpad",      label: "Creator Launchpad",        icon: Rocket },
  { href: "/learn/marketplace",            label: "Marketplace",              icon: Store },
  { href: "/learn/pop-protocol",           label: "POP Protocol",             icon: Award },
  { href: "/learn/collection-drop",        label: "Collection Drop",          icon: Package },
  { href: "/learn/ip-collection-1155",     label: "IP Collection 1155",       icon: Layers },
  { href: "/learn/remix",                  label: "Remix & Derivatives",      icon: GitBranch },
  { href: "/learn/protect-your-ip",        label: "Protect Your IP",          icon: Shield },
  { href: "/learn/programmable-licensing", label: "Programmable Licensing",   icon: FileText },
];

const GUIDELINES_SUB = [
  { href: "/guidelines/community",       label: "Community",       icon: Users },
  { href: "/guidelines/user-guidelines", label: "User Guidelines", icon: User },
  { href: "/guidelines/terms",           label: "Terms of Use",    icon: FileText },
  { href: "/guidelines/privacy",         label: "Privacy Policy",  icon: Eye },
  { href: "/guidelines/compliance",      label: "Compliance",      icon: Scale },
];

const DAO_SUB = [
  { href: "/dao",              label: "About DAO",          icon: Building2 },
  { href: "/dao/constitution", label: "Constitution",       icon: Scroll },
  { href: "/dao/governance",   label: "Governance Charter", icon: Vote },
  { href: "/dao/token",        label: "MDLN Token",         icon: Coins },
  { href: "/dao/airdrop",      label: CANONICAL.creatorAirdropName,  icon: Award },
];

// ── Collapsible nav group ─────────────────────────────────────────────────────

interface CollapsibleNavItemProps {
  label: string;
  icon: React.ElementType;
  sub: { href: string; label: string; icon: React.ElementType }[];
  defaultOpen?: boolean;
  tooltip?: string;
  onClose: () => void;
}

function CollapsibleNavItem({
  label, icon: Icon, sub, defaultOpen = false, tooltip, onClose,
}: CollapsibleNavItemProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(defaultOpen);
  const { state, isMobile, setOpen: setSidebarOpen } = useSidebar();
  const collapsed = !isMobile && state === "collapsed";

  const isAnySubActive = sub.some(
    (s) => pathname === s.href || pathname?.startsWith(s.href + "/")
  );

  if (collapsed) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          tooltip={tooltip ?? label}
          isActive={isAnySubActive}
          onClick={() => { setSidebarOpen(true); setOpen(true); }}
        >
          <Icon />
          <span>{label}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={tooltip ?? label} isActive={isAnySubActive && !open}>
            <Icon />
            <span>{label}</span>
            <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {sub.map(({ href, label: subLabel, icon: SubIcon }) => {
              const active = pathname === href || pathname?.startsWith(href + "/");
              return (
                <SidebarMenuSubItem key={href}>
                  <SidebarMenuSubButton asChild isActive={active} onClick={onClose}>
                    <Link href={href}>
                      <SubIcon className="h-3.5 w-3.5" />
                      {subLabel}
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              );
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

// ── Theme toggle ──────────────────────────────────────────────────────────────

function ThemeToggleItem() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        tooltip={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
        <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────────────

export function AppSidebar() {
  const pathname = usePathname();
  const { setOpen, setOpenMobile, isMobile, state } = useSidebar();

  const closeSidebar = () => {
    if (isMobile) setOpenMobile(false);
    else setOpen(false);
  };

  const onLearn      = !!pathname?.startsWith("/learn");
  const onDocs       = !!pathname?.startsWith("/docs");
  const onGuidelines = !!pathname?.startsWith("/guidelines");
  const onDAO        = !!pathname?.startsWith("/dao");

  return (
    <Sidebar collapsible="icon">

      {/* Brand */}
      <SidebarMenu className="p-2">
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild onClick={closeSidebar}>
            {isMobile || state === "expanded" ? <MedialaneLogo /> : <MedialaneIcon />}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarContent>

        {/* ── Start ─────────────────────────────────────────── */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/"} tooltip="Start" onClick={closeSidebar}>
                <Link href="/"><Zap /><span>Start</span></Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/about"} tooltip="About" onClick={closeSidebar}>
                <Link href="/about"><Info /><span>About</span></Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/apps"} tooltip="Apps" onClick={closeSidebar}>
                <Link href="/apps"><LayoutGrid /><span>Apps</span></Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* ── Learn ─────────────────────────────────────────── */}
        <SidebarGroup>
          <SidebarMenu>
            <CollapsibleNavItem
              label="Learn"
              icon={BookOpen}
              sub={LEARN_SUB}
              defaultOpen={onLearn}
              tooltip="Learn"
              onClose={closeSidebar}
            />
          </SidebarMenu>
        </SidebarGroup>

        {/* ── Docs ──────────────────────────────────────────── */}
        <SidebarGroup>
          <SidebarMenu>
            <CollapsibleNavItem
              label="Docs"
              icon={FileCode2}
              sub={DOCS_NAV}
              defaultOpen={onDocs}
              tooltip="Docs"
              onClose={closeSidebar}
            />
          </SidebarMenu>
        </SidebarGroup>

        {/* ── Guidelines ────────────────────────────────────── */}
        <SidebarGroup>
          <SidebarMenu>
            <CollapsibleNavItem
              label="Guidelines"
              icon={FileCheck}
              sub={GUIDELINES_SUB}
              defaultOpen={onGuidelines}
              tooltip="Guidelines"
              onClose={closeSidebar}
            />
          </SidebarMenu>
        </SidebarGroup>

        {/* ── Support ───────────────────────────────────────── */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/support"} tooltip="Support" onClick={closeSidebar}>
                <Link href="/support"><LifeBuoy /><span>Support</span></Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* ── DAO ───────────────────────────────────────────── */}
        <SidebarGroup>
          <SidebarMenu>
            <CollapsibleNavItem
              label="DAO"
              icon={Building2}
              sub={DAO_SUB}
              defaultOpen={onDAO}
              tooltip="DAO"
              onClose={closeSidebar}
            />
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        {/* ── Utilities ─────────────────────────────────────── */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/links"} tooltip="Links" onClick={closeSidebar}>
                <Link href="/links"><Link2 /><span>Links</span></Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/search"} tooltip="Knowledge Index" onClick={closeSidebar}>
                <Link href="/search"><Search /><span>Knowledge Index</span></Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <ThemeToggleItem />
          </SidebarMenu>
        </SidebarGroup>

      </SidebarContent>

      {/* ── Footer: back to app ───────────────────────────────── */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Open Medialane app"
              className={cn(
                !isMobile && state === "collapsed" ? "justify-center" : ""
              )}
            >
              <a
                href="https://medialane.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                <span>medialane.io</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

    </Sidebar>
  );
}
