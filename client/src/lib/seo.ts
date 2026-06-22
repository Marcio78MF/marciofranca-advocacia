import { useEffect } from "react";
import { FIRM, ASSETS } from "./site";

const SITE_URL = "https://marciofranca.adv.br";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object | object[] | (object | object[])[];
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const JSONLD_ID = "seo-jsonld";

/** Define title/description/OG/canonical e injeta JSON-LD da página. */
export function useSeo({ title, description, path = "/", jsonLd }: SeoInput) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ASSETS.ogImage);
    setMeta("property", "og:locale", "pt_BR");
    setMeta("property", "og:site_name", FIRM.nome);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ASSETS.ogImage);
    setLink("canonical", url);

    // JSON-LD
    let script = document.getElementById(JSONLD_ID) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = JSONLD_ID;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [title, description, path, JSON.stringify(jsonLd)]);
}

export const SITE = SITE_URL;

const CIDADES_ACRE = [
  "Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó",
  "Brasiléia", "Epitaciolândia", "Xapuri", "Bujari", "Porto Acre",
  "Acrelândia", "Plácido de Castro", "Assis Brasil", "Mâncio Lima",
  "Rodrigues Alves", "Capixaba",
];

/** Schema base do escritório (Attorney + LegalService + LocalBusiness). */
export const legalServiceSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${SITE_URL}/#attorney`,
    name: FIRM.advogado,
    jobTitle: "Advogado",
    description: "Advogado responsável pelo escritório Márcio França Advocacia, inscrito na OAB/AC sob o nº 2882.",
    url: SITE_URL,
    image: ASSETS.ogImage,
    telephone: "+55-68-99951-1555",
    worksFor: { "@type": "LegalService", "@id": `${SITE_URL}/#legalservice` },
    knowsAbout: [
      "Direito Previdenciário", "BPC/LOAS", "Aposentadoria Rural",
      "Direito Bancário", "Empréstimo Consignado", "Direito do Consumidor",
      "Direito de Família", "Direito Criminal", "Regularização Fundiária",
      "Direito Ambiental Rural", "Direito do Agronegócio",
    ],
    sameAs: [FIRM.instagramUrl],
  },
  {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/#legalservice`,
    name: FIRM.nome,
    description:
      "Advocacia estratégica, técnica e personalizada em Rio Branco/AC e atuação digital em todo o Brasil. Direito previdenciário, bancário, do consumidor, de família, criminal e agro.",
    url: SITE_URL,
    image: ASSETS.ogImage,
    telephone: "+55-68-99951-1555",
    founder: { "@type": "Person", name: "Márcio França", jobTitle: "Advogado" },
    areaServed: [
      ...CIDADES_ACRE.map((c) => ({ "@type": "City" as const, name: c })),
      { "@type": "State" as const, name: "Acre" },
      { "@type": "Country" as const, name: "Brasil" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Epaminondas Jácome, nº 2172, Cerâmica",
      addressLocality: "Rio Branco",
      addressRegion: "AC",
      postalCode: "69905-076",
      addressCountry: "BR",
    },
    geo: { "@type": "GeoCoordinates", latitude: -9.9747, longitude: -67.8076 },
    hasMap: FIRM.mapsLink,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    knowsAbout: [
      "Direito Previdenciário", "BPC/LOAS", "Aposentadoria Rural",
      "Direito Bancário", "Empréstimo Consignado", "Direito do Consumidor",
      "Direito de Família", "Direito Criminal", "Regularização Fundiária",
      "Direito Ambiental Rural", "Direito do Agronegócio",
    ],
    sameAs: [FIRM.instagramUrl],
  },
];

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
