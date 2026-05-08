import type { Metadata } from "next";
import Link from "next/link";
import { Users, User, FileText, Eye, Scale, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guidelines | Medialane",
  description: "Community standards, user policies, terms of use, privacy policy, and compliance guidelines for the Medialane platform.",
  openGraph: {
    title: "Guidelines | Medialane",
    description: "Community standards, user policies, terms of use, privacy policy, and compliance guidelines for the Medialane platform.",
    url: "https://docs.medialane.io/guidelines",
  },
  twitter: {
    title: "Guidelines | Medialane",
    description: "Community standards, user policies, terms of use, privacy policy, and compliance guidelines for the Medialane platform.",
  },
};

const SECTIONS = [
  {
    href: "/guidelines/community",
    icon: Users,
    title: "Community Guidelines",
    description: "Standards for participation in the Medialane community — respectful interaction, content moderation, and how violations are handled.",
  },
  {
    href: "/guidelines/user-guidelines",
    icon: User,
    title: "User Guidelines",
    description: "How to use the Medialane platform responsibly — account rules, content standards, prohibited activities, and best practices.",
  },
  {
    href: "/guidelines/terms",
    icon: FileText,
    title: "Terms of Use",
    description: "The legal agreement between you and Medialane governing your access to and use of the platform and services.",
  },
  {
    href: "/guidelines/privacy",
    icon: Eye,
    title: "Privacy Policy",
    description: "How Medialane collects, uses, and protects your personal data — GDPR alignment, data retention, and your rights.",
  },
  {
    href: "/guidelines/compliance",
    icon: Scale,
    title: "Compliance",
    description: "KYC/AML policy, securities regulations, IP law alignment (Berne Convention, DMCA), sanctions screening, and data protection.",
  },
];

export default function GuidelinesPage() {
  return (
    <div className="space-y-10">
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        Medialane is committed to being a safe, fair, and transparent platform. These
        documents govern how we operate and how community members are expected to participate.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SECTIONS.map(({ href, icon: Icon, title, description }) => (
          <Link
            key={href}
            href={href}
            className="group bento-cell p-5 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-sm">{title}</p>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bento-cell p-5 text-sm text-muted-foreground leading-relaxed">
        <strong className="text-foreground">Questions?</strong> If you have questions about any of these documents, please{" "}
        <Link href="/contact" className="text-primary hover:underline">contact us</Link>. For copyright or DMCA notices,
        email <a href="mailto:dmca@medialane.io" className="text-primary hover:underline">dmca@medialane.io</a>.
      </div>
    </div>
  );
}
