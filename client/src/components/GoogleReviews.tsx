/* Bloco de avaliações — integração com o Google Business Profile.
   IMPORTANTE: não inventamos depoimentos. Este bloco direciona o usuário
   ao perfil real do Google, onde as avaliações verdadeiras são exibidas. */
import { ExternalLink } from "lucide-react";
import { Eyebrow } from "./Bits";
import { FIRM } from "@/lib/site";

const GOOGLE_SEARCH = `https://www.google.com/search?q=${encodeURIComponent(
  FIRM.googleBusiness + " Rio Branco AC"
)}`;

export function GoogleReviews() {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          <Eyebrow className="justify-center">Perfil do escritório</Eyebrow>
          <h2 className="mt-5 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            Consulte o perfil no Google
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Informações públicas e eventuais avaliações estão disponíveis
            diretamente no
            <strong className="text-foreground">
              {" "}
              Perfil da Empresa no Google
            </strong>{" "}
            — “{FIRM.googleBusiness}”.
          </p>
          <a
            href={GOOGLE_SEARCH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
          >
            Ver avaliações no Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
