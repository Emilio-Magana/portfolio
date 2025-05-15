"use client";
import { useTheme } from "next-themes";
import { GiBarbedSun, GiEvilMoon } from "react-icons/gi";
// import { useDarkMode } from "../../archive/context/DarkModeContext";

export default function ThemeToggle() {
  // const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { theme, setTheme } = useTheme();
  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <button className="hover:text-hover" onClick={handleTheme}>
      {theme === "light" ? <GiBarbedSun size={20} /> : <GiEvilMoon size={20} />}
    </button>
  );
}
