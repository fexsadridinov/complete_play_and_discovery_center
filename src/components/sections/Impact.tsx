import { Heart, Sparkles } from "lucide-react";
import { SITE_LINKS } from "../../constants/links";
import { IMPACT_STATS } from "../../data/stats";
import { MotionSection } from "../ui/MotionSection";
import { Section } from "../layout/Section";
import { Container } from "../ui/Container";
import { AnchorButton } from "../ui/Button";

export function Impact() {
  return (
    <Section
      id="impact"
      className="relative border-t border-ink/5 bg-white"
      pad="xl"
      ariaLabelledBy="impact-heading"
    >
      <Container as="div">
        <div className="relative overflow-hidden rounded-4xl bg-brand text-white shadow-card ring-1 ring-ink/5">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_100%_0%,rgba(255,226,175,0.18),transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-mint/25 blur-3xl"
            aria-hidden
          />
          <Container as="div" className="relative py-16 md:py-20 lg:py-24">
            <MotionSection>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-mint">
                  Impact & accountability
                </p>
                <h2
                  id="impact-heading"
                  className="mt-5 font-display text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight"
                >
                  When families thrive, communities rise
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
                  Philanthropy keeps our doors wide open: scholarships, staffing,
                  inclusive upgrades, and programs that meet families where they
                  are. These numbers are placeholders—swap in your audited
                  highlights when ready.
                </p>
              </div>
            </MotionSection>

            <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {IMPACT_STATS.map((stat, i) => (
                <MotionSection key={stat.id} delay={0.05 * i}>
                  <div className="flex h-full flex-col rounded-3xl bg-white/12 p-6 ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 md:p-7">
                    <p className="font-display text-4xl font-semibold tracking-tight text-white md:text-[2.75rem]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
                      {stat.label}
                    </p>
                    {stat.note ? (
                      <p className="mt-3 text-sm leading-relaxed text-white/75">
                        {stat.note}
                      </p>
                    ) : null}
                  </div>
                </MotionSection>
              ))}
            </div>
          </Container>
        </div>
      </Container>

      <Container as="div" className="mt-14 md:mt-16">
        <MotionSection delay={0.08}>
          <div className="grid overflow-hidden rounded-4xl bg-cream-soft ring-1 ring-ink/5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border-b border-ink/5 p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12 lg:pr-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-wider text-brand shadow-soft ring-1 ring-ink/5">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Sustaining access
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Your gift keeps discovery within reach
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                Recurring donors help us plan ahead for sensory accommodations,
                trained staff, and scholarships that quietly change a family’s
                month. If you’re ready, join neighbors who treat this work as
                essential community infrastructure.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 bg-white p-8 md:p-10 lg:p-12">
              <p className="text-sm font-semibold text-ink-muted">
                Ready to give?
              </p>
              <AnchorButton
                href={SITE_LINKS.donate}
                variant="donate"
                className="w-full justify-center py-3.5 text-base md:py-4"
              >
                <Heart className="h-4 w-4" aria-hidden />
                Donate today
              </AnchorButton>
              <AnchorButton
                href={SITE_LINKS.partner}
                variant="secondary"
                className="w-full justify-center"
              >
                Explore partnership
              </AnchorButton>
            </div>
          </div>
        </MotionSection>
      </Container>
    </Section>
  );
}
