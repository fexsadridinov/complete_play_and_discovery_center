import { useLayoutEffect, useRef } from "react";
import { SITE_CHROME_HEIGHT_VAR } from "../../constants/layout";
import { AnnouncementBar } from "./AnnouncementBar";
import { Header } from "./Header";

function readCollapsedChromeHeight(root: HTMLElement): number {
  const announcement = root.querySelector<HTMLElement>("[data-site-announcement]");
  const toolbar = root.querySelector<HTMLElement>("[data-site-header-toolbar]");
  let h = 0;
  if (announcement) {
    h += announcement.getBoundingClientRect().height;
  }
  if (toolbar) {
    h += toolbar.getBoundingClientRect().height;
  }
  return h;
}

export function SiteChrome() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const apply = () => {
      const px = readCollapsedChromeHeight(root);
      if (px > 0) {
        document.documentElement.style.setProperty(SITE_CHROME_HEIGHT_VAR, `${px}px`);
      }
    };

    apply();

    const watched = new Set<Element>();
    const ro = new ResizeObserver(() => apply());

    const observeTargets = () => {
      root.querySelectorAll("[data-site-announcement], [data-site-header-toolbar]").forEach((el) => {
        if (!watched.has(el)) {
          watched.add(el);
          ro.observe(el);
        }
      });
    };

    observeTargets();
    const mo = new MutationObserver(() => {
      observeTargets();
      apply();
    });
    mo.observe(root, { childList: true, subtree: true });

    window.addEventListener("resize", apply);
    window.visualViewport?.addEventListener("resize", apply);

    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("resize", apply);
      window.visualViewport?.removeEventListener("resize", apply);
      document.documentElement.style.removeProperty(SITE_CHROME_HEIGHT_VAR);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)]"
    >
      <AnnouncementBar />
      <Header />
    </div>
  );
}
