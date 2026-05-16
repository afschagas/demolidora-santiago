import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentValue,
} from "../lib/cookieConsent";
import { initAnalytics, trackPageView } from "../lib/analytics";

type CookieConsentContextValue = {
  consent: CookieConsentValue | null;
  hasChosen: boolean;
  acceptCookies: () => void;
  rejectCookies: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsentValue | null>(() =>
    readCookieConsent(),
  );

  const acceptCookies = useCallback(() => {
    writeCookieConsent("accepted");
    setConsent("accepted");
    initAnalytics();
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  const rejectCookies = useCallback(() => {
    writeCookieConsent("rejected");
    setConsent("rejected");
  }, []);

  useEffect(() => {
    if (consent === "accepted") initAnalytics();
  }, [consent]);

  const value = useMemo(
    () => ({
      consent,
      hasChosen: consent !== null,
      acceptCookies,
      rejectCookies,
    }),
    [consent, acceptCookies, rejectCookies],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent deve ser usado dentro de CookieConsentProvider");
  }
  return ctx;
}
