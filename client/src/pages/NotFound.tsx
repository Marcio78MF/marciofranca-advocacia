import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center text-white">
      <Logo variant="light" showWordmark={false} className="mb-8" />
      <p className="eyebrow text-silver">Erro 404</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Página não encontrada</h1>
      <p className="mt-4 max-w-md text-white/65">
        O endereço que você procura não existe ou foi movido. Vamos te ajudar a encontrar o caminho.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="btn-press inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-white/90"
        >
          <Home className="h-4 w-4" />
          Voltar ao início
        </Link>
        <Link
          href="/areas"
          className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Ver áreas de atuação
        </Link>
      </div>
    </div>
  );
}
