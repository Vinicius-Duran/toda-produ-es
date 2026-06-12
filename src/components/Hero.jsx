import { site, whatsappLink } from "../data/site.js";
import { ArrowIcon } from "./icons.jsx";

function getYoutubeId(url) {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/);
  return match ? match[1] : null;
}

export default function Hero() {
  const videoSrc = site.heroVideo.src;
  const youtubeId = videoSrc ? getYoutubeId(videoSrc) : null;
  const hasDirectVideo = Boolean(videoSrc && !youtubeId);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        {youtubeId ? (
          <iframe
            className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title="Vídeo de fundo"
            allow="autoplay; encrypted-media"
            tabIndex={-1}
          />
        ) : hasDirectVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={site.heroVideo.poster || undefined}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="h-full w-full bg-ink-950">
            <div className="absolute inset-0 bg-gradient-to-b from-ink-800/80 via-ink-950 to-ink-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(149,82,81,0.18),_transparent_65%)]" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-black/40" />
      </div>

      <div className="container-page relative z-10 px-6 pb-24 pt-36 text-center lg:pb-32 lg:pt-44">
        <h1 className="reveal mx-auto max-w-4xl font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-gold-400 sm:text-5xl lg:text-6xl">
          Os maiores nomes da música gospel em um só lugar
        </h1>

        <p className="reveal mx-auto mt-6 max-w-2xl text-lg font-medium text-cream sm:text-xl">
          Contrate artistas da Todah Produções Artísticas para seu evento
        </p>

        <p className="reveal mx-auto mt-4 max-w-3xl text-base leading-relaxed text-cream/75 sm:text-lg">
          Shows, congressos, conferências, aniversários de igreja, festivais, eventos
          corporativos, projetos especiais e muito mais.
        </p>

        <p className="reveal mx-auto mt-4 max-w-2xl text-base text-cream/70 sm:text-lg">
          Fale com nossa equipe e receba uma proposta personalizada.
        </p>

        <div className="reveal mt-10 flex justify-center">
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-gold w-full sm:w-auto">
            Solicitar orçamento
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
