import * as React from "react";
import { SVGProps } from "react";
const SvgArrowDownFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 3a1 1 0 1 0-2 0v15.586l-5.793-5.793a1 1 0 0 0-1.414 1.414l7.5 7.5a1 1 0 0 0 1.414 0l7.5-7.5a1 1 0 0 0-1.414-1.414L13 18.586V3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowDownFilled;
