import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import ThemeToggle from '../animation/ThemeToggle';
import MobileNav from './MobileNav';
import { useTheme } from '../../hooks/useTheme';
import { useActiveSection } from '../../hooks/useActiveSection';
import { NAV_LINKS, SCHOOL, SECTION_IDS } from '../../data/site';

const DESKTOP_LINKS = NAV_LINKS.filter((link) => link.primary);

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(SECTION_IDS);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (value) => setIsScrolled(value > 24));
  useEffect(() => {
    setIsScrolled(window.scrollY > 24);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const isSolid = isScrolled && !isMenuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isSolid ? 'border-b border-line bg-paper/85 text-ink backdrop-blur-md' : 'text-white'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 lg:px-8">
          <a href="#top" aria-label="Tulas International School, back to top">
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {DESKTOP_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={activeId === link.id ? 'true' : undefined}
                    className="relative block px-3 py-2 text-sm font-medium"
                  >
                    {link.label}
                    {activeId === link.id && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <Button href="#enquire" variant="outline" className="hidden min-h-11 px-5 py-2 text-sm lg:inline-flex">
              Enquire now
            </Button>
            <Button href={SCHOOL.applyUrl} className="hidden min-h-11 px-5 py-2 text-sm lg:inline-flex">
              Apply now
            </Button>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && <MobileNav links={NAV_LINKS} onClose={closeMenu} />}
      </AnimatePresence>
    </>
  );
}
