import { PILLARS, type Pillar } from "@/lib/content";
import { Section } from "./Section";
import { ShieldCheck, Activity, Target, Layers } from "lucide-react";

const ICONS: Record<Pillar["kind"], typeof ShieldCheck> = {
  reliability: ShieldCheck,
  performance: Activity,
  business: Target,
  cloud: Layers,
};

export function Why() {
  return (
    <Section
      id="partner"
      eyebrow="Why partner with me"
      title={
        <>
          Why partner with me
          <br />
          today and always?
        </>
      }
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {PILLARS.map((p, i) => (
          <PillarCard key={p.title} pillar={p} featured={i === 0} />
        ))}
      </div>
    </Section>
  );
}

function PillarCard({ pillar, featured }: { pillar: Pillar; featured?: boolean }) {
  const Icon = ICONS[pillar.kind];
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-border-soft bg-card p-6 transition hover:border-white/15 md:p-8 ${
        featured ? "md:col-span-1" : ""
      }`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

      <PillarVisual kind={pillar.kind} />

      <div className="relative">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-fg">
          <Icon size={18} strokeWidth={1.75} />
        </div>
        <h3 className="text-lg font-semibold text-fg md:text-xl">
          {pillar.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">
          {pillar.body}
        </p>
      </div>
    </article>
  );
}

function PillarVisual({ kind }: { kind: Pillar["kind"] }) {
  if (kind === "performance") {
    return (
      <svg
        className="pointer-events-none absolute right-0 top-0 h-40 w-2/3 opacity-70"
        viewBox="0 0 400 160"
        fill="none"
      >
        <defs>
          <linearGradient id="wave" x1="0" x2="1">
            <stop offset="0" stopColor="#dc2626" stopOpacity="0" />
            <stop offset="0.5" stopColor="#dc2626" stopOpacity="0.7" />
            <stop offset="1" stopColor="#dc2626" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M0 ${80 + i * 6} Q100 ${20 + i * 10} 200 ${80 + i * 6} T400 ${80 + i * 6}`}
            stroke="url(#wave)"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>
    );
  }
  if (kind === "cloud") {
    return (
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full border border-red/30">
        <div className="absolute inset-4 rounded-full border border-red/25" />
        <div className="absolute inset-8 rounded-full border border-red/20" />
        <div className="absolute inset-12 rounded-full border border-red/15" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
      </div>
    );
  }
  if (kind === "reliability") {
    return (
      <div className="pointer-events-none absolute right-6 top-6 grid grid-cols-3 gap-1.5 opacity-60">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 w-4 rounded-sm ${
              i % 3 === 0 ? "bg-red/50" : "bg-white/10"
            }`}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="pointer-events-none absolute right-6 top-6 flex items-center gap-1 opacity-60">
      <div className="h-8 w-1 rounded-full bg-white/15" />
      <div className="h-12 w-1 rounded-full bg-red/60" />
      <div className="h-6 w-1 rounded-full bg-white/15" />
      <div className="h-10 w-1 rounded-full bg-white/25" />
      <div className="h-14 w-1 rounded-full bg-red/70" />
    </div>
  );
}
