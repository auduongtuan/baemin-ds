import * as React from "react";
import { SVGProps } from "react";
const SvgPersonFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z"
      fill="currentColor"
    />
    <path
      d="M20.28 18.493c-3.875-6.027-12.685-6.027-16.56 0-.904 1.407.106 3.257 1.778 3.257h13.004c1.672 0 2.682-1.85 1.778-3.257Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPersonFilled;
