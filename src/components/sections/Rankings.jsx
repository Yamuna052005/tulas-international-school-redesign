import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '../animation/Reveal';
import { RANKINGS } from '../../data/site';

export default function Rankings() {
  return (
    <Section id="recognition" labelledBy="recognition-title" className="on-navy bg-navy text-white">
      <Reveal>
        <SectionHeading id="recognition-title" title="Recognised across India" onNavy>
          We believe in celebrating the hard work and perseverance of the best!
        </SectionHeading>
      </Reveal>

      <Stagger as="ul" className="mt-14 divide-y divide-white/15 border-y border-white/15">
        {RANKINGS.map((item) => (
          <StaggerItem
            as="li"
            key={`${item.rank}-${item.place}`}
            className="grid items-baseline gap-2 py-8 md:grid-cols-12 md:gap-6"
          >
            <p className="font-display text-6xl font-bold text-accent md:col-span-3 md:text-7xl">{item.rank}</p>
            <p className="font-display text-2xl font-semibold md:col-span-3">{item.place}</p>
            <p className="text-lg text-white/80 md:col-span-6">
              {item.title}, by {item.source}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
