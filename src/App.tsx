import { useState, lazy, Suspense, useEffect } from "react";

import logoLarge from "./assets/logo.avif";
import footerBg from "./assets/footer.png";
import logoWhite from "./assets/logo_2.svg";

import {
  translations,
  type Language,
  type TranslationKeys,
} from "./data/translations";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import { Menu, X } from "lucide-react";

const importHome = () => import("@/page/Home");
const importCatering = () => import("./page/Catering");
const importEmpanadas = () => import("./page/Empanadas");
const importFoodTruck = () => import("./page/FoodTruck");

const Home = lazy(importHome);
const Catering = lazy(importCatering);
const Empanadas = lazy(importEmpanadas);
const FoodTruck = lazy(importFoodTruck);
import { BrowserRouter, Route, Routes, Link, NavLink, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// ScrollToHash component to handle hash scrolling on route change or initial load
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // 🛡️ Sentinel: Sanitize hash input to prevent DOM clobbering/injection vulnerabilities
      const id = hash.replace('#', '').replace(/[^a-zA-Z0-9-_]/g, '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

interface ComponentProps {
  t: TranslationKeys;
}

interface NavbarProps extends ComponentProps {
  setLang: (lang: Language) => void;
  currentLang: Language;
}

const LangOption = ({
  flag,
  name,
  onClick,
}: {
  flag: string;
  name: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-300 focus-visible:bg-gray-300 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none transition-colors text-left w-full"
  >
    <span className="text-xl">{flag}</span>
    <span className="font-medium">{name}</span>
  </button>
);

const LanguageSwitcher = ({ setLang, t }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLangChange = (lang: Language) => {
    setLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black shadow-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none transition-transform duration-200 border border-gray-400"
      >
        <span className="text-lg">{t.nav_language}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 md:right-0 bg-gray-100 rounded-xl shadow-2xl border border-gray-400 min-w-37.5 z-50 overflow-hidden">
          <div className="grid grid-cols-1 gap-2  p-1">
            <LangOption
              flag="🇪🇸"
              name="Español"
              onClick={() => handleLangChange("es")}
            />
            <LangOption
              flag="🇬🇧"
              name="English"
              onClick={() => handleLangChange("en")}
            />
            <LangOption
              flag="🇫🇷"
              name="Français"
              onClick={() => handleLangChange("fr")}
            />
            <LangOption
              flag="🇩🇪"
              name="Deutsch"
              onClick={() => handleLangChange("de")}
            />
            <LangOption
              flag="🇮🇹"
              name="Italiano"
              onClick={() => handleLangChange("it")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const NavbarItem = ({
  text,
  hrf,
  onClick,
  onPrefetch,
}: {
  text: string;
  hrf: string;
  onClick?: () => void;
  onPrefetch?: () => void;
}) => {
  return (
    <div className="text-xl hover:scale-105 transition-transform duration-200">
      <NavLink
        to={hrf}
        end={hrf === "/"}
        onClick={onClick}
        onMouseEnter={onPrefetch}
        onFocus={onPrefetch}
        className={({ isActive }) =>
          `block w-full py-2 rounded-lg focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none ${isActive ? "font-semibold text-red-600" : "hover:font-semibold"}`
        }
      >
        {text}
      </NavLink>
    </div>
  );
};

const Navbar = ({ t, setLang, currentLang }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 h-16 md:h-24 flex justify-between items-center px-4 z-40 w-full bg-white shadow-sm">
      <div className="w-60 flex md:justify-center">
        <img src={logoLarge} className="max-h-11 md:max-h-20" alt="Logo" />
      </div>

      <div className="hidden md:flex flex-row gap-8">
        <NavbarItem text={t.nav_home} hrf="/" onPrefetch={importHome} />
        <NavbarItem text={t.nav_catering} hrf="/catering" onPrefetch={importCatering} />
        <NavbarItem text={t.nav_foodTruck} hrf="/foodtruck" onPrefetch={importFoodTruck} />
        <NavbarItem text={t.nav_empanadas} hrf="/empanadas" onPrefetch={importEmpanadas} />
      </div>

      <div className="hidden md:flex w-60 justify-end">
        <LanguageSwitcher setLang={setLang} currentLang={currentLang} t={t} />
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-xl flex flex-col p-6 gap-6 md:hidden border-t border-gray-100">
          <NavbarItem
            text={t.nav_home}
            hrf="/"
            onClick={closeMobileMenu}
            onPrefetch={importHome}
          />
          <NavbarItem
            text={t.nav_catering}
            hrf="/catering"
            onClick={closeMobileMenu}
            onPrefetch={importCatering}
          />
          <NavbarItem
            text={t.nav_foodTruck}
            hrf="/foodtruck"
            onClick={closeMobileMenu}
            onPrefetch={importFoodTruck}
          />
          <NavbarItem
            text={t.nav_empanadas}
            hrf="/empanadas"
            onClick={closeMobileMenu}
            onPrefetch={importEmpanadas}
          />
          <div className=" pt-4 border-t border-gray-200">
            <LanguageSwitcher
              setLang={setLang}
              currentLang={currentLang}
              t={t}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

const WhatsAppButton = ({ t }: ComponentProps) => {
  const phoneNumber = "41764493542";
  const message = "";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] focus-visible:ring-4 focus-visible:ring-green-500 focus-visible:outline-none text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label={t.whatsapp_text}
    >
      <div className="text-gray-700 absolute -top-12 right-0 bg-white text-navy-900 text-xs font-bold py-2 px-4 rounded shadow-xl opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-200">
        {t.whatsapp_text}
      </div>
      <SiWhatsapp className="w-8 h-8 fill-current" />
    </a>
  );
};

const Footer = ({ t }: ComponentProps) => {
  return (
    <footer className="text-gray-300 ">
      <div
        className="h-auto w-full bg-cover pb-10 md:pb-6 "
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        <div className="mx-4 md:mx-12 grid grid-cols-1 md:grid-cols-4 gap-8 pt-44 ">
          <div className="col-span-1 md:col-span-1 w-48 mx-auto md:ml-12 mb-8 md:mb-0 hidden md:block">
            {/* ⚡ Bolt: Defer offscreen image loading to improve LCP */}
            <img src={logoWhite} alt="Logo" loading="lazy" />
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2 md:mb-4 uppercase tracking-wider text-2xl">
              {t.footer_explore}
            </h4>
            <ul className="md:space-y-2 text-xl">
              <li>
                <Link
                  to="/#hero"
                  className="hover:text-red-600 transition-colors block py-1 md:py-0"
                >
                  {t.footer_home}
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="hover:text-red-600 transition-colors block py-1 md:py-0"
                >
                  {t.footer_services}
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="hover:text-red-600 transition-colors block py-1 md:py-0"
                >
                  {t.footer_about}
                </Link>
              </li>
              <li>
                <Link
                  to="/#reserve"
                  className="hover:text-red-600 transition-colors block py-1 md:py-0"
                >
                  {t.footer_reserve}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2 md:mb-4 uppercase tracking-wider text-2xl">
              {t.footer_contact}
            </h4>
            <ul className="md:space-y-2 text-xl">
              <li>
                <a
                  href="tel:+41 76 449 35 42"
                  className="hover:text-white transition-colors block py-0.5 md:py-0"
                >
                  {t.footer_number}
                </a>
              </li>
              <li>
                <a
                  href="mailto:inkachola@gmx.ch"
                  className="hover:text-white transition-colors block py-0.5 md:py-0"
                >
                  {t.footer_email}
                </a>
              </li>
              <li className="pt-2">
                {t.footer_address1}
                <br />
                {t.footer_address2}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-2xl">
              {t.footer_follow}
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/inkacholafood/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram size={25} />
              </a>
              <a
                href="https://www.facebook.com/inkachola.food"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook size={25} />
              </a>
              <a
                href="https://www.tiktok.com/@inkacholafood"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none transition-colors"
                aria-label="TikTok"
              >
                <SiTiktok size={25} />
              </a>
            </div>
            <div className="text-xl py-2 md:py-3">
              <p>{t.footer_copy1}</p>
              <p>{t.footer_copy2}</p>
            </div>
            <div className="flex flex-col  mt-2 md:mt-4">
              <a
                href="https://gmatiasvc.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block  hover:text-white transition-colors"
              >
                {t.footer_credits_gv}
              </a>
              <a
                href="https://valentinapajares.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block  hover:text-white transition-colors"
              >
                {t.footer_credits_vp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [lang, setLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem("app_lang");
    // 🛡️ Sentinel: Validate localStorage input against allowlist to prevent type bypassing
    const validLangs: Language[] = ["es", "en", "fr", "de", "it"];
    return (validLangs.includes(savedLang as Language) ? (savedLang as Language) : "en");
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("app_lang", newLang);
  };

  const t = translations[lang] || translations["en"];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      {/* 2. Things outside of <Routes> stay on EVERY page (like Nav and Footer) */}
      <Navbar t={t} currentLang={lang} setLang={handleSetLang} />

      {/* 3. The Routes decide which page component to load */}
      <Suspense fallback={<div className="h-500">Loading...</div>}>
        <div className="mt-16 md:mt-0">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/catering" element={<Catering t={t} />} />
            <Route path="/empanadas" element={<Empanadas t={t} />} />
            <Route path="/foodtruck" element={<FoodTruck t={t} />} />
          </Routes>
        </div>
      </Suspense>
      <WhatsAppButton t={t} />
      <Footer t={t} />
    </BrowserRouter>
  );
}

export default App;
