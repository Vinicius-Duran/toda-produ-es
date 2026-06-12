import { site, whatsappLink } from "../data/site.js";
import { ArrowIcon } from "./icons.jsx";
import HeroVideoBackground, {
  getHeroDirectVideo,
  normalizeHeroVideos,
} from "./HeroVideoBackground.jsx";

export default function Hero() {
  const heroVideos = normalizeHeroVideos(site);
  const directSrc = getHeroDirectVideo(site);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <HeroVideoBackground
          directSrc={directSrc}
          videos={heroVideos}
          poster={site.heroPoster || site.heroVideo.poster}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(8,7,12,0.55)_0%,_transparent_68%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-black/50" />
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
