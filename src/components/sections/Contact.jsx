import { Mail, MapPin, Phone } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';
import { SCHOOL } from '../../data/site';

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-accent">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div>
        <dt className="text-sm text-muted">{label}</dt>
        <dd className="mt-0.5 text-lg">{children}</dd>
      </div>
    </div>
  );
}

const linkClass = 'underline decoration-accent decoration-2 underline-offset-4';

export default function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading id="contact-title" title="Contact us" />
          <dl className="mt-10 space-y-7">
            <ContactRow icon={Phone} label="Admission helpline">
              <a href={SCHOOL.helplineHref} className={linkClass}>
                {SCHOOL.helpline}
              </a>
            </ContactRow>
            <ContactRow icon={Phone} label="Landline">
              {SCHOOL.landlines.map((line, index) => (
                <span key={line.href}>
                  {index > 0 && ', '}
                  <a href={line.href} className={linkClass}>
                    {line.label}
                  </a>
                </span>
              ))}
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <a href={`mailto:${SCHOOL.email}`} className={linkClass}>
                {SCHOOL.email}
              </a>
            </ContactRow>
            <ContactRow icon={MapPin} label="Address">
              <a href={SCHOOL.mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {SCHOOL.address}
              </a>
            </ContactRow>
          </dl>
        </Reveal>

        <Reveal className="overflow-hidden rounded-3xl border border-line">
          <iframe
            title="Map showing the location of Tulas International School, Dehradun"
            src={SCHOOL.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full lg:h-full lg:min-h-[28rem]"
          />
        </Reveal>
      </div>
    </Section>
  );
}
