import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SiaHero, SiaProduct, SiaSteps, SiaSecurity, } from "./SiaSections.jsx";
import { SiaFeatures, SiaDepartments, SiaCommunication, SiaWhy, } from "./SiaExtra.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import TermsOfService from "../pages/TermsOfService.jsx";
import yeniresim from "./assets/yeniresim.png";
import Akreditasyon from "../pages/Akreditasyon.jsx";
import Fuar from "../pages/Fuar.jsx";
import "./App.css";

const NAV = [
  { href: "#urun", label: "Ürün" },
  { href: "#nasil-calisir", label: "Nasıl Çalışır" },
  { href: "#guvenlik", label: "Güvenlik" },
  { href: "#iletisim", label: "İletişim" },
];

function ScrollTopButton({ threshold = 400 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? "is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Sayfanın başına dön"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path
          d="M6 14l6-6 6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#anasayfa" className="logo" onClick={close}>
          <img src={yeniresim} alt="Sia Logo" className="logo-image" />
        </a>

        <div className="nav-links">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#iletisim"
          className="nav-button"
          onClick={close}
        >
          Demo Talep Et <span>↗</span>
        </a>
        <Link to="/akreditasyon" className="nav-button-ghost" onClick={close}>
          Akreditasyon <span>→</span>
        </Link>
        <Link to="/fuar" className="nav-button-ghost" onClick={close}>
          Fuar & B2B <span>→</span>
        </Link>

        <button
          type="button"
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menüyü aç/kapat"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={close}>
                {item.label}
              </a>
            ))}
            <Link to="/akreditasyon" onClick={close}>Akreditasyon</Link>,
            <Link to="/fuar" onClick={close}>Fuar & B2B</Link>
          </div>

        )}
      </nav>

      <main id="top">
        <SiaHero />

        <div id="urun">
          <SiaProduct />
        </div>

        <div id="nasil-calisir">
          <SiaSteps />
        </div>

        <SiaFeatures />

        <SiaDepartments />

        <div id="guvenlik">
          <SiaSecurity />
        </div>

        <SiaCommunication />

        <SiaWhy />

      </main>



      <ScrollTopButton />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <LangSwitch />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/akreditasyon" element={<Akreditasyon />} />
        <Route path="/fuar" element={<Fuar />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </LangProvider>
  );
}