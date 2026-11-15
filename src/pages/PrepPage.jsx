import { useState } from "react";
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import { Highlightable } from "../context/HighlightContext";
import { slug } from "../utils/slug";
import { prepSectionsData } from "../data/prepChecklistData";
import { useLang } from "../i18n/LanguageContext";

const STORAGE_KEY = "trip-checklist-v1";

function loadChecked() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveChecked(obj) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  } catch {}
}

// Exportación para compatibilidad hacia atrás (ItineraryPrintView, searchIndex)
export const sections = prepSectionsData.map((s) => ({
  id: s.id,
  title: s.title.es,
  shortTitle: s.shortTitle.es,
  subtitle: s.subtitle.es,
  notice: s.notice.es,
  icon: s.icon,
  color: s.color,
  items: s.items.map((i) => ({ id: i.id, text: i.text.es })),
}));

const uiPrep = {
  es: {
    eyebrow: "Antes del viaje · Checklist",
    title: "Maleta Japón 🇯🇵",
    progress: (c, t, p) => `${c} de ${t} completados (${p}%) — se guarda automáticamente en tu dispositivo.`,
    reset: "Reiniciar",
    resetConfirm: "¿Seguro que quieres desmarcar todos los elementos de la maleta?",
    intro: "Guía de equipaje y preparación de la maleta para viajar a Japón sin olvidar nada imprescindible. Está organizada por categorías (documentación, electrónica, botiquín, ropa y artículos de confort para vuelos largos). Marca cada elemento según lo prepares: tu progreso se guardará localmente en tu dispositivo.",
  },
  en: {
    eyebrow: "Before the trip · Checklist",
    title: "Japan Packing List 🇯🇵",
    progress: (c, t, p) => `${c} of ${t} packed (${p}%) — automatically saved on your device.`,
    reset: "Reset",
    resetConfirm: "Are you sure you want to uncheck all packing items?",
    intro: "Complete packing checklist and luggage guide for traveling to Japan without forgetting any essentials. Organized by categories (documents, electronics, first aid, clothing, and long-flight comfort gear). Check off each item as you pack: your progress is saved locally on your device.",
  },
  fr: {
    eyebrow: "Avant le départ · Checklist",
    title: "Valise pour le Japon 🇯🇵",
    progress: (c, t, p) => `${c} sur ${t} cochés (${p}%) — enregistré automatiquement sur votre appareil.`,
    reset: "Réinitialiser",
    resetConfirm: "Voulez-vous vraiment décocher tous les éléments de la valise ?",
    intro: "Guide de bagages et liste de préparation pour votre voyage au Japon sans rien oublier d'essentiel. Organisé par catégories (documents, électronique, pharmacie, vêtements et confort pour les longs vols). Cochez chaque élément au fur et à mesure : votre progression est conservée localement.",
  },
  tl: {
    eyebrow: "Bago ang biyahe · Checklist",
    title: "Listahan ng Bagahe sa Japan 🇯🇵",
    progress: (c, t, p) => `${c} sa ${t} ang tapos na (${p}%) — awtomatikong nai-save sa iyong device.`,
    reset: "I-reset",
    resetConfirm: "Sigurado ka bang gusto mong alisin ang check sa lahat ng gamit sa bagahe?",
    intro: "Kumpletong gabay sa pag-iimpake ng bagahe papuntang Japan upang walang makalimutang mahalagang gamit. Nakaayos ayon sa mga kategorya (dokumento, elektronika, gamot, damit at komportableng gamit sa eroplano). I-check ang bawat gamit habang nag-iimpake: naka-save ang iyong progreso.",
  },
};

