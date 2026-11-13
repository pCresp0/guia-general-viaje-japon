import { useState } from "react";
import { Zap, Ticket, Smartphone, CreditCard, Luggage, Mountain, ExternalLink, CalendarDays, CheckCircle2, Info } from "lucide-react";
import { ticketAccentColor, ticketHeaderBackground, ticketSoftBackground } from "../utils/blockTheme";
import TicketCardHeader from "./TicketCardHeader";

const FROM_BLOCK = "kioto";
const TO_BLOCK = "kioto";

/** Tarifa oficial de referencia estándar: ~¥13.770 (~74,65€) / persona en Ordinary Car reservado */
const PRICE_LINE = "~74 € / persona";

export default function ShinkansenTicketCard({ onGoToDay, defaultExpanded = false } = {}) {
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
        route="Shinagawa → Kioto"
        title="NOZOMI 53 (Tokaido Shinkansen)"
        when="Frecuente · 2 h 04 min (Ejemplo: 17:19 → 19:23)"
        reservationLabel="Tarifa orientativa"
        reservationCode="~¥13.770"
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
            Ver día 1 en itinerario
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
              <Smartphone size={13} /> Billete QR / Tarjeta IC (Smart EX)
            </span>
          </div>

          {/* Cómo comprar */}
          <div className="rounded-xl p-4 border" style={{ borderColor: "var(--line)", background: "var(--paper)" }}>
            <h4 className="font-bold text-sm m-0 mb-2 flex items-center gap-2" style={{ color: "var(--indigo)" }}>
              <CreditCard size={16} /> ¿Cómo comprar los billetes?
            </h4>
            <p className="text-xs text-gray-700 m-0 leading-relaxed">
              La forma más rápida y recomendada es la web/app oficial <strong>Smart EX</strong> (admite tarjetas internacionales como Revolut o tarjetas bancarias habituales). Permite elegir coche y asiento exacto, cambiar de horario sin recargo antes de la salida, y reservar desde 30 días antes. También se pueden adquirir en taquillas JR o máquinas automáticas de cualquier estación principal.
            </p>
          </div>

          {/* Cómo pasar los tornos */}
          <div className="rounded-xl p-4 bg-sky-50/80 border border-sky-200">
            <h4 className="font-bold text-sky-950 text-sm m-0 mb-2 flex items-center gap-2">
              <Smartphone size={16} /> ¿Cómo pasar los tornos del Shinkansen?
            </h4>
            <div className="space-y-2 text-xs text-sky-900 leading-relaxed">
              <p className="m-0">
                <strong>1. Con código QR (Smart EX):</strong> Abre el QR generado en la app o web de Smart EX y acércalo al lector óptico situado en el torno de entrada.
              </p>
              <p className="m-0">
                <strong>2. Con tu tarjeta Suica / Pasmo / ICOCA:</strong> Puedes vincular el número de tu tarjeta IC (física o en Apple Pay) a tu reserva en Smart EX. Al llegar, solo tocas el torno con el móvil y la máquina te expide automáticamente un papelito con tu coche y asiento.
              </p>
              <p className="m-0">
                <strong>3. Billete físico magnético:</strong> Opcionalmente se puede imprimir en las máquinas automáticas de la estación introduciendo el localizador y código PIN.
              </p>
            </div>
          </div>

          {/* Normativa de equipaje */}
          <div className="rounded-xl p-4 bg-amber-50/80 border border-amber-200 flex items-start gap-3">
            <Luggage size={18} className="text-amber-800 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950 leading-relaxed">
              <strong>Normativa de Equipaje en Shinkansen Tokaido:</strong>
              <br />
              • <strong>Maletas normales o medianas (alto + ancho + profundidad ≤ 160 cm):</strong> Van gratis en la bandeja portaequipajes superior o frente a tus piernas (el espacio entre asientos es de casi 1 metro).
              <br />
              • <strong>Maletas grandes (161 a 250 cm):</strong> Es <strong>obligatorio</strong> reservar asiento con espacio para equipaje sobredimensionado (*Seats with an oversized baggage area*, situados en la última fila del coche). No tiene coste extra, pero debe seleccionarse al reservar.
            </div>
          </div>

          {/* Vistas al Monte Fuji */}
          <div className="rounded-xl p-3.5 bg-slate-50 border border-slate-200 flex items-start gap-3">
            <Mountain size={18} className="text-slate-700 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-800 leading-relaxed">
              <strong>Vistas al Monte Fuji:</strong> En el trayecto Tokio/Shinagawa → Kioto, los asientos de ventanilla del <strong>lado derecho (asientos fila E)</strong> permiten ver el Monte Fuji a unos 45 minutos de trayecto (entre Shin-Fuji y Shizuoka), siempre que el día esté despejado.
            </div>
          </div>

          {/* Enlaces de reserva */}
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
