"use client";

import Script from "next/script";

export default function ThemeScript() {
  return (
    <Script id="theme-script" strategy="beforeInteractive">
      {`
        try {
          const stored = localStorage.getItem("isDarkMode");
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          const isDark = stored !== null ? JSON.parse(stored) : prefersDark;

          document.documentElement.classList.add(isDark ? "dark" : "light");
          document.documentElement.classList.remove(isDark ? "light" : "dark");
        } catch(e) {
          document.documentElement.classList.add("light");
        }
      `}
    </Script>
  );
}
