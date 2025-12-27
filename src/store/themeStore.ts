import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ThemeColor = {
  name: string;
  optionClassName: string;
};

export const themes: Record<string, ThemeColor> = {
  default: {
    name: "default",
    optionClassName: "bg-gradient-to-br from-blue-600 to-blue-400",
  },
  green: {
    name: "green",
    optionClassName: "bg-gradient-to-br from-green-600 to-green-400",
  },
  orange: {
    name: "sunset",
    optionClassName: "bg-gradient-to-br from-orange-600 to-orange-400",
  },
};

const applyTheme = (themeName: string) => {
   if (typeof window === "undefined") return;

  const root = document.documentElement;

  if (themeName === "default") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", themeName);
  }
};

type ThemeStore = {
  currentTheme: string;
  setTheme: (theme: string) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      currentTheme: "default",
      setTheme: (themeName: string) => {
        if (!themes[themeName]) return;
        applyTheme(themeName);
        set({ currentTheme: themeName });
      },
    }),
    {
      name: "theme-color",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        // Apply theme after rehydration
        if (state?.currentTheme) {
          applyTheme(state.currentTheme);
        }
      },
    },
  ),
);
