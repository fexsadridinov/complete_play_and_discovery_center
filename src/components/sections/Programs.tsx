import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROGRAMS } from "../../data/programs";
import { MotionSection } from "../ui/MotionSection";
import { Section } from "../layout/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { AnchorButton } from "../ui/Button";
import { SITE_LINKS } from "../../constants/links";

const CARD_GRADIENTS = [
  "from-brand/35 via-mint/25 to-cream-soft",
  "from-mint/40 via-cream-muted to-white",
  "from-coral/20 via-brand/15 to-mint/20",
  "from-brand/25 via-white to-cream-soft",
  "from-cream-muted via-mint/30 to-brand/20",
  "from-mint/35 via-coral/15 to-cream-soft",
] as const;

export function Programs() {
  return (
    <Section
      id="programs"
      className="relative overflow-hidden border-t border-ink/5 bg-mint-surface"
      pad="lg"
      ariaLabelledBy="programs-heading"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl"
        aria-hidden
      />
      <Container as="div" className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <MotionSection>
              <SectionHeading
                eyebrow="Programs & experiences"
                title="Room to grow—one visit at a time"
                description="We’re building a flexible calendar of offerings. These cards are ready for your final names, descriptions, and registration links."
                id="programs-heading"
              />
            </MotionSection>
          </div>
          <MotionSection>
            <AnchorButton
              href={SITE_LINKS.partner}
              variant="secondary"
              className="shrink-0 px-5"
            >
              Partner inquiries
              <ArrowRight className="h-4 w-4" aria-hidden />
            </AnchorButton>
          </MotionSection>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {PROGRAMS.map((program, i) => (
            <MotionSection key={program.id} delay={0.04 * i}>
              <article className="group flex h-full min-h-[26rem] flex-col overflow-hidden rounded-4xl bg-white shadow-card ring-1 ring-ink/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card">
                <div
                  className={`relative h-48 shrink-0 bg-gradient-to-br ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]} ring-b ring-ink/5`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(28,45,51,0.06)_100%)]" />
                  <div className="absolute left-5 top-5 flex items-start justify-between gap-3">
                    {program.tag ? (
                      <span className="rounded-full bg-white/95 px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-wider text-brand shadow-soft ring-1 ring-ink/5">
                        {program.tag}
                      </span>
                    ) : null}
                    <span className="ml-auto rounded-2xl bg-white/90 p-2.5 text-ink-muted opacity-0 shadow-soft ring-1 ring-ink/5 transition-all duration-200 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                  <p className="absolute bottom-5 left-5 right-5 text-[0.6875rem] font-semibold uppercase tracking-wider text-ink/50">
                    Image or illustration ·{" "}
                    <span className="text-ink/70">{program.title}</span>
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold text-ink md:text-[1.35rem]">
                    {program.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted md:text-[0.9375rem]">
                    {program.description}
                  </p>
                  <a
                    href="#programs"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    Program details (link-ready)
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </article>
            </MotionSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
