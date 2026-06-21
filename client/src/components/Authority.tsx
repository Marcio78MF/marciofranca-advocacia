/* Faixa de autoridade: anos de atuação, OAB, atendimento nacional, Google. */
import { ShieldCheck, MapPin, Star, Award } from "lucide-react";
import { FIRM } from "@/lib/site";

const ITEMS = [
  { icon: Award, valor: `+${FIRM.anos} anos`, label: "de atuação jurídica" },
  { icon: ShieldCheck, valor: FIRM.oab, label: "inscrição ativa na OAB" },
  { icon: MapPin, valor: "Brasil", label: "atuação digital nacional" },
  { icon: Star, valor: "Google", label: "Perfil verificado da Empresa" },
];

export function Authority() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container grid grid-cols-2 gap-px overflow-hidden rounded-none py-0 md:grid-cols-4">
        {ITEMS.map((it, i) => (
          <div
            key={i}
            className="reveal flex flex-col items-center gap-2 px-4 py-8 text-center md:items-start md:text-left"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <it.icon className="h-6 w-6 text-primary" />
            <div className="font-serif text-2xl font-semibold text-foreground">{it.valor}</div>
            <div className="text-sm text-muted-foreground">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
