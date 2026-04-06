import { Menu, X, Heart } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { SITE_LINKS } from "../../constants/links";
import { NAV_ITEMS } from "../../data/navigation";
import { Container } from "../ui/Container";
import { AnchorButton } from "../ui/Button";

const SCROLL_THRESHOLD = 16;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerBg = scrolled
    ? "bg-cream-soft/95 shadow-soft backdrop-blur-md"
    : "bg-white/90 backdrop-blur-sm";

  return (
    <header
      className={`border-b border-ink/5 transition-all duration-300 ${headerBg}`}
    >
      <div data-site-header-toolbar>
      <Container
        as="div"
        className="flex min-h-[4.75rem] items-center justify-between gap-4 py-3 lg:grid lg:min-h-[5rem] lg:grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1.2fr)] lg:items-center lg:gap-6"
      >
        <a
          href="#top"
          className="group flex max-w-fit items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 lg:justify-self-start"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-card ring-1 ring-brand/20 transition-transform duration-200 group-hover:scale-[1.02]">
            <Heart className="h-5 w-5" strokeWidth={2} aria-hidden />
          </span>
          <span className="hidden text-left font-display text-[0.8125rem] font-semibold leading-snug tracking-tight text-ink sm:block sm:max-w-[12.5rem] lg:max-w-[15rem]">
            Complete Play
            <span className="block text-ink-muted">&amp; Discovery Center</span>
          </span>
        </a>

        <nav
          className="hidden items-center justify-center gap-0.5 justify-self-center lg:flex xl:gap-1"
          aria-label="Primary"
        >
          {NAV_ITEMS.filter((i) => !i.isCta).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-2 text-[0.8125rem] font-semibold text-ink-muted transition-colors hover:bg-mint/15 hover:text-ink xl:px-3"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 lg:justify-self-end">
          <AnchorButton
            href={SITE_LINKS.donate}
            variant="donate"
            className="hidden px-4 py-2.5 text-xs font-bold uppercase tracking-wide sm:inline-flex lg:px-5 lg:text-sm lg:normal-case lg:tracking-normal"
          >
            Donate
          </AnchorButton>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-ink transition-colors hover:bg-mint/20 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-ink/10 bg-white shadow-card lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <Container as="div" className="flex flex-col gap-1 py-5 pb-10">
            {NAV_ITEMS.filter((i) => !i.isCta).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-mint/15"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <AnchorButton
              href={SITE_LINKS.donate}
              variant="donate"
              className="mt-3 justify-center py-3.5"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </AnchorButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
