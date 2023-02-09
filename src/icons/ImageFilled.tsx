import * as React from "react";
import { SVGProps } from "react";
const SvgImageFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.124 6.691A2.425 2.425 0 0 1 8.5 6.25c.37 0 .908.105 1.376.441.505.364.874.965.874 1.809s-.369 1.445-.874 1.809a2.425 2.425 0 0 1-1.376.441c-.37 0-.908-.105-1.376-.441-.505-.364-.874-.965-.874-1.809s.369-1.445.874-1.809Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2.25A2.75 2.75 0 0 0 2.25 5v14.035A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19V5A2.75 2.75 0 0 0 19 2.25H5Zm3.68 13.168a17.236 17.236 0 0 0-4.93-.27V5c0-.69.56-1.25 1.25-1.25h14c.69 0 1.25.56 1.25 1.25v6.259c-5.855.141-9.472 1.941-11.57 4.159Zm1.723.454a.75.75 0 0 0-.468 1.425c1.872.614 3.662 1.677 4.965 3.418a.75.75 0 0 0 1.201-.9c-1.53-2.044-3.612-3.26-5.698-3.944Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgImageFilled;
