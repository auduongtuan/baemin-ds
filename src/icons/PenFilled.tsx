import * as React from "react";
import { SVGProps } from "react";
const SvgPenFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.763 3.177a1.75 1.75 0 0 1 2.474 0l2.586 2.585a1.75 1.75 0 0 1 0 2.475L19.06 10 14 4.94l1.763-1.763ZM12.939 6l-9.176 9.177a1.75 1.75 0 0 0-.513 1.237V19c0 .966.784 1.75 1.75 1.75h2.586c.464 0 .909-.184 1.237-.513L18 11.061l-5.06-5.06Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPenFilled;
