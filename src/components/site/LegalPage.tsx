import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, lastUpdated, children }: Props) {
  return (
    <main className="relative min-h-screen pb-24 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="pointer-events-none absolute -left-40 -top-24 h-[520px] w-[520px] red-glow-soft blur-[6px]" />

      <div className="relative mx-auto w-full max-w-3xl px-6 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-fg-muted transition hover:bg-white/10 hover:text-fg"
        >
          <ArrowLeft size={13} strokeWidth={2} /> Back to home
        </Link>

        <div className="mt-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-fg-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            {eyebrow}
          </div>

          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            {title}
          </h1>

          <p className="mt-3 text-sm text-fg-dim">Last updated: {lastUpdated}</p>
        </div>

        <div className="legal-prose mt-12 space-y-10 text-[15px] leading-relaxed text-fg-muted">
          {children}
        </div>
      </div>
    </main>
  );
}
