import { useState, useEffect } from "react";
import { MapPin, Utensils, Coffee, Mountain, ChevronDown } from "lucide-react";
import GuideCard from "../components/GuideCard";
import { formatDateShort } from "../utils/date";
import { useT, useContent } from "../i18n/LanguageContext";
import { useHighlight } from "../context/HighlightContext";
import { slug } from "../utils/slug";
import googleMapsIcon from "../assets/icons/google-maps.png";

// Lugares que tienen guía detallada disponible (id del lugar → id de la guía)
const guideFor = {
  kiyomizu: "kiyomizu-dera",
  fushimi: "fushimi-inari",
  arashiyama: "arashiyama",
  kinkaku: "kinkaku-ji",
  ginkaku: "ginkaku-ji",
  senso: "senso-ji",
  meiji: "meiji-jingu",
  fuji: "fuji",
};

/** Orden cronológico del viaje. `day` = nº de día del itinerario (null = flexible / opcional). */
const places = [
  {
    id: "restaurantes",
    titleKey: "places.restaurants",
    category: "Restaurantes",
    icon: Utensils,
    color: "#2e7d5b",
    items: [
      {
        id: "kaiten-sushi-uogashi",
        name: "Kaiten-Sushi Uogashi (AEON Mall Kyoto)",
        city: "Kioto",
        day: 1,
        desc: "Restaurante de sushi en cinta transportadora (kaiten-zushi) a 5 min de Kyoto Station. Excelente variedad de pescado fresco y nigiris a buen precio.",
        mapsUrl: "https://maps.app.goo.gl/ByDBQB6zaVZ3dj2E6",
      },
      {
        id: "gyumabushi-miyama",
        name: "Gyumabushi Miyama (牛まぶし三山)",
        city: "Nara",
        day: 2,
        desc: "Especialistas en gyumabushi: cuencos de arroz cubiertos de tierna ternera wagyu que se degustan en tres pasos con condimentos y caldo dashi.",
        mapsUrl: "https://maps.app.goo.gl/NjR7MNt97GDZszJm6",
      },
      {
        id: "engine-ramen",
        name: "Kyoto Engine Ramen",
        city: "Kioto",
        day: 2,
        desc: "Ramen artesanal de autor en el histórico callejón peatonal de Pontocho. Caldos intensos y sabrosos, con opciones locales y vegetarianas.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kyoto+Engine+Ramen+Kyoto",
      },
      {
        id: "sukiyaki-yama",
        name: "Sukiyaki Yamamoto",
        city: "Kioto",
        day: 3,
        desc: "Sukiyaki tradicional de wagyu premium cocinado a fuego lento en la mesa con salsa dulce de soja y verduras frescas.",
      },
      {
        id: "okonomiyaki",
        name: "Okonomiyaki Kiji",
        city: "Kioto",
        day: 4,
        desc: "Okonomiyaki casero al estilo tradicional de Kansai, cocinado en plancha de hierro teppan caliente.",
      },
      {
        id: "chao-chao-gyoza",
        name: "Chao Chao Gyoza (Sanjo Kiyamachi)",
        city: "Kioto",
        day: 5,
        desc: "Famoso izakaya de gyozas crujientes en hilera con múltiples rellenos, ambiente desenfadado y gyozas dulces de chocolate con helado.",
        mapsUrl: "https://maps.app.goo.gl/ScXREEXfRmmTKcj88",
      },
      {
        id: "teishoku-sakaba-tomoya",
        name: "Teishoku Sakaba Tomoya",
        city: "Kanazawa",
        day: 6,
        desc: "Izakaya junto al mercado Omicho especializado en menús teishoku con pescado fresco del Mar de Japón y carne de Noto.",
        mapsUrl: "https://maps.app.goo.gl/SzGJUTSXByhtAskt6",
      },
      {
        id: "tanaka-ya",
        name: "Tanaka-ya (Shirakawa-go)",
        city: "Shirakawa-go",
        day: 7,
        desc: "Comida tradicional japonesa en mesas bajas sobre tatami dentro de la aldea gassho-zukuri. Especialidades locales y fideos soba.",
        mapsUrl: "https://maps.app.goo.gl/GYV8d8g1gaTi3Emb7",
      },
      {
        id: "kawakami",
        name: "Hida Takayama Wagyu & Hoba Miso",
        city: "Takayama",
        day: 7,
        desc: "Ternera de Hida (wagyu A5) a la brasa sobre hoja de magnolia con miso dulce regional (hoba miso) y nigiris de ternera flambeada.",
      },
      {
        id: "magome-chaya-dinner",
        name: "Cena tradicional en Magome Chaya",
        city: "Magome",
        day: 8,
        desc: "Banquete kaiseki casero en minshuku rural: pescado de río asado a la sal, estofado caliente nabemono, tempura de verduras y arroz de montaña.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Magome+Chaya+Gifu",
      },
      {
        id: "nikujiru-gyoza-dandadan",
        name: "Nikujiru Gyoza Dandadan (Kappabashi)",
        city: "Tokio",
        day: 9,
        desc: "Taberna en Kappabashi célebre por sus gyozas jugosas hechas a mano en plancha especial con masa gruesa y relleno caldoso.",
        mapsUrl: "https://maps.app.goo.gl/6u6EkzqoowquijNY8",
      },
      {
        id: "asakusa-monja-monro",
        name: "Asakusa Monja Monro",
        city: "Tokio",
        day: 9,
        desc: "Restaurante de monjayaki y teppanyaki tradicional tokiota cocinado en la propia mesa con marisco fresco del mercado y queso fundido.",
      },
      {
        id: "roast-beef-ohno",
        name: "Roast Beef Ohno (Harajuku)",
        city: "Tokio",
        day: 11,
        desc: "El famoso donburi de ternera con una espectacular montaña de láminas de roast beef wagyu, yema de huevo y salsa de trufa con queso.",
        mapsUrl: "https://maps.app.goo.gl/JTsdy13vc7tvtTcP9",
      },
      {
        id: "himuro-hokkaido-ramen",
        name: "Himuro Hokkaido Ramen (Asakusa)",
        city: "Tokio",
        day: 11,
        desc: "Ramen de miso al auténtico estilo de Sapporo/Hokkaido: caldo denso, reconfortante, fideos ondulados elásticos y cerdo chashu tierno a precio genial.",
        mapsUrl: "https://maps.google.com?q=Himuro%20Hokkaido%20Ramen%20Asakusa,%202%20Chome-1-11%20Nishiasakusa,%20Taito%20City,%20Tokyo%20111-0035,%20Jap%C3%B3n",
      },
      {
        id: "tonkatsu-katsukura",
        name: "Tonkatsu Katsukura",
        city: "Tokio",
        day: 11,
        desc: "Milanesa de cerdo ibérico o japonés ultra crujiente con panko artesanal y sésamo recién molido.",
      },
      {
        id: "katsuemon-divercity",
        name: "Katsuemon (DiverCity Tokyo Plaza)",
        city: "Tokio",
        day: 12,
        desc: "Tonkatsu crujiente y curry japonés en Odaiba, ideal para reponer fuerzas junto a la estatua gigante de Gundam Unicornio.",
        mapsUrl: "https://maps.app.goo.gl/LFswXe7ofaSSnbKY8",
      },
      {
        id: "tsukiji-sushi",
        name: "Tsukiji Outer Market Sushi",
        city: "Tokio",
        day: 12,
        desc: "Sushi fresco y puestos de comida marina en las calles exteriores del histórico mercado de Tsukiji.",
      },
      {
        id: "gyukatsu-ichinisan",
        name: "Gyukatsu Ichi Ni San (Akihabara)",
        city: "Tokio",
        day: 13,
        desc: "Filete de ternera empanado ligeramente frito servido con un hornillo de piedra volcánica individual para terminar de sellar cada bocado a tu gusto.",
        mapsUrl: "https://maps.app.goo.gl/VgfUPTrjPzz4dQpHA",
      },
      {
        id: "ramen-ippudo",
        name: "Ippudo Ramen",
        city: "Múltiples",
        day: null,
        desc: "Cadena histórica de tonkotsu ramen cremosa y confiable, con locales por todo Japón ideales para una comida rápida sin fallar.",
      },
    ],
  },
  {
    id: "cafeterias",
    titleKey: "places.cafes",
    category: "Cafeterías y Cafés",
    icon: Coffee,
    color: "#1d3557",
    items: [
      { id: "vermillion-cafe", name: "Vermillion Café", city: "Kioto", day: 2, desc: "Cerca de Fushimi Inari — café moderno con buenas vistas." },
      { id: "cafe-yusui", name: "Café Yusui", city: "Kioto", day: 4, desc: "Café tradicional con vistas al río — ambiente perfecto." },
      { id: "starbucks-asakusa", name: "Starbucks Asakusa", city: "Tokio", day: 10, desc: "Starbucks con vistas al Senso-ji — surreal." },
      { id: "blue-bottle", name: "Blue Bottle Coffee", city: "Tokio", day: 11, desc: "Café de especialidad, ambiente hipster." },
      { id: "komeda", name: "Komeda Coffee", city: "Múltiples", day: null, desc: "Cadena japonesa asequible con buen ambiente." },
    ],
  },
  {
    id: "templos",
    titleKey: "places.temples",
    category: "Templos",
    icon: MapPin,
    color: "#bc4749",
    items: [
      { id: "fushimi", name: "Fushimi Inari", city: "Kioto", day: 2, desc: "Miles de torii rojos — uno de los lugares más fotografiados de Japón." },
      { id: "kinkaku", name: "Kinkaku-ji (Templo Dorado)", city: "Kioto", day: 3, desc: "Pabellón cubierto de oro — espectacular reflejado en el agua." },
      { id: "arashiyama", name: "Arashiyama Bamboo Grove", city: "Kioto", day: 3, desc: "Bosque de bambú — sereno y místico." },
      { id: "ginkaku", name: "Ginkaku-ji (Templo Plateado)", city: "Kioto", day: 4, desc: "Complemento del Dorado — diferente pero igualmente hermoso." },
      { id: "kiyomizu", name: "Kiyomizu-dera", city: "Kioto", day: 5, desc: "Templo de madera suspendido sobre acantilado — icónico." },
      { id: "senso", name: "Senso-ji", city: "Tokio", day: 10, desc: "Templo budista más antiguo de Tokio, en Asakusa." },
      { id: "meiji", name: "Meiji Jingu", city: "Tokio", day: 11, desc: "Santuario sintoísta rodeado de bosque — muy tranquilo." },
      { id: "tsurugaoka", name: "Tsurugaoka Hachimangu", city: "Kamakura", day: null, desc: "Santuario histórico — si hay tiempo de parada." },
    ],
  },
];

