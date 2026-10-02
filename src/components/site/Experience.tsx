import Image from "next/image";
import { EXPERIENCE, PHOTO_ROLES, PROFILE } from "@/lib/content";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Professional
          <br />
          milestones & impact
        </>
      }
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border-soft bg-card">
          <div className="pointer-events-none absolute inset-0 red-glow-soft" />
          <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
          <Image
            src={PHOTO_ROLES.experience}
            alt={`${PROFILE.displayName} — professional portrait`}
            fill
            sizes="(min-width: 768px) 480px, 90vw"
            className="object-cover object-top grayscale contrast-[1.05] brightness-95 [mix-blend-mode:luminosity]"
          />
          <div className="pointer-events-none absolute inset-0 bg-red/[0.10] mix-blend-overlay" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-fg-dim">
              Currently
            </div>
            <div className="mt-1 text-lg font-semibold text-fg">
              {PROFILE.title}
            </div>
            <div className="text-sm text-fg-muted">Blackfort PH · Since Oct 2025</div>
          </div>
        </div>

        <ol className="relative space-y-6 border-l border-white/10 pl-6">
          {EXPERIENCE.map((role, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-red ring-4 ring-red/15" />
              <div className="text-[11px] uppercase tracking-[0.18em] text-fg-dim">
                {role.company}
                {role.location ? ` · ${role.location}` : ""}
              </div>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold text-fg md:text-lg">
                  {role.title}
                </h3>
                <span className="text-xs text-fg-muted">({role.period})</span>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-muted">
                {role.blurb}
              </p>
              {role.stack && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {role.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] uppercase tracking-wider text-fg-dim"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
