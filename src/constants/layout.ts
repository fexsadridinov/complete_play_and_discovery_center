import { ANNOUNCEMENT_BAR } from "./site";

/** Fixed chrome: announcement (~2.5rem) + main header */
export const FIXED_HEADER_TOTAL_CLASS = ANNOUNCEMENT_BAR.enabled
  ? "pt-[6.875rem]"
  : "pt-[5.25rem]";
