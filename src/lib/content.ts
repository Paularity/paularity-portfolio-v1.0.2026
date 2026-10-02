export const PROFILE = {
  fullName: "Christian Paul Decembrana",
  displayName: "Christian Decembrana",
  alias: "paularity",
  title: "Frontend Tech Lead",
  location: "Angeles, Central Luzon, Philippines",
  email: "work.christiandecembrana@gmail.com",
  linkedin: "https://www.linkedin.com/in/paularity",
  legacySite: "https://paularity-v027.vercel.app/",
  summary:
    "Software Developer with strong expertise in Frontend Development — focused on clean, responsive, user-friendly applications. I also handle backend work, allowing me to collaborate across the full delivery process.",
};

export const HERO = {
  eyebrow: "Frontend Tech Lead · Full-Stack Engineer",
  headingLines: [
    { text: "AI flies the", weight: "light" },
    { text: "routine.", weight: "bold" },
    { text: "I keep", weight: "light" },
    { text: "enterprise", weight: "bold" },
    { text: "software", weight: "light" },
    { text: "on course.", weight: "bold" },
  ] as const,
  sub: "Frontend Tech Lead at Blackfort PH. Nine years across Blazor, Next.js, Angular, Flutter, and ASP.NET Core — setting direction for teams shipping products in fintech, logistics, cooperatives, and identity.",
};

export const STACK = [
  ".NET",
  "Blazor",
  "Next.js",
  "React",
  "Angular",
  "Flutter",
  "TypeScript",
  "C#",
  "Azure",
  "PostgreSQL",
  "GraphQL",
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  domain: string;
  accent: "red" | "amber" | "cyan" | "violet";
};

export const PROJECTS: Project[] = [
  {
    name: "PSACC Booking Platform",
    domain: "Container Logistics",
    blurb:
      "FCL/LCL container booking system for Philippine Span Asia Carrier — Blazor front-end with Telerik UI, ASP.NET Core APIs, Azure Functions, and email workflow automation.",
    tags: ["Blazor", ".NET 8", "Telerik", "Azure Functions"],
    accent: "red",
  },
  {
    name: "BCI.NEXTCOOP",
    domain: "Cooperative Suite",
    blurb:
      "Multi-platform cooperative management: ASP.NET Core backend, background workloads, and Flutter apps for admins and members — one platform, many surfaces.",
    tags: ["ASP.NET Core", "Flutter", "Microservices"],
    accent: "cyan",
  },
  {
    name: "IMMS Shutdown Suite",
    domain: "Enterprise Operations · Australia",
    blurb:
      "Web + mobile system for managing industrial shutdowns and turnarounds. Angular front-end with .NET Core APIs, plus a Flutter companion for on-site progress tracking.",
    tags: ["Angular", ".NET Core", "Flutter"],
    accent: "amber",
  },
  {
    name: "BCI.IDP",
    domain: "Identity & Access",
    blurb:
      "Duende IdentityServer-backed identity provider handling OAuth 2.0 flows, user identity, and token lifecycle for the BCI ecosystem — Azure Storage and queues under the hood.",
    tags: ["Duende IdentityServer", "OAuth 2.0", "Azure"],
    accent: "violet",
  },
];

export type Pillar = {
  title: string;
  body: string;
  kind: "reliability" | "performance" | "business" | "cloud";
};

