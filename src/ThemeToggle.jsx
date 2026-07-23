import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import "./theme.css";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }
  }, []);

  const changeTheme = () => {
    document.body.classList.toggle("dark");

    const mode = document.body.classList.contains("dark");

    setDark(mode);

    localStorage.setItem("theme", mode ? "dark" : "light");
  };

  return (
    <button className="theme-btn" onClick={changeTheme}>
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}