import type { AudienceConfig } from "./types";
import tertiaryHero from "../assets/tertiary/tertiary-hero.jpg";
import connectWork from "../assets/tertiary/connectwork.jpg";
import tertiaryStudy from "../assets/tertiary/tertiary-study.jpg";
import connectWorkClose from "../assets/tertiary/connectwork-close.jpg";

/* ============================ TERTIARY & TVET CONFIG ============================
 * B2B / B2B2C partner-acquisition page for TVET colleges, private colleges and
 * universities. Strategy:
 *   - Connectivity is NOT the pitch (campus/res WiFi is largely solved).
 *   - Lead with the four-part platform: Connect · Learn · Work · Get rewarded.
 *   - Connect+Work (employability) is the flagship value feature.
 *   - Two partner tracks: TVET/college principal-led referral (primary) vs.
 *     university paid-ambassador / campus presence.
 *   - SRC / SATVETSA repositioned to buy-in / champion (not the revenue channel).
 * Uses the optional AudienceConfig slots: valueFeature, customContent (rendered
 * as value cards), partnerTracks, srcBlock, closingDual, ctaBand.
 * ============================================================================= */

export const tertiaryConfig: AudienceConfig = {
  key: "tertiary",
  nav: [], // logo-only header (Schools/NPO pattern)
  hero: {
    eyebrow: "★ For TVETs, Colleges & Universities",
    titleLead: "Connect. Learn. Work. ",
    titleAccent: "Get rewarded.",
    lead: (
      <>
        The four-part student success platform — all in one SIM. Connect+Funda
        gives your students a pathway to work, AI-powered learning support, and
        aspirational rewards that keep them engaged —{" "}
        <strong className="text-cf-navy">
          far more than just connectivity.
        </strong>
      </>
    ),
    primaryCta: "Explore partnership options",
    secondaryCta: "What students get",
    secondaryHref: "#value",
    note: "Employability-focused · Retention & impact data · No campus rollout needed",
    badgeBig: "One SIM.",
    badgeSmall: "Four ways to get ahead.",
    floatLabel: "Connect · Learn · Work · Get rewarded",
    heroImage: tertiaryHero,
    heroImageAlt:
      "Tertiary students learning and connecting on their devices off-campus",
  },
  pillars: [
    {
      icon: "briefcase",
      title: "Employability",
      body: "Connect+Work links students to bursaries, internships & jobs.",
    },
    {
      icon: "growth",
      title: "Retention",
      body: "Support that reduces dropout risk and improves outcomes.",
    },
    {
      icon: "signal",
      title: "Off-campus data",
      body: "Affordable data for home, commute & breaks — beyond WiFi.",
    },
    {
      icon: "chart",
      title: "Measurable impact",
      body: "Engagement & outcome reporting for your institution.",
    },
  ],

  // Flagship feature — Connect+Work
  valueFeature: {
    tag: "Flagship — Employability",
    titleLead: "Connect+",
    titleAccent: "Work",
    intro:
      "A job portal and work-readiness platform built into the Connect+Funda experience — turning connectivity into career outcomes. The single strongest lever your institution has on graduate employability and retention.",
    imageSrc: connectWork,
    imageAlt:
      "Connect+Work job portal showing bursaries, learnerships, internships and jobs",
    bullets: [
      {
        lead: "Job portal:",
        rest: "bursaries, learnerships, internships & jobs matched to students",
      },
      {
        lead: "Work-readiness content:",
        rest: "CV building, interview prep, digital & workplace skills",
      },
      {
        lead: "Institutional value:",
        rest: "better graduate outcomes, lower dropout, stronger employability stats",
      },
    ],
  },

  // The four value cards (reusing customContent slot; rendered as the 4-up value grid)
  customContent: {
    kicker: "More Than Data",
    titleLead: "The campus has WiFi. We provide ",
    titleAccent: "what comes next.",
    intro:
      "For tertiary students the SIM is the small part. The real value is what rides on top of it — a pathway to work, learning support, sector content, and data for when they step off campus.",
    items: [
      {
        icon: "book",
        sector: "AI Tutor",
        title: "FundaGuide Tertiary",
        body: "An AI study companion pitched at tertiary level — concept help, exam prep and 1-on-1 guidance that follows students wherever they are.",
      },
      {
        icon: "layers",
        sector: "Customisable",
        title: "TVET-requested content",
        body: "Sector and curriculum-specific learning we source and bundle to your programmes — from engineering to business studies. Illustrative, not pre-built; we build to your cohort.",
      },
      {
        icon: "signal",
        sector: "Beyond WiFi",
        title: "Affordable off-campus data",
        body: "Low-cost data for home, commute and breaks — for both study and life. Honest about how students actually use it, priced for how often they need it.",
      },
      {
        icon: "gift",
        sector: "Aspirational",
        title: "Points+ Rewards",
        body: "Students earn as they learn and stay engaged — climbing tiers from Level Up to Diamond, where top students unlock genuinely aspirational rewards: VIP match-day experiences, devices, and more.",
      },
    ],
    foot: "",
  },

  // Two ways to partner
  partnerTracks: {
    kicker: "Two Ways To Partner",
    titleLead: "Different institutions, ",
    titleAccent: "different routes in.",
    intro:
      "How we work together depends on your institution type. Choose the track that fits — or talk to us and we will recommend the right approach.",
    tracks: [
      {
        icon: "campus",
        badge: "Most common",
        primary: true,
        title: "TVET & Private Colleges",
        who: "Principal / management-led referral",
        desc: "Your college leadership becomes the programme champion and earns referral income, while we handle the heavy lifting. The SRC is brought in under the partnership to help reach fellow students.",
        points: [
          "College management is the point person & driver",
          "Referral commission flows to the institution",
          "SRC roped in by leadership, shares in the commission",
          "We provide onboarding, content, support & reporting",
          "Zero rollout cost — campus WiFi already covers connectivity",
        ],
        note: (
          <>
            Best when there is a relationship with the principal or management —
            the model that has worked for us in practice.{" "}
            <b>Leadership drives, SRC supports.</b>
          </>
        ),
        ctaLabel: "Partner as a college",
        ctaStyle: "primary",
      },
      {
        icon: "building",
        title: "Universities",
        who: "Campus presence & brand ambassadors",
        desc: "Universities manage on-campus marketing tightly, so here we work as a paid presence — brand ambassadors who act as influencers and a campus event programme — rather than a referral partnership.",
        points: [
          "Paid campus ambassadors as authentic student influencers",
          "Event & activation presence (orientation, campus festivals)",
          "Co-branded campaigns aligned to your marketing policy",
          "Focused on reach & brand, not institutional revenue-share",
          "We handle recruitment, training & management of ambassadors",
        ],
        note: (
          <>
            Built for institutions with formal marketing policies and event
            processes. <b>Paid reach, professionally run.</b>
          </>
        ),
        ctaLabel: "Talk about campus access",
        ctaStyle: "outline",
      },
    ],
  },

  // SRC / SATVETSA — repositioned to buy-in
  srcBlock: {
    kicker: "Working With Your SRC & SATVETSA",
    titleLead: "Your SRC has a real role — ",
    titleAccent: "just not the whole job.",
    intro: (
      <>
        Student leadership matters. SRCs and SATVETSA know their campuses, carry
        credibility with fellow students, and can make or break how a programme
        is received. We work <em>with</em> them — as champions and partners in
        reaching students, not as the ones carrying the full sales burden.
      </>
    ),
    points: [
      "SRCs help champion the programme to fellow students",
      "They can share in referral commission through the college partnership",
      "SATVETSA endorsement gives the programme legitimacy across TVET campuses",
      "Leadership stays accountable; the SRC supports rather than drives",
    ],
    panelHeading: "Who does what",
    roles: [
      {
        name: "College leadership",
        body: "Owns the partnership, is our point of contact, and drives adoption. Accountable for results.",
      },
      {
        name: "SRC / SATVETSA",
        body: "Champions the programme to students, supports activations, and shares in commission — without bearing the sales burden alone.",
      },
      {
        name: "Connect+Funda",
        body: "Provides the platform, content, training, support and reporting — the heavy lifting.",
      },
    ],
  },

  how: {
    kicker: "How Partnership Works",
    heading: "Simple to start. Built to last.",
    intro:
      "A clear path from first conversation to students actively connecting, learning, working and earning.",
    steps: [
      {
        icon: "handshake",
        title: "We agree the model",
        body: "Pick the track that fits your institution — college referral partnership or university campus presence.",
      },
      {
        icon: "sim",
        title: "We onboard students",
        body: "SIMs, the Connect+Funda app, Connect+Work, FundaGuide and rewards — rolled out with full support.",
      },
      {
        icon: "choose",
        title: "Students get ahead",
        body: "They access jobs, learning support, affordable off-campus data and aspirational rewards.",
      },
      {
        icon: "report",
        title: "You see the impact",
        body: "Engagement and outcome reporting your institution can use for retention and employability metrics.",
      },
    ],
    foot: (
      <>
        From first conversation to real student outcomes —{" "}
        <span className="text-cf-orange">we handle the heavy lifting.</span>
      </>
    ),
  },

  plans: {
    kicker: "Plans & Bundles",
    heading: "Affordable data, built for how students actually use it",
    disclaimer: (
      <>
        <strong className="text-cf-orangeDk">Important:</strong> retail prices
        are published on the Connect+Funda plans catalogue.{" "}
        <strong className="text-cf-orangeDk">
          Partnership terms are on application
        </strong>{" "}
        and depend on the model (college referral or university presence), the
        size of the student body, and the content bundled. Because campus and
        residence WiFi covers most on-site connectivity, tertiary data plans are
        priced for off-campus, top-up use. Terms &amp; conditions apply.
      </>
    ),
    catalogueUrl: "https://connect-and-funda.vercel.app/#plans",
    catalogueLabel: "View Full Plan Catalogue",
  },

  compare: {
    kicker: "The Difference",
    heading: "More than a student SIM deal",
    rows: [
      {
        feature: "Job portal & work-readiness (Connect+Work)",
        cf: "Built in",
        generic: "None",
      },
      {
        feature: "AI tutoring (FundaGuide Tertiary)",
        cf: "Included",
        generic: "None",
      },
      {
        feature: "Sector / curriculum content",
        cf: "Bundled to your programmes",
        generic: "Not supported",
      },
      {
        feature: "Aspirational rewards (Points+)",
        cf: "Level Up → Diamond",
        generic: "No loyalty value",
      },
      {
        feature: "Retention & engagement reporting",
        cf: "Institutional dashboard",
        generic: "No reporting",
      },
      {
        feature: "Partnership model",
        cf: "College referral or campus presence",
        generic: "Once-off airtime sale",
      },
    ],
  },

  impact: {
    heading:
      "Turn connectivity into retention and employability you can report.",
    intro:
      "Every partnership comes with the support and evidence your institution needs — from onboarding to outcome reporting your DHET and council stakeholders will value.",
    checks: [
      "Dedicated partnership management",
      "Onboarding & student activation support",
      "Engagement & outcome reporting",
      "Co-branded campus campaign materials",
      "Connect+Work employability tracking",
    ],
    panel: [
      { k: "Campus rollout cost", v: "R0" },
      { k: "Connectivity already on campus", v: "WiFi ✓" },
      { k: "Admin burden on your team", v: "Minimal" },
      { k: "Employability platform", v: "Connect+Work" },
      { k: "Reporting", v: "Per term" },
    ],
  },

  register: {
    kicker: "Explore Partnership",
    heading: "Let us build the right partnership for your institution.",
    intro:
      "Tell us about your college or university and the students you serve. Our partnerships team will follow up with a tailored recommendation — no obligation.",
    successMsg:
      "Thank you! Your interest has been registered. Our partnerships team will be in touch shortly.",
    fields: [
      {
        name: "institutionName",
        label: "Institution name",
        required: true,
        placeholder: "e.g. South West Gauteng TVET College",
      },
      {
        name: "contactName",
        label: "Contact name",
        required: true,
        placeholder: "Full name",
        half: true,
      },
      {
        name: "roleTitle",
        label: "Role / title",
        placeholder: "e.g. Principal, Marketing Manager, SRC President",
        half: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "you@institution.ac.za",
        half: true,
      },
      { name: "phone", label: "Phone", placeholder: "+27 ...", half: true },
      {
        name: "institutionType",
        label: "Institution type",
        type: "select",
        required: true,
        half: true,
        options: [
          "TVET College",
          "Private College",
          "University / University of Technology",
          "SRC / SATVETSA",
          "Other",
        ],
      },
      {
        name: "preferredTrack",
        label: "Preferred track",
        type: "select",
        half: true,
        options: [
          "College referral partnership",
          "University campus presence / ambassadors",
          "Recommend the right one",
        ],
      },
      {
        name: "studentEnrollment",
        label: "Approx. student enrolment",
        placeholder: "e.g. 12,000",
        half: true,
      },
      {
        name: "campusesProvince",
        label: "Campus(es) / province",
        placeholder: "e.g. Soweto, Gauteng",
        half: true,
      },
      {
        name: "studentNeeds",
        label: "What would you like for your students?",
        type: "textarea",
        placeholder: "Employability, retention, specific content, rewards...",
      },
    ],
  },

  closingDual: {
    kicker: "Beyond the lecture hall",
    heading: "From study support to a first job",
    cards: [
      {
        imageSrc: tertiaryStudy,
        imageAlt: "Tertiary students studying together on a tablet off-campus",
        tag: "Learning, anywhere",
        titleLead: "Study support that ",
        titleAccent: "follows them home.",
        body: "FundaGuide Tertiary, sector content and affordable off-campus data mean learning does not stop when students leave the WiFi — on the commute, at home, on weekends.",
      },
      {
        imageSrc: connectWorkClose,
        imageAlt:
          "Student using Connect+Work to find bursaries, internships and jobs",
        tag: "A pathway to work",
        titleLead: "Connect+Work turns study ",
        titleAccent: "into a career.",
        body: "Bursaries, learnerships, internships and jobs — plus the work-readiness skills to land them. The employability outcome your institution is measured on.",
      },
    ],
    foot: (
      <>
        Connect. Learn. Work.{" "}
        <span className="text-cf-orange">Get rewarded.</span>
      </>
    ),
  },

  ctaBand: {
    heading: "Let’s build the right partnership for your institution.",
    body: "Tell us about your college or university and the students you serve. We will recommend the model that fits — no obligation.",
    cta: "Explore partnership options",
  },

  partners: ["Cell C", "MVNX", "FundaGuide AI Tutor"],
  footerTag: "Tertiary & TVET Partnerships",
};
