import { useState } from "react";
import { Mountain, MapPin, ChevronDown, ChevronUp, AlertTriangle, Clock } from "lucide-react";
import { gygFujiActivity, visibilityTools } from "../data/fujiBookings";
import googleMapsIcon from "../assets/icons/google-maps.png";

export default function DayFujiOptionCard({ dayNum }) {
  if (dayNum !== 10) return null;
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl border overflow-hidden transition-all shadow-sm mb-4"
      style={{
        background: "var(--paper-raised)",
        borderColor: "rgba(2, 132, 199, 0.35)",
      }}
    >
      {/* Header Bar */}
      <div
        onClick={() => setOpen(!open)}
        className="px-4 py-3 cursor-pointer flex items-center justify-between gap-3 text-white transition-opacity hover:opacity-95"
        style={{
          background: "linear-gradient(135deg, #0284c7 0%, #0369a1 60%, #075985 100%)",
        }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
            <Mountain size={17} className="text-white" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] bg-white text-sky-900 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Excursión de 1 día · Monte Fuji
              </span>
              <span className="text-xs text-sky-100 font-semibold hidden sm:inline">
                GetYourGuide · Japan Visionary Tour
              </span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-white leading-tight mt-0.5 truncate">
              {open ? "Itinerario del tour, paradas y detalles prácticos" : "Excursión organizada al Monte Fuji y Pagoda Chureito"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            className="text-xs font-semibold text-sky-100 flex items-center gap-1 bg-white/15 px-2.5 py-1 rounded-lg"
          >
            {open ? "Ocultar" : "Ver detalle"}
            {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </div>

      {/* Quick Summary Strip (Always Visible) */}
      <div
        className="px-4 py-2.5 border-b flex flex-wrap items-center justify-between gap-2 text-xs"
        style={{ background: "var(--paper)", borderColor: "var(--line)" }}
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span style={{ color: "var(--ink-soft)" }}>Plataforma:</span>
          <span className="font-semibold text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800">
            GetYourGuide · Japan Visionary Tour
          </span>
        </div>

        <div className="text-[11.5px] font-semibold text-emerald-700 dark:text-emerald-400">
          📍 Encuentro: Shinjuku (~08:10 AM)
        </div>
      </div>

      {/* Expanded Details */}
      {open && (
        <div className="p-4 space-y-3.5 text-xs animate-fadeIn" style={{ color: "var(--ink)" }}>
          <p style={{ color: "var(--ink)", lineHeight: 1.5, margin: 0 }}>
            Excursión recomendada de día completo en autobús para visitar los miradores del Monte Fuji, los lagos y la Pagoda Chureito desde Tokio cómodamente en un solo día sin depender de trenes locales y buses de línea que se llenan con facilidad.
          </p>

          {/* Punto de encuentro y horario */}
          <div className="p-3 rounded-xl border space-y-1.5" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
            <p className="font-bold flex items-center gap-1.5" style={{ color: "var(--indigo)", margin: 0 }}>
              <MapPin size={15} className="text-sky-600" />
              Punto de encuentro y horario habitual:
            </p>
            <p style={{ color: "var(--ink)", margin: 0 }}>
              <strong>Tokyo Mode Gakuen</strong> (1-7-3 Nishishinjuku, Shinjuku City, Tokio).
            </p>
            <p style={{ color: "var(--ink-soft)", margin: 0 }}>
              ⏰ Horario típico: encuentro sobre las <strong>08:10 AM</strong> (salida puntual del autobús a las <strong>08:20 AM</strong>). Regreso a Shinjuku aprox. a las <strong>18:30</strong> (~10 horas de duración).
            </p>
          </div>

          {/* Recomendación de traslado a Shinjuku */}
          <div className="p-3 rounded-xl border space-y-1.5" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
            <p className="font-bold flex items-center gap-1.5" style={{ color: "var(--indigo)", margin: 0 }}>
              <Clock size={15} className="text-sky-600" />
              ¿Cómo llegar y con qué antelación salir?
            </p>
            <p style={{ color: "var(--ink)", margin: 0 }}>
              {gygFujiActivity.hotelDepartureAdvice}
            </p>
          </div>

          {/* Paradas del tour */}
          <div className="p-3 rounded-xl border space-y-2.5" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
            <p className="font-bold" style={{ color: "var(--indigo)", margin: 0 }}>🗺️ Qué se visita en la excursión, parada a parada:</p>
            {gygFujiActivity.itineraryStopsDetailed.map((stop, i) => (
              <div key={i} className="pl-2 border-l-2 space-y-0.5" style={{ borderColor: "rgba(2, 132, 199, 0.35)" }}>
                <p className="font-bold flex items-center gap-1.5 flex-wrap" style={{ color: "var(--ink)", margin: 0 }}>
                  <span>{stop.emoji}</span>
                  <span>{i + 1}. {stop.name}</span>
                  <span className="text-[10.5px] font-semibold" style={{ color: "var(--ink-soft)" }}>({stop.duration})</span>
                </p>
                <p style={{ color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>{stop.detail}</p>
              </div>
            ))}
          </div>

          {/* Consejos prácticos de la actividad */}
          <div className="p-3 rounded-xl border space-y-1.5" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
            <p className="font-bold flex items-center gap-1.5" style={{ margin: 0, color: "var(--shu)" }}>
              <AlertTriangle size={14} />
              Consejos prácticos y recomendaciones:
            </p>
            <ul className="pl-4 space-y-1 list-disc" style={{ margin: 0, color: "var(--ink)" }}>
              <li><strong>🍱 Comida no incluida:</strong> La actividad no incluye almuerzo y no está permitido comer en el autobús. Conviene comprar desayuno o snacks en un konbini antes de salir y llevar <strong>efectivo (yenes ¥)</strong> para comer en los puestos locales de Saiko y Oshino Hakkai.</li>
              <li><strong>👟 400 escalones en Chureito:</strong> Para subir al mirador icónico de la Pagoda Chureito hay que subir unos 400 escalones por la ladera. Llevar calzado cómodo y deportivo.</li>
              <li><strong>🧥 Ropa por capas:</strong> En los lagos y en las faldas del Fuji el clima suele ser más fresco que en el centro de Tokio y puede cambiar con rapidez; recomendable llevar chubasquero o paraguas plegable.</li>
              <li><strong>🚻 Baños:</strong> Conviene ir al servicio antes de subir al bus en Shinjuku, ya que el trayecto inicial hasta la primera parada dura aproximadamente 2 horas.</li>
            </ul>
          </div>

          {/* Aviso de qué lado del Fuji comprobar */}
          <div className="p-3 rounded-xl border space-y-1.5" style={{ background: "rgba(220, 38, 38, 0.06)", borderColor: "rgba(220, 38, 38, 0.3)" }}>
            <p className="font-bold flex items-center gap-1.5" style={{ margin: 0, color: "#b91c1c" }}>
              <AlertTriangle size={14} />
              👁️ Visibilidad del Monte Fuji (comprobar la cara Norte):
            </p>
            <p style={{ color: "var(--ink)", margin: 0 }}>
              Mirad siempre la vista <strong>NORTE (Kawaguchiko)</strong>, nunca la de Hakone/Sur — las webs de visibilidad muestran previsiones separadas para cada vertiente del Fuji, y puede estar despejado en una y cubierto en la otra el mismo día. Todas las paradas de este tour (Kawaguchiko, Parque Oishi, Oshino Hakkai, Pagoda Chureito) están situadas en la cara norte.
            </p>
          </div>

          {/* Enlaces directos */}
          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href={gygFujiActivity.url}
              target="_blank" rel="noopener noreferrer"
              className="font-bold px-3 py-2 rounded-xl border flex items-center gap-1.5 text-xs transition-opacity hover:opacity-85"
              style={{ background: "var(--paper-raised)", borderColor: "var(--line)", color: "var(--indigo)", textDecoration: "none" }}
            >
              🎟️ Ver excursión en GetYourGuide ↗
            </a>
            <a
              href={gygFujiActivity.meetingPointUrl}
              target="_blank" rel="noopener noreferrer"
              className="font-bold px-3 py-2 rounded-xl border flex items-center gap-1.5 text-xs transition-opacity hover:opacity-85"
              style={{ background: "var(--paper-raised)", borderColor: "var(--line)", color: "var(--forest)", textDecoration: "none" }}
            >
              <img src={googleMapsIcon} alt="" width={13} height={13} style={{ display: "inline" }} />
              Punto de Encuentro en Maps (Tokyo Mode Gakuen) ↗
            </a>
            <a
              href={visibilityTools.isFujiVisible.url}
              target="_blank" rel="noopener noreferrer"
              className="font-bold px-3 py-2 rounded-xl border flex items-center gap-1.5 text-xs transition-opacity hover:opacity-85"
              style={{ background: "var(--paper-raised)", borderColor: "var(--line)", color: "var(--shu)", textDecoration: "none" }}
            >
              👁️ Webcams y Visibilidad Norte en Directo (06:30 AM) ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
