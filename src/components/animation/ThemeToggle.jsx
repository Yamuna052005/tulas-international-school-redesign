import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

/** Switch with a sliding knob; the sun/moon icon rotates and cross-fades. */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={onToggle}
      className="relative flex h-9 w-16 shrink-0 items-center rounded-full border-2 border-current px-0.5"
    >
      <motion.span
        className="grid h-7 w-7 place-items-center rounded-full bg-accent text-navy"
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            className="grid place-items-center"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {isDark ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  );
}
