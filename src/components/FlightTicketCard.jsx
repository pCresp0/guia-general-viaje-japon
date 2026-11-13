import { useState } from "react";
import { Plane, CheckCircle2, ExternalLink } from "lucide-react";
import TicketCardHeader from "./TicketCardHeader";

// Granate Qatar Airways -- tono propio para las tarjetas de vuelo,
// distinto de los degradados por bloque (kioto/alpes/tokio) de los trenes.
const HEADER_BG = "linear-gradient(135deg, #8B1538 0%, #4A0620 100%)";
const ACCENT = "#8B1538";

export default function FlightTicketCard({
  legNumber,
  route,
  flightNumber,
  operator = "Qatar Airways",
  aircraft,
  date,
  depTime,
  arrTime,
  duration,
  reservationLabel = "Tarifa orientativa",
  reservationCode = "~890 € (I/V)",
  defaultExpanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div
      className="rounded-2xl border overflow-hidden shadow-sm mb-3"
      style={{ background: "var(--paper-raised)", borderColor: "var(--line)" }}
    >
      <TicketCardHeader
        icon={Plane}
        iconClassName="text-rose-200"
        route={route}
        title={flightNumber}
        when={`${date} · ${depTime} → ${arrTime}`}
        reservationLabel={reservationLabel}
        reservationCode={reservationCode}
        priceLine={duration}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        focusRingClass="focus:ring-rose-700"
        headerBg={HEADER_BG}
      />

      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-4 animate-in slide-in-from-top-2 fade-in duration-200">
          {/* Badges descriptivos */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full font-bold bg-green-100 text-green-800 border border-green-200 flex items-center gap-1">
              <CheckCircle2 size={13} /> Vuelo Internacional
            </span>
            <span className="px-2.5 py-1 rounded-full font-semibold bg-gray-100 text-gray-700">
              {operator}
            </span>
            {legNumber && (
              <span className="px-2.5 py-1 rounded-full font-semibold bg-gray-100 text-gray-700">
                Tramo {legNumber}
              </span>
            )}
            {aircraft && (
              <span className="px-2.5 py-1 rounded-full font-semibold bg-slate-100 text-slate-700">
                {aircraft}
              </span>
            )}
          </div>

          {/* Ficha explicativa adaptada a web genérica */}
          <div
            className="rounded-xl p-4 border text-xs leading-relaxed space-y-2.5"
            style={{
              background: "rgba(139, 21, 56, 0.05)",
              borderColor: "rgba(139, 21, 56, 0.2)",
              color: "#3d101d",
            }}
          >
            <h4 className="font-bold text-sm m-0 flex items-center gap-2" style={{ color: ACCENT }}>
              ✈️ Vuelos de referencia tomados en este viaje
            </h4>
            <p className="m-0">
              Nosotros realizamos la ruta <strong>Madrid ↔ Tokio Narita</strong> con <strong>Qatar Airways</strong>, haciendo escala en el Aeropuerto Internacional de Hamad (Doha).
            </p>
            <p className="m-0">
              El billete completo de ida y vuelta nos salió por <strong>890 € por persona</strong>, con equipaje facturado incluido (23 kg) etiquetado directamente hasta el destino final.
            </p>
            <p className="m-0">
              La escala en Doha se efectúa en <strong>terminal única</strong>, por lo que el tránsito es ágil y cómodo: no es necesario cambiar de edificio, tomar autobuses entre terminales ni volver a recoger o facturar las maletas.
            </p>
            <p className="m-0 pt-2 border-t text-[11.5px] opacity-90 leading-relaxed" style={{ borderColor: "rgba(139, 21, 56, 0.2)" }}>
              💡 Si quieres conocer al detalle el coste de todos los transportes del viaje (vuelos, tren bala Shinkansen Nozomi, trenes exprés de los Alpes, autobuses y metro), puedes consultarlo en los apartados de{" "}
              <a
                href="#presupuesto"
                data-tab="presupuesto"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("app:navigate", { detail: "presupuesto" }));
                }}
                className="font-bold underline decoration-dotted transition-opacity hover:opacity-75 cursor-pointer"
                style={{ color: ACCENT }}
              >
                Presupuesto
              </a>{" "}
              y{" "}
              <a
                href="#transportes"
                data-tab="transportes"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("app:navigate", { detail: "transportes" }));
                }}
                className="font-bold underline decoration-dotted transition-opacity hover:opacity-75 cursor-pointer"
                style={{ color: ACCENT }}
              >
                Transportes
              </a>{" "}
              de la web.
            </p>
          </div>

          {/* Enlaces de consulta */}
          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <a
              href="https://www.qatarairways.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-opacity hover:opacity-90 shadow-xs"
              style={{ background: ACCENT, textDecoration: "none" }}
            >
              <span>Web oficial Qatar Airways (qatarairways.com)</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
