import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { CONTACT } from "../data/contact";
import ImageCarousel from "../components/ImageCarousel";
import { gallerySlidesForFolder } from "../data/serviceGalleries";
import { getServiceBySlug, SERVICES, type ServiceDefinition, type ServiceIconId } from "../data/services";
import {
  FaWhatsapp,
  FaHome,
  FaIndustry,
  FaTruck,
  FaTools,
  FaDraftingCompass,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const iconById: Record<ServiceIconId, typeof FaHome> = {
  home: FaHome,
  industry: FaIndustry,
  tools: FaTools,
  drafting: FaDraftingCompass,
  truck: FaTruck,
};

const etapas = [
  { passo: "01", titulo: "Briefing e visita", texto: "Entendemos o imóvel, restrições e prazo desejado." },
  { passo: "02", titulo: "Planejamento", texto: "Definimos método, equipamentos, equipe e cronograma." },
  { passo: "03", titulo: "Execução", texto: "Demolição com controle de risco e comunicação frequente." },
  { passo: "04", titulo: "Entrega", texto: "Limpeza, remoção de entulho e encerramento alinhado ao combinado." },
];

function ServiceIcon({ id }: { id: ServiceIconId }) {
  const Icon = iconById[id];
  return <Icon className="text-lg" aria-hidden />;
}

function ServiceCard({ s, linkToDetail }: { s: ServiceDefinition; linkToDetail: boolean }) {
  const Icon = iconById[s.iconId];
  return (
    <article className="theme-card p-5 md:p-6 flex flex-col hover:border-[#fc700f]/40 transition-colors group">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fc700f]/15 text-[#fc700f]">
          <Icon className="text-lg" aria-hidden />
        </span>
        <h2 className="text-lg font-bold leading-snug pt-1.5 text-theme">{s.title}</h2>
      </div>
      <p className="mt-3 text-sm leading-relaxed flex-1 text-theme-muted">{s.summary}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        {linkToDetail && (
          <Link
            to={`/servicos/${s.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#fc700f] opacity-90 group-hover:opacity-100"
          >
            Ver detalhes
            <FaArrowRight className="text-xs" aria-hidden />
          </Link>
        )}
        <Link
          to="/contato"
          className="inline-flex items-center gap-1 text-sm font-semibold text-theme-muted hover:text-[#fc700f]"
        >
          Solicitar orçamento
          <FaArrowRight className="text-xs" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export default function Services() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (slug && !service) {
    return <Navigate to="/servicos" replace />;
  }

  const isDetail = Boolean(service);
  const gallerySlides =
    service?.galleryFolder != null ? gallerySlidesForFolder(service.galleryFolder, service.navLabel) : [];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 lg:items-start">
          <div className="lg:col-span-2 space-y-8 min-w-0">
            <header>
              {isDetail && service ? (
                <p className="text-[#fc700f] font-semibold text-sm tracking-wide">
                  <Link to="/servicos" className="hover:underline underline-offset-2">Serviços</Link>
                  <span className="mx-1.5 opacity-75" aria-hidden>
                    |
                  </span>
                  <span>{service.navLabel}</span>
                </p>
              ) : (
                <p className="text-[#fc700f] font-semibold text-sm uppercase tracking-wider">Soluções completas</p>
              )}
              {isDetail && service ? (
                <>
                  <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-theme leading-tight">{service.title}</h1>
                  <p className="mt-4 text-theme-muted text-base md:text-lg leading-relaxed">{service.lead}</p>
                  {gallerySlides.length > 0 && (
                    <div className="mt-6">
                      <ImageCarousel
                        slides={gallerySlides}
                        ariaLabel={`Fotos: ${service.navLabel}`}
                        className="shadow-lg shadow-black/10"
                      />
                    </div>
                  )}
                  <ul className="mt-6 space-y-3 text-theme-muted text-base leading-relaxed">
                    {service.bullets.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#fc700f]" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-theme leading-tight">
                    Nossos serviços cobrem do projeto à retirada do último resíduo
                  </h1>
                  <p className="mt-4 text-theme-muted text-base md:text-lg leading-relaxed">
                    Cada obra recebe <strong className="text-theme">diagnóstico e método próprios</strong>. Você
                    contrata uma equipe que domina demolição em ambiente urbano e industrial, com foco em segurança,
                    cumprimento de normas e respeito ao seu cronograma.
                  </p>
                </>
              )}
            </header>

            {!isDetail && (
              <div className="grid sm:grid-cols-2 gap-4">
                {SERVICES.map((s) => (
                  <ServiceCard key={s.slug} s={s} linkToDetail />
                ))}
              </div>
            )}

            {isDetail && service && (
              <section className="theme-card p-5 md:p-6 flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#fc700f]/15 text-[#fc700f]">
                  <ServiceIcon id={service.iconId} />
                </span>
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-theme">Resumo</h2>
                  <p className="mt-2 text-sm leading-relaxed text-theme-muted">{service.summary}</p>
                  <Link
                    to="/contato"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#fc700f]"
                  >
                    Solicitar orçamento deste serviço
                    <FaArrowRight className="text-xs" aria-hidden />
                  </Link>
                </div>
              </section>
            )}

            <section className="theme-card p-5 md:p-7">
              <h2 className="text-xl font-bold text-theme">Como trabalhamos</h2>
              <p className="mt-2 text-sm text-theme-muted max-w-2xl">
                Processo transparente para você saber o que esperar em cada fase.
              </p>
              <ol className="mt-6 grid sm:grid-cols-2 gap-4">
                {etapas.map(({ passo, titulo, texto }) => (
                  <li key={passo} className="surface-inset flex gap-3 p-4">
                    <span className="text-[#fc700f] font-black text-lg leading-none">{passo}</span>
                    <div>
                      <p className="font-bold text-theme">{titulo}</p>
                      <p className="mt-1 text-sm leading-relaxed text-theme-muted">{texto}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <div className="rounded-xl border border-[#fc700f]/25 bg-[#fc700f]/[0.07] p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-bold text-theme">Não encontrou o serviço listado?</p>
                <p className="mt-1 text-sm text-theme-muted">
                  Descreva sua necessidade — avaliamos casos especiais e projetos customizados.
                </p>
              </div>
              <Link
                to="/contato"
                className="shrink-0 inline-flex items-center justify-center rounded-lg border border-theme bg-[var(--theme-panel)] text-theme font-bold text-sm py-3 px-6 transition-colors hover:bg-[var(--theme-fg)] hover:text-[var(--theme-bg)]"
              >
                Fale com a equipe
              </Link>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="theme-card p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#fc700f]">O que você garante</p>
              <ul className="mt-4 space-y-3 text-sm text-theme-muted">
                <li className="flex gap-2">
                  <FaCheckCircle className="text-[#fc700f] shrink-0 mt-0.5" aria-hidden />
                  Equipe e equipamentos dimensionados à sua obra
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-[#fc700f] shrink-0 mt-0.5" aria-hidden />
                  Alinhamento com normas e boas práticas de segurança
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-[#fc700f] shrink-0 mt-0.5" aria-hidden />
                  Suporte de orçamento a acompanhamento em campo
                </li>
              </ul>
            </div>

            <div className="theme-card p-5 md:p-6">
              <p className="font-bold text-theme text-lg">Orçamento prioritário</p>
              <p className="mt-2 text-sm text-theme-muted">
                Envie fotos, endereço e prazo pelo WhatsApp. Priorizamos retorno rápido para obras em andamento.
              </p>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#ff7900] hover:bg-[#fc7010] text-white font-extrabold uppercase text-sm tracking-wide py-3.5 px-4 transition-colors shadow-lg shadow-black/25"
              >
                <FaWhatsapp className="text-xl" />
                Chamar no WhatsApp
              </a>
              <Link
                to="/contato"
                className="mt-2 block text-center text-sm font-semibold text-[#fc700f] hover:underline underline-offset-2"
              >
                Ou preencha o formulário de contato
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
