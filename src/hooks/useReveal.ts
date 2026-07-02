import { useEffect } from 'react';

/**
 * Scroll-reveal hook. Re-runs when `dep` changes (e.g. route path) so that
 * sections on a newly mounted page animate in. Mirrors the engine's reveal.
 * Any element with className "reveal" fades/slides in when scrolled into view.
 */
export function useReveal(dep?: unknown) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}
