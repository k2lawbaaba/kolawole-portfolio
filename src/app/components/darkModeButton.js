"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))} className="bg-gray-400 px-2 py-1 rounded-md">
      {theme === "light" ? (
        <RiMoonLine/>
      ) : (
        <RiSunLine/>
      )}
    </button>
  );
};

export default DarkModeToggle;