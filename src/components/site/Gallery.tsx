import { PRACTICES, type Practice } from "@/lib/content";
import { Section } from "./Section";
import {
  Hammer,
  Rocket,
  Eye,
  Bug,
  Compass,
  Recycle,
  BookOpen,
  Users,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<Practice["icon"], LucideIcon> = {
  hammer: Hammer,
  rocket: Rocket,
  eye: Eye,
  bug: Bug,
  compass: Compass,
  recycle: Recycle,
  book: BookOpen,
  users: Users,
  package: PackageCheck,
};

export function Gallery() {
  return (
    <Section
      id="practice"
      eyebrow="Practice"
      title={
        <>
          The habits behind
          <br />
          every ship.
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRACTICES.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border-soft bg-card p-6 transition hover:border-white/15 md:p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red/12 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-fg transition group-hover:border-red/40 group-hover:text-red">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-fg">
                      {p.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-fg-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {p.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
