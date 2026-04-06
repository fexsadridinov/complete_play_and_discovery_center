import { Quote } from "lucide-react";
import { MotionSection } from "../ui/MotionSection";
import { Section } from "../layout/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Mission() {
  return (
    <Section
      id="about"
      className="relative border-t border-ink/5 bg-cream-soft"
      pad="lg"
      ariaLabelledBy="about-heading"
    >
      <Container as="div">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          <MotionSection>
            <SectionHeading
              eyebrow="About us"
              title="Built for families. Shaped by community."
              description={
                <>
                  Complete Play &amp; Discovery Center exists to give children
                  and caregivers a thoughtfully designed home for play,
                  learning, and belonging. We believe small moments—shared
                  laughter, a calmer afternoon, a first brave step into something
                  new—can change the rhythm of a whole family.
                </>
              }
              id="about-heading"
            />
            <div
              id="mission"
              className="scroll-mt-24 mt-4 space-y-5 border-l-4 border-brand pl-7"
            >
              <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                Our mission
              </h3>
              <p className="leading-relaxed text-ink-muted md:text-lg">
                We create inclusive, sensory-aware experiences that honor every
                child, support caregivers, and invite the wider community to
                invest in access and joy. As a nonprofit, we depend on neighbors,
                foundations, and partners who share our belief that discovery
                should never be out of reach.
              </p>
            </div>
          </MotionSection>

          <MotionSection delay={0.08}>
            <div className="relative lg:sticky lg:top-28">
              <div className="aspect-[5/6] min-h-[20rem] overflow-hidden rounded-4xl bg-gradient-to-br from-white via-mint/20 to-cream-muted shadow-card ring-1 ring-ink/5 lg:min-h-[28rem]">
                <div className="flex h-full flex-col items-center justify-center p-10 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                    Photography area
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted md:text-base">
                    Placeholder center photography: families, play zones, or
                    architectural interiors.
                  </p>
                </div>
              </div>
              <aside className="absolute -bottom-8 left-4 right-4 rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink/5 sm:left-6 sm:right-6 md:left-auto md:right-[-1rem] md:w-[min(100%,22rem)] lg:right-[-2rem]">
                <Quote className="mb-3 h-7 w-7 text-coral" aria-hidden />
                <p className="font-display text-lg font-medium leading-snug text-ink md:text-xl">
                  &ldquo;Every family deserves a place where wonder feels safe,
                  and support feels close.&rdquo;
                </p>
                <p className="mt-4 text-[0.6875rem] font-bold uppercase tracking-wider text-ink-soft">
                  — Organizational promise
                </p>
              </aside>
            </div>
          </MotionSection>
        </div>
      </Container>
    </Section>
  );
}
