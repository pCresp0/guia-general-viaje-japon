import React, { useState } from "react";
import { useContent, useT, useLang } from "../i18n/LanguageContext";
import { ExternalLink, Terminal, Copy, Check, Sparkles, Code2, WifiOff, Layers, Smartphone, Volume2, Search, Map, CloudSun, Globe, Printer, Hand, Rocket } from "lucide-react";

const aboutLocales = {
  es: {
    originTitle: "¿Cómo y por qué nació este proyecto?",
    originP1: "Esta web nació con una meta ambiciosa: <strong>eliminar por completo</strong> los PDFs pesados de decenas de páginas, los Excels ilegibles en el móvil y los grupos de mensajería con enlaces y billetes perdidos entre cientos de mensajes.",
    originP2: "En su lugar, creamos una <strong>Progressive Web App (PWA) interactiva, rápida y con arquitectura offline-first</strong> (todo el itinerario, hoteles, transportes y presupuestos disponibles sin conexión) para vivir un viaje de 16 días por Japón (Tokio, Kioto, Osaka, Kanazawa, Takayama y Magome).",
    originP3: "Tras completar la aventura, he adaptado la plataforma como <strong>guía pública de referencia y plantilla de código abierto</strong> para que cualquier persona que planee viajar a Japón pueda inspirarse, consultar cada detalle o reutilizar la base técnica para su propio viaje.",
    openSource: "Open Source",
    viewRepo: "Ver repositorio",
    ssotTitle: "Arquitectura: Single Source of Truth (SSOT)",
    ssotP1: "<strong>Cero latencia y cero dependencias externas:</strong> A diferencia de apps que dependen de bases de datos remotas o llamadas constantes a la nube, aquí todos los datos (itinerario minuto a minuto, hoteles, billetes interactivos, historia, frases y gastronomía) están incrustados directamente como módulos de datos estructurados en JavaScript dentro de <code>src/data/</code>.",
    ssotP2: "Cargar la web equivale a descargar la base de datos íntegra. El Service Worker de Workbox la guarda en la caché del navegador para que nunca te quedes sin información, aunque pierdas la cobertura en un túnel del Shinkansen o en una montaña remota.",
    featuresTitle: "Funcionalidades destacadas de la guía",
    stackTitle: "Tecnologías y Stack Técnico",
    techReact: "Arquitectura SPA de alto rendimiento, modular y compilada con Rollup para un bundle mínimo.",
    techPwa: "Service Worker que cachea todo el contenido. Funciona al 100% en trenes bala, aviones y zonas rurales.",
    techTailwind: "Diseñado milimétricamente para móviles, con soporte de Safe Area Insets de iOS y paleta tradicional nipona.",
    techSwipe: "Navegación nativa por gestos con react-swipeable: desliza para abrir y cerrar el menú lateral en cualquier vista.",
    techI18n: "Sistema nativo ligero con React Context (Español, English, Français, Tagalog) sin librerías pesadas.",
    techMap: "Interactivos, ligeros y basados en OpenStreetMap, sin costes de Google Maps API ni rastreadores.",
    techTts: "Narrador nativo del navegador para escuchar la historia de Japón sin descargar megabytes de audios.",
    techSearch: "Indexación instantánea en memoria con navegación directa, apertura de pestañas y resalte visual luminoso.",
    techWeather: "Predicciones meteorológicas en vivo con caché local de 12 horas para preservar la batería del dispositivo.",
    techPrint: "Vistas y estilos @media print dedicados para imprimir la hoja de ruta o guardarla en PDF como respaldo sin batería.",
    cloneTitle: "¿Quieres clonarla y personalizarla? (Vibecoding / Dev)",
    cloneIntro: "Si estás preparando tu propio viaje a Japón o quieres tomar esta app como plantilla para cualquier otro destino, puedes clonar el repositorio y adaptarla a tu gusto:",
    copyCommands: "Copiar comandos",
    copied: "¡Copiado!",
    stepClone: "# 1. Clona el repositorio",
    stepCd: "# 2. Entra en la carpeta",
    stepRun: "# 3. Instala dependencias y lanza el entorno local",
    forDevsTitle: "💻 Para programadores",
    forDevsDesc: "Edita directamente los ficheros en <code>src/data/trip.js</code> (itinerario, hoteles, vuelos y fechas), <code>src/data/mapData.js</code> (coordenadas del mapa) y <code>src/data/pending.js</code> (checklist). La interfaz reactiva se actualizará en tiempo real.",
    forVibecodersTitle: "🤖 Para Vibecoders (IA)",
    forVibecodersDesc: "Puedes utilizar IDEs como <strong>Antigravity, Cursor o Visual Studio Code</strong> (con alguna extensión como <strong>GitHub Copilot o Claude Code</strong>). Una vez clonado el repositorio, pídele al agente en el chat: <em>\"Adapta los datos de trip.js y mapData.js para mi viaje a Japón de 12 días con estas ciudades y fechas: [...] manteniendo intacta la estructura y el diseño de componentes.\"</em>",
    ghPagesTitle: "🚀 Despliegue gratuito en GitHub Pages",
    ghPagesDesc: "El repositorio ya cuenta con el flujo automatizado en <code>.github/workflows/deploy.yml</code>. Solo tienes que configurar <strong>Settings ➔ Pages ➔ Source: GitHub Actions</strong> en tu repositorio de GitHub. Si cambias el nombre del repositorio, actualiza la propiedad <code>base</code> en <code>vite.config.js</code> y tendrás tu guía online con HTTPS y PWA de forma 100% gratuita.",
    goToRepo: "Ir al repositorio:",
  },
  en: {
    originTitle: "Why and how this project was born",
    originP1: "This web app was created with an ambitious goal: <strong>completely replace</strong> heavy multi-page PDFs, illegible spreadsheets on mobile screens, and messy group chats where tickets and bookings get lost among hundreds of messages.",
    originP2: "In their place, we built an <strong>interactive, fast Progressive Web App (PWA) with an offline-first architecture</strong> (the entire itinerary, hotels, transports, and budget available without internet) for a 16-day journey across Japan (Tokyo, Kyoto, Osaka, Kanazawa, Takayama, and Magome).",
    originP3: "After completing the adventure, I adapted the platform as a <strong>public reference guide and open-source template</strong> so anyone planning a trip to Japan can draw inspiration, explore every detail, or reuse the technical codebase for their own trip.",
    openSource: "Open Source",
    viewRepo: "View repository",
    ssotTitle: "Architecture: Single Source of Truth (SSOT)",
    ssotP1: "<strong>Zero latency and zero external dependencies:</strong> Unlike apps reliant on remote databases or constant cloud requests, all data (minute-by-minute itinerary, hotels, interactive tickets, history, phrases, and gastronomy) is embedded directly as structured JavaScript modules in <code>src/data/</code>.",
    ssotP2: "Loading the web app is equivalent to downloading the entire database. The Workbox Service Worker caches it locally so you never run out of information, even when losing signal inside a Shinkansen tunnel or high in the mountains.",
    featuresTitle: "Featured Guide Capabilities",
    stackTitle: "Technologies & Technical Stack",
    techReact: "High-performance modular SPA architecture bundled with Rollup for minimal transfer size.",
    techPwa: "Service Worker caching all assets. Operates 100% offline in bullet trains, planes, and rural mountain areas.",
    techTailwind: "Pixel-perfect mobile layout supporting iOS Safe Area Insets and a traditional Japanese aesthetic palette.",
    techSwipe: "Native gesture navigation via react-swipeable: swipe left or right anywhere to open and close the drawer menu.",
    techI18n: "Custom lightweight React Context architecture supporting 4 languages without bulky external dependencies.",
    techMap: "Interactive, lightweight OpenStreetMap vector maps with zero Google Maps API costs or tracking scripts.",
    techTts: "Native browser speech synthesis narrator to listen to Japanese history without downloading heavy audio files.",
    techSearch: "Instant in-memory indexing with direct navigation, automatic accordion opening, and visual glow highlights.",
    techWeather: "Live forecasts powered by Open-Meteo with 12-hour local caching to preserve mobile device battery.",
    techPrint: "Dedicated clean @media print views and styles to export the full roadmap or history to PDF for offline emergencies.",
    cloneTitle: "Want to clone and customize it? (Vibecoding / Dev)",
    cloneIntro: "If you are planning your own trip to Japan or want to use this app as a template for any other destination worldwide, you can clone the repository and customize it freely:",
    copyCommands: "Copy commands",
    copied: "Copied!",
    stepClone: "# 1. Clone the repository",
    stepCd: "# 2. Enter directory",
    stepRun: "# 3. Install dependencies and start dev server",
    forDevsTitle: "💻 For Developers",
    forDevsDesc: "Directly edit files in <code>src/data/trip.js</code> (itinerary, hotels, flights, and dates), <code>src/data/mapData.js</code> (map coordinates), and <code>src/data/pending.js</code> (checklist). The reactive UI updates in real time.",
    forVibecodersTitle: "🤖 For Vibecoders (AI)",
    forVibecodersDesc: "You can use AI-powered IDEs like <strong>Antigravity, Cursor, or Visual Studio Code</strong> (with extensions like <strong>GitHub Copilot or Claude Code</strong>). Once cloned, ask the AI in chat: <em>\"Adapt the data in trip.js and mapData.js for my 12-day trip to Japan with these cities and dates: [...] keeping the component architecture and layout intact.\"</em>",
    ghPagesTitle: "🚀 Free Deployment on GitHub Pages",
    ghPagesDesc: "The repository includes an automated workflow in <code>.github/workflows/deploy.yml</code>. Simply configure <strong>Settings ➔ Pages ➔ Source: GitHub Actions</strong> in your GitHub repo. If you rename the repo, update the <code>base</code> path in <code>vite.config.js</code> for 100% free HTTPS and PWA hosting.",
    goToRepo: "Go to repository:",
  },
  fr: {
    originTitle: "Pourquoi et comment ce projet est né",
    originP1: "Cette application web est née avec un objectif clair : <strong>remplacer définitivement</strong> les PDF lourds de dizaines de pages, les feuilles Excel illisibles sur mobile et les discussions de groupe où les billets et réservations se perdent parmi des centaines de messages.",
    originP2: "À la place, nous avons conçu une <strong>Progressive Web App (PWA) interactive, rapide et 100% hors ligne</strong> (tout l'itinéraire, les hôtels, les transports et les budgets accessibles sans réseau) pour un voyage de 16 jours au Japon (Tokyo, Kyoto, Osaka, Kanazawa, Takayama et Magome).",
    originP3: "L'aventure terminée, j'ai adapté la plateforme comme <strong>guide de référence public et modèle open-source</strong> afin que toute personne préparant son voyage au Japon puisse s'en inspirer, consulter chaque détail ou réutiliser le socle technique.",
    openSource: "Open Source",
    viewRepo: "Voir le dépôt",
    ssotTitle: "Architecture : Single Source of Truth (SSOT)",
    ssotP1: "<strong>Zéro latence et zéro dépendance externe :</strong> Contrairement aux applications tributaires de bases de données distantes, toutes les données (itinéraire détaillé, hôtels, fiches de transport, histoire, gastronomie) sont intégrées sous forme de modules JavaScript structurés dans <code>src/data/</code>.",
    ssotP2: "Charger le site équivaut à télécharger l'intégralité de la base de données. Le Service Worker de Workbox la conserve en cache local pour ne jamais manquer d'informations, même dans un tunnel du Shinkansen ou en montagne.",
    featuresTitle: "Fonctionnalités clés du guide",
    stackTitle: "Technologies et Stack Technique",
    techReact: "Architecture SPA modulaire haute performance compilée avec Rollup pour un bundle minimal.",
    techPwa: "Service Worker mettant en cache tous les contenus. Fonctionne à 100% hors ligne dans les trains, avions et zones rurales.",
    techTailwind: "Mise en page mobile soignée avec support des Safe Area Insets iOS et palette traditionnelle japonaise.",
    techSwipe: "Navigation gestuelle fluide via react-swipeable : glissez pour ouvrir ou fermer le tiroir latéral sur n'importe quel écran.",
    techI18n: "Système multilingue léger avec React Context (Español, English, Français, Tagalog) sans librairies lourdes.",
    techMap: "Cartes vectorielles interactives et légères basées sur OpenStreetMap, sans frais d'API Google Maps.",
    techTts: "Synthèse vocale native du navigateur pour écouter l'histoire du Japon sans télécharger de fichiers audio volumineux.",
    techSearch: "Indexation instantanée en mémoire avec navigation directe, ouverture des onglets et surbrillance lumineuse.",
    techWeather: "Prévisions météo en direct avec Open-Meteo et cache local de 12 heures pour préserver la batterie.",
    techPrint: "Styles et vues d'impression propres (@media print) pour exporter l'itinéraire ou l'histoire en PDF de secours.",
    cloneTitle: "Envie de le cloner et de le personnaliser ? (Vibecoding / Dev)",
    cloneIntro: "Si vous préparez votre propre voyage au Japon ou souhaitez utiliser cette app comme modèle pour une autre destination, vous pouvez cloner le dépôt et l'adapter à vos envies :",
    copyCommands: "Copier les commandes",
    copied: "Copié !",
    stepClone: "# 1. Cloner le dépôt",
    stepCd: "# 2. Entrer dans le dossier",
    stepRun: "# 3. Installer les dépendances et lancer le serveur local",
    forDevsTitle: "💻 Pour les développeurs",
    forDevsDesc: "Modifiez directement les fichiers dans <code>src/data/trip.js</code> (itinéraire, hôtels, vols et dates), <code>src/data/mapData.js</code> (coordonnées) et <code>src/data/pending.js</code> (checklist). L'interface réactive se met à jour en temps réel.",
    forVibecodersTitle: "🤖 Pour les Vibecoders (IA)",
    forVibecodersDesc: "Vous pouvez utiliser des EDI IA tels qu'<strong>Antigravity, Cursor ou Visual Studio Code</strong> (avec <strong>GitHub Copilot ou Claude Code</strong>). Une fois cloné, demandez à l'IA : <em>\"Adapte les données de trip.js et mapData.js pour mon voyage de 12 jours au Japon avec ces villes et dates : [...] en conservant la structure et le design des composants.\"</em>",
    ghPagesTitle: "🚀 Déploiement gratuit sur GitHub Pages",
    ghPagesDesc: "Le dépôt intègre le workflow automatisé dans <code>.github/workflows/deploy.yml</code>. Configurez simplement <strong>Settings ➔ Pages ➔ Source: GitHub Actions</strong> sur GitHub. Si vous renommez le dépôt, mettez à jour la propriété <code>base</code> dans <code>vite.config.js</code> pour un hébergement gratuit avec HTTPS et PWA.",
    goToRepo: "Aller au dépôt :",
  },
  tl: {
    originTitle: "Bakit at paano nabuo ang proyektong ito",
    originP1: "Nilikha ang web app na ito na may malinaw na layunin: <strong>ganap na palitan</strong> ang mabibigat na PDF, magugulong Excel spreadsheet sa mobile, at kalat na group chats kung saan nawawala ang mga booking sa daan-daang mensahe.",
    originP2: "Sa halip, gumawa kami ng isang <strong>interactive, mabilis na Progressive Web App (PWA) na may offline-first architecture</strong> (ang buong itineraryo, mga hotel, transportasyon, at badyet ay available nang walang internet) para sa 16 na araw na biyahe sa Japan (Tokyo, Kyoto, Osaka, Kanazawa, Takayama, at Magome).",
    originP3: "Matapos ang biyahe, inangkop ko ang platform bilang <strong>pampublikong gabay at open-source na template</strong> upang ang sinumang nagpaplanong pumunta sa Japan ay makakuha ng inspirasyon, makita ang bawat detalye, o muling magamit ang teknikal na base para sa kanilang sariling biyahe.",
    openSource: "Open Source",
    viewRepo: "Tingnan ang repositoryo",
    ssotTitle: "Arkitektura: Single Source of Truth (SSOT)",
    ssotP1: "<strong>Zero latency at zero external dependencies:</strong> Hindi tulad ng mga app na umaasa sa mga remote database, ang lahat ng impormasyon (itineraryo, hotel, interactive na tiket, kasaysayan, gastronomy) ay nakapaloob bilang structured JavaScript modules sa <code>src/data/</code>.",
    ssotP2: "Ang pag-load sa web app ay katumbas ng pag-download ng buong database. Iniimbak ito ng Workbox Service Worker sa local cache upang laging may impormasyon, kahit mawalan ng signal sa Shinkansen tunnel o kabundukan.",
    featuresTitle: "Mga Pangunahing Kakayahan ng Gabay",
    stackTitle: "Mga Teknolohiya at Stack",
    techReact: "Mataas na pagganap at modular na SPA architecture na binuo gamit ang Rollup para sa maliit na bundle size.",
    techPwa: "Service Worker na nagka-cache ng lahat ng asset. 100% gumagana nang offline sa mga bullet train, eroplano, at bundok.",
    techTailwind: "Tumpak na mobile layout na sumusuporta sa iOS Safe Area Insets at tradisyonal na Japanese aesthetic palette.",
    techSwipe: "Makinis na gesture navigation gamit ang react-swipeable: mag-swipe para buksan o isara ang drawer menu sa anumang screen.",
    techI18n: "Magaang sariling React Context architecture na sumusuporta sa 4 na wika nang walang mabibigat na external library.",
    techMap: "Interactive at magaang OpenStreetMap vector maps na walang bayad sa Google Maps API.",
    techTts: "Katutubong speech synthesis ng browser para pakinggan ang kasaysayan ng Hapon nang hindi nagda-download ng malalaking audio.",
    techSearch: "Mabilis na in-memory indexing na may direktang nabigasyon, auto-accordion opening, at visual glow highlights.",
    techWeather: "Live na panahon mula sa Open-Meteo na may 12 oras na local cache para makatipid sa baterya ng telepono.",
    techPrint: "Malinis na @media print views at styles para i-export ang buong ruta o kasaysayan sa PDF sakaling maubusan ng baterya.",
    cloneTitle: "Gusto mo bang i-clone at i-customize? (Vibecoding / Dev)",
    cloneIntro: "Kung naghahanda ka para sa sarili mong biyahe sa Japan o nais mong gamitin ang app na ito bilang template para sa ibang destinasyon, maaari mong i-clone ang repositoryo:",
    copyCommands: "Kopyahin ang commands",
    copied: "Nakopya na!",
    stepClone: "# 1. I-clone ang repositoryo",
    stepCd: "# 2. Pumasok sa folder",
    stepRun: "# 3. Mag-install ng dependencies at simulan ang dev server",
    forDevsTitle: "💻 Para sa mga Developer",
    forDevsDesc: "Direktang i-edit ang mga file sa <code>src/data/trip.js</code> (itineraryo, hotel, flight, at petsa), <code>src/data/mapData.js</code> (coordinates), at <code>src/data/pending.js</code> (checklist). Awtomatikong mag-a-update ang reactive UI.",
    forVibecodersTitle: "🤖 Para sa mga Vibecoder (AI)",
    forVibecodersDesc: "Maaari kang gumamit ng AI-powered IDEs tulad ng <strong>Antigravity, Cursor, o Visual Studio Code</strong> (gamit ang <strong>GitHub Copilot o Claude Code</strong>). Kapag na-clone na, sabihin sa AI sa chat: <em>\"I-adjust ang data sa trip.js at mapData.js para sa aking 12-araw na biyahe sa Japan na may mga lungsod at petsang ito: [...] habang pinapanatiling buo ang istruktura at layout ng mga component.\"</em>",
    ghPagesTitle: "🚀 Libreng Deployment sa GitHub Pages",
    ghPagesDesc: "May kasama nang automated workflow ang repositoryo sa <code>.github/workflows/deploy.yml</code>. I-set up lamang ang <strong>Settings ➔ Pages ➔ Source: GitHub Actions</strong> sa iyong GitHub repo. Kung papalitan mo ang pangalan ng repo, i-update ang <code>base</code> path sa <code>vite.config.js</code> para sa libreng HTTPS at PWA hosting.",
    goToRepo: "Pumunta sa repositoryo:",
  }
};

