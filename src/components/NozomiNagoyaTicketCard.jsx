import { useState } from "react";
import { Zap, Smartphone, CreditCard, Luggage, MapPin, ExternalLink, CalendarDays, CheckCircle2 } from "lucide-react";
import { ticketAccentColor, ticketHeaderBackground, ticketSoftBackground } from "../utils/blockTheme";
import TicketCardHeader from "./TicketCardHeader";

const FROM_BLOCK = "tokio";
const TO_BLOCK = "tokio";

/** Tarifa oficial de referencia estándar: ~¥10.900 (~59,12€) / persona en Ordinary Car reservado */
const PRICE_LINE = "~59 € / persona";

export default function NozomiNagoyaTicketCard({ onGoToDay, defaultExpanded = false } = {}) {
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
        icon={Zap}
        iconClassName="text-yellow-400"
        route="Nagoya → Tokio"
        title="NOZOMI 358 (Tokaido Shinkansen)"
        when="Frecuente · 1 h 37 min (Ejemplo: 11:29 → 13:06)"
        reservationLabel="Tarifa orientativa"
        reservationCode="~¥10.900"
        priceLine={PRICE_LINE}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        focusRingClass="focus:ring-blue-500"
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
              <CheckCircle2 size={13} /> Tren Bala Shinkansen (Nozomi)
            </span>
            <span className="px-2.5 py-1 rounded-full font-semibold bg-gray-100 text-gray-700">
              Ordinary Car · Asiento Reservado
            </span>
            <span className="px-2.5 py-1 rounded-full font-semibold bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1">
              <Smartphone size={13} /> Smart EX (QR / IC Card)
            </span>
          </div>

          {/* Ficha técnica del trayecto */}
          <div className="rounded-xl p-4 border" style={{ borderColor: "var(--line)", background: "var(--paper)" }}>
            <h4 className="font-bold text-sm m-0 mb-2 flex items-center gap-2" style={{ color: "var(--indigo)" }}>
              <CreditCard size={16} /> Detalles del trayecto y reserva
            </h4>
            <div className="space-y-1.5 text-xs text-gray-700 leading-relaxed">
              <p className="m-0">
                • <strong>Tren:</strong> Tokaido Shinkansen (Servicio Nozomi, Serie N700) · 1 h 37 min sin transbordos.
              </p>
              <p className="m-0">
                • <strong>Tarifa estándar orientativa:</strong> ~¥10.900 (~59 €) por persona en coche estándar con asiento reservado (*Ordinary Car*).
              </p>
              <p className="m-0">
                • <strong>Compra recomendada:</strong> Directamente en la plataforma oficial <strong>Smart EX</strong> (web o app), o en taquillas y máquinas JR de cualquier estación.
              </p>
            </div>
          </div>

          {/* Transbordo en Nagoya */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
            <MapPin size={18} className="text-amber-800 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950 leading-relaxed">
              <strong>Transbordo en Nagoya (conexión Valle de Kiso / Magome → Tokio):</strong>
              <br />
              Al llegar a Nagoya en el tren <em>Limited Express Shinano</em> procedente de Nakatsugawa, se llega a los andenes convencionales. Es recomendable dejar un margen de <strong>30 a 40 minutos</strong> para caminar con tranquilidad siguiendo la señalización azul hacia los andenes del <strong>Tokaido Shinkansen</strong>.
            </div>
          </div>

          {/* Acceso con Smart EX */}
          <div className="rounded-xl p-4 bg-sky-50/80 border border-sky-200">
            <h4 className="font-bold text-sky-950 text-sm m-0 mb-2 flex items-center gap-2">
              <Smartphone size={16} /> Métodos de acceso al Shinkansen
            </h4>
            <p className="text-xs text-sky-900 m-0 leading-relaxed">
              Con <strong>Smart EX</strong> puedes acceder mostrando el <strong>código QR</strong> en la pantalla del móvil ante el lector del torno, o <strong>vinculando una tarjeta IC (Suica/Pasmo/ICOCA)</strong> para pasar tocando directamente con el móvil o tarjeta física. No es necesario recoger billete en papel.
            </p>
          </div>

          {/* Normativa de equipaje */}
          <div className="rounded-xl p-4 bg-slate-50 border border-slate-200 flex items-start gap-3">
            <Luggage size={18} className="text-slate-700 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-800 leading-relaxed">
              <strong>Equipaje en el Tokaido Shinkansen:</strong> Si las medidas de tu maleta (alto + ancho + fondo) no superan 160 cm, cabe perfectamente en el portaequipajes superior o frente a tu asiento. Si supera los 160 cm, debes elegir un <em>Seat with an oversized baggage area</em> (última fila) al hacer la reserva en Smart EX.
            </div>
          </div>

          {/* Botón directo a Smart EX */}
          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <a
              href="https://smart-ex.jp/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-opacity hover:opacity-90 shadow-xs"
              style={{ background: "var(--indigo)", textDecoration: "none" }}
            >
              <span>Web oficial Smart EX (smart-ex.jp)</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
