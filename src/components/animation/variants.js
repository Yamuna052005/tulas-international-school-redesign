// Shared motion variants. Entrance durations stay inside the 0.3s–0.6s range.
const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const VIEWPORT = { once: true, margin: '0px 0px -10% 0px' };
