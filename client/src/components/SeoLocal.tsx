import { MapPin } from "lucide-react";
import { Eyebrow } from "./Bits";
import { FIRM } from "@/lib/site";

const CIDADES_ACRE = [
  "Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó",
  "Brasiléia", "Epitaciolândia", "Xapuri", "Bujari", "Porto Acre",
  "Acrelândia", "Plácido de Castro", "Assis Brasil", "Mâncio Lima",
  "Rodrigues Alves", "Capixaba",
];

export function SeoLocal() {
  return (
    <section className="bg-secondary/40 py-16">
      <div className="container">
        <div className="reveal mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">Cobertura estadual</Eyebrow>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            Atendemos clientes em todo o Acre
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Com sede em {FIRM.cidade}, o escritório atende presencialmente e de forma digital
            clientes de todos os municípios do estado, além de atuação nacional pela via remota.
          </p>
        </div>
        <div className="reveal mt-8 flex flex-wrap justify-center gap-2">
          {CIDADES_ACRE.map((cidade) => (
            <span
              key={cidade}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80"
            >
              <MapPin className="h-3 w-3 text-primary/60" />
              {cidade}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
