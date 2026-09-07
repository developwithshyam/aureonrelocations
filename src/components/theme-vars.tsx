import { theme } from "@/lib/theme";

export function ThemeVars() {
  const css = `
    :root {
      --aureon-primary-dark: ${theme.colors.primaryDark};
      --aureon-background: ${theme.colors.background};
      --aureon-white: ${theme.colors.white};
      --aureon-accent: ${theme.colors.accent};
      --aureon-accent-hover: ${theme.colors.accentHover};
      --aureon-text-secondary: ${theme.colors.textSecondary};
      --aureon-border: ${theme.colors.border};
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
