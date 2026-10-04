import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { Reveal } from '../animation/Reveal';
import { SCHOOL } from '../../data/site';

export default function VirtualTour() {
  return (
    <Section id="tour" labelledBy="tour-title">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading id="tour-title" title="Dive into our virtual tour">
            Walk the campus from wherever you are before you plan a visit.
          </SectionHeading>
          <div className="mt-8">
            <Button href={SCHOOL.tourUrl} variant="ink">
              Start the virtual tour
            </Button>
          </div>
        </Reveal>

        <Reveal className="mx-auto">
          <div className="relative grid h-64 w-64 place-items-center md:h-80 md:w-80">
            <svg
              aria-hidden="true"
              viewBox="0 0 200 200"
              className="absolute inset-0 animate-spin-slow motion-reduce:animate-none"
            >
              <circle
                cx="100"
                cy="100"
                r="96"
                fill="none"
                stroke="#F5B800"
                strokeWidth="3"
                strokeDasharray="4 10"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-display text-7xl font-bold md:text-8xl">360°</span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
