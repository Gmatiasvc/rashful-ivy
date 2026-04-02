import { useEffect, useRef, type JSX } from "react";

import heroBg from "@/assets/hero.png";
import iconCatering from "@/assets/catering.png";
import iconFoodTruck from "@/assets/icono_truck.svg";
import iconEmpanadas from "@/assets/empanada.svg";
import aboutBg from "@/assets/about.png";
import aboutSeparator from "@/assets/about.svg";
import iconReserve from "@/assets/llamita_1.png";

import { type TranslationKeys } from "@/data/translations";
import { ArrowDown, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import Separator from "@/page/Separator";

interface ComponentProps {
  t: TranslationKeys;
}

function Hero({ t }: ComponentProps): JSX.Element {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            const zoomScale: number = 1 + window.scrollY / 2500;
            bgRef.current.style.transform = `scale(${zoomScale})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance and direct DOM mutation
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero">
      <div className="relative min-h-[50vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            transform: `scale(1)`,
            transformOrigin: "center center",
            transition: "transform 0.1s ease-out",
            backgroundImage: `url(${heroBg})`,
          }}
        />
        <div className="relative z-10 text-center text-white p-8 ">
          <h1 className="text-5xl md:text-8xl font-bold w-full max-w-4xl">
            {t.hero_title}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold pt-7">{t.hero_name}</h2>
          <p className="text-xl md:text-2xl pt-5">{t.hero_desc}</p>

          <div className="text-xl pt-16 flex justify-center">
            <div className="bg-red-600 hover:bg-white hover:text-red-600 transition-colors duration-200 w-full md:w-fit py-2 px-8 md:px-24 rounded-full border-2 border-white text-center">
              {t.hero_orderNow}
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="text-white w-12 h-12" />
        </div>
      </div>
    </section>
  );
}

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
  hrf?: string;
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
      {hrf && (
        <div
          className="text-xl w-44 border-2 font-medium rounded-full py-2 flex hover:scale-105 transition-transform"
          style={{ color: color, borderColor: color }}
        >
          {hrf.startsWith("/") ? (
            <Link to={hrf} className="text-center w-full">
              {more}
            </Link>
          ) : (
            <a
              href={hrf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full"
            >
              {more}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const Services = ({ t }: ComponentProps) => {
  return (
    <section id="services">
      <div className="h-auto py-12 md:h-150 flex flex-col md:flex-row justify-around items-center gap-8">
        <ServiceCard
          title={t.service_catering_title}
          desc={t.service_catering_desc}
          img={iconCatering}
          color="#11ad1c"
          more={t.service_generic_more}
          hrf="/catering"
        />
        <ServiceCard
          title={t.service_foodTruck_title}
          desc={t.service_foodTruck_desc}
          img={iconFoodTruck}
          color="#a124ae"
          more={t.service_generic_more}
          hrf="/foodtruck"
        />
        <ServiceCard
          title={t.service_empanadas_title}
          desc={t.service_empanadas_desc}
          img={iconEmpanadas}
          color="#fb8c03"
          more={t.service_generic_more}
          hrf="/empanadas"
        />
      </div>
    </section>
  );
};

function About({ t }: ComponentProps): JSX.Element {
  return (
    <section id="about">
      <div
        className="relative min-h-[50vh] md:h-screen py-16 md:py-0 w-full bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="px-8 md:pl-32 w-full text-white">
          <div className="text-3xl md:text-5xl font-bold ">
            <h1 className="py-2">{t.about_title1}</h1>
            <h1 className="py-2">{t.about_title2}</h1>
            <h1 className="py-2">{t.about_title3}</h1>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl pt-6">{t.about_subtitle}</h2>
          </div>
          <div className="py-10">
            <img src={aboutSeparator} alt="" className="h-7" />
          </div>
          <div>
            <p className="text-xl md:text-2xl w-full md:w-[40%] text-justify">
              {t.about_desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const Reserve = ({ t }: ComponentProps) => {
  return (
    <section id="reserve">
      <div className="h-auto py-16 md:h-140 justify-around justify-items-center items-center grid grid-cols-1">
        <div className="w-full max-w-sm px-4 justify-around justify-items-center items-center grid">
          <div>
            <img src={iconReserve} alt="" className="h-52 mb-6" />
          </div>
          <div className="text-xl md:text-2xl">
            <h2>{t.reserve_subtitle}</h2>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-center my-3">
            <h1>{t.reserve_title}</h1>
          </div>
          <a href="https://wa.me/41764493542?text=" target="_blank" rel="noopener noreferrer">
            <div className="text-xl w-44 text-white bg-red-600 font-medium rounded-full py-2 text-center mt-7 hover:scale-110 transition-all">
              {t.reserve_button}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
const ScheduleRow = ({
  day,
  hours1,
  hours2,
}: {
  day: string;
  hours1: string;
  hours2: string;
}) => (
  <tr className="border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors duration-200">
    <td className="py-5 px-8 font-semibold text-gray-900">{day}</td>
    <td className="py-5 px-8 text-right text-gray-800">
      {hours1}{" "}
      {hours2 && (
        <>
          <br className="md:hidden" />
          <span className="hidden md:inline"> | </span>
          {hours2}
        </>
      )}
    </td>
  </tr>
);

const Attention = ({ t }: ComponentProps) => {
  return (
    <div className="flex flex-col items-center py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          {t.schedule_title}
        </h1>
        <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="w-full max-w-4xl overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-white">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-75">
            <thead className="bg-red-600 text-white text-xl md:text-3xl font-bold">
              <tr>
                <th className="py-6 px-4 md:px-8 whitespace-nowrap">
                  {t.schedule_day}
                </th>
                <th className="py-6 px-4 md:px-8 text-right whitespace-nowrap">
                  {t.schedule_hours}
                </th>
              </tr>
            </thead>

            <tbody className="text-lg md:text-2xl">
              <ScheduleRow
                day={t.schedule_monday_text}
                hours1={t.schedule_monday_hours_morning}
                hours2={t.schedule_monday_hours_evening}
              />
              <ScheduleRow
                day={t.schedule_tuesday_text}
                hours1={t.schedule_tuesday_hours_morning}
                hours2={t.schedule_tuesday_hours_evening}
              />
              <ScheduleRow
                day={t.schedule_wednesday_text}
                hours1={t.schedule_wednesday_hours_morning}
                hours2={t.schedule_wednesday_hours_evening}
              />
              <ScheduleRow
                day={t.schedule_thursday_text}
                hours1={t.schedule_thursday_hours_morning}
                hours2={t.schedule_thursday_hours_evening}
              />
              <ScheduleRow
                day={t.schedule_friday_text}
                hours1={t.schedule_friday_hours_morning}
                hours2={t.schedule_friday_hours_evening}
              />
              <ScheduleRow
                day={t.schedule_saturday_text}
                hours1={t.schedule_saturday_hours_morning}
                hours2={t.schedule_saturday_hours_evening}
              />
              <ScheduleRow
                day={t.schedule_sunday_text}
                hours1={t.schedule_sunday_hours_morning}
                hours2={t.schedule_sunday_hours_evening}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Location = ({ t }: ComponentProps) => {
  return (
    <div className="flex flex-col items-center pb-16 px-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-stretch gap-8 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
        <div className="w-full md:w-1/2 min-h-75 md:min-h-62.5 bg-gray-100 rounded-2xl overflow-hidden relative flex items-center justify-center border border-gray-200">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.address_title}
          </h2>

          <div className="w-16 h-1.5 bg-red-600 rounded-full mb-8 mx-auto md:mx-0"></div>

          <div className="flex items-start justify-center md:justify-start gap-4 text-xl md:text-2xl text-gray-700 mb-10">
            <MapPin className="text-red-600 w-8 h-8 shrink-0 mt-1" />
            <p className="leading-relaxed">{t.address_address}</p>
          </div>

          <a
            href="https://maps.app.goo.gl/u1tCwzV5Fx7YAwhk8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-black text-white text-xl font-medium rounded-full py-3 px-8 transition-colors duration-200 text-center w-fit mx-auto md:mx-0 shadow-md hover:shadow-lg"
          >
            {t.address_button}
          </a>
        </div>
      </div>
    </div>
  );
};

function Home({ t }: ComponentProps) {
  return (
    <div>
      <Hero t={t} />
      <Separator />
      <Services t={t} />
      <About t={t} />
      <Reserve t={t} />
      <Separator />
      <Attention t={t} />
      <Location t={t} />
    </div>
  );
}

export default Home;
