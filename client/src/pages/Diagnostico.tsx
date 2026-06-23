import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  ShieldCheck,
  FileText,
  MapPin,
  Phone,
  Scale,
  Tractor,
  Landmark,
  Zap,
  Users,
  Gavel,
  TreePine,
  HelpCircle,
  ClipboardList,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Bits";
import { FIRM, whatsapp } from "@/lib/site";
import { useSeo, legalServiceSchema, breadcrumbSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

const SITE_URL = "https://marciofranca.adv.br";

function trackEvent(name: string, data?: Record<string, string>) {
  try {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track(name, data);
    }
  } catch {
    // analytics unavailable
  }
}

type Answers = {
  problema: string;
  situacao: string;
  descricaoLivre: string;
  documentos: string;
  cidade: string;
  whatsappNum: string;
};

const EMPTY: Answers = {
  problema: "",
  situacao: "",
  descricaoLivre: "",
  documentos: "",
  cidade: "",
  whatsappNum: "",
};

type Problema = {
  value: string;
  label: string;
  icon: typeof Scale;
  situacoes: string[];
};

const PROBLEMAS: Problema[] = [
  {
    value: "INSS / benefício negado",
    label: "INSS / benefício negado",
    icon: Scale,
    situacoes: [
      "BPC/LOAS negado",
      "Benefício por incapacidade negado",
      "Benefício cessado ou suspenso",
      "Revisão de benefício",
      "Outro problema com INSS",
    ],
  },
  {
    value: "Aposentadoria rural",
    label: "Aposentadoria rural",
    icon: Tractor,
    situacoes: [
      "Não tenho documentos suficientes",
      "INSS negou o pedido",
      "Preciso comprovar atividade rural",
      "Tenho documentos antigos",
      "Outro problema rural previdenciário",
    ],
  },
  {
    value: "Desconto bancário indevido",
    label: "Desconto bancário indevido",
    icon: Landmark,
    situacoes: [
      "Empréstimo que não reconheço",
      "Cartão consignado / RMC",
      "Associação ou seguro descontando",
      "Golpe bancário",
      "Nome negativado",
    ],
  },
  {
    value: "Problema com a Energisa",
    label: "Problema com a Energisa",
    icon: Zap,
    situacoes: [
      "Conta muito alta",
      "Corte ou ameaça de corte",
      "Recuperação de consumo / TOI",
      "Danos elétricos",
      "Cobrança que não reconheço",
    ],
  },
  {
    value: "Família ou inventário",
    label: "Família ou inventário",
    icon: Users,
    situacoes: [
      "Divórcio",
      "Guarda",
      "Pensão alimentícia",
      "Inventário",
      "União estável",
    ],
  },
  {
    value: "Defesa criminal",
    label: "Defesa criminal",
    icon: Gavel,
    situacoes: [
      "Prisão em flagrante",
      "Intimação policial",
      "Audiência de custódia",
      "Medida protetiva",
      "Processo criminal em andamento",
    ],
  },
  {
    value: "Regularização fundiária ou ambiental rural",
    label: "Regularização fundiária ou ambiental",
    icon: TreePine,
    situacoes: [
      "Regularização de imóvel rural",
      "CAR / Reserva Legal / APP",
      "Notificação SEMA",
      "Auto de infração IBAMA",
      "Embargo ambiental",
      "Contrato agrário",
    ],
  },
  {
    value: "Outro problema jurídico",
    label: "Outro problema jurídico",
    icon: HelpCircle,
    situacoes: [],
  },
];

const DOCS_OPTIONS = [
  { value: "Sim", label: "Sim, tenho os documentos" },
  { value: "Não", label: "Não tenho documentos ainda" },
  { value: "Parcialmente", label: "Tenho parte dos documentos" },
  { value: "Não sei informar", label: "Não sei informar" },
];

const TOTAL_STEPS = 5;

const stepAnim = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.25, ease: "easeInOut" },
};

