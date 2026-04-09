import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { CONTACT } from "../data/contact";
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

const servicos = [
  {
    icon: FaHome,
    title: "Demolição residencial e predial",
    desc:
      "Casas, apartamentos, sobrados e edificações em área urbana. Contenção de poeira, segregação de materiais e operação compatível com vizinhança.",
  },
  {
    icon: FaIndustry,
    title: "Demolição industrial e comercial",
    desc:
      "Galpões, estruturas metálicas, pé direito alto e plantas com máquinas. Planejamento para desmontagem segura e retirada em prazos acordados.",
  },
  {
    icon: FaTools,
    title: "Demolição mecânica e apoio de máquinas",
    desc:
      "Uso de retroescavadeiras, rompedores e equipamentos adequados ao porte da obra, com operadores certificados e supervisão constante.",
  },
  {
    icon: FaDraftingCompass,
    title: "Demolição parcial e acertos estruturais",
    desc:
      "Remoção seletiva de lajes, paredes ou anexos sem comprometer o que deve permanecer. Ideal para reformas grandes e mudanças de layout.",
  },
  {
    icon: FaTruck,
    title: "Remoção, transporte e entulho",
    desc:
      "Carregamento, caçambas e destinação em locais licenciados. Documentação e fluxo organizado para sua obra não parar por falta de logística.",
  },
];

const etapas = [
  { passo: "01", titulo: "Briefing e visita", texto: "Entendemos o imóvel, restrições e prazo desejado." },
  { passo: "02", titulo: "Planejamento", texto: "Definimos método, equipamentos, equipe e cronograma." },
  { passo: "03", titulo: "Execução", texto: "Demolição com controle de risco e comunicação frequente." },
  { passo: "04", titulo: "Entrega", texto: "Limpeza, remoção de entulho e encerramento alinhado ao combinado." },
];

export default function Services() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 lg:items-start">
          <div className="lg:col-span-2 space-y-8 min-w-0">
            <header>
              <p className="text-[#fc700f] font-semibold text-sm uppercase tracking-wider">
                Soluções completas
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-theme leading-tight">
                Nossos serviços cobrem do projeto à retirada do último resíduo
              </h1>
              <p className="mt-4 text-theme-muted text-base md:text-lg leading-relaxed">
                Cada obra recebe <strong className="text-theme">diagnóstico e método próprios</strong>. Você
                contrata uma equipe que domina demolição em ambiente urbano e industrial, com foco em
                segurança, cumprimento de normas e respeito ao seu cronograma.
              </p>
            </header>

            <div className="grid sm:grid-cols-2 gap-4">
              {servicos.map(({ icon: Icon, title, desc }) => (
                <article
                  key={title}
                  className="theme-card p-5 md:p-6 flex flex-col hover:border-[#fc700f]/40 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fc700f]/15 text-[#fc700f]">
                      <Icon className="text-lg" aria-hidden />
                    </span>
                    <h2 className="text-lg font-bold leading-snug pt-1.5 text-theme">{title}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed flex-1 text-theme-muted">{desc}</p>
                  <Link
                    to="/contato"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#fc700f] opacity-90 group-hover:opacity-100"
                  >
                    Solicitar orçamento
                    <FaArrowRight className="text-xs" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>

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
              <p className="text-xs font-semibold uppercase tracking-wide text-[#fc700f]">
                O que você garante
              </p>
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
                Envie fotos, endereço e prazo pelo WhatsApp. Priorizamos retorno rápido para obras em
                andamento.
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
