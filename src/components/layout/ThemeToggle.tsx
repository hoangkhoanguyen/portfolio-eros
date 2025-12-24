"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size={"icon"}
      variant="secondary"
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
};
