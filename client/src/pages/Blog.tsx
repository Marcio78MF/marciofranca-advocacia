/* BLOG — listagem de artigos otimizados para SEO. */
import { Link } from "wouter";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Eyebrow, CtaBand } from "@/components/Bits";
import { POSTS, FIRM } from "@/lib/site";
import { useSeo, breadcrumbSchema } from "@/lib/seo";

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function Blog() {
  useSeo({
    title: `Blog Jurídico | ${FIRM.nome}`,
    description:
      "Artigos jurídicos claros e fundamentados sobre BPC/LOAS, aposentadoria rural, consignado indevido, Energisa, direito do agro e mais. Informação de qualidade para você.",
    path: "/blog",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `Blog Jurídico — ${FIRM.nome}`,
        url: "https://marciofranca.adv.br/blog",
        blogPost: POSTS.map((p) => ({
          "@type": "BlogPosting",
          headline: p.titulo,
          datePublished: p.data,
          url: `https://marciofranca.adv.br/blog/${p.slug}`,
        })),
      },
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ],
  });

  const [destaque, ...resto] = POSTS;

  return (
    <Layout>
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 text-white lg:pt-40">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container relative max-w-3xl">
          <Eyebrow className="text-white/70">Blog Jurídico</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Conhecimento jurídico claro e fundamentado
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75 text-pretty">
            Conteúdo que traduz o Direito para a sua realidade — com a profundidade técnica de quem
            atua e a clareza de quem quer ser compreendido.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container">
          {/* Destaque */}
          <Link
            href={`/blog/${destaque.slug}`}
            className="lift reveal group grid gap-0 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2"
          >
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {destaque.categoria} · Em destaque
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-foreground">
                {destaque.titulo}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{destaque.resumo}</p>
              <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{fmtDate(destaque.data)}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{destaque.leitura}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Ler artigo
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
            <div className="relative min-h-[240px] bg-navy">
              <div className="grain-overlay absolute inset-0 opacity-[0.06]" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <span className="font-serif text-7xl font-semibold text-white/10">{destaque.categoria}</span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resto.map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="lift reveal group flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/30"
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.categoria}</span>
                <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-foreground">{p.titulo}</h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.resumo}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{fmtDate(p.data)}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{p.leitura}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand titulo="Tem uma dúvida que vai além do artigo?" />
    </Layout>
  );
}
