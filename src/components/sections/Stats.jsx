import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '../animation/Reveal';
import { STATS } from '../../data/site';

/** Counts up once when scrolled into view. Updates the DOM via a motion value, not React state. */
function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(prefersReducedMotion ? to : 0);
  const text = useTransform(count, (value) => `${Math.round(value)}${suffix}`);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return undefined;
    const controls = animate(count, to, { duration: 1.2, ease: 'easeOut' });
    return () => controls.stop();
  }, [isInView, prefersReducedMotion, count, to]);

  return <motion.span ref={ref}>{text}</motion.span>;
}

export default function Stats() {
  return (
    <Section id="campus" labelledBy="campus-title" className="bg-surface">
      <Reveal>
        <SectionHeading id="campus-title" title="Built for boarding life">
          Where students live, learn and play, with care on call around the clock.
        </SectionHeading>
      </Reveal>

      <Stagger as="dl" className="mt-14 grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StaggerItem key={stat.label} className="flex flex-col-reverse justify-end border-l border-line pl-6">
            <dt className="mt-2 max-w-[14rem] text-muted">{stat.label}</dt>
            <dd className="font-display text-5xl font-bold md:text-7xl">
              {stat.display ?? <CountUp to={stat.value} suffix={stat.suffix} />}
            </dd>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
