"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GiBarbedSun, GiEvilMoon } from "react-icons/gi";

export default function ThemeToggle() {
  // const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }
  return (
    <button className="hover:text-hover" onClick={handleTheme}>
      {resolvedTheme === "dark" ? (
        <GiBarbedSun size={20} />
      ) : (
        <GiEvilMoon size={20} />
      )}
    </button>
  );
}
