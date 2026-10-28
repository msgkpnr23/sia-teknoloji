
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  SiaHero,
  SiaProduct,
  SiaSteps,
  SiaSecurity,
} from "./components/SiaSections.jsx";

import {
  SiaFeatures,
  SiaDepartments,
  SiaCommunication,
  SiaWhy,
} from "./components/SiaExtra.jsx";

import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import Akreditasyon from "./pages/Akreditasyon.jsx";
import Fuar from "./pages/Fuar.jsx";
import yeniresim from "./assets/yeniresim.png";
import "./App.css";

// Türkçe ve İngilizce metinler
const translations = {
  tr: {
    product: "Ürün",
    howItWorks: "Nasıl Çalışır",
    security: "Güvenlik",
    contact: "İletişim",
    demo: "Demo Talep Et",
    accreditation: "Akreditasyon",
    fair: "Fuar & B2B",
    menu: "Menüyü aç/kapat",
    backToTop: "Sayfanın başına dön",
    turkish: "Türkçe",
    english: "English",
    logoAlt: "Sia Teknoloji Logosu",
  },

  en: {
    product: "Product",
    howItWorks: "How It Works",
    security: "Security",
    contact: "Contact",
    demo: "Request a Demo",
    accreditation: "Accreditation",
    fair: "Fair & B2B",
    menu: "Open/close menu",
    backToTop: "Back to top",
    turkish: "Turkish",
    english: "English",
    logoAlt: "Sia Technology Logo",
  },
};

function ScrollTopButton({ language }) {
  const [visible, setVisible] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? "is-visible" : ""}`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label={t.backToTop}
      title={t.backToTop}
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        aria-hidden="true"
      >
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

function Home({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[language];

  const close = () => {
    setMenuOpen(false);
  };

  const changeLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
    close();
  };

  const navItems = [
    { href: "#urun", label: t.product },
    { href: "#nasil-calisir", label: t.howItWorks },
    { href: "#guvenlik", label: t.security },
    { href: "#iletisim", label: t.contact },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        {/* Logo */}
        <a
          href="#top"
          className="logo"
          onClick={close}
          aria-label="Sia Technology Home"
        >
          <img
            src={yeniresim}
            alt={t.logoAlt}
            className="logo-image"
          />
        </a>

        {/* Masaüstü menüsü */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Dil seçimi */}
        <div
          className="language-switcher"
          aria-label="Language selection"
        >
          <button
            type="button"
            className={language === "tr" ? "active" : ""}
            onClick={() => changeLanguage("tr")}
            aria-pressed={language === "tr"}
          >
            TR
          </button>

          <button
            type="button"
            className={language === "en" ? "active" : ""}
            onClick={() => changeLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
        </div>

        {/* Demo butonu */}
        <a
          href="#iletisim"
          className="nav-button"
          onClick={close}
        >
          {t.demo} <span>↗</span>
        </a>

        {/* Akreditasyon sayfası */}
        <Link
          to="/akreditasyon"
          className="nav-button-ghost"
          onClick={close}
        >
          {t.accreditation} <span>→</span>
        </Link>

        {/* Fuar sayfası */}
        <Link
          to="/fuar"
          className="nav-button-ghost"
          onClick={close}
        >
          {t.fair} <span>→</span>
        </Link>

        {/* Mobil menü butonu */}
        <button
          type="button"
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={t.menu}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobil menü */}
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
              >
                {item.label}
              </a>
            ))}

            <Link to="/akreditasyon" onClick={close}>
              {t.accreditation}
            </Link>

            <Link to="/fuar" onClick={close}>
              {t.fair}
            </Link>

            {/* Mobil dil seçimi */}
            <div className="mobile-language-switcher">
              <button
                type="button"
                className={language === "tr" ? "active" : ""}
                onClick={() => changeLanguage("tr")}
                aria-pressed={language === "tr"}
              >
                {t.turkish}
              </button>

              <button
                type="button"
                className={language === "en" ? "active" : ""}
                onClick={() => changeLanguage("en")}
                aria-pressed={language === "en"}
              >
                {t.english}
              </button>
            </div>
          </div>
        )}
      </nav>



      <main id="top">
        <SiaHero language={language} />
        <div id="urun">
          <SiaProduct language={language} />
        </div>
        <div id="nasil-calisir">
          <SiaSteps language={language} />
        </div>
        <SiaFeatures language={language} />
        <SiaDepartments language={language} />
        <div id="guvenlik">
          <SiaSecurity language={language} />
        </div>
        <SiaCommunication language={language} />
        <SiaWhy language={language} />
      </main>



      {/* Sayfa başına dön */}
      <ScrollTopButton language={language} />
    </div>
  );
}

export default function App() {
  // Kaydedilmiş dili al; yoksa Türkçe kullan.
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");

    return savedLanguage === "en" ? "en" : "tr";
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            language={language}
            setLanguage={setLanguage}
          />
        }
      />



      <Route path="/akreditasyon" element={<Akreditasyon language={language} />} />
      <Route path="/fuar" element={<Fuar language={language} />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy language={language} />} />
      <Route path="/terms-of-service" element={<TermsOfService language={language} />} />


    </Routes>
  );
}
