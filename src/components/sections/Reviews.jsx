import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';
import { FEATURED_PARENT_QUOTE, REVIEWS } from '../../data/site';

export default function Reviews() {
  const scrollerRef = useRef(null);

  const scrollByPage = (direction) => {
    const scroller = scrollerRef.current;
    if (scroller) scroller.scrollBy({ left: direction * scroller.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <Section id="reviews" labelledBy="reviews-title">
      <Reveal>
        <SectionHeading id="reviews-title" title="From the parents" />
      </Reveal>

      <Reveal as="blockquote" className="mt-10 max-w-4xl border-l-4 border-accent pl-6 md:pl-8">
        <p className="font-display text-2xl font-medium leading-snug text-balance md:text-3xl">
          “{FEATURED_PARENT_QUOTE}”
        </p>
      </Reveal>

      <div className="mt-20 flex items-end justify-between gap-4">
        <h3 className="font-display text-3xl font-bold">Google reviews</h3>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous reviews"
            onClick={() => scrollByPage(-1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-line hover:bg-accent hover:text-navy"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next reviews"
            onClick={() => scrollByPage(1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-line hover:bg-accent hover:text-navy"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        ref={scrollerRef}
        tabIndex={0}
        aria-label="Google reviews from parents"
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]"
      >
        {REVIEWS.map((review) => (
          <li
            key={review.name}
            className="flex w-[85%] shrink-0 snap-start flex-col justify-between rounded-2xl border border-line bg-surface p-6 sm:w-[24rem]"
          >
            <p className="leading-relaxed">“{review.text}”</p>
            <div className="mt-6">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-muted">{review.relation}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
