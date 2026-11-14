/**
 * Información de la excursión al Monte Fuji (GetYourGuide,
 * recomendada para el Día 10 del itinerario).
 */

export const gygFujiActivity = {
  title: "Tokio: monte Fuji, parque Oishi, lago Kawaguchi y Oshino Hakkai",
  provider: "Japan Visionary Tour",
  url: "https://www.getyourguide.com/es-es/tokio-l193/tokio-monte-fuji-pagoda-chureito-lago-kawaguchi-y-oshino-hakkai-t792363/",
  meetingPoint: "Tokyo Mode Gakuen (1 Chome-7-3 Nishishinjuku, Shinjuku City, Tokyo 160-0023)",
  meetingPointUrl: "https://maps.google.com/?q=35.691490,139.696457",
  meetingTime: "Salida en autobús a las 08:20 AM (estar sobre las 08:10 AM)",
  duration: "Aprox. 10 horas (regreso ~18:30)",
  language: "Tour guiado en inglés",
  priceRef: "~42 € / persona",
  foodNotice: "⚠️ Comida no incluida. No se permite comer dentro del autobús. Conviene comprar snacks o desayuno antes en un konbini y llevar dinero en efectivo (¥) para comer en los puestos locales de Oshino Hakkai y Saiko.",
  hotelDepartureAdvice: "Conviene salir con margen desde el hotel (unos 40-45 minutos en metro/JR hasta Shinjuku). La Estación de Shinjuku es inmensa (más de 200 salidas), por lo que es recomendable añadir 15-20 minutos extra para localizar sin prisas el edificio Tokyo Mode Gakuen en la salida oeste.",
  itineraryStopsDetailed: [
    {
      emoji: "🌸",
      name: "Lago Kawaguchiko y Parque Oishi",
      duration: "~40 min",
      detail: "El más accesible de los Cinco Lagos del Fuji y el más famoso por sus vistas -- el propio lago actúa de espejo del volcán en días despejados. El Parque Oishi ocupa la orilla norte, con hileras de flores de temporada (en septiembre, sobre todo cosmos rosas y kochia) que enmarcan el Fuji al fondo, una de las estampas más fotografiadas de la región. Hay puestos de helado de soft-cream con sabores locales (uva Kyoho, wasabi) y una pequeña zona de tiendas.",
    },
    {
      emoji: "🏘️",
      name: "Aldea Saiko Iyashi-no-Sato Nenba",
      duration: "~1 hora (entrada incluida)",
      detail: "Un pueblo tradicional de unas 20 casas con tejado de paja (gassho-zukuri, el mismo estilo que Shirakawa-go), reconstruido en el emplazamiento de un poblado real destruido por un tifón en 1966. Cada casa funciona hoy como taller o pequeño museo: tejido, cerámica, cestería de bambú, catas de té -- y varias ofrecen la posibilidad de probar o comprar directamente lo que elaboran. Al fondo del pueblo el Fuji vuelve a asomar entre los tejados.",
    },
    {
      emoji: "💧",
      name: "Manantiales de Oshino Hakkai",
      duration: "~1 hora",
      detail: "Ocho estanques de agua cristalina repartidos por el pueblo de Oshino, alimentados por el deshielo y la lluvia que se filtran durante unos 20 años a través de la roca volcánica del Fuji antes de aflorar aquí. El agua es tan transparente que se ven perfectamente las truchas que nadan en el fondo. Declarado uno de los 'Lugares de Belleza Natural' de Japón y, junto con el propio Fuji, parte de su inscripción como Patrimonio de la Humanidad UNESCO. El pueblo conserva casas tradicionales y puestos de comida alrededor de los estanques.",
    },
    {
      emoji: "⛩️",
      name: "Parque Arakurayama Sengen y Pagoda Chureito",
      duration: "~1 hora (subida de 400 escalones)",
      detail: "La imagen más icónica de todo Japón: la pagoda de cinco pisos Chureito (construida en 1963 como monumento a la paz, no es un templo antiguo) enmarcada con el Fuji al fondo, vista desde el mirador del parque. Para llegar hay que subir unos 400 escalones desde el Santuario Arakura Fuji Sengen, a los pies de la colina -- unos 15-20 min a paso normal. Merece la pena el esfuerzo: es la fotografía que sale en prácticamente todas las postales y campañas turísticas de Japón.",
    },
  ],
  itineraryStops: [
    "Lago Kawaguchiko y Parque Oishi (40 min - campos florales y vistas)",
    "Saiko Iyashi-no-Sato Nenba (1 hora - pueblo tradicional de tejados de paja con entrada incluida)",
    "Oshino Hakkai (1 hora - 8 manantiales sagrados de agua de deshielo UNESCO)",
    "Parque Arakurayama Sengen y Pagoda Chureito (subida de 400 escalones y vista clásica del Fuji)",
  ],
  bookings: [
    {
      dayNum: 10,
      date: "2026-09-16",
      dateFormatted: "Miércoles, 16 de septiembre de 2026",
    }
  ]
};

export const visibilityTools = {
  isFujiVisible: {
    name: "isfujivisible.com",
    url: "https://isfujivisible.com",
    desc: "Algoritmo técnico que cruza nubes, viento y humedad con puntuación 1 a 10 y previsión por tramos horarios."
  },
  mtFujiToday: {
    name: "mtfujitoday.com",
    url: "https://mtfujitoday.com",
    desc: "Previsión a 7 días y acceso directo a webcams en directo en Kawaguchiko y alrededores."
  },
  sideToCheck: "⚠️ IMPORTANTE — mira SIEMPRE la vista NORTE (Kawaguchiko/Yamanashi), NO la vista Sur (Hakone/Mishima): estas webs muestran previsiones separadas para cada lado del Fuji, porque el tiempo puede estar despejado en un lado y nublado en el otro el mismo día. La excursión de GetYourGuide (Kawaguchiko, Parque Oishi, Saiko, Oshino Hakkai, Pagoda Chureito) depende de que el Fuji se vea despejado desde el NORTE ese día -- comprueba esa vista la mañana de la excursión, no la de Hakone.",
  goldenRule: "Abre las webcams en directo desde el hotel a las 06:30 AM. Si a las 07:00 AM no es visible, es altamente improbable que aparezca más tarde (a partir de las 09:00 AM el calor evapora humedad y crea nubes sobre el cono)."
};
