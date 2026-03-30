export type Language = "es" | "en";

const enTranslations: TranslationKeys = {
  nav_language: "🇺🇸 English",

  //PAGE: Home.tsx

  nav_home: "About Us",
  nav_catering: "Catering",
  nav_foodTruck: "Food Truck",
  nav_empanadas: "Empanadas",
  nav_contacto: "Contact",

  hero_title: "True Peruvian Flavor",
  hero_name: ">> INKA CHOLA <<",
  hero_desc: "Peruvian Restaurant",
  hero_orderNow: "Order Now",

  service_generic_more: "See more +",

  service_catering_title: "Catering",
  service_catering_desc: "Starters • Mains • Desserts • Drinks",

  service_foodTruck_title: "Food Truck",
  service_foodTruck_desc: "Treat yourself with our variety of empanadas.",

  service_empanadas_title: "Empanadas",
  service_empanadas_desc:
    "Delicious Beef, Chicken, and Vegetarian Empanadas.",

  about_title1: "Fresh.",
  about_title2: "Authentic.",
  about_title3: "Delicious.",
  about_subtitle: "Bringing Peruvian gastronomy to Switzerland.",
  about_desc:
    "The richness of its lands and cultural diversity make Peru a country of exquisite and varied gastronomy. Every city has a typical dish with an unmatched flavor. Thousands of agricultural products and dozens of living cultures that have shared a single territory for centuries have ended up creating an infinite offering for the palate.",

  reserve_subtitle: "Order online",
  reserve_title: "Peruvian Food or Desserts",
  reserve_button: "Order now",

  instagram_title: "Follow us on Instagram",
  instagram_more: "See more",

  address_title: "Find us",
  address_address: "Untergasse 28, 2502, Biel-Bienne, Switzerland",
  address_button: "Get directions",

  schedule_title: "Opening Hours",
  schedule_day: "Day",
  schedule_hours: "Hours",
  schedule_monday_text: "Monday",
  schedule_monday_hours_morning: "closed",
  schedule_monday_hours_evening: "",
  schedule_tuesday_text: "Tuesday",
  schedule_tuesday_hours_morning: "closed",
  schedule_tuesday_hours_evening: "",
  schedule_wednesday_text: "Wednesday",
  schedule_wednesday_hours_morning: "11 a.m. - 2 p.m.",
  schedule_wednesday_hours_evening: "6 p.m. - 10 p.m.",
  schedule_thursday_text: "Thursday",
  schedule_thursday_hours_morning: "11 a.m. - 2 p.m.",
  schedule_thursday_hours_evening: "6 p.m. - 10 p.m.",
  schedule_friday_text: "Friday",
  schedule_friday_hours_morning: "11 a.m. - 2 p.m.",
  schedule_friday_hours_evening: "6 p.m. - 10 p.m.",
  schedule_saturday_text: "Saturday",
  schedule_saturday_hours_morning: "11 a.m. - 2 p.m.",
  schedule_saturday_hours_evening: "6 p.m. - 10 p.m.",
  schedule_sunday_text: "Sunday",
  schedule_sunday_hours_morning: "11 a.m. - 5 p.m.",
  schedule_sunday_hours_evening: "",

  whatsapp_text: "Write us on WhatsApp!",

  footer_explore: "Explore",
  footer_home: "Home",
  footer_services: "Services",
  footer_about: "About Us",
  footer_reserve: "Reserve",
  footer_contact: "Contact Us",
  footer_number: "+41 76 449 35 42",
  footer_email: "inkachola@gmx.ch",
  footer_address1: "Untergasse 28",
  footer_address2: "2502 Biel-Bienne Switzerland",
  footer_follow: "Follow us",
  footer_copy1: "© 2025 INKA CHOLA",
  footer_copy2: "All rights reserved",
  footer_credits_gv: "Designed by Gerardo Venegas",
  footer_credits_vp: " and Valentina Pajares",

  // PAGE: Catering.tsx

  cat_hero_title: "Catering",
  cat_hero_subtitle: "Starters • Mains • Desserts • Drinks",
  cat_hero_description:
    "We offer a wide variety of Peruvian dish options from all regions of Peru, such as the coast, the highlands, and the jungle. Discover some of our incredible ancient dishes, from fresh ceviche to rich traditional desserts",

  cat_cont_title_1: "Starters",
  cat_cont_items_1: [
    "Anticuchos",
    "Causa rellena (tuna, chicken, or prawns)",
    "Fish Ceviche",
    "Fish Tiradito",
    "Papa a la huancaina",
    "Papa de tres cremas (huancaina, ocopa, rocoto)",
    "Chicken Tamales",
    "Quinoa Salad",
    "Green Salad",
    "Russian Salad",
  ],

  cat_cont_title_2: "Mains",
  cat_cont_items_2: [
    "Aji de pollo",
    "Arroz con pollo",
    "Arroz con mariscos",
    "Chicharrón de chancho (yuca and salsa criolla)",
    "Seco de carne with beans",
    "Lomo saltado",
  ],

  cat_cont_title_3: "Desserts",
  cat_cont_items_3: [
    "Alfajores",
    "Mazamorra",
    "Tres leches",
    "Lucuma Mousse",
    "Mixed Fruits",
  ],

  cat_cont_title_4: "Drinks*",
  cat_cont_items_4: [
    "Inca Kola",
    "Chicha morada",
    "Pisco sour",
    "Lemonade",
    "Mixed Drinks",
  ],

  cat_important_msg: "*Buffet cost does not include drinks.",

  cat_tos_title: "Catering Service",
  cat_tos_item_1:
    "We will base our service on the exact quantity of food, drinks, and staff indicated in the final quote.",

  cat_tos_item_2:
    "The service time will be as agreed in the final quote (event duration).",

  cat_tos_item_3:
    "The catering service will start at the time stipulated in the final quote.",

  cat_tos_item_4:
    "We need an assembly space with a water and electricity supply to work properly.",

  cat_tos_item_5:
    "The proposal includes disposable tableware, which is of very good quality and very elegant.",

  cat_tos_item_6:
    "The menu is subject to the proposal sent via email, and any last-minute changes must be reflected in the proposal at least 48 hours in advance.",

  cat_tos_item_7:
    "The service will be confirmed via email after leaving a 30% deposit in the account number shown at the bottom of the page. The remaining 70% of the total price must be paid before the start of the service.",

  cat_tos_item_8:
    "Once the catering service is confirmed, modifications to the time and/or date cannot be made.",

  cat_tos_item_9:
    "If you wish to cancel the service, 10% of the total price will be retained for administrative expenses.",

  cat_tos_item_10:
    "Mobility cost is referential and may vary depending on where the event will be held.",

  cat_tos_item_11: "The quote does not include waiter service.",

  cat_quote_title: "Request a Quote",
  cat_quote_button: "Contact Us",
  cat_quote_items: [
    "Reservations two weeks in advance.",
    "A price will be given depending on requirements.",
    "Reservations for a maximum of 15 to 50 people.",
    "Tableware service."
  ],

  // PAGE: Empanadas.tsx

  emp_title_hero: "Our Empanadas",
  emp_desc_hero: "The secret to our empanadas is love and the authentic Peruvian recipe. Baked to perfection with just the right touch of seasoning.",

  emp_menu_title: "Our Variety",
  emp_menu_items: [
    "Beef Empanada: Juicy knife-cut beef with onion, hard-boiled egg, raisins, and olives.",
    "Chicken Empanada: Soft shredded chicken breast in a traditional Peruvian spice dressing.",
    "Vegetarian Empanada: Delicious mix of fresh seasonal vegetables.",
  ],

  emp_prep_title: "Authentic Peruvian Preparation",
  emp_prep_items: [
    "Baked daily to guarantee freshness and crispy texture.",
    "Traditional homemade dough with that characteristic sweet touch from Peru.",
    "Fillings prepared with authentic Peruvian chili peppers.",
  ],

  emp_cta_title: "Craving Empanadas?",
  emp_cta_desc: "Order them now to enjoy at home or request them for your next Catering event.",
  emp_cta_button: "Order via WhatsApp",

  // PAGE: FoodTruck.tsx
  ft_hero_title: "Food Truck",
  ft_hero_desc: "INKA CHOLA's food truck is in two locations; check our route and enjoy our Peruvian empanadas.",
  ft_location_1_name: "WALSERPLATZ",
  ft_location_1_status: "... paused",
  ft_location_2_name: "ESPLANADE",
  ft_location_2_status: "... paused",
  ft_find_us_title: "Follow us to find us",
  ft_find_us_desc: "Follow our social media (Instagram/TikTok) to know the current location of our food truck.",
  ft_contact_button: "Contact for Events",
};


