/**
 * Light and dark palettes.
 *
 * Each follows the React Navigation theme shape (primary, background, card,
 * text, border, notification) so it can be handed straight to the navigation
 * ThemeProvider, plus extra tokens for app content.
 */

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "expo-router";

export const LightTheme = {
  ...NavigationDefaultTheme,
  dark: false,
  mode: "light",
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: "#3C87F7",
    background: "#ffffff",
    card: "#F0F0F3",
    text: "#000000",
    border: "#E0E1E6",
    notification: "#FF3B30",

    surface: "#f5f5f5",
    surfaceSelected: "#E0E1E6",
    surfaceHover: "#EBEBEE",

    textSecondary: "#60646C",
    textMuted: "#8E8E93",
    textInverted: "#ffffff",

    primaryDark: "#0274DF",
    primaryLight: "#EAF3FF",

    borderStrong: "#C7C7CC",
    success: "#34C759",
    danger: "#FF3B30",
    warning: "#FF9500",
    info: "#5AC8FA",
  },
};

export const DarkTheme = {
  ...NavigationDarkTheme,
  dark: true,
  mode: "dark",
  colors: {
    ...NavigationDarkTheme.colors,
    primary: "#3C9FFE",
    background: "#000000",
    card: "#161619",
    text: "#ffffff",
    border: "#2E3135",
    notification: "#FF453A",

    surface: "#212225",
    surfaceSelected: "#2E3135",
    surfaceHover: "#2A2C30",

    textSecondary: "#B0B4BA",
    textMuted: "#8E8E93",
    textInverted: "#000000",

    primaryDark: "#0274DF",
    primaryLight: "#1B2B3D",

    borderStrong: "#3A3A3C",
    success: "#30D158",
    danger: "#FF453A",
    warning: "#FF9F0A",
    info: "#64D2FF",
  },
};
