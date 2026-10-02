"use client";

import Link from "next/link";
import { NAV, PROFILE } from "@/lib/content";

export function Nav() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 flex justify-center pt-5 md:pt-6">
      <nav className="pointer-events-auto flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/40 py-2 pl-3 pr-2 backdrop-blur-md md:py-2.5">
        <Link
          href="#top"
          className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium text-fg"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          {PROFILE.displayName.split(" ")[0]}{" "}
          <span className="text-fg-muted">Decembrana</span>
        </Link>

        <ul className="hidden items-center gap-1 text-sm text-fg-muted md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-1.5 transition hover:bg-white/5 hover:text-fg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${PROFILE.email}`}
          className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </div>
  );
}
