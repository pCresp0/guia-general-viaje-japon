import { useContent, useT } from "../i18n/LanguageContext";
import { tabs as navTabs } from "../components/Nav";

export default function InicioPage({ onNavigate }) {
  const { tripMeta } = useContent();
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
        <p className="eyebrow mb-3" style={{ color: "var(--ink-soft)" }}>{t("home.aboutGuide")}</p>
        <div
          onClick={(e) => {
            const link = e.target.closest("a");
            if (!link) return;
            const tabId = link.getAttribute("data-tab");
            if (tabId) {
              e.preventDefault();
              onNavigate?.(tabId);
              return;
            }
            const action = link.getAttribute("data-action");
            if (action === "menu") {
              e.preventDefault();
              const menuBtn = document.querySelector('[data-menu-trigger="true"]');
              menuBtn?.click();
              return;
            }
            if (action === "search") {
              e.preventDefault();
              const searchBtn = document.querySelector('[data-search-trigger="true"]') || document.querySelector('button[aria-label="Buscar en la guía"]');
              searchBtn?.click();
              return;
            }
            if (action === "language") {
              e.preventDefault();
              const langBtn = document.querySelector('button[aria-haspopup="listbox"]');
              langBtn?.click();
              return;
            }
            const scrollTarget = link.getAttribute("data-scroll");
            if (scrollTarget) {
              e.preventDefault();
              const el = document.getElementById(scrollTarget);
              el?.scrollIntoView({ behavior: "smooth" });
              return;
            }
          }}
          data-welcome-card="true"
          className="rounded-2xl p-5 shadow-xs"
          style={{ background: "var(--paper-raised)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {tripMeta.welcomeParagraphs?.map((paragraph, idx) => (
            <div key={idx} style={{ fontSize: 14.5, color: "var(--ink)", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: paragraph }} />
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
                className="rounded-xl p-3.5 text-left flex gap-3 items-start transition-all hover:opacity-90 active:scale-[0.98] shadow-xs"
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
    </div>
  );
}
