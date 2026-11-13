import { useState } from "react";
import { QrCode, ChevronDown, ExternalLink, CheckCircle2, Smartphone, ShieldCheck, FileText } from "lucide-react";
import { useT } from "../i18n/LanguageContext";

export default function VisitJapanQRCard({ defaultExpanded = false, isPriorityToday = false } = {}) {
  const t = useT();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div
      className="rounded-2xl border overflow-hidden shadow-sm mb-4"
      style={{
        background: "var(--paper-raised)",
        borderColor: "var(--line)",
      }}
    >
      {/* Header (Toggle) */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left px-3.5 py-2.5 flex items-center justify-between gap-2.5 text-white transition-all hover:brightness-110 focus:outline-none cursor-pointer border-none"
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 60%, #1d4ed8 100%)",
        }}
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0 shadow-sm">
            <QrCode size={17} className="text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] bg-white text-blue-900 font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider leading-none">
                {t("vjw.badge")}
              </span>
              <span className="text-xs text-blue-100 font-semibold truncate">
                {t("vjw.subtitle")}
              </span>
              {isPriorityToday && (
                <span className="text-[10px] bg-amber-400 text-amber-950 font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider leading-none shadow-sm">
                  {t("vjw.neededToday")}
                </span>
              )}
            </div>
            <h3 className="text-[13.5px] sm:text-sm font-bold text-white leading-tight mt-0.5 truncate" style={{ margin: 0 }}>
              {t("vjw.title")}
            </h3>
          </div>
        </div>

        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          style={{ opacity: 0.85 }}
        />
      </button>

      {/* Card Body */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-4 animate-in slide-in-from-top-2 fade-in duration-200">
          <p style={{ fontSize: 13, color: "var(--ink)", lineHeight: 1.55, margin: 0 }}>
            {t("vjw.intro")}
          </p>

          {/* Pasos clave */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div
              className="p-3.5 rounded-xl border flex flex-col gap-1.5"
              style={{ background: "var(--paper)", borderColor: "var(--line)" }}
            >
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: "var(--indigo)" }}>
                <FileText size={15} />
                <span>{t("vjw.step1Title")}</span>
              </div>
              <p className="text-xs m-0 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {t("vjw.step1Desc")}
              </p>
            </div>

            <div
              className="p-3.5 rounded-xl border flex flex-col gap-1.5"
              style={{ background: "var(--paper)", borderColor: "var(--line)" }}
            >
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: "var(--forest)" }}>
                <ShieldCheck size={15} />
                <span>{t("vjw.step2Title")}</span>
              </div>
              <p className="text-xs m-0 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {t("vjw.step2Desc")}
              </p>
            </div>

            <div
              className="p-3.5 rounded-xl border flex flex-col gap-1.5"
              style={{ background: "rgba(201,162,39,0.06)", borderColor: "rgba(201,162,39,0.3)" }}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                <Smartphone size={15} />
                <span>{t("vjw.step3Title")}</span>
              </div>
              <p className="text-xs text-amber-950 m-0 leading-relaxed">
                {t("vjw.step3Desc")}
              </p>
            </div>

            <div
              className="p-3.5 rounded-xl border flex flex-col gap-1.5"
              style={{ background: "rgba(30, 58, 138, 0.04)", borderColor: "rgba(30, 58, 138, 0.2)" }}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                <CheckCircle2 size={15} />
                <span>{t("vjw.step4Title")}</span>
              </div>
              <p className="text-xs text-blue-950 m-0 leading-relaxed">
                {t("vjw.step4Desc")}
              </p>
            </div>
          </div>

          {/* Web Oficial Visit Japan Web Link */}
          <div
            className="px-3.5 py-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            style={{ background: "rgba(30, 58, 138, 0.05)", borderColor: "rgba(30, 58, 138, 0.2)" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-base">🌐</span>
              <span style={{ color: "var(--ink)" }} className="font-medium">
                {t("vjw.officialWeb")}
              </span>
            </div>
            <a
              href="https://www.vjw.digital.go.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold px-3.5 py-2 rounded-lg border flex items-center justify-center gap-1.5 shrink-0 text-white transition-opacity hover:opacity-90 shadow-xs"
              style={{
                background: "var(--indigo)",
                borderColor: "var(--indigo)",
                textDecoration: "none",
              }}
            >
              <span>{t("vjw.officialBtn")}</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
