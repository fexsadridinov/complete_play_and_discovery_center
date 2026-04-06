import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
  /** Light text for dark / high-contrast backgrounds */
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  invert = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  const eyebrowTone = invert ? "text-mint" : "text-brand";
  const titleTone = invert ? "text-white" : "text-ink";
  const ruleTone = invert ? "bg-white/25" : "bg-brand/25";
  const bodyTone = invert ? "text-white/85" : "text-ink-muted";

  return (
    <div className={`mb-12 max-w-3xl space-y-5 md:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <div
          className={`flex flex-col gap-3 ${align === "center" ? "items-center" : ""}`}
        >
          <p
            className={`text-[0.6875rem] font-bold uppercase tracking-[0.18em] ${eyebrowTone}`}
          >
            {eyebrow}
          </p>
          <span
            className={`block h-px w-12 rounded-full ${ruleTone} ${align === "center" ? "mx-auto" : ""}`}
            aria-hidden
          />
        </div>
      ) : null}
      <h2
        id={id}
        className={`font-display text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.65rem] lg:leading-[1.15] ${titleTone}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`max-w-prose text-base leading-relaxed md:text-lg ${bodyTone} ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
