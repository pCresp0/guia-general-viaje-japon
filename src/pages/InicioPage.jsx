import { useState, useEffect } from "react";
import { useContent, useT } from "../i18n/LanguageContext";
import { Plane, CheckCircle2 } from "lucide-react";
import { tabs as navTabs } from "../components/Nav";



export default function InicioPage({ onNavigate }) {
  const { tripMeta, flights } = useContent();
  const t = useT();

  return (
    <div className="px-4 pt-3 pb-12">
      <div className="mb-6">
        <p className="eyebrow mb-1" style={{ color: "var(--shu)" }}>{tripMeta.subtitle}</p>
        <h1 className="font-display text-3xl" style={{ color: "var(--indigo)", margin: 0, lineHeight: 1.2 }}>
          {tripMeta.title}
        </h1>
      </div>



      {/* Qué es esto / Para qué sirve la web */}
      <section className="mb-8">
        <p className="eyebrow mb-3" style={{ color: "var(--ink-soft)" }}>Sobre esta guía</p>
        <div className="rounded-2xl p-5 shadow-xs" style={{ background: "var(--paper-raised)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "16px" }}>
          {tripMeta.welcomeParagraphs?.map((paragraph, idx) => (
            <p key={idx} style={{ fontSize: 14.5, color: "var(--ink)", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </section>

      {/* Apartados principales */}
      <section className="mb-8">
        <p className="eyebrow mb-3" style={{ color: "var(--ink-soft)" }}>{t("home.mainSections") || "Apartados principales"}</p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
          gap: 10,
        }}>
          {navTabs.filter(s => s.id !== "inicio").map((s) => {
            const Icon = s.icon;
            let iconColor = "var(--indigo)";
            if (["vuelos", "itinerario", "pendientes", "lugares"].includes(s.id)) iconColor = "#bc4749";
            if (["hoteles", "mapa", "preparativos"].includes(s.id)) iconColor = "#2e7d5b";
            if (["comidas", "presupuesto"].includes(s.id)) iconColor = "#c9a227";

            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onNavigate?.(s.id)}
                className="rounded-xl p-3.5 text-left flex gap-3 items-start transition-all hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: "var(--paper-raised)",
                  border: "1px solid var(--line)",
                  cursor: "pointer",
                }}
              >
                <div style={{
                  width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                  background: `${iconColor}14`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={16} style={{ color: iconColor }} />
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", margin: 0 }}>{t(s.labelKey)}</p>
                  <p style={{ fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.4, margin: "3px 0 0" }}>{t(s.descKey)}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Resumen de Vuelos */}
      <section>
        <p className="eyebrow mb-3" style={{ color: "var(--ink-soft)" }}>{t("home.completedFlights") || "Vuelos del viaje"}</p>
        <div className="rounded-2xl p-5 shadow-xs" style={{ background: "var(--paper-raised)", border: "1px solid var(--line)" }}>
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2" style={{ color: "var(--shu)" }}>
              <Plane size={16} />
              <p className="eyebrow" style={{ margin: 0 }}>{flights.out?.flightNumber || "Vuelo Ida + Vuelo Ida 2"} / {flights.back?.flightNumber || "Vuelo Vuelta + Vuelo Vuelta 2"}</p>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(46,125,91,0.12)", color: "#2e7d5b" }}>
              ✓ Ida y Vuelta
            </span>
          </div>
          <p style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", margin: "0 0 6px" }}>
            Madrid ⇄ Doha ⇄ Narita (Qatar Airways)
          </p>
          <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5, margin: 0 }}>
            {t("home.flightsCompletedDesc") || "Vuelos de ida y vuelta completados con éxito. Consulta billetes, escalas y referencias en la pestaña Vuelos."}
          </p>
          <button
            type="button"
            onClick={() => onNavigate?.("vuelos")}
            className="mt-3 text-sm font-semibold inline-flex items-center gap-1"
            style={{ color: "var(--shu)", background: "none", border: "none", padding: 0, cursor: "pointer" }}
          >
            {t("home.viewFlights") || "Ver vuelos ↗"}
          </button>
        </div>
      </section>
    </div>
  );
}
