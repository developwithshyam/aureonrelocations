export const theme = {
  colors: {
    primaryDark: "#111315",
    background: "#F5F3EF",
    white: "#FFFFFF",
    accent: "#C99A5B",
    accentHover: "#B8894F",
    textSecondary: "#6F7478",
    border: "#E5E2DC",
  },
  fonts: {
    sans: "var(--font-plus-jakarta)",
  },
  animation: {
    duration: {
      fast: 400,
      normal: 600,
      slow: 900,
    },
  },
} as const;

export type Theme = typeof theme;
