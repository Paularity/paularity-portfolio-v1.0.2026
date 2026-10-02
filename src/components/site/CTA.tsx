"use client";

import { PROFILE } from "@/lib/content";
import { useState, type FormEvent } from "react";

export function CTA() {
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const to = PROFILE.email;
    const subject = "Let's build something reliable";
    const body = email
      ? `Hi Christian,\n\nMy email is ${email}. I'd love to talk about a project.\n`
      : "";
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-8 md:pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-red/30 bg-gradient-to-br from-red-deep via-red to-red-deep p-10 md:p-16">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Let&apos;s build something reliable.
          </h3>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            Drop your email — I reply within one business day.
          </p>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-lg items-center gap-2 rounded-full border border-white/20 bg-black/25 p-1.5 backdrop-blur"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@company.com"
              className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Let&apos;s Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
