# Todah Produções Artísticas

Site institucional e vitrine de artistas da Todah Produções Artísticas, agenciamento da música gospel brasileira. Construído com React + Vite e Tailwind CSS v4.

## Stack

- React 19
- Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Fontes: Fraunces (display) + Plus Jakarta Sans (texto)

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (pasta dist)
npm run preview  # pré-visualiza o build
```

## Estrutura

```
src/
  data/
    artists.js   # lista de artistas (bio, tags, destaques e canais)
    site.js      # dados da marca, contato, categorias e diferenciais
  components/    # seções e componentes de UI
  hooks/
    useReveal.js # animação de revelação ao rolar a página
  App.jsx
  index.css      # tema (cores, tipografia, utilitários)
```

## Como editar os artistas

Toda a lista de artistas fica em `src/data/artists.js`. Cada item aceita:

- `name`, `tag`, `bio`
- `accent`: cor usada no card e no modal
- `highlights`: lista de músicas/destaques
- `socials`: `instagram`, `tiktok`, `youtube`, `spotify` (inclua apenas os que existirem)

Os cards usam um monograma com gradiente como capa. Para usar fotos reais,
adicione um campo `image` e ajuste o componente `ArtistCard`.

## Contato / WhatsApp

O número e a mensagem padrão de orçamento ficam em `src/data/site.js`
(`whatsapp`, `whatsappMessage`, `email`). Atualize com os dados reais do cliente.
```
