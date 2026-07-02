import { Link } from "react-router-dom";
import { Icon, Check } from "../components/Icon";
import SiteFooter from "../components/site/SiteFooter";
import { useReveal } from "../hooks/useReveal";
import heroImg from "../assets/corp-hero.jpg";
import schoolsImg from "../assets/corp-schools.jpg";
import csrImg from "../assets/corp-csr.jpg";
import tertiaryImg from "../assets/corp-tertiary.jpg";
import studentsImg from "../assets/corp-students.jpg";

const PLANS_URL = "https://connect-and-funda.vercel.app/#plans";

const paths = [
  {
    to: "/schools",
    external: false,
    img: schoolsImg,
    tag: "Schools",
    title: "Schools & principals",
    body: "A referral partnership that puts affordable data, safe content and learning tools in your learners' hands — at no cost to the school.",
    link: "School partnerships",
  },
  {
    to: "/csr",
    external: false,
    img: csrImg,
    tag: "CSR & NPOs",
    title: "CSR & foundations",
    body: "Turn CSR and B-BBEE spend into measurable learner impact — sponsor SIMs, data and content for the communities you serve.",
    link: "CSR & NPO partnerships",
  },
  {
    to: "/tertiary",
    external: false,
    img: tertiaryImg,
    tag: "Tertiary & TVET",
    title: "Tertiary, TVET & SRCs",
    body: "Employability, retention and off-campus data — Connect+Work, FundaGuide and rewards, riding on top of the SIM.",
    link: "Tertiary partnerships",
  },
  {
    to: PLANS_URL,
    external: true,
    img: studentsImg,
    tag: "Students & parents",
    title: "Students & parents",
    body: "Pick a plan, learn for less, and earn Points+ Rewards as you go — with parental visibility and safety built in.",
    link: "See plans & SIMs",
  },
];

const pillars = [
  {
    icon: "signal",
    title: "Affordable data",
    body: "Bundled SIMs with curated learning content zero-rated, on the Cell C network.",
  },
  {
    icon: "book",
    title: "Learning content",
    body: "Matific, Readability and FundaGuide AI tutor — in one unified app.",
  },
  {
    icon: "shield",
    title: "SafeZone",
    body: "Parental visibility, content filters and screen-time controls for younger learners.",
  },
  {
    icon: "trophy",
    title: "Points+ Rewards",
    body: "Earn for learning activity; redeem for data, devices and lifestyle perks.",
  },
  {
    icon: "gift",
    title: "Extreme Lifestyle",
    body: "Student discounts and rewards across a wide network of retail partners.",
  },
] as const;

const founders = [
  { i: "NM", n: "Ndaba Moyo", r: "Co-founder & CEO", o: true },
  { i: "GM", n: "Godfrey Marange", r: "Co-founder & CTO" },
  { i: "GW", n: "Garth Walker", r: "Chief Sales Officer" },
];

const facts = [
  ["Legal entity", "Enthucate Tech (Pty) Ltd"],
  ["Trading as", "Connect+Funda Mobile"],
  ["Network", "Cell C via MVN-X"],
  ["Cloud platform", "Microsoft Azure"],
  ["Compliance", "ICASA · POPIA · FICA"],
  ["Ownership", "92.5% Black-owned"],
];

