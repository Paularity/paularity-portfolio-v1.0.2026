import Image from "next/image";
import { PHILOSOPHY, PHOTO_ROLES, PROFILE } from "@/lib/content";
import { Section } from "./Section";
import { Compass } from "lucide-react";

export function Philosophy() {
  return (
    <Section
      eyebrow="The engineer behind the code"
      title={
        <>
          A short note on
          <br />
          my engineering philosophy
        </>
      }
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.05fr_1fr] md:gap-8">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border-soft bg-card md:aspect-auto">
          <div className="pointer-events-none absolute inset-0 red-glow-soft" />
          <Image
            src={PHOTO_ROLES.philosophy}
            alt={`${PROFILE.displayName} — at work`}
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover object-center grayscale contrast-[1.05] brightness-95 [mix-blend-mode:luminosity]"
          />
          <div className="pointer-events-none absolute inset-0 bg-red/[0.08] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-black/20" />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-widest text-fg-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              Manifesto
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
            <div className="min-w-0 rounded-xl border border-white/10 bg-black/45 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-fg-muted backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="text-fg-dim">Heading</span>
                <span className="font-semibold text-fg">090°</span>
                <span className="text-fg-dim">·</span>
                <span className="text-fg-dim">Alt</span>
                <span className="font-semibold text-fg">FL 320</span>
              </div>
              <div className="mt-1 flex items-end gap-[3px] text-fg-dim">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className={`inline-block w-px ${
                      i % 4 === 0 ? "h-2 bg-fg-muted" : "h-1 bg-fg-dim"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-red/40 bg-black/50 px-3 py-1.5 text-[11px] uppercase tracking-widest text-fg backdrop-blur">
              <Compass size={13} strokeWidth={1.75} className="text-red" />
              On course
            </div>
          </div>
        </div>

        <article className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border-soft bg-card p-8 md:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red/10 blur-3xl" />

          <div className="relative">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-fg md:text-3xl">
              {PHILOSOPHY.lede}
            </p>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-fg-muted md:text-base">
              {PHILOSOPHY.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="relative mt-8 flex items-center gap-3 border-t border-white/5 pt-6 text-sm">
            <span className="h-8 w-1 rounded-full bg-red" />
            <div>
              <div className="font-medium text-fg">{PROFILE.displayName}</div>
              <div className="text-xs text-fg-muted">
                {PROFILE.title} · {PROFILE.location}
              </div>
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}
