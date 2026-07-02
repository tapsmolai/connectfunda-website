import type { ReactNode } from 'react';

/* Shared landing-page config types (extracted so the tertiary page is self-contained). */
export type IconName =
  | 'book' | 'chart' | 'shield' | 'trophy' | 'coin' | 'gear'
  | 'handshake' | 'users' | 'growth' | 'heart' | 'building'
  | 'choose' | 'sim' | 'report' | 'lock' | 'bank' | 'leaf' | 'pickaxe'
  | 'briefcase' | 'layers' | 'signal' | 'gift' | 'campus';

export interface Pillar { icon: IconName; title: string; body: string; }
export interface Feature { icon: IconName; title: string; body: ReactNode; pill?: string; }
export interface Stat { num: string; accent?: string; label: string; }
export interface Step { icon: IconName; title: string; body: string; }
export interface Tier { tag: string; title: string; desc: string; price: string; sub: string; }
export interface CompareRow { feature: string; cf: string; generic: string; }
export interface Who { icon: IconName; title: string; body: string; }
export interface ImpactRow { k: string; v: string; }
export interface VideoCard {
  tag: string;
  tagStyle: 'primary' | 'partner';
  title: string;
  sub: string;
  src?: string; // URL — undefined => placeholder (click is a no-op)
  poster?: string; // optional poster image URL
}
export interface PlanPill { group: string; name: string; }
export interface SrcBenefit { title: string; body: string; }
export interface CustomContentItem { icon: IconName; sector: string; title: string; body: string; }
export interface CustomContentSection {
  kicker: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  items: CustomContentItem[];
  foot: ReactNode;
}
export interface ClosingDualCard { imageSrc: string; imageAlt: string; tag: string; titleLead: string; titleAccent: string; body: string; }
export interface ClosingDual {
  kicker: string;
  heading: string;
  cards: [ClosingDualCard, ClosingDualCard];
  foot: ReactNode;
}

/* ---- Tertiary-specific reusable sections ---- */
// A flagship feature block: image on one side, copy + checklist on the other (e.g. Connect+Work)
export interface ValueFeature {
  tag: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  bullets: { lead: string; rest: string }[]; // lead is bolded, rest is normal
}
// The "two ways to partner" fork
export interface PartnerTrack {
  icon: IconName;
  badge?: string;          // e.g. "Most common" — only on the primary track
  primary?: boolean;       // applies the orange-ring highlight
  title: string;
  who: string;             // sub-label, e.g. "Principal / management-led referral"
  desc: string;
  points: string[];
  note: ReactNode;         // model-note footer (JSX so we can bold)
  ctaLabel: string;
  ctaStyle: 'primary' | 'outline';
}
export interface PartnerTracksSection {
  kicker: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  tracks: [PartnerTrack, PartnerTrack];
}
// The repositioned SRC / SATVETSA buy-in block
export interface SrcRole { name: string; body: string; }
export interface SrcBlock {
  kicker: string;
  titleLead: string;
  titleAccent: string;
  intro: ReactNode;        // JSX so we can italicise "with"
  points: string[];
  panelHeading: string;
  roles: SrcRole[];
}
export interface SrcSpotlight {
  tag: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  benefits: SrcBenefit[];
  bigStat: string;
  bigStatSub: string;
  bullets: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface RegisterField {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'select' | 'textarea';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  half?: boolean;
}

export interface AudienceConfig {
  key: string;
  nav: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    lead: ReactNode;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
    note: string;
    badgeBig: string;
    badgeSmall: string;
    floatLabel: string;
    heroImage?: string;     // optional — per-audience hero image; falls back to the default NPO hero
    heroImageAlt?: string;
  };
  pillars: Pillar[];
  stats?: { caption: string; items: Stat[] }; // optional — omit if implied scale would feel like claims of achieved impact
  why?: { kicker: string; heading: string; intro: string; features: Feature[] }; // optional — NPO uses this; Tertiary uses valueFeature + customContent instead
  valueFeature?: ValueFeature;          // optional — flagship feature block (Tertiary: Connect+Work)
  customContent?: CustomContentSection; // optional — sector-specific custom bundling section; on Tertiary this renders as the 4 value cards
  videos?: {
    kicker: string;
    heading: string;
    intro: string;
    items: VideoCard[];
    placeholderNote?: string;
  };
  how: { kicker: string; heading: string; intro: string; steps: Step[]; foot: ReactNode };
  srcSpotlight?: SrcSpotlight; // optional — legacy SRC-as-channel spotlight (no longer used; superseded by srcBlock)
  partnerTracks?: PartnerTracksSection; // optional — the "two ways to partner" fork (Tertiary)
  srcBlock?: SrcBlock;                  // optional — repositioned SRC / SATVETSA buy-in section (Tertiary)
  models?: { kicker: string; heading: string; intro: string; tiers: Tier[] }; // optional — NPO partnership tiers
  plans: {
    kicker: string;
    heading: string;
    intro?: string;             // optional — when absent, only heading + visual + CTA + disclaimer render
    subHeading?: string;        // optional — Schools-style simplified plans omits this
    subIntro?: string;          // optional
    pills?: PlanPill[];         // optional — omit for simplified Schools-style plans block
    disclaimer: ReactNode;
    catalogueUrl: string;
    catalogueLabel: string;
  };
  quote?: { text: ReactNode; by: string }; // optional
  who?: { kicker: string; heading: string; items: Who[] };          // optional
  compare: { kicker: string; heading: string; rows: CompareRow[] };
  impact: { heading: string; intro: string; checks: string[]; panel: ImpactRow[] };
  register: { kicker: string; heading: string; intro: string; fields: RegisterField[]; successMsg: string };
  closingBanner?: { // optional — when closingDual is used instead, omit this
    imageSrc: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    eyebrow: string;
    imageAlt: string;
  };
  closingDual?: ClosingDual; // optional — two-image closing section, mutually exclusive with closingBanner
  ctaBand?: { heading: string; body: string; cta: string }; // optional — orange CTA band before footer
  partners?: string[];
  footerTag?: string;
}
