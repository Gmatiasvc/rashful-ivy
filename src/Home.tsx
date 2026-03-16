import { useState, useEffect, type JSX } from "react";

import logoLarge from "./assets/logo.avif";
import heroBg from "./assets/hero.png";
import sectionSeparator from "./assets/sepatator.avif";
import iconCatering from "./assets/catering.png";
import iconFoodTruck from "./assets/icono_truck.svg";
import iconEmpanadas from "./assets/empanada.svg";
import aboutBg from "./assets/about.png";
import aboutSeparator from "./assets/about.svg";
import iconReserve from "./assets/llamita_1.png";
import footerBg from "./assets/footer.png";
import logoWhite from "./assets/logo_2.svg";

import {
  translations,
  type Language,
  type TranslationKeys,
} from "./data/translations";
import { ArrowDown, MapPin } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

// 1. Define a helper map for Language display names and flags

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

      <div className="">
        <NavbarItem text={t.nav_home} hrf="#hero" />
      </div>

      <div className="w-60 flex justify-end">
        <LanguageSwitcher setLang={setLang} currentLang={currentLang} t={t} />
      </div>
    </nav>
  );
};

function Hero({ t }: ComponentProps): JSX.Element {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const zoomScale: number = 1 + scrollY / 2500;

  return (
    <section id="hero">
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            transform: `scale(${zoomScale})`,
            transformOrigin: "center center",
            transition: "transform 0.1s ease-out",
            backgroundImage: `url(${heroBg})`,
          }}
        />
        <div className="relative z-10 text-center text-white p-8 ">
          <h1 className="text-8xl font-bold w-4xl">{t.hero_title}</h1>
          <h2 className="text-4xl font-bold pt-7">{t.hero_name}</h2>
          <p className="text-2xl pt-5">{t.hero_desc}</p>

          <div className="text-xl pt-16 flex justify-center">
            <div className="bg-red-600 hover:bg-white hover:text-red-600 transition-colors duration-200 w-fit py-2 px-24 rounded-full border-2 border-white">
              {t.hero_orderNow}
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white w-12 h-12" />
        </div>
      </div>
    </section>
  );
}

const Separator = () => {
  return (
    <div className="w-full flex justify-center py-4 ">
      <img
        src={sectionSeparator}
        className="h-12 object-cover w-full"
        alt="Separator"
      />
    </div>
  );
};

const ServiceCard = ({
  title,
  desc,
  img,
  color,
  more,
  hrf,
}: {
  title: string;
  desc: string;
  img: string;
  color: string;
  more: string;
  hrf: string;
}) => {
  return (
    <div className="grid grid-cols-1 justify-items-center content-center gap-4 align-top pb-16">
      <div>
        <img src={img} alt="" className="h-28 w-28" />
      </div>
      <div className="font-bold text-5xl py-2">
        <h2>{title}</h2>
      </div>
      <div className="text-xl w-64">
        <p className="text-center min-h-24">{desc} </p>
      </div>
      <div
        className="text-xl w-44 border-2 font-medium rounded-full py-2 flex"
        style={{ color: color }}
      >
        <a href={hrf} className="text-center w-full">
          {more}
        </a>
      </div>
    </div>
  );
};

const Services = ({ t }: ComponentProps) => {
  return (
    <section id="services">
      <div className="h-150 flex justify-around items-center">
        <ServiceCard
          title={t.service_catering_title}
          desc={t.service_catering_desc}
          img={iconCatering}
          color="#11ad1c"
          more={t.service_generic_more}
          hrf=""
        />
        <ServiceCard
          title={t.service_foodTruck_title}
          desc={t.service_foodTruck_desc}
          img={iconFoodTruck}
          color="#a124ae"
          more={t.service_generic_more}
          hrf=""
        />
        <ServiceCard
          title={t.service_empanadas_title}
          desc={t.service_empanadas_desc}
          img={iconEmpanadas}
          color="#fb8c03"
          more={t.service_generic_more}
          hrf=""
        />
      </div>
    </section>
  );
};

