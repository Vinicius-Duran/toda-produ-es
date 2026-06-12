import { experience, whatsappLink } from "../data/site.js";
import { ArrowIcon, CheckIcon } from "./icons.jsx";

export default function Experience() {
  return (
    <section className="py-24 lg:py-28">
      <div className="container-page">
        <div className="surface-card relative overflow-hidden p-10 sm:p-14 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <span className="eyebrow">Uma experiência completa</span>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Ao contratar pela Todah Produções você conta com:
              </h2>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-gold mt-10">
                Quero receber uma proposta
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>

            <ul className="reveal grid gap-4 self-center">
              {experience.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-900/50 px-5 py-4"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-300">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-lg text-cream/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
