export type Language = "es" | "en" | "fr" | "de" | "it";

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

const enTranslations: TranslationKeys = {
  nav_language: "🇬🇧 English",

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
  service_catering_desc: "Starters • Main Courses • Desserts • Drinks",

  service_foodTruck_title: "Food Truck",
  service_foodTruck_desc: "Treat yourself to a variety of empanadas.",

  service_empanadas_title: "Empanadas",
  service_empanadas_desc:
    "Delicious beef, chicken, and vegetarian empanadas.",

  about_title1: "Fresh.",
  about_title2: "Authentic.",
  about_title3: "Delicious.",
  about_subtitle: "Bringing the gastronomy of Peru to Switzerland.",
  about_desc:
    "The richness of its lands and cultural diversity make Peru a country with an exquisite and varied gastronomy. Every city has a typical dish with an unparalleled flavor. Thousands of countryside products and dozens of living cultures that have shared a single territory for centuries ended up creating an infinite offering for the palate.",

  reserve_subtitle: "Order online",
  reserve_title: "Peruvian Food or Desserts",
  reserve_button: "Order now",

  instagram_title: "Follow us on Instagram",
  instagram_more: "See more",

  address_title: "Locate Us",
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

  whatsapp_text: "Write to us on WhatsApp!",

  footer_explore: "Explore",
  footer_home: "Home Page",
  footer_services: "Services",
  footer_about: "About Us",
  footer_reserve: "Reservation",
  footer_contact: "Contact Us",
  footer_number: "+41 76 449 35 42",
  footer_email: "inkachola@gmx.ch",
  footer_address1: "Untergasse 28",
  footer_address2: "2502 Biel-Bienne Switzerland",
  footer_follow: "Follow Us",
  footer_copy1: "© 2025 INKA CHOLA",
  footer_copy2: "All rights reserved",
  footer_credits_gv: "Designed by Gerardo Venegas",
  footer_credits_vp: " and Valentina Pajares",

  // PAGE: Catering.tsx

  cat_hero_title: "Catering",
  cat_hero_subtitle: "Starters • Main Courses • Desserts • Drinks",
  cat_hero_description:
    "We offer a wide variety of Peruvian dish options from all regions of Peru, such as the coast, the highlands, and the jungle. Discover some of our incredible ancient dishes, from fresh ceviche to rich traditional desserts.",

  cat_cont_title_1: "Starters",
  cat_cont_items_1: [
    "Anticuchos",
    "Causa rellena (tuna, chicken, or prawns)",
    "Fish Ceviche",
    "Fish Tiradito",
    "Papa a la huancaina",
    "Papa de tres cremas (huancaina, ocopa, rocoto)",
    "Chicken tamales",
    "Quinoa salad",
    "Green salad",
    "Russian salad",
  ],

  cat_cont_title_2: "Main Courses",
  cat_cont_items_2: [
    "Aji de pollo",
    "Arroz con pollo",
    "Arroz con mariscos",
    "Pork Chicharrón (with yuca and salsa criolla)",
    "Beef Seco with beans",
    "Lomo saltado",
  ],

  cat_cont_title_3: "Desserts",
  cat_cont_items_3: [
    "Alfajores",
    "Mazamorra",
    "Tres leches",
    "Lucuma mousse",
    "Assorted fruits",
  ],

  cat_cont_title_4: "Drinks*",
  cat_cont_items_4: [
    "Inca Kola",
    "Chicha morada",
    "Pisco sour",
    "Lemonade",
    "Assorted drinks",
  ],

  cat_important_msg: "*The cost of the buffet does not include drinks.",

  cat_tos_title: "Catering Service",
  cat_tos_item_1:
    "We will base our service on the exact quantity of food, drinks, and staff specified in the final quote.",

  cat_tos_item_2:
    "The service time will be as agreed upon in the final quote (event duration).",

  cat_tos_item_3:
    "The catering service will begin at the time stipulated in the final quote (time).",

  cat_tos_item_4:
    "We need an assembly space with water and electricity supply to be able to work properly.",

  cat_tos_item_5:
    "The proposal includes high-quality and very elegant disposable tableware.",

  cat_tos_item_6:
    "The menu is subject to the proposal sent via email, and any last-minute changes must be reflected in the proposal at least 48 hours in advance.",

  cat_tos_item_7:
    "The service will be confirmed via email upon leaving a 30% deposit in the account number listed at the bottom of the page. The remaining 70% of the total price must be paid before the start of the service.",

  cat_tos_item_8:
    "Once the catering service is confirmed, no modifications to the time and/or date can be made.",

  cat_tos_item_9:
    "If you wish to cancel the service, 10% of the total price will be retained for administrative expenses.",

  cat_tos_item_10:
    "The transportation cost is referential and may vary depending on the location where the event will be held.",

  cat_tos_item_11: "The quote does not include waiter service.",

  cat_quote_title: "Request a Quote",
  cat_quote_button: "Contact Us",
  cat_quote_items: [
    "Reservations required two weeks in advance.",
    "A price will be provided depending on requirements.",
    "Reservations for a maximum of 15 to 50 people.",
    "Tableware service."
  ],

  // PAGE: Empanadas.tsx

  emp_title_hero: "Our Empanadas",
  emp_desc_hero: "The secret of our empanadas lies in love and the authentic Peruvian recipe. Baked to perfection with just the right touch of seasoning.",

  emp_menu_title: "Our Variety",
  emp_menu_items: [
    "Beef Empanada: Juicy knife-cut beef with onions, hard-boiled egg, raisins, and olives.",
    "Chicken Empanada: Soft shredded chicken breast in a traditional Peruvian dressing with spices.",
    "Vegetarian Empanada: Delicious mix of fresh seasonal vegetables.",
  ],

  emp_prep_title: "Authentic Peruvian Preparation",
  emp_prep_items: [
    "Baked daily to guarantee their freshness and crispy texture.",
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
  ft_find_us_desc: "Follow our social networks (Instagram/TikTok) to know the current location of our food truck.",
  ft_contact_button: "Contact for Events",
};

const frTranslations: TranslationKeys = {
  nav_language: "🇫🇷 Français",

  //PAGE: Home.tsx
  nav_home: "À propos",
  nav_catering: "Traiteur",
  nav_foodTruck: "Food Truck",
  nav_empanadas: "Empanadas",
  nav_contacto: "Contact",

  hero_title: "La véritable saveur péruvienne",
  hero_name: ">> INKA CHOLA <<",
  hero_desc: "Restaurant Péruvien",
  hero_orderNow: "Commander",

  service_generic_more: "Voir plus +",

  service_catering_title: "Traiteur",
  service_catering_desc: "Entrées • Plats principaux • Desserts • Boissons",

  service_foodTruck_title: "Food Truck",
  service_foodTruck_desc: "Faites-vous plaisir avec une variété d'empanadas.",

  service_empanadas_title: "Empanadas",
  service_empanadas_desc: "Délicieuses empanadas au bœuf, au poulet et végétariennes.",

  about_title1: "Frais.",
  about_title2: "Authentique.",
  about_title3: "Délicieux.",
  about_subtitle: "Nous apportons la gastronomie du Pérou en Suisse.",
  about_desc: "La richesse de ses terres et sa diversité culturelle font du Pérou un pays à la gastronomie exquise et variée. Chaque ville a un plat typique avec une saveur inégalée. Des milliers de produits de la campagne et des dizaines de cultures vivantes qui ont partagé un seul territoire pendant des siècles ont fini par créer une offre infinie pour le palais.",

  reserve_subtitle: "Commander en ligne",
  reserve_title: "Plats ou Desserts Péruviens",
  reserve_button: "Commander maintenant",

  instagram_title: "Suivez-nous sur Instagram",
  instagram_more: "Voir plus",

  address_title: "Trouvez-nous",
  address_address: "Untergasse 28, 2502, Biel-Bienne, Suisse",
  address_button: "Obtenir l'itinéraire",

  schedule_title: "Heures d'ouverture",
  schedule_day: "Jour",
  schedule_hours: "Heures",
  schedule_monday_text: "Lundi",
  schedule_monday_hours_morning: "fermé",
  schedule_monday_hours_evening: "",
  schedule_tuesday_text: "Mardi",
  schedule_tuesday_hours_morning: "fermé",
  schedule_tuesday_hours_evening: "",
  schedule_wednesday_text: "Mercredi",
  schedule_wednesday_hours_morning: "11h00 - 14h00",
  schedule_wednesday_hours_evening: "18h00 - 22h00",
  schedule_thursday_text: "Jeudi",
  schedule_thursday_hours_morning: "11h00 - 14h00",
  schedule_thursday_hours_evening: "18h00 - 22h00",
  schedule_friday_text: "Vendredi",
  schedule_friday_hours_morning: "11h00 - 14h00",
  schedule_friday_hours_evening: "18h00 - 22h00",
  schedule_saturday_text: "Samedi",
  schedule_saturday_hours_morning: "11h00 - 14h00",
  schedule_saturday_hours_evening: "18h00 - 22h00",
  schedule_sunday_text: "Dimanche",
  schedule_sunday_hours_morning: "11h00 - 17h00",
  schedule_sunday_hours_evening: "",

  whatsapp_text: "Écrivez-nous sur WhatsApp !",

  footer_explore: "Explorer",
  footer_home: "Page d'accueil",
  footer_services: "Services",
  footer_about: "À propos",
  footer_reserve: "Réservation",
  footer_contact: "Contactez-nous",
  footer_number: "+41 76 449 35 42",
  footer_email: "inkachola@gmx.ch",
  footer_address1: "Untergasse 28",
  footer_address2: "2502 Biel-Bienne Suisse",
  footer_follow: "Suivez-nous",
  footer_copy1: "© 2025 INKA CHOLA",
  footer_copy2: "Tous droits réservés",
  footer_credits_gv: "Conçu par Gerardo Venegas",
  footer_credits_vp: " et Valentina Pajares",

  // PAGE: Catering.tsx
  cat_hero_title: "Traiteur",
  cat_hero_subtitle: "Entrées • Plats principaux • Desserts • Boissons",
  cat_hero_description: "Nous offrons une grande variété de plats péruviens de toutes les régions du Pérou, comme la côte, les montagnes et la jungle. Découvrez quelques-uns de nos incroyables plats millénaires, du ceviche frais aux riches desserts traditionnels.",

  cat_cont_title_1: "Entrées",
  cat_cont_items_1: [
    "Anticuchos",
    "Causa rellena (thon, poulet ou crevettes)",
    "Ceviche de poisson",
    "Tiradito de poisson",
    "Papa a la huancaina",
    "Papa de tres cremas (huancaina, ocopa, rocoto)",
    "Tamales au poulet",
    "Salade de quinoa",
    "Salade verte",
    "Salade russe",
  ],

  cat_cont_title_2: "Plats principaux",
  cat_cont_items_2: [
    "Aji de pollo",
    "Arroz con pollo",
    "Arroz con mariscos",
    "Chicharrón de porc (avec yuca et salsa criolla)",
    "Seco de bœuf aux haricots",
    "Lomo saltado",
  ],

  cat_cont_title_3: "Desserts",
  cat_cont_items_3: [
    "Alfajores",
    "Mazamorra",
    "Tres leches",
    "Mousse de lucuma",
    "Fruits assortis",
  ],

  cat_cont_title_4: "Boissons*",
  cat_cont_items_4: [
    "Inca Kola",
    "Chicha morada",
    "Pisco sour",
    "Limonade",
    "Boissons assorties",
  ],

  cat_important_msg: "*Le coût du buffet n'inclut pas les boissons.",

  cat_tos_title: "Service Traiteur",
  cat_tos_item_1: "Nous nous baserons sur la quantité exacte de nourriture, de boissons et de personnel indiquée dans le devis final.",
  cat_tos_item_2: "Le temps de service sera tel que convenu dans le devis final (durée de l'événement).",
  cat_tos_item_3: "Le service traiteur commencera à l'heure stipulée dans le devis final (heure).",
  cat_tos_item_4: "Nous avons besoin d'un espace de montage avec prise d'eau et d'électricité pour pouvoir travailler correctement.",
  cat_tos_item_5: "La proposition inclut une vaisselle jetable de très bonne qualité et très élégante.",
  cat_tos_item_6: "Le menu est soumis à la proposition envoyée par e-mail et tout changement de dernière minute doit être reflété dans la proposition au moins 48 heures à l'avance.",
  cat_tos_item_7: "Le service sera confirmé par e-mail après le versement d'un acompte de 30 % sur le numéro de compte figurant au bas de la page. Les 70 % restants du prix total devront être payés avant le début du service.",
  cat_tos_item_8: "Une fois le service traiteur confirmé, aucune modification d'heure ou de date ne pourra être effectuée.",
  cat_tos_item_9: "Si vous souhaitez annuler le service, 10 % du prix total seront retenus pour frais administratifs.",
  cat_tos_item_10: "Le coût de déplacement est indicatif et peut varier en fonction du lieu où se déroulera l'événement.",
  cat_tos_item_11: "Le devis n'inclut pas le service de serveur.",

  cat_quote_title: "Demander un devis",
  cat_quote_button: "Contactez-nous",
  cat_quote_items: [
    "Réservations nécessaires deux semaines à l'avance.",
    "Un prix vous sera communiqué en fonction de vos besoins.",
    "Réservations pour un maximum de 15 à 50 personnes.",
    "Service de vaisselle."
  ],

  // PAGE: Empanadas.tsx
  emp_title_hero: "Nos Empanadas",
  emp_desc_hero: "Le secret de nos empanadas réside dans l'amour et l'authentique recette péruvienne. Cuites à la perfection avec la juste touche d'assaisonnement.",

  emp_menu_title: "Notre Variété",
  emp_menu_items: [
    "Empanada au Bœuf : Viande de bœuf hachée juteuse avec oignons, œuf dur, raisins secs et olives.",
    "Empanada au Poulet : Blanc de poulet effiloché dans une marinade traditionnelle péruvienne aux épices.",
    "Empanada Végétarienne : Délicieux mélange de légumes frais de saison.",
  ],

  emp_prep_title: "Préparation Péruvienne Authentique",
  emp_prep_items: [
    "Cuites tous les jours pour garantir leur fraîcheur et leur texture croustillante.",
    "Pâte traditionnelle maison avec cette petite touche sucrée caractéristique du Pérou.",
    "Garnitures préparées avec d'authentiques piments péruviens.",
  ],

  emp_cta_title: "Envie d'Empanadas ?",
  emp_cta_desc: "Commandez-les maintenant pour les déguster à la maison ou demandez-les pour votre prochain événement Traiteur.",
  emp_cta_button: "Commander via WhatsApp",

  // PAGE: FoodTruck.tsx
  ft_hero_title: "Food Truck",
  ft_hero_desc: "Le food truck INKA CHOLA est présent sur deux emplacements ; consultez notre itinéraire et profitez de nos empanadas péruviennes.",
  ft_location_1_name: "WALSERPLATZ",
  ft_location_1_status: "... en pause",
  ft_location_2_name: "ESPLANADE",
  ft_location_2_status: "... en pause",
  ft_find_us_title: "Suivez-nous pour nous trouver",
  ft_find_us_desc: "Suivez nos réseaux sociaux (Instagram/TikTok) pour connaître l'emplacement actuel de notre food truck.",
  ft_contact_button: "Contact pour Événements",
};

const deTranslations: TranslationKeys = {
  nav_language: "🇩🇪 Deutsch",

  //PAGE: Home.tsx
  nav_home: "Über uns",
  nav_catering: "Catering",
  nav_foodTruck: "Food Truck",
  nav_empanadas: "Empanadas",
  nav_contacto: "Kontakt",

  hero_title: "Der wahre peruanische Geschmack",
  hero_name: ">> INKA CHOLA <<",
  hero_desc: "Peruanisches Restaurant",
  hero_orderNow: "Jetzt bestellen",

  service_generic_more: "Mehr sehen +",

  service_catering_title: "Catering",
  service_catering_desc: "Vorspeisen • Hauptgerichte • Desserts • Getränke",

  service_foodTruck_title: "Food Truck",
  service_foodTruck_desc: "Verwöhnen Sie sich mit einer Vielfalt an Empanadas.",

  service_empanadas_title: "Empanadas",
  service_empanadas_desc: "Köstliche Rindfleisch-, Hähnchen- und vegetarische Empanadas.",

  about_title1: "Frisch.",
  about_title2: "Authentisch.",
  about_title3: "Köstlich.",
  about_subtitle: "Wir bringen die peruanische Gastronomie in die Schweiz.",
  about_desc: "Der Reichtum seiner Ländereien und seine kulturelle Vielfalt machen Peru zu einem Land mit einer exquisiten und abwechslungsreichen Gastronomie. Jede Stadt hat ein typisches Gericht mit einem unvergleichlichen Geschmack. Tausende von landwirtschaftlichen Produkten und Dutzende von lebendigen Kulturen, die sich jahrhundertelang ein einziges Gebiet geteilt haben, haben ein unendliches Angebot für den Gaumen geschaffen.",

  reserve_subtitle: "Online bestellen",
  reserve_title: "Peruanisches Essen oder Desserts",
  reserve_button: "Jetzt bestellen",

  instagram_title: "Folgen Sie uns auf Instagram",
  instagram_more: "Mehr sehen",

  address_title: "Finden Sie uns",
  address_address: "Untergasse 28, 2502, Biel-Bienne, Schweiz",
  address_button: "Wegbeschreibung erhalten",

  schedule_title: "Öffnungszeiten",
  schedule_day: "Tag",
  schedule_hours: "Stunden",
  schedule_monday_text: "Montag",
  schedule_monday_hours_morning: "geschlossen",
  schedule_monday_hours_evening: "",
  schedule_tuesday_text: "Dienstag",
  schedule_tuesday_hours_morning: "geschlossen",
  schedule_tuesday_hours_evening: "",
  schedule_wednesday_text: "Mittwoch",
  schedule_wednesday_hours_morning: "11:00 - 14:00 Uhr",
  schedule_wednesday_hours_evening: "18:00 - 22:00 Uhr",
  schedule_thursday_text: "Donnerstag",
  schedule_thursday_hours_morning: "11:00 - 14:00 Uhr",
  schedule_thursday_hours_evening: "18:00 - 22:00 Uhr",
  schedule_friday_text: "Freitag",
  schedule_friday_hours_morning: "11:00 - 14:00 Uhr",
  schedule_friday_hours_evening: "18:00 - 22:00 Uhr",
  schedule_saturday_text: "Samstag",
  schedule_saturday_hours_morning: "11:00 - 14:00 Uhr",
  schedule_saturday_hours_evening: "18:00 - 22:00 Uhr",
  schedule_sunday_text: "Sonntag",
  schedule_sunday_hours_morning: "11:00 - 17:00 Uhr",
  schedule_sunday_hours_evening: "",

  whatsapp_text: "Schreiben Sie uns auf WhatsApp!",

  footer_explore: "Entdecken",
  footer_home: "Startseite",
  footer_services: "Dienstleistungen",
  footer_about: "Über uns",
  footer_reserve: "Reservierung",
  footer_contact: "Kontaktiere uns",
  footer_number: "+41 76 449 35 42",
  footer_email: "inkachola@gmx.ch",
  footer_address1: "Untergasse 28",
  footer_address2: "2502 Biel-Bienne Schweiz",
  footer_follow: "Folgen Sie uns",
  footer_copy1: "© 2025 INKA CHOLA",
  footer_copy2: "Alle Rechte vorbehalten",
  footer_credits_gv: "Entworfen von Gerardo Venegas",
  footer_credits_vp: " und Valentina Pajares",

  // PAGE: Catering.tsx
  cat_hero_title: "Catering",
  cat_hero_subtitle: "Vorspeisen • Hauptgerichte • Desserts • Getränke",
  cat_hero_description: "Wir bieten eine große Auswahl an peruanischen Gerichten aus allen Regionen Perus, wie der Küste, dem Hochland und dem Dschungel. Entdecken Sie einige unserer unglaublichen alten Gerichte, vom frischen Ceviche bis zu den reichhaltigen traditionellen Desserts.",

  cat_cont_title_1: "Vorspeisen",
  cat_cont_items_1: [
    "Anticuchos",
    "Causa rellena (Thunfisch, Hähnchen oder Garnelen)",
    "Fisch-Ceviche",
    "Fisch-Tiradito",
    "Papa a la huancaina",
    "Papa de tres cremas (huancaina, ocopa, rocoto)",
    "Hähnchen-Tamales",
    "Quinoa-Salat",
    "Grüner Salat",
    "Russischer Salat",
  ],

  cat_cont_title_2: "Hauptgerichte",
  cat_cont_items_2: [
    "Aji de pollo",
    "Arroz con pollo",
    "Arroz con mariscos",
    "Schweine-Chicharrón (mit Yuca und Salsa Criolla)",
    "Rinder-Seco mit Bohnen",
    "Lomo saltado",
  ],

  cat_cont_title_3: "Desserts",
  cat_cont_items_3: [
    "Alfajores",
    "Mazamorra",
    "Tres leches",
    "Lucuma-Mousse",
    "Verschiedene Früchte",
  ],

  cat_cont_title_4: "Getränke*",
  cat_cont_items_4: [
    "Inca Kola",
    "Chicha morada",
    "Pisco sour",
    "Limonade",
    "Verschiedene Getränke",
  ],

  cat_important_msg: "*Die Kosten für das Buffet beinhalten keine Getränke.",

  cat_tos_title: "Catering-Service",
  cat_tos_item_1: "Wir richten uns nach der genauen Menge an Speisen, Getränken und Personal, die im endgültigen Angebot angegeben ist.",
  cat_tos_item_2: "Die Servicezeit entspricht der im endgültigen Angebot vereinbarten Zeit (Dauer der Veranstaltung).",
  cat_tos_item_3: "Der Catering-Service beginnt zu der im endgültigen Angebot festgelegten Zeit (Uhrzeit).",
  cat_tos_item_4: "Wir benötigen einen Montagebereich mit Wasser- und Stromanschluss, um ordnungsgemäß arbeiten zu können.",
  cat_tos_item_5: "Das Angebot umfasst hochwertiges und sehr elegantes Einweggeschirr.",
  cat_tos_item_6: "Das Menü unterliegt dem per E-Mail gesendeten Angebot, und etwaige Änderungen in letzter Minute müssen mindestens 48 Stunden im Voraus im Angebot berücksichtigt werden.",
  cat_tos_item_7: "Der Service wird per E-Mail bestätigt, nachdem eine Anzahlung von 30 % auf die unten auf der Seite angegebene Kontonummer geleistet wurde. Die restlichen 70 % des Gesamtpreises müssen vor Beginn des Service bezahlt werden.",
  cat_tos_item_8: "Sobald der Catering-Service bestätigt ist, können keine Änderungen an Uhrzeit und/oder Datum mehr vorgenommen werden.",
  cat_tos_item_9: "Wenn Sie den Service stornieren möchten, werden 10 % des Gesamtpreises für Verwaltungskosten einbehalten.",
  cat_tos_item_10: "Die Transportkosten sind Richtwerte und können je nach Veranstaltungsort variieren.",
  cat_tos_item_11: "Das Angebot beinhaltet keinen Kellnerservice.",

  cat_quote_title: "Angebot anfordern",
  cat_quote_button: "Kontaktiere uns",
  cat_quote_items: [
    "Reservierungen sind zwei Wochen im Voraus erforderlich.",
    "Der Preis richtet sich nach Ihren Anforderungen.",
    "Reservierungen für maximal 15 bis 50 Personen.",
    "Geschirrservice."
  ],

  // PAGE: Empanadas.tsx
  emp_title_hero: "Unsere Empanadas",
  emp_desc_hero: "Das Geheimnis unserer Empanadas liegt in der Liebe und dem authentischen peruanischen Rezept. Perfekt gebacken mit genau der richtigen Würze.",

  emp_menu_title: "Unsere Vielfalt",
  emp_menu_items: [
    "Rindfleisch-Empanada: Saftiges, handgeschnittenes Rindfleisch mit Zwiebeln, hartgekochtem Ei, Rosinen und Oliven.",
    "Hähnchen-Empanada: Zarte, gezupfte Hähnchenbrust in einer traditionellen peruanischen Marinade mit Gewürzen.",
    "Vegetarische Empanada: Köstliche Mischung aus frischem Gemüse der Saison.",
  ],

  emp_prep_title: "Authentische peruanische Zubereitung",
  emp_prep_items: [
    "Täglich frisch gebacken, um Frische und knusprige Textur zu garantieren.",
    "Traditioneller hausgemachter Teig mit der charakteristischen süßen Note aus Peru.",
    "Füllungen zubereitet mit authentischen peruanischen Chilis.",
  ],

  emp_cta_title: "Lust auf Empanadas?",
  emp_cta_desc: "Bestellen Sie sie jetzt, um sie zu Hause zu genießen, oder fordern Sie sie für Ihr nächstes Catering-Event an.",
  emp_cta_button: "Über WhatsApp bestellen",

  // PAGE: FoodTruck.tsx
  ft_hero_title: "Food Truck",
  ft_hero_desc: "Der Food Truck von INKA CHOLA befindet sich an zwei Standorten. Überprüfen Sie unsere Route und genießen Sie unsere peruanischen Empanadas.",
  ft_location_1_name: "WALSERPLATZ",
  ft_location_1_status: "... pausiert",
  ft_location_2_name: "ESPLANADE",
  ft_location_2_status: "... pausiert",
  ft_find_us_title: "Folgen Sie uns, um uns zu finden",
  ft_find_us_desc: "Folgen Sie unseren sozialen Netzwerken (Instagram/TikTok), um den aktuellen Standort unseres Food Trucks zu erfahren.",
  ft_contact_button: "Kontakt für Veranstaltungen",
};

const itTranslations: TranslationKeys = {
  nav_language: "🇮🇹 Italiano",

  //PAGE: Home.tsx
  nav_home: "Chi siamo",
  nav_catering: "Catering",
  nav_foodTruck: "Food Truck",
  nav_empanadas: "Empanadas",
  nav_contacto: "Contatti",

  hero_title: "Il vero sapore peruviano",
  hero_name: ">> INKA CHOLA <<",
  hero_desc: "Ristorante Peruviano",
  hero_orderNow: "Ordina Ora",

  service_generic_more: "Vedi di più +",

  service_catering_title: "Catering",
  service_catering_desc: "Antipasti • Piatti principali • Dolci • Bevande",

  service_foodTruck_title: "Food Truck",
  service_foodTruck_desc: "Viziati con una varietà di empanadas.",

  service_empanadas_title: "Empanadas",
  service_empanadas_desc: "Deliziose empanadas di manzo, pollo e vegetariane.",

  about_title1: "Fresco.",
  about_title2: "Autentico.",
  about_title3: "Delizioso.",
  about_subtitle: "Portiamo la gastronomia del Perù in Svizzera.",
  about_desc: "La ricchezza delle sue terre e la sua diversità culturale fanno del Perù un paese dalla gastronomia squisita e varia. Ogni città ha un piatto tipico con un sapore ineguagliabile. Migliaia di prodotti di campagna e decine di culture vive che hanno condiviso un unico territorio per secoli, hanno finito per creare un'offerta infinita per il palato.",

  reserve_subtitle: "Ordina online",
  reserve_title: "Cibo o Dolci Peruviani",
  reserve_button: "Ordina ora",

  instagram_title: "Seguici su Instagram",
  instagram_more: "Vedi di più",

  address_title: "Dove siamo",
  address_address: "Untergasse 28, 2502, Biel-Bienne, Svizzera",
  address_button: "Ottieni indicazioni",

  schedule_title: "Orari di apertura",
  schedule_day: "Giorno",
  schedule_hours: "Ore",
  schedule_monday_text: "Lunedì",
  schedule_monday_hours_morning: "chiuso",
  schedule_monday_hours_evening: "",
  schedule_tuesday_text: "Martedì",
  schedule_tuesday_hours_morning: "chiuso",
  schedule_tuesday_hours_evening: "",
  schedule_wednesday_text: "Mercoledì",
  schedule_wednesday_hours_morning: "11:00 - 14:00",
  schedule_wednesday_hours_evening: "18:00 - 22:00",
  schedule_thursday_text: "Giovedì",
  schedule_thursday_hours_morning: "11:00 - 14:00",
  schedule_thursday_hours_evening: "18:00 - 22:00",
  schedule_friday_text: "Venerdì",
  schedule_friday_hours_morning: "11:00 - 14:00",
  schedule_friday_hours_evening: "18:00 - 22:00",
  schedule_saturday_text: "Sabato",
  schedule_saturday_hours_morning: "11:00 - 14:00",
  schedule_saturday_hours_evening: "18:00 - 22:00",
  schedule_sunday_text: "Domenica",
  schedule_sunday_hours_morning: "11:00 - 17:00",
  schedule_sunday_hours_evening: "",

  whatsapp_text: "Scrivici su WhatsApp!",

  footer_explore: "Esplora",
  footer_home: "Pagina iniziale",
  footer_services: "Servizi",
  footer_about: "Chi siamo",
  footer_reserve: "Prenotazione",
  footer_contact: "Contattaci",
  footer_number: "+41 76 449 35 42",
  footer_email: "inkachola@gmx.ch",
  footer_address1: "Untergasse 28",
  footer_address2: "2502 Biel-Bienne Svizzera",
  footer_follow: "Seguici",
  footer_copy1: "© 2025 INKA CHOLA",
  footer_copy2: "Tutti i diritti riservati",
  footer_credits_gv: "Progettato da Gerardo Venegas",
  footer_credits_vp: " e Valentina Pajares",

  // PAGE: Catering.tsx
  cat_hero_title: "Catering",
  cat_hero_subtitle: "Antipasti • Piatti principali • Dolci • Bevande",
  cat_hero_description: "Offriamo un'ampia varietà di piatti peruviani da tutte le regioni del Perù, come la costa, le Ande e la giungla. Scopri alcuni dei nostri incredibili piatti millenari, dal ceviche fresco ai ricchi dolci tradizionali.",

  cat_cont_title_1: "Antipasti",
  cat_cont_items_1: [
    "Anticuchos",
    "Causa rellena (tonno, pollo o gamberi)",
    "Ceviche di pesce",
    "Tiradito di pesce",
    "Papa a la huancaina",
    "Papa de tres cremas (huancaina, ocopa, rocoto)",
    "Tamales di pollo",
    "Insalata di quinoa",
    "Insalata verde",
    "Insalata russa",
  ],

  cat_cont_title_2: "Piatti principali",
  cat_cont_items_2: [
    "Aji de pollo",
    "Arroz con pollo",
    "Arroz con mariscos",
    "Chicharrón di maiale (con yuca e salsa criolla)",
    "Seco di carne con fagioli",
    "Lomo saltado",
  ],

  cat_cont_title_3: "Dolci",
  cat_cont_items_3: [
    "Alfajores",
    "Mazamorra",
    "Tres leches",
    "Mousse di lucuma",
    "Frutta mista",
  ],

  cat_cont_title_4: "Bevande*",
  cat_cont_items_4: [
    "Inca Kola",
    "Chicha morada",
    "Pisco sour",
    "Limonata",
    "Bevande miste",
  ],

  cat_important_msg: "*Il costo del buffet non include le bevande.",

  cat_tos_title: "Servizio di Catering",
  cat_tos_item_1: "Ci baseremo sulla quantità esatta di cibo, bevande e personale indicata nel preventivo finale.",
  cat_tos_item_2: "Il tempo di servizio sarà come concordato nel preventivo finale (durata dell'evento).",
  cat_tos_item_3: "Il servizio di catering inizierà all'orario stabilito nel preventivo finale (ora).",
  cat_tos_item_4: "Abbiamo bisogno di uno spazio di montaggio con fornitura di acqua ed elettricità per poter lavorare correttamente.",
  cat_tos_item_5: "La proposta include stoviglie usa e getta di ottima qualità e molto eleganti.",
  cat_tos_item_6: "Il menu è soggetto alla proposta inviata via e-mail e qualsiasi modifica dell'ultimo minuto deve riflettersi nella proposta con almeno 48 ore di anticipo.",
  cat_tos_item_7: "Il servizio sarà confermato via e-mail dopo aver lasciato un acconto del 30% sul numero di conto indicato in fondo alla pagina. Il restante 70% del prezzo totale dovrà essere pagato prima dell'inizio del servizio.",
  cat_tos_item_8: "Una volta confermato il servizio di catering, non sarà possibile apportare modifiche all'orario e/o alla data.",
  cat_tos_item_9: "In caso di annullamento del servizio, verrà trattenuto il 10% del prezzo totale per spese amministrative.",
  cat_tos_item_10: "Il costo di trasporto è indicativo e può variare a seconda del luogo in cui si terrà l'evento.",
  cat_tos_item_11: "Il preventivo non include il servizio cameriere.",

  cat_quote_title: "Richiedi un preventivo",
  cat_quote_button: "Contattaci",
  cat_quote_items: [
    "Prenotazioni necessarie con due settimane di anticipo.",
    "Il prezzo verrà fornito a seconda delle esigenze.",
    "Prenotazioni per un massimo di 15-50 persone.",
    "Servizio di stoviglie."
  ],

  // PAGE: Empanadas.tsx
  emp_title_hero: "Le Nostre Empanadas",
  emp_desc_hero: "Il segreto delle nostre empanadas sta nell'amore e nell'autentica ricetta peruviana. Cotte alla perfezione con il giusto tocco di condimento.",

  emp_menu_title: "La Nostra Varietà",
  emp_menu_items: [
    "Empanada di Manzo: Succulenta carne di manzo tagliata al coltello con cipolle, uovo sodo, uvetta e olive.",
    "Empanada di Pollo: Morbido petto di pollo sfilacciato in un condimento tradizionale peruviano con spezie.",
    "Empanada Vegetariana: Delizioso mix di verdure fresche di stagione.",
  ],

  emp_prep_title: "Autentica Preparazione Peruviana",
  emp_prep_items: [
    "Sfornate quotidianamente per garantire freschezza e consistenza croccante.",
    "Impasto tradizionale fatto in casa con quel tocco dolce caratteristico del Perù.",
    "Ripieni preparati con autentici peperoncini peruviani.",
  ],

  emp_cta_title: "Voglia di Empanadas?",
  emp_cta_desc: "Ordinale ora per gustarle a casa o richiedile per il tuo prossimo evento di Catering.",
  emp_cta_button: "Ordina via WhatsApp",

  // PAGE: FoodTruck.tsx
  ft_hero_title: "Food Truck",
  ft_hero_desc: "Il food truck di INKA CHOLA si trova in due posizioni; controlla il nostro percorso e goditi le nostre empanadas peruviane.",
  ft_location_1_name: "WALSERPLATZ",
  ft_location_1_status: "... in pausa",
  ft_location_2_name: "ESPLANADE",
  ft_location_2_status: "... in pausa",
  ft_find_us_title: "Seguici per trovarci",
  ft_find_us_desc: "Segui i nostri social network (Instagram/TikTok) per conoscere la posizione attuale del nostro food truck.",
  ft_contact_button: "Contatto per Eventi",
};

export const translations: Record<Language, TranslationKeys> = {
  es: esTranslations,
  en: enTranslations,
  fr: frTranslations,
  de: deTranslations,
  it: itTranslations,
};