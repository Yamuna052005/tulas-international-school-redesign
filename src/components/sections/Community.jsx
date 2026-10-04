import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';
import { fadeUp, staggerContainer } from '../animation/variants';
import { PEOPLE, PEOPLE_TABS } from '../../data/site';

const HONORIFICS = new Set(['Shri', 'Dr', 'Ji', 'Ms', 'Late', '&']);

function getInitials(name) {
  return name
    .split(' ')
    .filter((word) => !HONORIFICS.has(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join('');
}

export default function Community() {
  const [activeTab, setActiveTab] = useState(PEOPLE_TABS[0].id);

  return (
    <Section id="community" labelledBy="community-title" className="bg-surface">
      <Reveal>
        <SectionHeading id="community-title" title="Influential personalities on campus">
          Champions, creators and public leaders who have visited and inspired our students.
        </SectionHeading>
      </Reveal>

      <div role="tablist" aria-label="Influential personalities" className="mt-10 flex flex-wrap gap-2">
        {PEOPLE_TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls="people-panel"
              onClick={() => setActiveTab(tab.id)}
              className="relative min-h-11 rounded-full border border-line px-5 py-2 text-sm font-semibold"
            >
              {isActive && (
                <motion.span
                  layoutId="community-tab"
                  className="absolute inset-0 rounded-full bg-navy"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span className={`relative ${isActive ? 'text-white' : ''}`}>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id="people-panel" aria-labelledby={`tab-${activeTab}`}>
        <AnimatePresence mode="wait">
          <motion.ul
            key={activeTab}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PEOPLE[activeTab].map((person) => (
              <motion.li key={person.name} variants={fadeUp} className="flex gap-4 border-t border-line pt-5">
                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy font-display text-lg font-bold text-accent"
                >
                  {getInitials(person.name)}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug">{person.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{person.about}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </Section>
  );
}
