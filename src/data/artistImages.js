import { site } from "./site.js";

export const artistImages = {
  "esther-fiaux": [
    "/optimized/esther-fiaux/01.webp",
    "/optimized/esther-fiaux/02.webp",
    "/optimized/esther-fiaux/03.webp",
    "/optimized/esther-fiaux/04.webp",
    "/optimized/esther-fiaux/05.webp",
    "/optimized/esther-fiaux/06.webp",
    "/optimized/esther-fiaux/07.webp",
    "/optimized/esther-fiaux/08.webp",
    "/optimized/esther-fiaux/09.webp",
  ],
  "anna-clara-rocha": [
    "/optimized/anna-clara-rocha/01.webp",
    "/optimized/anna-clara-rocha/02.webp",
    "/optimized/anna-clara-rocha/03.webp",
    "/optimized/anna-clara-rocha/04.webp",
    "/optimized/anna-clara-rocha/05.webp",
  ],
  "polyana-martins": [
    "/optimized/polyana-martins/01.webp",
    "/optimized/polyana-martins/02.webp",
    "/optimized/polyana-martins/03.webp",
    "/optimized/polyana-martins/04.webp",
    "/optimized/polyana-martins/05.webp",
    "/optimized/polyana-martins/06.webp",
    "/optimized/polyana-martins/07.webp",
  ],
  "abraao-alencar": [
    "/optimized/abraao-alencar/01.webp",
    "/optimized/abraao-alencar/02.webp",
    "/optimized/abraao-alencar/03.webp",
    "/optimized/abraao-alencar/04.webp",
    "/optimized/abraao-alencar/05.webp",
    "/optimized/abraao-alencar/06.webp",
  ],
  "jesse-alcantara": [
    "/optimized/jesse-alcantara/01.webp",
    "/optimized/jesse-alcantara/02.webp",
    "/optimized/jesse-alcantara/03.webp",
    "/optimized/jesse-alcantara/04.webp",
    "/optimized/jesse-alcantara/05.webp",
    "/optimized/jesse-alcantara/06.webp",
    "/optimized/jesse-alcantara/07.webp",
    "/optimized/jesse-alcantara/08.webp",
    "/optimized/jesse-alcantara/09.webp",
  ],
  "sara-evelyn": [
    "/optimized/sara-evelyn/01.webp",
    "/optimized/sara-evelyn/02.webp",
    "/optimized/sara-evelyn/03.webp",
    "/optimized/sara-evelyn/04.webp",
    "/optimized/sara-evelyn/05.webp",
    "/optimized/sara-evelyn/06.webp",
  ],
  "bispa-luciana": [
    "/optimized/bispa-luciana/01.webp",
    "/optimized/bispa-luciana/02.webp",
    "/optimized/bispa-luciana/03.webp",
    "/optimized/bispa-luciana/04.webp",
    "/optimized/bispa-luciana/05.webp",
    "/optimized/bispa-luciana/06.webp",
    "/optimized/bispa-luciana/07.webp",
  ],
  "thiago-brito": [
    "/optimized/thiago-brito/01.webp",
    "/optimized/thiago-brito/02.webp",
    "/optimized/thiago-brito/03.webp",
    "/optimized/thiago-brito/04.webp",
    "/optimized/thiago-brito/05.webp",
    "/optimized/thiago-brito/06.webp",
    "/optimized/thiago-brito/07.webp",
  ],
  "samuel-tayrone": [
    "/optimized/samuel-tayrone/01.webp",
    "/optimized/samuel-tayrone/02.webp",
    "/optimized/samuel-tayrone/03.webp",
    "/optimized/samuel-tayrone/04.webp",
    "/optimized/samuel-tayrone/05.webp",
    "/optimized/samuel-tayrone/06.webp",
    "/optimized/samuel-tayrone/07.webp",
  ],
  "cicero-oliveira": [],
  "thais-helena": [],
  "marcados": [
    "/optimized/marcados/01.webp",
    "/optimized/marcados/02.webp",
    "/optimized/marcados/03.webp",
    "/optimized/marcados/04.webp",
    "/optimized/marcados/05.webp",
    "/optimized/marcados/06.webp",
    "/optimized/marcados/07.webp",
    "/optimized/marcados/08.webp",
    "/optimized/marcados/09.webp",
    "/optimized/marcados/10.webp",
  ],
  "misaias-oliveira": [
    "/optimized/misaias-oliveira/01.webp",
    "/optimized/misaias-oliveira/02.webp",
    "/optimized/misaias-oliveira/03.webp",
    "/optimized/misaias-oliveira/04.webp",
    "/optimized/misaias-oliveira/05.webp",
    "/optimized/misaias-oliveira/06.webp",
    "/optimized/misaias-oliveira/07.webp",
  ],
};

export function resolveImageUrl(imagePath) {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  const base = site.imagesCdnBase.replace(/\/$/, "");
  if (!base) return imagePath;
  return `${base}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;
}

export function getArtistImages(artistId) {
  return (artistImages[artistId] ?? []).map(resolveImageUrl);
}

export function getArtistCover(artistId) {
  const images = getArtistImages(artistId);
  return images[0] ?? null;
}
