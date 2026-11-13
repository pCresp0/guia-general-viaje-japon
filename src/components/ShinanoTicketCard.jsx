import { useState } from "react";
import { Train, Ticket, CreditCard, Lock, AlertTriangle, ExternalLink, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { ticketAccentColor, ticketHeaderBackground, ticketSoftBackground } from "../utils/blockTheme";
import TicketCardHeader from "./TicketCardHeader";

const FROM_BLOCK = "alpes";
const TO_BLOCK = "tokio";

/** Tarifa estándar oficial de referencia: ~¥2.870 (~15,57€) / persona en Ordinary Car reservado */
const PRICE_LINE = "~15,50 € / persona";

export default function ShinanoTicketCard({ onGoToDay, defaultExpanded = false } = {}) {
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
        iconClassName="text-sky-200"
        route="Nakatsugawa → Nagoya"
        title="Limited Express Shinano"
        when="Frecuente · 56 min (Ejemplo: 09:57 → 10:53)"
        reservationLabel="Tarifa orientativa"
        reservationCode="~¥2.870"
        priceLine={PRICE_LINE}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        focusRingClass="focus:ring-indigo-500"
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
              <CheckCircle2 size={13} /> Limited Express (JR-WEST / JR Central)
            </span>
            <span className="px-2.5 py-1 rounded-full font-semibold bg-gray-100 text-gray-700">
              Ordinary Car · Asiento Reservado
            </span>
            <span className="px-2.5 py-1 rounded-full font-semibold bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1">
              <AlertTriangle size={13} /> Requiere billete físico
            </span>
          </div>

          {/* Ficha técnica */}
          <div className="rounded-xl p-4 border" style={{ borderColor: "var(--line)", background: "var(--paper)" }}>
            <h4 className="font-bold text-sm m-0 mb-2 flex items-center gap-2" style={{ color: "var(--indigo)" }}>
              <Train size={16} /> Detalles del trayecto
            </h4>
            <div className="space-y-1.5 text-xs text-gray-700 leading-relaxed">
              <p className="m-0">
                • <strong>Tren:</strong> Limited Express Shinano (Serie 383) · Conexión rápida entre el Valle de Kiso y Nagoya en solo 56 minutos.
              </p>
              <p className="m-0">
                • <strong>Tarifa orientativa:</strong> ~¥2.870 (~15,50 €) por persona con asiento reservado estándar.
              </p>
              <p className="m-0">
                • <strong>Función clave en la ruta:</strong> Enlaza la estación de Nakatsugawa (adonde se llega en bus tras la caminata Magome-Tsumago) con la gran terminal de Nagoya para tomar el Shinkansen hacia Tokio o Kioto.
              </p>
            </div>
          </div>

          {/* Aviso recogida física obligatoria */}
          <div className="rounded-xl p-4 bg-amber-50/80 border border-amber-200">
            <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2 text-sm m-0">
              <AlertTriangle size={16} /> OBLIGATORIO: RECOGER BILLETES FÍSICOS ANTES DE SUBIR
            </h4>
            <p className="text-xs text-amber-900 m-0 leading-relaxed">
              Si compras la reserva a través de la web oficial de <strong>JR-WEST</strong>, el servicio exige retirar los billetes magnéticos en papel <strong>antes de cruzar los tornos</strong>. Sin el billete impreso no se permite el acceso al tren.
            </p>

            <div className="mt-3 p-3 bg-white rounded-lg border border-amber-150 space-y-1.5">
              <p className="text-xs font-bold text-amber-900 uppercase tracking-wider m-0 mb-1">Para la recogida en máquinas JR necesitas:</p>
              <div className="flex items-center gap-2 text-xs text-gray-800">
                <CreditCard size={14} className="text-amber-700 shrink-0" />
                <span><strong>Tarjeta física</strong> con la que pagaste la reserva online (en Japón muchas máquinas no admiten tarjetas virtuales en el lector).</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-800">
                <Lock size={14} className="text-amber-700 shrink-0" />
                <span><strong>PIN de recogida de 4 dígitos</strong> que definiste al comprar en la web de JR.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-800">
                <Ticket size={14} className="text-amber-700 shrink-0" />
                <span><strong>Número de reserva / localizador</strong> recibido por email.</span>
              </div>
            </div>
          </div>

          {/* Consejo de conexión */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <MapPin size={18} className="text-slate-700 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-800 leading-relaxed">
              <strong>Consejo de planificación:</strong> En la estación de Nakatsugawa hay taquillas y máquinas automáticas accesibles justo antes de los tornos. Si llegas con ~30-40 minutos de antelación desde Magome en el autobús local, tendrás tiempo de sobra para emitir los billetes y tomar algo antes de que llegue el Shinano.
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
