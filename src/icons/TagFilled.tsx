import * as React from "react";
import { SVGProps } from "react";
const SvgTagFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.753 1.25h2.994c.419 0 .748 0 1.067.076.28.067.548.179.794.33.28.17.513.404.808.7l7.743 7.742c.575.575 1.038 1.039 1.383 1.445.355.418.628.824.782 1.298a3.75 3.75 0 0 1 0 2.318c-.154.474-.427.88-.782 1.298-.345.406-.808.87-1.383 1.445l-2.257 2.257c-.575.575-1.039 1.038-1.445 1.383-.418.355-.824.628-1.298.782a3.75 3.75 0 0 1-2.318 0c-.474-.154-.88-.427-1.298-.782-.406-.345-.87-.808-1.445-1.383l-7.742-7.743c-.296-.295-.53-.528-.7-.808a2.75 2.75 0 0 1-.33-.794c-.076-.319-.076-.648-.076-1.067V6.753c0-.419 0-.748.076-1.066a2.75 2.75 0 0 1 .33-.795c.17-.28.404-.512.7-.808l1.728-1.728c.296-.296.528-.53.808-.7a2.75 2.75 0 0 1 .795-.33c.318-.076.647-.076 1.066-.076ZM6.75 8a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTagFilled;
