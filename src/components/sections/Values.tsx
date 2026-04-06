import { PILLARS } from "../../data/pillars";
import { MotionSection } from "../ui/MotionSection";
import { Section } from "../layout/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Values() {
  return (
    <Section
      className="border-t border-ink/5 bg-white"
      pad="lg"
      ariaLabelledBy="values-heading"
    >
      <Container as="div">
        <MotionSection>
          <SectionHeading
            eyebrow="What guides us"
            title="Values that hold the room together"
            description="Simple pillars keep our space intentional—so families feel seen, staff feel supported, and donors know what they’re fueling."
            align="center"
            id="values-heading"
          />
        </MotionSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <MotionSection key={pillar.id} delay={0.05 * i}>
                <article className="group flex h-full min-h-[16.5rem] flex-col rounded-4xl bg-cream-soft p-7 shadow-soft ring-1 ring-ink/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand shadow-soft ring-1 ring-ink/5 transition-transform duration-200 group-hover:scale-[1.03]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink md:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-[0.9375rem]">
                    {pillar.description}
                  </p>
                </article>
              </MotionSection>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
