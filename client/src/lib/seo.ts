import { useEffect } from "react";
import { FIRM, ASSETS } from "./site";

const SITE_URL = "https://marciofranca.adv.br";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object | object[];
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

/** Schema base do escritório (Attorney + LegalService). */
export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": ["Attorney", "LegalService"],
  name: FIRM.nome,
  description:
    "Advocacia estratégica, técnica e personalizada em Rio Branco/AC e atuação digital em todo o Brasil. Direito previdenciário, bancário, do consumidor, de família, criminal e agro.",
  url: SITE_URL,
  image: ASSETS.ogImage,
  telephone: "+55-68-99951-1555",
  founder: { "@type": "Person", name: "Márcio França", jobTitle: "Advogado" },
  areaServed: [
    { "@type": "City", name: "Rio Branco" },
    { "@type": "State", name: "Acre" },
    { "@type": "Country", name: "Brasil" },
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
  knowsAbout: [
    "Direito Previdenciário",
    "BPC/LOAS",
    "Aposentadoria Rural",
    "Direito Bancário",
    "Empréstimo Consignado",
    "Direito do Consumidor",
    "Direito de Família",
    "Direito Criminal",
    "Regularização Fundiária",
    "Direito Ambiental Rural",
  ],
  sameAs: [FIRM.instagramUrl],
};

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