export default function Home() {
  useReveal("home");
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(100deg,rgba(27,34,44,.96) 0%,rgba(34,42,54,.86) 42%,rgba(45,54,69,.55) 100%),url(${heroImg}) center/cover`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-[96px] md:pb-[104px]">
          <div className="font-display font-bold uppercase tracking-[.16em] text-[.74rem] text-[#FFB892]">
            South Africa's first education-first mobile network
          </div>
          <h1 className="font-display font-extrabold leading-[1.12] tracking-tight text-[clamp(2.3rem,5.4vw,3.7rem)] max-w-[16ch] mt-3.5">
            Fuel your future.{" "}
            <span className="text-cf-orange">Live connected.</span>
          </h1>
          <p className="mt-5 max-w-[52ch] text-[1.12rem] text-[#D7DEE8]">
            We're a mobile network built for learning — affordable connectivity,
            zero-rated study content, AI tutoring, safety tools and real
            rewards, on one SIM. Distributed through the schools, colleges and
            partners learners already trust.
          </p>
          <div className="mt-8 flex gap-3.5 flex-wrap">
            <a
              href={PLANS_URL}
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              Explore plans →
            </a>
            <a href="#paths" className="btn-ghost">
              Partner with us
            </a>
          </div>
          <div className="mt-7 flex gap-5 flex-wrap text-[.83rem] text-[#AEB8C7] font-display font-semibold">
            {[
              "MVNO on the Cell C network via MVN-X",
              "POPIA Information Officer registered",
              "Majority Black-owned ICT business",
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <i className="w-[7px] h-[7px] rounded-full bg-cf-orange inline-block" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FIND YOUR PATH */}
      <section id="paths" className="py-[78px]">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="reveal max-w-[640px] mb-[42px]">
            <div className="font-display font-bold text-cf-orange uppercase tracking-[.16em] text-[.74rem]">
              One network, built around you
            </div>
            <h2 className="font-display font-extrabold text-cf-navy text-[clamp(1.7rem,3.4vw,2.4rem)] mt-3">
              Find the path that fits your world
            </h2>
            <p className="mt-3.5 text-cf-muted text-[1.05rem]">
              Whether you run a college, a CSR budget, a school or a household,
              we meet you where you are — with the solution built for your
              problem, not a one-size-fits-all pitch.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {paths.map((p) => {
              const inner = (
                <>
                  <div className="aspect-[16/11] overflow-hidden relative">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-cf-navy/85 text-white font-display font-bold text-[.64rem] tracking-[.12em] uppercase px-2.5 py-1.5 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-5 pb-[22px] flex flex-col flex-1">
                    <h3 className="font-display font-extrabold text-cf-navy text-[1.12rem]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-cf-muted text-[.9rem] flex-1">
                      {p.body}
                    </p>
                    <span className="mt-3.5 font-display font-bold text-[.86rem] text-cf-orange inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      {p.link} →
                    </span>
                  </div>
                </>
              );
              const cls =
                "reveal group flex flex-col rounded-[18px] overflow-hidden bg-white border border-cf-line shadow-[0_18px_44px_-34px_rgba(27,34,44,.5)] hover:-translate-y-1 hover:border-[#d7dde7] transition-all";
              return p.external ? (
                <a
                  key={p.title}
                  href={p.to}
                  target="_blank"
                  rel="noopener"
                  className={cls}
                >
                  {inner}
                </a>
              ) : (
                <Link key={p.title} to={p.to} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="plans" className="py-[78px] bg-cf-bgSoft">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="reveal max-w-[640px] mb-[42px]">
            <div className="font-display font-bold text-cf-orange uppercase tracking-[.16em] text-[.74rem]">
              More than connectivity
            </div>
            <h2 className="font-display font-extrabold text-cf-navy text-[clamp(1.7rem,3.4vw,2.4rem)] mt-3">
              One SIM. A whole learning ecosystem.
            </h2>
            <p className="mt-3.5 text-cf-muted text-[1.05rem]">
              Connectivity is the foundation — but the value sits in everything
              that rides on top of it.
            </p>
          </div>
          <div className="grid gap-[18px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="reveal bg-white border border-cf-line rounded-[16px] p-6"
              >
                <div className="w-[46px] h-[46px] rounded-[12px] bg-cf-orange/10 flex items-center justify-center mb-3.5 text-cf-orange">
                  <Icon name={p.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-cf-navy text-[1rem]">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-cf-muted text-[.86rem]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-[60px] border-y border-cf-line">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="reveal text-center text-cf-muted font-display font-semibold text-[.82rem] tracking-[.05em]">
            Built on signed, real-world foundations — not promises
          </div>
          <div className="reveal mt-6 flex flex-wrap gap-3 justify-center">
            {[
              "Cell C",
              "MVN-X",
              "Microsoft Azure",
              "Matific",
              "Readability",
              "FundaGuide AI",
              "Pargo",
              "Axiz",
              "Extreme Lifestyle",
            ].map((c) => (
              <span
                key={c}
                className="font-display font-bold text-[.86rem] text-cf-navy bg-cf-bgSoft border border-cf-line px-[1.05rem] py-2.5 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="reveal mt-6 flex flex-wrap gap-2.5 justify-center">
            {[
              "ICASA-compliant MVNO",
              "POPIA Information Officer registered",
              "FICA-ready onboarding",
              "Majority Black-owned (92.5%)",
            ].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 font-display font-bold text-[.78rem] text-cf-navy px-3.5 py-2 rounded-[10px] bg-white border border-cf-line"
              >
                <span className="text-cf-orange">
                  <Check />
                </span>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section id="about" className="bg-cf-navyDeep text-white py-[78px]">
        <div className="mx-auto max-w-[1180px] px-6 grid md:grid-cols-[1.1fr_.9fr] gap-[54px] items-center">
          <div className="reveal">
            <div className="font-display font-bold uppercase tracking-[.16em] text-[.74rem] text-[#FFB892]">
              Who we are
            </div>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.7rem,3.4vw,2.4rem)] mt-3">
              An MVNO that's also a learning platform
            </h2>
            <p className="mt-4 text-[#C2CBD8]">
              Connect+Funda Mobile was built on a simple idea: in South Africa,
              connectivity and education should be inseparable. Open-market data
              prices millions of learners out of online learning, and
              stand-alone EdTech apps are one tap from being deleted.
            </p>
            <p className="mt-4 text-[#C2CBD8]">
              So we anchored learning to the SIM. The connection is the hook,
              the app is where learning happens, and the parental dashboard is
              the trust layer — distributed through the schools, colleges, CSR
              partners and student bodies learners already belong to.
            </p>
            <div className="mt-7 flex gap-3.5 flex-wrap">
              {founders.map((f) => (
                <div
                  key={f.i}
                  className="flex items-center gap-2.5 bg-cf-navyInk border border-white/8 rounded-[12px] px-3.5 py-2.5"
                >
                  <div
                    className={`w-[38px] h-[38px] rounded-[9px] flex items-center justify-center font-display font-extrabold text-[.82rem] text-white ${f.o ? "bg-cf-orange" : "bg-cf-orange/85"}`}
                  >
                    {f.i}
                  </div>
                  <div>
                    <b className="font-display text-[.84rem] text-white block">
                      {f.n}
                    </b>
                    <span className="text-[.72rem] text-[#9AA6B5]">{f.r}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about#team"
              className="mt-5 inline-flex items-center gap-1.5 font-display font-bold text-[.92rem] text-cf-orange hover:gap-2.5 transition-all"
            >
              Meet the full team →
            </Link>
          </div>
          <div className="reveal bg-cf-navyInk border border-white/8 rounded-[20px] p-[30px]">
            {facts.map(([k, v], idx) => (
              <div
                key={k}
                className={`flex justify-between items-baseline py-3.5 ${idx < facts.length - 1 ? "border-b border-white/9" : ""}`}
              >
                <span className="text-[#9AA6B5] text-[.86rem]">{k}</span>
                <b className="font-display font-extrabold text-white text-[1.05rem] text-right max-w-[60%]">
                  {v}
                </b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="text-white text-center py-[66px]"
        style={{ background: "linear-gradient(135deg,#F2682A,#D9531A)" }}
      >
        <div className="mx-auto max-w-[1180px] px-6">
          <h2 className="font-display font-extrabold text-white text-[clamp(1.7rem,3.6vw,2.5rem)] max-w-[20ch] mx-auto">
            Let's connect learning to opportunity.
          </h2>
          <p className="mt-3.5 max-w-[54ch] mx-auto text-[#FFE6D8]">
            Tell us about your school, college, CSR programme or community — and
            we'll recommend the partnership model that fits. No obligation.
          </p>
          <a
            href="mailto:sales@connectandfunda.co.za?subject=Partnership%20enquiry"
            className="inline-flex items-center gap-2 font-display font-bold text-[.95rem] px-6 py-[.95rem] rounded-full mt-7 bg-white text-cf-orangeDk hover:bg-[#FFF1E8] transition-colors"
          >
            Start a conversation →
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
