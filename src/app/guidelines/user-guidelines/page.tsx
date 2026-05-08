import type { Metadata } from "next";
import { User, ShieldCheck, AlertTriangle, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "User Guidelines | Medialane",
  description: "How to use the Medialane platform responsibly — account rules, content standards, and best practices.",
  openGraph: {
    title: "User Guidelines | Medialane",
    description: "How to use the Medialane platform responsibly — account rules, content standards, and best practices.",
    url: "https://docs.medialane.io/guidelines/user-guidelines",
  },
  twitter: {
    title: "User Guidelines | Medialane",
    description: "How to use the Medialane platform responsibly — account rules, content standards, and best practices.",
  },
};

const SECTIONS = [
  {
    icon: User,
    title: "Account Responsibility",
    items: [
      "You are responsible for all activity that occurs under your account.",
      "Keep your credentials (PIN, passkey) secure and do not share them.",
      "You may hold only one account per individual or entity. Duplicate accounts used to circumvent bans are prohibited.",
      "Accounts showing signs of bot activity or automated abuse may be suspended without notice.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Acceptable Use",
    items: [
      "Use Medialane only for lawful purposes and in accordance with these guidelines.",
      "Only mint or list IP to which you hold the rights. Plagiarism and copyright infringement are violations.",
      "Representations made in NFT metadata (title, description, attributes) must be accurate and not misleading.",
      "Pricing must reflect genuine intent to sell. Wash trading, price manipulation, and coordinated pump schemes are prohibited.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Prohibited Activities",
    items: [
      "Minting, listing, or promoting counterfeit, plagiarized, or stolen intellectual property.",
      "Engaging in wash trading or any activity designed to create artificial volume or price discovery.",
      "Using the platform to launder funds or circumvent financial regulations.",
      "Exploiting platform bugs for financial gain without responsible disclosure.",
      "Automating interactions with the platform (bots, scrapers) without explicit API permission.",
    ],
  },
  {
    icon: Lock,
    title: "Session Keys & Security",
    items: [
      "Session keys are valid for a limited time window (typically 6 hours) for your protection.",
      "Never share a session key or authorize sessions on devices you do not control.",
      "If you suspect unauthorized access to your account, revoke all session keys immediately via Portfolio → Settings.",
      "Medialane will never ask for your seed phrase, private key, or passkey via email or chat.",
    ],
  },
];

export default function UserGuidelinesPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Users</span>
        </div>
        <h2 className="text-2xl font-bold">User Guidelines</h2>
        <p className="text-muted-foreground leading-relaxed">
          These guidelines define the standards for using the Medialane platform. They exist alongside
          our Terms of Use and apply to all users — creators, collectors, and developers.
        </p>
        <p className="text-xs text-muted-foreground">Last updated: January 2025</p>
      </div>

      <div className="space-y-6">
        {SECTIONS.map(({ icon: Icon, title, items }) => (
          <div key={title} className="bento-cell p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <ul className="space-y-2">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bento-cell p-5 text-sm text-muted-foreground leading-relaxed">
        Violations of these guidelines may result in content removal, account suspension, or permanent ban.
        If you believe an action was taken in error, email <a href="mailto:support@medialane.io" className="text-primary hover:underline">support@medialane.io</a> with your account details and a description of the situation.
      </div>

    </div>
  );
}
