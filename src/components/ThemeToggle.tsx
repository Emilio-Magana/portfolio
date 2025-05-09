import { GiBarbedSun, GiEvilMoon } from "react-icons/gi";
import { useDarkMode } from "../context/DarkModeContext";

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button className="hover:text-hover" onClick={toggleDarkMode}>
      {isDarkMode ? <GiBarbedSun size={20} /> : <GiEvilMoon size={20} />}
    </button>
  );
}
