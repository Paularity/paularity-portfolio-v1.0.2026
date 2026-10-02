import Link from "next/link";
import { NAV, PROFILE } from "@/lib/content";
import { Mail, ExternalLink, Globe } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-border-soft bg-bg-soft pt-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-fg-dim">
              Contact
            </div>
            <div className="mt-2 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
              {PROFILE.displayName}
            </div>
            <div className="mt-1 text-sm text-fg-muted">
              {PROFILE.title} · {PROFILE.location}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-fg transition hover:bg-white/10"
            >
              <Mail size={14} strokeWidth={2} /> Email
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-fg transition hover:bg-white/10"
            >
              <ExternalLink size={14} strokeWidth={2} /> LinkedIn
            </a>
            <a
              href={PROFILE.legacySite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-fg transition hover:bg-white/10"
            >
              <Globe size={14} strokeWidth={2} /> v0.2.7
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-border-soft py-6 text-xs text-fg-dim md:flex-row md:items-center">
          <ul className="flex flex-wrap gap-4">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-fg">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div>© {year} Christian Paul Decembrana. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="wordmark relative mt-6 select-none overflow-hidden text-center"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
        <div
          className="bg-gradient-to-b from-white to-white/40 bg-clip-text font-display font-black text-transparent"
          style={{ fontSize: "clamp(72px, 20vw, 260px)" }}
        >
          PAULARITY
        </div>
      </div>
    </footer>
  );
}