function sortByTripDay(items) {
  return [...items].sort((a, b) => {
    const da = a.day == null ? 999 : a.day;
    const db = b.day == null ? 999 : b.day;
    return da - db;
  });
}

export default function PlacesPage() {
  const t = useT();
  const { days } = useContent();
  const { highlightId } = useHighlight();

  const [openSections, setOpenSections] = useState(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) {
      return {
        restaurantes: false,
        cafeterias: false,
        templos: false,
        excursion: false,
      };
    }
    return {
      restaurantes: true,
      cafeterias: true,
      templos: true,
      excursion: false,
    };
  });

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    if (!highlightId) return;
    for (const cat of places) {
      const match = cat.items.some(
        (item) => guideFor[item.id] && slug("guide", guideFor[item.id]) === highlightId
      );
      if (match) {
        setOpenSections((prev) => ({ ...prev, [cat.id]: true }));
        return;
      }
    }
    if (highlightId === slug("guide", "fuji")) {
      setOpenSections((prev) => ({ ...prev, excursion: true }));
    }
  }, [highlightId]);

  const dayByNum = Object.fromEntries(days.map((d) => [d.num, d]));

  function dayLabel(dayNum) {
    if (dayNum == null) return null;
    const d = dayByNum[dayNum];
    if (!d) return `Día ${dayNum}`;
    return `Día ${dayNum} · ${formatDateShort(d.date)}`;
  }

  return (
    <div className="px-4 pt-3 pb-12">
      <div className="mb-6">
        <p className="eyebrow mb-1" style={{ color: "var(--shu)" }}>{t("places.eyebrow")}</p>
        <h2 className="font-display text-2xl" style={{ color: "var(--indigo)" }}>{t("places.title")}</h2>
        <p style={{ fontSize: 13.5, color: "var(--ink)", opacity: 0.85, marginTop: 6, lineHeight: 1.6, marginBottom: 0 }}>
          Catálogo detallado de los restaurantes, cafeterías, templos, santuarios, miradores y excursiones durante los 16 días de viaje por Japón. Están clasificados por categorías y ordenados cronológicamente según el día en que se recorren. Cada punto incluye su contexto cultural, lore histórico y consejos prácticos para aprovechar al máximo la visita.
        </p>
      </div>

      {/* Categorías principales: Restaurantes, Cafeterías y Templos */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))",
        gap: 20,
        alignItems: "start",
      }}>
        {places.map((category) => {
          const Icon = category.icon;
          const items = sortByTripDay(category.items);
          const isOpen = Boolean(openSections[category.id]);

          return (
            <div key={category.id} className="rounded-2xl border overflow-hidden transition-shadow"
              style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}>
              <button
                type="button"
                onClick={() => toggleSection(category.id)}
                className="w-full text-left flex items-center gap-3 px-5 py-4 border-none cursor-pointer transition-opacity hover:opacity-95"
                style={{ background: category.color }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(255,255,255,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={18} style={{ color: "white" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontSize: 15, fontWeight: 700, color: "white", margin: 0 }}>
                    {t(category.titleKey) || category.category}
                  </p>
                </div>
                <span style={{
                  fontSize: 11.5, color: "white", fontWeight: 700,
                  background: "rgba(255,255,255,0.18)",
                  padding: "3px 9px", borderRadius: 20,
                  flexShrink: 0,
                }}>
                  {items.length}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  style={{ color: "rgba(255,255,255,0.9)" }}
                />
              </button>

              {isOpen && (
                <div>
                  {items.map((place, idx) => {
                    const when = dayLabel(place.day);
                    return (
                      <div
                        key={place.id}
                        style={{ borderTop: idx > 0 ? "1px solid var(--line)" : "none" }}
                      >
                        <div className="px-5 py-4">
                          <p style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", margin: 0 }}>
                            {place.name}
                            <span style={{ fontWeight: 500, color: "var(--shu)", marginLeft: 4 }}>
                              {when ? `(${when})` : "(flexible)"}
                            </span>
                          </p>
                          <p style={{ fontSize: 12, color: "var(--ink-soft)", marginBottom: 2 }}>
                            {place.city}
                          </p>
                          <p style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.5, margin: 0 }}>
                            {place.desc}
                          </p>

                          {place.mapsUrl && (
                            <div style={{ marginTop: 8 }}>
                              <a
                                href={place.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-opacity hover:opacity-85"
                                style={{
                                  background: "var(--paper)",
                                  borderColor: "var(--line)",
                                  color: "var(--indigo)",
                                  textDecoration: "none",
                                }}
                              >
                                <img src={googleMapsIcon} alt="" width={12} height={12} />
                                Ver en Google Maps ↗
                              </a>
                            </div>
                          )}

                          {guideFor[place.id] && (
                            <div style={{ marginTop: 10 }}>
                              <GuideCard id={guideFor[place.id]} accent={category.color} />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 4. Excursión recomendada al Monte Fuji con GetYourGuide */}
      <div className="rounded-2xl overflow-hidden border mt-6" style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}>
        <button
          type="button"
          onClick={() => toggleSection("excursion")}
          className="w-full text-left flex items-center gap-3 px-5 py-4 border-none cursor-pointer transition-opacity hover:opacity-95"
          style={{ background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)" }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <Mountain size={18} style={{ color: "white" }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <p style={{ fontSize: 15, fontWeight: 700, color: "white", margin: 0 }}>
                Excursión de día completo · Monte Fuji, Lago Kawaguchi y Chureito
              </p>
              <span style={{ background: "rgba(255,255,255,0.25)", color: "white", fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 9999, textTransform: "uppercase", letterSpacing: "0.03em" }}>
                Tour organizado
              </span>
            </div>
            <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.9)", margin: 0 }}>
              Día 10 de la ruta · Salida desde Shinjuku (Tokio) en autobús con guía
            </p>
          </div>
          <ChevronDown
            size={20}
            className={`shrink-0 transition-transform duration-200 ${Boolean(openSections.excursion) ? "rotate-180" : ""}`}
            style={{ color: "rgba(255,255,255,0.9)" }}
          />
        </button>

        {Boolean(openSections.excursion) && (
          <div className="px-5 py-4 space-y-4">
            <div style={{ fontSize: 13.5, color: "var(--ink)", lineHeight: 1.6 }} className="space-y-2">
              <p style={{ margin: 0 }}>
                Para el día 10 del itinerario elegí esta excursión organizada en autobús de día completo a través de <strong>GetYourGuide</strong> (operada por Japan Visionary Tour). Visitar los miradores del Fuji y los lagos en transporte público por libre implica encadenar varios trenes locales y autobuses que se llenan con facilidad.
              </p>
              <p style={{ margin: 0 }}>
                Con este tour se sale cómodamente desde Shinjuku y se visitan en un solo día cuatro paradas emblemáticas: el Lago Kawaguchiko con el Parque Oishi, la aldea tradicional Saiko Iyashi-no-Sato Nemba, los manantiales de Oshino Hakkai y la icónica Pagoda Chureito con el Monte Fuji de fondo.
              </p>
              <p style={{ margin: 0 }}>
                Te dejo aquí todos los datos de la actividad, horarios habituales, punto de encuentro y recomendaciones prácticas (calzado para los escalones de Chureito, comida y efectivo) para que te sirva como referencia práctica si estás programando tu viaje y quieres hacer una ruta similar.
              </p>
            </div>

            {/* Ficha de la excursión */}
            <div className="p-3.5 rounded-xl border flex flex-col justify-between" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", margin: 0 }}>Horario habitual: 08:30 – 18:30 (~10 horas)</p>
                  <p style={{ fontSize: 11.5, fontWeight: 600, color: "var(--forest)", marginTop: 3, marginBottom: 0 }}>
                    ✨ Tour de día completo en autobús · Guía en inglés
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full font-bold" style={{ background: "rgba(2, 132, 199, 0.1)", color: "#0284c7" }}>
                  Salida desde Shinjuku (Tokio)
                </span>
              </div>
            </div>

            {/* Logística y aviso de comida */}
            <div className="p-4 rounded-xl border space-y-2.5" style={{ background: "var(--paper)", borderColor: "rgba(2, 132, 199, 0.25)" }}>
              <p className="flex items-center gap-1.5" style={{ fontSize: 13, fontWeight: 700, color: "var(--indigo)", margin: 0 }}>
                <span>ℹ️</span> Puntos clave y consejos prácticos:
              </p>
              <ul className="space-y-1.5 pl-4 list-disc" style={{ fontSize: 12.5, color: "var(--ink)", lineHeight: 1.5, margin: 0 }}>
                <li><strong>Punto de encuentro:</strong> Edificio Tokyo Mode Gakuen (1-7-3 Nishishinjuku, Shinjuku). Conviene llegar unos 15 minutos antes de la salida (sobre las 08:15 AM).</li>
                <li><strong>🍱 Comida no incluida:</strong> La actividad no incluye almuerzo y no está permitido comer dentro del autobús. Conviene comprar desayuno o snacks en un konbini antes de salir y llevar <strong>efectivo (yenes ¥)</strong> para probar especialidades en los puestos locales de Oshino Hakkai y Saiko.</li>
                <li><strong>👟 400 escalones en Chureito:</strong> Para llegar al mirador clásico de la Pagoda Chureito hay que subir unos 400 escalones por la colina. Lleva calzado deportivo cómodo.</li>
                <li><strong>Paradas incluidas en el itinerario:</strong> Lago Kawaguchiko y Parque Oishi, Aldea Saiko Iyashi-no-Sato Nemba (entrada incluida en el tour), Manantiales Oshino Hakkai y Pagoda Chureito en el Parque Arakurayama Sengen.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="https://www.getyourguide.com/es-es/tokio-l193/tokio-monte-fuji-pagoda-chureito-lago-kawaguchi-y-oshino-hakkai-t792363/"
                target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold px-3.5 py-2 rounded-xl border flex items-center gap-1.5 transition-opacity hover:opacity-85"
                style={{ background: "var(--paper)", borderColor: "var(--line)", color: "var(--indigo)", textDecoration: "none" }}
              >
                🎟️ Ver excursión en GetYourGuide ↗
              </a>
              <a
                href="https://www.google.com/maps/place/35.6916642,139.6969475/@35.6916642,139.6969475,16z"
                target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold px-3.5 py-2 rounded-xl border flex items-center gap-1.5 transition-opacity hover:opacity-85"
                style={{ background: "var(--paper)", borderColor: "var(--line)", color: "var(--forest)", textDecoration: "none" }}
              >
                <img src={googleMapsIcon} alt="" width={14} height={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: 2 }} />
                Punto de Encuentro en Maps (Tokyo Mode Gakuen) ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
