import fs from "fs";
import path from "path";

const DIST_DIR = path.join(process.cwd(), "dist");
const KEEP_DIRECTORIES = new Set(["assets", "optimized"]);

if (!fs.existsSync(DIST_DIR)) {
  console.log("dist/ não encontrado, nada a limpar.");
  process.exit(0);
}

const removed = [];

for (const entry of fs.readdirSync(DIST_DIR, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  if (KEEP_DIRECTORIES.has(entry.name)) continue;

  const target = path.join(DIST_DIR, entry.name);
  fs.rmSync(target, { recursive: true, force: true });
  removed.push(entry.name);
}

if (removed.length === 0) {
  console.log("Nenhuma pasta de origem para remover do dist.");
} else {
  console.log(`Pastas de origem removidas do dist (${removed.length}):`);
  removed.forEach((name) => console.log(`  - ${name}`));
}
