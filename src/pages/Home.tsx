import Layout from "../components/Layout";

const HERO_BG =
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2000&q=80";

export default function Home() {
  return (
    <Layout>
      <section className="relative flex-1 flex items-center justify-center min-h-[calc(100dvh-10rem)] md:min-h-[calc(100dvh-8.5rem)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            filter: "grayscale(35%)",
          }}
          aria-hidden
        />
        {/* Overlay ~65% escuro — alinhado à identidade do logo */}
        <div className="absolute inset-0 bg-charcoal/70" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-charcoal/45 to-charcoal/55" aria-hidden />

        <div className="home-hero-copy relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gradient-silver drop-shadow-lg">
            Demolidora especializada {"em\u00A0demolição\u00A0segura"}
          </h1>
          <p className="home-hero-lead mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            A Demolidora Santiago é especialista em demolição completa, oferecendo soluções seguras,
            técnicas e eficientes para qualquer tipo de estrutura. Executamos demolição controlada,
            mecânica, manual e industrial com excelência e total responsabilidade.
          </p>
        </div>
      </section>
    </Layout>
  );
}
