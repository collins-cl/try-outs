import { createContext, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

import { DarkTheme, LightTheme } from "./themes";

const ThemeContext = createContext(LightTheme);
const AppearanceContext = createContext({
  appearance: "System",
  setAppearance: () => {},
});

/**
 * Resolves the active theme from the OS scheme plus an optional override.
 *
 * Swap `useState` here for your store once you have one — the provider only
 * needs "System" | "Light" | "Dark" from somewhere.
 */
export function ThemeProvider({ children }) {
  const systemScheme = useColorScheme();
  const [appearance, setAppearance] = useState("System");

  const theme = useMemo(() => {
    const scheme = appearance === "System" ? systemScheme : appearance;
    return scheme === "Dark" || scheme === "dark" ? DarkTheme : LightTheme;
  }, [appearance, systemScheme]);

  const control = useMemo(
    () => ({ appearance, setAppearance }),
    [appearance],
  );

  return (
    <AppearanceContext.Provider value={control}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </AppearanceContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export const useAppearance = () => useContext(AppearanceContext);
