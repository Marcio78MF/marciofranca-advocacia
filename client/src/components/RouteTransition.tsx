import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

export function RouteTransition() {
  const [location] = useLocation();
  const reduceMotion = useReducedMotion();
  const firstRender = useRef(true);
  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (reduceMotion) return;

    setActiveRoute(location);
    const timer = window.setTimeout(() => setActiveRoute(null), 760);
    return () => window.clearTimeout(timer);
  }, [location, reduceMotion]);

  return (
    <AnimatePresence>
      {activeRoute && (
        <motion.div
          key={activeRoute}
          aria-hidden="true"
          className="route-card fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-navy-deep text-white"
          initial={{ x: "105%" }}
          animate={{ x: ["105%", "0%", "0%", "-105%"] }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.74,
            times: [0, 0.38, 0.58, 1],
            ease: "easeInOut",
          }}
        >
          <div className="grain-overlay absolute inset-0 opacity-[0.06]" />
          <div className="absolute inset-y-0 left-[12%] w-px bg-white/15" />
          <div className="relative text-center">
            <span className="block font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              MF
            </span>
            <span className="mt-3 block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/65 sm:text-xs">
              Precedentes · Processo · Prática forense
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
