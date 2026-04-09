import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { CONTACT } from "../data/contact";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaHandshake,
  FaLeaf,
  FaComments,
  FaAward,
  FaHardHat,
  FaCheckCircle,
} from "react-icons/fa";

const valores = [
  {
    icon: FaShieldAlt,
    title: "Segurança absoluta",
    text: "Procedimentos, EPIs e análise de risco em cada etapa. A obra só avança com controle.",
  },
  {
    icon: FaLeaf,
    title: "Meio ambiente e legislação",
    text: "Destinação correta de resíduos, ART quando exigido e respeito às normas municipais.",
  },
  {
    icon: FaComments,
    title: "Transparência com o cliente",
    text: "Alinhamento de cronograma, relatórios claros e canal direto com quem decide na obra.",
  },
  {
    icon: FaHandshake,
    title: "Compromisso com prazo",
    text: "Planejamento realista e equipe dimensionada para entregar no combinado.",
  },
];

export default function About() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 lg:items-start">
          <div className="lg:col-span-2 space-y-8 min-w-0">
            <header>
              <p className="text-[#fc700f] font-semibold text-sm uppercase tracking-wider">
                Quem somos
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-theme leading-tight">
                A Demolidora Santiago é sustentada por técnica, método e respeito ao seu projeto
              </h1>
              <p className="mt-4 text-theme-muted text-base md:text-lg leading-relaxed">
                Atuamos em <strong className="text-theme">demolições completas e parciais</strong> em
                São Paulo e região, com equipe própria e equipamentos adequados. Do primeiro alinhamento
                ao último caminhão de entulho, você conta com gente que trata sua obra como prioridade.
              </p>
            </header>

            <section className="theme-card p-5 md:p-7">
              <h2 className="text-xl font-bold text-theme flex items-center gap-2">
                <FaHardHat className="text-[#fc700f] shrink-0" aria-hidden />
                Nossa história e atuação
              </h2>
              <p className="mt-4 text-theme-muted leading-relaxed text-sm md:text-base">
                Nascemos da necessidade de oferecer demolição com padrão profissional: planejamento
                prévio, execução disciplinada e comunicação com engenheiros, construtoras e
                proprietários. Hoje somos referência para quem busca{" "}
                <strong className="text-theme">agilidade sem abrir mão de segurança</strong>.
              </p>
              <p className="mt-3 text-theme-muted leading-relaxed text-sm md:text-base">
                Cobrimos desde <strong className="text-theme">edificações residenciais</strong> até{" "}
                <strong className="text-theme">estruturas industriais e galpões</strong>, sempre com
                vistoria, metodologia definida e soluções sob medida para cada implantação.
              </p>
            </section>

            <section id="valores" className="scroll-mt-28">
              <div className="flex items-center gap-2">
                <span className="h-1 w-8 rounded-full bg-[#fc700f]" aria-hidden />
                <h2 className="text-xl md:text-2xl font-bold text-theme">Equipe e valores</h2>
              </div>
              <p className="mt-2 text-theme-muted text-sm max-w-2xl">
                O que nos guia no canteiro e no relacionamento com cada cliente.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {valores.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="theme-card p-5 transition-colors hover:border-[#fc700f]/35"
                  >
                    <Icon className="text-2xl text-[#fc700f]" aria-hidden />
                    <h3 className="mt-3 font-bold text-theme">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-theme-muted">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-[#fc700f]/25 bg-[#fc700f]/[0.07] p-5 md:p-6">
              <h2 className="text-lg font-bold text-theme flex items-center gap-2">
                <FaAward className="text-[#fc700f]" aria-hidden />
                Por que confiar na Santiago
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-theme-muted">
                <li className="flex gap-2">
                  <FaCheckCircle className="text-[#fc700f] shrink-0 mt-0.5" aria-hidden />
                  Experiência consolidada em obras com restrição de vizinhança e logística urbana
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-[#fc700f] shrink-0 mt-0.5" aria-hidden />
                  Máquinas e ferramental compatíveis com o tipo e porte da estrutura
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle className="text-[#fc700f] shrink-0 mt-0.5" aria-hidden />
                  Opção de visita técnica para orçamento alinhado à realidade do local
                </li>
              </ul>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="theme-card p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#fc700f]">
                Em números e presença
              </p>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-theme-muted text-xs">Experiência</dt>
                  <dd className="text-2xl font-black text-theme">+15 anos</dd>
                </div>
                <div>
                  <dt className="text-theme-muted text-xs">Cobertura</dt>
                  <dd className="text-lg font-bold text-theme">SP e Grande SP</dd>
                </div>
                <div>
                  <dt className="text-theme-muted text-xs">Foco</dt>
                  <dd className="text-sm text-theme-muted leading-snug">
                    Demolição controlada, mecânica e descarte responsável
                  </dd>
                </div>
              </dl>
            </div>

            <div className="theme-card p-5 md:p-6">
              <p className="font-bold text-theme text-lg leading-snug">
                Pronto para iniciar sua demolição com segurança?
              </p>
              <p className="mt-2 text-sm text-theme-muted">
                Solicite orçamento ou tire dúvidas técnicas — retorno ágil pelo WhatsApp ou formulário.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ff7900] hover:bg-[#fc7010] text-white font-extrabold uppercase text-sm tracking-wide py-3.5 px-4 transition-colors shadow-lg shadow-black/25"
                >
                  <FaWhatsapp className="text-xl" />
                  Falar no WhatsApp
                </a>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-theme font-bold text-sm py-3 px-4 text-theme transition-colors hover:bg-[var(--theme-fg)] hover:text-[var(--theme-bg)]"
                >
                  Ir para contato
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
