"use client";

import { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  hiddenText: string;
  // color: string;
}

export default function IconButtonOverflow({ children, hiddenText }: Props) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center rounded-lg"
      onClick={() => navigator.clipboard.writeText(hiddenText)}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="ease-in-outout overflow-x-hidden transition-all duration-500"
      >
        <span ref={ref} className="px-1.5">
          {hiddenText}
        </span>
      </div>
    </button>
  );
}
