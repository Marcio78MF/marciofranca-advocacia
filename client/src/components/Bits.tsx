/* Pequenos blocos reutilizáveis com a identidade do escritório. */
import { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight, ClipboardList, MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-2 text-primary", className)}>
      <span className="h-px w-6 bg-primary/40" />
      {children}
    </span>
  );
}

export function CtaButtons({ className, light, wppLabel, wppMsg, showDiagnosticoHint }: { className?: string; light?: boolean; wppLabel?: string; wppMsg?: string; showDiagnosticoHint?: boolean }) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsapp(wppMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press btn-wpp inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold shadow-sm"
        >
          <MessageCircle className="h-4 w-4" />
          {wppLabel ?? "Falar no WhatsApp"}
        </a>
        <Link
          href="/diagnostico"
          className={cn(
            "btn-press inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors",
            light
              ? "border-white/30 text-white hover:bg-white/10"
              : "border-border text-foreground hover:bg-accent",
          )}
        >
          <ClipboardList className="h-4 w-4" />
          Fazer Diagnóstico Jurídico
        </Link>
      </div>
      {showDiagnosticoHint && (
        <p className={cn("text-xs", light ? "text-white/50" : "text-muted-foreground")}>
          Descubra em 2 minutos se seu caso exige análise jurídica. Gratuito e sem compromisso.
        </p>
      )}
    </div>
  );
}

/** Faixa de CTA usada no rodapé das páginas internas. */
export function CtaBand({
  titulo = "Vamos analisar o seu caso",
  texto = "Conte sua situação. A análise inicial é objetiva, confidencial e sem compromisso.",
}: {
  titulo?: string;
  texto?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white">
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(156,168,181,0.5), transparent 70%)" }}
      />
      <div className="container relative reveal">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-balance sm:text-4xl">{titulo}</h2>
          <p className="mt-4 text-base text-white/70 text-pretty">{texto}</p>
          <CtaButtons light className="mt-8 justify-center" />
        </div>
      </div>
    </section>
  );
}

export function LinkArrow({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
