import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/cf-logo.png";

const PLANS_URL = "https://connect-and-funda.vercel.app/#plans";

const partnerLinks = [
  { to: "/schools", label: "Schools" },
  { to: "/tertiary", label: "Tertiary & TVET" },
  { to: "/csr", label: "CSR & NPOs" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partnerMenuOpen, setPartnerMenuOpen] = useState(false);
  const [mobilePartnerOpen, setMobilePartnerOpen] = useState(false);

  const baseLink =
    "font-display text-[0.92rem] font-semibold transition-colors";

  function closeMenus() {
    setMobileMenuOpen(false);
    setPartnerMenuOpen(false);
    setMobilePartnerOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-cf-line bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex h-[74px] max-w-[1180px] items-center justify-between px-6">
        <Link to="/" onClick={closeMenus}>
          <img src={logo} alt="Connect+Funda Mobile" className="h-[34px]" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "text-cf-orange"
                  : "text-cf-navy hover:text-cf-orange"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "text-cf-orange"
                  : "text-cf-navy hover:text-cf-orange"
              }`
            }
          >
            About Us
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setPartnerMenuOpen(true)}
            onMouseLeave={() => setPartnerMenuOpen(false)}
          >
            <button
              type="button"
              aria-expanded={partnerMenuOpen}
              onClick={() => setPartnerMenuOpen((open) => !open)}
              className={`${baseLink} flex items-center gap-1 text-cf-navy hover:text-cf-orange`}
            >
              Become a Partner
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${
                  partnerMenuOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {partnerMenuOpen && (
              <div className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-cf-line bg-white p-2 shadow-xl">
                  {partnerLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={closeMenus}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 font-display text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-cf-orange/10 text-cf-orange"
                            : "text-cf-navy hover:bg-cf-bgSoft hover:text-cf-orange"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/#contact"
            className={`${baseLink} text-cf-navy hover:text-cf-orange`}
          >
            Contact
          </Link>
        </nav>

        <a
          href={PLANS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !px-5 !py-2.5 hidden md:inline-flex"
        >
          Mobile &amp; Learning Plans
        </a>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2D3645"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileMenuOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-cf-line bg-white px-6 py-4 md:hidden">
          <NavLink
            to="/"
            end
            onClick={closeMenus}
            className="block py-2.5 font-display font-semibold text-cf-navy"
          >
            Home
          </NavLink>

          <div className="border-b border-cf-line py-2">
            <button
              type="button"
              onClick={() => setMobilePartnerOpen((open) => !open)}
              className="flex w-full items-center justify-between py-2.5 font-display font-semibold text-cf-navy"
            >
              Become a Partner
              <span className="text-xl leading-none">
                {mobilePartnerOpen ? "−" : "+"}
              </span>
            </button>

            {mobilePartnerOpen && (
              <div className="pb-2 pl-4">
                {partnerLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeMenus}
                    className="block py-2.5 font-display text-sm font-semibold text-cf-navy"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/about"
            onClick={closeMenus}
            className="block py-2.5 font-display font-semibold text-cf-navy"
          >
            About Us
          </NavLink>

          <Link
            to="/#contact"
            onClick={closeMenus}
            className="block py-2.5 font-display font-semibold text-cf-navy"
          >
            Contact
          </Link>

          <a
            href={PLANS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 flex w-full justify-center"
          >
            Mobile &amp; Learning Plans
          </a>
        </nav>
      )}
    </header>
  );
}
