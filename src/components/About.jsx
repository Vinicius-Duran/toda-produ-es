import { site } from "../data/site.js";

const pillars = [
  "Gerenciamento artístico",
  "Desenvolvimento de carreiras",
  "Gestão de agendas",
  "Produção de eventos",
  "Relacionamento comercial",
  "Distribuição digital",
];

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-5">
          <span className="eyebrow">Sobre nós</span>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Mais do que agendar eventos, desenvolvemos{" "}
            <span className="gold-text">ministérios e legados</span>
          </h2>
          <p className="mt-6 text-cream/70">
            Integrante da {site.group}, a Todah Produções Artísticas é uma extensão
            estratégica de uma trajetória construída no desenvolvimento e
            agenciamento de carreiras da música cristã no Brasil.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {pillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-cream/75"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal space-y-5 text-cream/70 lg:col-span-7 lg:text-lg">
          <p>
            A Todah Produções Artísticas nasceu com o propósito de conectar artistas,
            ministérios e públicos por meio de uma gestão artística estratégica,
            profissional e alinhada aos valores do Reino.
          </p>
          <p>
            Nosso grande diferencial está em um modelo de atuação exclusivo e
            integrado. Todas as áreas que impactam o desenvolvimento de uma carreira
            atuam de forma conectada: produção musical, audiovisual, marketing,
            distribuição digital, desenvolvimento de repertório, gestão de direitos e
            posicionamento artístico.
          </p>
          <p>
            Com atuação em todo o território nacional, realizamos a negociação e
            gestão de apresentações em igrejas, congressos, conferências, festivais,
            eventos corporativos e produções dos mais diversos formatos — ampliando
            oportunidades e fortalecendo trajetórias sólidas e relevantes.
          </p>
          <p className="border-l-2 border-gold-500 pl-5 font-display text-xl italic text-cream/90">
            “Acreditamos em desenvolver ministérios, construir legados e criar
            conexões que impactam vidas, para que a mensagem do Evangelho alcance cada
            vez mais pessoas.”
          </p>
        </div>
      </div>
    </section>
  );
}
