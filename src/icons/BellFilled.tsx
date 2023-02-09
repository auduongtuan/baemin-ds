import * as React from "react";
import { SVGProps } from "react";
const SvgBellFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.25a.75.75 0 0 1 .75.75v1.281c2.226.191 3.721 1.229 4.659 2.53C18.42 8.218 18.75 9.88 18.75 11v3.69l1.78 1.78a.75.75 0 0 1-.53 1.28h-4.25V18a4.1 4.1 0 0 1-.741 2.313c-.59.818-1.565 1.437-3.009 1.437s-2.42-.619-3.009-1.437A4.1 4.1 0 0 1 8.25 18v-.25H4a.75.75 0 0 1-.53-1.28l1.78-1.78V11c0-2.644 1.119-4.37 2.562-5.409 1.117-.804 2.397-1.177 3.438-1.296V3a.75.75 0 0 1 .75-.75Zm-2.25 15.5V18c0 .38.12.967.459 1.437.31.432.835.813 1.791.813s1.48-.381 1.791-.813c.339-.47.459-1.057.459-1.437v-.25h-4.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBellFilled;
