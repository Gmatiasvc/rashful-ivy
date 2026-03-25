import { useState } from "react";

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

import Home from "@/page/Home";
import Catering from "./page/Catering";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Empanadas from "./page/Empanadas";

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
    className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-left w-full"
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
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black shadow-lg hover:scale-105 transition-transform duration-200 border border-gray-400"
      >
        <span className="text-lg">{t.nav_language}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-gray-100 rounded-xl shadow-2xl border border-gray-400 min-w-37.5 z-50 overflow-hidden">
          <div className="flex flex-col p-1">
            <LangOption
              flag="🇪🇸"
              name="Español"
              onClick={() => handleLangChange("es")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const NavbarItem = ({ text, hrf }: { text: string; hrf: string }) => {
  return (
    <div className="text-xl hover:font-semibold hover:scale-105 transition-transform duration-200">
      <a href={hrf}>{text}</a>
    </div>
  );
};

const Navbar = ({ t, setLang, currentLang }: NavbarProps) => {
  return (
    <nav className="fixed top-0 h-24 flex justify-between items-center px-4 z-40 w-full bg-white">
      <div className="w-60 h-24 grid place-items-center">
        <img src={logoLarge} className="max-h-full" alt="Logo" />
      </div>

      <div className="flex flex-row gap-4">
        <NavbarItem text={t.nav_home} hrf="#hero" />
        <NavbarItem text={t.nav_catering} hrf="/catering" />
        <NavbarItem text={t.nav_foodTruck} hrf="#hero" />
        <NavbarItem text={t.nav_empanadas} hrf="#hero" />
      </div>

      <div className="w-60 flex justify-end">
        <LanguageSwitcher setLang={setLang} currentLang={currentLang} t={t} />
      </div>
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
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="text-gray-700 absolute -top-12 right-0 bg-white text-navy-900 text-xs font-bold py-2 px-4 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-200">
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
        className="h-100 w-full object-fill"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        <div className=" mx-12 grid grid-cols-1 md:grid-cols-4 gap-8 pt-44">
          <div className="col-span-1 md:col-span-1 w-48 ml-12">
            <img src={logoWhite} />
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-2xl">
              {t.footer_explore}
            </h4>
            <ul className="space-y-2 text-xl">
              <li>
                <a
                  href="#hero"
                  className="hover:text-red-600 transition-colors"
                >
                  {t.footer_home}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-red-600 transition-colors"
                >
                  {t.footer_services}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-red-600 transition-colors"
                >
                  {t.footer_about}
                </a>
              </li>
              <li>
                <a
                  href="#reserve"
                  className="hover:text-red-600 transition-colors"
                >
                  {t.footer_reserve}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-2xl">
              {t.footer_contact}
            </h4>
            <ul className="space-y-2 text-xl">
              <li>
                <a
                  href="tel:+41 76 449 35 42"
                  className="hover:text-white transition-colors"
                >
                  {t.footer_number}
                </a>
              </li>
              <li>
                <a
                  href="mailto:inkachola@gmx.ch"
                  className="hover:text-white transition-colors"
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
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/inkacholafood/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
              >
                <SiInstagram size={25} />
              </a>
              <a
                href="https://www.facebook.com/inkachola.food"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
              >
                <SiFacebook size={25} />
              </a>
              <a
                href="https://www.tiktok.com/@inkacholafood"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
              >
                <SiTiktok size={20} />
              </a>
              <a
                href="https://wa.me/41764493542"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
              >
                <SiWhatsapp size={20} />
              </a>
            </div>
            <div className="text-xl py-3">
              <p>{t.footer_copy1}</p>
              <p>{t.footer_copy2}</p>
            </div>
            <div>
              <a
                href="https://gmatiasvc.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer_credits_gv}
              </a>
              <a
                href="https://valentinapajares.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
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
  const [lang, setLang] = useState<Language>("es");

  const t = translations[lang] || translations["es"];

  return (
    <BrowserRouter>
      {/* 2. Things outside of <Routes> stay on EVERY page (like Nav and Footer) */}
      <Navbar t={t} currentLang={lang} setLang={setLang} />
      
      {/* 3. The Routes decide which page component to load */}
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/catering" element={<Catering t={t} />} />
        <Route path="/empanadas" element={<Empanadas t={t} />} />
      </Routes>
      <WhatsAppButton t={t} />
      <Footer t={t} />
    </BrowserRouter>
  );
}

export default App;
