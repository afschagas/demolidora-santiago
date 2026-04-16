import type { CarouselSlide } from "../components/ImageCarousel";

/** Pastas em `public/imagens/` — adicione caminhos em `GALLERY_IMAGES_BY_FOLDER` ao incluir novas fotos. */
export const SERVICE_GALLERY_FOLDERS = ["demo-res", "demo-ind", "demo-ent"] as const;
export type ServiceGalleryFolder = (typeof SERVICE_GALLERY_FOLDERS)[number];

const GALLERY_IMAGES_BY_FOLDER: Record<ServiceGalleryFolder, readonly string[]> = {
  "demo-res": [
    "/imagens/demo-res/demo-01.jpeg",
    "/imagens/demo-res/demo-02.jpeg",
    "/imagens/demo-res/demo-03.jpeg",
  ],
  "demo-ind": [
    "/imagens/demo-ind/demo-01.jpeg",
    "/imagens/demo-ind/demo-02.jpeg",
    "/imagens/demo-ind/demo-03.jpeg",
    "/imagens/demo-ind/demo-04.jpeg",
    "/imagens/demo-ind/demo-05.jpeg",
    "/imagens/demo-ind/demo-06.jpeg",
    "/imagens/demo-ind/demo-07.jpeg",
    "/imagens/demo-ind/demo-08.jpeg",
    "/imagens/demo-ind/demo-09.jpeg",
    "/imagens/demo-ind/demo-10.jpeg",
    "/imagens/demo-ind/demo-11.jpeg",
    "/imagens/demo-ind/demo-12.jpeg",
    "/imagens/demo-ind/demo-13.jpeg",
    "/imagens/demo-ind/demo-14.jpeg",
    "/imagens/demo-ind/demo-15.jpeg",
  ],
  "demo-ent": [
    "/imagens/demo-ent/demo-01.jpeg",
    "/imagens/demo-ent/demo-02.jpeg",
    "/imagens/demo-ent/demo-03.jpeg",
  ],
};

export function gallerySlidesForFolder(folder: ServiceGalleryFolder, navLabel: string): CarouselSlide[] {
  return GALLERY_IMAGES_BY_FOLDER[folder].map((src, i) => ({
    src,
    alt: `${navLabel} — imagem ${i + 1}`,
  }));
}
