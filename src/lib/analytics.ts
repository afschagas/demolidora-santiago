declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaInitialized?: boolean;
  }
}

const MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "G-XV2DZ3H7H5";

function ensureGtagStub() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
}

export function getMeasurementId(): string {
  return MEASUREMENT_ID;
}

/** Padrão oficial Google: config na hora, script carrega em paralelo. */
export function initAnalytics(): void {
  if (typeof window === "undefined" || !MEASUREMENT_ID || window.__gaInitialized) {
    return;
  }

  window.__gaInitialized = true;
  ensureGtagStub();

  window.gtag!("js", new Date());
  window.gtag!("config", MEASUREMENT_ID);

  const scriptExists = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}"]`,
  );
  if (scriptExists) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackPageView(path: string): void {
  if (!MEASUREMENT_ID || !window.__gaInitialized || !window.gtag) return;

  window.gtag("config", MEASUREMENT_ID, {
    page_path: path,
  });
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!window.gtag) return;
  window.gtag("event", name, params);
}
