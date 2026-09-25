// Google Analytics (GA4) via gtag.js.
// The measurement ID comes from the linked Google Analytics connector.
const measurementId = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"] as
  | string
  | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

let initialized = false;

export function initAnalytics(): void {
  if (initialized || typeof window === "undefined" || !measurementId) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["js", new Date()]);
  window.dataLayer.push(["config", measurementId]);
}

export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push(["event", eventName, params ?? {}]);
}
