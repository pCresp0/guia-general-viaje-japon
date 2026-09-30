import React, { useState } from "react";
import { useContent, useT } from "../i18n/LanguageContext";
import { ExternalLink, Terminal, Copy, Check, Sparkles, Code2, WifiOff, Layers, Smartphone, Volume2, Search, Map, CloudSun, Globe } from "lucide-react";

export default function AboutPage() {
  const { tripMeta } = useContent();
  const t = useT();
  const [copied, setCopied] = useState(false);

  const repoUrl = tripMeta.about?.repoUrl || "https://github.com/pCresp0/guia-general-viaje-japon";
  const repoName = tripMeta.about?.repoName || "pCresp0/guia-general-viaje-japon";

  const cloneCommands = `git clone ${repoUrl}.git\ncd guia-general-viaje-japon\nnpm install\nnpm run dev`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(cloneCommands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const techStack = [
    {
      icon: <Code2 size={18} style={{ color: "var(--shu)" }} />,
      name: "React 19 + Vite 8",
      desc: "Arquitectura SPA de alto rendimiento, modular y compilada con Rollup para un bundle mínimo."
    },
    {
      icon: <WifiOff size={18} style={{ color: "#2e7d5b" }} />,
      name: "PWA Offline-First (Workbox)",
      desc: "Service Worker que cachea todo el contenido. Funciona al 100% en trenes bala, aviones y zonas rurales."
    },
    {
      icon: <Smartphone size={18} style={{ color: "var(--indigo)" }} />,
      name: "Tailwind CSS v4 & Mobile-First",
      desc: "Diseñado milimétricamente para móviles, con soporte de Safe Area Insets de iOS y paleta tradicional nipona."
    },
    {
      icon: <Globe size={18} style={{ color: "#b08968" }} />,
      name: "Multi-idioma Propio (4 idiomas)",
      desc: "Sistema nativo ligero con React Context (Español, English, Français, Tagalog) sin librerías pesadas."
    },
    {
      icon: <Map size={18} style={{ color: "#2e7d5b" }} />,
      name: "Mapas Vectoriales (Leaflet)",
      desc: "Interactivos, ligeros y basados en OpenStreetMap, sin costes de Google Maps API ni rastreadores."
    },
    {
      icon: <Volume2 size={18} style={{ color: "var(--shu)" }} />,
      name: "Web Speech API (Text-to-Speech)",
      desc: "Narrador nativo del navegador para escuchar la historia de Japón sin descargar megabytes de audios."
    },
    {
      icon: <Search size={18} style={{ color: "var(--indigo)" }} />,
      name: "Buscador Global Reactivo",
      desc: "Indexación instantánea en memoria con navegación directa, apertura de pestañas y resalte visual luminoso."
    },
    {
      icon: <CloudSun size={18} style={{ color: "#e09f3e" }} />,
      name: "Clima con Caché (Open-Meteo)",
      desc: "Predicciones meteorológicas en vivo con caché local de 12 horas para preservar la batería del dispositivo."
    }
  ];

  return (
    <div className="px-4 pt-3 pb-16 max-w-3xl mx-auto">
      {/* Encabezado */}
      <div className="mb-6">
        <p className="eyebrow mb-1" style={{ color: "var(--shu)" }}>
          {t("about.eyebrow") || "Desarrollo & Arquitectura"}
        </p>
        <h1 className="font-display text-2xl md:text-3xl" style={{ color: "var(--indigo)", margin: 0 }}>
          {t("about.title") || "Sobre esta web"}
        </h1>
      </div>

      {/* Tarjeta de Origen y Propósito */}
      <div
        className="rounded-2xl border p-5 mb-6 shadow-xs"
        style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">⛩️</span>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--indigo)", margin: 0 }}>
            ¿Cómo y por qué nació este proyecto?
          </h2>
        </div>
        <div className="space-y-3" style={{ fontSize: 14.5, color: "var(--ink)", lineHeight: 1.65 }}>
          <p style={{ margin: 0 }}>
            Esta web nació con una meta ambiciosa: <strong>eliminar por completo</strong> los PDFs pesados de decenas de páginas, los Excels ilegibles en el móvil y los grupos de mensajería con enlaces y billetes perdidos entre cientos de mensajes.
          </p>
          <p style={{ margin: 0 }}>
            En su lugar, creamos una <strong>Progressive Web App (PWA) interactiva, rápida y 100% funcional sin conexión</strong> para vivir un viaje de 16 días por Japón (Tokio, Kioto, Osaka, Kanazawa, Takayama y Magome).
          </p>
          <p style={{ margin: 0 }}>
            Tras completar la aventura, he adaptado la plataforma como <strong>guía pública de referencia y plantilla de código abierto</strong> para que cualquier persona que planee viajar a Japón pueda inspirarse, consultar cada detalle o reutilizar la base técnica para su propio viaje.
          </p>
        </div>
      </div>

      {/* Banner / Acceso Directo al Repositorio de GitHub */}
      <div
        className="rounded-2xl border p-5 mb-6"
        style={{
          borderColor: "rgba(36,41,47,0.2)",
          background: "linear-gradient(135deg, rgba(36,41,47,0.04) 0%, rgba(36,41,47,0.08) 100%)",
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#24292f", color: "#ffffff" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm" style={{ color: "var(--ink)" }}>{repoName}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(46,125,91,0.15)", color: "#2e7d5b" }}>
                  Open Source
                </span>
              </div>
              <p className="text-xs text-[var(--ink-soft)] mt-0.5" style={{ wordBreak: "break-all" }}>
                {repoUrl}
              </p>
            </div>
          </div>

          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-xl px-4 py-2.5 transition-all shadow-sm"
            style={{
              background: "#24292f",
              color: "#ffffff",
              textDecoration: "none",
              whiteSpace: "nowrap"
            }}
          >
            <span>Ver repositorio</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Filosofía Técnica: Cero Backend y SSOT */}
      <div
        className="rounded-2xl border p-5 mb-6"
        style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Layers size={19} style={{ color: "var(--shu)" }} />
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--indigo)", margin: 0 }}>
            Arquitectura: Single Source of Truth (SSOT)
          </h2>
        </div>
        <div className="space-y-3" style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.65 }}>
          <p style={{ margin: 0 }}>
            <strong>Cero latencia y cero dependencias externas:</strong> A diferencia de apps que dependen de bases de datos remotas o llamadas constantes a la nube, aquí todos los datos (itinerario minuto a minuto, hoteles, billetes interactivos, historia, frases y gastronomía) están incrustados directamente como módulos de datos estructurados en JavaScript dentro de <code>src/data/</code>.
          </p>
          <p style={{ margin: 0 }}>
            Cargar la web equivale a descargar la base de datos íntegra. El Service Worker de Workbox la guarda en la caché del navegador para que nunca te quedes sin información, aunque pierdas la cobertura en un túnel del Shinkansen o en una montaña remota.
          </p>
        </div>
      </div>

      {/* Tecnologías Utilizadas (El Stack) */}
      <div
        className="rounded-2xl border p-5 mb-6"
        style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={19} style={{ color: "var(--shu)" }} />
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--indigo)", margin: 0 }}>
            Tecnologías y Stack Técnico
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border flex flex-col justify-start"
              style={{
                borderColor: "var(--line)",
                background: "var(--paper)",
              }}
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,0,0,0.03)" }}>
                  {tech.icon}
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", margin: 0 }}>
                  {tech.name}
                </h3>
              </div>
              <p style={{ fontSize: 12.5, color: "var(--ink)", opacity: 0.8, lineHeight: 1.5, margin: 0 }}>
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Clonación, Personalización y Vibecoding */}
      <div
        className="rounded-2xl border p-5 mb-6"
        style={{
          borderColor: "rgba(46,125,91,0.25)",
          background: "rgba(46,125,91,0.04)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Terminal size={20} style={{ color: "#2e7d5b" }} />
          <h2 style={{ fontSize: 16.5, fontWeight: 700, color: "var(--indigo)", margin: 0 }}>
            ¿Quieres clonarla y personalizarla? (Vibecoding / Dev)
          </h2>
        </div>

        <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.6, margin: "0 0 14px 0" }}>
          Si estás preparando tu propio viaje a Japón o quieres tomar esta app como plantilla para cualquier otro destino, puedes clonar el repositorio y adaptarla a tu gusto:
        </p>

        {/* Consola con comandos */}
        <div
          className="rounded-xl p-4 font-mono text-xs relative mb-4 overflow-x-auto"
          style={{
            background: "#1e1e1e",
            color: "#e0e0e0",
            border: "1px solid #333",
          }}
        >
          <button
            onClick={handleCopy}
            className="absolute top-2.5 right-2.5 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-sans transition-all cursor-pointer"
            style={{
              background: copied ? "#2e7d5b" : "rgba(255,255,255,0.12)",
              color: "#ffffff",
              border: "none",
            }}
          >
            {copied ? (
              <>
                <Check size={13} />
                <span>¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copiar comandos</span>
              </>
            )}
          </button>
          <div className="space-y-1 pr-24">
            <p className="text-gray-400 select-none"># 1. Clona el repositorio</p>
            <p className="text-green-400">git clone {repoUrl}.git</p>
            <p className="text-gray-400 select-none mt-2"># 2. Entra en la carpeta</p>
            <p className="text-yellow-300">cd guia-general-viaje-japon</p>
            <p className="text-gray-400 select-none mt-2"># 3. Instala dependencias y lanza el entorno local</p>
            <p className="text-blue-300">npm install</p>
            <p className="text-blue-300">npm run dev</p>
          </div>
        </div>

        {/* Los dos caminos: programación clásica o vibecoding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div
            className="p-3.5 rounded-xl border"
            style={{ background: "var(--paper-raised)", borderColor: "var(--line)" }}
          >
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "var(--shu)", margin: "0 0 6px 0" }}>
              💻 Para programadores
            </h3>
            <p style={{ fontSize: 13, color: "var(--ink)", opacity: 0.85, lineHeight: 1.5, margin: 0 }}>
              Edita directamente los ficheros de datos en <code>src/data/trip.js</code>, <code>hotels.js</code> y <code>flights.js</code>. Los componentes se actualizarán de forma reactiva sin tocar bases de datos.
            </p>
          </div>

          <div
            className="p-3.5 rounded-xl border"
            style={{ background: "var(--paper-raised)", borderColor: "var(--line)" }}
          >
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "#2e7d5b", margin: "0 0 6px 0" }}>
              🤖 Para Vibecoders (IA)
            </h3>
            <p style={{ fontSize: 13, color: "var(--ink)", opacity: 0.85, lineHeight: 1.5, margin: 0 }}>
              Abre el proyecto con <strong>Cursor, Claude Code, Windsurf o Copilot</strong> y dile: <em>"Adapta los datos de trip.js para un viaje a Japón de 12 días saliendo desde mi ciudad..."</em>. La IA se encargará del resto.
            </p>
          </div>
        </div>
      </div>

      {/* Enlace final a GitHub */}
      <div className="text-center pt-2">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-xl px-6 py-3.5 transition-all shadow-sm"
          style={{
            background: "var(--ink)",
            color: "var(--paper)",
            textDecoration: "none",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <span>Ir al repositorio: {repoName}</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
