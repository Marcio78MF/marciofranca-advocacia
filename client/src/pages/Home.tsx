/* HOME — Márcio França Advocacia
   Estilo "Legal Tech Sereno": navy + prata + marfim, Fraunces + Plus Jakarta Sans.
   Hero assimétrico (texto à esquerda, foto à direita). */
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Eyebrow, CtaButtons, LinkArrow } from "@/components/Bits";
import { Authority } from "@/components/Authority";
import { AreaCard } from "@/components/AreaCard";
import { HowItWorks } from "@/components/HowItWorks";
import { GoogleReviews } from "@/components/GoogleReviews";
import { AREAS, AREAS_DESTAQUE, ASSETS, FIRM } from "@/lib/site";
import { useSeo, legalServiceSchema } from "@/lib/seo";
import { SeoLocal } from "@/components/SeoLocal";

export default function Home() {
  useSeo({
    title: "Márcio França Advocacia — Atuação estratégica em Rio Branco/AC e em todo o Brasil",
    description:
      "Defesa dos seus direitos perante o INSS, bancos, concessionárias de energia, conflitos familiares e processos criminais. Advocacia estratégica e personalizada em Rio Branco/AC e atuação digital em todo o Brasil. OAB/AC 2882.",
    path: "/",
    jsonLd: legalServiceSchema,
  });

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          src={ASSETS.heroBg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/55" />
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />

        <div className="container relative grid items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-24 lg:pt-40">
          <div>
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-white/80">
              <Sparkles className="h-3.5 w-3.5" />
              {FIRM.posicionamento}
            </span>
            <h1 className="mt-6 font-serif text-3xl font-semibold leading-[1.12] text-balance sm:text-4xl lg:text-[2.8rem]">
              Você não precisa enfrentar sozinho um benefício negado, descontos bancários indevidos, problemas rurais ou conflitos que exigem proteção jurídica.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/75 text-pretty max-w-xl">
              Atuação estratégica e personalizada nas áreas previdenciária, bancária, rural, familiar e criminal.
            </p>
            <CtaButtons light className="mt-7" />

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-silver" />
                +{FIRM.anos} anos de atuação
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-silver" />
                {FIRM.oab}
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-silver" />
                Atendimento nacional
              </span>
            </div>
          </div>

          {/* Foto do advogado */}
          <div className="relative mx-auto hidden w-full max-w-sm lg:block">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
              style={{ background: "radial-gradient(circle at 60% 30%, rgba(156,168,181,0.55), transparent 70%)" }}
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl">
              <img
                src={ASSETS.fotoVerde}
                alt="Dr. Márcio França, advogado responsável — OAB/AC 2882"
                className="h-full w-full object-cover"
                width={420}
                height={560}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5">
                <div className="font-serif text-lg font-semibold text-white">{FIRM.advogado}</div>
                <div className="text-xs uppercase tracking-wider text-white/65">
                  Advogado responsável · {FIRM.oab}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Authority />

      {/* CASOS MAIS PROCURADOS */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="reveal flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Casos mais procurados</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance sm:text-4xl">
                Onde podemos ajudar você hoje
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Selecionamos as demandas mais frequentes. Cada uma tem uma estratégia própria — clique
                para entender seus direitos.
              </p>
            </div>
            <LinkArrow href="/areas">Ver todas as áreas</LinkArrow>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS_DESTAQUE.map((a, i) => (
              <AreaCard key={a.slug} area={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE / DIFERENCIAL */}
      <section className="relative overflow-hidden bg-secondary/40 py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
              <img
                src={ASSETS.fotoRetrato}
                alt="Dr. Márcio França em seu escritório"
                className="h-full w-full object-cover"
                width={560}
                height={680}
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden w-52 rounded-2xl border border-border bg-card p-5 shadow-lg sm:block lg:-right-6">
              <div className="font-serif text-3xl font-semibold text-primary">+{FIRM.anos}</div>
              <div className="text-sm text-muted-foreground">anos dedicados à advocacia estratégica</div>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <Eyebrow>O escritório</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance sm:text-4xl">
              Advocacia artesanal, técnica e orientada a resultado
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Sob a responsabilidade do <strong className="text-foreground">{FIRM.advogado}</strong>{" "}
              ({FIRM.oab}), o escritório combina atuação contenciosa com negociação estratégica e
              construção de acordos economicamente inteligentes. Cada caso recebe análise individual,
              fundamentação consistente e argumentação persuasiva.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Atuação estratégica, não apenas explicativa",
                "Fundamentação sólida e jurisprudência atualizada (STJ, STF e Tribunais)",
                "Transparência sobre riscos e caminhos processuais",
                "Atendimento presencial em Rio Branco/AC e digital em todo o Brasil",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-sm text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/sobre"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Conheça o escritório
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* HUB AGRO teaser */}
      <section className="relative overflow-hidden py-0">
        <div className="relative">
          <img src={ASSETS.agroBg} alt="" aria-hidden className="h-[420px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d2b1f]/92 via-[#1d2b1f]/75 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="reveal max-w-xl text-white">
                <span className="eyebrow inline-flex items-center gap-2 text-white/85">
                  <span className="h-px w-6 bg-white/50" />
                  Vertical Agro
                </span>
                <h2 className="mt-4 font-serif text-3xl font-semibold text-balance sm:text-4xl">
                  Direito do Agro na Amazônia Legal
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/80 text-pretty">
                  Regularização fundiária, ambiental rural (CAR, Reserva Legal, APP, embargos) e
                  aposentadoria rural reunidos em um hub especializado para o produtor do Acre.
                </p>
                <Link
                  href="/agro"
                  className="btn-press mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1d2b1f] hover:bg-white/90"
                >
                  Acessar o Hub Agro
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      <SeoLocal />

      {/* CTA final */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container relative reveal text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold text-balance sm:text-4xl">
            Seu direito não pode esperar. Fale com quem entende.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 text-pretty">
            Conte sua situação. A análise inicial é objetiva, confidencial e sem compromisso.
          </p>
          <CtaButtons light className="mt-8 justify-center" />
        </div>
      </section>
    </Layout>
  );
}
