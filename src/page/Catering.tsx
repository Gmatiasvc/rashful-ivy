import type { TranslationKeys } from "@/data/translations";

import entradaSide from "@/assets/entrada.jpeg";
import segundoSide from "@/assets/segundo.jpeg";
import postresSide from "@/assets/postres.jpeg";
import bebidaSide from "@/assets/bebida.jpeg";
import Separator from "./Separator";
import { CheckCircle2, Utensils, Check } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

interface ComponentProps {
  t: TranslationKeys;
}

const Hero = ({ t }: ComponentProps) => {
  return (
    <div className="flex flex-col md:flex-row  bg-gray-50 mt-24">
      <div className="w-full md:w-1/2 flex items-center justify-center p-20  bg-red-600 text-white">
        <div className="max-w-xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            {t.cat_hero_title}
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-white/90">
            {t.cat_hero_subtitle}
          </h2>
          <p className="text-xl leading-relaxed text-white/80">
            {t.cat_hero_description}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative min-h-100">
        <img
          src={entradaSide}
          alt="Catering"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-red-600/20 to-transparent"></div>
      </div>
    </div>
  );
};

const Item = ({ item }: { item: string }) => {
  return (
    <div className="flex items-start gap-3 my-3 group">
      <Utensils className="text-red-600 shrink-0 mt-1" size={20} />
      <span className="text-xl text-gray-700 leading-relaxed group-hover:text-red-600 transition-colors">
        {item}
      </span>
    </div>
  );
};

const MenuCard = ({
  image,
  title,
  items,
}: {
  image: string;
  title: string;
  items: string[];
}) => {
  return (
    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 w-full max-w-3xl flex flex-col md:flex-row mx-auto border border-gray-100">
      <div className="w-full md:w-5/12 h-64 md:h-auto relative">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-7/12 p-8 lg:p-12 flex flex-col  bg-white">
        <h3 className="text-4xl font-bold text-gray-900 mb-6">{title}</h3>
        <div className="w-16 h-1.5 bg-red-600 rounded-full mb-8"></div>
        <div className="flex flex-col gap-2">
          {items.map((itemText, i) => (
            <Item key={i} item={itemText} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Content = ({ t }: ComponentProps) => {
  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-8/10 mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <MenuCard
            image={entradaSide}
            title={t.cat_cont_title_1}
            items={t.cat_cont_items_1}
          />
          <MenuCard
            image={segundoSide}
            title={t.cat_cont_title_2}
            items={t.cat_cont_items_2}
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <MenuCard
            image={postresSide}
            title={t.cat_cont_title_3}
            items={t.cat_cont_items_3}
          />
          <MenuCard
            image={bebidaSide}
            title={t.cat_cont_title_4}
            items={t.cat_cont_items_4}
          />
        </div>
        <div className="text-2xl text-center text-gray-600 font-medium mt-8 bg-gray-50 py-6 rounded-2xl max-w-3xl mx-auto w-full border border-gray-100">
          {t.cat_important_msg}
        </div>
      </div>
    </div>
  );
};

const TosCard = ({ item }: { item: string }) => {
  return (
    <div className="border border-gray-100 bg-gray-50 rounded-2xl p-8 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
        <Check className="text-red-600" size={24} />
      </div>
      <p className="text-xl text-gray-700 leading-relaxed">{item}</p>
    </div>
  );
};

const Tos = ({ t }: ComponentProps) => {
  const tosItems = [
    t.cat_tos_item_1,
    t.cat_tos_item_2,
    t.cat_tos_item_3,
    t.cat_tos_item_4,
    t.cat_tos_item_5,
    t.cat_tos_item_6,
    t.cat_tos_item_7,
    t.cat_tos_item_8,
    t.cat_tos_item_9,
    t.cat_tos_item_10,
    t.cat_tos_item_11,
  ];

  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.cat_tos_title}
          </h1>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tosItems.map((item, index) => (
            <TosCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const QuoteBanner = ({ t }: ComponentProps) => {
  return (
    <div className="flex justify-center py-24 px-4 bg-gray-50">
      <div className="w-full max-w-5xl rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        <div className="bg-red-600 text-white p-10 md:p-14 md:w-5/12 flex flex-col justify-center relative overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative z-10">
            {t.cat_quote_title}
          </h2>
          <div className="w-16 h-1.5 bg-white/30 rounded-full mb-8 relative z-10"></div>
          <a
            href={`https://wa.me/${t.footer_number?.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-black hover:text-white transition-colors duration-300 font-bold text-lg py-4 px-8 rounded-full w-fit shadow-md relative z-10"
          >
            <SiWhatsapp size={22} />
            {t.cat_quote_button}
          </a>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-50"></div>
        </div>
        <div className="p-10 md:p-14 md:w-7/12 flex flex-col justify-center bg-white">
          <ul className="space-y-6">
            {t.cat_quote_items.map((item, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <CheckCircle2
                  className="text-red-600 shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200"
                  size={26}
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

function Catering({ t }: ComponentProps) {
  return (
    <div className="bg-white">
      <Hero t={t} />
      <Content t={t} />
      <Separator />
      <Tos t={t} />
      <Separator />
      <QuoteBanner t={t} />
    </div>
  );
}

export default Catering;
