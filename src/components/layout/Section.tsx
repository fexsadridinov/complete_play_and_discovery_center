import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Vertical padding preset — editorial homepage uses roomier lg/xl */
  pad?: "sm" | "md" | "lg" | "xl";
  ariaLabelledBy?: string;
};

const padMap = {
  sm: "py-14 md:py-20",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-28 lg:py-32",
  xl: "py-24 md:py-32 lg:py-40",
};

export function Section({
  id,
  children,
  className = "",
  pad = "md",
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${padMap[pad]} ${className}`}
    >
      {children}
    </section>
  );
}
