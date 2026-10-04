const REPEATS = 6;

/** Brand tagline ticker. Two identical groups let the -50% keyframe loop seamlessly. */
export default function Marquee() {
  return (
    <section aria-label="Let's do it with Tulas" className="overflow-hidden bg-accent py-5 text-navy">
      <p className="sr-only">Let’s do it with Tulas</p>
      <div className="flex w-max animate-marquee motion-reduce:animate-none" aria-hidden="true">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 gap-12 pr-12">
            {Array.from({ length: REPEATS }, (_, index) => (
              <span
                key={index}
                className="whitespace-nowrap font-display text-3xl font-bold md:text-5xl"
              >
                Let’s do it <span className="font-medium">with Tulas</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
