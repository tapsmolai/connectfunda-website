import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/site/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

import SchoolsLanding from "./components/schools/SchoolsLanding";
import TertiaryLanding from "./components/tertiary/TertiaryLanding";
import NpoLanding from "./components/npos/NpoLanding";

/**
 * Connect+Funda corporate SHELL — Home + About + the shared header/footer,
 * with a slot for each finished landing page.
 *
 *   /            Home (the "lobby")
 *   /about       About / leadership / governance & compliance
 *   /schools     ← mount the finished Schools landing page here
 *   /csr         ← mount the finished NPO & CSR landing page here
 *   /tertiary    ← mount the finished Tertiary & TVET landing page here
 *
 * Plans links out to the existing plan suite (see SiteHeader/SiteFooter).
 *
 * TO INTEGRATE a finished page, replace its <LandingSlot .../> below with the
 * real page. If it uses the shared LandingPage engine:
 *     import LandingPage from './components/LandingPage';
 *     import { schoolsConfig } from './config/schools.config';
 *     <Route path="schools" element={<LandingPage config={schoolsConfig} embedded />} />
 * If it's a self-contained component:
 *     import SchoolsLanding from './pages/SchoolsLanding';
 *     <Route path="schools" element={<SchoolsLanding />} />
 * Either way the page should NOT render its own top nav once mounted (the
 * global <SiteHeader> handles navigation).
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="schools" element={<SchoolsLanding />} />
          <Route path="csr" element={<NpoLanding />} />
          <Route path="tertiary" element={<TertiaryLanding />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
