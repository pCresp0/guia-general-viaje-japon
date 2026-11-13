import { useState } from "react";
import { Train, Ticket, CreditCard, Lock, Info, MapPin, ExternalLink, CalendarDays, CheckCircle2 } from "lucide-react";
import { ticketAccentColor, ticketHeaderBackground, ticketSoftBackground } from "../utils/blockTheme";
import TicketCardHeader from "./TicketCardHeader";

const FROM_BLOCK = "kioto";
const TO_BLOCK = "alpes";

/** Tarifa oficial de referencia estándar: ~¥7.720 (~41,88€) / persona en Ordinary Car reservado conjunto */
const PRICE_LINE = "~41,90 € / persona";

export default function ThunderbirdTicketCard({ onGoToDay, defaultExpanded = false } = {}) {
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
        icon={Train}
        iconClassName="text-green-200"
        route="Kioto → Kanazawa"
        title="Thunderbird + Hokuriku Shinkansen"
        when="Frecuente · 1 h 53 min (Ejemplo: 08:10 → 10:03)"
        reservationLabel="Tarifa orientativa"
        reservationCode="~¥7.720"
        priceLine={PRICE_LINE}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        focusRingClass="focus:ring-green-600"
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
            Ver día 6 en itinerario
          </button>
        </div>
      )}

      {/* Body */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-4 animate-in slide-in-from-top-2 fade-in duration-200">
          {/* Badges descriptivos */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full font-bold bg-green-100 text-green-800 border border-green-200 flex items-center gap-1">
              <CheckCircle2 size={13} /> Limited Express + Shinkansen (JR-WEST)
            </span>
            <span className="px-2.5 py-1 rounded-full font-semibold bg-gray-100 text-gray-700">
              Ordinary Car · Asiento Reservado
            </span>
            <span className="px-2.5 py-1 rounded-full font-semibold bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1">
              <Info size={13} /> Recogida física en estación
            </span>
          </div>

          {/* Ficha técnica de los 2 tramos */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-600 m-0">Esquema del trayecto combinado:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Tramo 1 */}
              <div className="border rounded-xl p-3.5" style={{ borderColor: "var(--line)", background: "var(--paper)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">1</div>
                  <div>
                    <p className="font-bold text-sm m-0 text-gray-900">Limited Express Thunderbird</p>
                    <p className="text-xs text-gray-500 m-0">Kyoto (08:10) → Tsuruga (09:03) · 53 min</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 m-0">
                  Coche estándar con asiento reservado asignado en la compra.
                </p>
              </div>

              {/* Tramo 2 */}
              <div className="border rounded-xl p-3.5" style={{ borderColor: "var(--line)", background: "var(--paper)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">2</div>
                  <div>
                    <p className="font-bold text-sm m-0 text-gray-900">Hokuriku Shinkansen (Kagayaki / Tsurugi)</p>
                    <p className="text-xs text-gray-500 m-0">Tsuruga (09:21) → Kanazawa (10:03) · 42 min</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 m-0">
                  Coche Shinkansen con asiento reservado asignado.
                </p>
              </div>
            </div>
          </div>

          {/* Transbordo en Tsuruga */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <MapPin size={18} className="text-slate-700 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-800 leading-relaxed">
              <strong>Transbordo en Tsuruga (~18 min):</strong> La estación de Tsuruga se inauguró en 2024 expresamente para esta conexión. Está construida en dos niveles verticales: bajas del Thunderbird en la planta baja y subes por escaleras mecánicas o ascensor directamente a la planta superior del Shinkansen. El enlace es ágil, cómodo y está perfectamente señalizado.
            </div>
          </div>

          {/* Alerta importante recogida */}
          <div className="rounded-xl p-4 bg-amber-50/80 border border-amber-200">
            <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2 text-sm m-0">
              <Info size={16} /> RECOGIDA OBLIGATORIA EN MÁQUINA DE BILLETES
            </h4>
            <p className="text-xs text-amber-900 m-0 leading-relaxed">
              Esta reserva de JR-WEST no es puramente digital: es imprescindible imprimir los billetes físicos en una máquina automática JR (máquinas verdes con lector de tarjeta) o taquilla antes de subir al tren.
              <br /><br />
              <strong>Consejo:</strong> Recoge los billetes en la estación de Kioto la tarde o noche anterior a tu viaje para no ir con prisas la mañana de la salida.
            </p>

            <div className="mt-3 p-3 bg-white rounded-lg border border-amber-150 space-y-1.5">
              <p className="text-xs font-bold text-amber-900 uppercase tracking-wider m-0 mb-1">Para la máquina necesitas:</p>
              <div className="flex items-center gap-2 text-xs text-gray-800">
                <CreditCard size={14} className="text-amber-700 shrink-0" />
                <span><strong>Tarjeta física</strong> con la que se hizo la reserva por internet.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-800">
                <Lock size={14} className="text-amber-700 shrink-0" />
                <span><strong>PIN de 4 dígitos</strong> registrado en JR-WEST.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-800">
                <Ticket size={14} className="text-amber-700 shrink-0" />
                <span><strong>Localizador</strong> recibido por email.</span>
              </div>
            </div>
          </div>

          {/* Enlace oficial */}
          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <a
              href="https://www.westjr.co.jp/global/en/ticket/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-opacity hover:opacity-90 shadow-xs"
              style={{ background: "var(--indigo)", textDecoration: "none" }}
            >
              <span>Web oficial de reservas JR-WEST ↗</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
