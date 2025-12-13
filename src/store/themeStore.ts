import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ThemeColor = {
  name: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
  };
  optionClassName: string;
};

export const themes: Record<string, ThemeColor> = {
  default: {
    name: "default",
    colors: {
      primary: "var(--color-blue-600)",
      primaryLight: "var(--color-blue-400)",
      primaryDark: "var(--color-blue-700)",
    },
    optionClassName: "bg-gradient-to-br from-blue-600 to-blue-400",
  },
  green: {
    name: "green",
    colors: {
      primary: "var(--color-green-600)",
      primaryLight: "var(--color-green-400)",
      primaryDark: "var(--color-green-700)",
    },
    optionClassName: "bg-gradient-to-br from-green-600 to-green-400",
  },
  sunset: {
    name: "sunset",
    colors: {
      primary: "var(--color-orange-600)",
      primaryLight: "var(--color-orange-400)",
      primaryDark: "var(--color-orange-700)",
    },
    optionClassName: "bg-gradient-to-br from-orange-600 to-orange-400",
  },
};

const applyTheme = (themeName: string) => {
  const theme = themes[themeName];
  if (!theme || typeof window === "undefined") return;

  const root = document.documentElement;
  root.style.setProperty("--color-primary-main", theme.colors.primary);
  root.style.setProperty("--color-primary-light", theme.colors.primaryLight);
  root.style.setProperty("--color-primary-dark", theme.colors.primaryDark);
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
    }
  )
);
