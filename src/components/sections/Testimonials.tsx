import { TESTIMONIALS } from "../../data/testimonials";
import { MotionSection } from "../ui/MotionSection";
import { Section } from "../layout/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  return (
    <Section
      className="border-t border-ink/5 bg-mint-surface"
      pad="lg"
      ariaLabelledBy="testimonials-heading"
    >
      <Container as="div">
        <MotionSection>
          <SectionHeading
            eyebrow="Voices from the community"
            title="Warmth you can feel in the room"
            description="Placeholder voices—swap in real quotes with permission and light photo crops when you’re ready."
            align="center"
            id="testimonials-heading"
          />
        </MotionSection>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <MotionSection key={t.id} delay={0.06 * i}>
              <blockquote className="flex h-full min-h-[16rem] flex-col rounded-4xl bg-white p-7 shadow-soft ring-1 ring-ink/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card md:p-8">
                <p className="flex-1 text-sm leading-relaxed text-ink md:text-[0.9375rem]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-ink/10 pt-6">
                  <cite className="not-italic">
                    <span className="block font-semibold text-ink">{t.name}</span>
                    <span className="text-xs font-medium text-ink-soft">{t.role}</span>
                  </cite>
                </footer>
              </blockquote>
            </MotionSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
