type Props = JSX.IntrinsicElements["svg"];

export const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} satisfies Props;

export function ChevronRight(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  );
}

export function Github(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

export function ExternalLink(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" x2="21" y1="14" y2="3"></line>
    </svg>
  );
}

export function LinkedIn(props: Props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export function Sun(props: Props) {
  return (
    <svg
      {...baseProps}
      {...props}
      className="stroke-muted-foreground transition-colors"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export function Moon(props: Props) {
  return (
    <svg
      {...baseProps}
      {...props}
      className="stroke-muted-foreground transition-colors"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
    </svg>
  );
}
