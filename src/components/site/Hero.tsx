import Image from "next/image";
import { HERO, PHOTO_ROLES, PROFILE } from "@/lib/content";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-70" />
      <div className="pointer-events-none absolute -right-40 -top-24 h-[680px] w-[680px] red-glow blur-[6px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-12 md:px-8">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-fg-muted backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red" />
            {HERO.eyebrow}
          </div>

          <h1 className="font-display text-5xl leading-[0.98] tracking-[-0.02em] text-fg md:text-[64px] lg:text-[72px]">
            {HERO.headingLines.map((line, i) => (
              <span key={i}>
                <span
                  className={
                    line.weight === "bold" ? "font-semibold" : "font-light"
                  }
                >
                  {line.text}
                </span>
                {i < HERO.headingLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-fg-muted">
            {HERO.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Mail size={15} strokeWidth={2} /> Let&apos;s Talk
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-fg transition hover:bg-white/10"
            >
              View Projects <ArrowDown size={15} strokeWidth={2} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-fg-dim">
            <div>
              <div className="text-lg font-semibold text-fg">9<span className="text-red">+</span></div>
              <div>years in command</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="text-lg font-semibold text-fg">4<span className="text-red">yrs</span></div>
              <div>at Blackfort PH</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="text-lg font-semibold text-fg">6</div>
              <div>industries served</div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-md md:mx-0 md:h-[720px] md:max-w-none lg:h-[820px]">
          <div className="pointer-events-none absolute inset-0 red-glow blur-[2px]" />
          <div className="pointer-events-none absolute inset-0 grid-overlay opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
          <div className="relative h-full w-full">
            <Image
              src={PHOTO_ROLES.hero}
              alt={`${PROFILE.displayName} — portrait`}
              fill
              priority
              sizes="(min-width: 1024px) 720px, (min-width: 768px) 620px, 90vw"
              className="object-contain object-bottom grayscale contrast-[1.05] [mix-blend-mode:luminosity] drop-shadow-[0_30px_80px_rgba(220,38,38,0.35)] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-red/[0.08] mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
