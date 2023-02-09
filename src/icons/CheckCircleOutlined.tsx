import * as React from "react";
import { SVGProps } from "react";
const SvgCheckCircleOutlined = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.11 9.436a.75.75 0 1 0-1.22-.872l-3.86 5.405-2-2a.75.75 0 1 0-1.06 1.061l2.625 2.625a.75.75 0 0 0 1.14-.094l4.375-6.125Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCheckCircleOutlined;
