import type { ServiceGalleryFolder } from "./serviceGalleries";

export type ServiceIconId = "home" | "industry" | "tools" | "drafting" | "truck";

export type ServiceDefinition = {
  slug: string;
  /** Texto curto para itens de menu (ex.: Demolição residencial) */
  navLabel: string;
  title: string;
  summary: string;
  iconId: ServiceIconId;
  /** Parágrafo principal da página do serviço */
  lead: string;
  /** Detalhes específicos do serviço */
  bullets: string[];
  /** Pasta de fotos em `public/imagens/` (carrossel na página do serviço) */
  galleryFolder?: ServiceGalleryFolder;
};

export const SERVICES: ServiceDefinition[] = [
  {
    slug: "demolicao-residencial",
    navLabel: "Demolição residencial",
    title: "Demolição residencial e predial",
    summary:
      "Casas, apartamentos, sobrados e edificações em área urbana. Contenção de poeira, segregação de materiais e operação compatível com vizinhança.",
    iconId: "home",
    lead:
      "Atuamos em demolição de casas, sobrados, apartamentos e edificações em áreas urbanas densas, com prioridade para segurança de quem circula ao redor, controle de poeira e ruído, e segregação correta dos materiais gerados.",
    bullets: [
      "Planejamento de acesso, contenções provisórias e isolamento de áreas comuns quando necessário.",
      "Operação alinhada à vizinhança: janelas de trabalho, comunicação prévia e mitigação de impactos.",
      "Demolição de alvenaria, lajes e estruturas leves a médias, com remoção ordenada e preparação do terreno.",
      "Apoio para documentação e destinação de resíduos, mantendo a obra dentro das exigências locais.",
    ],
    galleryFolder: "demo-res",
  },
  {
    slug: "demolicao-industrial-e-comercial",
    navLabel: "Demolição industrial",
    title: "Demolição industrial e comercial",
    summary:
      "Galpões, estruturas metálicas, pé direito alto e plantas com máquinas. Planejamento para desmontagem segura e retirada em prazos acordados.",
    iconId: "industry",
    lead:
      "Demolição e desmontagem de galpões, lojas, escritórios e plantas industriais, incluindo estruturas metálicas, pé direito alto e áreas com máquinas fixas. Foco em método seguro, sequência lógica de desmontagem e cumprimento de prazos.",
    bullets: [
      "Levantamento de riscos específicos: energia, gases, estruturas mistas e equipamentos embutidos.",
      "Desmontagem de coberturas metálicas, mezaninos, silos e estruturas auxiliares com supervisão em campo.",
      "Coordenação com sua equipe ou engenharia para paradas programadas e liberação de áreas.",
      "Retirada em etapas compatíveis com logística de caminhões e caçambas em pátios industriais.",
    ],
    galleryFolder: "demo-ind",
  },
  {
    slug: "demolicao-mecanica",
    navLabel: "Demolição mecânica",
    title: "Demolição mecânica e apoio de máquinas",
    summary:
      "Uso de retroescavadeiras, rompedores e equipamentos adequados ao porte da obra, com operadores certificados e supervisão constante.",
    iconId: "tools",
    lead:
      "Utilizamos retroescavadeiras, rompedores hidráulicos e demais equipamentos dimensionados ao porte da obra, sempre com operadores habilitados e supervisão para manter ritmo e segurança.",
    bullets: [
      "Escolha do conjunto máquina/acessório conforme resistência do material e geometria da estrutura.",
      "Rompedores e pinças para concreto, alvenaria e estruturas metálicas leves, com redução de esforço manual.",
      "Integração com equipes de apoio para corte, puxada controlada e retirada de grandes volumes.",
      "Cronograma de máquinas e caminhões para evitar gargalos na saída de entulho.",
    ],
  },
  {
    slug: "demolicao-parcial",
    navLabel: "Demolição parcial",
    title: "Demolição parcial e acertos estruturais",
    summary:
      "Remoção seletiva de lajes, paredes ou anexos sem comprometer o que deve permanecer. Ideal para reformas grandes e mudanças de layout.",
    iconId: "drafting",
    lead:
      "Remoção seletiva de lajes, paredes, anexos e trechos estruturais quando a reforma exige abrir espaço sem comprometer o que deve ficar de pé. Indicado para mudanças de layout, unificação de ambientes ou implantação de escadas e elevadores.",
    bullets: [
      "Marcação clara do que sai e do que permanece, com proteção de acabamentos e instalações vizinhas.",
      "Apoio pontual de escoramento e contenções leves quando o projeto assim determinar.",
      "Abertura de rasgos, recuos e demolições em laje para novas instalações hidráulicas ou elétricas.",
      "Limpeza e entrega da área pronta para a equipe de reforma ou construção.",
    ],
  },
  {
    slug: "remocao-entulho",
    navLabel: "Remoção de entulho",
    title: "Remoção, transporte e entulho",
    summary:
      "Carregamento, caçambas e destinação em locais licenciados. Documentação e fluxo organizado para sua obra não parar por falta de logística.",
    iconId: "truck",
    lead:
      "Carregamento, caçambas, transporte e destinação de resíduos da demolição em locais licenciados. Organizamos o fluxo para sua obra não parar por falta de retirada de material.",
    bullets: [
      "Dimensionamento de caçamba e frequência de troca conforme volume gerado e acesso ao canteiro.",
      "Carga mecânica ou manual conforme espaço disponível e restrições do local.",
      "Encaminhamento a destinação final compatível com a classe do resíduo.",
      "Comunicação com o canteiro para janelas de saída e agendamento de caminhões.",
    ],
    galleryFolder: "demo-ent",
  },
];

export function getServiceBySlug(slug: string | undefined): ServiceDefinition | undefined {
  if (!slug) return undefined;
  return SERVICES.find((s) => s.slug === slug);
}