export const PILLARS: Pillar[] = [
  {
    title: "Production-Grade Reliability",
    body: "Clean architecture, SOLID fundamentals, Fluxor/reactive state, and REST discipline — code my team can extend without fear.",
    kind: "reliability",
  },
  {
    title: "Performance First Mindset",
    body: "Componentized front-ends, careful state management, and asset optimization — the difference between an app that feels fast and one that just is.",
    kind: "performance",
  },
  {
    title: "Business-Driven Decisions",
    body: "Close alignment with backend, design, and stakeholders through scrum ceremonies — technical choices that serve product outcomes, not the other way around.",
    kind: "business",
  },
  {
    title: "Cross-Platform Range",
    body: "Blazor, Next.js, Angular, Flutter, ASP.NET Core — one engineer, one shipped product, whether it lives on web, mobile, or both.",
    kind: "cloud",
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  blurb: string;
  stack?: string[];
};

export const EXPERIENCE: Role[] = [
  {
    company: "Blackfort PH",
    title: "Technical Lead — Frontend Integration",
    period: "Oct 2025 — Present",
    blurb:
      "Driving vision, standards, and UX direction across multiple web projects. Working at the intersection of design, backend, and business to ensure every delivery is scalable, consistent, and user-focused.",
    stack: ["Next.js", "Blazor", "TypeScript"],
  },
  {
    company: "Blackfort PH",
    title: "Frontend Developer",
    period: "Aug 2022 — Present",
    location: "Philippines",
    blurb:
      "Building and maintaining production frontends across the Blackfort suite — reusable components, integration with backend services, and steady iteration on user experience.",
    stack: ["Blazor", "React", "TypeScript"],
  },
  {
    company: "Philippine Span Asia Carrier Corp.",
    title: "ASP.NET / C# / Blazor Developer",
    period: "Aug 2022 — Nov 2024",
    location: "Philippines",
    blurb:
      "Delivered the Booking Management System and Admin Portal — Blazor + Telerik front-ends, .NET 8 backend, Azure DevOps for PBI/sprint management, and end-to-end responsibility from design to deployment.",
    stack: ["Blazor", ".NET 8", "Telerik", "Azure DevOps"],
  },
  {
    company: "IMMS",
    title: "Software Developer — Mobile & Web",
    period: "Nov 2019 — Mar 2023",
    location: "Australia (remote)",
    blurb:
      "Built the Shutdown Management System web app and Shutdown Progress Tracking mobile app. Angular 9+ frontend, .NET Core 3.1 backend, Flutter/Dart for mobile — full-stack ownership across surfaces.",
    stack: ["Angular", ".NET Core", "Flutter"],
  },
  {
    company: "Axesscom Philippines Inc.",
    title: "Software Developer (PHP)",
    period: "Mar 2018 — May 2020",
    location: "Central Luzon, Philippines",
    blurb:
      "Delivered six discotek/restaurant websites with reservation and booking systems. PHP + WordPress + SVN, Jira for issue tracking, documentation for downstream operators.",
    stack: ["PHP", "WordPress", "SVN", "Jira"],
  },
  {
    company: "Enigma Technologies · Freelance",
    title: "Web Developer",
    period: "2017 — 2018",
    location: "Angeles, Philippines",
    blurb:
      "OJT at Enigma (Joomla CMS, Order Locator) and freelance work in HTML/CSS/JS, WordPress, and Laravel — real estate valuation and analytics platform on a five-person team.",
    stack: ["Joomla", "WordPress", "Laravel"],
  },
];

export const CERTIFICATIONS = [
  "JavaScript Algorithms and Data Structures",
  "Front End Libraries",
  "Certified CSS Developer",
  "OOPS Certification (with Excellence)",
  "Certified JavaScript Developer",
];

export const PHOTOS = [
  "ART07452.png",
  "ART07469.png",
  "ART07473.png",
  "ART07480.png",
  "ART07481.png",
  "ART07491.png",
  "ART07492.png",
  "ART07513.png",
  "ART07522.png",
  "ART07532.png",
  "ART07562.png",
  "ART07563.png",
] as const;

export const PHOTO_ROLES = {
  hero: "/gallery/ART07469.png",
  experience: "/gallery/ART07480.png",
  philosophy: "/gallery/ART07473.png",
  gallery: [
    "/gallery/ART07452.png",
    "/gallery/ART07563.png",
    "/gallery/ART07481.png",
    "/gallery/ART07491.png",
    "/gallery/ART07492.png",
    "/gallery/ART07532.png",
    "/gallery/ART07522.png",
    "/gallery/ART07562.png",
    "/gallery/ART07513.png",
  ],
} as const;

export const PHILOSOPHY = {
  lede: "I'm Christian, a Frontend Tech Lead based in the Philippines.",
  paragraphs: [
    "Modern aircraft can fly themselves for most of a trip, yet every flight still has a pilot. Autopilot handles the routine. The pilot sets the course, watches the instruments, and takes the controls when conditions change.",
    "That's how I see AI in software today. It speeds up the work, but judgment, direction, and accountability stay with people. I build interfaces that keep users in command: clear about what the system is doing, predictable when it acts, and easy to take over when it's wrong.",
    "I lead frontend teams across Angular, React/Next.js, and Kendo UI, working closely with .NET backends and CI/CD pipelines. I also help non-technical stakeholders understand technical decisions.",
  ],
};

export const NAV = [
  { href: "#projects", label: "Projects" },
  { href: "#partner", label: "Partner" },
  { href: "#experience", label: "Experience" },
  { href: "#practice", label: "Practice" },
] as const;

export type Practice = {
  title: string;
  description: string;
  icon:
    | "hammer"
    | "rocket"
    | "eye"
    | "bug"
    | "compass"
    | "recycle"
    | "book"
    | "users"
    | "package";
};

export const PRACTICES: Practice[] = [
  {
    title: "Building",
    description:
      "Reach for the smallest thing that solves the problem — not the most impressive.",
    icon: "hammer",
  },
  {
    title: "Shipping",
    description:
      "Small, honest releases over big, risky ones. Momentum compounds.",
    icon: "rocket",
  },
  {
    title: "Reviewing",
    description:
      "Read the diff twice. Ask why, not just what — the pattern matters more than the line.",
    icon: "eye",
  },
  {
    title: "Debugging",
    description:
      "Chase the root cause, not the symptom that surfaced it. Fixes that stick.",
    icon: "bug",
  },
  {
    title: "Planning",
    description:
      "Sketch before typing. The whiteboard is cheap; the refactor isn't.",
    icon: "compass",
  },
  {
    title: "Refactoring",
    description:
      "Leave the code cleaner than I found it — one boy-scout commit at a time.",
    icon: "recycle",
  },
  {
    title: "Learning",
    description:
      "Read the docs before Stack Overflow. Understanding beats copy-paste every time.",
    icon: "book",
  },
  {
    title: "Mentoring",
    description:
      "Share what I know so the team ships faster than I ever could alone.",
    icon: "users",
  },
  {
    title: "Delivering",
    description:
      "Not done when it works — done when it's easy for the next engineer to change.",
    icon: "package",
  },
];
