import { useState } from "react";
import { site } from "../data/site.js";
import { ArrowIcon, WhatsAppIcon } from "./icons.jsx";

const eventTypes = [
  "Show / Evento evangelístico",
  "Conferência ou congresso",
  "Festival gospel",
  "Aniversário de igreja",
  "Evento corporativo",
  "Projeto especial",
];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    artist: "",
    type: eventTypes[0],
    date: "",
    city: "",
    message: "",
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Olá, equipe Todah! Gostaria de uma proposta de contratação.",
      form.name && `Nome: ${form.name}`,
      form.artist && `Artista de interesse: ${form.artist}`,
      `Tipo de evento: ${form.type}`,
      form.date && `Data: ${form.date}`,
      form.city && `Cidade/UF: ${form.city}`,
      form.message && `Detalhes: ${form.message}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
  };

  const fieldClass =
    "w-full rounded-2xl border border-ink-900/15 bg-white px-4 py-3.5 text-ink-900 placeholder:text-ink-700/45 outline-none transition-colors focus:border-gold-500/70 focus:bg-white";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm text-ink-700/80">Seu nome</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={update("name")}
          placeholder="Nome completo ou da igreja/empresa"
          className={fieldClass}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-ink-700/80">Artista de interesse</label>
        <input
          type="text"
          value={form.artist}
          onChange={update("artist")}
          placeholder="Opcional"
          className={fieldClass}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-ink-700/80">Tipo de evento</label>
        <select value={form.type} onChange={update("type")} className={fieldClass}>
          {eventTypes.map((t) => (
            <option key={t} value={t} className="bg-cream text-ink-900">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm text-ink-700/80">Data prevista</label>
        <input type="text" value={form.date} onChange={update("date")} placeholder="Ex.: 12/2026" className={fieldClass} />
      </div>

      <div>
        <label className="mb-2 block text-sm text-ink-700/80">Cidade / UF</label>
        <input type="text" value={form.city} onChange={update("city")} placeholder="Ex.: São Paulo / SP" className={fieldClass} />
      </div>

      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm text-ink-700/80">Detalhes do evento</label>
        <textarea
          rows={3}
          value={form.message}
          onChange={update("message")}
          placeholder="Conte um pouco sobre o seu evento e a programação desejada."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button type="submit" className="btn btn-gold sm:col-span-2">
        <WhatsAppIcon className="h-5 w-5" />
        Quero receber uma proposta
        <ArrowIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
