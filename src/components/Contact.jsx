import { site, whatsappLink } from "../data/site.js";
import { WhatsAppIcon, InstagramIcon } from "./icons.jsx";
import QuoteForm from "./QuoteForm.jsx";

export default function Contact() {
  return (
    <section id="orcamento" className="py-24 lg:py-32">
      <div className="container-page">
        <div className="surface-card relative overflow-hidden">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold-500/12 blur-3xl" />
          <div className="relative grid lg:grid-cols-2">
            <div className="p-10 sm:p-14 lg:p-16">
              <span className="eyebrow">Solicite sua proposta</span>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Vamos construir um evento{" "}
                <span className="gold-text">memorável</span> juntos
              </h2>
              <p className="mt-5 text-cream/70">
                Fale com a nossa equipe e receba uma proposta personalizada para a
                sua programação, com disponibilidade, valores e condições.
              </p>

              <div className="mt-9 space-y-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/12 bg-ink-950/40 px-5 py-4 transition-colors hover:border-gold-500/50"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-500/15 text-gold-300">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">WhatsApp</span>
                    <span className="font-medium">Falar com a equipe agora</span>
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/12 bg-ink-950/40 px-5 py-4 transition-colors hover:border-gold-500/50"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-500/15 text-gold-300">
                    <InstagramIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">E-mail</span>
                    <span className="font-medium">{site.email}</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 bg-ink-900/40 p-10 sm:p-14 lg:border-l lg:border-t-0 lg:p-16">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
