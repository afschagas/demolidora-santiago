declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaReady?: boolean;
  }
}

const MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "G-XV2DZ3H7H5";

let loadPromise: Promise<void> | null = null;
const pendingPaths: string[] = [];

function ensureDataLayer() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
}

function sendPageView(path: string) {
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

export function initAnalytics(): Promise<void> {
  if (typeof window === "undefined" || !MEASUREMENT_ID) {
    return Promise.resolve();
  }

  if (window.__gaReady) return Promise.resolve();
  if (loadPromise) return loadPromise;

  ensureDataLayer();

  const existing = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}"]`,
  ) as HTMLScriptElement | null;

  const onReady = () => {
    window.__gaReady = true;
    window.gtag!("js", new Date());
    window.gtag!("config", MEASUREMENT_ID);
    while (pendingPaths.length) {
      sendPageView(pendingPaths.shift()!);
    }
  };

  loadPromise = new Promise((resolve) => {
    const finish = () => {
      onReady();
      resolve();
    };

    if (existing) {
      if (existing.getAttribute("data-loaded") === "true") {
        finish();
        return;
      }
      existing.addEventListener("load", finish, { once: true });
      existing.addEventListener("error", () => resolve(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      finish();
    };
    script.onerror = () => {
      loadPromise = null;
      resolve();
    };
    document.head.appendChild(script);
  });

  return loadPromise;
}

export function trackPageView(path: string): void {
  if (!MEASUREMENT_ID) return;

  if (!window.__gaReady) {
    if (!pendingPaths.includes(path)) pendingPaths.push(path);
    void initAnalytics();
    return;
  }

  sendPageView(path);
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!window.gtag) return;
  window.gtag("event", name, params);
}
