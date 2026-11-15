import { useState, useEffect, useRef } from "react";
import { RefreshCw, CheckCircle2, WifiOff, Edit3, RotateCcw, Footprints, Shirt, Check } from "lucide-react";
import { fmtDateTZ } from "../utils/date";

/** Formato ES: 1.234.567 o 12,5 */
function formatEs(n, { maxDecimals = 0 } = {}) {
  const num = Number(n);
  if (!Number.isFinite(num)) return "0";
  return num.toLocaleString("es-ES", {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDecimals,
  });
}

/** Parsea "1.234,56", "1234.56" o "10.000" → number de forma inteligente */
function parseNumberInput(str, { isInteger = false } = {}) {
  const raw = String(str ?? "").trim();
  if (!raw) return 0;

  if (isInteger) {
    // Para monedas enteras como el Yen (¥), cualquier punto, coma o espacio es separador de miles
    const cleanDigits = raw.replace(/[^\d]/g, "");
    const n = parseInt(cleanDigits, 10);
    return Number.isFinite(n) ? n : 0;
  }

  // Si contiene tanto '.' como ','
  if (raw.includes(".") && raw.includes(",")) {
    if (raw.lastIndexOf(",") > raw.lastIndexOf(".")) {
      // Estilo ES: 1.234,56
      const cleaned = raw.replace(/\./g, "").replace(",", ".");
      const n = parseFloat(cleaned);
      return Number.isFinite(n) ? n : 0;
    } else {
      // Estilo EN: 1,234.56
      const cleaned = raw.replace(/,/g, "");
      const n = parseFloat(cleaned);
      return Number.isFinite(n) ? n : 0;
    }
  }

  // Si solo contiene ','
  if (raw.includes(",")) {
    if (/^\d{1,3}(,\d{3})+$/.test(raw)) {
      const n = parseFloat(raw.replace(/,/g, ""));
      return Number.isFinite(n) ? n : 0;
    }
    const n = parseFloat(raw.replace(",", "."));
    return Number.isFinite(n) ? n : 0;
  }

  // Si solo contiene '.'
  if (raw.includes(".")) {
    if (/^\d{1,3}(\.\d{3})+$/.test(raw)) {
      const n = parseFloat(raw.replace(/\./g, ""));
      return Number.isFinite(n) ? n : 0;
    }
    const n = parseFloat(raw);
    return Number.isFinite(n) ? n : 0;
  }

  const n = parseFloat(raw.replace(/[^\d.-]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

const shoeSizes = [
  { jp: "22.5 cm", eu: "36", usM: "4.5", usW: "6" },
  { jp: "23.0 cm", eu: "36.5", usM: "5", usW: "6.5" },
  { jp: "23.5 cm", eu: "37", usM: "5.5", usW: "7" },
  { jp: "24.0 cm", eu: "38", usM: "6", usW: "7.5" },
  { jp: "24.5 cm", eu: "39", usM: "6.5", usW: "8" },
  { jp: "25.0 cm", eu: "40", usM: "7", usW: "8.5" },
  { jp: "25.5 cm", eu: "40.5", usM: "7.5", usW: "9" },
  { jp: "26.0 cm", eu: "41", usM: "8", usW: "9.5" },
  { jp: "26.5 cm", eu: "42", usM: "8.5", usW: "10" },
  { jp: "27.0 cm", eu: "42.5", usM: "9", usW: "10.5" },
  { jp: "27.5 cm", eu: "43", usM: "9.5", usW: "11" },
  { jp: "28.0 cm", eu: "44", usM: "10", usW: "11.5" },
  { jp: "28.5 cm", eu: "44.5", usM: "10.5", usW: "12" },
  { jp: "29.0 cm", eu: "45", usM: "11", usW: "12.5" },
];

const topSizes = [
  { eu: "XS", jp: "S", desc: "Ajustada, para complexión muy delgada" },
  { eu: "S", jp: "M", desc: "Equivale a una S europea estándar" },
  { eu: "M", jp: "L", desc: "Equivale a una M europea estándar" },
  { eu: "L", jp: "XL / LL", desc: "Equivale a una L europea estándar" },
  { eu: "XL", jp: "XXL / 3L", desc: "Suele requerir tiendas grandes o compra online" },
];

const womenSizes = [
  { eu: "34 (XS)", jp: "7号 (Talla 7)", busto: "80 cm", cintura: "61 cm" },
  { eu: "36 (S)", jp: "9号 (Talla 9)", busto: "83 cm", cintura: "64 cm" },
  { eu: "38 (M)", jp: "11号 (Talla 11)", busto: "86 cm", cintura: "67 cm" },
  { eu: "40 (L)", jp: "13号 (Talla 13)", busto: "89 cm", cintura: "70 cm" },
  { eu: "42 (XL)", jp: "15号 (Talla 15)", busto: "92 cm", cintura: "73 cm" },
];

export default function UtilsPage() {
  const [time, setTime] = useState(new Date());

  const [isCustomRate, setIsCustomRate] = useState(() => {
    try {
      return localStorage.getItem("jpy_rate_is_custom") === "true";
    } catch {
      return false;
    }
  });

  const [rate, setRate] = useState(() => {
    try {
      const saved = localStorage.getItem("jpy_rate");
      return saved ? parseFloat(saved) : 160;
    } catch {
      return 160;
    }
  });

  const [lastUpdated, setLastUpdated] = useState(() => {
    try {
      return localStorage.getItem("jpy_rate_date") || null;
    } catch {
      return null;
    }
  });

  const [loadingRate, setLoadingRate] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [editingRate, setEditingRate] = useState(false);
  const [customRateText, setCustomRateText] = useState("");
  const [activeSizeTab, setActiveSizeTab] = useState("shoes");

  const [eurInput, setEurInput] = useState(100);
  const [yenInput, setYenInput] = useState(() => Math.round(100 * rate));
  const [eurText, setEurText] = useState(() => formatEs(100, { maxDecimals: 2 }));
  const [yenText, setYenText] = useState(() => formatEs(Math.round(100 * rate)));

  const eurInputRef = useRef(eurInput);
  useEffect(() => { eurInputRef.current = eurInput; }, [eurInput]);

  async function fetchLiveRate(force = false) {
    if (isCustomRate && !force) return;
    setLoadingRate(true);
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/EUR");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      if (data && data.rates && data.rates.JPY) {
        const liveJpy = Math.round(data.rates.JPY * 100) / 100;
        setRate(liveJpy);
        setIsLive(true);
        setIsCustomRate(false);
        const timeStr = new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
        setLastUpdated(timeStr);
        const nextYen = Math.round(eurInputRef.current * liveJpy);
        setYenInput(nextYen);
        setYenText(formatEs(nextYen));
        try {
          localStorage.setItem("jpy_rate", liveJpy.toString());
          localStorage.setItem("jpy_rate_date", timeStr);
          localStorage.removeItem("jpy_rate_is_custom");
        } catch {
          /* ignore */
        }
      }
    } catch (err) {
      console.warn("Using offline / cached rate:", err);
      setIsLive(false);
    } finally {
      setLoadingRate(false);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    fetchLiveRate();
    return () => clearInterval(timer);
  }, []);

  const handleApplyCustomRate = () => {
    const parsed = parseNumberInput(customRateText);
    if (parsed > 0) {
      setRate(parsed);
      setIsCustomRate(true);
      setEditingRate(false);
      setIsLive(false);
      setLastUpdated("Personalizado");
      const nextYen = Math.round(eurInputRef.current * parsed);
      setYenInput(nextYen);
      setYenText(formatEs(nextYen));
      try {
        localStorage.setItem("jpy_rate", parsed.toString());
        localStorage.setItem("jpy_rate_is_custom", "true");
        localStorage.setItem("jpy_rate_date", "Personalizado");
      } catch {}
    }
  };

  const handleResetToOfficial = () => {
    setIsCustomRate(false);
    try {
      localStorage.removeItem("jpy_rate_is_custom");
    } catch {}
    fetchLiveRate(true);
  };

  const spainTime = time.toLocaleTimeString("es-ES", { timeZone: "Europe/Madrid" });
  const japanTime = time.toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" });
  const spainDate = fmtDateTZ(time, "Europe/Madrid");
  const japanDate = fmtDateTZ(time, "Asia/Tokyo");

  const handleEurChange = (raw) => {
    setEurText(raw);
    const val = parseNumberInput(raw);
    setEurInput(val);
    const nextYen = Math.round(val * rate);
    setYenInput(nextYen);
    setYenText(formatEs(nextYen));
  };

  const handleYenChange = (raw) => {
    setYenText(raw);
    const val = parseNumberInput(raw, { isInteger: true });
    setYenInput(val);
    const nextEur = Math.round((val / rate) * 100) / 100;
    setEurInput(nextEur);
    setEurText(formatEs(nextEur, { maxDecimals: 2 }));
  };

  const getHourDiff = () => {
    try {
      const now = new Date();
      const getTzHour = (tz) => {
        const parts = new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "numeric", hour12: false }).formatToParts(now);
        return parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
      };
      const madridHour = getTzHour("Europe/Madrid");
      const tokyoHour = getTzHour("Asia/Tokyo");
      return (tokyoHour - madridHour + 24) % 24;
    } catch {
      return 7;
    }
  };
  const diffHours = getHourDiff();

  return (
    <div className="px-4 pt-3 pb-12">
      <div className="mb-6">
        <p className="eyebrow mb-1" style={{ color: "var(--shu)" }}>Herramientas</p>
        <h2 className="font-display text-2xl" style={{ color: "var(--indigo)" }}>Hora local y divisas</h2>
        <p style={{ fontSize: 13.5, color: "var(--ink)", opacity: 0.85, marginTop: 6, lineHeight: 1.6 }}>
          Utilidades prácticas para el día a día en Japón: reloj dual para consultar la hora local y la diferencia horaria con España, conversor bidireccional de Euros a Yenes (EUR/JPY) con tipo de cambio personalizable y tabla de equivalencia de tallas internacionales para ropa y calzado.
        </p>
      </div>

      <div className="mb-8">
        <p className="eyebrow mb-3" style={{ color: "var(--ink-soft)" }}>Hora actual</p>
        <div className="grid gap-3" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="rounded-2xl p-5 shadow-xs" style={{ background: "var(--paper-raised)", border: "1px solid var(--line)" }}>
            <div className="flex items-center gap-2 mb-3">
              <span style={{ fontSize: 20 }}>🇪🇸</span>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>España (Madrid)</p>
            </div>
            <p style={{
              fontSize: 24, fontWeight: 700, fontFamily: "var(--font-display)",
              color: "var(--indigo)", marginBottom: 4
            }}>
              {spainTime.split(":").slice(0, 2).join(":")}
            </p>
            <p style={{ fontSize: 11, color: "var(--ink-soft)" }}>{spainDate}</p>
          </div>

          <div className="rounded-2xl p-5 shadow-xs" style={{ background: "var(--paper-raised)", border: "1px solid var(--line)" }}>
            <div className="flex items-center gap-2 mb-3">
              <span style={{ fontSize: 20 }}>🇯🇵</span>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>Japón (Tokio)</p>
            </div>
            <p style={{
              fontSize: 24, fontWeight: 700, fontFamily: "var(--font-display)",
              color: "var(--forest)", marginBottom: 4
            }}>
              {japanTime.split(":").slice(0, 2).join(":")}
            </p>
            <p style={{ fontSize: 11, color: "var(--ink-soft)" }}>{japanDate}</p>
          </div>
        </div>

        <div className="rounded-xl p-4 mt-3 space-y-1.5" style={{ background: "var(--paper-raised)", border: "1px solid var(--line)" }}>
          <p style={{ fontSize: 13, color: "var(--ink)", margin: 0, fontWeight: 700 }}>
            ⏰ <strong>Diferencia horaria:</strong> Japón está actualmente <strong>{diffHours} horas adelantado</strong> (+{diffHours} h).
          </p>
          <p style={{ fontSize: 12, color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
            • <strong>Horario de verano (nuestro viaje en septiembre):</strong> <strong>+7 horas</strong> respecto a España peninsular (cuando en España son las 10:00, en Japón son las 17:00).<br />
            • <strong>Horario de invierno (noviembre a marzo):</strong> <strong>+8 horas</strong> respecto a España peninsular.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="eyebrow" style={{ color: "var(--ink-soft)" }}>Conversor EUR ↔ JPY</p>
          <div className="flex items-center gap-1.5">
            {isCustomRate ? (
              <button
                type="button"
                onClick={handleResetToOfficial}
                className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-all"
                style={{
                  background: "var(--paper-raised)",
                  borderColor: "var(--line)",
                  color: "var(--indigo)",
                  cursor: "pointer"
                }}
                title="Restablecer al cambio oficial en directo"
              >
                <RotateCcw size={12} />
                <span>Restablecer oficial</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setCustomRateText(String(rate));
                  setEditingRate((v) => !v);
                }}
                className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-all"
                style={{
                  background: "var(--paper-raised)",
                  borderColor: "var(--line)",
                  color: "var(--ink)",
                  cursor: "pointer"
                }}
              >
                <Edit3 size={12} />
                <span>{editingRate ? "Cancelar" : "Personalizar"}</span>
              </button>
            )}
            <button
              onClick={() => fetchLiveRate(true)}
              disabled={loadingRate}
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border transition-all"
              style={{
                background: "var(--paper-raised)",
                borderColor: "var(--line)",
                color: "var(--ink)",
                cursor: loadingRate ? "not-allowed" : "pointer"
              }}
            >
              <RefreshCw size={12} className={loadingRate ? "animate-spin" : ""} />
              {loadingRate ? "Actualizando..." : "Actualizar"}
            </button>
          </div>
        </div>

        {editingRate && (
          <div
            className="rounded-xl p-3.5 mb-4 border shadow-xs"
            style={{ background: "var(--paper-raised)", borderColor: "var(--indigo)" }}
          >
            <p className="text-xs font-bold mb-2" style={{ color: "var(--indigo)" }}>
              Ajustar tipo de cambio personalizado (1 € = X ¥):
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                inputMode="decimal"
                value={customRateText}
                onChange={(e) => setCustomRateText(e.target.value)}
                placeholder="Ej. 165.50"
                className="flex-1 px-3 py-1.5 rounded-lg border text-sm font-semibold"
                style={{
                  background: "var(--paper)",
                  borderColor: "var(--line)",
                  color: "var(--ink)",
                }}
              />
              <button
                type="button"
                onClick={handleApplyCustomRate}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs cursor-pointer"
                style={{ background: "var(--indigo)" }}
              >
                Aplicar
              </button>
            </div>
            <p className="text-[11px] mt-1.5 m-0" style={{ color: "var(--ink-soft)" }}>
              Útil si tu banco o tarjeta aplica un margen o comisión de cambio diferente.
            </p>
          </div>
        )}

        <div
          className="rounded-xl p-3.5 mb-4 flex items-center justify-between shadow-xs"
          style={{
            background: "var(--paper-raised)",
            border: isCustomRate
              ? "1px solid rgba(188,71,73,0.3)"
              : isLive
              ? "1px solid rgba(46,125,91,0.25)"
              : "1px solid rgba(201,162,39,0.3)",
            borderLeft: isCustomRate
              ? "4px solid var(--shu)"
              : isLive
              ? "4px solid var(--forest)"
              : "4px solid var(--gold)",
          }}
        >
          <div className="flex items-center gap-2">
            {isCustomRate ? (
              <Edit3 size={16} style={{ color: "var(--shu)" }} />
            ) : isLive ? (
              <CheckCircle2 size={16} style={{ color: "var(--forest)" }} />
            ) : (
              <WifiOff size={16} style={{ color: "#b08500" }} />
            )}
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", margin: 0 }}>
                1 € = {formatEs(rate, { maxDecimals: 2 })} ¥ {isCustomRate && "(Personalizado)"}
              </p>
              <p style={{ fontSize: 11, color: "var(--ink-soft)", margin: 0 }}>
                {isCustomRate
                  ? "Tipo de cambio manual fijado por el usuario"
                  : isLive
                  ? `Cambio oficial en directo ${lastUpdated ? `(${lastUpdated})` : ""}`
                  : `Cambio guardado offline ${lastUpdated ? `(actualizado ${lastUpdated})` : ""}`}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink)" }}>
                Euros (€)
              </label>
              <div className="flex gap-1.5">
                {[10, 50, 100, 500].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleEurChange(String(val))}
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-lg border transition-all hover:bg-black/5"
                    style={{ background: "var(--paper-raised)", borderColor: "var(--line)", color: "var(--indigo)" }}
                  >
                    {formatEs(val)} €
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                inputMode="decimal"
                value={eurText}
                onChange={(e) => handleEurChange(e.target.value)}
                onBlur={() => setEurText(formatEs(eurInput, { maxDecimals: 2 }))}
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid var(--line)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--ink)",
                  background: "var(--paper-raised)",
                  fontVariantNumeric: "tabular-nums",
                }}
              />
              <span style={{
                padding: "10px 16px",
                background: "var(--indigo)",
                color: "white",
                borderRadius: 10,
                fontWeight: 700,
                minWidth: "60px",
                textAlign: "center",
              }}>
                €
              </span>
            </div>
          </div>

          <div style={{ textAlign: "center", color: "var(--ink-soft)" }}>↕</div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink)" }}>
                Yenes (¥)
              </label>
              <div className="flex flex-wrap gap-1.5 justify-end">
                {[1000, 5000, 10000, 50000, 100000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleYenChange(String(val))}
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-lg border transition-all hover:bg-black/5"
                    style={{ background: "var(--paper-raised)", borderColor: "var(--line)", color: "var(--forest)" }}
                  >
                    {formatEs(val)} ¥
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                inputMode="numeric"
                value={yenText}
                onChange={(e) => handleYenChange(e.target.value)}
                onBlur={() => setYenText(formatEs(Math.round(yenInput)))}
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid var(--line)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--ink)",
                  background: "var(--paper-raised)",
                  fontVariantNumeric: "tabular-nums",
                }}
              />
              <span style={{
                padding: "10px 16px",
                background: "var(--forest)",
                color: "white",
                borderRadius: 10,
                fontWeight: 700,
                minWidth: "60px",
                textAlign: "center",
              }}>
                ¥
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl p-4 mt-4 space-y-2.5" style={{ background: "var(--paper-raised)", border: "1px solid var(--line)" }}>
          <p style={{ fontSize: 12, color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
            💱 Tipo de cambio oficial obtenido en directo desde API pública (ExchangeRate-API). Si no hay cobertura en el metro o montaña, se utiliza automáticamente la última cotización guardada en el dispositivo.
          </p>
          <p style={{ fontSize: 12, color: "var(--ink)", margin: 0, lineHeight: 1.5, borderTop: "1px dashed var(--line)", paddingTop: 10 }}>
            🏧 <strong>Consejo para sacar efectivo (Revolut):</strong> Tanto en <strong>7-Eleven</strong> como en <strong>Lawson</strong> siempre hay cajeros automáticos (ATM) y máquinas para cambiar divisas (EUR → JPY). Lo que mejor sale, sin duda, es <strong>sacar del ATM con tarjeta Revolut</strong>. Los cajeros suelen cobrar una comisión fija de <strong>~¥660 por retirada</strong>, por lo que lo más rentable para tener efectivo es sacar una cantidad generosa de yenes de una sola vez y no pagar esa comisión en repetidas ocasiones.
          </p>
        </div>
      </div>

      {/* ── TABLA DE EQUIVALENCIA DE TALLAS ── */}
      <div className="mt-10">
        <div className="mb-4">
          <p className="eyebrow mb-1" style={{ color: "var(--shu)" }}>Guía de compras</p>
          <h3 className="font-display text-xl" style={{ color: "var(--indigo)" }}>
            Equivalencia de tallas Japón ⇄ Europa
          </h3>
          <p style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 4, lineHeight: 1.5 }}>
            El calzado en Japón se etiqueta en <strong>centímetros directos (cm)</strong> de la longitud del pie. En ropa textil (Uniqlo, GU, Muji), las tallas suelen ser <strong>una talla más ajustada/pequeña</strong> que en Europa.
          </p>
        </div>

        {/* Pestañas de categoría */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            type="button"
            onClick={() => setActiveSizeTab("shoes")}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all cursor-pointer"
            style={{
              background: activeSizeTab === "shoes" ? "var(--indigo)" : "var(--paper-raised)",
              color: activeSizeTab === "shoes" ? "#ffffff" : "var(--ink)",
              borderColor: activeSizeTab === "shoes" ? "var(--indigo)" : "var(--line)",
            }}
          >
            <Footprints size={14} />
            <span>👟 Calzado (cm)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveSizeTab("tops")}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all cursor-pointer"
            style={{
              background: activeSizeTab === "tops" ? "var(--indigo)" : "var(--paper-raised)",
              color: activeSizeTab === "tops" ? "#ffffff" : "var(--ink)",
              borderColor: activeSizeTab === "tops" ? "var(--indigo)" : "var(--line)",
            }}
          >
            <Shirt size={14} />
            <span>👕 Ropa superior</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveSizeTab("women")}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all cursor-pointer"
            style={{
              background: activeSizeTab === "women" ? "var(--indigo)" : "var(--paper-raised)",
              color: activeSizeTab === "women" ? "#ffffff" : "var(--ink)",
              borderColor: activeSizeTab === "women" ? "var(--indigo)" : "var(--line)",
            }}
          >
            <span>👗 Tallas mujer (号)</span>
          </button>
        </div>

        {/* Tab Calzado */}
        {activeSizeTab === "shoes" && (
          <div className="rounded-2xl border overflow-hidden shadow-xs" style={{ background: "var(--paper-raised)", borderColor: "var(--line)" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(29,53,87,0.06)", borderBottom: "1px solid var(--line)", color: "var(--indigo)" }}>
                    <th className="py-2.5 px-3 font-bold">Japón (cm)</th>
                    <th className="py-2.5 px-3 font-bold">Europa (EU)</th>
                    <th className="py-2.5 px-3 font-bold">EE.UU. Hombre</th>
                    <th className="py-2.5 px-3 font-bold">EE.UU. Mujer</th>
                  </tr>
                </thead>
                <tbody>
                  {shoeSizes.map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: "1px solid var(--line)",
                        background: idx % 2 === 0 ? "transparent" : "rgba(0,0,0,0.015)",
                        color: "var(--ink)",
                      }}
                    >
                      <td className="py-2 px-3 font-bold" style={{ color: "var(--shu)" }}>{row.jp}</td>
                      <td className="py-2 px-3 font-semibold">{row.eu}</td>
                      <td className="py-2 px-3" style={{ color: "var(--ink-soft)" }}>{row.usM}</td>
                      <td className="py-2 px-3" style={{ color: "var(--ink-soft)" }}>{row.usW}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Ropa superior */}
        {activeSizeTab === "tops" && (
          <div className="rounded-2xl border overflow-hidden shadow-xs" style={{ background: "var(--paper-raised)", borderColor: "var(--line)" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(29,53,87,0.06)", borderBottom: "1px solid var(--line)", color: "var(--indigo)" }}>
                    <th className="py-2.5 px-3 font-bold">Talla Europa (EU)</th>
                    <th className="py-2.5 px-3 font-bold">Talla Japón (JP)</th>
                    <th className="py-2.5 px-3 font-bold">Observaciones</th>
                  </tr>
                </thead>
                <tbody>
                  {topSizes.map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: "1px solid var(--line)",
                        background: idx % 2 === 0 ? "transparent" : "rgba(0,0,0,0.015)",
                        color: "var(--ink)",
                      }}
                    >
                      <td className="py-2.5 px-3 font-bold">{row.eu}</td>
                      <td className="py-2.5 px-3 font-bold" style={{ color: "var(--forest)" }}>{row.jp}</td>
                      <td className="py-2.5 px-3" style={{ color: "var(--ink-soft)" }}>{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Tallas Mujer */}
        {activeSizeTab === "women" && (
          <div className="rounded-2xl border overflow-hidden shadow-xs" style={{ background: "var(--paper-raised)", borderColor: "var(--line)" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(29,53,87,0.06)", borderBottom: "1px solid var(--line)", color: "var(--indigo)" }}>
                    <th className="py-2.5 px-3 font-bold">Europa (EU)</th>
                    <th className="py-2.5 px-3 font-bold">Japón (号)</th>
                    <th className="py-2.5 px-3 font-bold">Busto ref.</th>
                    <th className="py-2.5 px-3 font-bold">Cintura ref.</th>
                  </tr>
                </thead>
                <tbody>
                  {womenSizes.map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: "1px solid var(--line)",
                        background: idx % 2 === 0 ? "transparent" : "rgba(0,0,0,0.015)",
                        color: "var(--ink)",
                      }}
                    >
                      <td className="py-2.5 px-3 font-bold">{row.eu}</td>
                      <td className="py-2.5 px-3 font-bold" style={{ color: "var(--shu)" }}>{row.jp}</td>
                      <td className="py-2.5 px-3" style={{ color: "var(--ink-soft)" }}>{row.busto}</td>
                      <td className="py-2.5 px-3" style={{ color: "var(--ink-soft)" }}>{row.cintura}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Consejos prácticos de compra */}
        <div className="rounded-xl p-4 mt-3 space-y-1.5" style={{ background: "var(--paper-raised)", border: "1px solid var(--line)" }}>
          <p style={{ fontSize: 12, color: "var(--ink)", margin: 0, fontWeight: 700 }}>
            🛍️ <strong>Consejos de etiqueta al probarse ropa en Japón:</strong>
          </p>
          <ul className="text-xs space-y-1 m-0 pl-4" style={{ color: "var(--ink-soft)", lineHeight: 1.5 }}>
            <li><strong>Descalzarse siempre:</strong> En los probadores de tiendas como Uniqlo o GU hay un escalón o alfombrilla. Quítate los zapatos antes de pisar el área del probador.</li>
            <li><strong>Funda facial para maquillaje (Face cover):</strong> El personal te entregará una pequeña capucha de tela no tejida al entrar al probador para colocártela sobre la cabeza antes de meterte la ropa por el cuello, evitando manchas en la prenda.</li>
            <li><strong>Largo de mangas y piernas:</strong> Las prendas japonesas suelen tener tiro y mangas ligeramente más cortos que el patrón occidental. Tiendas como Uniqlo ofrecen servicio de arreglo/dobladillo de pantalones en el mismo día (a menudo gratuito o por ~¥300).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
