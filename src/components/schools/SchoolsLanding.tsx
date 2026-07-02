import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AudienceHeader from "../audience/AudienceHeader";
import AudienceFooter from "../audience/AudienceFooter";
import PlansModal from "../audience/PlansModal";
import schoolsHero from "../../assets/schools/hero.jpg";
import trustImage from "../../assets/schools/kids-learning.png";
import SchoolsRegistrationForm from "./SchoolsRegistrationForm";
import logo from "../../assets/schools/hero.jpg";

type VideoCardProps = {
  badge: string;
  title: string;
  description: string;
  source: string;
  kind: "vimeo" | "mp4";
  className?: string;
  accent?: "orange" | "navy";
  autoPlay?: boolean;
};

function VideoCard({
  badge,
  title,
  description,
  source,
  kind,
  className = "",
  accent = "navy",
  autoPlay = false,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);

  const panelClass = accent === "orange" ? "bg-cf-orange" : "bg-cf-navy";

  useEffect(() => {
    if (!autoPlay || kind !== "mp4" || !videoRef.current) return;

    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Browser may block playback until interaction in some cases.
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.45,
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [autoPlay, kind]);

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-[22px] bg-cf-navyInk shadow-[0_18px_40px_-30px_rgba(27,34,44,.42)] ${className}`}
    >
      <div className="relative aspect-video overflow-hidden">
        {isPlaying ? (
          kind === "vimeo" ? (
            <iframe
              src={`${source}?autoplay=1`}
              title={title}
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              src={source}
              muted
              loop
              playsInline
              controls
              preload="metadata"
              className="h-full w-full object-cover"
            />
          )
        ) : (
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#202B3B]">
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:22px_22px]" />

            <span className="absolute left-5 top-5 rounded-full border border-cf-orange/45 bg-cf-orange/15 px-3 py-1 font-display text-[.68rem] font-bold uppercase tracking-[.11em] text-[#FFB27F]">
              {badge}
            </span>

            <button
              type="button"
              aria-label={`Play ${title}`}
              onClick={() => setIsPlaying(true)}
              className="relative grid h-16 w-16 place-items-center rounded-full bg-cf-orange text-white shadow-[0_14px_28px_-12px_rgba(242,104,42,.95)] transition hover:scale-105 hover:bg-cf-orangeDk"
            >
              <span className="ml-1 text-[1.15rem]">▶</span>
            </button>
          </div>
        )}
      </div>

      <div className={`${panelClass} mt-auto px-5 py-4 text-white`}>
        <p className="font-display text-[.95rem] font-bold">{title}</p>

        <p className="mt-1 text-[.76rem] leading-relaxed text-white/70">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function SchoolsLanding() {
  const [isPlansOpen, setIsPlansOpen] = useState(false);
  const [view, setView] = useState<"landing" | "form">("landing");
  const navigate = useNavigate();

  function openPlansModal() {
    setIsPlansOpen(true);
  }

  function showForm() {
    setView("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showLanding() {
    setView("landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // function showAbout() {
  //   setView("about");
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  if (view === "form") {
    return <SchoolsRegistrationForm onBack={showLanding} />;
  }
  // if (view === "about") {
  //   return (
  //     <div className="min-h-screen bg-white font-body text-cf-ink antialiased">
  //       <AboutPage
  //         onLogoClick={showLanding}
  //         onAboutClick={showAbout}
  //         onPlansClick={openPlansModal}
  //         onPartnerClick={showForm}
  //       />

  //       <SiteFooter onRegisterClick={showForm} />

  //       <PlansModal isOpen={isPlansOpen} onClose={closePlansModal} />
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-white font-body text-cf-ink antialiased">
      <AudienceHeader
        audienceLabel="Schools"
        activePage="schools"
        onLogoClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onAboutClick={() => navigate("/")}
        onPlansClick={openPlansModal}
        onPartnerClick={showForm}
      />

      <main>
        <section className="overflow-hidden bg-[#FFFCF8]">
          <div className="mx-auto grid max-w-[1180px] gap-8 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-14">
            <div>
              <p className="inline-flex rounded-full border border-cf-orange/35 bg-[#FFF6EF] px-4 py-2 font-display text-[.74rem] font-bold uppercase tracking-[.13em] text-cf-orange">
                R25 per learner per year · paid quarterly
              </p>

              <h1 className="mt-5 font-display text-[2.35rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-cf-navy sm:text-[2.9rem] lg:text-[3.45rem]">
                Earn money
                <br />
                for your school.
                <span className="mt-2 block text-cf-orange">
                  Empower learners beyond the school gate.
                </span>
              </h1>

              <p className="mt-5 max-w-[58ch] text-[.98rem] leading-[1.7] text-cf-muted">
                As learners walk out of the classroom when the end-of-school
                siren sounds, their formal learning day ends. But nowadays many
                older learners have smartphones — or access to one — and younger
                learners can use a parent&apos;s phone or tablet at home.
              </p>

              <p className="mt-3 max-w-[58ch] text-[.98rem] leading-[1.7] text-cf-muted">
                <strong className="font-bold text-cf-navy">
                  The question is: what do they do with those devices once they
                  get home?
                </strong>
              </p>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={showForm}
                  className="rounded-full bg-cf-orange px-7 py-3.5 font-display text-[.95rem] font-bold text-white shadow-[0_18px_30px_-18px_rgba(242,104,42,.9)] transition hover:-translate-y-0.5 hover:bg-cf-orangeDk"
                >
                  Register My School →
                </button>

                <p className="mt-2.5 text-[.8rem] text-cf-muted">
                  3 minutes · No commitment · Terms &amp; conditions apply
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[28px] shadow-[0_30px_70px_-38px_rgba(27,34,44,.55)]">
                <img
                  src={schoolsHero}
                  alt="Learners walking through the school gate after class"
                  className="aspect-[16/10] w-full object-cover lg:aspect-[8/7]"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 max-w-[235px] rounded-[18px] bg-white p-4 shadow-[0_20px_45px_-28px_rgba(27,34,44,.45)] sm:-left-6">
                <p className="font-display text-[.68rem] font-bold uppercase tracking-[.12em] text-cf-orange">
                  Schools Partner Pack
                </p>

                <p className="mt-2 font-display text-[.95rem] font-extrabold leading-tight text-cf-navy">
                  A practical way to support learners beyond the school gate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <p className="font-display text-[.76rem] font-bold uppercase tracking-[.15em] text-cf-orange">
                  Devices are already in their hands
                </p>

                <h2 className="mt-3 max-w-[620px] font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-cf-navy sm:text-[2.45rem]">
                  The question isn&apos;t if. It&apos;s how.
                </h2>

                <p className="mt-5 max-w-[62ch] text-[.98rem] leading-[1.75] text-cf-muted">
                  South Africa invests billions in education every year — yet
                  81% of Grade 4 learners cannot read for meaning, and weak
                  foundational literacy and numeracy creates a silent crisis
                  where learners progress without mastering basics. At the same
                  time, devices are already in learners&apos; homes. Used well,
                  they become powerful tools for{" "}
                  <strong className="font-bold text-cf-navy">
                    homework, revision, and practice after the school gate.
                  </strong>{" "}
                  Used poorly, they become a distraction.
                </p>

                <p className="mt-5 max-w-[62ch] text-[.98rem] leading-[1.75] text-cf-muted">
                  International research is consistent:{" "}
                  <strong className="font-bold text-cf-navy">
                    focused after-school practice significantly improves learner
                    outcomes
                  </strong>{" "}
                  — particularly in Maths and Reading where repetition and
                  feedback drive mastery. Connect+Funda Mobile is the practical
                  layer that makes this possible at home, at scale, affordably.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <article className="rounded-[20px] border border-cf-line bg-[#FFFCF8] p-6">
                  <p className="font-display text-[1.45rem] font-extrabold text-cf-orange">
                    81%
                  </p>

                  <p className="mt-2 font-display text-[.78rem] font-bold text-cf-navy">
                    Reading crisis
                  </p>

                  <p className="mt-2 text-[.8rem] leading-relaxed text-cf-muted">
                    of Grade 4 learners cannot read for meaning (DBE)
                  </p>
                </article>

                <article className="rounded-[20px] border border-cf-line bg-[#FFFCF8] p-6">
                  <p className="font-display text-[1.45rem] font-extrabold text-cf-orange">
                    Billions
                  </p>

                  <p className="mt-2 font-display text-[.78rem] font-bold text-cf-navy">
                    Education investment
                  </p>

                  <p className="mt-2 text-[.8rem] leading-relaxed text-cf-muted">
                    invested in education yearly — but foundational gaps persist
                  </p>
                </article>

                <article className="rounded-[20px] border border-cf-line bg-[#FFFCF8] p-6">
                  <p className="font-display text-[1.45rem] font-extrabold text-cf-orange">
                    ~4 hrs
                  </p>

                  <p className="mt-2 font-display text-[.78rem] font-bold text-cf-navy">
                    After-school opportunity
                  </p>

                  <p className="mt-2 text-[.8rem] leading-relaxed text-cf-muted">
                    of productive after-school time most evenings
                  </p>
                </article>

                <article className="rounded-[20px] border border-cf-line bg-[#FFFCF8] p-6">
                  <p className="font-display text-[1.45rem] font-extrabold text-cf-orange">
                    Devices
                  </p>

                  <p className="mt-2 font-display text-[.78rem] font-bold text-cf-navy">
                    Already in homes
                  </p>

                  <p className="mt-2 text-[.8rem] leading-relaxed text-cf-muted">
                    ready to be channelled productively
                  </p>
                </article>
              </div>
            </div>

            <div className="mx-auto mt-24 max-w-[1020px] sm:mt-28">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-cf-orange/25" />
                <span className="font-display text-[.68rem] font-bold uppercase tracking-[.16em] text-cf-orange">
                  Beyond the bell
                </span>
                <span className="h-px flex-1 bg-cf-orange/25" />
              </div>

              <div className="relative overflow-hidden rounded-[30px] bg-cf-orange px-6 py-12 text-center text-white shadow-[0_28px_65px_-38px_rgba(242,104,42,.85)] sm:px-10 sm:py-14">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cf-navy/15 blur-3xl" />

                <div className="relative">
                  <p className="font-display text-[.76rem] font-bold uppercase tracking-[.14em] text-white/80">
                    A service beyond the school gate
                  </p>

                  <h3 className="mx-auto mt-3 max-w-[760px] font-display text-[1.7rem] font-extrabold leading-[1.12] sm:text-[2.1rem]">
                    We don&apos;t change what happens inside your school.
                    <br />
                    We extend what happens after it.
                  </h3>

                  <p className="mx-auto mt-5 max-w-[780px] text-[.96rem] leading-[1.7] text-white/90">
                    Connect+Funda Mobile is South Africa&apos;s first MVNO built
                    exclusively for education. We give learners affordable data
                    on their personal SIM, a 24/7 AI tutor (FundaGuide),
                    zero-rated learning apps (Matific, Readability, Mystery
                    Science), and parental controls — all on the Cell C network.
                    Your school stays focused on teaching. We handle the home
                    side.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEOS */}
        <section className="bg-[#F5F7FB] py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="font-display text-[.76rem] font-bold uppercase tracking-[.15em] text-cf-orange">
                Watch the story
              </p>

              <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-cf-navy sm:text-[2.45rem]">
                What partnership and learning
                <br className="hidden sm:block" /> look like
              </h2>

              <p className="mx-auto mt-4 max-w-[650px] text-[.98rem] leading-[1.65] text-cf-muted">
                Five short videos covering the opportunity, the app, and our
                content partners.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 mt-10">
              <VideoCard
                // className="lg:col-span-4"
                badge="Intro video"
                title="Referral Partnership Teaser"
                description="60s · The opportunity in one minute"
                source="https://www.dropbox.com/scl/fi/uk1xi3jyr77o9bxog5q1v/Connect-Draft-6.mp4?rlkey=id0lgt7n3pgut606fdp4j4w87&raw=1"
                kind="mp4"
                accent="orange"
                autoPlay
              />

              <VideoCard
                // className="lg:col-span-2"
                badge="Demo / mockup"
                title="Funda Guide AI"
                description="24/7 CAPS & IEB-aligned AI tutor via app or WhatsApp. Basic tier FREE on all plans."
                source="https://player.vimeo.com/video/1202080167"
                kind="vimeo"
              />

              <VideoCard
                // className="lg:col-span-3"
                badge="Learning partner"
                title="Matific"
                description="Gamified Maths for Grades 4–9"
                source="https://player.vimeo.com/video/1192649823"
                kind="vimeo"
              />

              <VideoCard
                // className="lg:col-span-3"
                badge="Learning partner"
                title="Readability Tutor"
                description="Grade 0–6 Reading"
                source="https://player.vimeo.com/video/667528969"
                kind="vimeo"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#FFFCF8] py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="rounded-[28px] border border-cf-navy/15 bg-white p-6 shadow-[0_22px_55px_-38px_rgba(27,34,44,.35)] sm:p-10">
              <div className="mx-auto max-w-[760px] text-center">
                <p className="font-display text-[.76rem] font-bold uppercase tracking-[.15em] text-cf-orange">
                  What your learners get
                </p>

                <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-cf-navy sm:text-[2.45rem]">
                  Everything they need to stay connected,
                  <br className="hidden sm:block" /> supported and learning
                  beyond the school gate.
                </h2>

                <p className="mt-4 text-[.98rem] leading-[1.65] text-cf-muted">
                  Every Connect+Funda SIM · basic data plans from{" "}
                  <strong className="font-bold text-cf-navy">R75/month</strong>{" "}
                  · learning bundles from{" "}
                  <strong className="font-bold text-cf-navy">R100/month</strong>
                </p>
              </div>

              <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <article className="rounded-[18px] border border-cf-line bg-[#FFFCF8] p-5">
                  <p className="text-xl">📚</p>
                  <h3 className="mt-3 font-display text-[.95rem] font-bold text-cf-navy">
                    Zero-rated Edu Data
                  </h3>
                  <p className="mt-2 text-[.82rem] leading-relaxed text-cf-muted">
                    FundaGuide AI, Matific, Readability, Mystery Science — no
                    data cost to learner
                  </p>
                </article>

                <article className="rounded-[18px] border border-cf-line bg-[#FFFCF8] p-5">
                  <p className="text-xl">🤖</p>
                  <h3 className="mt-3 font-display text-[.95rem] font-bold text-cf-navy">
                    FundaGuide AI Tutor
                  </h3>
                  <p className="mt-2 text-[.82rem] leading-relaxed text-cf-muted">
                    24/7 CAPS &amp; IEB-aligned AI tutor via app or WhatsApp.
                    Basic tier FREE on all plans.
                  </p>
                </article>

                <article className="rounded-[18px] border border-cf-line bg-[#FFFCF8] p-5">
                  <p className="text-xl">🏆</p>
                  <h3 className="mt-3 font-display text-[.95rem] font-bold text-cf-navy">
                    FundaPoints+ Rewards
                  </h3>
                  <p className="mt-2 text-[.82rem] leading-relaxed text-cf-muted">
                    Earn points for studying. Parents set goals and approve
                    payouts via Stitch EFT.
                  </p>
                </article>

                <article className="rounded-[18px] border border-cf-line bg-[#FFFCF8] p-5">
                  <p className="text-xl">🔒</p>
                  <h3 className="mt-3 font-display text-[.95rem] font-bold text-cf-navy">
                    Automatic Parental Controls
                  </h3>
                  <p className="mt-2 text-[.82rem] leading-relaxed text-cf-muted">
                    All learners under 16 automatically protected: blocks adult
                    content, inappropriate websites, screen time limits.
                  </p>
                </article>

                <article className="rounded-[18px] border border-cf-line bg-[#FFFCF8] p-5">
                  <p className="text-xl">🛡️</p>
                  <h3 className="mt-3 font-display text-[.95rem] font-bold text-cf-navy">
                    Optional Advanced SafeZone
                  </h3>
                  <p className="mt-2 text-[.82rem] leading-relaxed text-cf-muted">
                    Parents can purchase enhanced SafeZone controls for even
                    stronger online safety and monitoring.
                  </p>
                </article>

                <article className="rounded-[18px] border border-cf-line bg-[#FFFCF8] p-5">
                  <p className="text-xl">📞</p>
                  <h3 className="mt-3 font-display text-[.95rem] font-bold text-cf-navy">
                    Free Emergency Talk
                  </h3>
                  <p className="mt-2 text-[.82rem] leading-relaxed text-cf-muted">
                    Learners can reach up to 2 pre-registered emergency contacts
                    anytime, even with zero balance.
                  </p>
                </article>

                <article className="rounded-[18px] border border-cf-line bg-[#FFFCF8] p-5 sm:col-span-2 lg:col-span-1">
                  <p className="text-xl">🛒</p>
                  <h3 className="mt-3 font-display text-[.95rem] font-bold text-cf-navy">
                    Extreme Lifestyle
                  </h3>
                  <p className="mt-2 text-[.82rem] leading-relaxed text-cf-muted">
                    R500+/month grocery savings at Shoprite &amp; Checkers -
                    Free for all subscribers for first 3 months
                  </p>
                </article>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setIsPlansOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-cf-navy px-7 py-4 font-display text-[.95rem] font-bold text-white transition hover:-translate-y-0.5 hover:bg-cf-orange"
                >
                  View Full Plan Suite &amp; Pricing →
                </button>

                <p className="mt-3 text-[.78rem] text-cf-orange">
                  ⚠ SIM cards not yet on sale. Public availability from mid-June
                  2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="rounded-[28px] border border-cf-line bg-[#FFFCF8] p-6 shadow-[0_22px_55px_-38px_rgba(27,34,44,.3)] sm:p-10">
              <div className="mx-auto max-w-[760px] text-center">
                <p className="font-display text-[.76rem] font-bold uppercase tracking-[.15em] text-cf-orange">
                  The partnership
                </p>

                <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-cf-navy sm:text-[2.45rem]">
                  Complementary — not competing.
                </h2>

                <p className="mt-4 text-[.98rem] leading-[1.7] text-cf-muted">
                  We do not seek to replace anything your school does. We extend
                  what your school already does — into the productive hours
                  after the bell rings, before bedtime.
                </p>
              </div>

              <div className="mt-9 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
                <article className="rounded-[22px] bg-cf-navy px-7 py-8 text-center text-white">
                  <p className="font-display text-[.74rem] font-bold uppercase tracking-[.13em] text-cf-orange">
                    Your school
                  </p>

                  <h3 className="mt-4 font-display text-[1.15rem] font-bold">
                    In-school environment
                  </h3>

                  <ul className="mt-5 space-y-2 text-[.9rem] leading-relaxed text-white/75">
                    <li>Curriculum &amp; assessments</li>
                    <li>School-hours teaching</li>
                    <li>Smart classrooms</li>
                    <li>Teachers &amp; principals</li>
                  </ul>
                </article>

                <div className="grid place-items-center">
                  <span className="font-display text-[2rem] font-extrabold text-cf-orange">
                    +
                  </span>
                </div>

                <article className="rounded-[22px] bg-cf-orange px-7 py-8 text-center text-white">
                  <p className="font-display text-[.74rem] font-bold uppercase tracking-[.13em] text-white/80">
                    Connect+Funda
                  </p>

                  <h3 className="mt-4 font-display text-[1.15rem] font-bold">
                    Beyond the gate
                  </h3>

                  <ul className="mt-5 space-y-2 text-[.9rem] leading-relaxed text-white/85">
                    <li>Practice &amp; revision</li>
                    <li>After-hours homework</li>
                    <li>Home connectivity</li>
                    <li>Parents &amp; learners</li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFCF8] py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="font-display text-[.76rem] font-bold uppercase tracking-[.15em] text-cf-orange">
                Why your school benefits
              </p>

              <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-cf-navy sm:text-[2.45rem]">
                This isn&apos;t just about commission.
              </h2>

              <p className="mt-4 text-[.98rem] leading-[1.7] text-cf-muted">
                Yes, your school earns quarterly commission. But the deeper
                benefit is mission-aligned: your learners get tools that help
                them succeed.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <article className="flex gap-4 rounded-[20px] border border-cf-line bg-white p-6 shadow-[0_16px_35px_-28px_rgba(27,34,44,.28)]">
                <div className="text-xl">📈</div>

                <div>
                  <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                    Better learner outcomes
                  </h3>

                  <p className="mt-2 text-[.86rem] leading-relaxed text-cf-muted">
                    FundaGuide AI provides 24/7 homework support — reducing the
                    gap between learners with and without home support.
                  </p>
                </div>
              </article>

              <article className="flex gap-4 rounded-[20px] border border-cf-line bg-white p-6 shadow-[0_16px_35px_-28px_rgba(27,34,44,.28)]">
                <div className="text-xl">🎯</div>

                <div>
                  <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                    Reach every parent
                  </h3>

                  <p className="mt-2 text-[.86rem] leading-relaxed text-cf-muted">
                    Co-branded WhatsApp templates and flyers help you
                    communicate with parents about something that helps their
                    kids.
                  </p>
                </div>
              </article>

              <article className="flex gap-4 rounded-[20px] border border-cf-line bg-white p-6 shadow-[0_16px_35px_-28px_rgba(27,34,44,.28)]">
                <div className="text-xl">🌱</div>

                <div>
                  <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                    Digital Equity Fund
                  </h3>

                  <p className="mt-2 text-[.86rem] leading-relaxed text-cf-muted">
                    Optionally ring-fence commission revenue to cross-subsidise
                    connectivity for your most vulnerable learners.
                  </p>
                </div>
              </article>

              <article className="flex gap-4 rounded-[20px] border border-cf-line bg-white p-6 shadow-[0_16px_35px_-28px_rgba(27,34,44,.28)]">
                <div className="text-xl">🤝</div>

                <div>
                  <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                    NPO &amp; CSR pairing
                  </h3>

                  <p className="mt-2 text-[.86rem] leading-relaxed text-cf-muted">
                    We can pair Quintile 1–2 schools with corporate CSR funders
                    so parents pay nothing.
                  </p>
                </div>
              </article>

              <article className="flex gap-4 rounded-[20px] border border-cf-line bg-white p-6 shadow-[0_16px_35px_-28px_rgba(27,34,44,.28)]">
                <div className="text-xl">💼</div>

                <div>
                  <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                    Zero admin burden
                  </h3>

                  <p className="mt-2 text-[.86rem] leading-relaxed text-cf-muted">
                    Customer support, billing, and onboarding are all handled by
                    Connect+Funda. Your staff does nothing.
                  </p>
                </div>
              </article>

              <article className="flex gap-4 rounded-[20px] border border-cf-line bg-white p-6 shadow-[0_16px_35px_-28px_rgba(27,34,44,.28)]">
                <div className="text-xl">💰</div>

                <div>
                  <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                    Quarterly commission
                  </h3>

                  <p className="mt-2 text-[.86rem] leading-relaxed text-cf-muted">
                    R25/learner/year, paid quarterly. PFMA-compliant. No tender
                    required. Cancel anytime.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="rounded-[28px] border border-cf-line bg-[#FFFCF8] p-6 shadow-[0_22px_55px_-38px_rgba(27,34,44,.3)] sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="font-display text-[.76rem] font-bold uppercase tracking-[.15em] text-cf-orange">
                    The commercial side
                  </p>

                  <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-cf-navy sm:text-[2.45rem]">
                    Quarterly commission, calculated.
                  </h2>

                  <p className="mt-5 max-w-[58ch] text-[.98rem] leading-[1.75] text-cf-muted">
                    R25 per learner per year, paid quarterly. Schools pay taxes
                    and commission on a per-learner basis. When you enroll
                    learners, they begin earning commission immediately — you
                    receive payment at the next quarterly deadline (end of
                    March, June, September, or December) based on how many
                    active learners you have.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <article className="rounded-[18px] bg-cf-navy p-5 text-center shadow-[0_16px_35px_-28px_rgba(27,34,44,.5)]">
                    <p className="font-display text-[1.45rem] font-extrabold text-cf-orange">
                      R6,250
                    </p>
                    <p className="mt-2 text-[.82rem] text-white/75">
                      250 learners
                    </p>
                    <p className="mt-3 text-[.76rem] text-white/45">
                      ≈ R1,563/qtr
                    </p>
                  </article>

                  <article className="rounded-[18px] bg-cf-navy p-5 text-center shadow-[0_16px_35px_-28px_rgba(27,34,44,.5)]">
                    <p className="font-display text-[1.45rem] font-extrabold text-cf-orange">
                      R12,500
                    </p>
                    <p className="mt-2 text-[.82rem] text-white/75">
                      500 learners
                    </p>
                    <p className="mt-3 text-[.76rem] text-white/45">
                      ≈ R3,125/qtr
                    </p>
                  </article>

                  <article className="rounded-[18px] bg-cf-navy p-5 text-center shadow-[0_16px_35px_-28px_rgba(27,34,44,.5)]">
                    <p className="font-display text-[1.45rem] font-extrabold text-cf-orange">
                      R18,750
                    </p>
                    <p className="mt-2 text-[.82rem] text-white/75">
                      750 learners
                    </p>
                    <p className="mt-3 text-[.76rem] text-white/45">
                      ≈ R4,688/qtr
                    </p>
                  </article>

                  <article className="rounded-[18px] bg-cf-navy p-5 text-center shadow-[0_16px_35px_-28px_rgba(27,34,44,.5)]">
                    <p className="font-display text-[1.45rem] font-extrabold text-cf-orange">
                      R25,000
                    </p>
                    <p className="mt-2 text-[.82rem] text-white/75">
                      1,000 learners
                    </p>
                    <p className="mt-3 text-[.76rem] text-white/45">
                      ≈ R6,250/qtr
                    </p>
                  </article>
                </div>
              </div>

              <p className="mx-auto mt-8 max-w-[820px] text-center text-[.8rem] leading-relaxed text-cf-muted">
                Commission paid quarterly. No lock-in. PFMA-compliant commission
                arrangement — not a procurement transaction. No SGB resolution
                or tender required. Terms &amp; conditions apply.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="overflow-hidden rounded-[28px] shadow-[0_24px_55px_-35px_rgba(27,34,44,.4)]">
                <img
                  src={trustImage}
                  alt="Learners studying at home with support from a parent"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div>
                <p className="font-display text-[.76rem] font-bold uppercase tracking-[.15em] text-cf-orange">
                  Built by a team you can trust
                </p>

                <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-cf-navy sm:text-[2.45rem]">
                  Built for South African education.
                </h2>

                <p className="mt-5 max-w-[60ch] text-[.98rem] leading-[1.75] text-cf-muted">
                  Connect+Funda Mobile is{" "}
                  <strong className="font-bold text-cf-navy">
                    led by experienced EdTech veterans with deep public-sector
                    relationships
                  </strong>{" "}
                  across South African education. Our network is delivered as an
                  MVNO operating on the{" "}
                  <strong className="font-bold text-cf-navy">
                    Cell C network
                  </strong>{" "}
                  (the Mobile Network Operator providing nationwide coverage),
                  with MVNX infrastructure and technology backing handling the
                  operational and technical layer. We are already in
                  conversation with the Gauteng Department of Education and
                  provincial partners in Ekurhuleni, Sedibeng, Tshwane, and the
                  New Leaders Foundation.
                </p>

                <p className="mt-7 text-[.8rem] text-cf-muted/70">
                  MVNO on Cell C · MVNX-backed operations · Commercial launch
                  mid-June 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white">
          <div className="mx-auto max-w-[1180px] px-6 py-10 sm:py-6">
            <div className="h-px bg-cf-line" />
          </div>
        </div>

        <section className="bg-white pb-0 pt-16 sm:pt-20">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="font-display text-[.76rem] font-bold uppercase tracking-[.15em] text-cf-orange">
                Common Questions
              </p>

              <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-cf-navy sm:text-[2.45rem]">
                Everything your school needs to know.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <article className="rounded-[20px] border border-cf-line bg-[#FFFCF8] p-6">
                <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                  Q: Does this need SGB approval?
                </h3>

                <p className="mt-3 text-[.86rem] leading-relaxed text-cf-muted">
                  No. This is a commission-based arrangement, not a procurement
                  transaction. No tender or SGB resolution required. Fully PFMA
                  compliant.
                </p>
              </article>

              <article className="rounded-[20px] border border-cf-line bg-[#FFFCF8] p-6">
                <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                  Q: What is the school&apos;s workload?
                </h3>

                <p className="mt-3 text-[.86rem] leading-relaxed text-cf-muted">
                  Share our flyers and WhatsApp template once. We supply
                  everything pre-designed. After that — nothing. Commission
                  flows quarterly, automatically.
                </p>
              </article>

              <article className="rounded-[20px] border border-cf-line bg-[#FFFCF8] p-6">
                <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                  Q: What if parents have service issues?
                </h3>

                <p className="mt-3 text-[.86rem] leading-relaxed text-cf-muted">
                  Connect+Funda handles all customer support directly. Your
                  school is a referral partner only — zero support burden on
                  your staff.
                </p>
              </article>

              <article className="rounded-[20px] border border-cf-line bg-[#FFFCF8] p-6">
                <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                  Q: When do commission payments happen?
                </h3>

                <p className="mt-3 text-[.86rem] leading-relaxed text-cf-muted">
                  Commissions are paid quarterly at the end of March, June,
                  September, and December. For example: a school enrolling
                  learners in November will receive their first commission
                  payment at the end of Q1 (March 31st for Q1 earners) by that
                  date. Each payment includes a statement showing learner count
                  and commission earned.
                </p>
              </article>

              <article className="rounded-[20px] border border-cf-line bg-[#FFFCF8] p-6">
                <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                  Q: What if our parents cannot afford it?
                </h3>

                <p className="mt-3 text-[.86rem] leading-relaxed text-cf-muted">
                  Basic data plans start at R75/month. For Quintile 1–2 schools
                  where affordability is a barrier, we can pair you with NPO and
                  CSR funders to cover costs entirely.
                </p>
              </article>

              <article className="rounded-[20px] border border-cf-line bg-[#FFFCF8] p-6">
                <h3 className="font-display text-[1rem] font-bold text-cf-navy">
                  Q: When are SIM cards actually available?
                </h3>

                <p className="mt-3 text-[.86rem] leading-relaxed text-cf-muted">
                  Connect+Funda Mobile SIM cards are not yet on sale to the
                  public — they will become available from mid-June 2026.
                  Registering your school now reserves your school code and
                  ensures you receive priority access and launch communications.
                </p>
              </article>
            </div>
          </div>
        </section>

        <div className="bg-white">
          <div className="mx-auto max-w-[1180px] px-6 py-10 sm:py-20">
            <div className="h-px bg-cf-line" />
          </div>
        </div>

        <section id="register-school" className="bg-white pb-16 pt-0 sm:pb-20">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="rounded-[24px] border-2 border-cf-orange bg-[#FFF9F2] px-6 py-8 sm:px-8">
                <div className="flex gap-4">
                  <div className="pt-1 text-2xl">🚀</div>

                  <div>
                    <p className="font-display text-[.76rem] font-bold uppercase tracking-[.14em] text-cf-orange">
                      Growing fast
                    </p>

                    <h3 className="mt-2 font-display text-[1.2rem] font-extrabold text-cf-navy">
                      Hundreds of schools signing up weekly
                    </h3>

                    <p className="mt-4 text-[.92rem] leading-[1.7] text-cf-muted">
                      Early partners are locking in their school codes now ahead
                      of the mid-June 2026 public launch.{" "}
                      <strong className="font-bold text-cf-navy">
                        Registration is free and takes 3 minutes.
                      </strong>
                    </p>

                    <p className="mt-4 text-[.84rem] text-cf-muted/75">
                      Don&apos;t wait until launch to secure your place.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-[24px] border border-cf-line bg-[#FFFCF8] px-6 py-8 shadow-[0_18px_40px_-30px_rgba(27,34,44,.22)] sm:px-8">
                <div className="flex gap-4">
                  <div className="pt-1 text-2xl">📱</div>

                  <div>
                    <h3 className="font-display text-[1.1rem] font-extrabold text-cf-navy">
                      Also Available: Bulk SMS
                    </h3>

                    <p className="mt-2 text-[.78rem] text-cf-muted/70">
                      Optional add-on · Month-to-month · No contract
                    </p>

                    <p className="mt-4 text-[.92rem] leading-[1.7] text-cf-muted">
                      Reach every parent instantly — no WhatsApp, no app, no
                      data needed on their side. Attendance alerts, exam
                      reminders, emergency notices. Competitive volume rates
                      with a live delivery dashboard.
                    </p>

                    <p className="mt-4 text-[.82rem] text-cf-muted/75">
                      Tick &quot;Bulk SMS&quot; in the registration form and
                      we&apos;ll include pricing in our follow-up call.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="mt-12 rounded-[30px] bg-cf-navy px-6 py-14 text-center shadow-[0_28px_65px_-38px_rgba(27,34,44,.72)] sm:px-10 sm:py-16">
              <img
                src={logo}
                alt="Connect+Funda Mobile"
                className="mx-auto h-12 w-auto brightness-0 invert"
              />

              <h2 className="mt-8 font-display text-[2rem] font-extrabold leading-[1.08] text-white sm:text-[2.45rem]">
                Ready to partner with us?
              </h2>

              <p className="mx-auto mt-4 max-w-[620px] text-[.98rem] leading-[1.7] text-white/65">
                Register your school in 3 minutes. We&apos;ll call within 48
                hours with your unique referral code and a full briefing pack.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={showForm}
                  className="rounded-full bg-cf-orange px-8 py-4 font-display text-[1rem] font-bold text-white shadow-[0_18px_30px_-18px_rgba(242,104,42,.9)] transition hover:-translate-y-0.5 hover:bg-cf-orangeDk"
                >
                  Register My School →
                </button>

                <a
                  href="https://connect-and-funda.vercel.app/CF_School%20Referra%20Partnership%20Explainer.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 font-display text-[.92rem] font-bold text-white transition hover:border-white hover:bg-white/10"
                >
                  Download Schools Partner Pack
                </a>
              </div>

              <p className="mt-4 text-[.8rem] text-white/35">
                No commitment · No upfront cost · Terms &amp; conditions apply
              </p>
            </div>
          </div>
        </section>
      </main>

      <PlansModal isOpen={isPlansOpen} onClose={() => setIsPlansOpen(false)} />
      <AudienceFooter
        onRegisterClick={() => {
          document
            .getElementById("register-school")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
}
