declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "G-XV2DZ3H7H5";

let scriptLoaded = false;

export function getMeasurementId(): string {
  return MEASUREMENT_ID;
}

export function initAnalytics(): void {
  if (typeof window === "undefined" || !MEASUREMENT_ID || scriptLoaded) return;

  const existing = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}"]`,
  );
  if (existing) {
    scriptLoaded = true;
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });

  scriptLoaded = true;
}

export function trackPageView(path: string): void {
  if (!MEASUREMENT_ID || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!window.gtag) return;
  window.gtag("event", name, params);
}
