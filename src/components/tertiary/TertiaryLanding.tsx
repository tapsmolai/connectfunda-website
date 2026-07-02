import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AudienceConfig } from "../../config/types";
import { contact } from "../../config/brand";
import { Icon, Check, Cross, ArrowLeft } from "../audience/Icon";
import AudienceHeader from "../audience/AudienceHeader";
import AudienceFooter from "../audience/AudienceFooter";
import PlansModal from "../audience/PlansModal";
import { useRegisterStore } from "../../store/registerStore";
import heroImg from "../../assets/tertiary/hero.jpg";

import { tertiaryConfig } from "../../config/tertiary.config";

/* Scroll-reveal — re-runs when step changes so new sections animate in */
function useReveal(step: string) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [step]);
}

export default function TertiaryLanding() {
  const c = tertiaryConfig;
  const [step, setStep] = useState<"landing" | "form">("landing");
  const navigate = useNavigate();

  const [isPlansOpen, setIsPlansOpen] = useState(false);
  const showPlans = () => {
    setIsPlansOpen(true);
  };

  const closePlans = () => {
    setIsPlansOpen(false);
  };
  useReveal(step);

  const showForm = () => {
    setStep("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const showLanding = () => {
    setStep("landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (step === "form") {
    return (
      <div className="font-body text-cf-ink antialiased min-h-screen">
        <AudienceHeader
          audienceLabel="Tertiary"
          activePage="tertiary"
          onLogoClick={showLanding}
          onAboutClick={() => navigate("/")}
          onPlansClick={showPlans}
          onPartnerClick={showForm}
        />

        <div className="mx-auto max-w-[1180px] px-6 pt-6">
          <button
            type="button"
            onClick={showLanding}
            className="inline-flex items-center gap-2 font-display font-bold text-[.9rem] text-cf-navy border border-cf-line rounded-full px-4 py-2 hover:border-cf-orange hover:text-cf-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to overview
          </button>
        </div>

        <RegisterSection config={c} onBack={showLanding} />

        <PlansModal isOpen={isPlansOpen} onClose={closePlans} />

        <AudienceFooter onRegisterClick={showForm} />
      </div>
    );
  }

  return (
    <div className="font-body text-cf-ink antialiased">
      {/* {!embedded && <SimpleNav />} */}
      <AudienceHeader
        audienceLabel="Tertiary"
        activePage="tertiary"
        onPlansClick={showPlans}
        onLogoClick={showLanding}
        onAboutClick={() => navigate("/")}
        onPartnerClick={showForm}
      />

      {/* HERO */}
      <section className="py-8 pb-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-in">
              <span className="inline-flex items-center gap-2 bg-cf-orange/12 text-cf-orangeDk border border-cf-orange/30 px-3.5 py-2 rounded-full font-display font-bold text-[.74rem] tracking-[.12em] uppercase mb-[18px]">
                ★ {c.hero.eyebrow.replace("★ ", "")}
              </span>
              <h1 className="font-display font-extrabold text-cf-navy text-[clamp(2.2rem,4.4vw,3.4rem)] leading-[1.1] tracking-tight mb-4">
                {c.hero.titleLead}
                <span className="text-cf-orange">{c.hero.titleAccent}</span>
              </h1>
              <p className="text-cf-muted text-[1.08rem] max-w-[32rem] mb-7">
                {c.hero.lead}
              </p>
              <div className="flex gap-4 flex-wrap mb-5">
                <button
                  onClick={showForm}
                  className="inline-flex items-center gap-2 bg-cf-orange text-white font-display font-bold text-[.95rem] px-7 py-4 rounded-full shadow-[0_12px_30px_-10px_rgba(242,104,42,.6)] hover:-translate-y-0.5 hover:bg-cf-orangeDk transition-all"
                >
                  {c.hero.primaryCta} →
                </button>
                <a
                  href={c.hero.secondaryHref}
                  className="inline-flex items-center gap-2 bg-white text-cf-navy font-display font-bold text-[.95rem] px-7 py-4 rounded-full border border-cf-line hover:border-cf-orange hover:text-cf-orange transition-colors"
                >
                  {c.hero.secondaryCta}
                </a>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["No obligation", "Custom proposals", "Pilot programmes"].map(
                  (t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 bg-cf-bgSoft border border-cf-line px-3 py-1.5 rounded-full text-[.78rem] font-semibold"
                    >
                      <Check className="w-3.5 h-3.5 text-cf-orange" />
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="relative reveal">
              <img
                src={c.hero.heroImage ?? heroImg}
                alt={
                  c.hero.heroImageAlt ??
                  "South African learners walking and connecting"
                }
                className="w-full rounded-[22px] shadow-[0_30px_70px_-25px_rgba(45,54,69,.45)] object-cover"
                style={{ aspectRatio: "1/1", objectPosition: "center 30%" }}
              />
              {/* white quote overlay card */}
              <div className="absolute left-[-22px] bottom-6 bg-white rounded-[16px] p-5 shadow-[0_18px_50px_-20px_rgba(45,54,69,.28)] max-w-[260px]">
                <div className="font-display font-bold text-cf-navy leading-[1.2]">
                  {c.hero.badgeBig}{" "}
                  <span className="text-cf-orange">{c.hero.badgeSmall}</span>
                </div>
                <small className="block text-cf-muted text-[.74rem] mt-1 font-semibold">
                  {c.hero.floatLabel}
                </small>
              </div>
            </div>
          </div>
        </div>
        <PlansModal isOpen={isPlansOpen} onClose={closePlans} />
      </section>

      {/* PILLARS — dark navy strip */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="overflow-hidden rounded-[26px] bg-cf-navyInk shadow-[0_26px_60px_-32px_rgba(27,34,44,.65)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {c.pillars.map((p, i) => (
                <div
                  key={i}
                  className="flex min-h-[180px] items-center gap-4 p-8 border-b border-white/10 md:border-b-0 md:border-r md:last:border-r-0 border-white/10"
                >
                  <div className="flex-none w-11 h-11 rounded-full border border-cf-orange/50 grid place-items-center text-cf-orange">
                    <Icon name={p.icon} className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-white text-[.98rem] leading-tight">
                      {p.title}
                    </h4>

                    <p className="mt-1.5 text-[#9AA5B5] text-[.84rem] leading-[1.45]">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS — optional, only render if config includes them */}
      {c.stats && (
        <section className="bg-cf-bgSoft border-b border-cf-line py-10">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="text-center mb-4 font-display font-bold text-cf-orange uppercase tracking-[.14em] text-[.74rem]">
              {c.stats.caption}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {c.stats.items.map((s, i) => (
                <div key={i} className="text-center reveal">
                  <div className="font-display font-extrabold text-[2.05rem] text-cf-navy">
                    {s.num}
                    <span className="text-cf-orange">{s.accent}</span>
                  </div>
                  <div className="text-cf-muted text-[.8rem] font-semibold uppercase tracking-wide mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY PARTNER — optional (NPO) */}
      {c.why && (
        <Section id="why">
          <SecHead
            kicker={c.why.kicker}
            heading={c.why.heading}
            intro={c.why.intro}
          />
          <div className="grid md:grid-cols-3 gap-[22px]">
            {c.why.features.map((f, i) => (
              <div
                key={i}
                className="reveal bg-white border border-cf-line rounded-[18px] p-[30px] transition hover:-translate-y-1.5 hover:shadow-cf hover:border-transparent"
              >
                <div className="w-[52px] h-[52px] rounded-[14px] grid place-items-center bg-cf-orange/10 text-cf-orange mb-[18px]">
                  <Icon name={f.icon} className="w-[26px] h-[26px]" />
                </div>
                <h3 className="font-display font-bold text-cf-navy text-[1.18rem] mb-2">
                  {f.title}
                </h3>
                <p className="text-cf-muted text-[.95rem]">{f.body}</p>
                {f.pill && (
                  <span className="inline-block mt-3 bg-cf-orange/10 text-cf-orangeDk text-[.74rem] font-display font-bold px-2.5 py-1.5 rounded-full uppercase tracking-wide">
                    {f.pill}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* VALUE SECTION — Tertiary: flagship feature + 4 value cards (customContent) */}
      {c.valueFeature && c.customContent && (
        <Section id="value">
          <SecHead
            kicker={c.customContent.kicker}
            heading={`${c.customContent.titleLead}${c.customContent.titleAccent}`}
            intro={c.customContent.intro}
          />
          {/* Flagship feature: image + copy + checklist */}
          <div className="reveal grid lg:grid-cols-[1.05fr_.95fr] gap-11 items-center mb-[54px]">
            <div>
              <span className="inline-block bg-cf-orange/10 text-cf-orangeDk text-[.72rem] font-display font-bold px-3.5 py-1.5 rounded-full uppercase tracking-[.08em] mb-3.5">
                {c.valueFeature.tag}
              </span>
              <h3 className="font-display font-extrabold text-cf-navy text-[clamp(1.6rem,3vw,2.1rem)] mb-3">
                {c.valueFeature.titleLead}
                <span className="text-cf-orange">
                  {c.valueFeature.titleAccent}
                </span>
              </h3>
              <p className="text-cf-muted text-base mb-4">
                {c.valueFeature.intro}
              </p>
              <ul className="grid gap-2.5">
                {c.valueFeature.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 items-start font-semibold text-cf-navy text-[.95rem]"
                  >
                    <Check className="w-[18px] h-[18px] flex-none mt-0.5 text-cf-orange" />
                    <span>
                      <strong>{b.lead}</strong> {b.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={c.valueFeature.imageSrc}
                alt={c.valueFeature.imageAlt}
                className="w-full rounded-[18px] shadow-cf block"
              />
            </div>
          </div>
          {/* 4 value cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.customContent.items.map((item, i) => (
              <div
                key={i}
                className="reveal bg-white border border-cf-line rounded-[18px] p-[26px] transition hover:-translate-y-1.5 hover:shadow-cf"
              >
                <div className="w-[50px] h-[50px] rounded-[14px] grid place-items-center bg-cf-orange/12 text-cf-orange mb-4">
                  <Icon name={item.icon} className="w-[25px] h-[25px]" />
                </div>
                <h4 className="font-display font-bold text-cf-navy text-[1.08rem] mb-2">
                  {item.title}
                </h4>
                <p className="text-cf-muted text-[.9rem]">{item.body}</p>
                <span className="inline-block mt-3 bg-cf-navy/[.06] text-cf-navy text-[.72rem] font-display font-bold px-2.5 py-1.5 rounded-full uppercase tracking-wide">
                  {item.sector}
                </span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* CUSTOM CONTENT — NPO sector-bundle style (only when there is NO valueFeature) */}
      {c.customContent && !c.valueFeature && (
        <section
          className="py-[84px]"
          style={{
            background: "linear-gradient(135deg,#FFF7ED 0%,#FFE6D5 100%)",
            borderTop: "1px solid rgba(242,104,42,.15)",
            borderBottom: "1px solid rgba(242,104,42,.15)",
          }}
        >
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="reveal text-center max-w-[42rem] mx-auto mb-[50px]">
              <div className="font-display font-bold text-cf-orange uppercase tracking-[.14em] text-[.78rem] mb-3">
                {c.customContent.kicker}
              </div>
              <h2 className="font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(1.9rem,3.6vw,2.55rem)] text-cf-navy">
                {c.customContent.titleLead}
                <span className="text-cf-orange">
                  {c.customContent.titleAccent}
                </span>
              </h2>
              <p className="mt-3.5 text-[1.05rem] text-cf-muted">
                {c.customContent.intro}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-[22px]">
              {c.customContent.items.map((item, i) => (
                <div
                  key={i}
                  className="reveal bg-white border border-cf-orange/20 rounded-[18px] p-7 transition hover:-translate-y-1 hover:shadow-cf"
                >
                  <div className="w-[54px] h-[54px] rounded-[14px] grid place-items-center bg-cf-navy text-cf-orange mb-[18px]">
                    <Icon name={item.icon} className="w-[26px] h-[26px]" />
                  </div>
                  <div className="text-cf-orange font-display font-bold text-[.78rem] uppercase tracking-[.08em] mb-2">
                    {item.sector}
                  </div>
                  <h4 className="font-display font-bold text-cf-navy text-[1.05rem] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-cf-muted text-[.92rem]">{item.body}</p>
                </div>
              ))}
            </div>
            {c.customContent.foot && (
              <div className="text-center mt-9 font-display font-semibold text-cf-navy text-[1rem]">
                {c.customContent.foot}
              </div>
            )}
          </div>
        </section>
      )}

      {/* PARTNER TRACKS — Tertiary "two ways to partner" fork */}
      {c.partnerTracks && (
        <Section id="tracks" className="bg-cf-bgSoft">
          <SecHead
            kicker={c.partnerTracks.kicker}
            heading={`${c.partnerTracks.titleLead}${c.partnerTracks.titleAccent}`}
            intro={c.partnerTracks.intro}
          />
          <div className="grid md:grid-cols-2 gap-6">
            {c.partnerTracks.tracks.map((t, i) => (
              <div
                key={i}
                className={`reveal relative bg-white rounded-[20px] p-[34px] flex flex-col transition hover:-translate-y-1.5 hover:shadow-cf ${t.primary ? "border border-cf-orange/40 shadow-[0_0_0_1px_rgba(242,104,42,.25)]" : "border border-cf-line"}`}
              >
                {t.badge && (
                  <span className="absolute -top-3 left-[34px] bg-cf-orange text-white font-display font-bold text-[.7rem] tracking-[.06em] uppercase px-3.5 py-1.5 rounded-full">
                    {t.badge}
                  </span>
                )}
                <div className="w-[58px] h-[58px] rounded-[16px] grid place-items-center bg-cf-navy text-cf-orange mb-[18px]">
                  <Icon name={t.icon} className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-cf-navy text-[1.4rem] mb-1.5">
                  {t.title}
                </h3>
                <div className="text-cf-orange font-display font-bold text-[.82rem] uppercase tracking-[.06em] mb-3.5">
                  {t.who}
                </div>
                <p className="text-cf-muted text-[.96rem] mb-[18px]">
                  {t.desc}
                </p>
                <ul className="grid gap-[11px] mb-6">
                  {t.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 items-start text-[.93rem] text-cf-navy font-medium"
                    >
                      <Check className="w-[18px] h-[18px] flex-none mt-0.5 text-cf-orange" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto bg-cf-bgSoft border border-cf-line rounded-[12px] px-4 py-3.5 text-[.86rem] text-cf-navy">
                  {t.note}
                </div>
                <div className="mt-5">
                  {t.ctaStyle === "primary" ? (
                    <button
                      onClick={showForm}
                      className="w-full justify-center inline-flex items-center gap-2 bg-cf-orange text-white font-display font-bold text-[.95rem] px-7 py-4 rounded-full hover:bg-cf-orangeDk transition-colors"
                    >
                      {t.ctaLabel} →
                    </button>
                  ) : (
                    <button
                      onClick={showForm}
                      className="w-full justify-center inline-flex items-center gap-2 bg-white border-[1.5px] border-cf-navy text-cf-navy font-display font-bold text-[.95rem] px-7 py-4 rounded-full hover:bg-cf-navy hover:text-white transition-colors"
                    >
                      {t.ctaLabel} →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* SRC BLOCK — Tertiary repositioned SRC / SATVETSA buy-in */}
      {c.srcBlock && (
        <section
          id="src"
          className="relative overflow-hidden text-white py-[84px]"
          style={{ background: "linear-gradient(135deg,#2D3645,#1B222C)" }}
        >
          <div
            className="absolute -top-[120px] -right-[120px] w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(242,104,42,.16), transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-[1180px] px-6 relative">
            <div className="grid md:grid-cols-2 gap-11 items-center">
              <div className="reveal">
                <div className="font-display font-bold text-[#FFB892] uppercase tracking-[.14em] text-[.78rem] mb-3">
                  {c.srcBlock.kicker}
                </div>
                <h2 className="font-display font-extrabold text-white text-[clamp(1.8rem,3.4vw,2.4rem)] mb-4">
                  {c.srcBlock.titleLead}
                  <span className="text-cf-orange">
                    {c.srcBlock.titleAccent}
                  </span>
                </h2>
                <p className="text-[#C5CDDA] text-[1.02rem] mb-4">
                  {c.srcBlock.intro}
                </p>
                <ul className="grid gap-3">
                  {c.srcBlock.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 items-start text-[#E6EAF1] font-medium text-[.96rem]"
                    >
                      <Check className="w-[18px] h-[18px] flex-none mt-0.5 text-cf-orange" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal bg-white/[.06] border border-white/15 rounded-[20px] p-[30px] backdrop-blur-sm">
                <h4 className="text-white font-display font-bold text-[1.05rem] mb-2 flex items-center gap-2.5">
                  <Icon
                    name="users"
                    className="w-[22px] h-[22px] text-cf-orange"
                  />
                  {c.srcBlock.panelHeading}
                </h4>
                {c.srcBlock.roles.map((r, i) => (
                  <div
                    key={i}
                    className={`py-4 ${i < c.srcBlock!.roles.length - 1 ? "border-b border-white/10" : "pb-0"}`}
                  >
                    <strong className="text-white">{r.name}</strong>
                    <p className="text-[#9AA5B5] text-[.88rem] mt-0.5">
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VIDEOS — optional (NPO) */}
      {c.videos && (
        <Section id="videos" className="bg-cf-bgSoft">
          <SecHead
            kicker={c.videos.kicker}
            heading={c.videos.heading}
            intro={c.videos.intro}
          />
          <div className="grid md:grid-cols-2 gap-[22px]">
            {c.videos.items.map((v, i) => (
              <div
                key={i}
                className="reveal relative rounded-[18px] overflow-hidden cursor-pointer transition hover:-translate-y-1 hover:shadow-cf"
                style={{ aspectRatio: "16/9" }}
                onClick={() => {
                  if (v.src) window.open(v.src, "_blank");
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      v.tagStyle === "primary"
                        ? "linear-gradient(135deg,#2D3645 0%,#1B222C 100%)"
                        : "linear-gradient(135deg,#3a4250 0%,#22303c 100%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-[22px] text-white">
                  <span
                    className={`self-start px-2.5 py-1 rounded-full font-display font-bold text-[.66rem] tracking-[.12em] uppercase border ${v.tagStyle === "primary" ? "bg-cf-orange/20 text-[#FFB892] border-cf-orange/35" : "bg-white/10 text-white border-white/20"}`}
                  >
                    {v.tag}
                  </span>
                  <div>
                    <div className="font-display font-bold text-white text-[1.05rem] leading-tight">
                      {v.title}
                    </div>
                    <small className="block text-[#9AA5B5] font-medium text-[.82rem] mt-1">
                      {v.sub}
                    </small>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-cf-orange/90 grid place-items-center shadow-[0_12px_30px_-8px_rgba(242,104,42,.5)] transition hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          {c.videos.placeholderNote && (
            <p className="text-center mt-4 text-[.82rem] text-cf-muted italic">
              {c.videos.placeholderNote}
            </p>
          )}
        </Section>
      )}

      {/* HOW IT WORKS */}
      <Section id="how">
        <SecHead
          kicker={c.how.kicker}
          heading={c.how.heading}
          intro={c.how.intro}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {c.how.steps.map((s, i) => (
            <div
              key={i}
              className="reveal relative bg-white border border-cf-line rounded-[18px] p-7"
            >
              <div className="w-11 h-11 rounded-[12px] bg-cf-navy text-white font-display font-extrabold grid place-items-center mb-4">
                {i + 1}
              </div>
              <div className="text-cf-orange mb-2.5">
                <Icon name={s.icon} className="w-[26px] h-[26px]" />
              </div>
              <h4 className="font-display font-bold text-cf-navy text-[1.08rem] mb-1.5">
                {s.title}
              </h4>
              <p className="text-cf-muted text-[.9rem]">{s.body}</p>
              {i < c.how.steps.length - 1 && (
                <span className="hidden lg:block absolute right-[-17px] top-[46px] text-cf-orange text-[1.4rem] font-bold z-10">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-[34px] font-display font-bold text-cf-navy text-[1.05rem]">
          {c.how.foot}
        </div>
      </Section>

      {/* SRC SPOTLIGHT — optional */}
      {c.srcSpotlight && (
        <section
          id="src"
          className="relative overflow-hidden text-white py-[78px]"
          style={{
            background: "linear-gradient(135deg,#2D3645 0%,#1B222C 100%)",
          }}
        >
          <div
            className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(242,104,42,.18) 0%, transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-[1180px] px-6 relative">
            <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
              <div className="reveal">
                <span className="inline-flex items-center gap-2 bg-cf-orange/20 text-[#FFB892] border border-cf-orange/40 px-3.5 py-1.5 rounded-full font-display font-bold text-[.72rem] tracking-[.12em] uppercase">
                  {c.srcSpotlight.tag}
                </span>
                <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,3.6vw,2.5rem)] mt-4 mb-3.5 leading-[1.1]">
                  {c.srcSpotlight.titleLead}
                  <span className="text-cf-orange">
                    {c.srcSpotlight.titleAccent}
                  </span>
                </h2>
                <p className="text-[#C5CDDA] text-[1.05rem] max-w-[32rem] mb-6">
                  {c.srcSpotlight.lead}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-7">
                  {c.srcSpotlight.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-[14px] p-4 backdrop-blur-sm"
                    >
                      <h4 className="text-white font-display font-bold text-[.92rem] mb-1 flex items-center gap-2">
                        <Check className="text-cf-orange" /> {b.title}
                      </h4>
                      <p className="text-[#9AA5B5] text-[.84rem] leading-[1.5]">
                        {b.body}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href={c.srcSpotlight.ctaPrimary.href}
                  className="inline-flex items-center gap-2 bg-cf-orange text-white font-display font-bold px-7 py-4 rounded-full hover:bg-cf-orangeDk transition-colors"
                >
                  {c.srcSpotlight.ctaPrimary.label} →
                </a>
              </div>
              <div className="reveal bg-white/5 border border-white/12 rounded-[20px] p-8 backdrop-blur-md">
                <div className="font-display font-extrabold text-cf-orange text-[3.4rem] leading-none">
                  {c.srcSpotlight.bigStat}
                </div>
                <div className="text-white font-display font-bold text-[1.05rem] mt-1.5">
                  {c.srcSpotlight.bigStatSub}
                </div>
                <hr className="border-0 border-t border-white/10 my-5" />
                <ul className="list-none grid gap-3">
                  {c.srcSpotlight.bullets.map((bl, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 items-start text-[#E6EAF1] text-[.94rem] font-medium"
                    >
                      <Check className="text-cf-orange flex-none mt-0.5" /> {bl}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href={c.srcSpotlight.ctaSecondary.href}
                    className="inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                  >
                    {c.srcSpotlight.ctaSecondary.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MODELS — optional (NPO) */}
      {c.models && (
        <Section id="models" className="bg-cf-navyDeep text-white">
          <SecHead
            kicker={c.models.kicker}
            heading={c.models.heading}
            intro={c.models.intro}
            dark
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.models.tiers.map((t, i) => (
              <div
                key={i}
                className="reveal relative bg-gradient-to-b from-[#333D4D] to-[#2A323F] border border-[#3C4555] rounded-[18px] p-[26px] overflow-hidden transition hover:-translate-y-1.5 hover:border-cf-orange"
              >
                <span className="absolute top-0 right-0 bg-cf-orange text-white font-display font-bold text-[.72rem] px-3.5 py-1.5 rounded-bl-[12px]">
                  {t.tag}
                </span>
                <h3 className="font-display font-bold text-white text-[1.16rem] mt-1.5 mb-3">
                  {t.title}
                </h3>
                <p className="text-[#AEB8C7] text-[.9rem] min-h-[84px]">
                  {t.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-[#3C4555] font-display font-extrabold text-cf-orange text-[1.05rem]">
                  {t.price}
                  <small className="block text-[#8E99A9] font-semibold text-[.76rem] mt-1 font-body">
                    {t.sub}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* PLANS — simplified Schools-style */}
      <Section id="plans" className="bg-cf-bgSoft">
        <SecHead
          kicker={c.plans.kicker}
          heading={c.plans.heading}
          intro={c.plans.intro}
        />
        {c.plans.pills && c.plans.subHeading ? (
          /* Full plans block (Tertiary style) */
          <div className="reveal relative bg-white border border-cf-line rounded-[22px] p-8 lg:p-[44px] shadow-cf overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-[5px]"
              style={{ background: "linear-gradient(90deg,#F2682A,#2D3645)" }}
            />
            <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-center">
              <div>
                <h3 className="font-display font-bold text-cf-navy text-[1.75rem] leading-tight">
                  {c.plans.subHeading}
                </h3>
                <p className="text-cf-muted mt-2.5 text-[1.02rem]">
                  {c.plans.subIntro}
                </p>
                <div className="flex gap-2.5 flex-wrap mt-[22px]">
                  {c.plans.pills.map((p, i) => (
                    <span
                      key={i}
                      className="bg-cf-bgSoft border border-cf-line px-[14px] py-2 rounded-full font-display font-bold text-[.82rem] text-cf-navy inline-flex items-center gap-1.5"
                    >
                      {p.group && <>{p.group}&nbsp;</>}
                      <em className="text-cf-orange not-italic">{p.name}</em>
                    </span>
                  ))}
                </div>
                <div className="mt-6 bg-[#FFF7ED] border border-[#FCD9B6] rounded-[14px] px-[18px] py-4 text-[.86rem] text-cf-navy leading-[1.5]">
                  {c.plans.disclaimer}
                </div>
              </div>
              <div className="text-center">
                <SimVisual />
                <button
                  type="button"
                  onClick={showPlans}
                  className="inline-flex items-center gap-2 bg-cf-navy text-white font-display font-bold text-[.95rem] px-7 py-4 rounded-full transition hover:bg-cf-orange hover:-translate-y-0.5"
                >
                  {c.plans.catalogueLabel} →
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Simplified plans (NPO style) — just visual + CTA + disclaimer */
          <div className="reveal relative bg-white border border-cf-line rounded-[22px] p-[44px] shadow-cf overflow-hidden text-center max-w-[760px] mx-auto">
            <div
              className="absolute top-0 left-0 right-0 h-[5px]"
              style={{ background: "linear-gradient(90deg,#F2682A,#2D3645)" }}
            />
            <SimVisual />
            <button
              type="button"
              onClick={showPlans}
              className="inline-flex items-center gap-2 bg-cf-navy text-white font-display font-bold text-[.95rem] px-7 py-4 rounded-full transition hover:bg-cf-orange hover:-translate-y-0.5"
            >
              {c.plans.catalogueLabel} →
            </button>
            {/* <a
              href={c.plans.catalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cf-navy text-white font-display font-bold text-[.95rem] px-7 py-4 rounded-full transition hover:bg-cf-orange hover:-translate-y-0.5 mt-2"
            >
              {c.plans.catalogueLabel} →
            </a> */}
            <p className="text-cf-muted text-[.82rem] mt-3">
              Opens the Connect+Funda plans page in a new tab
            </p>
            <div className="mt-7 bg-[#FFF7ED] border border-[#FCD9B6] rounded-[14px] px-[18px] py-4 text-[.86rem] text-cf-navy leading-[1.55] text-left">
              {c.plans.disclaimer}
            </div>
          </div>
        )}
      </Section>

      {/* QUOTE — optional (NPO) */}
      {c.quote && (
        <section
          className="py-[88px] text-white text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg,#2D3645,#1B222C)" }}
        >
          <div className="absolute left-1/2 top-1.5 -translate-x-1/2 font-display text-[11rem] leading-none text-cf-orange/15 select-none">
            "
          </div>
          <div className="mx-auto max-w-[1180px] px-6">
            <blockquote className="relative font-display font-bold text-[clamp(1.5rem,3.4vw,2.3rem)] leading-[1.25] max-w-[46rem] mx-auto">
              {c.quote.text}
            </blockquote>
            <div className="mt-5 text-[#9AA5B5] font-semibold text-[.9rem] tracking-wide">
              {c.quote.by}
            </div>
          </div>
        </section>
      )}

      {/* WHO CAN PARTNER — optional (NPO) */}
      {c.who && (
        <Section id="who">
          <SecHead kicker={c.who.kicker} heading={c.who.heading} />
          <div className="grid md:grid-cols-3 gap-[22px]">
            {c.who.items.map((w, i) => (
              <div
                key={i}
                className="reveal bg-white border border-cf-line rounded-[18px] p-[30px] transition hover:-translate-y-1.5 hover:shadow-cf"
              >
                <div className="w-[54px] h-[54px] rounded-full border border-cf-orange/40 grid place-items-center text-cf-orange mb-4">
                  <Icon name={w.icon} className="w-[26px] h-[26px]" />
                </div>
                <h3 className="font-display font-bold text-cf-navy text-[1.16rem] mb-2">
                  {w.title}
                </h3>
                <p className="text-cf-muted text-[.94rem]">{w.body}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* COMPARE */}
      <Section id="compare">
        <SecHead kicker={c.compare.kicker} heading={c.compare.heading} />
        <div className="reveal overflow-hidden border border-cf-line rounded-[18px] shadow-cf">
          <table className="w-full border-collapse text-[.95rem]">
            <thead>
              <tr>
                {["Feature", "Connect+Funda", "Generic Providers"].map(
                  (h, i) => (
                    <th
                      key={i}
                      className={`text-left px-6 py-[18px] font-display font-bold text-white bg-cf-navy ${i === 0 ? "w-[42%]" : ""}`}
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {c.compare.rows.map((r, i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cf-bgSoft" : ""}>
                  <td className="px-6 py-[15px] font-semibold text-cf-navy border-t border-cf-line">
                    {r.feature}
                  </td>
                  <td className="px-6 py-[15px] border-t border-cf-line bg-cf-orange/5">
                    <span className="inline-flex items-center gap-2 font-bold text-green-700">
                      <Check className="w-4 h-4" />
                      {r.cf}
                    </span>
                  </td>
                  <td className="px-6 py-[15px] border-t border-cf-line">
                    <span className="inline-flex items-center gap-2 text-cf-muted">
                      <Cross />
                      {r.generic}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* IMPACT */}
      <Section>
        <div
          className="reveal rounded-[24px] p-[54px] grid md:grid-cols-[1.2fr_.8fr] gap-10 items-center text-white"
          style={{
            background:
              "linear-gradient(120deg,rgba(45,54,69,.94),rgba(34,42,54,.86))",
          }}
        >
          <div>
            <h2 className="font-display font-extrabold text-white text-[2rem] leading-tight">
              {c.impact.heading}
            </h2>
            <p className="text-[#D2D9E4] mt-3.5">{c.impact.intro}</p>
            <ul className="list-none mt-5 grid gap-3">
              {c.impact.checks.map((ck, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 items-start text-[#E6EAF1] font-medium"
                >
                  <Check className="w-5 h-5 flex-none mt-0.5 text-cf-orange" />
                  {ck}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/8 border border-white/15 rounded-[18px] p-7 backdrop-blur">
            {c.impact.panel.map((row, i) => (
              <div
                key={i}
                className="flex justify-between py-3 border-b border-white/10 last:border-b-0 text-[.92rem]"
              >
                <span>{row.k}</span>
                <b className="font-display text-white">{row.v}</b>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA BAND — triggers form view */}
      {c.ctaBand && (
        <section
          className="py-16 text-white text-center"
          style={{ background: "linear-gradient(135deg,#F2682A,#D9531A)" }}
        >
          <div className="mx-auto max-w-[1180px] px-6">
            <h2 className="font-display font-extrabold text-white text-[clamp(1.7rem,3.4vw,2.3rem)] mb-3.5">
              {c.ctaBand.heading}
            </h2>
            <p className="text-white/90 mb-6 text-[1.05rem]">
              {c.ctaBand.body}
            </p>
            <button
              onClick={showForm}
              className="inline-flex items-center gap-2 bg-white text-cf-orangeDk font-display font-bold text-[.95rem] px-7 py-4 rounded-full hover:bg-cf-navy hover:text-white transition-all"
            >
              {c.ctaBand.cta} →
            </button>
          </div>
        </section>
      )}

      {/* CLOSING DUAL — two side-by-side image cards */}
      {c.closingDual && (
        <section className="py-[84px] bg-cf-navyDeep">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="reveal text-center mb-9">
              <div className="font-display font-bold text-[#FFB892] uppercase tracking-[.14em] text-[.78rem] mb-3">
                {c.closingDual.kicker}
              </div>
              <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,3.6vw,2.55rem)]">
                {c.closingDual.heading}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {c.closingDual.cards.map((card, i) => (
                <div
                  key={i}
                  className="reveal flex flex-col rounded-[20px] overflow-hidden bg-cf-navyInk border border-white/8"
                  style={{ boxShadow: "0 24px 60px -30px rgba(0,0,0,.6)" }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "16/10" }}
                  >
                    <img
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      className="w-full h-full object-cover block"
                    />
                    <span
                      className="absolute top-[18px] left-[18px] text-[#FFB892] border border-cf-orange/50 px-3.5 py-1.5 rounded-full font-display font-bold text-[.7rem] uppercase tracking-[.12em] backdrop-blur-sm"
                      style={{ background: "rgba(27,34,44,.82)" }}
                    >
                      {card.tag}
                    </span>
                  </div>
                  <div className="px-7 pt-[26px] pb-[30px]">
                    <h3 className="font-display font-extrabold text-white text-[clamp(1.3rem,2.4vw,1.7rem)] leading-[1.18]">
                      {card.titleLead}
                      <span className="text-cf-orange">{card.titleAccent}</span>
                    </h3>
                    <p className="text-[#AEB8C7] mt-2.5 text-[.94rem] leading-[1.55]">
                      {card.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-9 font-display font-semibold text-[#AEB8C7] text-[.95rem]">
              {c.closingDual.foot}
            </div>
          </div>
        </section>
      )}

      {/* SINGLE CLOSING BANNER — used when closingDual is absent */}
      {c.closingBanner && !c.closingDual && (
        <section className="p-0 bg-cf-navyDeep">
          <div className="relative reveal">
            <img
              src={c.closingBanner.imageSrc}
              alt={c.closingBanner.imageAlt}
              className="w-full block max-h-[420px] object-cover"
              style={{ objectPosition: "center 30%" }}
            />
            <div
              className="absolute inset-0 flex items-center px-8 lg:px-[60px] text-white"
              style={{
                background:
                  "linear-gradient(90deg,rgba(27,34,44,.78) 0%,rgba(27,34,44,.55) 40%,transparent 70%)",
              }}
            >
              <div className="max-w-[32rem]">
                <h3 className="font-display font-extrabold text-white text-[clamp(1.6rem,3vw,2.3rem)] leading-tight">
                  {c.closingBanner.titleLead}
                  <span className="text-cf-orange">
                    {c.closingBanner.titleAccent}
                  </span>
                </h3>
                <p className="text-[#D2D9E4] mt-2.5 text-base max-w-[24rem]">
                  {c.closingBanner.body}
                </p>
                <div className="mt-4 font-display font-bold text-cf-orange uppercase tracking-[.14em] text-[.76rem]">
                  {c.closingBanner.eyebrow}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <AudienceFooter onRegisterClick={showForm} />
    </div>
  );
}

/* ---- SIM visual ---- */
function SimVisual() {
  return (
    <div
      className="w-[140px] h-[140px] mx-auto mb-5 rounded-full grid place-items-center border-2 border-dashed border-cf-orange/35"
      style={{
        background:
          "radial-gradient(circle at 30% 30%,rgba(242,104,42,.16),transparent 60%),#F6F8FB",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 text-cf-orange"
      >
        <path d="M9 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z" />
        <path d="m9 3-3 3" />
        <rect x="9" y="11" width="6" height="6" rx="1" />
        <path d="M11 11v6M13 11v6" />
      </svg>
    </div>
  );
}

/* ---- Register form ---- */
function RegisterSection({
  config: c,
}: {
  config: AudienceConfig;
  onBack?: () => void;
}) {
  const { values, submitted, setField, submit } = useRegisterStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    c.register.fields.forEach((field) => {
      const value = values[field.name]?.trim();

      if (field.required && !value) {
        nextErrors[field.name] = `${field.label} is required`;
      }

      if (field.type === "email" && value) {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        if (!isValidEmail) {
          nextErrors[field.name] = "Please enter a valid email address";
        }
      }
    });

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const scriptUrl = import.meta.env.VITE_TERTIARY_FORM_ENDPOINT;

      if (!scriptUrl) {
        throw new Error("Google Script URL is missing.");
      }

      const response = await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Submission failed.");
      }

      submit();
    } catch (error) {
      console.error(error);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-[60px] pb-[90px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid md:grid-cols-[.9fr_1.1fr] gap-12 items-start">
          <div>
            <div className="font-display font-bold text-cf-orange uppercase tracking-[.14em] text-[.78rem] mb-3">
              {c.register.kicker}
            </div>
            <h1 className="font-display font-extrabold text-cf-navy text-[clamp(2rem,3.6vw,2.6rem)] leading-tight mb-3.5">
              {c.register.heading}
            </h1>
            <p className="text-cf-muted">{c.register.intro}</p>
            <div className="mt-7 grid gap-3.5">
              <a
                href={`mailto:${contact.email}`}
                className="flex gap-2.5 items-center text-cf-ink font-semibold hover:text-cf-orange transition-colors"
              >
                <span className="text-cf-orange">✉</span>
                {contact.email}
              </a>
              <a
                href={contact.phoneHref}
                className="flex gap-2.5 items-center text-cf-ink font-semibold hover:text-cf-orange transition-colors"
              >
                <span className="text-cf-orange">📞</span>
                {contact.phone}
              </a>
              <a
                href={contact.webHref}
                target="_blank"
                className="flex gap-2.5 items-center text-cf-ink font-semibold hover:text-cf-orange transition-colors"
              >
                <span className="text-cf-orange">🌐</span>
                {contact.web}
              </a>
              <span className="flex gap-2.5 items-start text-cf-muted font-medium">
                <span className="text-cf-orange mt-0.5">📍</span>
                {contact.address}
              </span>
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="bg-white border border-cf-line rounded-[20px] p-[34px] shadow-cf"
          >
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl font-semibold">
                {c.register.successMsg}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[14px] gap-y-[18px]">
                  {c.register.fields.map((f, idx) => {
                    const hasError = Boolean(errors[f.name]);

                    const inputClass = `w-full px-4 py-3.5 border-[1.5px] border-cf-line rounded-[12px] font-body text-[.95rem] text-cf-ink bg-white focus:outline-none focus:border-cf-orange focus:shadow-[0_0_0_4px_rgba(242,104,42,.12)] transition-all ${
                      hasError
                        ? "border-red-400 focus:border-red-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,.12)]"
                        : "border-cf-line focus:border-cf-orange focus:shadow-[0_0_0_4px_rgba(242,104,42,.12)]"
                    }`;
                    const inner =
                      f.type === "select" ? (
                        <select
                          name={f.name}
                          className={inputClass}
                          value={values[f.name] ?? ""}
                          onChange={(e) => {
                            setField(f.name, e.target.value);
                            setErrors((current) => ({
                              ...current,
                              [f.name]: "",
                            }));
                          }}
                        >
                          <option value="">Select…</option>
                          {(f.options ?? []).map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      ) : f.type === "textarea" ? (
                        <textarea
                          name={f.name}
                          rows={3}
                          placeholder={f.placeholder}
                          className={inputClass}
                          value={values[f.name] ?? ""}
                          onChange={(e) => {
                            setField(f.name, e.target.value);
                            setErrors((current) => ({
                              ...current,
                              [f.name]: "",
                            }));
                          }}
                        />
                      ) : (
                        <input
                          type={f.type ?? "text"}
                          name={f.name}
                          placeholder={f.placeholder}
                          className={inputClass}
                          value={values[f.name] ?? ""}
                          onChange={(e) => {
                            setField(f.name, e.target.value);
                            setErrors((current) => ({
                              ...current,
                              [f.name]: "",
                            }));
                          }}
                        />
                      );
                    return (
                      <div
                        key={idx}
                        className={f.half ? "sm:col-span-1" : "sm:col-span-2"}
                      >
                        <label className="block font-semibold text-[.86rem] text-cf-navy mb-1.5">
                          {f.label}
                          {f.required && " *"}
                        </label>

                        {inner}

                        {errors[f.name] && (
                          <p className="mt-1.5 text-sm text-red-600 font-medium">
                            {errors[f.name]}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
                {submitError && (
                  <div className="mb-4 bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-sm font-semibold">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-1 bg-cf-orange text-white font-display font-bold text-[.95rem] py-4 rounded-full hover:bg-cf-orangeDk transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Register Interest →"}
                </button>
                <p className="text-center text-cf-muted text-[.78rem] mt-3">
                  We will only use your details to discuss a potential
                  partnership. POPIA-compliant.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---- small shared helpers ---- */
function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-[88px] ${className}`}>
      <div className="mx-auto max-w-[1180px] px-6">{children}</div>
    </section>
  );
}
function SecHead({
  kicker,
  heading,
  intro,
  dark,
}: {
  kicker: string;
  heading: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <div className="reveal text-center max-w-[42rem] mx-auto mb-[50px]">
      <div className="font-display font-bold text-cf-orange uppercase tracking-[.14em] text-[.78rem] mb-3">
        {kicker}
      </div>
      <h2
        className={`font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(1.9rem,3.6vw,2.55rem)] ${dark ? "text-white" : "text-cf-navy"}`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`mt-3.5 text-[1.05rem] ${dark ? "text-[#AEB8C7]" : "text-cf-muted"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
