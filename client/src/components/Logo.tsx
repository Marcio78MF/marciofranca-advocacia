/* Logo + wordmark — Márcio França Advocacia.
   Design: monograma MF (prata+navy) + wordmark serif Fraunces. */
import { ASSETS, FIRM } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "dark",
  showWordmark = true,
  className,
}: {
  variant?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
}) {
  const light = variant === "light";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img
        src={ASSETS.logo}
        alt="Monograma MF — Márcio França Advocacia"
        className="h-9 w-auto shrink-0 select-none"
        width={36}
        height={37}
        draggable={false}
      />
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-serif text-[1.05rem] font-semibold tracking-tight",
              light ? "text-white" : "text-foreground",
            )}
          >
            Márcio França
          </span>
          <span
            className={cn(
              "text-[0.62rem] font-medium uppercase tracking-[0.24em]",
              light ? "text-white/55" : "text-muted-foreground",
            )}
          >
            Advocacia
          </span>
        </div>
      )}
    </div>
  );
}

export const FIRM_NAME = FIRM.nome;
