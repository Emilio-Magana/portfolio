"use client";

import { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  text: string;
  // color: string;
}

export default function IconButtonOverflow({ children, text }: Props) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center rounded-lg"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="ease-in-outout overflow-x-hidden transition-all duration-500"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
        {hovered ? <span>hello</span> : ""}
      </div>
    </button>
  );
}
