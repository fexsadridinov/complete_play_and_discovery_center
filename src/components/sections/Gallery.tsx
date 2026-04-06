import { GALLERY_ITEMS } from "../../data/gallery";
import { MotionSection } from "../ui/MotionSection";
import { Section } from "../layout/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Gallery() {
  return (
    <Section
      className="border-t border-ink/5 bg-cream-soft"
      pad="lg"
      ariaLabelledBy="gallery-heading"
    >
      <MotionSection>
        <Container as="div">
          <SectionHeading
            eyebrow="Inside the center"
            title="A glimpse of what we’re building"
            description="Polished placeholders stand in for photography. Drop in hi-res lifestyle imagery when your shoots are ready."
            align="center"
            id="gallery-heading"
          />
        </Container>
      </MotionSection>

      <div className="mx-auto mt-4 max-w-[100vw] px-0 sm:px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {GALLERY_ITEMS.map((item, i) => {
            const spanClass =
              i === 0
                ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
                : "";

            return (
              <MotionSection
                key={item.id}
                delay={0.03 * i}
                className={spanClass}
              >
                <figure
                  className={`group relative h-full min-h-[10rem] overflow-hidden rounded-3xl bg-gradient-to-br shadow-soft ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-card md:min-h-[12rem] lg:min-h-[13rem] lg:rounded-4xl ${item.placeholderClass}`}
                >
                  <figcaption className="sr-only">{item.alt}</figcaption>
                  <div className="absolute inset-0 flex items-end bg-[linear-gradient(180deg,transparent_55%,rgba(28,45,51,0.12)_100%)] p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-xl bg-ink/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      Future photo
                    </span>
                  </div>
                </figure>
              </MotionSection>
            );
          })}
        </div>
      </div>

    </Section>
  );
}
