import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type CarouselSlide = { src: string; alt: string };

type ImageCarouselProps = {
  slides: CarouselSlide[];
  /** Rótulo acessível da região (ex.: fotos do serviço) */
  ariaLabel: string;
  className?: string;
};

export default function ImageCarousel({ slides, ariaLabel, className = "" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  if (count === 0) return null;

  const current = slides[index];

  return (
    <div
      className={`theme-card overflow-hidden p-0 ${className}`.trim()}
      role="region"
      aria-roledescription="carrossel"
      aria-label={ariaLabel}
    >
      <div className="relative aspect-[16/10] bg-black/10">
        <img
          src={current.src}
          alt={current.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              aria-label="Imagem anterior"
            >
              <FaChevronLeft className="text-sm" aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              aria-label="Próxima imagem"
            >
              <FaChevronRight className="text-sm" aria-hidden />
            </button>
          </>
        )}
      </div>
      {count > 1 && (
        <div className="flex items-center justify-center gap-2 border-t border-theme py-3">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-[#fc700f]" : "bg-theme-muted/35 hover:bg-theme-muted/60"
              }`}
              aria-label={`Ir para imagem ${i + 1} de ${count}`}
              {...(i === index ? { "aria-current": "true" as const } : {})}
            />
          ))}
        </div>
      )}
    </div>
  );
}
