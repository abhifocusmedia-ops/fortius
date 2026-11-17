import { motion, useInView, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({ delay = 0, y = 28, ...props }: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
      {...props}
    />
  );
}

/** Line-by-line headline reveal */
export function SplitLines({ lines, className, delay = 0 }: { lines: string[]; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.09, ease }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Image that wipes open from the bottom and settles from a slight zoom. */
export function RevealImage({ src, alt, className, imgClassName, delay = 0 }: { src: string; alt: string; className?: string; imgClassName?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const show = reduce || inView;
  return (
    <div ref={ref} className={["img-zoom relative overflow-hidden", className].filter(Boolean).join(" ")}>
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
        animate={show ? { clipPath: "inset(0% 0 0 0)" } : { clipPath: "inset(100% 0 0 0)" }}
        transition={{ duration: 1.1, delay, ease }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className={["absolute inset-0 h-full w-full object-cover", imgClassName].filter(Boolean).join(" ")}
          initial={reduce ? false : { scale: 1.25 }}
          animate={show ? { scale: 1 } : { scale: 1.25 }}
          transition={{ duration: 1.6, delay, ease }}
        />
      </motion.div>
    </div>
  );
}
