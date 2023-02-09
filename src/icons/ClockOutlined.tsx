import * as React from "react";
import { SVGProps } from "react";
const SvgClockOutlined = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 5.25a.75.75 0 0 1 .75.75v5.25h3.75a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgClockOutlined;
