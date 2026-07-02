import { Link } from 'react-router-dom';

/**
 * LANDING SLOT — placeholder.
 *
 * This marks where a finished landing page plugs into the shell. Your devs
 * replace <LandingSlot .../> in App.tsx with the real page, e.g.:
 *
 *   // if the page is built on the shared LandingPage engine + a config:
 *   <LandingPage config={schoolsConfig} embedded />
 *
 *   // or if it's a self-contained component:
 *   <SchoolsLanding />
 *
 * `embedded` (on the engine) hides the landing page's own mini logo-header,
 * because the global <SiteHeader> already provides navigation. A self-contained
 * page should likewise NOT render its own top nav once mounted here.
 */
export default function LandingSlot({ title, blurb }: { title: string; blurb: string }) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-cf-bgSoft px-6 py-24">
      <div className="max-w-[560px] text-center">
        <div className="inline-block font-display font-bold text-[.7rem] tracking-[.16em] uppercase text-cf-orange bg-cf-orange/10 border border-cf-orange/30 px-3 py-1.5 rounded-full">
          Landing page slot
        </div>
        <h1 className="font-display font-extrabold text-cf-navy text-[clamp(1.6rem,3.4vw,2.2rem)] mt-5">{title}</h1>
        <p className="mt-3 text-cf-muted">{blurb}</p>
        <p className="mt-6 text-[.85rem] text-cf-muted">
          Developers: mount the finished page here in <code className="font-mono text-cf-navy">src/App.tsx</code>.
          The global header and footer wrap it automatically, so visitors can always reach Home, About and Plans.
        </p>
        <Link to="/" className="btn-primary mt-7 inline-flex">← Back to Home</Link>
      </div>
    </section>
  );
}
