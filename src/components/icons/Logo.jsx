import * as React from "react";
const LogoIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={38}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="m3.396 17.555-2.91-2.91a1.658 1.658 0 0 1 0-2.346L11.797.986a1.658 1.658 0 0 1 2.346 0l11.312 11.313a1.659 1.659 0 0 1 0 2.345L14.144 25.957a1.66 1.66 0 0 1-2.346 0l-2.9-2.9a.107.107 0 0 1 0-.151l2.45-2.45a.107.107 0 0 1 .152 0l1.431 1.432a.056.056 0 0 0 .08 0l8.376-8.377a.056.056 0 0 0 0-.08l-8.376-8.376a.057.057 0 0 0-.08 0l-8.376 8.377a.056.056 0 0 0 0 .08l1.442 1.442a.107.107 0 0 1 0 .151l-2.45 2.45a.107.107 0 0 1-.15 0Z"
    />
    <path
      fill="url(#b)"
      d="m17.085 14.954-2.91-2.911a1.658 1.658 0 0 0-2.347 0L.516 23.356a1.658 1.658 0 0 0 0 2.345l11.312 11.313a1.66 1.66 0 0 0 2.346 0l11.313-11.313a1.657 1.657 0 0 0 0-2.346l-2.9-2.899a.107.107 0 0 0-.151 0l-2.45 2.45a.107.107 0 0 0 0 .151l1.431 1.432a.056.056 0 0 1 0 .08l-8.376 8.376a.057.057 0 0 1-.08 0l-8.376-8.377a.056.056 0 0 1 0-.08l8.376-8.376a.057.057 0 0 1 .08 0l1.443 1.443a.107.107 0 0 0 .151 0l2.45-2.45a.107.107 0 0 0 0-.151Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={25.973}
        x2={-8.826}
        y1={0.5}
        y2={24.928}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA026" />
        <stop offset={1} stopColor="#F7620C" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={25.973}
        x2={-8.826}
        y1={0.5}
        y2={24.928}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA026" />
        <stop offset={1} stopColor="#F7620C" />
      </linearGradient>
    </defs>
  </svg>
);
export default LogoIcon;
