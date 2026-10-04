import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, VIEWPORT } from './variants';

/** Fades a single block up once it enters the viewport. */
export function Reveal({ as = 'div', children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} {...rest}>
      {children}
    </Tag>
  );
}

/** Parent that staggers any <StaggerItem> descendants into view. */
export function Stagger({ as = 'div', children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag variants={staggerContainer} initial="hidden" whileInView="show" viewport={VIEWPORT} {...rest}>
      {children}
    </Tag>
  );
}

export function StaggerItem({ as = 'div', children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag variants={fadeUp} {...rest}>
      {children}
    </Tag>
  );
}
