import Layout from "../components/Layout";
import { CONTACT } from "../data/contact";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHardHat,
  FaCheckCircle,
} from "react-icons/fa";

const inputClass = "form-input";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10 scroll-mt-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 lg:items-start">
          <div className="order-2 lg:order-1 min-w-0">
            <p className="text-[#fc700f] font-semibold text-sm uppercase tracking-wider">
              Orçamento sem compromisso
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-theme leading-tight">
              Demolição segura no seu projeto — fale com quem entende de obra
            </h1>
            <p className="mt-3 text-theme-muted text-base md:text-lg leading-relaxed">
              Envie seus dados e retornamos com orientação técnica e proposta alinhada ao seu prazo e
              orçamento. Atendimento direto com a equipe Demolidora Santiago.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-lg border border-theme bg-[var(--theme-panel)] px-3 py-3 text-center sm:px-4">
                <p className="text-xl sm:text-2xl font-black text-[#fc700f]">+15</p>
                <p className="text-[10px] sm:text-xs text-theme-muted leading-tight mt-1">anos de experiência</p>
              </div>
              <div className="rounded-lg border border-theme bg-[var(--theme-panel)] px-3 py-3 text-center sm:px-4">
                <p className="text-xl sm:text-2xl font-black text-[#fc700f]">100%</p>
                <p className="text-[10px] sm:text-xs text-theme-muted leading-tight mt-1">foco em segurança</p>
              </div>
              <div className="rounded-lg border border-theme bg-[var(--theme-panel)] px-3 py-3 text-center sm:px-4">
                <p className="text-xl sm:text-2xl font-black text-[#fc700f]">SP</p>
                <p className="text-[10px] sm:text-xs text-theme-muted leading-tight mt-1">capital e região</p>
              </div>
            </div>

            <ul className="mt-5 space-y-2.5 text-sm text-theme-muted">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#fc700f] shrink-0 mt-0.5" aria-hidden />
                <span>
                  Resposta em até <strong className="text-theme">24 horas úteis</strong> para orçamentos.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaShieldAlt className="text-[#fc700f] shrink-0 mt-0.5" aria-hidden />
                <span>Processos alinhados às normas de segurança e meio ambiente.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaHardHat className="text-[#fc700f] shrink-0 mt-0.5" aria-hidden />
                <span>Equipe preparada para demolições residenciais, industriais e estruturas complexas.</span>
              </li>
            </ul>

            <form className="mt-6 flex flex-col gap-3.5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-3.5">
                <input className={inputClass} name="nome" type="text" placeholder="Nome completo *" required />
                <input className={inputClass} name="email" type="email" placeholder="E-mail *" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-3.5">
                <input className={inputClass} name="telefone" type="tel" placeholder="Telefone / WhatsApp *" required />
                <input className={inputClass} name="cidade" type="text" placeholder="Cidade / obra" />
              </div>
              <input
                className={inputClass}
                name="assunto"
                type="text"
                placeholder="Tipo de serviço (ex.: demolição residencial, retirada de entulho)"
              />
              <textarea
                className={`${inputClass} min-h-[140px] resize-y align-top`}
                name="mensagem"
                placeholder="Conte um pouco sobre o imóvel, prazo desejado e o que precisa. Quanto mais detalhes, melhor o retorno."
                rows={5}
                required
              />
              <button
                type="submit"
                className="mt-1 w-full sm:w-auto sm:self-start rounded-lg bg-[#ff7900] hover:bg-[#fc7010] text-white font-extrabold uppercase tracking-wide text-base px-10 py-4 shadow-lg shadow-black/30 transition-colors border-2 border-transparent hover:border-white/20"
              >
                Quero meu orçamento agora
              </button>
              <p className="text-xs text-theme-muted">
                Ao enviar, você autoriza o contato da Demolidora Santiago pelos canais informados.
                Não compartilhamos seus dados com terceiros.
              </p>
            </form>
          </div>

          <aside className="order-1 lg:order-2 space-y-5 lg:sticky lg:top-28">
            <div className="theme-card p-5 md:p-6">
              <h2 className="text-lg font-bold text-theme flex items-center gap-2">
                <span className="h-1 w-8 rounded-full bg-[#fc700f]" aria-hidden />
                Demolidora Santiago
              </h2>
              <p className="mt-3 text-theme-muted text-sm leading-relaxed">
                Especialistas em <strong className="text-theme">demolição controlada</strong>, mecânica e remoção de
                entulho. Planejamento, equipe qualificada e execução com responsabilidade do início ao descarte.
              </p>
            </div>

            <div className="theme-card p-5 md:p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#fc700f]">Fale conosco</h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="flex items-start gap-3 text-theme hover:text-[#fc700f] transition-colors"
                  >
                    <FaPhone className="text-[#fc700f] shrink-0 mt-0.5 text-base" aria-hidden />
                    <span>
                      <span className="block text-theme-muted text-xs">Telefone</span>
                      {CONTACT.phoneDisplay}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-theme hover:text-[#fc700f] transition-colors"
                  >
                    <FaWhatsapp className="text-[#fc700f] shrink-0 mt-0.5 text-base" aria-hidden />
                    <span>
                      <span className="block text-theme-muted text-xs">WhatsApp</span>
                      {CONTACT.whatsappDisplay}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-start gap-3 text-theme hover:text-[#fc700f] transition-colors break-all"
                  >
                    <FaEnvelope className="text-[#fc700f] shrink-0 mt-0.5 text-base" aria-hidden />
                    <span>
                      <span className="block text-theme-muted text-xs">E-mail</span>
                      {CONTACT.email}
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-theme">
                  <FaClock className="text-[#fc700f] shrink-0 mt-0.5 text-base" aria-hidden />
                  <span>
                    <span className="block text-theme-muted text-xs">Horário</span>
                    {CONTACT.hoursLine}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-theme">
                  <FaMapMarkerAlt className="text-[#fc700f] shrink-0 mt-0.5 text-base" aria-hidden />
                  <span>
                    <span className="block text-theme-muted text-xs">Localização</span>
                    {CONTACT.addressLine}
                    <span className="block text-theme-muted mt-1 text-xs leading-snug">{CONTACT.addressFull}</span>
                  </span>
                </li>
              </ul>
            </div>

            <section
              id="mapa"
              className="rounded-xl overflow-hidden border border-theme bg-[var(--theme-panel)] shadow-lg shadow-black/20"
            >
              <iframe
                title="Mapa — Demolidora Santiago"
                src={CONTACT.mapsEmbedSrc}
                className="w-full h-[220px] md:h-[260px] border-0 grayscale-[30%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="px-3 py-2 text-[11px] text-theme-muted text-center">
                Área de atuação — São Paulo e região. Atualize o mapa com o endereço da sede quando necessário.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
