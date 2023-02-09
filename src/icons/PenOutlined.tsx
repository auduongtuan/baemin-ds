import * as React from "react";
import { SVGProps } from "react";
const SvgPenOutlined = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.763 3.177a1.75 1.75 0 0 1 2.474 0l2.586 2.585a1.75 1.75 0 0 1 0 2.475l-12 12a1.75 1.75 0 0 1-1.237.513H5A1.75 1.75 0 0 1 3.25 19v-2.586c0-.464.184-.91.513-1.237l12-12Zm1.414 1.06a.25.25 0 0 0-.354 0L15.061 6 18 8.94l1.763-1.763a.25.25 0 0 0 0-.354l-2.586-2.586ZM16.939 10 14 7.06l-9.177 9.177a.25.25 0 0 0-.073.177V19c0 .138.112.25.25.25h2.586a.25.25 0 0 0 .177-.073L16.939 10Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPenOutlined;