const esTranslations = {
  nav_language: "🇪🇸 Español",

  //PAGE: Home.tsx

  nav_home: "Nosotros",
  nav_catering: "Catering",
  nav_foodTruck: "Food Truck",
  nav_empanadas: "Empanadas",
  nav_contacto: "Contacto",

  hero_title: "La verdadera sazón peruana",
  hero_name: ">> INKA CHOLA <<",
  hero_desc: "Restaurante Peruano",
  hero_orderNow: "Pedir Ahora",

  service_generic_more: "Ver más +",

  service_catering_title: "Catering",
  service_catering_desc: "Entradas • Segundos • Postres • Bebidas",

  service_foodTruck_title: "Food Truck",
  service_foodTruck_desc: "Engríete con la variedad de empanadas.",

  service_empanadas_title: "Empanadas",
  service_empanadas_desc:
    "Deliciosas Empanadas de carne de res, pollo,  vegetarianas.",

  about_title1: "Fresco.",
  about_title2: "Auténtico.",
  about_title3: "Delicioso.",
  about_subtitle: "Llevamos la gastronomía del Perú a Suiza.",
  about_desc:
    "La riqueza de sus tierras y su diversidad cultural hacen de Perú un país de exquisita y variada gastronomía. Cada ciudad tiene un plato típico con un sabor inigualable. Miles de productos del campo y decenas de culturas vivas que han compartido por siglos un solo territorio, terminaron creando una infinita oferta para el paladar.",

  reserve_subtitle: "Pedir online",
  reserve_title: "Comida o Postres Peruanos",
  reserve_button: "Pedir ahora",

  instagram_title: "Síguenos en Instagram",
  instagram_more: "Ver más",

  address_title: "Ubíquenos",
  address_address: "Untergasse 28, 2502, Biel-Bienne, Suiza",
  address_button: "Obtenga direcciones",

  schedule_title: "Horario de atención",
  schedule_day: "Dia",
  schedule_hours: "Horas",
  schedule_monday_text: "Lunes",
  schedule_monday_hours_morning: "cerrado",
  schedule_monday_hours_evening: "",
  schedule_tuesday_text: "Martes",
  schedule_tuesday_hours_morning: "cerrado",
  schedule_tuesday_hours_evening: "",
  schedule_wednesday_text: "Miércoles",
  schedule_wednesday_hours_morning: "11 a.m. - 2 p.m.",
  schedule_wednesday_hours_evening: "6 p.m. - 10 p.m.",
  schedule_thursday_text: "Jueves",
  schedule_thursday_hours_morning: "11 a.m. - 2 p.m.",
  schedule_thursday_hours_evening: "6 p.m. - 10 p.m.",
  schedule_friday_text: "Viernes",
  schedule_friday_hours_morning: "11 a.m. - 2 p.m.",
  schedule_friday_hours_evening: "6 p.m. - 10 p.m.",
  schedule_saturday_text: "Sábado",
  schedule_saturday_hours_morning: "11 a.m. - 2 p.m.",
  schedule_saturday_hours_evening: "6 p.m. - 10 p.m.",
  schedule_sunday_text: "Domingo",
  schedule_sunday_hours_morning: "11 a.m. - 5 p.m.",
  schedule_sunday_hours_evening: "",

  whatsapp_text: "¡Escríbenos por WhatsApp!",

  footer_explore: "Explora",
  footer_home: "Pagina principal",
  footer_services: "Servicios",
  footer_about: "Nosotros",
  footer_reserve: "Reserva",
  footer_contact: "Contactanos",
  footer_number: "+41 76 449 35 42",
  footer_email: "inkachola@gmx.ch",
  footer_address1: "Untergasse 28",
  footer_address2: "2502 Biel-Bienne Suiza",
  footer_follow: "Síguenos",
  footer_copy1: "© 2025 INKA CHOLA",
  footer_copy2: "Todos los derechos reservados",
  footer_credits_gv: "Diseñado por Gerardo Venegas",
  footer_credits_vp: " y Valentina Pajares",

  // PAGE: Catering.tsx

  cat_hero_title: "Catering",
  cat_hero_subtitle: "Entradas • Segundos • Postres • Bebidas",
  cat_hero_description:
    "Ofrecemos una gran variedad de opciones de platos peruanos de todas las regiones del Perú, como la costa, la sierra y la selva. Descubre algunos de nuestros increíbles platos milenarios, desde el ceviche fresco hasta los ricos postres tradicionales",

  cat_cont_title_1: "Entradas",
  cat_cont_items_1: [
    "Anticuchos",
    "Causa rellena (atún, pollo o langostinos)",
    "Ceviche de pescado",
    "Tiradito de Pescado",
    "Papa a la huancaina",
    "Papa de tres cremas (huancaina, ocopa, rocoto)",
    "Tamales de pollo",
    "Ensalada de Quinoa",
    "Ensalada verde",
    "Ensalada rusa",
  ],

  cat_cont_title_2: "Segundos",
  cat_cont_items_2: [
    "Aji de pollo",
    "Arroz con pollo",
    "Arroz con mariscos",
    "Chicharrón de chancho (yuca y salsa criolla)",
    "Seco de carne con frijoles",
    "Lomo saltado",
  ],

  cat_cont_title_3: "Postres",
  cat_cont_items_3: [
    "Alfajores",
    "Mazamorra",
    "Tres leches",
    "Mousse de lucuma",
    "Frutas variadas",
  ],

  cat_cont_title_4: "Bebidas*",
  cat_cont_items_4: [
    "Inca Kola",
    "Chicha morada",
    "Pisco sour",
    "Limonada",
    "Bebidas variadas",
  ],

  cat_important_msg: "*El costo del buffet no incluye las bebidas.",

  cat_tos_title: "Servicio de Catering",
  cat_tos_item_1:
    "Nos basaremos a la cantidad exacta, tanto de comida, bebida y personal, señalada en el presupuesto final.",

  cat_tos_item_2:
    "El tiempo de atención del servicio será según lo acordado en el presupuesto final (duración del evento).",

  cat_tos_item_3:
    "Se comenzará con el servicio de catering según la hora estipulada en el presupuesto final (hora).",

  cat_tos_item_4:
    "Necesitamos un espacio de montaje con toma de agua y electricidad para poder trabajar adecuadamente.",

  cat_tos_item_5:
    "En la propuesta está incluido el menaje descartable que es de muy buena calidad y muy elegante.",

  cat_tos_item_6:
    "El menú queda sujeto a la propuesta que se envía vía mail y cualquier cambio de última hora tiene que quedar reflejado en la propuesta con un mínimo de 48 horas de antelación.",

  cat_tos_item_7:
    "El servicio quedará confirmado vía mail y dejando una señal del cóctel del 30% en el numero de cuenta que figura en la parte inferior de la página. El pago restante de 70% del precio total, se tendrá que realizar antes del inicio del servicio.",

  cat_tos_item_8:
    "Una vez confirmado el servicio de catering, no se podrá realizar modificaciones de hora y/o fecha.",

  cat_tos_item_9:
    "En caso desee cancelar el servicio, se le retendrá 10% del precio total por gastos administrativos.",

  cat_tos_item_10:
    "El costo de movilidad es referencial, puede variar de acuerdo al lugar en donde se va a realizar el evento.",

  cat_tos_item_11: "El presupuesto no incluye el servicio de camarero.",

  cat_quote_title: "Solicita un presupuesto",
  cat_quote_button: "Contáctanos",
  cat_quote_items: [
    "Reservaciones con dos semanas de anticipación.",
    "Dependiendo de los requerimientos se le dará un precio.",
    "Reservaciones para 15 a 50 personas máximo.",
    "Servicio de menaje."
  ],

  
  // PAGE: Empanadas.tsx

  emp_title_hero: "Nuestras Empanadas",
  emp_desc_hero: "El secreto de nuestras empanadas está en el amor y la auténtica receta peruana. Horneadas a la perfección con los toques justos de sazón.",

  emp_menu_title: "Nuestra Variedad",
  emp_menu_items: [
    "Empanada de Carne: Jugosa carne de res picada a cuchillo con cebolla, huevo duro, pasas y aceitunas.",
    "Empanada de Pollo: Suave pechuga de pollo deshilachada en un aderezo tradicional peruano con especias.",
    "Empanada Vegetariana: Deliciosa mezcla de vegetales frescos de temporada.",
  ],

  emp_prep_title: "Auténtica Preparación Peruana",
  emp_prep_items: [
    "Horneadas diariamente para garantizar su frescura y textura crujiente.",
    "Masa tradicional casera con ese toque dulce característico de Perú.",
    "Rellenos preparados con auténticos ajíes peruanos.",
  ],

  emp_cta_title: "¿Antojo de Empanadas?",
  emp_cta_desc: "Pídelas ahora para disfrutar en casa o solicítalas para tu próximo evento de Catering.",
  emp_cta_button: "Pedir por WhatsApp",

  // PAGE: FoodTruck.tsx
  ft_hero_title: "Food Truck",
  ft_hero_desc: "El food truck de INKA CHOLA está en dos ubicaciones; consulta nuestra ruta y disfruta de nuestras empanadas peruanas.",
  ft_location_1_name: "WALSERPLATZ",
  ft_location_1_status: "... en pausa",
  ft_location_2_name: "ESPLANADE",
  ft_location_2_status: "... en pausa",
  ft_find_us_title: "Síguenos para encontrarnos",
  ft_find_us_desc: "Sigue nuestras redes sociales (Instagram/TikTok) para conocer la ubicación actual de nuestro food truck.",
  ft_contact_button: "Contacto para Eventos",
};

export type TranslationKeys = typeof esTranslations;

export const translations: Record<Language, TranslationKeys> = {
  es: esTranslations,
  en: enTranslations,
};
