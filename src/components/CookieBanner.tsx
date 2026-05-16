import { useEffect, useState } from "react";
import { FaCookieBite } from "react-icons/fa";
import { useCookieConsent } from "../context/CookieConsentContext";

export default function CookieBanner() {
  const { hasChosen, consent, acceptCookies, rejectCookies } = useCookieConsent();
  const [panelOpen, setPanelOpen] = useState(() => !hasChosen);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (!hasChosen) setPanelOpen(true);
  }, [hasChosen]);

  const handleAccept = () => {
    acceptCookies();
    setPanelOpen(false);
    setShowOptions(false);
  };

  const handleReject = () => {
    rejectCookies();
    setPanelOpen(false);
    setShowOptions(false);
  };

  return (
    <div className="fixed bottom-4 left-4 z-[70] flex items-end gap-3 max-w-[min(100vw-2rem,26rem)] pointer-events-none">
      <button
        type="button"
        onClick={() => setPanelOpen((open) => !open)}
        className="pointer-events-auto shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-[#fc7010] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:bg-[#ff7900] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fc7010] focus-visible:ring-offset-2"
        aria-label={panelOpen ? "Fechar preferências de cookies" : "Abrir preferências de cookies"}
        aria-expanded={panelOpen}
      >
        <FaCookieBite className="text-2xl" aria-hidden />
      </button>

      {panelOpen && (
        <div
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
          className="pointer-events-auto min-w-0 flex-1 rounded-2xl border border-theme bg-[var(--theme-panel)] p-4 shadow-2xl shadow-black/25 sm:max-w-[22rem]"
        >
          <p
            id="cookie-banner-title"
            className="text-base font-bold text-[#ff7900]"
          >
            Utilizamos cookies
          </p>
          <p
            id="cookie-banner-desc"
            className="mt-2 text-xs sm:text-sm text-theme-muted leading-relaxed"
          >
            O nosso site utiliza cookies para melhorar a navegação e entender como as
            páginas são utilizadas.
          </p>

          {showOptions && (
            <div className="mt-3 rounded-lg border border-theme bg-[var(--theme-raised)] p-3 text-xs text-theme-muted leading-relaxed space-y-2">
              <p>
                <strong className="text-theme">Cookies analíticos:</strong> Google
                Analytics — mede visitas e páginas vistas. Só são ativados se você
                aceitar.
              </p>
              <p>
                Estado atual:{" "}
                <strong className="text-theme">
                  {consent === "accepted"
                    ? "Aceitos"
                    : consent === "rejected"
                      ? "Recusados"
                      : "Ainda não definido"}
                </strong>
              </p>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setShowOptions((v) => !v)}
              className="text-xs font-medium text-theme underline underline-offset-2 hover:text-[#ff7900] transition-colors"
            >
              {showOptions ? "Ocultar opções" : "Minhas opções"}
            </button>
            <div className="flex flex-1 justify-end gap-2 min-w-[10rem]">
              <button
                type="button"
                onClick={handleReject}
                className="flex-1 rounded-lg border-2 border-[#1e3a5f] px-3 py-2 text-xs sm:text-sm font-semibold text-[#1e3a5f] transition-colors hover:bg-[var(--theme-raised)] dark:border-theme dark:text-theme"
              >
                Rejeitar
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="flex-1 rounded-lg bg-[#ff7900] px-3 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#fc7010]"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