export default function AboutPage() {
  const { tripMeta } = useContent();
  const t = useT();
  const { lang } = useLang();
  const [copied, setCopied] = useState(false);

  const L = aboutLocales[lang] || aboutLocales.es;

  const repoUrl = tripMeta.about?.repoUrl || "https://github.com/pCresp0/guia-general-viaje-japon";
  const repoName = tripMeta.about?.repoName || "pCresp0/guia-general-viaje-japon";

  const cloneCommands = `git clone ${repoUrl}.git\ncd guia-general-viaje-japon\nnpm install\nnpm run dev`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(cloneCommands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const techStack = [
    {
      icon: <Code2 size={18} style={{ color: "var(--shu)" }} />,
      name: "React 19 + Vite 8",
      desc: L.techReact
    },
    {
      icon: <WifiOff size={18} style={{ color: "#2e7d5b" }} />,
      name: "PWA Offline-First (Workbox)",
      desc: L.techPwa
    },
    {
      icon: <Smartphone size={18} style={{ color: "var(--indigo)" }} />,
      name: "Tailwind CSS v4 & Mobile-First",
      desc: L.techTailwind
    },
    {
      icon: <Hand size={18} style={{ color: "var(--shu)" }} />,
      name: "Gestos Táctiles (Swipe)",
      desc: L.techSwipe
    },
    {
      icon: <Globe size={18} style={{ color: "#b08968" }} />,
      name: "Multi-idioma Propio (4 idiomas)",
      desc: L.techI18n
    },
    {
      icon: <Map size={18} style={{ color: "#2e7d5b" }} />,
      name: "Mapas Vectoriales (Leaflet)",
      desc: L.techMap
    },
    {
      icon: <Volume2 size={18} style={{ color: "var(--shu)" }} />,
      name: "Web Speech API (Text-to-Speech)",
      desc: L.techTts
    },
    {
      icon: <Search size={18} style={{ color: "var(--indigo)" }} />,
      name: "Buscador Global Reactivo",
      desc: L.techSearch
    },
    {
      icon: <CloudSun size={18} style={{ color: "#e09f3e" }} />,
      name: "Clima con Caché (Open-Meteo)",
      desc: L.techWeather
    },
    {
      icon: <Printer size={18} style={{ color: "var(--indigo)" }} />,
      name: "Modo Impresión & Exportación PDF",
      desc: L.techPrint
    }
  ];

  return (
    <div className="px-4 pt-3 pb-16">
      {/* Encabezado */}
      <div className="mb-6">
        <p className="eyebrow mb-1" style={{ color: "var(--shu)" }}>
          {t("about.eyebrow") || "Desarrollo & Arquitectura"}
        </p>
        <h1 className="font-display text-2xl md:text-3xl" style={{ color: "var(--indigo)", margin: 0 }}>
          {t("about.title") || "Sobre esta web"}
        </h1>
      </div>

      {/* Tarjeta de Origen y Propósito */}
      <div
        className="rounded-2xl border p-5 mb-6 shadow-xs"
        style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">⛩️</span>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--indigo)", margin: 0 }}>
            {L.originTitle}
          </h2>
        </div>
        <div className="space-y-3" style={{ fontSize: 14.5, color: "var(--ink)", lineHeight: 1.65 }}>
          <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: L.originP1 }} />
          <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: L.originP2 }} />
          <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: L.originP3 }} />
        </div>
      </div>

      {/* Banner / Acceso Directo al Repositorio de GitHub */}
      <div
        className="rounded-2xl border p-5 mb-6 shadow-xs"
        style={{
          borderColor: "var(--line)",
          background: "var(--paper-raised)",
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#24292f", color: "#ffffff" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm" style={{ color: "var(--ink)" }}>{repoName}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(46,125,91,0.15)", color: "#2e7d5b" }}>
                  {L.openSource}
                </span>
              </div>
              <p className="text-xs text-[var(--ink-soft)] mt-0.5" style={{ wordBreak: "break-all" }}>
                {repoUrl}
              </p>
            </div>
          </div>

          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-xl px-4 py-2.5 transition-all shadow-sm"
            style={{
              background: "#24292f",
              color: "#ffffff",
              textDecoration: "none",
              whiteSpace: "nowrap"
            }}
          >
            <span>{L.viewRepo}</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Filosofía Técnica: Cero Backend y SSOT */}
      <div
        className="rounded-2xl border p-5 mb-6"
        style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Layers size={19} style={{ color: "var(--shu)" }} />
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--indigo)", margin: 0 }}>
            {L.ssotTitle}
          </h2>
        </div>
        <div className="space-y-3" style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.65 }}>
          <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: L.ssotP1 }} />
          <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: L.ssotP2 }} />
        </div>
      </div>

      {/* Funcionalidades destacadas de la plataforma */}
      {tripMeta.about?.features?.length > 0 && (
        <div
          className="rounded-2xl border p-5 mb-6 shadow-xs"
          style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">✨</span>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--indigo)", margin: 0 }}>
              {L.featuresTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {tripMeta.about.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border flex items-start gap-3"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--paper)",
                }}
              >
                <span className="text-2xl flex-shrink-0 select-none">{feat.icon}</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", margin: "0 0 4px 0" }}>
                    {feat.title}
                  </h3>
                  <div
                    style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.55 }}
                    dangerouslySetInnerHTML={{ __html: feat.text }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tecnologías Utilizadas (El Stack) */}
      <div
        className="rounded-2xl border p-5 mb-6"
        style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={19} style={{ color: "var(--shu)" }} />
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--indigo)", margin: 0 }}>
            {L.stackTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border flex flex-col justify-start"
              style={{
                borderColor: "var(--line)",
                background: "var(--paper)",
              }}
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,0,0,0.03)" }}>
                  {tech.icon}
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", margin: 0 }}>
                  {tech.name}
                </h3>
              </div>
              <p style={{ fontSize: 12.5, color: "var(--ink)", opacity: 0.8, lineHeight: 1.5, margin: 0 }}>
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Clonación, Personalización y Vibecoding */}
      <div
        className="rounded-2xl border p-5 mb-6 shadow-xs"
        style={{
          borderColor: "rgba(46,125,91,0.25)",
          background: "var(--paper-raised)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Terminal size={20} style={{ color: "#2e7d5b" }} />
          <h2 style={{ fontSize: 16.5, fontWeight: 700, color: "var(--indigo)", margin: 0 }}>
            {L.cloneTitle}
          </h2>
        </div>

        <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.6, margin: "0 0 14px 0" }}>
          {L.cloneIntro}
        </p>

        {/* Consola con comandos */}
        <div
          className="rounded-xl p-4 font-mono text-xs relative mb-4 overflow-x-auto"
          style={{
            background: "#1e1e1e",
            color: "#e0e0e0",
            border: "1px solid #333",
          }}
        >
          <button
            onClick={handleCopy}
            className="absolute top-2.5 right-2.5 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-sans transition-all cursor-pointer"
            style={{
              background: copied ? "#2e7d5b" : "rgba(255,255,255,0.12)",
              color: "#ffffff",
              border: "none",
            }}
          >
            {copied ? (
              <>
                <Check size={13} />
                <span>{L.copied}</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>{L.copyCommands}</span>
              </>
            )}
          </button>
          <div className="space-y-1 pr-24">
            <p className="text-gray-400 select-none">{L.stepClone}</p>
            <p className="text-green-400">git clone {repoUrl}.git</p>
            <p className="text-gray-400 select-none mt-2">{L.stepCd}</p>
            <p className="text-yellow-300">cd guia-general-viaje-japon</p>
            <p className="text-gray-400 select-none mt-2">{L.stepRun}</p>
            <p className="text-blue-300">npm install</p>
            <p className="text-blue-300">npm run dev</p>
          </div>
        </div>

        {/* Los dos caminos: programación clásica o vibecoding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div
            className="p-3.5 rounded-xl border"
            style={{ background: "var(--paper)", borderColor: "var(--line)" }}
          >
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "var(--shu)", margin: "0 0 6px 0" }}>
              {L.forDevsTitle}
            </h3>
            <p style={{ fontSize: 13, color: "var(--ink)", opacity: 0.85, lineHeight: 1.5, margin: 0 }} dangerouslySetInnerHTML={{ __html: L.forDevsDesc }} />
          </div>

          <div
            className="p-3.5 rounded-xl border"
            style={{ background: "var(--paper)", borderColor: "var(--line)" }}
          >
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "#2e7d5b", margin: "0 0 6px 0" }}>
              {L.forVibecodersTitle}
            </h3>
            <p style={{ fontSize: 13, color: "var(--ink)", opacity: 0.85, lineHeight: 1.5, margin: 0 }} dangerouslySetInnerHTML={{ __html: L.forVibecodersDesc }} />
          </div>
        </div>

        {/* Despliegue en GitHub Pages */}
        <div
          className="p-4 rounded-xl border mt-3 flex items-start gap-3"
          style={{ background: "rgba(30, 58, 138, 0.04)", borderColor: "rgba(30, 58, 138, 0.15)" }}
        >
          <Rocket size={20} style={{ color: "var(--indigo)", flexShrink: 0, marginTop: 2 }} />
          <div>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "var(--indigo)", margin: "0 0 4px 0" }}>
              {L.ghPagesTitle}
            </h3>
            <p style={{ fontSize: 12.5, color: "var(--ink)", opacity: 0.85, lineHeight: 1.55, margin: 0 }} dangerouslySetInnerHTML={{ __html: L.ghPagesDesc }} />
          </div>
        </div>
      </div>

      {/* Enlace final a GitHub */}
      <div className="text-center pt-2">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-xl px-6 py-3.5 transition-all shadow-sm"
          style={{
            background: "var(--ink)",
            color: "var(--paper)",
            textDecoration: "none",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <span>{L.goToRepo} {repoName}</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
