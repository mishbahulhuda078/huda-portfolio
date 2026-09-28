"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isLight = saved === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  }

  return (
    <button
      onClick={toggle}
      aria-label={light ? "Switch to dark console mode" : "Switch to light spec mode"}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--surface-2)] text-[var(--text-dim)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus:outline-none"
      title={light ? "Switch to Dark Console Mode" : "Switch to Light Spec Mode"}
    >
      {light ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}
