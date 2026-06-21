import { Link } from "wouter";
import {
  HeartHandshake,
  Wheat,
  Landmark,
  Zap,
  Users,
  Scale,
  MapPinned,
  Trees,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import type { Area } from "@/lib/site";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  HeartHandshake,
  Wheat,
  Landmark,
  Zap,
  Users,
  Scale,
  MapPinned,
  Trees,
};

export function AreaIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Scale;
  return <Icon className={className} />;
}

export function AreaCard({ area, index = 0 }: { area: Area; index?: number }) {
  return (
    <Link
      href={`/${area.slug}`}
      className={cn(
        "lift reveal group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-[0_20px_50px_-20px_rgba(15,42,67,0.25)]",
      )}
      style={{ transitionDelay: `${(index % 4) * 60}ms` }}
    >
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl",
            area.agro ? "bg-agro/10 text-agro" : "bg-primary/8 text-primary",
          )}
        >
          <AreaIcon name={area.icone} className="h-6 w-6" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{area.titulo}</h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {area.categoria}
      </p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground/90">
        {area.resumo}
      </p>
    </Link>
  );
}
