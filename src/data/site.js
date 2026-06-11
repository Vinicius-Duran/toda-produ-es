export const site = {
  brand: "Todah Produções",
  brandFull: "Todah Produções Artísticas",
  group: "Todah Group",
  whatsapp: "5511999999999",
  whatsappMessage:
    "Olá! Gostaria de receber uma proposta de contratação de artista pela Todah Produções Artísticas.",
  email: "contato@todahproducoes.com.br",
  instagram: "https://www.instagram.com/",
};

export function whatsappLink() {
  const text = encodeURIComponent(site.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export const categories = [
  {
    title: "Louvor Congregacional",
    description: "Artistas para momentos de adoração e ministrações que conduzem a igreja à presença de Deus.",
    badge: "Adoração",
  },
  {
    title: "Conferências e Congressos",
    description: "Nomes que agregam valor à programação e atraem público para grandes encontros.",
    badge: "Grandes encontros",
  },
  {
    title: "Eventos Evangelísticos",
    description: "Shows com grande alcance e impacto para alcançar vidas com a mensagem do Evangelho.",
    badge: "Alcance",
  },
  {
    title: "Festivais Gospel",
    description: "Atrações para compor line-ups de diferentes portes, do regional ao nacional.",
    badge: "Line-up",
  },
];

export const reasons = [
  {
    title: "Atendimento centralizado",
    description: "Um único canal para consultar disponibilidade, valores e condições de cada artista.",
  },
  {
    title: "Casting consolidado",
    description: "Artistas reconhecidos nacionalmente e em constante crescimento nas plataformas.",
  },
  {
    title: "Segurança e profissionalismo",
    description: "Equipe especializada acompanhando todo o processo de contratação, do início ao palco.",
  },
  {
    title: "Soluções para cada evento",
    description: "Desde igrejas locais até grandes conferências, festivais e projetos especiais.",
  },
];

export const experience = [
  "Atendimento especializado",
  "Suporte durante o processo de contratação",
  "Informações técnicas do artista",
  "Agendamento e logística organizados",
  "Transparência e segurança",
];
