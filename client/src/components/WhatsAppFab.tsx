/* Botão flutuante de WhatsApp persistente. */
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/site";

export function WhatsAppFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="btn-press btn-wpp fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full py-3 pl-3 pr-4 text-sm font-semibold shadow-lg shadow-black/20 transition-all"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(12px)",
        transition: "opacity .5s var(--ease-out), transform .5s var(--ease-out), background-color .2s",
      }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
