import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { site, whatsappLink } from "../data/site.js";
import { ArrowIcon } from "./icons.jsx";

const links = [
  { href: "#artistas", label: "Artistas" },
  { href: "#categorias", label: "Eventos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#sobre", label: "Sobre" },
  { href: "#orcamento", label: "Orçamento" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const mobileMenu = (
    <div
      className={`fixed inset-0 z-[120] flex flex-col bg-ink-950 px-6 pb-8 pt-24 backdrop-blur-xl transition-all duration-300 lg:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={() => setOpen(false)}
        className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5"
      >
        <span className="relative block h-5 w-5">
          <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-cream" />
          <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-cream" />
        </span>
      </button>

      <div className="flex flex-1 flex-col overflow-y-auto">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-5 font-display text-2xl text-cream/90"
          >
            {link.label}
          </a>
        ))}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="btn btn-gold mt-8 w-full"
        >
          Solicitar orçamento
          <ArrowIcon className="h-4 w-4" />
        </a>
        <p className="mt-auto pt-8 text-sm text-muted">{site.email}</p>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[110] transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-ink-950/80 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container-page flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center group" onClick={() => setOpen(false)}>
            <img
              src="/todah-logo-02.png"
              alt={site.brandFull}
              className="h-9 w-auto sm:h-10"
            />
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream/75 transition-colors hover:text-gold-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold hidden lg:inline-flex !px-6 !py-3 text-sm"
          >
            Solicitar orçamento
            <ArrowIcon className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="relative z-[130] grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-ink-950/80 backdrop-blur lg:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 bg-cream transition-all duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-cream transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-cream transition-all duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {createPortal(mobileMenu, document.body)}
    </>
  );
}
