import { site, whatsappLink } from "../data/site.js";

const nav = [
  { href: "#artistas", label: "Artistas" },
  { href: "#categorias", label: "Eventos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#sobre", label: "Sobre" },
  { href: "#orcamento", label: "Orçamento" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/60">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-600 font-display text-lg font-bold text-ink-950">
                T
              </span>
              <span className="font-display text-lg font-semibold">
                {site.brandFull}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-cream/60">
              Conectando artistas, ministérios e públicos por meio de uma gestão
              artística estratégica, profissional e alinhada aos valores do Reino.
            </p>
            <p className="mt-5 text-sm text-muted">
              Integrante da {site.group} · Atuação em todo o Brasil
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-cream/70 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-cream/70">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-300">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold-300">
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {site.brandFull}. Todos os direitos reservados.</p>
          <p>Levando esperança, fé e transformação por meio da música.</p>
        </div>
      </div>
    </footer>
  );
}
