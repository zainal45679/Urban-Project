import * as React from "react";
import { SVGProps } from "react";

const BoxArrow2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <rect
      x="2"
      y="2"
      width="36"
      height="36"
      rx="8"
      fill="currentColor"
      strokeWidth="2"
    />

    <path
      d="M18 14L23 20L18 26"
      stroke="#000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BoxArrow2;
