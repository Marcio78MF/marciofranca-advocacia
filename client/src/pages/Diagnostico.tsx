/* DIAGNÓSTICO JURÍDICO — fluxo de pré-triagem que encaminha ao WhatsApp.
   Tudo no cliente; nenhum dado é armazenado em servidor. */
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Bits";
import { AREAS, FIRM, whatsapp } from "@/lib/site";
import { useSeo, legalServiceSchema, breadcrumbSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Answers = {
  problema: string;
  detalhe: string;
  documentos: string;
  cidade: string;
  nome: string;
  whatsapp: string;
};

const PROBLEMAS = [
  ...AREAS.map((a) => ({ value: a.titulo, label: a.titulo, hint: a.curto })),
  { value: "Outro assunto", label: "Outro assunto", hint: "Não listado acima" },
];

const DOCS = [
  { value: "Sim, tenho os documentos", label: "Sim, tenho os documentos" },
  { value: "Tenho parte dos documentos", label: "Tenho parte dos documentos" },
  { value: "Ainda não tenho / não sei quais", label: "Ainda não tenho / não sei quais" },
];

export default function Diagnostico() {
  useSeo({
    title: `Diagnóstico Jurídico Gratuito | ${FIRM.nome}`,
    description:
      "Faça uma pré-triagem rápida do seu caso (INSS, banco, Energisa, família, criminal ou agro) e fale diretamente com o escritório pelo WhatsApp. Objetivo, confidencial e sem compromisso.",
    path: "/diagnostico",
    jsonLd: [
      legalServiceSchema,
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Diagnóstico Jurídico", path: "/diagnostico" },
      ]),
    ],
  });

  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>({
    problema: "",
    detalhe: "",
    documentos: "",
    cidade: "",
    nome: "",
    whatsapp: "",
  });

  const total = 4;
  const set = (k: keyof Answers, v: string) => setA((prev) => ({ ...prev, [k]: v }));

  const canNext =
    (step === 0 && a.problema) ||
    (step === 1 && a.documentos) ||
    (step === 2 && a.cidade.trim().length > 1) ||
    (step === 3 && a.nome.trim().length > 1);

  function finalizar() {
    const msg = `Olá! Fiz o diagnóstico jurídico no site.

• Nome: ${a.nome}
• Assunto: ${a.problema}
• Documentos: ${a.documentos}
• Cidade: ${a.cidade}${a.detalhe ? `\n• Detalhes: ${a.detalhe}` : ""}

Gostaria de uma análise do meu caso.`;
    window.open(whatsapp(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <Layout>
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 text-white lg:pt-40">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container relative max-w-3xl">
          <Eyebrow className="text-white/70">Diagnóstico Jurídico</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Em 1 minuto, entenda o melhor caminho para o seu caso
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75 text-pretty">
            Responda algumas perguntas objetivas. Ao final, você fala diretamente com o escritório pelo
            WhatsApp, com seu caso já pré-organizado. Gratuito e confidencial.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container max-w-2xl">
          {/* Progresso */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
              <span>Etapa {step + 1} de {total}</span>
              <span>{Math.round(((step + 1) / total) * 100)}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-300"
                style={{ width: `${((step + 1) / total) * 100}%` }}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-9">
            {/* STEP 0 — problema */}
            {step === 0 && (
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">Qual é o seu problema?</h2>
                <p className="mt-2 text-sm text-muted-foreground">Selecione o assunto mais próximo da sua situação.</p>
                <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {PROBLEMAS.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => set("problema", p.value)}
                      className={cn(
                        "btn-press rounded-xl border p-4 text-left transition-colors",
                        a.problema === p.value
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-border hover:border-primary/40 hover:bg-accent",
                      )}
                    >
                      <div className="text-sm font-semibold text-foreground">{p.label}</div>
                      <div className="text-xs text-muted-foreground">{p.hint}</div>
                    </button>
                  ))}
                </div>
                <textarea
                  value={a.detalhe}
                  onChange={(e) => set("detalhe", e.target.value)}
                  rows={3}
                  placeholder="Se quiser, descreva brevemente o que está acontecendo (opcional)."
                  className="mt-4 w-full resize-none rounded-xl border border-border bg-background p-3.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            )}

            {/* STEP 1 — documentos */}
            {step === 1 && (
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">Você possui documentos?</h2>
                <p className="mt-2 text-sm text-muted-foreground">Não se preocupe se ainda não tiver tudo — orientamos você.</p>
                <div className="mt-6 space-y-2.5">
                  {DOCS.map((d) => (
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
                          "flex h-5 w-5 items-center justify-center rounded-full border",
                          a.documentos === d.value ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40",
                        )}
                      >
                        {a.documentos === d.value && <Check className="h-3 w-3" />}
                      </span>
                      <span className="text-sm font-medium text-foreground">{d.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 — cidade */}
            {step === 2 && (
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">Em qual cidade você está?</h2>
                <p className="mt-2 text-sm text-muted-foreground">Atendemos presencialmente em Rio Branco/AC e digitalmente em todo o Brasil.</p>
                <input
                  value={a.cidade}
                  onChange={(e) => set("cidade", e.target.value)}
                  placeholder="Ex.: Rio Branco / AC"
                  className="mt-6 w-full rounded-xl border border-border bg-background p-3.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            )}

            {/* STEP 3 — contato */}
            {step === 3 && (
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">Como podemos te chamar?</h2>
                <p className="mt-2 text-sm text-muted-foreground">Seus dados são usados apenas para o atendimento e não são compartilhados.</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Seu nome</label>
                    <input
                      value={a.nome}
                      onChange={(e) => set("nome", e.target.value)}
                      placeholder="Nome completo"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background p-3.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">WhatsApp (opcional)</label>
                    <input
                      value={a.whatsapp}
                      onChange={(e) => set("whatsapp", e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background p-3.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="mt-6 rounded-xl bg-secondary/60 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Resumo do seu caso
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">Assunto:</strong> {a.problema || "—"}</li>
                    <li><strong className="text-foreground">Documentos:</strong> {a.documentos || "—"}</li>
                    <li><strong className="text-foreground">Cidade:</strong> {a.cidade || "—"}</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navegação */}
            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="btn-press inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-muted-foreground disabled:opacity-0"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </button>

              {step < total - 1 ? (
                <button
                  onClick={() => canNext && setStep((s) => s + 1)}
                  disabled={!canNext}
                  className="btn-press inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continuar
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={finalizar}
                  disabled={!canNext}
                  className="btn-press btn-wpp inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </button>
              )}
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Este diagnóstico é uma triagem inicial e não constitui consulta jurídica nem garantia de
            resultado.
          </p>
        </div>
      </section>
    </Layout>
  );
}
