import { useRouterState } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, type ReactNode } from "react";

/** Subtle fade-up on every route change, plus a volt curtain sweep. */
export function PageTransition({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();
  useEffect(() => { window.scrollTo(0, 0); }, [path]);
  return (
    <div key={path}>
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[80] origin-top bg-volt"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
      <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}>
        {children}
      </motion.div>
    </div>
  );
}
