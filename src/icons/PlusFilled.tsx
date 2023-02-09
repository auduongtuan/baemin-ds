import * as React from "react";
import { SVGProps } from "react";
const SvgPlusFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 4.5a1 1 0 1 0-2 0V11H4.5a1 1 0 1 0 0 2H11v6.5a1 1 0 1 0 2 0V13h6.5a1 1 0 1 0 0-2H13V4.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlusFilled;
