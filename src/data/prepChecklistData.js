import {
  Wallet,
  Shirt,
  Plug,
  Backpack,
  Droplets,
} from "lucide-react";

export const prepSectionsData = [
  {
    id: "docs",
    icon: Wallet,
    color: "#bc4749",
    title: {
      es: "1. 🛂 Documentación, Dinero y Tarjetas",
      en: "1. 🛂 Documents, Money & Cards",
      fr: "1. 🛂 Documents, Argent & Cartes",
      tl: "1. 🛂 Dokumento, Pera at mga Card",
    },
    shortTitle: {
      es: "Documentación y Dinero",
      en: "Documents & Money",
      fr: "Documents & Argent",
      tl: "Dokumento at Pera",
    },
    subtitle: {
      es: "Llevar siempre en el equipaje de mano / riñonera",
      en: "Always carry in hand luggage / waist bag",
      fr: "À garder en cabine / sacoche ventrale",
      tl: "Laging dalhin sa hand luggage / belt bag",
    },
    notice: {
      es: "Llevar siempre en el equipaje de mano / riñonera accesible en todo momento.",
      en: "Keep in carry-on bag or waist pouch, easily accessible at all times.",
      fr: "À garder dans le bagage à main ou une pochette ventrale accessible à tout moment.",
      tl: "Laging itabi sa hand luggage o belt bag na madaling kunin anumang oras.",
    },
    items: [
      {
        id: "passport",
        text: {
          es: "Pasaporte original en vigor durante toda la estancia (recomendable con más de 6 meses de vigencia por política de aerolíneas o escalas)",
          en: "Original passport valid for entire stay (recommended 6+ months validity due to airline/transit policies)",
          fr: "Passeport original valide pour toute la durée du séjour (recommandé 6+ mois de validité pour les compagnies aériennes/escales)",
          tl: "Orihinal na pasaporte na may bisa sa buong biyahe (inirerekomenda ang 6+ buwang bisa dahil sa patakaran ng airlines/layover)",
        },
      },
      {
        id: "dni",
        text: {
          es: "DNI original",
          en: "National ID card (DNI)",
          fr: "Carte nationale d'identité",
          tl: "Pambansang ID card (DNI)",
        },
      },
      {
        id: "card-jrwest",
        text: {
          es: "Tarjeta física bancaria de compra (en caso de reservar billetes en webs oficiales japonesas como JR-West o SmartEX, se exige presentar la tarjeta física de compra para retirarlos en taquilla/máquina)",
          en: "Physical payment card used for bookings (JR-West and SmartEX require inserting the physical credit card used at booking to retrieve paper tickets at stations)",
          fr: "Carte bancaire physique d'achat (pour les réservations sur JR-West ou SmartEX, la carte physique ayant servi au paiement est exigée aux bornes en gare)",
          tl: "Pisikal na debit/credit card na ginamit sa pagbili (hinihingi ng JR-West at SmartEX ang mismong physical card upang kunin ang mga tiket sa estasyon)",
        },
      },
      {
        id: "revolut",
        text: {
          es: "Tarjetas de viaje sin comisiones (Revolut / tarjetas de respaldo)",
          en: "Fee-free travel cards (Revolut / backup cards)",
          fr: "Cartes bancaires sans frais à l'étranger (Revolut / cartes de secours)",
          tl: "Travel card na walang international fees (Revolut / backup cards)",
        },
      },
      {
        id: "cash",
        text: {
          es: "Dinero en efectivo (Euros para cambiar o Yenes ya cambiados; en Japón sigue siendo necesario efectivo para buses locales como Magome-Nakatsugawa, templos, monedas de taquillas y konbinis pequeños)",
          en: "Cash (Euros to exchange or pre-exchanged Yen; cash is still mandatory in Japan for local buses like Magome-Nakatsugawa, temple entries, lockers, and small shops)",
          fr: "Espèces (Euros à changer ou Yens déjà changés ; les espèces restent indispensables au Japon pour les bus locaux comme Magome, les temples et les consignes)",
          tl: "Cash na pera (Euros na ipapalit o Yen; kailangan pa rin ng cash sa Japan para sa mga lokal na bus tulad ng Magome-Nakatsugawa, mga templo, coin lockers at maliliit na tindahan)",
        },
      },
      {
        id: "suica",
        text: {
          es: "Tarjeta Suica / Pasmo (en el Apple Wallet o lista para adquirir versión física Welcome Suica en Narita)",
          en: "Suica / Pasmo IC card (in Apple Wallet or ready to purchase physical Welcome Suica at Narita)",
          fr: "Carte Suica / Pasmo (dans Apple Wallet ou prête à être achetée en version physique Welcome Suica à Narita)",
          tl: "Suica / Pasmo IC card (sa Apple Wallet o bibilhing Welcome Suica sa Narita Airport)",
        },
      },
      {
        id: "wallet",
        text: {
          es: "Cartera",
          en: "Wallet / Coin purse (Japanese yen has many coins)",
          fr: "Portefeuille / Porte-monnaie (le yen utilise beaucoup de pièces)",
          tl: "Pitaka para sa barya at perang papel",
        },
      },
      {
        id: "keys",
        text: {
          es: "Llaves de casa",
          en: "House keys",
          fr: "Clés de maison",
          tl: "Mga susi ng bahay",
        },
      },
      {
        id: "insurance",
        text: {
          es: "Seguro de viaje contratado — llevar número de póliza y teléfono de asistencia médica 24h a mano",
          en: "Active travel insurance policy — keep policy number and 24/7 medical hotline easily accessible",
          fr: "Assurance voyage souscrite — garder numéro de police et assistance médicale 24h/24 à portée de main",
          tl: "Travel insurance — ihanda ang policy number at 24/7 hotline para sa tulong medikal",
        },
      },
      {
        id: "confirmations",
        text: {
          es: "Billetes y confirmaciones de vuelos y alojamientos (guardadas offline en el móvil o impresas)",
          en: "Flight and hotel booking confirmations (saved offline on phone or printed)",
          fr: "Billets et confirmations d'hôtels et de vols (enregistrés hors ligne ou imprimés)",
          tl: "Mga kumpirmasyon ng flight at hotel (naka-save offline sa mobile o naka-print)",
        },
      },
    ],
  },
  {
    id: "clothes",
    icon: Shirt,
    color: "#2e7d5b",
    title: {
      es: "2. 👕 Ropa y Calzado",
      en: "2. 👕 Clothing & Footwear",
      fr: "2. 👕 Vêtements & Chaussures",
      tl: "2. 👕 Damit at Sapatos",
    },
    shortTitle: {
      es: "Ropa y Calzado",
      en: "Clothing & Footwear",
      fr: "Vêtements & Chaussures",
      tl: "Damit at Sapatos",
    },
    subtitle: {
      es: "Calor/humedad (~26–30°C), fresco en los Alpes y aire acondicionado fuerte",
      en: "Warm & humid (~26–30°C), cool in Alps and strong AC indoors",
      fr: "Chaleur/humidité (~26–30°C), frais dans les Alpes et climatisation forte",
      tl: "Mainit/mahalumigmig (~26–30°C), malamig sa Alps at malakas na aircon",
    },
    notice: {
      es: "En septiembre en Japón suele hacer calor y humedad (~26–30°C), pero refresca en los Alpes y hay aire acondicionado fuerte en trenes/interiores.",
      en: "September in Japan is typically warm and humid (~26–30°C), but cooler in the Alps and trains/shops have strong air conditioning.",
      fr: "En septembre au Japon, le climat est chaud et humide (~26–30°C), mais il fait plus frais dans les Alpes et la climatisation est forte à l'intérieur.",
      tl: "Kadalasan ay mainit at mahalumigmig sa Setyembre (~26–30°C), ngunit malamig sa kabundukan ng Alps at malakas ang aircon sa tren at gusali.",
    },
    items: [
      {
        id: "camisetas",
        text: {
          es: "8 Camisetas (transpirables y de secado rápido)",
          en: "8 T-shirts (breathable, quick-drying)",
          fr: "8 T-shirts (respirants et séchage rapide)",
          tl: "8 T-shirts (presko at mabilis matuyo)",
        },
      },
      {
        id: "pantalones-cortos",
        text: {
          es: "2 Pantalones cortos",
          en: "2 Pairs of shorts",
          fr: "2 Shorts",
          tl: "2 Shorts",
        },
      },
      {
        id: "pantalones-largos",
        text: {
          es: "2 Pantalones largos (para templos, noches frescas o trenes)",
          en: "2 Pairs of long trousers (for temples, cool evenings or trains)",
          fr: "2 Pantalons longs (pour les temples, soirées fraîches ou trains)",
          tl: "2 Mahabang pantalon (para sa mga templo, malamig na gabi o tren)",
        },
      },
      {
        id: "sudaderas",
        text: {
          es: "2 Sudaderas / capas intermedias",
          en: "2 Hoodies / light sweaters",
          fr: "2 Sweats / vestes légères",
          tl: "2 Hoodies / jacket",
        },
      },
      {
        id: "pijama",
        text: {
          es: "Pijama",
          en: "Pyjamas / Sleepwear",
          fr: "Pyjama",
          tl: "Pantulog / Pyjama",
        },
      },
      {
        id: "chubasquero",
        text: {
          es: "Chubasquero / paraguas plegable compacto",
          en: "Rain jacket / compact folding umbrella",
          fr: "Veste imperméable / parapluie pliable compact",
          tl: "Kapote / compact na payong",
        },
      },
      {
        id: "ropa-interior",
        text: {
          es: "Ropa interior (para una semana + opción de lavandería)",
          en: "Underwear (enough for one week + coin laundry)",
          fr: "Sous-vêtements (pour une semaine + laverie)",
          tl: "Pang-ilalim na damit (para sa isang linggo + coin laundry)",
        },
      },
      {
        id: "calcetines",
        text: {
          es: "Calcetines (llevar suficientes y sin agujeros: en Japón te descalzas constantemente en templos, ryokans y restaurantes tradicionales)",
          en: "Socks (bring plenty without holes: in Japan you take your shoes off constantly at temples, ryokans, and traditional restaurants)",
          fr: "Chaussettes (en nombre suffisant et sans trous : au Japon on se déchausse sans cesse dans les temples, ryokans et restaurants traditionnels)",
          tl: "Medyas (magdala ng marami at walang butas: madalas maghubad ng sapatos sa Japan sa mga templo, ryokan at tradisyunal na kainan)",
        },
      },
      {
        id: "zapatillas-deporte",
        text: {
          es: "Zapatillas de deporte para patear la ciudad (se caminan de 20.000 a 35.000 pasos diarios)",
          en: "Comfortable walking shoes (you will walk 20,000 to 35,000 steps daily)",
          fr: "Chaussures de marche confortables (on marche de 20 000 à 35 000 pas par jour)",
          tl: "Komportableng sapatos na panlakad (20,000 hanggang 35,000 hakbang kada araw)",
        },
      },
      {
        id: "zapatillas-repuesto",
        text: {
          es: "Zapatillas de repuesto para paseo por la ciudad o lluvia",
          en: "Backup sneakers for rain or short walks",
          fr: "Paire de baskets de rechange pour la pluie ou balades",
          tl: "Reserbang sapatos sakaling mabasa o para sa maikling lakad",
        },
      },
      {
        id: "chanclas",
        text: {
          es: "Chanclas / calzado fácil de poner",
          en: "Flip-flops / easy slip-on sandals",
          fr: "Tongs / sandales faciles à enfiler",
          tl: "Tsinelas / sandalyas",
        },
      },
      {
        id: "banador",
        text: {
          es: "Bañador (por si visitáis onsens mixtos, spa o zonas acuáticas)",
          en: "Swimsuit (for mixed onsens, spas or water parks)",
          fr: "Maillot de bain (pour onsens mixtes, spas ou parcs aquatiques)",
          tl: "Damit-pampaligo (kung bibisita sa halo-halong onsen o spa)",
        },
      },
      {
        id: "toalla",
        text: {
          es: "Toalla ligera de microfibra (útil para templos y lavatorios)",
          en: "Light microfiber towel (handy for temple purification fountains and hand drying)",
          fr: "Serviette microfibre légère (pratique pour les fontaines de temples et le séchage des mains)",
          tl: "Magaan na microfiber towel (kapaki-pakinabang sa mga templo at pampublikong banyo)",
        },
      },
      {
        id: "cinturon",
        text: {
          es: "Cinturón",
          en: "Belt",
          fr: "Ceinture",
          tl: "Sinturon",
        },
      },
      {
        id: "bolsa-ropa-sucia",
        text: {
          es: "Bolsa para la ropa sucia",
          en: "Laundry bag for dirty clothes",
          fr: "Sac pour le linge sale",
          tl: "Lalagyan ng maruming damit",
        },
      },
    ],
  },
  {
    id: "tech",
    icon: Plug,
    color: "#1d3557",
    title: {
      es: "3. 🔌 Electrónica y Tecnología",
      en: "3. 🔌 Electronics & Tech",
      fr: "3. 🔌 Électronique & Technologie",
      tl: "3. 🔌 Elektronika at Teknolohiya",
    },
    shortTitle: {
      es: "Electrónica y Tecnología",
      en: "Electronics & Tech",
      fr: "Électronique & Technologie",
      tl: "Elektronika at Teknolohiya",
    },
    subtitle: {
      es: "Baterías externas siempre en cabina, prohibidas en bodega",
      en: "Power banks strictly in carry-on, forbidden in checked luggage",
      fr: "Batteries externes en cabine obligatoire, interdites en soute",
      tl: "Power banks sa cabin bag lamang, bawal sa checked baggage",
    },
    notice: {
      es: "Atención: Las baterías externas (Power Banks) deben ir SIEMPRE en equipaje de mano; están prohibidas en bodega.",
      en: "Notice: Power banks must ALWAYS be carried in cabin baggage; they are strictly prohibited in checked luggage.",
      fr: "Attention : Les batteries externes doivent TOUJOURS voyager en cabine ; elles sont formellement interdites en soute.",
      tl: "Paunawa: Ang mga power bank ay DAPAT laging nasa hand luggage; bawal ito sa checked baggage.",
    },
    items: [
      {
        id: "movil",
        text: {
          es: "Móvil / Smartphone",
          en: "Mobile Phone / Smartphone",
          fr: "Téléphone portable / Smartphone",
          tl: "Cellphone / Smartphone",
        },
      },
      {
        id: "cargador-movil",
        text: {
          es: "Cargador del móvil + cables de repuesto",
          en: "Phone charger + spare charging cables",
          fr: "Chargeur de téléphone + câbles de rechange",
          tl: "Charger ng telepono + reserbang kable",
        },
      },
      {
        id: "baterias-externas",
        text: {
          es: "Baterías externas (Power Banks) (capacidad recomendada 10.000–20.000 mAh; en cabina)",
          en: "Power Banks (recommended 10,000–20,000 mAh; in cabin bag)",
          fr: "Batteries externes (Power Bank 10 000–20 000 mAh ; en cabine)",
          tl: "Power Banks (10,000–20,000 mAh; sa cabin bag)",
        },
      },
      {
        id: "adaptador",
        text: {
          es: "Adaptador de enchufe Tipo A (clavijas planas paralelas de 2 patillas, estándar Japón/EE.UU., 100V)",
          en: "Type-A plug adapter (2 flat parallel pins, Japan/US standard, 100V)",
          fr: "Adaptateur de prise Type A (2 fiches plates parallèles, standard Japon/USA, 100V)",
          tl: "Type-A plug adapter (2 flat pins, pamantayang Japan/US, 100V)",
        },
      },
      {
        id: "esim",
        text: {
          es: "eSIM japonesa configurada / reservada (o Pocket WiFi)",
          en: "Japanese eSIM set up / purchased (or Pocket WiFi)",
          fr: "eSIM pour le Japon installée / réservée (ou Pocket WiFi)",
          tl: "eSIM para sa Japan o Pocket WiFi",
        },
      },
      {
        id: "regleta",
        text: {
          es: "Regleta / ladrón de enchufes compacto",
          en: "Compact power strip / multi-plug outlet",
          fr: "Multiprise compacte",
          tl: "Compact na extension cord / multi-plug",
        },
      },
      {
        id: "reloj",
        text: {
          es: "Reloj / Smartwatch",
          en: "Watch / Smartwatch",
          fr: "Montre / Montre connectée",
          tl: "Relo / Smartwatch",
        },
      },
      {
        id: "cargador-reloj",
        text: {
          es: "Cargador del reloj",
          en: "Smartwatch charging cable",
          fr: "Câble de charge pour la montre",
          tl: "Charger ng smartwatch",
        },
      },
      {
        id: "cascos",
        text: {
          es: "Cascos / Auriculares (ideales con cancelación de ruido para los vuelos de 11h y 7h)",
          en: "Headphones / Earphones (noise-cancelling ideal for long flights)",
          fr: "Casque / Écouteurs (à réduction de bruit idéal pour les longs vols)",
          tl: "Headphones / Earphones (mainam na may noise cancellation para sa mahabang biyahe sa eroplano)",
        },
      },
      {
        id: "ebook",
        text: {
          es: "eBook / Lector digital",
          en: "eReader / Kindle / Tablet",
          fr: "Liseuse / Tablette",
          tl: "eReader / Tablet",
        },
      },
    ],
  },
  {
    id: "accessories",
    icon: Backpack,
    color: "#4a5568",
    title: {
      es: "4. 👓 Accesorios y Logística de Viaje",
      en: "4. 👓 Accessories & Daypacks",
      fr: "4. 👓 Accessoires & Sac de Jour",
      tl: "4. 👓 Mga Aksesorya at Bag",
    },
    shortTitle: {
      es: "Accesorios y Logística",
      en: "Accessories & Logistics",
      fr: "Accessoires & Logistique",
      tl: "Mga Aksesorya at Logistik",
    },
    subtitle: {
      es: "Mochila pequeña para excursiones y tramo alpino",
      en: "Daypack for hikes and overnight alpine stays",
      fr: "Petit sac à dos pour les excursions et l'étape alpine",
      tl: "Maliit na backpack para sa mga day trip at sa Alps",
    },
    notice: {
      es: "Mochila pequeña imprescindible para la caminata Magome-Tsumago y para los 3-4 días en los Alpes sin las maletas grandes.",
      en: "A small daypack is essential for the Magome-Tsumago trail and the 3-4 days in the Alps without large suitcases.",
      fr: "Petit sac indispensable pour la randonnée Magome-Tsumago et les 3-4 jours dans les Alpes sans les grandes valises.",
      tl: "Kailangan ang maliit na backpack para sa lakad sa Magome-Tsumago at sa mga araw sa Alps habang naiwan ang malalaking maleta.",
    },
    items: [
      {
        id: "gafas-ver",
        text: {
          es: "Gafas de ver / leer",
          en: "Prescription glasses / reading glasses",
          fr: "Lunettes de vue / de lecture",
          tl: "Salamin sa mata / pangbasa",
        },
      },
      {
        id: "gafas-sol",
        text: {
          es: "Gafas de sol",
          en: "Sunglasses",
          fr: "Lunettes de soleil",
          tl: "Salamin sa araw (Sunglasses)",
        },
      },
      {
        id: "mochila-pequena",
        text: {
          es: "Mochila pequeña (20–30 L)",
          en: "Small daypack (20–30 L)",
          fr: "Petit sac à dos (20–30 L)",
          tl: "Maliit na backpack (20–30 L)",
        },
      },
      {
        id: "antifaz-tapones",
        text: {
          es: "Antifaz y tapones para los oídos (para descansar en vuelos largos de 11h/7h y trenes)",
          en: "Eye mask & earplugs (for restful sleep on 11h/7h flights and trains)",
          fr: "Masque de sommeil & bouchons d'oreilles (pour les vols long-courriers et trains)",
          tl: "Eye mask at earplugs (para sa mahabang biyahe sa eroplano at tren)",
        },
      },
    ],
  },
  {
    id: "hygiene",
    icon: Droplets,
    color: "#c9a227",
    title: {
      es: "5. 🧴 Aseo e Higiene Personal",
      en: "5. 🧴 Toiletries & Personal Care",
      fr: "5. 🧴 Toilette & Soins Personnels",
      tl: "5. 🧴 Personal na Gamit at Kalinisan",
    },
    shortTitle: {
      es: "Aseo e Higiene",
      en: "Toiletries & Care",
      fr: "Toilette & Soins",
      tl: "Kalinisan at Pangangalaga",
    },
    subtitle: {
      es: "Líquidos en envases ≤100ml en cabina y botiquín",
      en: "Liquids ≤100ml in cabin clear bag and first aid kit",
      fr: "Flacons liquides ≤100ml en cabine et trousse de secours",
      tl: "Mga likido ≤100ml sa cabin bag at first aid kit",
    },
    notice: {
      es: "Líquidos en equipaje de mano en recipientes de máx. 100 ml dentro de bolsa transparente con cierre.",
      en: "Cabin liquids must be in containers of max 100ml each, inside a single transparent resealable bag.",
      fr: "Liquides en cabine dans des flacons de 100 ml max dans un sac plastique transparent refermable.",
      tl: "Ang mga likido sa hand luggage ay dapat nasa lalagyang hindi lalampas sa 100ml bawat isa sa transparent resealable bag.",
    },
    items: [
      {
        id: "cepillo-dientes",
        text: {
          es: "Cepillo de dientes",
          en: "Toothbrush",
          fr: "Brosse à dents",
          tl: "Sepilyo",
        },
      },
      {
        id: "cargador-cepillo",
        text: {
          es: "Cargador del cepillo de dientes",
          en: "Electric toothbrush charger",
          fr: "Chargeur de brosse à dents",
          tl: "Charger ng electric toothbrush",
        },
      },
      {
        id: "pasta-dientes",
        text: {
          es: "Pasta de dientes",
          en: "Toothpaste",
          fr: "Dentifrice",
          tl: "Toothpaste",
        },
      },
      {
        id: "afeitadora",
        text: {
          es: "Afeitadora / Maquinilla",
          en: "Shaver / Razor",
          fr: "Rasoir",
          tl: "Pang-ahit",
        },
      },
      {
        id: "cargador-afeitadora",
        text: {
          es: "Cargador de la afeitadora",
          en: "Shaver charging cable",
          fr: "Chargeur de rasoir",
          tl: "Charger ng pang-ahit",
        },
      },
      {
        id: "aparato-dental",
        text: {
          es: "Férula o retenedor dental",
          en: "Dental retainer / mouthguard",
          fr: "Gouttière dentaire",
          tl: "Dental retainer",
        },
      },
      {
        id: "desodorante",
        text: {
          es: "Desodorante",
          en: "Deodorant",
          fr: "Déodorant",
          tl: "Deodorant",
        },
      },
      {
        id: "colonia",
        text: {
          es: "Colonia / Perfume",
          en: "Cologne / Perfume",
          fr: "Parfum / Eau de toilette",
          tl: "Pabango",
        },
      },
      {
        id: "crema-labios",
        text: {
          es: "Crema o bálsamo labial (para el aire seco de los aviones)",
          en: "Lip balm (for dry airplane cabin air)",
          fr: "Baume à lèvres (pour l'air sec en avion)",
          tl: "Lip balm (para sa tuyong hangin sa eroplano)",
        },
      },
      {
        id: "pinzas",
        text: {
          es: "Pinzas",
          en: "Tweezers",
          fr: "Pince à épiler",
          tl: "Tiyani / Tweezers",
        },
      },
      {
        id: "cortaunas",
        text: {
          es: "Cortauñas",
          en: "Nail clipper",
          fr: "Coupe-ongles",
          tl: "Gupit sa kuko (Nail clipper)",
        },
      },
      {
        id: "botiquin-medicacion",
        text: {
          es: "Mini botiquín y medicación personal (pastillas habituales / tensión, melatonina para jet lag, analgésicos y tiritas)",
          en: "First aid kit & personal medications (prescriptions, melatonin for jet lag, painkillers, plasters)",
          fr: "Trousse à pharmacie & médicaments personnels (traitements, mélatonine décalage horaire, antalgiques, pansements)",
          tl: "First aid kit at personal na gamot (mga regular na gamot, melatonin para sa jet lag, painkillers, band-aid)",
        },
      },
      {
        id: "repelente-mosquitos",
        text: {
          es: "Repelente de mosquitos (para senderos, valles y templos rodeados de bosque)",
          en: "Mosquito repellent (for trails, valleys, and forest temples)",
          fr: "Répulsif anti-moustiques (pour les sentiers, vallées et temples boisés)",
          tl: "Mosquito repellent (para sa mga trail, lambak at mga templo sa gubat)",
        },
      },
    ],
  },
];
