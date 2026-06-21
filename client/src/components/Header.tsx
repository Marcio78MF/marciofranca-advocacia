/* Header fixo com transição transparente -> opaco e menu mobile. */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { AREAS, whatsapp, FIRM } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Início", href: "/" },
  { label: "Áreas de Atuação", href: "/areas", areas: true },
  { label: "Hub Agro", href: "/agro" },
  { label: "Diagnóstico", href: "/diagnostico" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [location] = useLocation();

  // Sobre fundo escuro apenas no topo da home
  const onDarkHero = location === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setAreasOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-background/85 shadow-[0_1px_0_rgba(15,42,67,0.08)] backdrop-blur-xl"
          : onDarkHero
            ? "bg-transparent"
            : "bg-background/85 backdrop-blur-xl",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link href="/" aria-label="Página inicial">
          <Logo variant={onDarkHero ? "light" : "dark"} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.areas ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    onDarkHero
                      ? "text-white/80 hover:text-white"
                      : "text-foreground/75 hover:text-foreground",
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </Link>
                {areasOpen && (
                  <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-2">
                    <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-2 shadow-xl">
                      {AREAS.map((a) => (
                        <Link
                          key={a.slug}
                          href={`/${a.slug}`}
                          className="rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                        >
                          <div className="text-sm font-semibold text-foreground">{a.titulo}</div>
                          <div className="text-xs text-muted-foreground">{a.curto}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  onDarkHero
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/75 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press btn-wpp inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden",
            onDarkHero ? "text-white" : "text-foreground",
          )}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {NAV.filter((n) => !n.areas).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-1 px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Áreas de atuação
            </div>
            <div className="grid grid-cols-2 gap-1">
              {AREAS.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${a.slug}`}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/85 hover:bg-accent"
                >
                  {a.titulo}
                </Link>
              ))}
            </div>
            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press btn-wpp mt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp — {FIRM.telefoneFmt}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
