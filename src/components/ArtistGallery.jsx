import { useState } from "react";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function ChevronIcon({ direction = "left", className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FallbackArt({ name, accent, variant }) {
  const textSize = variant === "modal" ? "text-7xl sm:text-8xl" : "text-7xl";

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 120% at 30% 20%, ${accent}55, transparent 60%), linear-gradient(160deg, #1b1626, #0c0a12)`,
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
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-semibold tracking-tight opacity-90 ${textSize}`}
        style={{ color: accent }}
      >
        {initials(name)}
      </span>
    </>
  );
}

export default function ArtistGallery({ images, name, accent, variant = "card", className = "" }) {
  const [index, setIndex] = useState(0);
  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;
  const isModal = variant === "modal";

  const go = (event, direction) => {
    event.stopPropagation();
    event.preventDefault();
    setIndex((current) => (current + direction + images.length) % images.length);
  };

  const goTo = (event, target) => {
    event.stopPropagation();
    event.preventDefault();
    setIndex(target);
  };

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {hasImages ? (
        images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${name} - foto ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))
      ) : (
        <FallbackArt name={name} accent={accent} variant={variant} />
      )}

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent ${
          isModal ? "h-24 from-ink-800" : "h-2/3 from-ink-900 via-ink-900/70"
        }`}
      />

      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={(event) => go(event, -1)}
            className={`absolute left-3 top-1/2 z-20 grid -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink-950/60 text-cream/90 backdrop-blur transition hover:border-gold-500/50 hover:text-gold-300 ${
              isModal ? "h-10 w-10" : "h-8 w-8 opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
            }`}
          >
            <ChevronIcon direction="left" className={isModal ? "h-5 w-5" : "h-4 w-4"} />
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={(event) => go(event, 1)}
            className={`absolute right-3 top-1/2 z-20 grid -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-ink-950/60 text-cream/90 backdrop-blur transition hover:border-gold-500/50 hover:text-gold-300 ${
              isModal ? "h-10 w-10" : "h-8 w-8 opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
            }`}
          >
            <ChevronIcon direction="right" className={isModal ? "h-5 w-5" : "h-4 w-4"} />
          </button>

          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Ir para foto ${i + 1}`}
                onClick={(event) => goTo(event, i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-gold-400" : "w-1.5 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
