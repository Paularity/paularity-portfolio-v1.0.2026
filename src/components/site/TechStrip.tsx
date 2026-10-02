import { STACK } from "@/lib/content";
import { TechIcon } from "./TechIcon";

export function TechStrip() {
  const doubled = [...STACK, ...STACK];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-bg-soft py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bg-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bg-soft to-transparent" />
      <div className="marquee flex w-max items-center gap-14 whitespace-nowrap text-[15px] font-medium tracking-tight text-fg-muted">
        {doubled.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="inline-flex items-center gap-2 transition hover:text-fg"
          >
            <TechIcon name={s} size={24} />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
