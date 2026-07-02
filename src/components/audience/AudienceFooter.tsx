import logo from "../../assets/cf-logo.png";
import { contact } from "../../config/brand";

export default function AudienceFooter({
  onRegisterClick,
}: {
  onRegisterClick: () => void;
}) {
  const partners = [
    "MVNX",
    "Cell C",
    "matific",
    "Readability",
    "FundaGuide AI Tutor",
  ];

  return (
    <>
      <div className="border-t border-cf-line bg-white py-10">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-5 text-center font-display text-[.74rem] font-bold uppercase tracking-[.14em] text-cf-muted">
            Powered by &amp; partnered with
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner) => (
              <span
                key={partner}
                className="cursor-default font-display text-[1.02rem] font-bold text-cf-navy opacity-70 transition-all hover:text-cf-orange hover:opacity-100"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-cf-navyDeep pb-7 pt-14 text-[#AEB8C7]">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="grid gap-10 border-b border-[#3A4250] pb-[34px] md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <img
                src={logo}
                alt="Connect+Funda"
                className="mb-4 h-[42px] brightness-0 invert opacity-90"
              />

              <p className="max-w-[24rem]">
                South Africa&apos;s first MVNO dedicated exclusively to
                educational connectivity. Fuel your future. Live connected.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-display text-[.92rem] uppercase tracking-widest text-white">
                Partnerships
              </h4>

              <a
                href="#why"
                className="mb-2.5 block text-[.92rem] hover:text-cf-orange"
              >
                Why Partner
              </a>

              <a
                href="#how"
                className="mb-2.5 block text-[.92rem] hover:text-cf-orange"
              >
                How It Works
              </a>

              <a
                href="#models"
                className="mb-2.5 block text-[.92rem] hover:text-cf-orange"
              >
                Models
              </a>

              <button
                type="button"
                onClick={onRegisterClick}
                className="mb-2.5 block cursor-pointer text-left text-[.92rem] hover:text-cf-orange"
              >
                Register Interest
              </button>
            </div>

            <div>
              <h4 className="mb-4 font-display text-[.92rem] uppercase tracking-widest text-white">
                Contact
              </h4>

              <a
                href={`mailto:${contact.email}`}
                className="mb-2.5 block text-[.92rem] hover:text-cf-orange"
              >
                {contact.email}
              </a>

              <a
                href={contact.phoneHref}
                className="mb-2.5 block text-[.92rem] hover:text-cf-orange"
              >
                {contact.phone}
              </a>

              <a
                href={contact.webHref}
                target="_blank"
                rel="noreferrer"
                className="mb-2.5 block text-[.92rem] hover:text-cf-orange"
              >
                {contact.web}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-2.5 pt-6 text-[.82rem] text-[#7B8698]">
            <span>
              © 2026 Connect+Funda Mobile (Enthucate Tech Pty Ltd). All rights
              reserved.
            </span>

            <span>Schools Partnerships</span>
          </div>
        </div>
      </footer>
    </>
  );
}
