import * as React from "react";
import { SVGProps } from "react";
const SvgMarkFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.75 2a.75.75 0 0 0-1.5 0v1.282a8.752 8.752 0 0 0-7.968 7.968H2a.75.75 0 0 0 0 1.5h1.282a8.752 8.752 0 0 0 7.968 7.968V22a.75.75 0 0 0 1.5 0v-1.282a8.752 8.752 0 0 0 7.968-7.968H22a.75.75 0 0 0 0-1.5h-1.282a8.752 8.752 0 0 0-7.968-7.968V2ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMarkFilled;
