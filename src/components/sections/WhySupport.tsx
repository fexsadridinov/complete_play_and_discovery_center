import { WHY_SUPPORT_POINTS } from "../../data/whySupport";
import { MotionSection } from "../ui/MotionSection";
import { Section } from "../layout/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function WhySupport() {
  return (
    <Section
      className="border-t border-ink/5 bg-white"
      pad="lg"
      ariaLabelledBy="why-heading"
    >
      <Container as="div">
        <MotionSection>
          <SectionHeading
            eyebrow="Why donors matter"
            title="A stronger center starts with people who believe"
            description="Thoughtful philanthropy is how we keep quality high, access fair, and programming responsive. Here’s what your support fuels."
            align="center"
            id="why-heading"
          />
        </MotionSection>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {WHY_SUPPORT_POINTS.map((point, i) => (
            <MotionSection key={point.id} delay={0.06 * i}>
              <article className="flex h-full flex-col rounded-4xl border border-ink/5 bg-cream-soft/60 p-8 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/15 hover:shadow-card md:p-9">
                <span
                  className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand shadow-soft ring-1 ring-ink/5"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-[0.9375rem]">
                  {point.description}
                </p>
              </article>
            </MotionSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
