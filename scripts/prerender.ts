/* Pré-renderização estática de SEO (postbuild).
 *
 * O site é uma SPA (Vite + wouter) hospedada como build estático na Vercel.
 * Sem este passo, toda rota — inclusive artigos do blog e páginas de área —
 * é servida com o mesmo dist/public/index.html genérico para qualquer
 * cliente que não execute JavaScript (crawlers, bots de preview do
 * WhatsApp/Facebook/LinkedIn/Twitter), já que o <title>, a meta description,
 * o Open Graph e o JSON-LD de cada página só são aplicados em tempo de
 * execução pelo hook useSeo() (client/src/lib/seo.ts).
 *
 * Este script gera, para cada rota, um dist/public/<rota>/index.html com o
 * <head> correto (title, description, OG, canonical e JSON-LD) já embutido
 * no HTML servido estaticamente, reaproveitando os mesmos dados/schemas
 * usados pelas páginas React (client/src/lib/site.ts e seo.ts) para não
 * haver divergência entre o head estático e o que o React aplica no cliente.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  AREAS,
  POSTS,
  FIRM,
  HOME_FAQ,
  AGRO_FAQ,
  ASSETS,
} from "../client/src/lib/site";
import {
  legalServiceSchema,
  faqSchema,
  breadcrumbSchema,
  SITE,
  metaText,
} from "../client/src/lib/seo";

type RouteMeta = {
  path: string;
  title: string;
  description: string;
  jsonLd: unknown;
  ogType?: "website" | "article";
};

const routes: RouteMeta[] = [
  {
    path: "/",
    title:
      "Márcio França Advocacia — Atuação estratégica em Rio Branco/AC e em todo o Brasil",
    description:
      "Defesa dos seus direitos perante o INSS, bancos, concessionárias de energia, conflitos familiares e processos criminais. Advocacia estratégica e personalizada em Rio Branco/AC e atuação digital em todo o Brasil. OAB/AC 2882.",
    jsonLd: [...legalServiceSchema, faqSchema(HOME_FAQ)],
  },
  {
    path: "/sobre",
    title: `Sobre o escritório | ${FIRM.nome}`,
    description:
      "Conheça o escritório Márcio França Advocacia: mais de 15 anos de atuação estratégica, técnica e personalizada, com sede em Rio Branco/AC e atuação digital em todo o Brasil.",
    jsonLd: [
      legalServiceSchema,
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Sobre", path: "/sobre" },
      ]),
    ],
  },
  {
    path: "/privacidade",
    title: `Política de Privacidade | ${FIRM.nome}`,
    description:
      "Como o escritório Márcio França Advocacia trata dados pessoais no site, na triagem, no WhatsApp e na análise de audiência, em conformidade com a LGPD.",
    jsonLd: [
      legalServiceSchema,
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Privacidade", path: "/privacidade" },
      ]),
    ],
  },
  {
    path: "/areas",
    title: `Áreas de Atuação | ${FIRM.nome}`,
    description:
      "Conheça as áreas de atuação: direito previdenciário (BPC/LOAS, aposentadoria rural), bancário (consignado indevido), consumidor (Energisa), família, criminal e agro.",
    jsonLd: [
      legalServiceSchema,
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Áreas de Atuação", path: "/areas" },
      ]),
    ],
  },
  {
    path: "/agro",
    title: `Hub Agro — Direito do Agronegócio na Amazônia Legal | ${FIRM.nome}`,
    description:
      "Vertical jurídica especializada para o produtor rural do Acre: regularização fundiária, ambiental rural (CAR, Reserva Legal, APP, embargos) e aposentadoria rural.",
    jsonLd: [
      legalServiceSchema,
      faqSchema(AGRO_FAQ),
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Hub Agro", path: "/agro" },
      ]),
    ],
  },
  {
    path: "/diagnostico",
    title: `Triagem jurídica inicial | ${FIRM.nome}`,
    description:
      "Organize informações básicas do seu caso antes de iniciar o contato com o escritório pelo WhatsApp.",
    jsonLd: [
      legalServiceSchema,
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Triagem inicial", path: "/diagnostico" },
      ]),
    ],
  },
  {
    path: "/blog",
    title: `Blog Jurídico | ${FIRM.nome}`,
    description:
      "Artigos jurídicos claros e fundamentados sobre BPC/LOAS, aposentadoria rural, consignado indevido, Energisa, direito do agro e mais. Informação de qualidade para você.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `Blog Jurídico — ${FIRM.nome}`,
        url: `${SITE}/blog`,
        blogPost: POSTS.map(p => ({
          "@type": "BlogPosting",
          headline: p.titulo,
          datePublished: p.data,
          url: `${SITE}/blog/${p.slug}`,
        })),
      },
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ],
  },
  ...AREAS.map(
    (area): RouteMeta => ({
      path: `/${area.slug}`,
      title: `${area.titulo} — ${area.curto} | ${FIRM.nome}`,
      description: area.resumo.slice(0, 165),
      jsonLd: [
        legalServiceSchema,
        faqSchema(area.faq),
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Áreas", path: "/areas" },
          { name: area.titulo, path: `/${area.slug}` },
        ]),
      ],
    })
  ),
  ...POSTS.map(
    (post): RouteMeta => ({
      path: `/blog/${post.slug}`,
      title: `${post.titulo} | Blog ${FIRM.nome}`,
      description: post.resumo,
      ogType: "article",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.titulo,
          description: post.resumo,
          datePublished: post.data,
          dateModified: post.data,
          image: `${SITE}${ASSETS.ogImage}`,
          mainEntityOfPage: `${SITE}/blog/${post.slug}`,
          author: { "@type": "Person", name: FIRM.advogado },
          publisher: {
            "@type": "Organization",
            name: FIRM.nome,
            logo: { "@type": "ImageObject", url: `${SITE}${ASSETS.ogImage}` },
          },
          articleSection: post.categoria,
          url: `${SITE}/blog/${post.slug}`,
        },
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.titulo, path: `/blog/${post.slug}` },
        ]),
      ],
    })
  ),
];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderHead(template: string, route: RouteMeta): string {
  const url = `${SITE}${route.path}`;
  const title = escapeHtml(metaText(route.title, 60));
  const description = escapeHtml(metaText(route.description, 155));

  let html = template
    .replace(/<title>[^<]*<\/title>/, () => `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/>/,
      () => `<meta name="description" content="${description}" />`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/>/,
      () => `<meta property="og:title" content="${title}" />`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/>/,
      () => `<meta property="og:description" content="${description}" />`
    )
    .replace(
      /<meta property="og:type" content="[^"]*"\s*\/>/,
      () => `<meta property="og:type" content="${route.ogType ?? "website"}" />`
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      () => `<link rel="canonical" href="${url}" />`
    );

  const extraTags = [
    `<meta property="og:url" content="${url}" />`,
    `<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>`,
  ].join("\n    ");

  return html.replace("</head>", () => `    ${extraTags}\n  </head>`);
}

function renderNotFound(template: string): string {
  const title = "Página não encontrada | Márcio França Advocacia";
  const description =
    "O endereço solicitado não existe ou foi movido. Volte ao início ou confira as áreas de atuação.";
  let html = renderHead(template, {
    path: "/404",
    title,
    description,
    jsonLd: [],
  });
  // Evita indexação da página de erro; canonical genérico de /404 não deve existir.
  html = html
    .replace(
      /<meta name="robots" content="[^"]*"\s*\/>/,
      '<meta name="robots" content="noindex, follow" />'
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      '<link rel="canonical" href="https://www.marciofranca.adv.br/" />'
    );
  return html;
}

function main() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const distDir = join(__dirname, "..", "dist", "public");
  const templatePath = join(distDir, "index.html");

  if (!existsSync(templatePath)) {
    console.error(
      `[prerender] ${templatePath} não encontrado — rode "vite build" antes deste script.`
    );
    process.exit(1);
  }

  const template = readFileSync(templatePath, "utf-8");

  for (const route of routes) {
    const html = renderHead(template, route);
    const outPath =
      route.path === "/"
        ? templatePath
        : join(distDir, route.path.slice(1), "index.html");
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
  }

  // 404.html: Vercel serve com status HTTP 404 quando o path não existe no filesystem
  // (sem rewrite catch-all para index.html). O shell SPA hidrata o NotFound.tsx.
  const notFoundPath = join(distDir, "404.html");
  writeFileSync(notFoundPath, renderNotFound(template), "utf-8");

  console.log(
    `[prerender] ${routes.length} rotas pré-renderizadas + 404.html em ${distDir}`
  );
}

main();
