import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, actions, children, className }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28",
        className,
      )}
    >
      {(eyebrow || title || actions) && (
        <header className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
          <div>
            {eyebrow && (
              <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-fg-dim">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight text-fg md:text-5xl">
                {title}
              </h2>
            )}
          </div>
          {actions && <div className="shrink-0">{actions}</div>}
        </header>
      )}
      {children}
    </section>
  );
}
