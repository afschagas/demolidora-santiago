/// <reference types="vite/client" />

/** Opcional: URL pública do site (ex.: https://www.demolidorasantiago.com.br) para o e-mail do FormSubmit mostrar o domínio certo mesmo testando em localhost. */
interface ImportMetaEnv {
  readonly VITE_PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
