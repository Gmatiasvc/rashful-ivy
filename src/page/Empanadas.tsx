import type { TranslationKeys } from "@/data/translations";

import empanadaImg from "@/assets/empanada.avif";
import empanadaSvg from "@/assets/empanada.svg";
import entradaImg from "@/assets/entrada.jpeg";
import { CheckCircle2, MessageCircle } from "lucide-react";
import Separator from "./Separator";

interface ComponentProps {
  t: TranslationKeys;
}

const Hero = ({ t }: ComponentProps) => {
  return (
    <div className="h-96 flex flex-col md:flex-row items-center justify-center bg-gray-50 mt-20  overflow-hidden relative">
      <div className="md:w-1/2 z-10 flex flex-col justify-center px-24">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-sm">
          {t.emp_title_hero}
        </h1>
        <div className="w-24 h-2 bg-red-600 rounded-full mb-6"></div>
        <p className="text-xl text-gray-800 leading-relaxed max-w-xl">
          {t.emp_desc_hero}
        </p>
      </div>
      <div className="md:w-1/2 h-full absolute md:relative right-0 opacity-20 md:opacity-100 flex items-center justify-center">
        <img
          src={empanadaImg}
          alt="Empanadas Peruanas"
          className="object-cover h-full w-full max-h-96 mask-image-gradient md:mask-none"
          style={{
             WebkitMaskImage: "linear-gradient(to right, transparent, black 30%)",
             maskImage: "linear-gradient(to right, transparent, black 30%)"
          }}
        />
      </div>
    </div>
  );
};

const MenuGrid = ({ t }: ComponentProps) => {
  return (
    <div className="py-20 px-6 md:px-10 bg-white">
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-4">
          <img src={empanadaSvg} alt="" className="h-12 w-12 text-red-600" />
          {t.emp_menu_title}
        </h2>
        <div className="w-24 h-1.5 bg-red-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.emp_menu_items.map((item, index) => {
          const [title, desc] = item.split(":");
          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:scale-105 transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-4">{title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed grow">
                {desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PrepBlock = ({ t }: ComponentProps) => {
  return (
    <div className="flex justify-center py-20 px-4 md:px-10 bg-gray-50">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 h-80 md:h-auto relative">
          <img
            src={entradaImg}
            alt="Preparación"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
        <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {t.emp_prep_title}
          </h2>
          <div className="w-16 h-1.5 bg-red-600 rounded-full mb-8"></div>
          <ul className="space-y-6">
            {t.emp_prep_items.map((item, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <CheckCircle2
                  className="text-red-600 shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200"
                  size={28}
                />
                <span className="text-xl text-gray-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const BottomCTA = ({ t }: ComponentProps) => {
  return (
    <div className="py-24 px-6 flex justify-center bg-white">
      <div className="max-w-4xl w-full bg-red-600 rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-6">{t.emp_cta_title}</h2>
          <p className="text-2xl mb-10 text-red-50 max-w-2xl leading-relaxed">
            {t.emp_cta_desc}
          </p>
          <a
            href={`https://wa.me/${t.footer_number?.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-gray-900 hover:text-white transition-all duration-300 font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <MessageCircle size={26} />
            {t.emp_cta_button}
          </a>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-700 rounded-full blur-3xl opacity-60"></div>
      </div>
    </div>
  );
};

function Empanadas({ t }: ComponentProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero t={t} />
      <MenuGrid t={t} />
      <Separator />
      <PrepBlock t={t} />
      <BottomCTA t={t} />
    </div>
  );
}

export default Empanadas;