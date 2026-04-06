import { ArrowRight, Heart } from "lucide-react";
import { SITE_LINKS } from "../../constants/links";
import { MotionSection } from "../ui/MotionSection";
import { Section } from "../layout/Section";
import { Container } from "../ui/Container";
import { AnchorButton } from "../ui/Button";

export function FinalCTA() {
  return (
    <Section
      id="donate"
      className="relative overflow-hidden border-t border-ink/5 bg-white"
      pad="xl"
      ariaLabelledBy="final-cta-heading"
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-mint/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cream/40 blur-3xl"
        aria-hidden
      />
      <Container as="div" className="relative">
        <MotionSection>
          <div className="mx-auto max-w-4xl rounded-4xl bg-gradient-to-br from-cream-soft via-white to-mint/15 p-8 text-center shadow-card ring-1 ring-ink/5 sm:p-10 md:p-14 lg:p-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-wider text-brand shadow-soft ring-1 ring-ink/5">
              <Heart className="h-3.5 w-3.5" aria-hidden />
              Invest in families
            </span>
            <h2
              id="final-cta-heading"
              className="mt-6 font-display text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-[2.65rem]"
            >
              Help us open more doors to play and discovery
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              Whether you give once a month or anchor a program, you help children
              experience belonging—and give caregivers room to breathe. Thank you
              for believing this work belongs to all of us.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <AnchorButton
                href={SITE_LINKS.donate}
                variant="donate"
                className="min-h-[3.25rem] px-8 text-base"
              >
                Donate now
                <ArrowRight className="h-4 w-4" aria-hidden />
              </AnchorButton>
              <AnchorButton href={SITE_LINKS.partner} variant="secondary" className="min-h-[3.25rem] px-7">
                Partner with us
              </AnchorButton>
              <AnchorButton href="#about" variant="ghost" className="min-h-[3.25rem]">
                Learn more
              </AnchorButton>
            </div>
          </div>
        </MotionSection>
      </Container>
    </Section>
  );
}
