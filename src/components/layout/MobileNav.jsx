import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Button from '../ui/Button';
import { SCHOOL } from '../../data/site';
import { fadeUp, staggerContainer } from '../animation/variants';

/** Full-screen menu for < lg screens. Locks body scroll and closes on Escape. */
export default function MobileNav({ links, onClose }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="on-navy fixed inset-0 z-40 overflow-y-auto bg-navy-deep px-5 pb-10 pt-24 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        {links.map((link) => (
          <motion.li key={link.id} variants={fadeUp} className="border-b border-white/15">
            <a
              href={`#${link.id}`}
              onClick={onClose}
              className="block py-4 font-display text-3xl font-semibold"
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-10 flex flex-col gap-4">
        <Button href={SCHOOL.applyUrl}>Apply now</Button>
        <a href={SCHOOL.helplineHref} className="flex min-h-12 items-center gap-3 text-lg">
          <Phone size={20} aria-hidden="true" />
          Admissions helpline {SCHOOL.helpline}
        </a>
      </div>
    </motion.div>
  );
}
