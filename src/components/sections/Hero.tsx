import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_LINKS } from "../../constants/links";
import { HERO_TRUST_ITEMS } from "../../data/heroTrust";
import { Container } from "../ui/Container";
import { AnchorButton } from "../ui/Button";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-white pt-[calc(var(--site-chrome-height,8.25rem)+env(safe-area-inset-top,0px))]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_15%_-10%,rgba(63,154,174,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,232,0.65)_0%,transparent_38%)]"
        aria-hidden
      />
      <Container as="div" className="relative pb-20 pt-10 md:pb-28 md:pt-16 lg:pb-32">
        <div className="grid min-h-[min(68vh,42rem)] items-center gap-14 lg:min-h-[min(72vh,44rem)] lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-20">
          <div>
            <motion.p
              className="mb-5 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-brand"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Nonprofit · Family-centered · Inclusive play
            </motion.p>
            <motion.h1
              id="hero-heading"
              className="font-display text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1.08] lg:text-[3.5rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              Complete Play &amp;{" "}
              <span className="bg-gradient-to-r from-brand to-mint bg-clip-text text-transparent">
                Discovery Center
              </span>
            </motion.h1>
            <motion.p
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl md:leading-relaxed"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              A warm, modern gathering place where children of all ages and
              abilities explore, caregivers find support, and neighbors build
              something lasting—powered by community generosity.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <AnchorButton href={SITE_LINKS.donate} variant="donate" className="px-6 py-3.5 text-base">
                Donate now
                <ArrowRight className="h-4 w-4" aria-hidden />
              </AnchorButton>
              <AnchorButton href="#about" variant="secondary" className="px-6 py-3.5 text-base">
                Learn more
              </AnchorButton>
            </motion.div>

            <ul className="mt-12 flex flex-col gap-4 border-t border-ink/5 pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 md:gap-10">
              {HERO_TRUST_ITEMS.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 text-sm font-semibold text-ink"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-mint/15 ring-1 ring-brand/10">
                    <ShieldCheck
                      className="h-4 w-4 text-brand"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            className="relative lg:pl-2"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-mint/25 via-cream-soft to-white shadow-card ring-1 ring-ink/5 lg:min-h-[min(36rem,70vh)]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231c2d33\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-70" />
              <div className="relative flex min-h-[22rem] flex-col justify-between p-6 sm:min-h-[26rem] sm:p-9 lg:min-h-full lg:p-10">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-ink shadow-soft ring-1 ring-ink/5 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-coral" aria-hidden />
                    Campaign visual placeholder
                  </div>
                  <span className="rounded-xl bg-brand/10 px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-wider text-brand">
                    Center opening story
                  </span>
                </div>
                <div className="mt-auto max-w-lg rounded-3xl bg-ink/88 p-6 text-white shadow-card backdrop-blur-sm">
                  <p className="text-sm font-medium leading-relaxed text-white/95 md:text-[0.9375rem]">
                    Reserve this area for signature photography: welcoming
                    architecture, families in motion, and inclusive play in
                    natural light—framed like a nonprofit annual report cover.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="pointer-events-none absolute -bottom-8 -left-6 hidden h-28 w-40 rounded-4xl bg-gradient-to-tr from-cream/80 to-coral/20 blur-2xl lg:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-4 -top-6 hidden h-32 w-32 rounded-full bg-mint/35 blur-2xl lg:block"
              aria-hidden
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
