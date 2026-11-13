import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ScrollText, ChevronDown, ChevronUp, Map, BookOpen, List, X } from "lucide-react";
import { useContent, useT } from "../i18n/LanguageContext";
import { useHighlight } from "../context/HighlightContext";
import { guidesByDay, guideMeta } from "../data/guides";
import DayFujiOptionCard from "./DayFujiOptionCard";
import VisitJapanQRCard from "./VisitJapanQRCard";
import ShinkansenTicketCard from "./ShinkansenTicketCard";
import ThunderbirdTicketCard from "./ThunderbirdTicketCard";
import FlightTicketCard from "./FlightTicketCard";
import NohiMagomeTicketCard from "./NohiMagomeTicketCard";
import ShinanoTicketCard from "./ShinanoTicketCard";
import NozomiNagoyaTicketCard from "./NozomiNagoyaTicketCard";
import DayWeatherBar from "./DayWeatherBar";
import ScheduleEntryBody from "./ScheduleEntryBody";
import GuideCard from "./GuideCard";
import StayOption from "./StayOption";
import PlaceText from "./PlaceText";
import { formatDateLong, getTripStatus, findCurrentScheduleIndex } from "../utils/date";
import { parseDayNumbers } from "../utils/mapDay";
import { slug } from "../utils/slug";

function normalize(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function findMatchedGuideIds(text, dayGuides) {
  if (!dayGuides || dayGuides.length === 0) return [];
  // Evitar vincular en logística de regreso al hotel o check-in
  if (/regreso al hotel|check-in/i.test(text)) return [];

  const normText = normalize(text);
  return dayGuides.filter((gid) => {
    const meta = guideMeta[gid];
    if (!meta) return false;
    return meta.keywords.some((kw) => normText.includes(normalize(kw)));
  });
}

// Auto-detect transport type from schedule text and return matching emoji
function getScheduleEmoji(text) {
  // El check de hotel/check-in va SIEMPRE primero: si no, una frase como
  // "...tras el vuelo internacional..." dentro de la descripción de un
  // check-in hacía que se colara el emoji de avión ✈️ en vez del de
  // hotel 🏨, aunque la entrada entera fuera sobre llegar al hotel.
  if (/regreso al hotel|vuelta al hotel|descanso en hotel|dormir en|dormimos en/i.test(text)) return "🏠";
  if (/check.?in|alojamiento\b|minshuku|ryokan/i.test(text)) return "🏨";
  if (/\bvuelo\b|aterriza|\bavión\b/i.test(text)) return "✈️";
  if (/shinkansen|nozomi|hikari/i.test(text)) return "🚄";
  if (/\bbus\b|nohi|autobús/i.test(text)) return "🚌";
  if (/tranvía|randen/i.test(text)) return "🚋";
  if (/\bmetro\b/i.test(text)) return "🚇";
  if (/\btren\b|\bJR\b|narita express|hida express|thunderbird|shinano|yurikamome/i.test(text)) return "🚂";
  if (/caminar|andando|a pie/i.test(text)) return "🚶";
  return null;
}

function formatSectionTitle(title) {
  if (!title) return title;
  
  let text = String(title).trim();
  let emoji = "";

  try {
    const codePoints = Array.from(text);
    let splitIdx = 0;
    while (splitIdx < codePoints.length && /[^\p{L}\p{N}]/u.test(codePoints[splitIdx])) {
      splitIdx++;
    }
    if (splitIdx > 0 && splitIdx < codePoints.length) {
      emoji = codePoints.slice(0, splitIdx).join("").trim();
      text = codePoints.slice(splitIdx).join("").trim();
    } else if (splitIdx === codePoints.length) {
      return title;
    }
  } catch {
    const match = text.match(/^([^\w\s]+)/);
    if (match) {
      emoji = match[1].trim();
      text = text.slice(match[0].length).trim();
    }
  }

  if (!emoji) {
    if (/reserva/i.test(text)) emoji = "🎫";
    else if (/transporte/i.test(text)) emoji = "🚍";
    else if (/equipaje/i.test(text)) emoji = "🧳";
    else emoji = "📌";
  }

  if (text.length > 0) {
    text = text.toLowerCase();
    text = text.charAt(0).toUpperCase() + text.slice(1);
  }

  return emoji ? `${emoji} ${text}` : text;
}

function CollapsibleScheduleItem({ s, color }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-xl border overflow-hidden" style={{ background: "rgba(0,0,0,0.015)", borderColor: "var(--line)" }}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3 transition-colors hover:bg-black/5 focus:outline-none"
        style={{ cursor: "pointer", border: "none", background: "transparent" }}
      >
        <div className="flex-1">
          {s.time && (
            <p className="font-display text-[15px] sm:text-[16px] font-extrabold flex items-center gap-1.5 tracking-tight m-0" style={{ color: color }}>
              {formatSectionTitle(s.time)}
            </p>
          )}
        </div>
        <ChevronDown size={20} className={`shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`} style={{ color: "var(--ink-soft)" }} />
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 pt-1">
          {(() => {
            let formattedText = s.text.replace(/\n{2,}/g, '\n');
            if (!formattedText.trim().startsWith('**')) {
              const match = formattedText.match(/^([^\.]{5,100}?)\.\s+/);
              if (match) {
                formattedText = `**${match[1]}.** ` + formattedText.slice(match[0].length);
              }
            }
            return (
              <PlaceText
                as="p"
                text={formattedText}
                className="text-[14px] leading-snug whitespace-pre-wrap m-0"
                style={{ color: "var(--ink)" }}
                linkStyle={{ color: "var(--shu)" }}
              />
            );
          })()}
        </div>
      )}
    </div>
  );
}

