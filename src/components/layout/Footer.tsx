import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_LINKS } from "../../constants/links";
import { NAV_ITEMS } from "../../data/navigation";
import { AnchorButton } from "../ui/Button";
import { Container } from "../ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-ink/10 bg-brand-deep text-white">
      <Container as="div" className="py-16 md:py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-start gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sm font-bold text-white ring-1 ring-white/20">
                CP
              </span>
              <div>
                <p className="font-display text-base font-semibold leading-snug">
                  Complete Play &amp; Discovery Center
                </p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
                  A nonprofit space where children and families explore, connect,
                  and grow—designed for inclusion, discovery, and community care.
                </p>
              </div>
            </div>
            <AnchorButton
              href={SITE_LINKS.donate}
              variant="donate"
              className="mt-8 w-full justify-center sm:w-auto"
            >
              Support our mission
            </AnchorButton>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
            <div>
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-mint">
                Navigate
              </p>
              <ul className="mt-4 space-y-3">
                {NAV_ITEMS.filter((i) => !i.isCta).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm font-medium text-white/85 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={SITE_LINKS.donate}
                    className="text-sm font-semibold text-cream transition-colors hover:text-white"
                  >
                    Donate online
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-mint">
                Contact
              </p>
              <ul className="mt-4 space-y-4 text-sm text-white/80">
                <li className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden />
                  <span>
                    123 Harbor Lane, Suite 100
                    <br />
                    Your City, ST 00000
                  </span>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_LINKS.email}`}
                    className="flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-mint" aria-hidden />
                    {SITE_LINKS.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE_LINKS.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-mint" aria-hidden />
                    {SITE_LINKS.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-mint">
              Connect
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={SITE_LINKS.social.facebook}
                  className="text-white/80 transition-colors hover:text-white"
                  rel="noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SITE_LINKS.social.instagram}
                  className="text-white/80 transition-colors hover:text-white"
                  rel="noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE_LINKS.social.linkedin}
                  className="text-white/80 transition-colors hover:text-white"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-10 text-xs text-white/55 md:flex-row md:items-start md:justify-between md:gap-8">
          <p>
            © {year} Complete Play &amp; Discovery Center. All rights reserved.
          </p>
          <p className="max-w-xl text-balance md:text-right">
            Complete Play &amp; Discovery Center is a registered 501(c)(3)
            nonprofit organization. EIN: 00-0000000 (placeholder).
          </p>
        </div>
      </Container>
    </footer>
  );
}
