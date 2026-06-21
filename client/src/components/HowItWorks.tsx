/* Seção "Como Funciona" — processo em 4 passos. */
import { MessageSquare, FileSearch, Target, Headset } from "lucide-react";
import { Eyebrow } from "./Bits";

const STEPS = [
  { icon: MessageSquare, titulo: "Conte seu caso", texto: "Você relata sua situação pelo WhatsApp ou pelo diagnóstico jurídico. Ouvimos com atenção e confidencialidade." },
  { icon: FileSearch, titulo: "Análise documental", texto: "Avaliamos os documentos, identificamos o cabimento e os riscos, com leitura técnica do caso." },
  { icon: Target, titulo: "Estratégia jurídica", texto: "Desenhamos a melhor estratégia — administrativa, judicial ou negocial — sob medida para o seu objetivo." },
  { icon: Headset, titulo: "Acompanhamento especializado", texto: "Conduzimos o caso com transparência, mantendo você informado em cada etapa até o resultado." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-secondary/40 py-24">
      <div className="container">
        <div className="reveal max-w-2xl">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance sm:text-4xl">
            Um processo claro, do primeiro contato ao resultado
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Atuação artesanal e estratégica: cada caso recebe análise técnica profunda e
            acompanhamento próximo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="reveal relative rounded-2xl border border-border bg-card p-6"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="font-serif text-5xl font-semibold text-primary/12">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="-mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{s.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
