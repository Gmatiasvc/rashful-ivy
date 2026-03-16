export type Language = "es";

export type TranslationKeys = {
  [key: string]: string;
};

export const translations: Record<Language, TranslationKeys> = {
  es: {
	nav_language: "🇪🇸 Español",

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
    schedule_monday_hours: "cerrado",
    schedule_tuesday_text: "Martes",
    schedule_tuesday_hours: "cerrado",
    schedule_wednesday_text: "Miércoles",
    schedule_wednesday_hours: "11 a.m. - 2 p.m.  | 6 p.m. - 10 p.m.",
    schedule_thursday_text: "Jueves",
    schedule_thursday_hours: "11 a.m. - 2 p.m.  | 6 p.m. - 10 p.m.",
    schedule_friday_text: "Viernes",
    schedule_friday_hours: "11 a.m. - 2 p.m.  | 6 p.m. - 10 p.m.",
    schedule_saturday_text: "Sábado",
    schedule_saturday_hours: "11 a.m. - 2 p.m.  | 6 p.m. - 10 p.m.",
    schedule_sunday_text: "Domingo",
    schedule_sunday_hours: "11 a.m. - 5 p.m.",

    whatsapp_text: "¡Escríbenos por WhatsApp!",
    
    footer_explore : "Explora",
    footer_home : "Pagina principal",
    footer_services : "Servicios",
    footer_about : "Nosotros",
    footer_reserve : "Reserva",
    footer_contact : "Contactanos",
    footer_number : "+41 76 449 35 42",
    footer_email : "inkachola@gmx.ch",
    footer_address1 : "Untergasse 28",
    footer_address2 : "2502 Biel-Bienne Suiza",
    footer_follow : "Síguenos",
    footer_copy1 : "© 2025 INKA CHOLA",
    footer_copy2 : "Todos los derechos reservados",
    footer_credits_gv : "Diseñado por Gerardo Venegas",
    footer_credits_vp : " y Valentina Pajares",
  },
};