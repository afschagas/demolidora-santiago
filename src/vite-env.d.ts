/// <reference types="vite/client" />

/** Opcional: URL pública do site (ex.: https://www.demolidorasantiago.com.br). */
interface ImportMetaEnv {
  readonly VITE_PUBLIC_SITE_URL?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_CONTACT_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
