import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const OUTPUT_DIR = path.join(PUBLIC_DIR, "optimized");
const DATA_FILE = path.join(ROOT, "src", "data", "artistImages.js");

const ARTIST_FOLDERS = {
  "esther-fiaux": "Esther Fiaux",
  "anna-clara-rocha": "Anna Clara Rocha",
  "polyana-martins": "Polyana Martins",
  "abraao-alencar": "Abraão Alencar",
  "jesse-alcantara": "Jessé Alcantara",
  "sara-evelyn": "Sara Evelyn",
  "bispa-luciana": "Bispa Luciana",
  "thiago-brito": "Thiago Brito",
  "samuel-tayrone": "Samuel Tayrone",
  "cicero-oliveira": "Cícero Oliveira",
  "thais-helena": "Thais Helena",
  marcados: "Marcados Pagode Gospel",
  "misaias-oliveira": "Misaias Oliveira",
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"]);

function sortImages(files) {
  return [...files].sort((a, b) => {
    const capA = /CAPA|capa|YT/i.test(a) ? 0 : 1;
    const capB = /CAPA|capa|YT/i.test(b) ? 0 : 1;
    if (capA !== capB) return capA - capB;
    return a.localeCompare(b);
  });
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

async function optimizeArtist(artistId, folderName) {
  const sourceDir = path.join(PUBLIC_DIR, folderName);
  const targetDir = path.join(OUTPUT_DIR, artistId);

  if (!fs.existsSync(sourceDir)) {
    return [];
  }

  const files = sortImages(
    fs.readdirSync(sourceDir).filter((file) => IMAGE_EXTENSIONS.has(path.extname(file)))
  );

  if (files.length === 0) {
    return [];
  }

  fs.mkdirSync(targetDir, { recursive: true });

  const urls = [];

  for (let i = 0; i < files.length; i += 1) {
    const fileName = files[i];
    const sourcePath = path.join(sourceDir, fileName);
    const outputName = `${String(i + 1).padStart(2, "0")}.webp`;
    const outputPath = path.join(targetDir, outputName);

    await sharp(sourcePath)
      .rotate()
      .resize({ width: 960, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outputPath);

    urls.push(`/optimized/${artistId}/${outputName}`);
  }

  return urls;
}

function writeArtistImagesFile(mapping) {
  const lines = Object.entries(mapping).map(([artistId, urls]) => {
    const items = urls.map((url) => `    "${url}"`).join(",\n");
    if (urls.length === 0) {
      return `  "${artistId}": [],`;
    }
    return `  "${artistId}": [\n${items},\n  ],`;
  });

  const content = `import { site } from "./site.js";

export const artistImages = {
${lines.join("\n")}
};

export function resolveImageUrl(imagePath) {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  const base = site.imagesCdnBase.replace(/\\/$/, "");
  if (!base) return imagePath;
  return \`\${base}\${imagePath.startsWith("/") ? imagePath : \`/\${imagePath}\`}\`;
}

export function getArtistImages(artistId) {
  return (artistImages[artistId] ?? []).map(resolveImageUrl);
}

export function getArtistCover(artistId) {
  const images = getArtistImages(artistId);
  return images[0] ?? null;
}
`;

  fs.writeFileSync(DATA_FILE, content, "utf8");
}

function writeVercelIgnore() {
  const ignoreLines = [
    "public/Fotos para o Site*",
    ...Object.values(ARTIST_FOLDERS).map((folder) => `public/${folder}`),
  ];

  fs.writeFileSync(path.join(ROOT, ".vercelignore"), `${ignoreLines.join("\n")}\n`, "utf8");
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const mapping = {};
  let totalOutputBytes = 0;

  for (const [artistId, folderName] of Object.entries(ARTIST_FOLDERS)) {
    const urls = await optimizeArtist(artistId, folderName);
    mapping[artistId] = urls;
    console.log(`${artistId}: ${urls.length} imagens`);
  }

  for (const dirEntry of fs.readdirSync(OUTPUT_DIR, { withFileTypes: true })) {
    if (!dirEntry.isDirectory()) continue;
    const artistDir = path.join(OUTPUT_DIR, dirEntry.name);
    for (const file of fs.readdirSync(artistDir)) {
      totalOutputBytes += fs.statSync(path.join(artistDir, file)).size;
    }
  }

  writeArtistImagesFile(mapping);
  writeVercelIgnore();

  console.log(`\nTotal otimizado: ${formatBytes(totalOutputBytes)}`);
  console.log("Arquivos atualizados: src/data/artistImages.js e .vercelignore");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
