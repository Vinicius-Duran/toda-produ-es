import { useState } from "react";
import artists from "../data/artists.js";
import ArtistCard from "./ArtistCard.jsx";
import ArtistModal from "./ArtistModal.jsx";

export default function Artists() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="artistas" className="py-24 lg:py-32">
      <div className="container-page">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Nosso casting</span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Conheça os artistas da{" "}<br />
              <span className="gold-text">Todah Produções Artísticas</span>
            </h2>
          </div>
          <p className="text-cream/60 sm:max-w-xs sm:text-right">
            {artists.length} artistas disponíveis para o seu evento. Clique para
            ver detalhes e canais oficiais.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {artists.map((artist, i) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              onOpen={setSelected}
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
            />
          ))}
        </div>
      </div>

      <ArtistModal artist={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
