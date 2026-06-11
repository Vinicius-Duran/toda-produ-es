import { reasons } from "../data/site.js";

export default function WhyUs() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32">
      <div className="container-page">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">Por que a Todah</span>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Por que contratar com a{" "}
            <span className="gold-text">Todah Produções Artísticas?</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reasons.map((reason, i) => (
            <article
              key={reason.title}
              className="reveal group flex gap-5 rounded-xl2 border border-white/10 bg-ink-850/50 p-8 transition-colors duration-400 hover:border-gold-500/40"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 font-display text-lg font-semibold text-gold-300 ring-1 ring-gold-500/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">{reason.title}</h3>
                <p className="mt-2 text-cream/65">{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
