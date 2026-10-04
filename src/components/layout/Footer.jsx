import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Logo from '../ui/Logo';
import { FOOTER_LINKS, SCHOOL, SOCIAL_LINKS } from '../../data/site';

const SOCIAL_ICONS = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
};

export default function Footer() {
  return (
    <footer className="on-navy bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <Logo />
          <address className="mt-6 max-w-sm text-white/80 not-italic">
            {SCHOOL.name}
            <br />
            {SCHOOL.address}
          </address>
          <p className="mt-4 text-white/80">
            Admission helpline:{' '}
            <a href={SCHOOL.helplineHref} className="underline decoration-accent underline-offset-4">
              {SCHOOL.helpline}
            </a>
            <br />
            <a href={`mailto:${SCHOOL.email}`} className="underline decoration-accent underline-offset-4">
              {SCHOOL.email}
            </a>
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-4">
          <h2 className="font-display text-xl font-semibold">Quick links</h2>
          <ul className="mt-4 space-y-1">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 text-white/80 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-display text-xl font-semibold">Follow TIS</h2>
          <ul className="mt-4 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.id];
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/25 hover:border-accent hover:bg-accent hover:text-navy"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-white/70 lg:px-8">
          Copyright © 2026 Tulas International School, Dehradun. All rights reserved. This page is a
          homepage redesign assessment, not the official website.
        </p>
      </div>
    </footer>
  );
}
