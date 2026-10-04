import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import { SCHOOL } from '../../data/site';

const HEADLINE = ['Welcome', 'to', 'Tulas', 'International', 'School', '(TIS)'];
const EASE = [0.22, 1, 0.36, 1];

// Angular ridgelines, far to near. The nearest ridge is filled with the page
// background colour so the hero melts into the next section in both themes.
const RIDGES = [
  {
    d: 'M0 330 L120 280 L210 320 L340 230 L460 300 L560 250 L700 320 L820 240 L940 310 L1080 220 L1200 290 L1320 250 L1440 300 V600 H0 Z',
    fill: '#2A5CA8',
    shift: 90,
  },
  {
    d: 'M0 410 L90 370 L200 420 L330 340 L450 400 L600 330 L740 410 L880 350 L1010 420 L1150 340 L1290 400 L1440 360 V600 H0 Z',
    fill: '#1B4585',
    shift: 50,
  },
  {
    d: 'M0 500 L140 470 L260 510 L420 450 L560 505 L720 460 L880 510 L1040 465 L1180 510 L1320 480 L1440 505 V600 H0 Z',
    fill: 'rgb(var(--paper))',
    shift: 0,
  },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  const scale = prefersReducedMotion ? 0 : 1;
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 220 * scale]);
  const farY = useTransform(scrollYProgress, [0, 1], [0, RIDGES[0].shift * scale]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, RIDGES[1].shift * scale]);
  const layerY = [farY, midY, 0];

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="on-navy relative isolate flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-navy-deep via-navy to-[#1B4585] text-white"
    >
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[34%] right-[8%] -z-10 h-56 w-56 rounded-full bg-accent md:h-80 md:w-80"
        style={{ y: sunY }}
      />

      {RIDGES.map((ridge, index) => (
        <motion.svg
          key={ridge.fill}
          aria-hidden="true"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 -z-10 h-[62%] w-full"
          style={{ y: layerY[index] }}
        >
          <path d={ridge.d} style={{ fill: ridge.fill }} />
        </motion.svg>
      ))}

      <div className="mx-auto w-full max-w-7xl px-5 pb-[24vh] pt-32 lg:px-8">
        <h1
          id="hero-title"
          className="max-w-4xl font-display text-[clamp(2.6rem,7.2vw,6rem)] font-bold leading-[0.96] tracking-tight"
        >
          {HEADLINE.map((word, index) => (
            <span key={word} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 + index * 0.07 }}
              >
                {word}
              </motion.span>
              {index < HEADLINE.length - 1 && ' '}
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-8 max-w-xl space-y-4 text-lg text-white/85"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.7 }}
        >
          <p>TIS is one of India’s top boarding and day schools in Dehradun, India.</p>
          <p>
            Our CBSE curriculum focuses on academic excellence, holistic development, and preparing
            students to be global leaders.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href={SCHOOL.applyUrl}>Apply now</Button>
            <Button href="#enquire" variant="outline">
              Enquire now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
