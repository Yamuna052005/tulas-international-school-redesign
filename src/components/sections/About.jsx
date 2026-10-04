import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '../animation/Reveal';

export default function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <SectionHeading id="about-title" title="Boarding and day school excellence" />
        </Reveal>

        <Stagger className="space-y-6 lg:col-span-6 lg:pt-3">
          <StaggerItem as="p" className="border-l-4 border-accent pl-5 text-xl leading-relaxed">
            We provide world-class education, modern facilities, and a nurturing environment for
            students to thrive academically, socially, and culturally.
          </StaggerItem>
          <StaggerItem as="p" className="pl-6 text-lg leading-relaxed text-muted">
            Join TIS to be part of a community that encourages leadership, innovation, and lifelong
            learning.
          </StaggerItem>
          <StaggerItem as="p" className="pl-6 text-base leading-relaxed text-muted">
            Tulas International School was established in 2012 under the aegis of Rishabh
            Educational Trust to impart education through seamless opportunities.
          </StaggerItem>
        </Stagger>
      </div>

      <Reveal className="mt-20 grid gap-8 border-t border-line pt-12 md:mt-28 lg:grid-cols-12">
        <h3 className="font-display text-3xl font-semibold leading-tight text-balance md:text-5xl lg:col-span-7">
          At Tulas, we always ask, “What’s the secret to making school awesome?”
        </h3>
        <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-5">
          <p>
            The secret to making one’s school experience truly unforgettable? It’s all about making
            learning feel like an adventure—where curiosity leads, creativity thrives, and every day
            brings something new to discover. When students are inspired, they don’t just learn—they
            grow, explore, and shape their own futures.
          </p>
          <p className="font-display text-2xl font-semibold text-ink">There, we cracked it!</p>
        </div>
      </Reveal>
    </Section>
  );
}
