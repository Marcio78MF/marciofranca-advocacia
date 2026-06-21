/* Listagem de todas as áreas de atuação, agrupadas por categoria. */
import { Layout } from "@/components/Layout";
import { Eyebrow, CtaBand } from "@/components/Bits";
import { AreaCard } from "@/components/AreaCard";
import { AREAS, FIRM } from "@/lib/site";
import { useSeo, legalServiceSchema, breadcrumbSchema } from "@/lib/seo";

const CATEGORIAS = ["Previdenciário", "Bancário", "Consumidor", "Família", "Criminal", "Agro"] as const;

export default function Areas() {
  useSeo({
    title: `Áreas de Atuação | ${FIRM.nome}`,
    description:
      "Conheça as áreas de atuação: direito previdenciário (BPC/LOAS, aposentadoria rural), bancário (consignado indevido), consumidor (Energisa), família, criminal e agro.",
    path: "/areas",
    jsonLd: [
      legalServiceSchema,
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Áreas de Atuação", path: "/areas" },
      ]),
    ],
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 text-white lg:pt-40 lg:pb-20">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container relative max-w-3xl">
          <Eyebrow className="text-white/70">Áreas de Atuação</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Direito aplicado com estratégia e profundidade técnica
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75 text-pretty">
            Atuação concentrada em demandas de maior complexidade e impacto real na vida das pessoas e
            dos negócios. Selecione uma área para entender seus direitos.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container space-y-16">
          {CATEGORIAS.map((cat) => {
            const items = AREAS.filter((a) => a.categoria === cat);
            if (!items.length) return null;
            return (
              <div key={cat}>
                <div className="reveal mb-7 flex items-center gap-4">
                  <h2 className="font-serif text-2xl font-semibold text-foreground">{cat}</h2>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((a, i) => (
                    <AreaCard key={a.slug} area={a} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
