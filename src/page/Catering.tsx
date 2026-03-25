import type { TranslationKeys } from "@/data/translations";

import entradaSide from "@/assets/entrada.jpeg";
import segundoSide from "@/assets/segundo.jpeg";
import postresSide from "@/assets/postres.jpeg";
import bebidaSide from "@/assets/bebida.jpeg";
import Separator from "./Separator";
import { CheckCircle2 } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

interface ComponentProps {
  t: TranslationKeys;
}

const Hero = ({ t }: ComponentProps) => {
  return (
    <div className="h-150 flex items-center justify-center">
      <div className="text-center w-[65%]" style={{ color: "#11ad1c" }}>
        <div className="text-7xl font-bold">{t.cat_hero_title}</div>
        <div className="text-4xl pt-6 pb-10">{t.cat_hero_subtitle}</div>
        <div className="text-xl text-black">{t.cat_hero_description}</div>
      </div>
    </div>
  );
};

const Item = ({ item }: { item: string }) => {
  return <div className="text-xl my-2">● {item}</div>;
};

const Block = ({
  image,
  title,
  items,
}: {
  image: string;
  title: string;
  items: string[];
}) => {
  return (
    <div className="w-175 min-h-120 flex">
      <div className="w-1/3 h-full ">
        <img src={image} alt="" className="object-cover h-full" />
      </div>
      <div className="h-full w-2/3 text-center">
        <h3 className="text-4xl font-medium m-3">{title}</h3>
        <div className="text-left ml-7">
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
    <div>
      <div className="flex justify-around m-10">
        <Block
          image={segundoSide}
          title={t.cat_cont_title_2}
          items={t.cat_cont_items_1}
        />
        <Block
          image={entradaSide}
          title={t.cat_cont_title_1}
          items={t.cat_cont_items_2}
        />
      </div>
      <div className="flex justify-around m-10">
        <Block
          image={postresSide}
          title={t.cat_cont_title_3}
          items={t.cat_cont_items_3}
        />
        <Block
          image={bebidaSide}
          title={t.cat_cont_title_4}
          items={t.cat_cont_items_4}
        />
      </div>
      <div className="text-xl text-center m-5">{t.cat_important_msg}</div>
    </div>
  );
};

const Tos = ({ t }: ComponentProps) => {
  return (
    <div className="m-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">{t.cat_tos_title}</h1>
        <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
      </div>
      <div className=" w-10/12 mx-auto ">
        <p className="text-2xl my-4">● {t.cat_tos_item_1}</p>
        <p className="text-2xl my-4">● {t.cat_tos_item_2}</p>
        <p className="text-2xl my-4">● {t.cat_tos_item_3}</p>
        <p className="text-2xl my-4">● {t.cat_tos_item_4}</p>
        <p className="text-2xl my-4">● {t.cat_tos_item_5}</p>
        <p className="text-2xl my-4">● {t.cat_tos_item_6}</p>
        <p className="text-2xl my-4">● {t.cat_tos_item_7}</p>
        <p className="text-2xl my-4">● {t.cat_tos_item_8}</p>
        <p className="text-2xl my-4">● {t.cat_tos_item_9}</p>
        <p className="text-2xl my-4">● {t.cat_tos_item_10}</p>
        <p className="text-2xl my-4">● {t.cat_tos_item_11}</p>
      </div>
    </div>
  );
};

const QuoteBanner = ({ t }: ComponentProps) => {
  return (
    <div className="flex justify-center py-16 px-4 bg-gray-50">
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
    <div>
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
