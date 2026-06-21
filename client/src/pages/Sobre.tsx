/* SOBRE — perfil do escritório e do advogado responsável. */
import { ShieldCheck, Target, Handshake, BookOpenCheck, MapPin, Phone, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Eyebrow, CtaBand } from "@/components/Bits";
import { Authority } from "@/components/Authority";
import { ASSETS, FIRM } from "@/lib/site";
import { useSeo, legalServiceSchema, breadcrumbSchema } from "@/lib/seo";

const VALORES = [
  { icon: Target, titulo: "Estratégia antes de tudo", texto: "Cada caso começa com um diagnóstico técnico e uma estratégia clara — administrativa, judicial ou negocial." },
  { icon: BookOpenCheck, titulo: "Fundamentação consistente", texto: "Teses bem construídas, com base na legislação e na jurisprudência atualizada do STJ, STF e Tribunais." },
  { icon: Handshake, titulo: "Acordos inteligentes", texto: "Quando faz sentido, a negociação economicamente vantajosa é tão valorizada quanto a vitória no contencioso." },
  { icon: ShieldCheck, titulo: "Transparência sobre riscos", texto: "Você é informado, com objetividade, sobre os caminhos possíveis e os riscos de cada decisão." },
];

export default function Sobre() {
  useSeo({
    title: `Sobre o escritório | ${FIRM.nome}`,
    description:
      "Conheça o escritório Márcio França Advocacia: mais de 15 anos de atuação estratégica, técnica e personalizada, com sede em Rio Branco/AC e atuação digital em todo o Brasil.",
    path: "/sobre",
    jsonLd: [
      legalServiceSchema,
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Sobre", path: "/sobre" },
      ]),
    ],
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 text-white lg:pt-40">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow className="text-white/70">Sobre o escritório</Eyebrow>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Advocacia artesanal para casos que exigem profundidade
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/75 text-pretty">
              O {FIRM.nome} atua de forma estratégica e personalizada, com foco em demandas de maior
              complexidade e alto valor agregado. Análise técnica profunda, estruturação jurídica
              sólida e visão negocial em cada caso.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl">
              <img
                src={ASSETS.fotoRetrato}
                alt={`${FIRM.advogado}, advogado responsável`}
                className="h-full w-full object-cover"
                width={420}
                height={520}
              />
            </div>
          </div>
        </div>
      </section>

      <Authority />

      {/* Perfil do advogado */}
      <section className="bg-background py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <img src={ASSETS.fotoVerde} alt={FIRM.advogado} className="h-full w-full object-cover" width={480} height={620} />
            </div>
          </div>
          <div className="reveal">
            <Eyebrow>{FIRM.advogado}</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance">
              O advogado responsável
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Com mais de {FIRM.anos} anos de atuação, {FIRM.advogado} ({FIRM.oab}) desenvolveu uma
                prática jurídica reconhecida pela objetividade, precisão técnica e argumentação
                persuasiva. Seu modelo de trabalho é híbrido: une a atuação contenciosa à negociação
                estratégica e à construção de acordos economicamente inteligentes.
              </p>
              <p>
                A atuação concentra-se em <strong className="text-foreground">demandas bancárias,
                cíveis, previdenciárias e consumeristas</strong> — especialmente revisões contratuais,
                nulidades, indenizações, execuções e teses estruturadas — além de uma forte vertical em
                <strong className="text-foreground"> direito do agronegócio</strong>, fundiário e
                ambiental rural, adaptada à realidade da Amazônia Legal.
              </p>
              <p>
                O escritório valoriza a eficiência operacional e a padronização inteligente, sem abrir
                mão da personalização que cada caso exige.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Previdenciário", "Bancário", "Consumidor", "Família", "Criminal", "Agro"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm font-medium text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-secondary/40 py-24">
        <div className="container">
          <div className="reveal max-w-2xl">
            <Eyebrow>Como trabalhamos</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance sm:text-4xl">
              Princípios que orientam cada caso
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALORES.map((v, i) => (
              <div
                key={v.titulo}
                className="reveal flex gap-5 rounded-2xl border border-border bg-card p-6"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{v.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="bg-background py-24">
        <div className="container grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <Eyebrow>Onde estamos</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance sm:text-4xl">
              Atendimento presencial em Rio Branco e digital em todo o Brasil
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>
                  {FIRM.endereco}
                  <br />
                  {FIRM.bairro}, {FIRM.cidade}/{FIRM.uf} — CEP {FIRM.cep}
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <a href={`tel:+${FIRM.telefoneRaw}`} className="transition-colors hover:text-primary">
                  {FIRM.telefoneFmt}
                </a>
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={FIRM.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
              >
                <MapPin className="h-4 w-4" />
                Ver rota no Google Maps
              </a>
              <a
                href={FIRM.reviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
              >
                <Star className="h-4 w-4" />
                Avaliações no Google
              </a>
            </div>
          </div>
          <a
            href={FIRM.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group relative block min-h-[340px] overflow-hidden rounded-3xl border border-border bg-secondary/60 shadow-lg"
          >
            <iframe
              title="Localização do escritório"
              src={FIRM.mapsEmbed}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Fallback visível caso o iframe seja bloqueado */}
            <div className="pointer-events-none absolute inset-0 -z-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-7 w-7" />
              <span className="text-sm font-medium">Abrir no Google Maps</span>
            </div>
          </a>
        </div>
      </section>

      <CtaBand titulo="Pronto para conversar sobre o seu caso?" />
    </Layout>
  );
}
