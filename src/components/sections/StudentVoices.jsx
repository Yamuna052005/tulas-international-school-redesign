import { Quote } from 'lucide-react';
import Section from '../ui/Section';
import { Stagger, StaggerItem } from '../animation/Reveal';
import { STUDENT_VOICES } from '../../data/site';

export default function StudentVoices() {
  return (
    <Section id="voices" labelledBy="voices-title" className="bg-surface">
      <h2 id="voices-title" className="sr-only">
        What students say about Tulas
      </h2>
      <Stagger className="grid gap-16 lg:grid-cols-2">
        {STUDENT_VOICES.map((voice) => (
          <StaggerItem as="figure" key={voice.quote}>
            <Quote size={40} className="mb-5 text-accent" aria-hidden="true" />
            <blockquote className="font-display text-3xl font-semibold leading-tight text-balance md:text-4xl">
              “{voice.quote}”
            </blockquote>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{voice.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
