export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/** Aplica tema no DOM de forma síncrona (localStorage + classe .dark + data-theme). */
export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  const isDark = theme === "dark";

  root.setAttribute("data-theme", theme);
  root.classList.toggle("dark", isDark);

  /* Tailwind olha só para html.dark; .dark no body quebrava o modo claro (variáveis claras + dark:text-white). */
  document.body?.classList.remove("dark");

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore (modo privado / storage bloqueado) */
  }

  const meta = document.getElementById("theme-color-meta") as HTMLMetaElement | null;
  if (meta) {
    meta.setAttribute("content", isDark ? "#0c0c0c" : "#f4f4f5");
  }
}

export function readStoredTheme(): Theme {
  try {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}
