import { categories } from "../data/site.js";

export default function Categories() {
  return (
    <section id="categorias" className="py-24 lg:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Para cada evento</span>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Encontre o artista ideal para o seu evento
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <article
              key={cat.title}
              className="reveal group surface-card relative overflow-hidden p-8 transition-transform duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              <span className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-gold-300">
                {cat.badge}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold leading-snug">
                {cat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">
                {cat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
