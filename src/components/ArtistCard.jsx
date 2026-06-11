import { socialMeta } from "./icons.jsx";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function ArtistCard({ artist, onOpen, style }) {
  const socialKeys = Object.keys(artist.socials);

  return (
    <article
      className="reveal group surface-card relative flex flex-col overflow-hidden"
      style={style}
    >
      <button
        type="button"
        onClick={() => onOpen(artist)}
        className="relative aspect-[4/5] w-full overflow-hidden text-left"
        aria-label={`Ver detalhes de ${artist.name}`}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `radial-gradient(120% 120% at 30% 20%, ${artist.accent}55, transparent 60%), linear-gradient(160deg, #1b1626, #0c0a12)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <span
          className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 font-display text-7xl font-semibold tracking-tight opacity-90"
          style={{ color: artist.accent }}
        >
          {initials(artist.name)}
        </span>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-900 via-ink-900/70 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-ink-950/50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cream/80 backdrop-blur">
          {artist.tag}
        </span>
      </button>

      <div className="relative -mt-14 flex flex-1 flex-col px-6 pb-6">
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
