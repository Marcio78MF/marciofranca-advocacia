/* HUB AGRO — vertical especializada para o produtor rural da Amazônia Legal. */
import { Link } from "wouter";
import { ArrowRight, Check, Leaf, ScrollText, Tractor } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Eyebrow, CtaButtons, CtaBand } from "@/components/Bits";
import { AreaIcon } from "@/components/AreaCard";
import { Faq } from "@/components/Faq";
import { AREAS_AGRO, ASSETS, FIRM } from "@/lib/site";
import { useSeo, legalServiceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

const PILARES = [
  { icon: ScrollText, titulo: "Regularização Fundiária", texto: "Titulação, usucapião rural e regularização junto a INCRA, ITERACRE e SPU.", href: "/regularizacao-fundiaria" },
  { icon: Leaf, titulo: "Ambiental Rural", texto: "CAR, Reserva Legal, APP e defesa em autos de infração e embargos do IBAMA/SEMA.", href: "/ambiental-rural" },
  { icon: Tractor, titulo: "Aposentadoria Rural", texto: "Benefício do trabalhador rural e do segurado especial, com prova material organizada.", href: "/aposentadoria-rural" },
];

const AGRO_FAQ = [
  { q: "Por que ter um hub jurídico especializado em Agro no Acre?", a: "O produtor rural na Amazônia Legal enfrenta um conjunto particular de obrigações fundiárias e ambientais — regularização de posse, CAR, Reserva Legal, APP, embargos do IBAMA e da SEMA — que se conectam entre si. Tratá-las de forma integrada dá segurança jurídica e valoriza a propriedade." },
  { q: "Regularização fundiária e ambiental são a mesma coisa?", a: "Não. A regularização fundiária trata da titulação e da propriedade/posse da terra (INCRA, ITERACRE). A ambiental trata da conformidade ecológica (CAR, Reserva Legal, APP, Código Florestal). Frequentemente caminham juntas, e por isso as reunimos neste hub." },
  { q: "Recebi um embargo ambiental. Ainda posso regularizar?", a: "Sim. O Código Florestal (Lei 12.651/2012) prevê instrumentos como o Programa de Regularização Ambiental (PRA), que podem suspender sanções. A defesa técnica do auto e do embargo analisa vícios e proporcionalidade, buscando anulação, redução ou desembargo." },
];

export default function Agro() {
  useSeo({
    title: `Hub Agro — Direito do Agronegócio na Amazônia Legal | ${FIRM.nome}`,
    description:
      "Vertical jurídica especializada para o produtor rural do Acre: regularização fundiária, ambiental rural (CAR, Reserva Legal, APP, embargos) e aposentadoria rural.",
    path: "/agro",
    jsonLd: [
      legalServiceSchema,
      faqSchema(AGRO_FAQ),
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Hub Agro", path: "/agro" },
      ]),
    ],
  });

  return (
    <Layout>
      {/* Hero Agro */}
      <section className="relative overflow-hidden pt-28 pb-20 text-white lg:pt-40 lg:pb-28">
        <img src={ASSETS.agroBg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16231a]/95 via-[#1d2b1f]/85 to-[#1d2b1f]/45" />
        <div className="container relative max-w-3xl">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-white/85">
            <Leaf className="h-3.5 w-3.5" />
            Vertical Agro · Amazônia Legal
          </span>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl">
            Direito do Agro para quem produz no Acre
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80 text-pretty">
            Regularização fundiária, conformidade ambiental e direito previdenciário rural reunidos em
            um único hub. Segurança jurídica para a sua terra, o seu negócio e a sua família.
          </p>
          <CtaButtons light className="mt-9" />
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="reveal max-w-2xl">
            <Eyebrow>Três frentes, uma estratégia</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance sm:text-4xl">
              Como o Hub Agro funciona
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              As demandas do campo se conectam. Atuamos de forma integrada para resolver a raiz do
              problema, não apenas o sintoma.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PILARES.map((p, i) => (
              <Link
                key={p.href}
                href={p.href}
                className="lift reveal group flex flex-col rounded-2xl border border-border bg-card p-7 hover:border-agro/40 hover:shadow-[0_20px_50px_-20px_rgba(62,86,65,0.35)]"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-agro/10 p-3 text-agro">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{p.titulo}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-agro">
                  Ver detalhes
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais do Agro */}
      <section className="relative overflow-hidden bg-[#1d2b1f] py-20 text-white">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="container relative grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <Eyebrow className="text-white/70">Por que o produtor confia</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-balance">
              Visão jurídica e negocial do agronegócio
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Combinamos técnica jurídica com entendimento da realidade do campo acreano. O objetivo é
              dar previsibilidade e proteger o patrimônio rural.
            </p>
          </div>
          <ul className="reveal space-y-4">
            {[
              "Atuação integrada entre fundiário, ambiental e previdenciário rural",
              "Defesa técnica em autos de infração e embargos (IBAMA/SEMA)",
              "Regularização do CAR e adesão ao Programa de Regularização Ambiental (PRA)",
              "Contratos agrários e segurança jurídica para o negócio rural",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-xl bg-white/[0.04] p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#8fbf9a]" />
                <span className="text-sm text-white/85">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Áreas Agro detalhadas (cards) */}
      <section className="bg-background py-20">
        <div className="container">
          <h2 className="reveal font-serif text-2xl font-semibold text-foreground">
            Áreas conectadas ao Hub Agro
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {AREAS_AGRO.map((a) => (
              <Link
                key={a.slug}
                href={`/${a.slug}`}
                className="lift reveal flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-agro/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-agro/10 text-agro">
                  <AreaIcon name={a.icone} className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-serif text-base font-semibold text-foreground">{a.titulo}</div>
                  <div className="text-xs text-muted-foreground">{a.curto}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Agro */}
      <section className="bg-secondary/40 py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance">
              Dúvidas sobre o Agro
            </h2>
          </div>
          <div className="reveal">
            <Faq items={AGRO_FAQ} />
          </div>
        </div>
      </section>

      <CtaBand titulo="Sua propriedade precisa de segurança jurídica?" texto="Converse com quem entende de direito do agro na Amazônia Legal." />
    </Layout>
  );
}
