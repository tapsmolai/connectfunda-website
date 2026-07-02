import type { IconName } from "../../config/types";

const P: Record<IconName, string> = {
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
  chart: "M3 3v18h18",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4",
  trophy:
    "M6 9H4.5a2.5 2.5 0 0 1 0-5H6 M18 9h1.5a2.5 2.5 0 0 0 0-5H18 M4 22h16 M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22 M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22 M18 2H6v7a6 6 0 0 0 12 0V2Z",
  coin: "M14.5 8.5a3 3 0 0 0-5.5 1.5c0 3 5 2 5 5a3 3 0 0 1-5.5 1.5 M12 6v2 M12 16v2",
  gear: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  handshake:
    "M11 17l2 2a1 1 0 1 0 3-3 M14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4 M21 3l1 11h-2 M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3 M3 4h8",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  growth: "M3 3v18h18 M19 9l-5 5-4-4-3 3 M19 9h-4 M19 9v4",
  heart:
    "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  building:
    "M4 2h16v20H4z M9 22v-4h6v4 M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01",
  choose: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M17 11l2 2 4-4",
  sim: "M9 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z M9 3l-3 3 M9 11h6v6H9z",
  report:
    "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z M14 2v5h5 M9 15l2 2 4-4",
  lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4",
  bank: "M3 21h18 M5 21V8l7-5 7 5v13 M9 9v8 M12 9v8 M15 9v8",
  leaf: "M11 20A7 7 0 0 1 4 13c0-5 5-9 11-9 0 6-4 11-9 11 M2 22c0-5 5-9 11-9",
  pickaxe: "M2 18h20 M4 18a8 8 0 0 1 16 0 M12 6v4 M9 10h6",
  briefcase: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
  layers: "m12 2 9 5-9 5-9-5 9-5z M3 12l9 5 9-5 M3 17l9 5 9-5",
  signal: "M2 20h.01 M7 20v-4 M12 20v-8 M17 20V8 M22 4v16",
  gift: "M12 8v13 M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7 M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8S13 3 16.5 3a2.5 2.5 0 0 1 0 5",
  campus: "M3 21h18 M5 21V8l7-5 7 5v13 M9 9v8 M12 9v8 M15 9v8",
};

export function Icon({
  name,
  className = "w-6 h-6",
  strokeWidth = 1.9,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const segments = P[name]
    .split(/(?=M)/)
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {name === "chart" && (
        <>
          <rect x="7" y="11" width="3" height="6" />
          <rect x="12" y="7" width="3" height="10" />
          <rect x="17" y="13" width="3" height="4" />
        </>
      )}
      {name === "coin" && <circle cx="12" cy="12" r="9" />}
      {name === "gear" && <circle cx="12" cy="12" r="3" />}
      {name === "users" && <circle cx="9" cy="7" r="4" />}
      {name === "choose" && <circle cx="9" cy="7" r="4" />}
      {name === "briefcase" && (
        <rect x="2" y="7" width="20" height="14" rx="2" />
      )}
      {name === "gift" && <rect x="3" y="8" width="18" height="4" rx="1" />}
      {segments.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

export const Check = ({
  className = "w-[18px] h-[18px]",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
export const Cross = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.6}
    strokeLinecap="round"
    className={className}
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
export const ArrowLeft = ({
  className = "w-[18px] h-[18px]",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);
