// Datos climáticos históricos y consejos mes a mes en Japón para las 5 ciudades de la ruta
// Meses: 1 a 12 (Enero a Diciembre)

export const MONTH_NAMES = {
  es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  tl: ["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", "Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"],
};

export const MONTHLY_WEATHER_DATA = {
  1: {
    tip: {
      es: "❄️ Enero es pleno invierno en Japón: días fríos y secos con cielos despejados en Tokio y Kioto, pero nieve abundante y heladas en los Alpes Japoneses (Takayama y Shirakawa-go). Ropa térmica (Heattech), abrigo grueso, guantes, bufanda y calzado antideslizante o botas de nieve para la montaña son imprescindibles.",
      en: "❄️ January is mid-winter in Japan: cold, dry, sunny days in Tokyo and Kyoto, with heavy snow and freezing temperatures in the Japanese Alps (Takayama and Shirakawa-go). Thermal wear (Heattech), heavy coats, gloves, scarf, and waterproof non-slip boots for the mountains are essential.",
      fr: "❄️ Janvier est le cœur de l'hiver au Japon : journées froides, sèches et ensoleillées à Tokyo et Kyoto, mais neige abondante et gelées dans les Alpes japonaises (Takayama et Shirakawa-go). Vêtements thermiques (Heattech), manteau d'hiver chaud, gants et chaussures étanches pour la montagne sont indispensables.",
      tl: "❄️ Ang Enero ay gitnang taglamig sa Japan: malamig, tuyo at maaliwalas na panahon sa Tokyo at Kyoto, ngunit makapal na niyebe at yelo sa Japanese Alps (Takayama at Shirakawa-go). Mahalaga ang thermal wear (Heattech), makapal na jacket, guwantes, at bota para sa niyebe.",
    },
    cities: [
      { city: "Kioto", avg: 9, min: 1, max: 10, emoji: "🌤️",
        condition: { es: "Frío y despejado", en: "Cold and clear", fr: "Froid et dégagé", tl: "Malamig at maaliwalas" },
        precip: { es: "Baja", en: "Low", fr: "Faible", tl: "Mababa" } },
      { city: "Kanazawa", avg: 6, min: 1, max: 7, emoji: "🌨️",
        condition: { es: "Frío, lluvia o nieve", en: "Cold, rain or snow", fr: "Froid, pluie ou neige", tl: "Malamig, ulan o niyebe" },
        precip: { es: "Frecuente", en: "Frequent", fr: "Fréquente", tl: "Madalas" } },
      { city: "Takayama", avg: 1, min: -5, max: 3, emoji: "❄️",
        condition: { es: "Nieve y heladas", en: "Snow and freezing", fr: "Neige et gel", tl: "Niyebe at yelo" },
        precip: { es: "Frecuente (nieve)", en: "Frequent (snow)", fr: "Fréquente (neige)", tl: "Madalas (niyebe)" } },
      { city: "Tsumago", avg: 2, min: -4, max: 5, emoji: "🌲",
        condition: { es: "Frío invernal alpino", en: "Alpine winter cold", fr: "Froid hivernal alpin", tl: "Malamig na bundok" },
        precip: { es: "Posible nieve", en: "Possible snow", fr: "Neige possible", tl: "Posibleng niyebe" } },
      { city: "Tokio", avg: 10, min: 2, max: 11, emoji: "☀️",
        condition: { es: "Frío y muy soleado", en: "Cold and very sunny", fr: "Froid et très ensoleillé", tl: "Malamig at napakaaraw" },
        precip: { es: "Muy baja", en: "Very low", fr: "Très faible", tl: "Napakababa" } },
    ]
  },
  2: {
    tip: {
      es: "❄️ Febrero es el mes más gélido del año en Japón: cielos limpios y soleados en la costa del Pacífico (Tokio/Kioto) y los mayores espesores de nieve en los Alpes. Ropa de abrigo completa, capas interiores térmicas y buen calzado antideslizante para hielo y nieve.",
      en: "❄️ February is the coldest month of the year in Japan: bright sunny skies on the Pacific coast (Tokyo/Kyoto) and peak snow depth in the Alps. Bring full winter gear, thermal base layers, and non-slip footwear for icy mountain trails.",
      fr: "❄️ Février est le mois le plus froid de l'année au Japon : ciel bleu dégagé sur la côte Pacifique (Tokyo/Kyoto) et neige au plus haut dans les Alpes. Équipez-vous de vêtements d'hiver complets, sous-vêtements thermiques et chaussures adhérentes.",
      tl: "❄️ Ang Pebrero ang pinakamalamig na buwan sa Japan: maaraw sa Pacific coast (Tokyo/Kyoto) ngunit napakakapal ng niyebe sa Alps. Magsuot ng makapal na damit panlamig, thermal layers, at sapatos na hindi madulas.",
    },
    cities: [
      { city: "Kioto", avg: 10, min: 2, max: 11, emoji: "🌤️",
        condition: { es: "Frío y seco", en: "Cold and dry", fr: "Froid et sec", tl: "Malamig at tuyo" },
        precip: { es: "Baja", en: "Low", fr: "Faible", tl: "Mababa" } },
      { city: "Kanazawa", avg: 7, min: 1, max: 8, emoji: "🌨️",
        condition: { es: "Nieve o aguanieve", en: "Snow or sleet", fr: "Neige ou giboulées", tl: "Niyebe o ulan" },
        precip: { es: "Frecuente", en: "Frequent", fr: "Fréquente", tl: "Madalas" } },
      { city: "Takayama", avg: 2, min: -5, max: 4, emoji: "❄️",
        condition: { es: "Nieve abundante", en: "Heavy snow", fr: "Neige abondante", tl: "Makapal na niyebe" },
        precip: { es: "Frecuente (nieve)", en: "Frequent (snow)", fr: "Fréquente (neige)", tl: "Madalas (niyebe)" } },
      { city: "Tsumago", avg: 3, min: -4, max: 6, emoji: "🌲",
        condition: { es: "Frío alpino", en: "Alpine cold", fr: "Froid alpin", tl: "Malamig na klima" },
        precip: { es: "Posible nieve", en: "Possible snow", fr: "Neige possible", tl: "Posibleng niyebe" } },
      { city: "Tokio", avg: 11, min: 3, max: 12, emoji: "☀️",
        condition: { es: "Frío y soleado", en: "Cold and sunny", fr: "Froid et ensoleillé", tl: "Malamig at maaraw" },
        precip: { es: "Baja", en: "Low", fr: "Faible", tl: "Mababa" } },
    ]
  },
  3: {
    tip: {
      es: "🌸 Marzo marca el despertar de la primavera: las temperaturas diurnas se suavizan pero el tiempo es cambiante, con mañanas y noches aún frías. A finales de mes arranca el florecimiento del sakura en Tokio y Kioto. Chaqueta de entretiempo cálida y vestir por capas.",
      en: "🌸 March heralds the arrival of spring: daytime temperatures soften but the weather is variable, with mornings and nights still cold. Cherry blossoms (sakura) start opening in late March in Tokyo and Kyoto. Wear layers and a warm mid-season jacket.",
      fr: "🌸 Mars marque le réveil du printemps : les températures diurnes s'adoucissent mais le temps reste changeant, avec des matinées fraîches. Les cerisiers (sakura) commencent à fleurir fin mars. Prévoyez une veste chaude de mi-saison et habillez-vous par couches.",
      tl: "🌸 Ang Marso ay simula ng tagsibol: unti-unting umiinit sa araw ngunit maginaw pa rin sa gabi. Sa huling bahagi ng buwan nagsisimulang mamukadkad ang sakura sa Tokyo at Kyoto. Magsuot ng patong-patong na damit at jacket.",
    },
    cities: [
      { city: "Kioto", avg: 14, min: 5, max: 15, emoji: "🌸",
        condition: { es: "Templado, noches frías", en: "Mild, cold nights", fr: "Doux, nuits fraîches", tl: "Katamtaman, malamig sa gabi" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Kanazawa", avg: 11, min: 4, max: 12, emoji: "⛅",
        condition: { es: "Fresco y húmedo", en: "Cool and damp", fr: "Frais et humide", tl: "Malamig at mamasa-masa" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Takayama", avg: 7, min: -1, max: 9, emoji: "🌤️",
        condition: { es: "Fresco, deshielo", en: "Cool, snow melting", fr: "Frais, dégel", tl: "Malamig, natutunaw ang niyebe" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Tsumago", avg: 8, min: -1, max: 11, emoji: "🌲",
        condition: { es: "Fresco de montaña", en: "Mountain chill", fr: "Fraîcheur de montagne", tl: "Malamig sa kabundukan" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Tokio", avg: 14, min: 6, max: 15, emoji: "🌤️",
        condition: { es: "Fresco y cambiante", en: "Cool and variable", fr: "Frais et variable", tl: "Malamig at pabago-bago" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
    ]
  },
  4: {
    tip: {
      es: "🌸 Abril es el corazón de la primavera y apogeo de los cerezos en flor (sakura): clima templado muy agradable, días luminosos y condiciones excelentes para viajar. Chaqueta ligera para la tarde/noche y ropa cómoda de entretiempo para caminar.",
      en: "🌸 April is the peak of spring and cherry blossom (sakura) season: pleasantly mild weather, bright days, and ideal conditions for travel. Pack comfortable walking clothes, sunglasses, and a light jacket or sweater for cooler evenings.",
      fr: "🌸 Avril est le cœur du printemps et la pleine saison des cerisiers en fleurs (sakura) : climat très agréable, journées lumineuses et balades idéales. Prévoyez une veste légère pour le soir et des vêtements confortables pour marcher.",
      tl: "🌸 Ang Abril ay tugatog ng tagsibol at pamumukadkad ng sakura: napakagandang panahon, maaliwalas na araw, at perpekto sa pamamasyal. Magdala ng magaan na jacket para sa gabi at komportableng sapatos.",
    },
    cities: [
      { city: "Kioto", avg: 20, min: 10, max: 21, emoji: "🌸",
        condition: { es: "Primaveral suave", en: "Pleasant spring", fr: "Printemps doux", tl: "Magandang tagsibol" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Kanazawa", avg: 17, min: 9, max: 18, emoji: "🌤️",
        condition: { es: "Templado y agradable", en: "Mild and pleasant", fr: "Tempéré et agréable", tl: "Katamtaman at maaliwalas" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Takayama", avg: 15, min: 5, max: 17, emoji: "🌸",
        condition: { es: "Primavera fresca", en: "Crisp spring", fr: "Printemps frais", tl: "Sariwang tagsibol" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Tsumago", avg: 15, min: 5, max: 18, emoji: "🌲",
        condition: { es: "Templado alpino", en: "Mild alpine", fr: "Doux alpin", tl: "Katamtamang klima sa bundok" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Tokio", avg: 19, min: 11, max: 20, emoji: "🌸",
        condition: { es: "Agradable y suave", en: "Mild and pleasant", fr: "Doux et agréable", tl: "Maaliwalas at maganda" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
    ]
  },
  5: {
    tip: {
      es: "🌿 Mayo ofrece uno de los climas más perfectos del año en Japón: temperaturas cálidas sin el bochorno del verano, cielos azules y vegetación exuberante (shinryoku). Manga corta para el día, chaqueta fina para la noche y protector solar.",
      en: "🌿 May offers some of the finest travel weather of the entire year: warm comfortable temperatures without summer humidity, blue skies, and lush green foliage. Wear short sleeves during the day, keep a light layer for evenings, and bring sun protection.",
      fr: "🌿 Mai offre l'une des météos les plus agréables de l'année : températures chaudes sans l'humidité de l'été, ciel bleu et nature verdoyante. T-shirts en journée, petite veste pour la soirée et protection solaire.",
      tl: "🌿 Ang Mayo ay isa sa pinakamagandang buwan: mainit-init nang walang alinsangan, asul na langit, at luntiang kalikasan. Magsuot ng komportableng damit sa araw at manipis na jacket sa gabi.",
    },
    cities: [
      { city: "Kioto", avg: 25, min: 15, max: 26, emoji: "☀️",
        condition: { es: "Cálido y agradable", en: "Warm and pleasant", fr: "Chaud et agréable", tl: "Mainit-init at maaliwalas" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Kanazawa", avg: 22, min: 14, max: 23, emoji: "🌤️",
        condition: { es: "Agradable y templado", en: "Pleasantly mild", fr: "Doux et agréable", tl: "Katamtaman at maganda" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Takayama", avg: 20, min: 10, max: 22, emoji: "🌤️",
        condition: { es: "Soleado y fresco", en: "Sunny and crisp", fr: "Ensoleillé et frais", tl: "Maaraw at sariwa" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Tsumago", avg: 20, min: 10, max: 22, emoji: "🌲",
        condition: { es: "Verde y templado", en: "Lush and mild", fr: "Verdoyant et doux", tl: "Berdeng kabundukan" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Tokio", avg: 23, min: 16, max: 24, emoji: "☀️",
        condition: { es: "Cálido y soleado", en: "Warm and sunny", fr: "Chaud et ensoleillé", tl: "Mainit-init at maaraw" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
    ]
  },
  6: {
    tip: {
      es: "🌧️ Junio coincide con el Tsuyu (estación de lluvias de Japón): precipitaciones frecuentes, alta humedad y temperaturas cálidas en ascenso. Los jardines y templos lucen espectaculares con las hortensias (ajisai). Paraguas resistente, calzado impermeable y ropa de secado rápido.",
      en: "🌧️ June coincides with Tsuyu (Japan's rainy season): frequent overcast days, rising humidity, and warm temperatures. Hydrangeas (ajisai) bloom beautifully across temple gardens. Bring a sturdy umbrella, waterproof walking shoes, and quick-drying fabrics.",
      fr: "🌧️ Juin correspond au Tsuyu (saison des pluies au Japon) : averses régulières, humidité élevée et températures douces en hausse. Les hortensias (ajisai) sont magnifiques dans les temples. Prévoyez un bon parapluie, des chaussures étanches et des vêtements à séchage rapide.",
      tl: "🌧️ Ang Hunyo ay panahon ng Tsuyu (tag-ulan sa Japan): madalas ang pag-ulan, mataas ang alinsangan, at banayad ang init. Maganda ang mga bulaklak na ajisai sa mga templo. Magdala ng matibay na payong, sapatos na hindi nababasa, at damit na mabilis matuyo.",
    },
    cities: [
      { city: "Kioto", avg: 27, min: 20, max: 29, emoji: "🌧️",
        condition: { es: "Húmedo y lluvioso (Tsuyu)", en: "Humid and rainy (Tsuyu)", fr: "Humide et pluvieux (Tsuyu)", tl: "Alinsangan at maulan (Tsuyu)" },
        precip: { es: "Frecuente", en: "Frequent", fr: "Fréquente", tl: "Madalas" } },
      { city: "Kanazawa", avg: 25, min: 19, max: 26, emoji: "🌧️",
        condition: { es: "Lluvias del Tsuyu", en: "Tsuyu rainy season", fr: "Saison des pluies Tsuyu", tl: "Tag-ulan ng Tsuyu" },
        precip: { es: "Muy frecuente", en: "Very frequent", fr: "Très fréquente", tl: "Napakadalas" } },
      { city: "Takayama", avg: 23, min: 16, max: 25, emoji: "🌧️",
        condition: { es: "Templado y lluvioso", en: "Mild and rainy", fr: "Doux et pluvieux", tl: "Katamtaman at maulan" },
        precip: { es: "Frecuente", en: "Frequent", fr: "Fréquente", tl: "Madalas" } },
      { city: "Tsumago", avg: 23, min: 16, max: 25, emoji: "🌲",
        condition: { es: "Húmedo de montaña", en: "Humid mountain", fr: "Humide de montagne", tl: "Mamasa-masa sa bundok" },
        precip: { es: "Frecuente", en: "Frequent", fr: "Fréquente", tl: "Madalas" } },
      { city: "Tokio", avg: 26, min: 20, max: 27, emoji: "🌧️",
        condition: { es: "Cálido y lluvioso (Tsuyu)", en: "Warm and rainy (Tsuyu)", fr: "Chaud et pluvieux (Tsuyu)", tl: "Mainit at maulan" },
        precip: { es: "Frecuente", en: "Frequent", fr: "Fréquente", tl: "Madalas" } },
    ]
  },
  7: {
    tip: {
      es: "☀️ Julio es pleno verano japonés: calor intenso y humedad muy elevada tras remitir las lluvias a mediados de mes. Espléndida época de festivales (Gion Matsuri en Kioto, Tenjin Matsuri en Osaka). Ropa muy ligera y transpirable, gorra, protección solar e hidratación constante.",
      en: "☀️ July brings full Japanese summer: high heat and heavy humidity once the rainy season clears by mid-month. Vibrant festive atmosphere with famous matsuri (Gion in Kyoto, Tenjin in Osaka). Wear ultra-breathable clothing, carry sun protection, and drink plenty of fluids.",
      fr: "☀️ Juillet marque le plein été japonais : forte chaleur et humidité importante après la fin des pluies à la mi-juillet. Saison magnifique pour les festivals (Gion Matsuri à Kyoto). Habillez-vous très léger, chapeau, crème solaire et hydratation fréquente.",
      tl: "☀️ Ang Hulyo ay gitnang tag-init: matinding init at alinsangan pagkatapos ng tag-ulan. Maraming makukulay na piyesta tulad ng Gion Matsuri sa Kyoto. Magsuot ng manipis at preskong damit, sumbrero, at uminom ng maraming tubig.",
    },
    cities: [
      { city: "Kioto", avg: 32, min: 24, max: 34, emoji: "🔥",
        condition: { es: "Muy caluroso (valle)", en: "Very hot (basin)", fr: "Très chaud (bassin)", tl: "Napakainit (kapatagan)" },
        precip: { es: "Ocasional", en: "Occasional", fr: "Occasionnelle", tl: "Paminsan-minsan" } },
      { city: "Kanazawa", avg: 29, min: 23, max: 30, emoji: "⛅",
        condition: { es: "Cálido y bochornoso", en: "Warm and muggy", fr: "Chaud et lourd", tl: "Mainit at maalinsangan" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Takayama", avg: 27, min: 20, max: 29, emoji: "🌤️",
        condition: { es: "Cálido, noches suaves", en: "Warm, pleasant nights", fr: "Chaud, nuits douces", tl: "Mainit, sariwa sa gabi" },
        precip: { es: "Posible tormenta", en: "Possible storms", fr: "Orages possibles", tl: "Posibleng unos" } },
      { city: "Tsumago", avg: 26, min: 20, max: 28, emoji: "🌲",
        condition: { es: "Verano alpino", en: "Alpine summer", fr: "Été alpin", tl: "Tag-init sa bundok" },
        precip: { es: "Chubascos", en: "Showers", fr: "Averses", tl: "Mga pag-ambon" } },
      { city: "Tokio", avg: 30, min: 24, max: 31, emoji: "☀️",
        condition: { es: "Caluroso y húmedo", en: "Hot and humid", fr: "Chaud et humide", tl: "Mainit at maalinsangan" },
        precip: { es: "Chubascos", en: "Showers", fr: "Averses", tl: "Mga pag-ambon" } },
    ]
  },
  8: {
    tip: {
      es: "🔥 Agosto es el mes más caluroso y sofocante del año en Japón: sensación térmica muy alta por humedad en Tokio y Kioto. Los Alpes Japoneses (Takayama y Tsumago) ofrecen un refugio mucho más fresco. Ropa de lino o algodón fresco, toalla de mano para el sudor e hidratación constante.",
      en: "🔥 August is the hottest, most humid month of the year in Japan: very high heat index in Tokyo and Kyoto. The Japanese Alps (Takayama and Tsumago) offer a welcome cooler retreat. Pack linen or light cotton, carry a pocket hand towel for sweat, and hydrate regularly.",
      fr: "🔥 Août est le mois le plus chaud et étouffant de l'année : ressenti thermique élevé dû à l'humidité à Tokyo et Kyoto. Les Alpes japonaises offrent une agréable fraîcheur. Privilégiez le lin ou coton léger, une petite serviette pour la sueur et buvez beaucoup d'eau.",
      tl: "🔥 Ang Agosto ang pinakamainit at pinakamaalinsangang buwan sa Japan: mataas ang heat index sa Tokyo at Kyoto. Ang kabundukan ng Alps ang magandang taguan mula sa init. Magsuot ng preskong damit, magdala ng panyo o bimpo, at laging uminom ng tubig.",
    },
    cities: [
      { city: "Kioto", avg: 33, min: 25, max: 35, emoji: "🔥",
        condition: { es: "Calor extremo y húmedo", en: "Extreme heat and humidity", fr: "Chaleur extrême et humide", tl: "Matinding init at alinsangan" },
        precip: { es: "Tormentas estacionales", en: "Seasonal storms", fr: "Orages saisonniers", tl: "Pana-panahong bagyo" } },
      { city: "Kanazawa", avg: 31, min: 24, max: 32, emoji: "☀️",
        condition: { es: "Caluroso y costero", en: "Hot coastal weather", fr: "Chaud et côtier", tl: "Mainit sa baybayin" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Takayama", avg: 28, min: 20, max: 30, emoji: "🌤️",
        condition: { es: "Cálido agradable", en: "Warm and pleasant", fr: "Chaud agréable", tl: "Mainit ngunit maaliwalas" },
        precip: { es: "Posible tormenta", en: "Possible storms", fr: "Orages possibles", tl: "Posibleng unos" } },
      { city: "Tsumago", avg: 27, min: 20, max: 29, emoji: "🌲",
        condition: { es: "Fresco frente a la urbe", en: "Cooler than cities", fr: "Plus frais qu'en ville", tl: "Mas sariwa kaysa sa lungsod" },
        precip: { es: "Chubascos", en: "Showers", fr: "Averses", tl: "Mga pag-ambon" } },
      { city: "Tokio", avg: 31, min: 25, max: 32, emoji: "🔥",
        condition: { es: "Calor intenso y bochorno", en: "Intense heat and mugginess", fr: "Chaleur intense et moite", tl: "Matinding init at lagkit" },
        precip: { es: "Tormentas estacionales", en: "Seasonal storms", fr: "Orages saisonniers", tl: "Pana-panahong bagyo" } },
    ]
  },
  9: {
    tip: {
      es: "💧 Septiembre es temporada de lluvias y tifones en Japón: días aún cálidos pero refresca por la noche, y las temperaturas bajan en las montañas (Alpes y Nakasendo). Llevar paraguas o chubasquero, y ropa por capas para adaptarse a los contrastes.",
      en: "💧 September is typhoon and transition season in Japan: days remain warm but evenings cool down, and temperatures drop in the mountains (Alps and Nakasendo). Bring an umbrella or raincoat, and dress in layers for changing altitudes.",
      fr: "💧 Septembre est la saison des pluies et des typhons au Japon : journées encore chaudes mais soirées plus fraîches, avec baisse nette des températures en montagne (Alpes et Nakasendo). Prévoyez un parapluie ou imperméable, et habillez-vous par couches.",
      tl: "💧 Ang Setyembre ay panahon ng ulan at bagyo sa Japan: mainit pa sa araw ngunit lumalamig sa gabi at sa kabundukan (Alps at Nakasendo). Magdala ng payong o kapote, at magsuot ng patong-patong na damit.",
    },
    cities: [
      { city: "Kioto", avg: 28, min: 22, max: 33, emoji: "☀️",
        condition: { es: "Calor y humedad", en: "Hot and humid", fr: "Chaud et humide", tl: "Mainit at maalinsangan" },
        precip: { es: "Ocasional", en: "Occasional", fr: "Occasionnelle", tl: "Paminsan-minsan" } },
      { city: "Kanazawa", avg: 27, min: 21, max: 32, emoji: "⛅",
        condition: { es: "Calor, lluvias posibles", en: "Warm, possible rain", fr: "Chaud, pluie possible", tl: "Mainit, posibleng umulan" },
        precip: { es: "Frecuente", en: "Frequent", fr: "Fréquente", tl: "Madalas" } },
      { city: "Takayama", avg: 24, min: 18, max: 29, emoji: "🌤️",
        condition: { es: "Más templado", en: "Milder", fr: "Plus tempéré", tl: "Katamtamang init" },
        precip: { es: "Posible", en: "Possible", fr: "Possible", tl: "Posible" } },
      { city: "Tsumago", avg: 23, min: 17, max: 28, emoji: "🌲",
        condition: { es: "Fresco (alta montaña)", en: "Cool (high mountain)", fr: "Frais (haute montagne)", tl: "Malamig (bundok)" },
        precip: { es: "Variable", en: "Variable", fr: "Variable", tl: "Pabago-bago" } },
      { city: "Tokio", avg: 27, min: 21, max: 32, emoji: "☀️",
        condition: { es: "Calor y humedad", en: "Hot and humid", fr: "Chaud et humide", tl: "Mainit at maalinsangan" },
        precip: { es: "Ocasional", en: "Occasional", fr: "Occasionnelle", tl: "Paminsan-minsan" } },
    ]
  },
  10: {
    tip: {
      es: "🍁 Octubre es uno de los mejores meses para viajar a Japón: clima otoñal templado, cielos despejados, baja humedad y primeros colores del momiji en las montañas. Ropa de entretiempo con chaqueta ligera o jersey, ideal para caminar y senderismo en el Nakasendo.",
      en: "🍁 October is widely considered one of the best months to visit Japan: mild autumn weather, clear skies, low humidity, and the start of momiji (fall foliage) in the mountains. Wear layers with a light jacket or sweater, perfect for city walks and Nakasendo hiking.",
      fr: "🍁 Octobre est l'un des meilleurs mois pour voyager au Japon : météo automnale douce, ciel dégagé, faible humidité et début des couleurs du momiji en montagne. Vêtements de mi-saison avec veste légère ou pull, idéal pour la randonnée du Nakasendo.",
      tl: "🍁 Ang Oktubre ay isa sa pinakamagandang buwan para maglakbay sa Japan: katamtamang lamig ng taglagas, maaliwalas na kalangitan, at simula ng momiji sa kabundukan. Magdala ng magaan na jacket o sweater, perpekto sa paglalakad at trekking.",
    },
    cities: [
      { city: "Kioto", avg: 22, min: 14, max: 23, emoji: "🍁",
        condition: { es: "Agradable y templado", en: "Mild and pleasant", fr: "Agréable et doux", tl: "Maaliwalas at katamtaman" },
        precip: { es: "Baja", en: "Low", fr: "Faible", tl: "Mababa" } },
      { city: "Kanazawa", avg: 21, min: 13, max: 21, emoji: "⛅",
        condition: { es: "Fresco otoñal", en: "Autumn cool", fr: "Frais automnal", tl: "Sariwang taglagas" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Takayama", avg: 17, min: 9, max: 18, emoji: "🍁",
        condition: { es: "Fresco, inicio momiji", en: "Crisp, momiji begins", fr: "Frais, début du momiji", tl: "Malamig, simula ng momiji" },
        precip: { es: "Baja", en: "Low", fr: "Faible", tl: "Mababa" } },
      { city: "Tsumago", avg: 17, min: 9, max: 18, emoji: "🌲",
        condition: { es: "Fresco alpino ideal", en: "Ideal alpine crisp", fr: "Frais alpin idéal", tl: "Perpektong klima sa bundok" },
        precip: { es: "Baja", en: "Low", fr: "Faible", tl: "Mababa" } },
      { city: "Tokio", avg: 22, min: 15, max: 22, emoji: "🍁",
        condition: { es: "Suave y despejado", en: "Mild and clear", fr: "Doux et dégagé", tl: "Maaliwalas at maganda" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
    ]
  },
  11: {
    tip: {
      es: "🍁 Noviembre es el apogeo del momiji (arces rojos y ginkgos dorados) en Tokio, Kioto y los jardines de Japón: días soleados, frescos y de postal, con noches frías y temperaturas bajas en Takayama y los Alpes. Abrigo o plumífero ligero, bufanda y capas térmicas si madrugas.",
      en: "🍁 November brings the breathtaking peak of momiji (vibrant red maples and golden ginkgos) across Tokyo, Kyoto, and temple gardens: crisp, sunny days with cold nights, dropping significantly in Takayama and the Alps. Pack a warm light down coat, scarf, and thermal layers.",
      fr: "🍁 Novembre est l'apogée spectaculaire du momiji (érables rouges et ginkgos dorés) à Tokyo et Kyoto : journées fraîches et ensoleillées avec des nuits froides, particulièrement dans les Alpes. Doudoune légère, écharpe et sous-couche thermique recommandées.",
      tl: "🍁 Ang Nobyembre ang pinakamagandang panahon para sa momiji (pulang dahon ng maple at gintong ginkgo): maaliwalas at malamig na araw, ngunit maginaw sa gabi lalo na sa Takayama at Alps. Magdala ng mainit na jacket, bandana, at thermal wear.",
    },
    cities: [
      { city: "Kioto", avg: 16, min: 8, max: 17, emoji: "🍁",
        condition: { es: "Fresco, apogeo momiji", en: "Crisp, peak momiji", fr: "Frais, apogée du momiji", tl: "Malamig, tugatog ng momiji" },
        precip: { es: "Baja", en: "Low", fr: "Faible", tl: "Mababa" } },
      { city: "Kanazawa", avg: 15, min: 8, max: 15, emoji: "⛅",
        condition: { es: "Frío húmedo", en: "Chilly and damp", fr: "Froid et humide", tl: "Malamig at mamasa-masa" },
        precip: { es: "Frecuente", en: "Frequent", fr: "Fréquente", tl: "Madalas" } },
      { city: "Takayama", avg: 10, min: 2, max: 12, emoji: "🍂",
        condition: { es: "Frío, heladas nocturnas", en: "Cold, frosty nights", fr: "Froid, gelées nocturnes", tl: "Malamig, nagyeyelong gabi" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Tsumago", avg: 11, min: 3, max: 13, emoji: "🌲",
        condition: { es: "Frío de montaña", en: "Mountain chill", fr: "Froid de montagne", tl: "Malamig na kabundukan" },
        precip: { es: "Moderada", en: "Moderate", fr: "Modérée", tl: "Katamtaman" } },
      { city: "Tokio", avg: 16, min: 10, max: 17, emoji: "🍁",
        condition: { es: "Fresco y soleado", en: "Crisp and sunny", fr: "Frais et ensoleillé", tl: "Malamig at maaraw" },
        precip: { es: "Baja", en: "Low", fr: "Faible", tl: "Mababa" } },
    ]
  },
  12: {
    tip: {
      es: "❄️ Diciembre inicia el invierno japonés: aire limpio y seco, cielos azules en Tokio y Kioto, e inicio de nevadas en Kanazawa y los Alpes Japoneses (con el famoso yukitsuri en los árboles de Kenroku-en). Abrigo de invierno, guantes, calzado abrigado y protector labial para el ambiente seco.",
      en: "❄️ December ushers in winter: crisp dry air, bright blue skies in Tokyo and Kyoto, and early snowfalls in Kanazawa and the Alps (see Kenroku-en's traditional rope yukitsuri). Bring a winter coat, gloves, warm footwear, and lip balm for the dry urban air.",
      fr: "❄️ Décembre inaugure l'hiver : air pur et sec, ciel bleu limpide à Tokyo et Kyoto, et premières neiges à Kanazawa et dans les Alpes (avec le célèbre yukitsuri à Kenroku-en). Manteau d'hiver, gants, chaussures chaudes et baume à lèvres conseillés.",
      tl: "❄️ Ang Disyembre ay simula ng taglamig: tuyo at malinis na hangin, asul na kalangitan sa Tokyo at Kyoto, at unang niyebe sa Kanazawa at Alps. Magsuot ng makapal na coat, guwantes, mainit na sapatos, at lip balm para sa tuyong hangin.",
    },
    cities: [
      { city: "Kioto", avg: 11, min: 3, max: 11, emoji: "🌤️",
        condition: { es: "Frío invernal seco", en: "Dry winter cold", fr: "Froid hivernal sec", tl: "Tuyo at malamig na taglamig" },
        precip: { es: "Baja", en: "Low", fr: "Faible", tl: "Mababa" } },
      { city: "Kanazawa", avg: 9, min: 3, max: 9, emoji: "🌨️",
        condition: { es: "Frío, nieve o aguanieve", en: "Cold, snow or sleet", fr: "Froid, neige ou grésil", tl: "Malamig, niyebe o ulan" },
        precip: { es: "Frecuente", en: "Frequent", fr: "Fréquente", tl: "Madalas" } },
      { city: "Takayama", avg: 4, min: -3, max: 5, emoji: "❄️",
        condition: { es: "Nieve y frío intenso", en: "Freezing cold and snow", fr: "Froid intense et neige", tl: "Napakalamig at may niyebe" },
        precip: { es: "Frecuente (nieve)", en: "Frequent (snow)", fr: "Fréquente (neige)", tl: "Madalas (niyebe)" } },
      { city: "Tsumago", avg: 5, min: -2, max: 7, emoji: "🌲",
        condition: { es: "Invierno alpino", en: "Alpine winter", fr: "Hiver alpin", tl: "Taglamig sa bundok" },
        precip: { es: "Posible nieve", en: "Possible snow", fr: "Neige possible", tl: "Posibleng niyebe" } },
      { city: "Tokio", avg: 12, min: 4, max: 12, emoji: "☀️",
        condition: { es: "Frío, seco y soleado", en: "Cold, dry and sunny", fr: "Froid, sec et ensoleillé", tl: "Malamig, tuyo at maaraw" },
        precip: { es: "Muy baja", en: "Very low", fr: "Très faible", tl: "Napakababa" } },
    ]
  }
};

export function getMonthlyData(monthNum = 9, lang = "es") {
  const m = Math.min(12, Math.max(1, Number(monthNum) || 9));
  const data = MONTHLY_WEATHER_DATA[m] || MONTHLY_WEATHER_DATA[9];
  const langKey = ["es", "en", "fr", "tl"].includes(lang) ? lang : "es";

  return {
    monthNum: m,
    monthName: MONTH_NAMES[langKey][m - 1],
    tip: data.tip[langKey] || data.tip.es,
    cities: data.cities.map(c => ({
      city: c.city,
      avg: c.avg,
      min: c.min,
      max: c.max,
      emoji: c.emoji,
      condition: c.condition[langKey] || c.condition.es,
      precip: c.precip[langKey] || c.precip.es,
    }))
  };
}
