import type { SVGProps } from "react";

export function Apple(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m14 15-2-8-2 8" />
      <path d="M8 13h8" />
    </svg>
  );
}

export function PlayStore(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 12L4 2V22L22 12Z" />
      <path d="M4 2L13.5 12L4 22" />
    </svg>
  );
}

export function Github(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export const FlutterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.314 0L6.039 8.275 11.05 13.288l8.288-8.288L14.314 0zm-2.02 11.232l-5.013 5.013 5.013 5.013 9.92-9.92-4.907-5.106z" />
  </svg>
);

export const DartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.288 10.95L3.368 20.87 22.21 2.03l-8.922 8.92zM10.95 13.288l10.92-10.92-18.52 18.52 7.6-7.6z" />
  </svg>
);

export const KotlinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 24H0V0h24L12 12Z" />
  </svg>
);

export const SwiftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.25 0c-1.39 0-2.8.53-3.88 1.61l-4.7 4.7-1.77-1.76a.75.75 0 00-1.06 1.06l1.76 1.76-4.95 4.95a.75.75 0 000 1.06.75.75 0 001.06 0l4.95-4.95 1.76 1.76a.75.75 0 001.06-1.06l-1.76-1.76 4.7-4.7c1.84-1.84 4.4-2.2 5.8-.8a.75.75 0 00.97-1.12C23.05.53 21.64 0 20.25 0zM3.75 14.63a.75.75 0 00-1.06 1.06l4.95 4.95 1.76-1.76a.75.75 0 00-1.06-1.06l-1.76 1.76-3.89-3.89z" />
  </svg>
);

export const FirebaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3.14 19.33L9.68 4.2l2.15 3.22-6.02 15.13zm15.01-1.28l-3.23-8.68-6.4 2.87 6.4 15.13zm-9.02-9.6L6.03 3.22 17.58.67z" />
  </svg>
);

export const GitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.06 8.35a1.13 1.13 0 00-1.13-1.13h-4.24V3.09a1.13 1.13 0 00-2.26 0v4.13h-4.24V3.09a1.13 1.13 0 00-2.26 0v4.13H3.7a1.13 1.13 0 000 2.26h4.13v4.24H3.7a1.13 1.13 0 100 2.26h4.13v4.13a1.13 1.13 0 002.26 0v-4.13h4.24v4.13a1.13 1.13 0 002.26 0v-4.13h4.24a1.13 1.13 0 000-2.26h-4.24v-4.24h4.24a1.13 1.13 0 001.13-1.13zm-8.38 5.37H9.44v-4.24h4.24z" />
  </svg>
);

export const GitLabIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.955 13.232l-1.554-4.757L19.53 3.42a.816.816 0 00-1.58.016l-2.025 6.22H8.076l-2.025-6.22a.816.816 0 00-1.58-.016L1.597 8.475.045 13.232a.5.5 0 00.19.58l11.758 9.006a.5.5 0 00.603 0l11.758-9.006a.5.5 0 00.19-.58z" />
  </svg>
);

export const GitHubActionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12.25 2.007a10.25 10.25 0 100 20.492 10.25 10.25 0 000-20.492zM12.25 1a11.25 11.25 0 100 22.5 11.25 11.25 0 000-22.5zm0 13.5a.75.75 0 01-.75-.75V7a.75.75 0 011.5 0v6.75a.75.75 0 01-.75.75zm0 3.5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);

export const FigmaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 24a6 6 0 01-6-6v-6h6a6 6 0 110 12z" />
    <path d="M12 0a6 6 0 016 6v6h-6a6 6 0 110-12z" />
    <path d="M6 12a6 6 0 01-6-6h6v6a6 6 0 01-6 6z" />
    <path d="M18 12a6 6 0 01-6 6V6a6 6 0 016 6z" />
    <path d="M12 12a6 6 0 116-6v6a6 6 0 01-6 6z" />
  </svg>
);

export const JiraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.23 0L0 12.23l11.77 11.77L12.23 0zm-.92 12.23L0 23.31l11.31-11.08z" />
  </svg>
);

export const AsanaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="12" cy="6.5" r="3.5" />
    <circle cx="6.5" cy="17.5" r="3.5" />
    <circle cx="17.5" cy="17.5" r="3.5" />
  </svg>
);
