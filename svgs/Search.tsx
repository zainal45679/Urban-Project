import * as React from "react"
import { SVGProps } from "react"
const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.672 16.641 21 21m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </svg>
)
export default Search
