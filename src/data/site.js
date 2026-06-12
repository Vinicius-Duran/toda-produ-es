export const site = {
  brand: "Todah Produções",
  brandFull: "Todah Produções Artísticas",
  group: "Todah Group",
  whatsapp: "5511999999999",
  whatsappMessage:
    "Olá! Gostaria de receber uma proposta de contratação de artista pela Todah Produções Artísticas.",
  email: "contato@todahproducoes.com.br",
  instagram: "https://www.instagram.com/",
  heroVideo: {
    src: "",
    poster: "",
  },
};

export function whatsappLink() {
  const text = encodeURIComponent(site.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export const categories = [
  {
    title: "Louvor Congregacional",
    description: "Artistas para momentos de adoração e ministrações.",
    badge: "Adoração",
  },
  {
    title: "Conferências e Congressos",
    description: "Nomes que agregam valor e atraem público.",
    badge: "Grandes encontros",
  },
  {
    title: "Eventos Evangelísticos",
    description: "Shows com grande alcance e impacto.",
    badge: "Alcance",
  },
  {
    title: "Festivais Gospel",
    description: "Atrações para compor line-ups de diferentes portes.",
    badge: "Line-up",
  },
];

export const reasons = [
  {
    title: "Atendimento centralizado",
    description: "Um único canal para consultar disponibilidade, valores e condições.",
  },
  {
    title: "Casting consolidado",
    description: "Artistas reconhecidos nacionalmente e em constante crescimento.",
  },
  {
    title: "Segurança e profissionalismo",
    description: "Equipe especializada acompanhando todo o processo de contratação.",
  },
  {
    title: "Soluções para diferentes eventos",
    description: "Desde igrejas locais até grandes conferências e festivais.",
  },
];

export const experience = [
  "Atendimento especializado",
  "Suporte durante o processo de contratação",
  "Informações técnicas do artista",
  "Agendamento e logística organizados",
  "Transparência e segurança",
];
