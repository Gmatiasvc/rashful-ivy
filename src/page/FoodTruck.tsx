import { useEffect, useRef, type JSX } from "react";
import { MapPin } from "lucide-react";

import heroBg from "@/assets/foodTruck.avif";
import iconFoodTruck from "@/assets/icono_truck.svg";

import { type TranslationKeys } from "@/data/translations";
import Separator from "@/page/Separator";
import { SiInstagram, SiTiktok, SiWhatsapp } from "@icons-pack/react-simple-icons";

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
          // ⚡ Bolt: Only update DOM styles if the hero is visible in the viewport
          if (bgRef.current && window.scrollY <= window.innerHeight) {
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
    <section id="ft-hero">
      <div className="relative min-h-[50vh] md:h-screen py-24 md:py-0 w-full overflow-hidden flex items-center justify-center bg-gray-900">
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-40"
          style={{
            transform: `scale(1)`,
            transformOrigin: "center center",
            transition: "transform 0.1s ease-out",
            backgroundImage: `url(${heroBg})`,
          }}
        />
        <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-white text-left md:pr-12">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-tight">{t.ft_hero_title}</h1>
            <p className="text-xl md:text-3xl leading-relaxed font-light">{t.ft_hero_desc}</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="bg-white/10 p-8 md:p-12 rounded-full backdrop-blur-sm border border-white/20">
              <img src={iconFoodTruck} alt="Food Truck Icon" className="w-48 h-48 md:w-96 md:h-96 object-contain filter drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection({ t }: ComponentProps): JSX.Element {
  return (
    <section id="ft-location" className="relative py-24 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-red-50 p-6 rounded-full mb-8">
              <MapPin className="text-red-600 w-12 h-12 md:w-16 md:h-16" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.ft_location_1_name}</h2>
            <div className="w-16 h-1.5 bg-red-600 rounded-full mb-8"></div>
            <p className="text-xl md:text-3xl font-medium text-gray-500">{t.ft_location_1_status}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-red-50 p-6 rounded-full mb-8">
              <MapPin className="text-red-600 w-12 h-12 md:w-16 md:h-16" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.ft_location_2_name}</h2>
            <div className="w-16 h-1.5 bg-red-600 rounded-full mb-8"></div>
            <p className="text-xl md:text-3xl font-medium text-gray-500">{t.ft_location_2_status}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ t }: ComponentProps): JSX.Element {
  return (
    <section id="ft-cta" className="py-24 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-5xl bg-red-600 rounded-3xl shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-bl-full opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-800 rounded-tr-full opacity-50 mix-blend-multiply"></div>

        <div className="relative z-10 p-8 md:p-24 flex flex-col items-center text-center text-white">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">{t.ft_find_us_title}</h2>
          <p className="text-xl md:text-3xl mb-12 max-w-3xl leading-relaxed opacity-90">
            {t.ft_find_us_desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full sm:w-auto">
            <a
              href="https://www.instagram.com/rashfulivyfood/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full text-xl md:text-2xl font-bold hover:bg-gray-100 focus-visible:ring-4 focus-visible:ring-white focus-visible:outline-none transition-colors duration-300 shadow-lg"
            >
              <SiInstagram className="w-6 h-6 md:w-8 md:h-8" />
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@rashfulivyfood"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xl md:text-2xl font-bold hover:bg-gray-900 focus-visible:ring-4 focus-visible:ring-white focus-visible:outline-none transition-colors duration-300 shadow-lg"
            >
              <SiTiktok className="w-6 h-6 md:w-8 md:h-8" />
              TikTok
            </a>
          </div>

          <div className="w-full border-t border-white/20 pt-12 flex flex-col items-center">
            <a
              href="https://wa.me/41764493542"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto gap-4 bg-purple-700 hover:bg-purple-800 focus-visible:ring-4 focus-visible:ring-white focus-visible:outline-none text-white px-8 py-5 rounded-full text-xl md:text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-purple-500"
            >
              <SiWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
              {t.ft_contact_button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FoodTruck({ t }: ComponentProps): JSX.Element {
  return (
    <div>
      <Hero t={t} />
      <Separator />
      <LocationSection t={t} />
      <CTASection t={t} />
    </div>
  );
}
