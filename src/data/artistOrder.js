export const featuredArtistOrder = [
  "anna-clara-rocha",
  "sara-evelyn",
  "misaias-oliveira",
  "samuel-tayrone",
  "marcados",
  "thais-helena",
  "cicero-oliveira",
  "abraao-alencar",
  "valesca-mayssa",
  "kailane-frauches",
  "kemilly-santos",
  "kellen-byanca",
  "stella-laura",
  "esther-fiaux",
  "thiago-brito",
  "todah-worship",
  "fogo-e-gloria",
  "suellen-brum",
  "raquel-olliver",
];

export function getOrderedArtists(artists) {
  const byId = new Map(artists.map((artist) => [artist.id, artist]));
  const ordered = [];
  const used = new Set();

  for (const id of featuredArtistOrder) {
    const artist = byId.get(id);
    if (!artist) continue;
    ordered.push(artist);
    used.add(id);
  }

  const remaining = artists
    .filter((artist) => !used.has(artist.id))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return [...ordered, ...remaining];
}
