import { categories } from "../data/site.js";

export default function Categories() {
  return (
    <section id="categorias" className="py-24 lg:py-28">
      <div className="container-page">
        <div className="surface-light relative overflow-hidden p-10 sm:p-14 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-500/12 blur-3xl" />
          <div className="relative">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">Para cada evento</span>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Encontre o artista ideal para o seu evento
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((cat, i) => (
                <article
                  key={cat.title}
                  className="reveal group metal-follow relative overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/[0.04] p-7 transition-transform duration-500 hover:-translate-y-1.5"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-gold-600">
                    {cat.badge}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                    {cat.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
