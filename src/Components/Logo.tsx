import React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
    <path
      d="M10 16C10 18.7614 12.2386 21 15 21C17.7614 21 20 18.7614 20 16C20 13.2386 17.7614 11 15 11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M15 11C17.7614 11 20 8.76142 20 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
