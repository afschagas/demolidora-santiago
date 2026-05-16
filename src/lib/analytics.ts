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

function fireConfig(path: string) {
  if (!window.gtag || !MEASUREMENT_ID) return;
  window.gtag("config", MEASUREMENT_ID, {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: document.title,
  });
}

export function getMeasurementId(): string {
  return MEASUREMENT_ID;
}

export function initAnalytics(): void {
  if (typeof window === "undefined" || !MEASUREMENT_ID) return;

  ensureGtagStub();

  const path = window.location.pathname + window.location.search;

  if (!window.__gaInitialized) {
    window.__gaInitialized = true;
    window.gtag!("js", new Date());
  }

  fireConfig(path);

  const selector = `script[src*="googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}"]`;
  let script = document.querySelector(selector) as HTMLScriptElement | null;

  const onScriptReady = () => fireConfig(path);

  if (!script) {
    script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.addEventListener("load", onScriptReady, { once: true });
    document.head.appendChild(script);
    return;
  }

  const loaded = (script as HTMLScriptElement & { complete?: boolean }).complete;
  if (loaded) {
    onScriptReady();
    return;
  }

  script.addEventListener("load", onScriptReady, { once: true });
}

export function trackPageView(path: string): void {
  if (!MEASUREMENT_ID || !window.__gaInitialized) return;
  fireConfig(path);
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!window.gtag) return;
  window.gtag("event", name, params);
}
