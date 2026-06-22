/* Artigo individual do blog. */
import { Link } from "wouter";
import { ChevronRight, CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Streamdown } from "streamdown";
import { Layout } from "@/components/Layout";
import { CtaBand } from "@/components/Bits";
import NotFound from "./NotFound";
import { getPost, POSTS, FIRM, AREAS } from "@/lib/site";
import { useSeo, breadcrumbSchema } from "@/lib/seo";

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function BlogPost({ slug }: { slug: string }) {
  const post = getPost(slug);
  if (!post) return <NotFound />;

  useSeo({
    title: `${post.titulo} | Blog ${FIRM.nome}`,
    description: post.resumo,
    path: `/blog/${post.slug}`,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.titulo,
        description: post.resumo,
        datePublished: post.data,
        author: { "@type": "Person", name: FIRM.advogado },
        publisher: { "@type": "Organization", name: FIRM.nome },
        articleSection: post.categoria,
        url: `https://marciofranca.adv.br/blog/${post.slug}`,
      },
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.titulo, path: `/blog/${post.slug}` },
      ]),
    ],
  });

  const outros = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const areaRelacionada = AREAS.find((a) => a.categoria === post.categoria);

  return (
    <Layout>
      <article>
        <header className="relative overflow-hidden bg-navy pt-32 pb-14 text-white lg:pt-40">
          <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
          <div className="container relative max-w-3xl">
            <nav className="flex items-center gap-1.5 text-xs text-white/55">
              <Link href="/" className="hover:text-white">Início</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="line-clamp-1 text-white/80">{post.categoria}</span>
            </nav>
            <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wider text-silver">
              {post.categoria}
            </span>
            <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]">
              {post.titulo}
            </h1>
            <div className="mt-6 flex items-center gap-5 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{fmtDate(post.data)}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.leitura} de leitura</span>
            </div>
          </div>
        </header>

        <div className="bg-background py-16">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-muted-foreground prose-blockquote:border-l-primary prose-blockquote:text-foreground prose-blockquote:not-italic prose-a:text-primary">
              <Streamdown>{post.conteudo}</Streamdown>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao blog
              </Link>
              {areaRelacionada && (
                <Link
                  href={`/${areaRelacionada.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10"
                >
                  Saiba mais sobre {areaRelacionada.titulo}
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Outros artigos */}
        <section className="border-t border-border bg-secondary/40 py-16">
          <div className="container">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Continue lendo</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {outros.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="lift flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/30"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.categoria}</span>
                  <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-foreground">{p.titulo}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.resumo}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <CtaBand />
    </Layout>
  );
}
