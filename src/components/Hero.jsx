import { whatsappLink } from "../data/site.js";
import { ArrowIcon, StarIcon } from "./icons.jsx";

const stats = [
  { value: "14+", label: "Artistas no casting" },
  { value: "Milhões", label: "de pessoas alcançadas" },
  { value: "Nacional", label: "Atuação em todo o país" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gold-500/12 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-purple-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 72%)",
          }}
        />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center reveal">
            Agenciamento artístico gospel
          </span>

          <h1 className="reveal mt-7 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Os maiores nomes da{" "}
            <span className="gold-text">música gospel</span> em um só lugar
          </h1>

          <p className="reveal mx-auto mt-7 max-w-2xl text-lg text-cream/70 sm:text-xl">
            Contrate artistas da Todah Produções Artísticas para o seu evento — shows,
            congressos, conferências, aniversários de igreja, festivais, eventos
            corporativos e projetos especiais.
          </p>

          <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-gold w-full sm:w-auto">
              Solicitar orçamento
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a href="#artistas" className="btn btn-ghost w-full sm:w-auto">
              Conhecer artistas
            </a>
          </div>

          <div className="reveal mt-8 flex items-center justify-center gap-2 text-sm text-muted">
            <span className="flex text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span>Proposta personalizada para a sua programação</span>
          </div>
        </div>

        <div className="reveal mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-xl2 border border-white/10 bg-white/5 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink-900/60 px-8 py-8 text-center">
              <div className="font-display text-3xl font-semibold gold-text sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
