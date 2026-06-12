import { useEffect } from "react";
import { site } from "../data/site.js";
import { getArtistImages } from "../data/artistImages.js";
import { socialMeta, CloseIcon, ArrowIcon, StarIcon } from "./icons.jsx";
import ArtistGallery from "./ArtistGallery.jsx";

export default function ArtistModal({ artist, onClose }) {
  useEffect(() => {
    if (!artist) return;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [artist, onClose]);

  if (!artist) return null;

  const socialKeys = Object.keys(artist.socials);
  const gallery = getArtistImages(artist.id);
  const message = encodeURIComponent(
    `Olá! Gostaria de uma proposta para contratar ${artist.name} pela Todah Produções Artísticas.`
  );
  const link = `https://wa.me/${site.whatsapp}?text=${message}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink-950/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={artist.name}
    >
      <div
        className="surface-card relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-b-none rounded-t-3xl sm:rounded-xl2"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-30 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink-950/60 text-cream/80 transition-colors hover:border-gold-500/50 hover:text-gold-300"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div key={artist.id} className="group relative h-56 w-full overflow-hidden sm:h-72">
          <ArtistGallery
            cover={gallery[0] ?? null}
            gallery={gallery}
            name={artist.name}
            accent={artist.accent}
            variant="modal"
          />
        </div>

        <div className="px-7 pb-8 pt-2 sm:px-10 sm:pb-10">
          <span className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-widest text-gold-300">
            {artist.tag}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            {artist.name}
          </h2>

          <p className="mt-5 leading-relaxed text-cream/75">{artist.bio}</p>

          {artist.highlights.length > 0 && (
            <div className="mt-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Destaques
              </h3>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {artist.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-sm text-cream/80"
                  >
                    <StarIcon className="h-3.5 w-3.5 text-gold-400" />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          {socialKeys.length > 0 && (
            <div className="mt-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Canais oficiais
              </h3>
              <div className="mt-3 flex flex-wrap gap-2.5">
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
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-cream/80 transition-colors hover:border-gold-500/50 hover:text-gold-300"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold mt-9 w-full sm:w-auto"
          >
            Solicitar proposta para {artist.name}
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
