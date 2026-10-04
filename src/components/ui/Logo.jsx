import { useState } from 'react';
import { SCHOOL } from '../../data/site';

/** Official logo on a white plate; falls back to a wordmark if the remote asset fails. */
export default function Logo() {
  const [hasFailed, setHasFailed] = useState(false);

  return (
    <span className="inline-flex items-center gap-3">
      <span className="grid h-11 place-items-center rounded-xl bg-white px-2 shadow-sm md:h-12">
        {hasFailed ? (
          <span className="px-1 font-display text-xl font-bold text-navy">TIS</span>
        ) : (
          <img
            src={SCHOOL.logo}
            alt=""
            height="36"
            className="h-8 w-auto md:h-9"
            onError={() => setHasFailed(true)}
          />
        )}
      </span>
      <span className="hidden font-display text-sm font-semibold leading-tight sm:block">
        Tulas International
        <br />
        School
      </span>
    </span>
  );
}
