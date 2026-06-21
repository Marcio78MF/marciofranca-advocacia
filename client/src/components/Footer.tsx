/* Footer navy com contato, mapa de links e disclaimer OAB. */
import { Link } from "wouter";
import { Phone, Instagram, MapPin, MessageCircle, Star } from "lucide-react";
import { Logo } from "./Logo";
import { AREAS, FIRM, whatsapp } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white/80">
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="container relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {FIRM.posicionamento} Atendimento presencial em {FIRM.localizacao} e atuação digital em
            todo o Brasil.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="btn-press btn-wpp flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            >
              <MessageCircle className="h-4.5 w-4.5" />
            </a>
            <a
              href={FIRM.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="btn-press flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-white">Áreas de Atuação</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {AREAS.slice(0, 5).map((a) => (
              <li key={a.slug}>
                <Link href={`/${a.slug}`} className="text-white/65 transition-colors hover:text-white">
                  {a.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-white">Navegação</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/agro" className="text-white/65 transition-colors hover:text-white">Hub Agro</Link></li>
            <li><Link href="/diagnostico" className="text-white/65 transition-colors hover:text-white">Diagnóstico Jurídico</Link></li>
            <li><Link href="/blog" className="text-white/65 transition-colors hover:text-white">Blog</Link></li>
            <li><Link href="/sobre" className="text-white/65 transition-colors hover:text-white">Sobre o escritório</Link></li>
            <li><Link href="/areas" className="text-white/65 transition-colors hover:text-white">Todas as áreas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-white">Contato</h4>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-silver" />
              <a href={`tel:+${FIRM.telefoneRaw}`} className="text-white/65 transition-colors hover:text-white">
                {FIRM.telefoneFmt}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-silver" />
              <a href={FIRM.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white/65 transition-colors hover:text-white">
                @{FIRM.instagram}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-silver" />
              <a
                href={FIRM.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/65 transition-colors hover:text-white"
              >
                {FIRM.endereco} — {FIRM.bairro}, {FIRM.cidade}/{FIRM.uf}, CEP {FIRM.cep}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Star className="mt-0.5 h-4 w-4 shrink-0 text-silver" />
              <a
                href={FIRM.reviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/65 transition-colors hover:text-white"
              >
                Avaliações no Google
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {FIRM.nome} — {FIRM.oab}. Todos os direitos reservados.
          </p>
          <p className="max-w-md text-center sm:text-right">
            Conteúdo de caráter informativo, em conformidade com o Código de Ética e Disciplina da OAB. Não
            constitui oferta de serviços nem captação de clientela.
          </p>
        </div>
      </div>
    </footer>
  );
}
