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
    <footer className="border-t border-ink-900/10 bg-cream text-ink-900">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/TodahProd_PretoColorido.png"
                alt={site.brandFull}
                className="h-11 w-auto"
              />
            </div>
            <p className="mt-5 max-w-sm text-ink-700/75">
              Conectando artistas, ministérios e públicos por meio de uma gestão
              artística estratégica, profissional e alinhada aos valores do Reino.
            </p>
            <p className="mt-5 text-sm text-ink-700/60">
              Integrante da {site.group} · Atuação em todo o Brasil
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-700/65">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-ink-700/80 transition-colors hover:text-gold-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-700/65">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-ink-700/80">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-600">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold-600">
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-900/10 pt-8 text-sm text-ink-700/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.brandFull}. Todos os direitos reservados.</p>
          <p>Levando esperança, fé e transformação por meio da música.</p>
        </div>
      </div>
    </footer>
  );
}
