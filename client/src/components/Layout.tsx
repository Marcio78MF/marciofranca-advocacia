import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { useReveal } from "@/hooks/useReveal";

export function Layout({ children }: { children: ReactNode }) {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo-principal"
        className="sr-only z-[100] rounded-md bg-background px-4 py-2 text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Ir para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
