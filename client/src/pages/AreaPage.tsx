import { Link } from "wouter";
import { Check, ChevronRight, Users, FileText, AlertCircle, Clock, MessageCircle, ClipboardList } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Bits";
import { Faq } from "@/components/Faq";
import { AreaIcon } from "@/components/AreaCard";
import { HowItWorks } from "@/components/HowItWorks";
import { SeoLocal } from "@/components/SeoLocal";
import NotFound from "./NotFound";
import { getArea, AREAS, FIRM, whatsapp } from "@/lib/site";
import { useSeo, faqSchema, breadcrumbSchema, legalServiceSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

export default function AreaPage({ slug }: { slug: string }) {
  const area = getArea(slug);

  if (!area) return <NotFound />;

  useSeo({
    title: `${area.titulo} — ${area.curto} | ${FIRM.nome}`,
    description: area.resumo.slice(0, 165),
    path: `/${area.slug}`,
    jsonLd: [
      legalServiceSchema,
      faqSchema(area.faq),
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Áreas", path: "/areas" },
        { name: area.titulo, path: `/${area.slug}` },
      ]),
    ],
  });

  const related = AREAS.filter((a) => a.slug !== area.slug && a.categoria === area.categoria).slice(0, 2);
  const fallback = AREAS.filter((a) => a.slug !== area.slug).slice(0, 3);
  const relatedFinal = (related.length ? related : fallback).slice(0, 3);

  const ctaMsg = area.ctaWhatsapp ?? "Olá, vim pelo site e gostaria de uma análise do meu caso.";

  return (
    <Layout>
      {/* Hero da área */}
      <section className="relative overflow-hidden bg-navy pt-28 pb-16 text-white lg:pt-36 lg:pb-20">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(156,168,181,0.6), transparent 70%)" }}
        />
        <div className="container relative">
          <nav className="flex items-center gap-1.5 text-xs text-white/55">
            <Link href="/" className="hover:text-white">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/areas" className="hover:text-white">Áreas</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80">{area.titulo}</span>
          </nav>

          <div className="mt-7 grid items-start gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${area.agro ? "bg-agro/20 text-white" : "bg-white/10 text-white"}`}>
                  <AreaIcon name={area.icone} className="h-7 w-7" />
                </div>
                <span className="eyebrow text-white/70">{area.categoria}</span>
              </div>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
                {area.titulo}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75 text-pretty">
                {area.resumo}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsapp(ctaMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press btn-wpp inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  {area.ctaTexto ?? "Falar no WhatsApp"}
                </a>
                <Link
                  href="/diagnostico"
                  className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <ClipboardList className="h-4 w-4" />
                  Fazer Diagnóstico Jurídico
                </Link>
              </div>
            </div>

            {/* Para quem */}
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-white/85">
                <Users className="h-4.5 w-4.5" />
                <span className="text-sm font-semibold">Para quem é</span>
              </div>
              <ul className="mt-4 space-y-3">
                {area.paraQuem.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-white/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-silver" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problema enfrentado */}
      {area.problema && (
        <section className="bg-background py-20">
          <div className="container">
            <div className="reveal mx-auto max-w-3xl">
              <Eyebrow>O problema</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance">
                O que está em jogo
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {area.problema}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Quando procurar + Documentos */}
      {(area.quandoProcurar || area.documentos) && (
        <section className="bg-secondary/40 py-20">
          <div className="container grid gap-12 lg:grid-cols-2">
            {area.quandoProcurar && (
              <div className="reveal">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-5 w-5" />
                  <Eyebrow>Quando procurar um advogado</Eyebrow>
                </div>
                <ul className="mt-6 space-y-3">
                  {area.quandoProcurar.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                      <span className="text-sm text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {area.documentos && (
              <div className="reveal">
                <div className="flex items-center gap-2 text-primary">
                  <FileText className="h-5 w-5" />
                  <Eyebrow>Documentos necessários</Eyebrow>
                </div>
                <ul className="mt-6 space-y-3">
                  {area.documentos.map((doc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                      <span className="text-sm text-foreground/85">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Situações mais comuns */}
      {area.situacoes && area.situacoes.length > 0 && (
        <section className="bg-background py-20">
          <div className="container">
            <div className="reveal max-w-2xl">
              <Eyebrow>Situações mais comuns</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance">
                Casos frequentes em {area.titulo}
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {area.situacoes.map((sit, i) => (
                <div
                  key={i}
                  className="reveal rounded-2xl border border-border bg-card p-6"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <h3 className="font-serif text-lg font-semibold text-foreground">{sit.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sit.texto}</p>
                </div>
              ))}
            </div>

            {/* CTA intermediário */}
            <div className="reveal mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
              <p className="font-serif text-xl font-semibold text-foreground">
                {area.ctaTexto ?? `Precisa de ajuda com ${area.titulo}?`}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Envie sua documentação para análise. A avaliação inicial é confidencial.
              </p>
              <a
                href={whatsapp(ctaMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press btn-wpp mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                Enviar documentação pelo WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Como ajudamos + Fundamentos */}
      <section className={cn("py-20", area.situacoes ? "bg-secondary/40" : "bg-background")}>
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <Eyebrow>Como ajudamos</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance">
              O que fazemos por você
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Atuação técnica e estratégica, com leitura individual do seu caso e definição do melhor
              caminho — administrativo, judicial ou negocial.
            </p>
            <div className="mt-7 space-y-4">
              {area.beneficios.map((b, i) => (
                <div
                  key={i}
                  className="reveal flex items-start gap-3.5 rounded-xl border border-border bg-card p-4"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/85">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <Eyebrow>Fundamentos jurídicos</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance">
              A base técnica da atuação
            </h2>
            <div className="mt-7 space-y-5">
              {area.fundamentos.map((f, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl border-l-2 border-primary/30 bg-secondary/40 p-5 pl-6"
                >
                  <h3 className="font-serif text-lg font-semibold text-foreground">{f.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* FAQ */}
      <section className="bg-background py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance">
              Dúvidas sobre {area.titulo}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Respostas diretas às dúvidas mais comuns. Para o seu caso específico, fale conosco.
            </p>
          </div>
          <div className="reveal">
            <Faq items={area.faq} />
          </div>
        </div>
      </section>

      <SeoLocal />

      {/* Relacionadas */}
      {relatedFinal.length > 0 && (
        <section className="bg-background py-16">
          <div className="container">
            <h2 className="reveal font-serif text-2xl font-semibold text-foreground">
              Outras áreas relacionadas
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedFinal.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${a.slug}`}
                  className="lift reveal flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/30"
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${a.agro ? "bg-agro/10 text-agro" : "bg-primary/8 text-primary"}`}>
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
      )}

      {/* CTA final personalizado */}
      <section className="relative overflow-hidden bg-navy py-20 text-white">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(156,168,181,0.5), transparent 70%)" }}
        />
        <div className="container relative reveal">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-balance sm:text-4xl">
              {area.ctaTexto ?? `Precisa de ajuda com ${area.titulo}?`}
            </h2>
            <p className="mt-4 text-base text-white/70 text-pretty">
              Conte sua situação. A análise inicial é objetiva, confidencial e sem compromisso.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={whatsapp(ctaMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press btn-wpp inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
              <Link
                href="/diagnostico"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                <ClipboardList className="h-4 w-4" />
                Diagnóstico Jurídico
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
