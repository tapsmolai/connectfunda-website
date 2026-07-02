import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader";

const partnerRoutes = ["/schools", "/tertiary", "/csr"];

export default function Layout() {
  const { pathname } = useLocation();

  const isPartnerPage = partnerRoutes.some((route) =>
    pathname.startsWith(route),
  );

  return (
    <div className="font-body text-cf-ink antialiased">
      {!isPartnerPage && <SiteHeader />}
      <Outlet />
    </div>
  );
}
