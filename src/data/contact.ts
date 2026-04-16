/** Dados de contato e localização (única fonte para site e topbar). */
export const CONTACT = {
  phoneDisplay: "+55 (11) 0000-0000",
  phoneTel: "5511000000000",
  whatsappDisplay: "+55 (11) 99999-9999",
  whatsappNumber: "5511999999999",
  whatsappUrl: "https://wa.me/5511999999999",
  email: "contato@demolidorasantiago.com.br",
  hoursLine: "Seg a Sex: 8h às 17h30 | Sáb: 8h às 12h",
  addressLine: "Casa Grande, Diadema — SP",
  addressFull:
    "Localização na região de Casa Grande, Diadema, Grande São Paulo. Atendemos Diadema e cidades vizinhas; solicite visita técnica no seu endereço.",
  /** Iframe Google Maps — Casa Grande, Diadema (SP). */
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=Casa%20Grande%2C%20Diadema%2C%20SP&hl=pt-BR&z=14&output=embed",
} as const;

/** URL AJAX do FormSubmit — entrega na caixa `CONTACT.email` (ex.: Hostinger). */
export function contactFormSubmitAjaxUrl(): string {
  return `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT.email)}`;
}

/**
 * Hostinger — dados para configurar o e-mail em Outlook, celular, etc. (IMAP / POP / SMTP).
 * O site não usa esses servidores: o formulário envia via FormSubmit; não coloque senha SMTP no front-end.
 *
 * - IMAP (entrada): imap.hostinger.com — porta 993 — SSL
 * - POP (entrada):  pop.hostinger.com — porta 995 — SSL
 * - SMTP (saída):   smtp.hostinger.com — porta 465 — SSL
 */
export const HOSTINGER_MAIL_CLIENT = {
  imap: { host: "imap.hostinger.com", port: 993, encryption: "SSL" as const },
  pop: { host: "pop.hostinger.com", port: 995, encryption: "SSL" as const },
  smtp: { host: "smtp.hostinger.com", port: 465, encryption: "SSL" as const },
} as const;