export default function DayCard({ day, defaultOpenHistory = false, onClose, onViewMap, onShowQuickView }) {
  const t = useT();
  const [showHistory, setShowHistory] = useState(defaultOpenHistory);
  const [showStay, setShowStay] = useState(false);
  // Ir directos al punto del horario en el que estamos ahora mismo, sólo
  // cuando este es el día de hoy y sólo la primera vez que se abre (no en
  // cada re-render, para no interrumpir si el usuario ya está desplazándose
  // por su cuenta).
  const scheduleItemRefs = useRef([]);
  const [nowIndex, setNowIndex] = useState(null);
  const [nowStatus, setNowStatus] = useState("now");
  const hasScrolledToNow = useRef(false);

  useEffect(() => {
    if (hasScrolledToNow.current) return;
    const status = getTripStatus();
    const isToday = status.phase === "during" && status.dayNum === day.num;
    if (!isToday) return;
    const found = findCurrentScheduleIndex(day.schedule);
    if (found == null) return;
    const { index: idx, status: matchStatus } = found;
    hasScrolledToNow.current = true;
    setNowIndex(idx);
    setNowStatus(matchStatus);
    // Pequeño margen para que el DOM ya tenga las referencias montadas.
    const timer = setTimeout(() => {
      scheduleItemRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
    // El aviso visual se apaga solo tras unos segundos, igual que el resaltado del buscador.
    const clearTimer = setTimeout(() => setNowIndex(null), 3200);
    return () => { clearTimeout(timer); clearTimeout(clearTimer); };
  }, [day.num, day.schedule]);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const { blocks, stays, days, mapStops, guides, popCulture } = useContent();
  const { triggerHighlight } = useHighlight();
  const blockById = Object.fromEntries(blocks.map((b) => [b.id, b]));
  const block = blockById[day.block];
  const stay = stays.find((s) => s.afterDay === day.num);
  const dayGuides = guidesByDay[day.num] || [];
  // Días de puro traslado (vuelo de ida/vuelta) no tienen ninguna parada
  // propia en el mapa — en esos casos no tiene sentido ofrecer "Ver mapa".
  const hasMapStops = mapStops.some((s) => parseDayNumbers(s.day).includes(day.num));

  useEffect(() => {
    if (!selectedGuide) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedGuide(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedGuide]);

  return (
    <article
      className="rounded-2xl overflow-hidden border"
      style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}
    >
      <header className="px-5 pt-5 pb-4" style={{ background: block.color }}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.95)" }}>
              {block.emoji} Día {day.num} · {formatDateLong(day.date)}
            </p>
            <h2 className="font-display text-xl sm:text-2xl text-white mt-1 leading-tight break-words">
              {day.title}
            </h2>
            <p className="text-white/85 text-sm mt-1">
              {day.cities}
            </p>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="rounded-full p-1.5 flex items-center justify-center transition-all hover:bg-white/25 shrink-0 cursor-pointer"
              style={{ background: "rgba(255,255,255,0.18)", color: "white", border: "none" }}
            >
              <X size={18} />
            </button>
          )}
        </div>

        {((onViewMap && hasMapStops) || onShowQuickView) && (
          <div className="flex flex-wrap items-center gap-2 pt-3">
            {onShowQuickView && (
              <button
                type="button"
                onClick={onShowQuickView}
                title="Ver en vista rápida"
                aria-label="Ver en vista rápida"
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all hover:bg-white/25 active:scale-95 shrink-0 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.18)", color: "white", border: "none" }}
              >
                <List size={14} />
                <span>Vista rápida</span>
              </button>
            )}
            {onViewMap && hasMapStops && (
              <button
                type="button"
                onClick={onViewMap}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all hover:bg-white/25 shrink-0 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.18)", color: "white", border: "none" }}
              >
                <Map size={14} />
                <span>Ver mapa</span>
              </button>
            )}
          </div>
        )}
      </header>

      <DayWeatherBar dayNum={day.num} />

      <div className="p-5 space-y-4">
        {/* QR de Visit Japan Web en el día de llegada (Día 1 / 7 de sept) */}
        {day.num === 1 && (
          <div className="space-y-4">
            <VisitJapanQRCard />
          </div>
        )}

        {/* Excursión Monte Fuji con GetYourGuide -- confirmada solo para el Día 10 (16 sept.) */}
        <DayFujiOptionCard dayNum={day.num} />

        <PlaceText
          as="p"
          text={day.summary}
          className="text-[15px] leading-relaxed"
          style={{ color: "var(--ink)" }}
          linkStyle={{ color: "var(--shu)" }}
        />

        <div>
          <ol className="relative border-l-2 pl-4 space-y-4" style={{ borderColor: "var(--line)" }}>
            {(() => {
              const filteredSchedule = day.schedule.filter(s => s.time && /\d/.test(s.time));
              const bestMatchForGuide = {};
              if (dayGuides && dayGuides.length > 0) {
                dayGuides.forEach(gid => {
                  const meta = guideMeta[gid];
                  if (!meta) return;
                  let bestIndex = -1;
                  let bestScore = -1000;
                  filteredSchedule.forEach((s, i) => {
                    if (!s.text) return;
                    const normText = normalize(s.text);
                    if (meta.keywords.some(kw => normText.includes(normalize(kw)))) {
                      let score = 0;
                      if (/\b(santuario|shrine|sanctuaire|templo|temple|castillo|castle|château|parque|park|parc|mercado|market|marché|aldea|village|jardín|garden|jardin)\b/i.test(s.text)) score += 10;
                      if (/\b(despertar|wake|réveil|desayuno|breakfast|petit.?déjeuner|almusal|bus|tren|train|jr|station|estación|estacion|gare|istasyon|llegada|arrival|takeaway)\b/i.test(s.text)) score -= 10;
                      if (score > bestScore) {
                        bestScore = score;
                        bestIndex = i;
                      }
                    }
                  });
                  if (bestIndex !== -1) bestMatchForGuide[gid] = bestIndex;
                });
              }

              return filteredSchedule.map((s, i) => {
              const emoji = getScheduleEmoji(s.text);
              
              // 1. Quitar los múltiples saltos de línea y dejarlos en uno solo
              let formattedText = s.text.replace(/\n{2,}/g, '\n');
              
              // 2. Autoponer en negrita la primera frase si actúa como título
              if (!formattedText.trim().startsWith('**')) {
                const match = formattedText.match(/^([^\.]{5,100}?)\.\s+/);
                if (match) {
                  formattedText = `**${match[1]}.** ` + formattedText.slice(match[0].length);
                }
              }

              return (
                <li
                  key={i}
                  ref={(el) => (scheduleItemRefs.current[i] = el)}
                  className={"relative" + (i === nowIndex ? " search-highlight-pulse" : "")}
                >
                  <span
                    className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full"
                    style={{ background: block.color }}
                  />
                  <p className="font-display text-[16px] sm:text-[17px] font-extrabold flex items-center gap-1.5 mb-1 tracking-tight" style={{ color: block.color }}>
                    {emoji && <span className="text-[17px]">{emoji}</span>}{s.time}
                    {i === nowIndex && (
                      <span
                        className="ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                        style={{ background: "var(--gold, #c9a227)", color: "#3a2e05" }}
                      >
                        {nowStatus === "upcoming" ? t("day.upcoming") : t("day.now")}
                      </span>
                    )}
                  </p>
                  <ScheduleEntryBody
                    text={formattedText}
                    textClassName="text-[14px] leading-snug mt-0.5 whitespace-pre-wrap"
                    textStyle={{ color: "var(--ink)" }}
                    linkStyle={{ color: "var(--shu)" }}
                  />
                  
                  {(() => {
                    const matchedGuides = dayGuides.filter(gid => bestMatchForGuide[gid] === i);
                    if (matchedGuides.length === 0) return null;
                    return (
                      <div className="flex flex-wrap gap-2 mt-2.5 mb-1 relative z-10">
                        {matchedGuides.map((gid) => {
                          const meta = guideMeta[gid];
                          const label = meta ? meta.shortName : guides[gid]?.name?.split(" ")[0];
                          return (
                            <button
                              key={gid}
                              type="button"
                              onClick={() => setSelectedGuide(gid)}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all shadow-sm active:scale-95 hover:opacity-90"
                              style={{
                                background: "var(--paper-raised)",
                                border: `1px solid ${block.color}40`,
                                color: block.color,
                                fontSize: "12px",
                                cursor: "pointer",
                              }}
                            >
                              <BookOpen size={13} />
                              Info: {label}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })()}

                  {day.num === 0 && s.time === "09:05" && (
                    <div className="mt-3 relative z-10">
                      <FlightTicketCard
                        legNumber="1 de 2"
                        route="Madrid (MAD) → Doha (DOH)"
                        flightNumber="QR 150"
                        aircraft="Boeing 787-9 Dreamliner"
                        date="6 sept 2026"
                        depTime="09:05"
                        arrTime="16:50"
                        duration="6h 45m"
                        operator="Qatar Airways"
                      />
                    </div>
                  )}

                  {day.num === 0 && s.time === "20:35" && (
                    <div className="mt-3 relative z-10">
                      <FlightTicketCard
                        legNumber="2 de 2"
                        route="Doha (DOH) → Tokio Narita (NRT)"
                        flightNumber="QR 806"
                        aircraft="Boeing 777-300ER"
                        date="6 sept 2026"
                        depTime="20:35"
                        arrTime="12:55 (+1)"
                        duration="10h 20m"
                        operator="Qatar Airways"
                      />
                    </div>
                  )}

                  {day.num === 1 && s.time === "17:19" && (
                    <div className="mt-3 relative z-10">
                      <ShinkansenTicketCard />
                    </div>
                  )}

                  {day.num === 6 && s.time === "08:10" && (
                    <div className="mt-3 relative z-10">
                      <ThunderbirdTicketCard />
                    </div>
                  )}

                  {day.num === 8 && s.time === "07:35" && (
                    <div className="mt-3 relative z-10">
                      <NohiMagomeTicketCard />
                    </div>
                  )}

                  {day.num === 9 && s.time === "09:57" && (
                    <div className="mt-3 relative z-10">
                      <ShinanoTicketCard />
                    </div>
                  )}

                  {day.num === 9 && s.time === "11:29" && (
                    <div className="mt-3 relative z-10">
                      <NozomiNagoyaTicketCard />
                    </div>
                  )}

                  {day.num === 15 && s.time === "17:25" && (
                    <div className="mt-3 relative z-10">
                      <FlightTicketCard
                        legNumber="1 de 2"
                        route="Tokio Narita (NRT) → Doha (DOH)"
                        flightNumber="QR 809"
                        aircraft="Boeing 777-300ER"
                        date="21 sept 2026"
                        depTime="17:25"
                        arrTime="22:20"
                        duration="10h 55m"
                        operator="Qatar Airways"
                      />
                    </div>
                  )}

                  {day.num === 15 && s.time === "01:10" && (
                    <div className="mt-3 relative z-10">
                      <FlightTicketCard
                        legNumber="2 de 2"
                        route="Doha (DOH) → Madrid (MAD)"
                        flightNumber="QR 147"
                        aircraft="Boeing 787-9 Dreamliner"
                        date="22 sept 2026"
                        depTime="01:10"
                        arrTime="07:35"
                        duration="7h 25m"
                        operator="Qatar Airways"
                      />
                    </div>
                  )}
                </li>
              );
            });
            })()}
          </ol>

          {day.schedule.filter(s => !s.time || !/\d/.test(s.time)).length > 0 && (
            <div className="mt-6 space-y-3">
              {day.schedule.filter(s => !s.time || !/\d/.test(s.time)).map((s, i) => (
                <CollapsibleScheduleItem key={i} s={s} color={block.color} />
              ))}
            </div>
          )}
        </div>

        {dayGuides.length > 0 && (
          <div>
            <p className="eyebrow mb-2" style={{ color: "var(--ink-soft)" }}>
              📖 Qué vamos a ver
            </p>
            <div className="space-y-2">
              {dayGuides.map((gid) => (
                <GuideCard key={gid} id={gid} accent={block.color} />
              ))}
            </div>
          </div>
        )}


        {stay && (
          <div className="rounded-xl p-4" style={{ background: "var(--paper)" }}>
            <button
              onClick={() => setShowStay((v) => !v)}
              className="flex items-center justify-between w-full text-left"
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              <div>
                <p className="eyebrow" style={{ color: "var(--indigo)", margin: 0 }}>
                  🏨 Dónde dormimos —{" "}
                  <PlaceText text={stay.city} linkStyle={{ color: "var(--shu)" }} />
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--ink-soft)" }}>
                  {stay.nights}
                </p>
              </div>
              <ChevronDown size={16} className={`shrink-0 transition-transform ${showStay ? "rotate-180" : ""}`} style={{ color: "var(--indigo)" }} />
            </button>
            {stay.warning && (
              <p className="text-xs mt-2 rounded-lg p-2" style={{ background: "#FBEAEA", color: "var(--shu)" }}>
                {stay.warning}
              </p>
            )}
            {showStay && (
              <div className="mt-2 space-y-2">
                {stay.options.map((o, i) => (
                  <StayOption key={i} option={o} city={stay.city} />
                ))}
              </div>
            )}
          </div>
        )}

        <button
          onClick={() => setShowHistory((v) => !v)}
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--indigo)" }}
        >
          <ScrollText size={16} />
          Contexto histórico
          <ChevronDown size={16} className={`transition-transform ${showHistory ? "rotate-180" : ""}`} />
        </button>
        {showHistory && (
          <PlaceText
            as="p"
            text={day.history}
            className="text-[13.5px] leading-relaxed italic"
            style={{ color: "var(--ink-soft)" }}
            linkStyle={{ color: "var(--shu)", fontStyle: "normal" }}
          />
        )}
      </div>

      {/* Guide Info Modal — ficha limpia, no otra tarjeta acordeón encima */}
      {selectedGuide && createPortal(
        <div
          className="modal-overlay"
          onClick={() => setSelectedGuide(null)}
          role="presentation"
        >
          <div
            className="modal-sheet modal-guide-sheet"
            role="dialog"
            aria-modal="true"
            aria-label={guides[selectedGuide]?.name || "Info del lugar"}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              padding: 0,
              width: "100%",
              boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            }}
          >
            <div
              className="modal-sheet-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "14px 18px",
                background: block?.color || "var(--indigo)",
                color: "#ffffff",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottom: "none",
                flexShrink: 0,
              }}
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <BookOpen size={20} style={{ color: "#ffffff" }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3
                      className="font-display font-bold text-base sm:text-lg leading-tight text-white m-0"
                    >
                      {guides[selectedGuide]?.name}
                    </h3>
                    {guides[selectedGuide]?.jp && (
                      <span className="text-xs sm:text-sm text-white/85 font-medium">
                        {guides[selectedGuide]?.jp}
                      </span>
                    )}
                    {popCulture?.[selectedGuide]?.length > 0 && (
                      <span title="Referencias pop" className="text-xs">
                        {popCulture[selectedGuide].some((r) => r.franchise === "pokemon") && "⚡"}
                        {popCulture[selectedGuide].some((r) => r.franchise === "digimon") && "🔷"}
                        {popCulture[selectedGuide].some((r) => r.franchise === "pelicula") && "🎬"}
                      </span>
                    )}
                  </div>
                  {(guides[selectedGuide]?.founded || guides[selectedGuide]?.tagline) && (
                    <p
                      className="text-xs text-white/80 m-0 mt-0.5 truncate"
                    >
                      {guides[selectedGuide]?.founded || guides[selectedGuide]?.tagline}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedGuide(null)}
                aria-label="Cerrar info"
                title="Cerrar (Esc)"
                className="rounded-full p-2 flex items-center justify-center transition-all hover:bg-white/25 active:scale-95 shrink-0 cursor-pointer"
                style={{
                  background: "rgba(255, 255, 255, 0.18)",
                  border: "none",
                  color: "#ffffff",
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div
              className="modal-sheet-body"
              style={{
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                flex: 1,
                minHeight: 0,
                padding: "16px 20px calc(24px + env(safe-area-inset-bottom, 0px))",
              }}
            >
              <GuideCard id={selectedGuide} accent={block.color} variant="modal" />
            </div>
          </div>
        </div>,
        document.body
      )}
    </article>
  );
}
