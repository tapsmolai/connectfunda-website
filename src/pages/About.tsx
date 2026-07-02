import { useReveal } from "../hooks/useReveal";
import { Icon } from "../components/Icon";
import SiteFooter from "../components/site/SiteFooter";
import aboutImg from "../assets/corp-about.jpg";

const mv = [
  {
    icon: "heart",
    title: "Our mission",
    body: "To make quality learning affordable and accessible by bundling connectivity, content, safety and rewards into one platform — distributed through the institutions learners already trust.",
  },
  {
    icon: "growth",
    title: "Our vision",
    body: "To become Africa's leading education-first network — the default way families, schools and partners connect learners to opportunity.",
  },
] as const;

const why = [
  {
    n: "01",
    t: "The cost barrier",
    b: "Open-market data prices millions of learners out of online learning. Affordable, education-friendly bundles remove that barrier.",
  },
  {
    n: "02",
    t: "The adoption gap",
    b: "Stand-alone learning apps are easily uninstalled. Anchoring them to the SIM turns downloads into daily, engaged use.",
  },
  {
    n: "03",
    t: "The trust gap",
    b: "Parents need visibility and safety. Built-in parental controls and content filtering protect younger learners online.",
  },
  {
    n: "04",
    t: "The moment",
    b: "High smartphone penetration, a pro-MVNO regulatory framework and viable AI tutoring make an education-first network possible today.",
  },
];

const team = [
  {
    i: "NM",
    o: true,
    n: "Ndaba Moyo",
    r: "Co-founder & CEO",
    b: "Chartered accountant with 20+ years in investment banking and corporate leadership. Drives strategy, partnerships and capital raising.",
    l: "https://www.linkedin.com/in/ndaba-n-moyo-01a72b1b/",
  },
  {
    i: "GM",
    n: "Godfrey Marange",
    r: "Co-founder & CTO",
    b: "Microsoft-certified technologist leading platform architecture, scalable systems and MVNO integration via the MVN-X platform on Microsoft Azure.",
    l: "https://www.linkedin.com/in/godfrey-marange-4ba60737/",
  },
  {
    i: "GW",
    n: "Garth Walker",
    r: "Chief Sales Officer",
    b: "25+ years in sales leadership across B2B and B2C, building institutional channel partnerships and structuring CSR / B-BBEE deals.",
    l: "https://www.linkedin.com/in/garth-walker-62164426/",
  },
  {
    i: "RM",
    n: "Renee Martin",
    r: "Director",
    b: "Finance and accounting professional with deep experience in the education sector, including The British International School.",
    l: "https://www.linkedin.com/in/renee-martin-marange/",
  },
];

const comp = [
  {
    t: "ICASA",
    s: "Active",
    b: "MVNO operations on Cell C's licences, via the MVN-X platform. Product configuration is ICASA-compliant.",
  },
  {
    t: "POPIA",
    s: "Active",
    b: "Information Officer registered with the Information Regulator. Parental-consent flows protect minor data.",
  },
  {
    t: "FICA",
    s: "Active",
    b: "FICA-ready KYC for SIM activation through verified-ID services. No deposit-taking.",
  },
  {
    t: "Companies Act",
    s: "Active",
    b: "Enthucate Tech (Pty) Ltd in good standing; CIPC filings and statutory registers maintained.",
  },
  {
    t: "Consumer (CPA)",
    s: "Active",
    b: "CPA-aligned terms, truth-in-advertising and cooling-off periods.",
  },
  {
    t: "B-BBEE",
    s: "In progress",
    b: "Majority Black-owned (92.5%); formal scorecard targeted at first-year close.",
  },
];

