import { useState } from "react";
import { Bus, Ticket, MapPin, CalendarDays, CheckCircle2, ExternalLink, Info } from "lucide-react";
import { ticketAccentColor, ticketHeaderBackground, ticketSoftBackground } from "../utils/blockTheme";
import TicketCardHeader from "./TicketCardHeader";

const FROM_BLOCK = "alpes";
const TO_BLOCK = "alpes";

/** Tarifa oficial de referencia estándar: ~¥5.000 (~27,12€) / persona */
const PRICE_LINE = "~27 € / persona";

export default function NohiMagomeTicketCard({ defaultExpanded = false, onGoToDay } = {}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const headerBg = ticketHeaderBackground(FROM_BLOCK, TO_BLOCK);
  const accent = ticketAccentColor(FROM_BLOCK, TO_BLOCK);
  const softBg = ticketSoftBackground(FROM_BLOCK, TO_BLOCK);

  return (
    <div
      className="rounded-2xl border overflow-hidden shadow-sm mb-3"
      style={{
        background: "var(--paper-raised)",
        borderColor: "var(--line)",
      }}
    >
      <TicketCardHeader
        icon={Bus}
        iconClassName="text-amber-300"
        route="Takayama → Magome"
        title="Autobús Nohi Bus Directo"
        when="Directo · 2 h 45 min (08:00 → 10:45)"
        reservationLabel="Tarifa orientativa"
        reservationCode="~¥5.000"
        priceLine={PRICE_LINE}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        focusRingClass="focus:ring-amber-600"
        headerBg={headerBg}
      />

      {onGoToDay && (
        <div className="px-3.5 py-2 border-b flex items-center justify-between gap-2" style={{ borderColor: "var(--line)", background: softBg }}>
          <button
            type="button"
            onClick={onGoToDay}
            className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 cursor-pointer border-none transition-opacity hover:opacity-80"
            style={{ background: accent, color: "white" }}
          >
            <CalendarDays size={13} />
            Ver día 9 en itinerario
          </button>
        </div>
      )}

      {/* Body */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-4 animate-in slide-in-from-top-2 fade-in duration-200">
          {/* Badges descriptivos */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full font-bold bg-green-100 text-green-800 border border-green-200 flex items-center gap-1">
              <CheckCircle2 size={13} /> Autobús Alpino Directo (Nohi Bus)
            </span>
            <span className="px-2.5 py-1 rounded-full font-semibold bg-gray-100 text-gray-700">
              Plaza Reservada Asignada
            </span>
            <span className="px-2.5 py-1 rounded-full font-semibold bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1">
              <Info size={13} /> Reserva previa requerida
            </span>
          </div>

          {/* Ficha técnica del trayecto */}
          <div className="rounded-xl p-4 border" style={{ borderColor: "var(--line)", background: "var(--paper)" }}>
            <h4 className="font-bold text-sm m-0 mb-2 flex items-center gap-2" style={{ color: "var(--indigo)" }}>
              <Bus size={16} /> Detalles del trayecto
            </h4>
            <div className="space-y-1.5 text-xs text-gray-700 leading-relaxed">
              <p className="m-0">
                • <strong>Salida:</strong> Takayama Nohi Bus Center (junto a la estación de tren de Takayama) a las 08:00.
              </p>
              <p className="m-0">
                • <strong>Llegada:</strong> Magome a las 10:45 (2 h 45 min por carretera paisajística entre valles alpinos).
              </p>
              <p className="m-0">
                • <strong>Tarifa orientativa:</strong> ~¥5.000 (~27 €) por persona.
              </p>
              <p className="m-0">
                • <strong>Plataforma de compra:</strong> Habitualmente a través de <strong>Japan Bus Online</strong> o directamente en la web de <strong>Nohi Bus</strong> (abren reservas con un mes de antelación).
              </p>
            </div>
          </div>

          {/* Advertencia importante: parada de bajada en Magome */}
          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 flex items-start gap-3">
            <MapPin size={18} className="text-blue-700 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-950 leading-relaxed">
              <strong>Importante — Bajada en Magome (10:45):</strong>
              <br />
              Aunque este servicio continúa posteriormente hacia Tsumago (11:10), para hacer la famosa ruta a pie por el sendero histórico de <strong>Nakasendo</strong> es imprescindible <strong>bajarse en Magome</strong>. El sentido de caminata Magome → Tsumago es el más recomendable porque el desnivel de subida es mucho más corto y llevadero.
            </div>
          </div>

          {/* Documentación del billete */}
          <div className="rounded-xl border p-4 bg-amber-50/70" style={{ borderColor: "var(--line)" }}>
            <div className="flex items-center gap-2 mb-1.5">
              <Ticket size={16} className="text-amber-800" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">Embarque y comprobante</span>
            </div>
            <p className="text-xs text-amber-950 m-0 leading-relaxed">
              Al comprar en Japan Bus Online recibes un <strong>E-Ticket</strong> con código de barras / localizador por correo electrónico. Puedes mostrarlo directamente en la pantalla de tu móvil al conductor antes de subir al autobús (o llevar una copia impresa por seguridad).
            </p>
          </div>

          {/* Enlace oficial */}
          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <a
              href="https://japanbusonline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-opacity hover:opacity-90 shadow-xs"
              style={{ background: "var(--indigo)", textDecoration: "none" }}
            >
              <span>Japan Bus Online (Reservas oficiales) ↗</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
