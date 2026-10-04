import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '../animation/Reveal';
import { SPORTS } from '../../data/site';

// Yellow underline that draws in on hover, echoing the brand's yellow nav line.
const UNDERLINE =
  'bg-[linear-gradient(#F5B800,#F5B800)] bg-[length:0%_0.14em] bg-left-bottom bg-no-repeat hover:bg-[length:100%_0.14em]';

export default function Sports() {
  return (
    <Section id="sports" labelledBy="sports-title">
      <Reveal>
        <SectionHeading id="sports-title" title="Sports?">
          It’s not just a facility. At Tulas it’s the foundation! 16+ sports curated to bring joy and
          discipline to your life.
        </SectionHeading>
      </Reveal>

      <Stagger as="ul" className="group/list mt-14 flex flex-wrap gap-x-8 gap-y-3">
        {SPORTS.map((sport) => (
          <StaggerItem
            as="li"
            key={sport}
            data-cursor="hover"
          >
            {/* Opacity lives on the span: the <li> opacity is owned by the reveal animation. */}
            <span
              className={`inline-block font-display text-4xl font-bold leading-tight tracking-tight transition-opacity duration-300 group-hover/list:opacity-30 hover:!opacity-100 md:text-6xl ${UNDERLINE}`}
            >
              {sport}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