function useHashStep() {
  const read = () => {
    const h = window.location.hash.replace("#", "");
    const n = parseInt(h, 10);
    return !isNaN(n) && n >= 0 && n < TOTAL_STEPS ? n : 0;
  };

  const [step, setStepState] = useState(read);

  useEffect(() => {
    const onHash = () => setStepState(read());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const setStep = useCallback((s: number | ((prev: number) => number)) => {
    setStepState((prev) => {
      const next = typeof s === "function" ? s(prev) : s;
      window.location.hash = `#${next}`;
      return next;
    });
  }, []);

  return [step, setStep] as const;
}

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Diagnóstico Jurídico — Márcio França Advocacia",
  url: `${SITE_URL}/diagnostico`,
  applicationCategory: "LegalService",
  operatingSystem: "All",
  description:
    "Assistente jurídico interativo para triagem inicial de casos. Identifique a área do seu problema e envie um resumo qualificado ao escritório.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
  provider: {
    "@type": "LegalService",
    "@id": `${SITE_URL}/#legalservice`,
  },
};

export default function Diagnostico() {
  useSeo({
    title: `Diagnóstico Jurídico Gratuito | ${FIRM.nome}`,
    description:
      "Assistente jurídico interativo: identifique a área do seu problema e envie um resumo qualificado ao escritório pelo WhatsApp. Gratuito, confidencial e sem compromisso.",
    path: "/diagnostico",
    jsonLd: [
      legalServiceSchema,
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Diagnóstico Jurídico", path: "/diagnostico" },
      ]),
      webAppSchema,
    ],
  });

  const [step, setStep] = useHashStep();
  const [a, setA] = useState<Answers>(EMPTY);
  const [direction, setDirection] = useState(1);

  const selectedProblema = PROBLEMAS.find((p) => p.value === a.problema);
  const isOutro = a.problema === "Outro problema jurídico";
  const hasSituacoes = selectedProblema && selectedProblema.situacoes.length > 0;

  const set = (k: keyof Answers, v: string) => setA((prev) => ({ ...prev, [k]: v }));

  useEffect(() => {
    trackEvent("diagnostico_inicio");
  }, []);

  const canNext =
    (step === 0 && a.problema !== "") ||
    (step === 1 && (isOutro ? a.descricaoLivre.trim().length > 5 : a.situacao !== "")) ||
    (step === 2 && a.documentos !== "") ||
    (step === 3 && a.cidade.trim().length > 1 && a.whatsappNum.replace(/\D/g, "").length >= 10) ||
    step === 4;

  function goNext() {
    if (!canNext) return;
    const nextStep = Math.min(TOTAL_STEPS - 1, step + 1);
    if (step === 0) trackEvent("diagnostico_area_selecionada", { area: a.problema });
    if (nextStep === 2) trackEvent("diagnostico_etapa_2", { area: a.problema });
    if (nextStep === 3) trackEvent("diagnostico_etapa_3", { area: a.problema, documentos: a.documentos });
    if (nextStep === 4) trackEvent("diagnostico_etapa_4", { area: a.problema });
    setDirection(1);
    setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1));
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(0, s - 1));
  }

  function AreaBadge() {
    if (step === 0 || !selectedProblema) return null;
    const Icon = selectedProblema.icon;
    return (
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
        <Icon className="h-3.5 w-3.5 text-primary" />
        <span className="text-xs font-medium text-primary">{selectedProblema.label}</span>
      </div>
    );
  }

  function enviarWhatsApp() {
    const situacaoTexto = isOutro ? a.descricaoLivre : a.situacao;
    const msg = `Olá, vim pelo site marciofranca.adv.br e gostaria de uma análise inicial.

Tipo de problema: ${a.problema}
Situação informada: ${situacaoTexto}
Documentos: ${a.documentos}
Cidade: ${a.cidade}
WhatsApp: ${a.whatsappNum}

Aguardo orientação sobre os próximos passos.`;
    trackEvent("diagnostico_whatsapp_click", { area: a.problema, documentos: a.documentos });
    window.open(whatsapp(msg), "_blank", "noopener,noreferrer");
  }

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const animVariants = {
    initial: { opacity: 0, x: direction > 0 ? 40 : -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: direction > 0 ? -40 : 40 },
  };

  return (
    <Layout>
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 text-white lg:pt-40">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container relative max-w-3xl">
          <Eyebrow className="text-white/70">Assistente Jurídico</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Identifique o melhor caminho para o seu caso
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75 text-pretty">
            Responda algumas perguntas objetivas. Ao final, envie um resumo qualificado
            diretamente ao escritório pelo WhatsApp. Gratuito e confidencial.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container max-w-2xl">
          {/* Barra de progresso */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
              <span>Etapa {step + 1} de {TOTAL_STEPS}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-primary"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-9">
            <AnimatePresence mode="wait" initial={false}>
              {/* ETAPA 1 — Tipo de problema */}
              {step === 0 && (
                <motion.div key="step0" variants={animVariants} initial="initial" animate="animate" exit="exit" transition={stepAnim.transition}>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    Qual situação mais se aproxima do seu problema?
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">Selecione a opção mais próxima.</p>
                  <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {PROBLEMAS.map((p) => {
                      const Icon = p.icon;
                      return (
                        <button
                          key={p.value}
                          onClick={() => {
                            set("problema", p.value);
                            set("situacao", "");
                            set("descricaoLivre", "");
                          }}
                          className={cn(
                            "btn-press flex items-center gap-3 rounded-xl border p-4 text-left transition-colors",
                            a.problema === p.value
                              ? "border-primary bg-primary/5 ring-1 ring-primary"
                              : "border-border hover:border-primary/40 hover:bg-accent",
                          )}
                        >
                          <Icon className={cn("h-5 w-5 shrink-0", a.problema === p.value ? "text-primary" : "text-muted-foreground")} />
                          <span className="text-sm font-semibold text-foreground">{p.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ETAPA 2 — Detalhamento */}
              {step === 1 && (
                <motion.div key="step1" variants={animVariants} initial="initial" animate="animate" exit="exit" transition={stepAnim.transition}>
                  <AreaBadge />
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    {isOutro ? "Descreva brevemente o seu problema" : "Qual é a sua situação?"}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {isOutro
                      ? "Conte em poucas palavras o que está acontecendo."
                      : "Selecione a opção que melhor descreve o seu caso."}
                  </p>

                  {isOutro ? (
                    <textarea
                      value={a.descricaoLivre}
                      onChange={(e) => set("descricaoLivre", e.target.value)}
                      rows={4}
                      placeholder="Ex.: Estou com um problema trabalhista envolvendo horas extras não pagas..."
                      className="mt-6 w-full resize-none rounded-xl border border-border bg-background p-3.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  ) : (
                    <div className="mt-6 space-y-2.5">
                      {hasSituacoes &&
                        selectedProblema.situacoes.map((s) => (
                          <button
                            key={s}
                            onClick={() => set("situacao", s)}
                            className={cn(
                              "btn-press flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-colors",
                              a.situacao === s
                                ? "border-primary bg-primary/5 ring-1 ring-primary"
                                : "border-border hover:border-primary/40 hover:bg-accent",
                            )}
                          >
                            <span
                              className={cn(
                                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                                a.situacao === s ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40",
                              )}
                            >
                              {a.situacao === s && <Check className="h-3 w-3" />}
                            </span>
                            <span className="text-sm font-medium text-foreground">{s}</span>
                          </button>
                        ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* ETAPA 3 — Documentos */}
              {step === 2 && (
                <motion.div key="step2" variants={animVariants} initial="initial" animate="animate" exit="exit" transition={stepAnim.transition}>
                  <AreaBadge />
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                      Você possui documentos relacionados ao caso?
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Não se preocupe se ainda não tiver tudo — orientamos você sobre o que será necessário.
                  </p>
                  <div className="mt-6 space-y-2.5">
                    {DOCS_OPTIONS.map((d) => (
                      <button
                        key={d.value}
                        onClick={() => set("documentos", d.value)}
                        className={cn(
                          "btn-press flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-colors",
                          a.documentos === d.value
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border hover:border-primary/40 hover:bg-accent",
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                            a.documentos === d.value ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40",
                          )}
                        >
                          {a.documentos === d.value && <Check className="h-3 w-3" />}
                        </span>
                        <span className="text-sm font-medium text-foreground">{d.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ETAPA 4 — Localização e contato */}
              {step === 3 && (
                <motion.div key="step3" variants={animVariants} initial="initial" animate="animate" exit="exit" transition={stepAnim.transition}>
                  <AreaBadge />
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                      Localização e contato
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Atendemos presencialmente em Rio Branco/AC e digitalmente em todo o Brasil.
                  </p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        Cidade / UF
                      </label>
                      <input
                        value={a.cidade}
                        onChange={(e) => set("cidade", e.target.value)}
                        placeholder="Ex.: Rio Branco / AC"
                        className="mt-1.5 w-full rounded-xl border border-border bg-background p-3.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <Phone className="h-3.5 w-3.5" />
                        WhatsApp
                      </label>
                      <input
                        value={a.whatsappNum}
                        onChange={(e) => set("whatsappNum", formatPhone(e.target.value))}
                        placeholder="(00) 00000-0000"
                        inputMode="tel"
                        className="mt-1.5 w-full rounded-xl border border-border bg-background p-3.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-2 rounded-xl bg-secondary/60 p-4">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Usaremos essas informações apenas para análise inicial do contato.
                      O envio não constitui contratação automática nem garantia de resultado.
                      Seus dados não serão compartilhados com terceiros (LGPD — Lei 13.709/2018).
                    </p>
                  </div>
                </motion.div>
              )}

              {/* ETAPA 5 — Resultado */}
              {step === 4 && (
                <motion.div key="step4" variants={animVariants} initial="initial" animate="animate" exit="exit" transition={stepAnim.transition}>
                  <AreaBadge />
                  <div className="flex items-center gap-3">
                    <ClipboardList className="h-6 w-6 text-primary" />
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                      Resumo do seu caso
                    </h2>
                  </div>

                  <div className="mt-6 rounded-xl bg-secondary/60 p-5">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        {selectedProblema ? <selectedProblema.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> : <Scale className="mt-0.5 h-4 w-4 shrink-0 text-primary" />}
                        <div>
                          <span className="font-semibold text-foreground">Tipo de problema:</span>{" "}
                          <span className="text-muted-foreground">{a.problema}</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Situação:</span>{" "}
                          <span className="text-muted-foreground">{isOutro ? a.descricaoLivre : a.situacao}</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Documentos:</span>{" "}
                          <span className="text-muted-foreground">{a.documentos}</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">Cidade:</span>{" "}
                          <span className="text-muted-foreground">{a.cidade}</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <span className="font-semibold text-foreground">WhatsApp:</span>{" "}
                          <span className="text-muted-foreground">{a.whatsappNum}</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <p className="text-sm leading-relaxed text-foreground">
                      Com base nas informações fornecidas, <strong>seu caso pode exigir análise jurídica individualizada</strong>.
                      O próximo passo é enviar esse resumo ao escritório pelo WhatsApp para avaliação inicial.
                    </p>
                  </div>

                  <button
                    onClick={enviarWhatsApp}
                    className="btn-press btn-wpp mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold shadow-md"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Enviar resumo pelo WhatsApp
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navegação */}
            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                onClick={goBack}
                disabled={step === 0}
                className="btn-press inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-muted-foreground disabled:opacity-0"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </button>

              {step < TOTAL_STEPS - 1 && (
                <button
                  onClick={goNext}
                  disabled={!canNext}
                  className="btn-press inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continuar
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
            Este diagnóstico é uma triagem inicial e não constitui consulta jurídica,
            contratação automática nem garantia de resultado. Conformidade com o{" "}
            <span className="font-medium">Provimento 205/2021 da OAB</span> e a{" "}
            <span className="font-medium">LGPD (Lei 13.709/2018)</span>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
