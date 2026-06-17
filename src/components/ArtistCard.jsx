import { getArtistCover, getArtistImages } from "../data/artistImages.js";
import { socialMeta } from "./icons.jsx";
import ArtistGallery from "./ArtistGallery.jsx";

export default function ArtistCard({ artist, onOpen, style }) {
  const socialKeys = Object.keys(artist.socials);
  const cover = getArtistCover(artist.id);
  const gallery = getArtistImages(artist.id);

  return (
    <article
      className="reveal group metal-follow surface-card relative flex flex-col overflow-hidden"
      style={style}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <ArtistGallery
          cover={cover}
          gallery={gallery}
          name={artist.name}
          accent={artist.accent}
          variant="card"
        />

        <button
          type="button"
          onClick={() => onOpen(artist)}
          className="absolute inset-0 z-10"
          aria-label={`Ver detalhes de ${artist.name}`}
        />

        <span className="pointer-events-none absolute left-5 top-5 z-20 rounded-full border border-white/15 bg-ink-950/50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cream/80 backdrop-blur">
          {artist.tag}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col px-6 pb-6 pt-5">
        <h3 className="font-display text-2xl font-semibold leading-tight">
          {artist.name}
        </h3>

        {artist.highlights.length > 0 && (
          <p className="mt-2 line-clamp-1 text-sm text-cream/55">
            {artist.highlights.slice(0, 3).join(" · ")}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2.5">
            {socialKeys.map((key) => {
              const meta = socialMeta(key);
              if (!meta) return null;
              const { label, Icon } = meta;
              return (
                <a
                  key={key}
                  href={artist.socials[key]}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${artist.name} no ${label}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-cream/65 transition-colors hover:border-gold-500/50 hover:text-gold-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => onOpen(artist)}
            className="text-sm font-semibold text-gold-300 transition-colors hover:text-gold-400"
          >
            Detalhes
          </button>
        </div>
      </div>
    </article>
  );
}
