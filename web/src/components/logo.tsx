import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Exam Chain
      </motion.span>
    </Link>
  );
};

export const LogoIcon = ({ width = 50, height = 50, color = "#6e48aa" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      width={width * 1.5}
      height={height * 1.5}
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6e48aa" />
          <stop offset="100%" stopColor="#9d50bb" />
        </linearGradient>
      </defs>

      <rect
        x="3"
        y="6"
        width="6"
        height="9"
        rx="1.5"
        stroke="url(#logoGradient)"
      />
      <rect
        x="15"
        y="6"
        width="6"
        height="9"
        rx="1.5"
        stroke="url(#logoGradient)"
      />
      <rect
        x="27"
        y="6"
        width="6"
        height="9"
        rx="1.5"
        stroke="url(#logoGradient)"
      />
      <rect
        x="9"
        y="21"
        width="6"
        height="9"
        rx="1.5"
        stroke="url(#logoGradient)"
      />
      <rect
        x="21"
        y="21"
        width="6"
        height="9"
        rx="1.5"
        stroke="url(#logoGradient)"
      />

      <line x1="9" y1="10.5" x2="15" y2="10.5" stroke="url(#logoGradient)" />
      <line x1="21" y1="10.5" x2="27" y2="10.5" stroke="url(#logoGradient)" />
      <line x1="6" y1="15" x2="12" y2="21" stroke="url(#logoGradient)" />
      <line x1="18" y1="15" x2="12" y2="21" stroke="url(#logoGradient)" />
      <line x1="18" y1="15" x2="24" y2="21" stroke="url(#logoGradient)" />
      <line x1="30" y1="15" x2="24" y2="21" stroke="url(#logoGradient)" />

      <path
        d="M4.5 8.25h3m-3 1.5h3m-3 1.5h3"
        stroke="url(#logoGradient)"
        strokeWidth="0.75"
      />
      <path
        d="M16.5 8.25h3m-3 1.5h3m-3 1.5h3"
        stroke="url(#logoGradient)"
        strokeWidth="0.75"
      />
      <path
        d="M28.5 8.25h3m-3 1.5h3m-3 1.5h3"
        stroke="url(#logoGradient)"
        strokeWidth="0.75"
      />
      <path
        d="M10.5 23.25h3m-3 1.5h3m-3 1.5h3"
        stroke="url(#logoGradient)"
        strokeWidth="0.75"
      />
      <path
        d="M22.5 23.25h3m-3 1.5h3m-3 1.5h3"
        stroke="url(#logoGradient)"
        strokeWidth="0.75"
      />
    </svg>
  );
};
