import * as React from "react";
import { SVGProps } from "react";
const SvgStarOutlined = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.788 3.21c.449-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.75 2.305l-4.118 3.527 1.258 5.273c.27 1.136-.965 2.033-1.961 1.425L12 18.354 7.374 21.18c-.997.608-2.232-.29-1.961-1.425l1.258-5.273-4.118-3.527c-.886-.76-.414-2.212.75-2.305l5.403-.433 2.082-5.006ZM12 4.204l-1.953 4.695a1.312 1.312 0 0 1-1.107.805l-5.069.406 3.862 3.308c.374.32.537.823.423 1.301l-1.18 4.947 4.34-2.65c.42-.257.948-.257 1.368 0l4.34 2.65-1.18-4.947c-.114-.478.05-.98.423-1.3l3.862-3.31-5.069-.405c-.49-.04-.918-.35-1.107-.805L12 4.203Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgStarOutlined;
