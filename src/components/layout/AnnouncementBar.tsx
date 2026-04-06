import { ChevronRight } from "lucide-react";
import { ANNOUNCEMENT_BAR } from "../../constants/site";

export function AnnouncementBar() {
  if (!ANNOUNCEMENT_BAR.enabled) return null;

  return (
    <div
      data-site-announcement
      className="border-b border-white/10 bg-brand-deep text-white"
    >
      <div className="mx-auto flex max-w-content flex-col items-center justify-center gap-2 px-5 py-2.5 text-center sm:flex-row sm:text-left sm:gap-4">
        <p className="max-w-4xl text-xs font-medium leading-relaxed text-white/95 sm:text-[0.8125rem]">
          <span className="mr-2 inline font-semibold uppercase tracking-[0.12em] text-mint">
            Update
          </span>
          {ANNOUNCEMENT_BAR.message}
        </p>
        {ANNOUNCEMENT_BAR.href ? (
          <a
            href={ANNOUNCEMENT_BAR.href}
            className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-cream transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep sm:text-sm"
          >
            {ANNOUNCEMENT_BAR.linkLabel}
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        ) : null}
      </div>
    </div>
  );
}
