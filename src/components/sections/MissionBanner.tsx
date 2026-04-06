import { motion, useReducedMotion } from "framer-motion";
import { AnchorButton } from "../ui/Button";
import { Container } from "../ui/Container";

/**
 * Full-bleed editorial moment — reuses on-page mission language without new copy strategy.
 */
export function MissionBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-brand text-white"
      aria-labelledby="mission-banner-quote"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_20%_50%,rgba(121,201,197,0.2),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cream/10 blur-3xl"
        aria-hidden
      />
      <Container as="div" className="relative py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-mint"
          >
            Organizational promise
          </motion.p>
          <motion.blockquote
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl lg:text-[2.35rem] lg:leading-tight"
          >
            <span id="mission-banner-quote">
              &ldquo;Every family deserves a place where wonder feels safe,
              and support feels close.&rdquo;
            </span>
          </motion.blockquote>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <AnchorButton
              href="#mission"
              variant="secondary"
              className="border-white/25 bg-white text-brand hover:bg-cream-soft"
            >
              Read our mission
            </AnchorButton>
            <AnchorButton
              href="#programs"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              Explore programs
            </AnchorButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
