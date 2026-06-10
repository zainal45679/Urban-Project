import * as React from "react"
import { SVGProps } from "react"
const BoxArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 3H3v18h18V3Zm-5.818 4.854h-8v8h2v-4.586l6.243 6.242 1.414-1.414-6.243-6.242h4.586v-2Z"
      clipRule="evenodd"
    />
  </svg>
)
export default BoxArrow
