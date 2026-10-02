import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/content";
import { Section } from "./Section";

const ACCENT: Record<Project["accent"], string> = {
  red: "from-red/40 via-red/10 to-transparent",
  amber: "from-amber-500/35 via-amber-500/10 to-transparent",
  cyan: "from-cyan-500/30 via-cyan-500/10 to-transparent",
  violet: "from-violet-500/30 via-violet-500/10 to-transparent",
};

const DOTS: Record<Project["accent"], string> = {
  red: "bg-red",
  amber: "bg-amber-400",
  cyan: "bg-cyan-400",
  violet: "bg-violet-400",
};

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured solutions & projects"
      actions={
        <a
          href={`mailto:${"work.christiandecembrana@gmail.com"}?subject=Case%20study%20request`}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-fg-muted transition hover:bg-white/10 hover:text-fg"
        >
          All case studies
        </a>
      }
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border-soft bg-card transition hover:border-white/15">
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${ACCENT[project.accent]}`}
      >
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4/5 max-w-md rounded-xl border border-white/10 bg-black/60 p-4 shadow-2xl backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red/70" />
              <span className="h-2 w-2 rounded-full bg-amber-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-[10px] uppercase tracking-wider text-fg-dim">
                {project.domain}
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-3/4 rounded-full bg-white/15" />
              <div className="h-2 w-1/2 rounded-full bg-white/10" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="rounded-md bg-white/5 p-2">
                  <div className="text-[10px] text-fg-dim">DAU</div>
                  <div className="text-xs font-semibold text-fg">12.4k</div>
                </div>
                <div className="rounded-md bg-white/5 p-2">
                  <div className="text-[10px] text-fg-dim">p95</div>
                  <div className="text-xs font-semibold text-fg">86ms</div>
                </div>
                <div className="rounded-md bg-white/5 p-2">
                  <div className="text-[10px] text-fg-dim">uptime</div>
                  <div className="text-xs font-semibold text-fg">99.9%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href={`mailto:${"work.christiandecembrana@gmail.com"}?subject=${encodeURIComponent(project.name + " — tell me more")}`}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-fg backdrop-blur transition hover:bg-white hover:text-black"
          aria-label={`Ask about ${project.name}`}
        >
          <ArrowUpRight size={16} strokeWidth={2} />
        </a>
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-fg md:text-xl">
            {project.name}
          </h3>
          <span
            className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-fg-dim`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${DOTS[project.accent]}`} />
            {project.domain}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          {project.blurb}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-fg-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
