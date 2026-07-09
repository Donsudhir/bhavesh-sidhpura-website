import Link from "next/link";
import {
  WhatsappLogo,
  InstagramLogo,
  EnvelopeSimple,
  FacebookLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "./ui/Container";
import { nav, site } from "@/lib/site";

const socialLinks = [
  { label: "Instagram", href: site.social.instagram, Icon: InstagramLogo },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookLogo },
  { label: "YouTube", href: site.social.youtube, Icon: YoutubeLogo },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinLogo },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-bg">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-lg font-medium tracking-[0.04em] text-text">
              {site.name.toUpperCase()}
            </p>
            <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-text-muted">
              {site.role}. Based in {site.location}, travelling across India on
              request.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-text-muted">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] text-text-muted">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-text">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/book" className="hover:text-text">
                  Book
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-text-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-[0.95rem] text-text-muted">
              <li>
                <a
                  href={site.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-text"
                >
                  <WhatsappLogo size={18} weight="regular" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 hover:text-text"
                >
                  <EnvelopeSimple size={18} weight="regular" />
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={18} weight="regular" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <p className="max-w-3xl text-[0.78rem] leading-relaxed text-text-muted">
            &copy; {new Date().getFullYear()} {site.name}. Access Consciousness
            and Access Bars are registered trademarks of Access Consciousness
            LLC, used here to describe certified training.
          </p>
        </div>
      </Container>
    </footer>
  );
}
