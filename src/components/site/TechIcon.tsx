type Props = {
  name: string;
  size?: number;
  className?: string;
};

export function TechIcon({ name, size = 16, className }: Props) {
  const svg = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: `shrink-0 ${className ?? ""}`,
  } as const;
  const sw = 1.3;

  switch (name) {
    case ".NET":
      return (
        <svg {...svg}>
          <path
            d="M12 2.2 20.8 7 20.8 17 12 21.8 3.2 17 3.2 7 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="10"
            fontWeight={800}
            fill="currentColor"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            N
          </text>
        </svg>
      );

    case "Blazor":
      return (
        <svg {...svg}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth={sw}
          />
          <path
            d="M13.5 6 8 13.2h3.6L10 18.5l6-7.4h-3.6L13.9 6z"
            fill="currentColor"
          />
        </svg>
      );

    case "Next.js":
      return (
        <svg {...svg}>
          <circle cx="12" cy="12" r="9.5" fill="currentColor" />
          <path
            d="M9 7.5v9M9 7.5l7.5 10.5M15.5 7.5v6"
            stroke="var(--color-bg-soft, #0f0f11)"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      );

    case "React":
      return (
        <svg {...svg}>
          <g fill="none" stroke="currentColor" strokeWidth="1.1">
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              transform="rotate(120 12 12)"
            />
          </g>
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      );

    case "Angular":
      return (
        <svg {...svg}>
          <path
            d="M12 2.2 3 5.4 4.5 17 12 21.8 19.5 17 21 5.4 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path
            d="M8.8 16.5 12 8l3.2 8.5M10.4 13.8h3.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      );

    case "Flutter":
      return (
        <svg {...svg}>
          <path
            d="M14.5 2.5 3 14l3 3L20 3.2h-5.5zM9.5 18l5 5H20l-8-8-2.5 3z"
            fill="currentColor"
          />
          <path
            d="M12 15l2.5 3-2.5 2.4L9.5 18 12 15z"
            fill="currentColor"
            opacity="0.75"
          />
        </svg>
      );

    case "TypeScript":
      return (
        <svg {...svg}>
          <rect
            x="2.5"
            y="2.5"
            width="19"
            height="19"
            rx="2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={sw}
          />
          <text
            x="12"
            y="16.5"
            textAnchor="middle"
            fontSize="10"
            fontWeight={800}
            fill="currentColor"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            letterSpacing="-0.5"
          >
            TS
          </text>
        </svg>
      );

    case "C#":
      return (
        <svg {...svg}>
          <path
            d="M15.5 6.5A6.5 6.5 0 1 0 15.5 17.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17 8.5v7M20 8.5v7M15.5 11h6M15.5 13.5h6"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      );

    case "Azure":
      return (
        <svg {...svg}>
          <path
            d="M10.5 3 2.5 20h6l1.5-3.2h4.2L11.5 8.6 10.5 3z"
            fill="currentColor"
          />
          <path
            d="M13 8.5 21.5 20H11l2.6-3.6-2.2-4.6L13 8.5z"
            fill="currentColor"
            opacity="0.75"
          />
        </svg>
      );

    case "PostgreSQL":
      return (
        <svg {...svg}>
          <ellipse
            cx="12"
            cy="5.5"
            rx="8"
            ry="2.6"
            fill="none"
            stroke="currentColor"
            strokeWidth={sw}
          />
          <path
            d="M4 5.5v13c0 1.44 3.58 2.6 8 2.6s8-1.16 8-2.6v-13"
            fill="none"
            stroke="currentColor"
            strokeWidth={sw}
          />
          <path
            d="M4 11.5c0 1.44 3.58 2.6 8 2.6s8-1.16 8-2.6"
            fill="none"
            stroke="currentColor"
            strokeWidth={sw}
          />
        </svg>
      );

    case "GraphQL":
      return (
        <svg {...svg}>
          <path
            d="M12 2.5 20.5 7.25 20.5 16.75 12 21.5 3.5 16.75 3.5 7.25Z"
            fill="none"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path
            d="M12 4.5 5 16.5M12 4.5 19 16.5M5 16.5h14"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="12" cy="4.5" r="1.6" fill="currentColor" />
          <circle cx="5" cy="16.5" r="1.6" fill="currentColor" />
          <circle cx="19" cy="16.5" r="1.6" fill="currentColor" />
        </svg>
      );

    default:
      return null;
  }
}
