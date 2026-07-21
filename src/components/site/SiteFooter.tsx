import { Link } from "react-router-dom";
import logo from "../../assets/cf-logo.png";
import { contact } from "../../config/brand";

const PLANS_URL = "https://connect-and-funda.vercel.app/#plans";

export default function SiteFooter() {
  return (
    <footer className="bg-cf-navyInk text-[#AEB8C7] pt-[62px] pb-[30px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid gap-9 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={logo}
              alt="Connect+Funda Mobile"
              className="h-[30px] mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-[.88rem] text-[#8A95A6] max-w-[34ch]">
              South Africa's education-first mobile network. Fuel your future.
              Live connected.
            </p>
          </div>
          <div>
            <h4 className="text-white font-display text-[.82rem] uppercase tracking-[.08em] mb-3.5">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/schools" className="text-[.88rem] hover:text-white">
                  Schools &amp; principals
                </Link>
              </li>
              <li>
                <Link to="/csr" className="text-[.88rem] hover:text-white">
                  CSR &amp; NPOs
                </Link>
              </li>
              <li>
                <Link to="/tertiary" className="text-[.88rem] hover:text-white">
                  Tertiary &amp; TVET
                </Link>
              </li>
              <li>
                <a
                  href={PLANS_URL}
                  target="_blank"
                  rel="noopener"
                  className="text-[.88rem] hover:text-white"
                >
                  Plans &amp; SIMs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display text-[.82rem] uppercase tracking-[.08em] mb-3.5">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-[.88rem] hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/about#team"
                  className="text-[.88rem] hover:text-white"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[.88rem] hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[.88rem] hover:text-white">
                  PAIA &amp; EULA
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display text-[.82rem] uppercase tracking-[.08em] mb-3.5">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[.88rem]">
              <li>{contact.address}</li>
              <li>
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@connectandfunda.co.za"
                  className="hover:text-white"
                >
                  info@connectandfunda.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[42px] pt-[22px] border-t border-white/30 flex justify-between flex-wrap gap-3 text-[.78rem] text-[#7A8493]">
          <span>© 2026 Connect+Funda Mobile. All rights reserved.</span>
          <span>
            Enthucate Tech (Pty) Ltd · Reg. 2022/777919/07 · trading as
            Connect+Funda Mobile
          </span>
        </div>
      </div>
    </footer>
  );
}