export default function PrepPage() {
  const { lang } = useLang();
  const [checked, setChecked] = useState(loadChecked);
  const [openSections, setOpenSections] = useState({});

  const l = uiPrep[lang] || uiPrep.es;
  const currentSections = prepSectionsData.map((s) => ({
    id: s.id,
    title: s.title[lang] || s.title.en || s.title.es,
    shortTitle: s.shortTitle[lang] || s.shortTitle.en || s.shortTitle.es,
    subtitle: s.subtitle[lang] || s.subtitle.en || s.subtitle.es,
    notice: s.notice[lang] || s.notice.en || s.notice.es,
    icon: s.icon,
    color: s.color,
    items: s.items.map((i) => ({
      id: i.id,
      text: i.text[lang] || i.text.en || i.text.es,
    })),
  }));

  function toggle(id) {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    saveChecked(next);
  }

  function toggleSection(id) {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function resetChecklist() {
    if (window.confirm(l.resetConfirm)) {
      setChecked({});
      saveChecked({});
    }
  }

  const totalItems = currentSections.reduce((acc, s) => acc + s.items.length, 0);
  const totalChecked = Object.values(checked).filter(Boolean).length;
  const progressPercent = totalItems > 0 ? Math.round((totalChecked / totalItems) * 100) : 0;

  return (
    <div className="px-4 pt-3 pb-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-4">
        <p className="eyebrow mb-1" style={{ color: "var(--shu)" }}>{l.eyebrow}</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl" style={{ color: "var(--indigo)", margin: 0 }}>
              {l.title}
            </h2>
            <p style={{ fontSize: 13.5, color: "var(--ink-soft)", margin: "4px 0 0" }}>
              {l.progress(totalChecked, totalItems, progressPercent)}
            </p>
          </div>

          {/* Action buttons */}
          {totalChecked > 0 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetChecklist}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border cursor-pointer transition-colors"
                style={{
                  borderColor: "rgba(188,71,73,0.3)",
                  background: "rgba(188,71,73,0.06)",
                  color: "#bc4749",
                }}
                title={l.reset}
              >
                <RotateCcw size={13} />
                <span>{l.reset}</span>
              </button>
            </div>
          )}
        </div>

        <p style={{ fontSize: 13.5, color: "var(--ink)", opacity: 0.85, marginTop: 10, marginBottom: 0, lineHeight: 1.6 }}>
          {l.intro}
        </p>
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: 8,
          borderRadius: 4,
          background: "var(--line)",
          overflow: "hidden",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progressPercent}%`,
            background: progressPercent === 100 ? "var(--forest)" : "var(--shu)",
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Sections Accordion */}
      <div className="space-y-3">
        {currentSections.map((section) => {
          const isOpen = openSections[section.id] !== false; // Default open
          const sectionChecked = section.items.filter((item) => checked[item.id]).length;
          const isComplete = sectionChecked === section.items.length && section.items.length > 0;
          const Icon = section.icon;

          const headerBg = isComplete
            ? "linear-gradient(135deg, #2e7d5b 0%, #1e5a40 100%)"
            : section.color;

          return (
            <div
              key={section.id}
              className="rounded-2xl border overflow-hidden shadow-xs"
              style={{
                borderColor: "var(--line)",
                background: "var(--paper-raised)",
              }}
            >
              {/* Section Header Button */}
              <button
                type="button"
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center gap-3 p-4 sm:p-5 text-left border-none cursor-pointer transition-opacity"
                style={{
                  background: headerBg,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} style={{ color: "white" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontSize: 14.5, fontWeight: 700, color: "white", margin: 0, lineHeight: 1.25 }}>
                    {section.title}
                  </p>
                  {section.subtitle && (
                    <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.85)", margin: "2px 0 0", lineHeight: 1.25 }}>
                      {section.subtitle}
                    </p>
                  )}
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: "white",
                    fontWeight: 700,
                    background: isComplete ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.18)",
                    padding: "3px 9px",
                    borderRadius: 20,
                    flexShrink: 0,
                  }}
                >
                  {sectionChecked}/{section.items.length}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: "white",
                    flexShrink: 0,
                    opacity: 0.9,
                    transform: isOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>

              {/* Section Body */}
              {isOpen && (
                <div>
                  {/* Notice / Warning banner if present */}
                  {section.notice && (
                    <div
                      className="flex items-start gap-2.5 px-5 py-2.5"
                      style={{
                        background: "rgba(0,0,0,0.03)",
                        borderBottom: "1px solid var(--line)",
                        fontSize: 12,
                        lineHeight: 1.45,
                        color: "var(--ink-soft)",
                      }}
                    >
                      <AlertCircle size={14} style={{ color: headerBg, flexShrink: 0, marginTop: 1 }} />
                      <span>{section.notice}</span>
                    </div>
                  )}

                  {/* Checklist Items */}
                  {section.items.map((item, idx) => {
                    const isChecked = Boolean(checked[item.id]);
                    return (
                      <Highlightable key={item.id} id={slug("prep", item.id)}>
                        <button
                          type="button"
                          onClick={() => toggle(item.id)}
                          className="flex items-start gap-3 w-full text-left px-5 py-3 transition-colors cursor-pointer border-none"
                          style={{
                            borderBottom: idx < section.items.length - 1 ? "1px solid var(--line)" : "none",
                            background: isChecked ? "rgba(0,0,0,0.012)" : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (!isChecked) e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = isChecked ? "rgba(0,0,0,0.012)" : "transparent";
                          }}
                        >
                          {isChecked ? (
                            <CheckCircle2
                              size={18}
                              style={{ color: section.color, flexShrink: 0, marginTop: 2 }}
                            />
                          ) : (
                            <Circle
                              size={18}
                              style={{ color: "var(--line)", flexShrink: 0, marginTop: 2 }}
                            />
                          )}
                          <span
                            style={{
                              fontSize: 13.5,
                              lineHeight: 1.45,
                              color: isChecked ? "var(--ink-soft)" : "var(--ink)",
                              textDecoration: isChecked ? "line-through" : "none",
                            }}
                          >
                            {item.text}
                          </span>
                        </button>
                      </Highlightable>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
