// "use client";

// import { useEffect } from "react";
// import { useThemeStore, themes } from "@/store/themeStore";

// /**
//  * Component to initialize theme colors on mount
//  * This ensures theme is applied after hydration
//  */
// export function ThemeInitializer() {
//   const currentTheme = useThemeStore((state) => state.currentTheme);

//   useEffect(() => {
//     const theme = themes[currentTheme];
//     if (!theme) return;

//     const root = document.documentElement;
//     root.style.setProperty("--pallete-primary-main", theme.colors.primary);
//     root.style.setProperty(
//       "--pallete-primary-light",
//       theme.colors.primaryLight,
//     );
//     root.style.setProperty("--pallete-primary-dark", theme.colors.primaryDark);
//   }, [currentTheme]);

//   return null;
// }