function About({ t }: ComponentProps): JSX.Element {
  return (
    <section id="about">
      <div
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className=" pl-32 w-full text-white">
          <div className="text-5xl font-bold ">
            <h1 className="py-2">{t.about_title1}</h1>
            <h1 className="py-2">{t.about_title2}</h1>
            <h1 className="py-2">{t.about_title3}</h1>
          </div>
          <div>
            <h2 className="text-3xl pt-6">{t.about_subtitle}</h2>
          </div>
          <div className="py-10">
            <img src={aboutSeparator} alt="" className="h-7" />
          </div>
          <div>
            <p className="text-2xl w-[40%]">{t.about_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const Reserve = ({ t }: ComponentProps) => {
  return (
    <section>
      <div className="h-140  justify-around justify-items-center items-center grid grid-cols-1">
        <div className="w-96 justify-around  justify-items-center items-center grid">
          <div>
            <img src={iconReserve} alt="" className="h-52 mb-6" />
          </div>
          <div className="text-2xl">
            <h2>{t.reserve_subtitle}</h2>
          </div>
          <div className="text-4xl font-bold text-center my-3">
            <h1>{t.reserve_title}</h1>
          </div>
          <div className="text-xl w-44 text-white bg-red-600 font-medium rounded-full py-2 text-center mt-7">
            {t.reserve_button}
          </div>
        </div>
      </div>
    </section>
  );
};
const ScheduleRow = ({ day, hours }: { day: string; hours: string }) => (
  <tr className="border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors duration-200">
    <td className="py-5 px-8 font-semibold text-gray-900">{day}</td>
    <td className="py-5 px-8 text-right text-gray-800">{hours}</td>
  </tr>
);

const Attention = ({ t }: ComponentProps) => {
  return (
    <div className="flex flex-col items-center py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">{t.schedule_title}</h1>
        <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="w-full max-w-4xl overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-red-600 text-white text-3xl font-bold">
            <tr>
              <th className="py-6 px-8">{t.schedule_day}</th>
              <th className="py-6 px-8 text-right">{t.schedule_hours}</th>
            </tr>
          </thead>

          <tbody className="text-2xl">
            <ScheduleRow
              day={t.schedule_monday_text}
              hours={t.schedule_monday_hours}
            />
            <ScheduleRow
              day={t.schedule_tuesday_text}
              hours={t.schedule_tuesday_hours}
            />
            <ScheduleRow
              day={t.schedule_wednesday_text}
              hours={t.schedule_wednesday_hours}
            />
            <ScheduleRow
              day={t.schedule_thursday_text}
              hours={t.schedule_thursday_hours}
            />
            <ScheduleRow
              day={t.schedule_friday_text}
              hours={t.schedule_friday_hours}
            />
            <ScheduleRow
              day={t.schedule_saturday_text}
              hours={t.schedule_saturday_hours}
            />
            <ScheduleRow
              day={t.schedule_sunday_text}
              hours={t.schedule_sunday_hours}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Location = ({ t }: ComponentProps) => {
  return (
    <div className="flex flex-col items-center pb-16 px-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-stretch gap-8 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
        <div className="w-full md:w-1/2 min-h-62.5 bg-gray-100 rounded-2xl overflow-hidden relative flex items-center justify-center border border-gray-200">
          <iframe
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.655447665243!2d7.244304476887553!3d47.1065199225725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e19293114d691%3A0x6b6e4e5e4a8f9c0!2sUntergasse%2028%2C%202502%20Biel!5e0!3m2!1sen!2sch!4v1710356400000!5m2!1sen!2sch"
            title="Google Maps Location"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center py-4 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.address_title}
          </h2>

          <div className="w-16 h-1.5 bg-red-600 rounded-full mb-8 mx-auto md:mx-0"></div>

          <div className="flex items-start justify-center md:justify-start gap-4 text-2xl text-gray-700 mb-10">
            <MapPin className="text-red-600 w-8 h-8 shrink-0 mt-1" />
            <p className="leading-relaxed">{t.address_address}</p>
          </div>

          <a
            href="https://maps.app.goo.gl/u1tCwzV5Fx7YAwhk8"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-red-600 hover:bg-black text-white text-xl font-medium rounded-full py-3 px-8 transition-colors duration-200 text-center w-fit mx-auto md:mx-0 shadow-md hover:shadow-lg"
          >
            {t.address_button}
          </a>
        </div>
      </div>
    </div>
  );
};

const InstagramTitle = ({ t }: ComponentProps) => {
  return <div className="h-25"></div>;
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
      rel="noreferrer"
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
              {t.footer_}
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
                rel="noreferrer"
                className="p-3 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
              >
                <SiInstagram size={25} />
              </a>
              <a
                href="https://www.facebook.com/inkachola.food"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
              >
                <SiFacebook size={25} />
              </a>
              <a
                href="https://www.tiktok.com/@inkacholafood"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
              >
                <SiTiktok size={20} />
              </a>
              <a
                href="https://wa.me/41764493542"
                target="_blank"
                rel="noreferrer"
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
              <a href="https://gmatiasvc.vercel.app">{t.footer_credits_gv}</a>
              <a href="https://valentinapajares.vercel.app">
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
    <div>
      <Navbar t={t} currentLang={lang} setLang={setLang} />
      <Hero t={t} />
      <Separator />
      <Services t={t} />
      <About t={t} />
      <Reserve t={t} />
      <Separator />
      <Attention t={t} />
      <Location t={t} />
      <WhatsAppButton t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
