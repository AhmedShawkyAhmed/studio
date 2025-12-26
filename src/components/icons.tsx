import type { SVGProps } from "react";

export function AppStore(props: SVGProps<SVGSVGElement>) {
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
      <path d="M10.2 2.5H13.8C15.1 2.5 16.2 3.6 16.2 4.9V4.9C16.2 6.2 15.1 7.3 13.8 7.3H10.2C8.9 7.3 7.8 6.2 7.8 4.9V4.9C7.8 3.6 8.9 2.5 10.2 2.5Z" />
      <path d="M12 12L12 2.5" />
      <path d="M15.5 12L18.4 4" />
      <path d="M8.5 12L5.6 4" />
      <path d="M18.8 12H5.2C3.2 12 1.6 13.6 1.6 15.6V15.6C1.6 17.6 3.2 19.2 5.2 19.2H18.8C20.8 19.2 22.4 17.6 22.4 15.6V15.6C22.4 13.6 20.8 12 18.8 12Z" />
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
