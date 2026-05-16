import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "../lib/analytics";
import { useCookieConsent } from "../context/CookieConsentContext";

export default function Analytics() {
  const location = useLocation();
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (consent === "accepted") initAnalytics();
  }, [consent]);

  useEffect(() => {
    if (consent !== "accepted") return;
    trackPageView(location.pathname + location.search);
  }, [location, consent]);

  return null;
}
