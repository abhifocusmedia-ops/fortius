import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, contact } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Cta } from "./Cta";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); setHover(null); }, [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const isActive = (item: (typeof nav)[number]) =>
    path === item.to || item.children?.some((c) => c.to === path);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-onyx/10 text-ink transition-all duration-500",
          scrolled ? "bg-paper/95 shadow-sm backdrop-blur-md" : "bg-paper/90 backdrop-blur-md",
        )}
      >
        <motion.div aria-hidden style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-px origin-left bg-volt" />
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Link to="/" aria-label="Fortius Sports Academy home" className="shrink-0">
            <Logo className="h-6 w-auto md:h-7" />
          </Link>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHover(item.children ? item.label : null)}
                  onMouseLeave={() => setHover(null)}
                >
                  <Link
                    to={item.to}
                    onFocus={() => setHover(item.children ? item.label : null)}
                    className={cn(
                      "relative flex items-center gap-1 px-3.5 py-2 text-[0.9rem] font-medium tracking-wide text-ink/80 transition-colors hover:text-ink",
                      isActive(item) && "text-ink",
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                    <span className={cn("absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-volt transition-transform duration-500", isActive(item) && "scale-x-100")} />
                  </Link>
                  <AnimatePresence>
                    {item.children && hover === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-full pt-3"
                      >
                        <div className="w-80 border border-onyx/15 bg-paper p-2 shadow-lift">
                          {item.children.map((c) => (
                            <Link key={c.to + c.label} to={c.to} className="group block px-4 py-3 transition-colors hover:bg-paper/5">
                              <span className="flex items-center justify-between font-display text-lg font-medium tracking-tight text-ink">
                                {c.label}
                                <span className="h-px w-0 bg-volt transition-all duration-500 group-hover:w-6" />
                              </span>
                              {c.note && <span className="mt-0.5 block text-sm text-muted-foreground">{c.note}</span>}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Cta to="/book-online" variant="volt" size="sm" className="hidden sm:inline-flex">Book Now</Cta>
            <button
              className="grid h-10 w-10 place-items-center lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-bone text-ink"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="container-x flex h-[72px] shrink-0 items-center justify-between">
              <Logo className="h-6 w-auto" />
              <button className="grid h-10 w-10 place-items-center" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="container-x flex-1 overflow-y-auto pb-8 pt-4" aria-label="Mobile">
              <ul className="divide-y divide-onyx/10 border-y border-onyx/10">
                <li><Link to="/" className="block py-4 font-display text-3xl font-medium tracking-tight">Home</Link></li>
                {nav.map((item, i) => (
                  <motion.li key={item.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.04 }}>
                    {item.children ? (
                      <>
                        <button
                          className="flex w-full items-center justify-between py-4 text-left font-display text-3xl font-medium tracking-tight"
                          aria-expanded={openSub === item.label}
                          onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                        >
                          {item.label}
                          <ChevronDown className={cn("h-5 w-5 transition-transform", openSub === item.label && "rotate-180")} />
                        </button>
                        <AnimatePresence initial={false}>
                          {openSub === item.label && (
                            <motion.ul initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                              {item.children.map((c) => (
                                <li key={c.label}>
                                  <Link to={c.to} className="flex items-baseline justify-between gap-4 pb-3 pl-1 text-lg text-ink/75">
                                    {c.label}
                                    <span className="truncate text-xs text-ink/40">{c.note}</span>
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link to={item.to} className="block py-4 font-display text-3xl font-medium tracking-tight">{item.label}</Link>
                    )}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <Cta to="/book-online" variant="volt" size="lg">Book Now</Cta>
                <a href={contact.phoneHref} className="text-center text-sm text-ink/60">{contact.phone} · {contact.email}</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