export default function About() {
  useReveal("about");
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(100deg,rgba(27,34,44,.97),rgba(34,42,54,.8)),url(${aboutImg}) center/cover`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-[84px] md:pb-[88px] max-w-[60ch]">
          <div className="font-display font-bold uppercase tracking-[.16em] text-[.74rem] text-[#FFB892]">
            About Connect+Funda Mobile
          </div>
          <h1 className="font-display font-extrabold leading-[1.12] tracking-tight text-[clamp(2.1rem,4.8vw,3.2rem)] mt-3.5">
            Connectivity and education{" "}
            <span className="text-cf-orange">belong together.</span>
          </h1>
          <p className="mt-4.5 text-[#D7DEE8] text-[1.1rem]">
            We're South Africa's first education-first mobile network — an MVNO
            built so that every rand spent on data does double duty as an
            investment in learning.
          </p>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-[78px]">
        <div className="mx-auto max-w-[1180px] px-6 grid gap-6 md:grid-cols-2">
          {mv.map((m) => (
            <div
              key={m.title}
              className="reveal bg-cf-bgSoft border border-cf-line rounded-[18px] p-[30px]"
            >
              <div className="w-[46px] h-[46px] rounded-[12px] bg-cf-orange/10 flex items-center justify-center mb-4 text-cf-orange">
                <Icon name={m.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-cf-navy text-[1.2rem]">
                {m.title}
              </h3>
              <p className="mt-2.5 text-cf-muted">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="py-[78px] bg-cf-bgSoft">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="reveal max-w-[640px] mb-[42px]">
            <div className="font-display font-bold text-cf-orange uppercase tracking-[.16em] text-[.74rem]">
              Our story
            </div>
            <h2 className="font-display font-extrabold text-cf-navy text-[clamp(1.7rem,3.4vw,2.4rem)] mt-3">
              Why we built an education-first network
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <p className="text-cf-muted">
                Connect+Funda Mobile began with a problem we kept seeing in
                South African education: connectivity and learning were treated
                as two separate purchases, and millions of learners couldn't
                afford both. Open-market data made online learning a luxury, and
                the EdTech apps meant to help were one tap away from being
                deleted.
              </p>
              <p className="text-cf-muted mt-3.5">
                Traditional networks weren't built for the classroom. Students
                struggled with the cost of data, parents had no visibility into
                their children's digital learning, and schools had no affordable
                way to put tools in learners' hands.
              </p>
            </div>
            <div className="reveal">
              <p className="text-cf-muted">
                So we anchored learning to the SIM. As a mobile virtual network
                operator on the Cell C network, we bundle affordable,
                education-friendly data with zero-rated learning content, an AI
                tutor, safety controls and a rewards programme — all in one app.
              </p>
              <p className="text-cf-muted mt-3.5">
                And rather than chase expensive advertising, we reach learners
                through the schools, colleges, CSR partners and student bodies
                they already belong to. Every rand spent on connectivity
                contributes directly to a learning outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="py-[78px]">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="reveal max-w-[640px] mb-[42px]">
            <div className="font-display font-bold text-cf-orange uppercase tracking-[.16em] text-[.74rem]">
              Why now
            </div>
            <h2 className="font-display font-extrabold text-cf-navy text-[clamp(1.7rem,3.4vw,2.4rem)] mt-3">
              The gap we're closing
            </h2>
          </div>
          <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div
                key={w.n}
                className="reveal bg-white border border-cf-line rounded-[16px] p-6"
              >
                <div className="font-display font-extrabold text-cf-orange text-[1.4rem] mb-1.5">
                  {w.n}
                </div>
                <h3 className="font-display font-extrabold text-cf-navy text-[1rem]">
                  {w.t}
                </h3>
                <p className="mt-2 text-cf-muted text-[.88rem]">{w.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-[78px] bg-cf-bgSoft scroll-mt-[80px]">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="reveal max-w-[640px] mb-[42px]">
            <div className="font-display font-bold text-cf-orange uppercase tracking-[.16em] text-[.74rem]">
              Leadership
            </div>
            <h2 className="font-display font-extrabold text-cf-navy text-[clamp(1.7rem,3.4vw,2.4rem)] mt-3">
              The team behind the network
            </h2>
            <p className="mt-3.5 text-cf-muted text-[1.05rem]">
              Concurrent experience across corporate finance, scalable platform
              engineering and institutional sales — the three disciplines an
              MVNO + EdTech business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-[22px]">
            {team.map((t) => (
              <div
                key={t.i}
                className="reveal flex gap-[18px] bg-white border border-cf-line rounded-[18px] p-6 shadow-[0_18px_44px_-38px_rgba(27,34,44,.5)]"
              >
                <div
                  className={`w-[74px] h-[74px] flex-[0_0_74px] rounded-[16px] flex items-center justify-center font-display font-extrabold text-white text-[1.4rem] ${t.o ? "bg-cf-orange" : "bg-cf-navy"}`}
                >
                  {t.i}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-cf-navy text-[1.08rem]">
                    {t.n}
                  </h3>
                  <div className="font-display font-bold text-cf-orange text-[.82rem] my-[3px]">
                    {t.r}
                  </div>
                  <p className="text-cf-muted text-[.88rem]">{t.b}</p>
                  <a
                    href={t.l}
                    target="_blank"
                    rel="noopener"
                    className="inline-block mt-2.5 font-display font-bold text-[.8rem] text-cf-navy hover:text-cf-orange"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE & COMPLIANCE */}
      <section className="py-[78px] bg-cf-navyDeep text-white">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="reveal max-w-[640px] mb-[42px]">
            <div className="font-display font-bold uppercase tracking-[.16em] text-[.74rem] text-[#FFB892]">
              Governance & compliance
            </div>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.7rem,3.4vw,2.4rem)] mt-3">
              Built to operate responsibly
            </h2>
            <p className="mt-3.5 text-[#C2CBD8] text-[1.05rem]">
              Serving under-18 learners on a regulated network means compliance
              isn't optional. We're compliant or compliant-by-design across
              every regime that applies to us.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {comp.map((c) => (
              <div
                key={c.t}
                className="reveal bg-cf-navyInk border border-white/8 rounded-[16px] p-[22px]"
              >
                <span className="font-display font-extrabold text-white text-[.95rem]">
                  {c.t}
                </span>
                <span
                  className={`float-right font-display font-bold text-[.62rem] tracking-[.1em] uppercase px-2.5 py-1 rounded-full text-[#0f1620] ${c.s === "Active" ? "bg-[#7FD49B]" : "bg-[#FFC98A]"}`}
                >
                  {c.s}
                </span>
                <p className="clear-both mt-3 text-[#AEB8C7] text-[.84rem]">
                  {c.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-[60px] border-y border-cf-line">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="reveal text-center text-cf-muted font-display font-semibold text-[.82rem] tracking-[.05em]">
            Our signed partners &amp; platform
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
