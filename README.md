# 🗻 Guía General de Viaje a Japón 🇯🇵

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Workbox-purple?logo=pwa)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Open Source](https://img.shields.io/badge/Open_Source-Yes-green.svg)](https://github.com/pCresp0/guia-general-viaje-japon)

Guía de viaje interactiva, *mobile-first* e instalable como **Progressive Web App (PWA)**, basada en una ruta completa de 16 días por Japón (Tokio, Kioto, Osaka, Kanazawa, Takayama, Valle de Kiso/Magome y Monte Fuji) realizada en **septiembre de 2026**.

Concebida con un doble propósito:
1. **Guía pública abierta:** Para que cualquier persona que esté organizando o soñando con un viaje a Japón pueda ver de forma práctica y real qué ruta seguir, qué trenes tomar, dónde alojarse, qué comer y qué preparativos tener listos.
2. **Plantilla viva de código abierto:** Para que desarrolladores o entusiastas del **vibecoding con IA** puedan clonar la aplicación y utilizarla como base para documentar o planificar su propio viaje a cualquier destino del mundo.

Esta plataforma sustituye por completo a los pesados documentos PDF, hojas de cálculo complejas y mensajes perdidos en chats grupales, unificando todo en una web moderna, reactiva y **100% operativa sin conexión a internet**.

---

## 🌐 Demo en Vivo en GitHub Pages

La versión oficial en producción está disponible públicamente en:

👉 **[https://pcresp0.github.io/guia-general-viaje-japon/](https://pcresp0.github.io/guia-general-viaje-japon/)**

---

## 🏛️ Arquitectura: Cero Backend y SSOT

El proyecto sigue una filosofía extrema de **disponibilidad y resiliencia offline**: en un viaje internacional, en túneles del Shinkansen o en zonas montañosas de los Alpes Japoneses, depender de la nube para consultar un billete, una reserva o una dirección no es viable.

1. **Single Source of Truth (SSOT) en el cliente:** Todos los datos (itinerario minuto a minuto, hoteles, vuelos, transportes, meteorología, historia y listas de tareas) residen en módulos JavaScript estructurados en `src/data/`. Cargar la web equivale a descargar la base de datos íntegra.
2. **PWA Offline-First (Workbox):** Mediante `vite-plugin-pwa`, la app instala un *Service Worker* que almacena en caché todos los recursos estáticos (código, estilos, fuentes, mapas e imágenes). Tras la primera carga, la aplicación abre y navega instantáneamente sin consumir datos móviles.
3. **Persistencia Local (`localStorage`):** El estado dinámico (tareas completadas en la checklist de preparativos, idioma seleccionado, filtros activos) se guarda exclusivamente en el dispositivo del usuario. Sin cuentas, sin contraseñas y sin telemetría invasiva.

---

## 🛠️ Tecnologías y Stack Técnico

* **React 19 & Vite 8:** Arquitectura modular de componentes, renderizado reactivo ultrarrápido y Hot Module Replacement (HMR) casi instantáneo.
* **Tailwind CSS v4 & Mobile-First:** Maquetación con utilidades atómicas, soporte de *Safe Area Insets* (notch y barras de navegación de iOS/Android) y una paleta inspirada en la estética japonesa tradicional (*Shu* bermellón, *Índigo*, *Sakura*, *Paper*).
* **Navegación por Gestos Móviles (`react-swipeable`):** Deslizar desde la pantalla hacia la derecha abre el menú lateral tipo cajón; deslizar hacia la izquierda lo cierra.
* **Mapas Vectoriales (Leaflet + OpenStreetMap):** Solución de cartografía ligera, libre de costes de Google Maps API y sincronizada con el itinerario y los puntos de interés.
* **Web Speech API (Text-to-Speech nativo):** Reproductor de audio integrado que sintetiza voz de forma nativa en el navegador para escuchar la historia de Japón sin descargar archivos de audio pesados.
* **Sistema Multi-idioma Propio (React Context):** Arquitectura propia sin librerías pesadas, con soporte completo para **Español 🇪🇸, English 🇬🇧, Français 🇫🇷 y Tagalog 🇵🇭**.
* **Buscador Global Reactivo:** Motor de búsqueda en memoria que indexa instantáneamente toda la aplicación y navega al resultado exacto con resalte luminoso.
* **Meteorología con Open-Meteo:** Conexión con la API libre de Open-Meteo para las ciudades de la ruta, con caché local de 12 horas.
* **Modo Impresión & Exportación PDF (`@media print`):** Estilos y vistas dedicadas para imprimir el itinerario y la historia o guardarlos como PDF de respaldo sin batería.

---

## 📱 Secciones y Funcionalidades de la Web

| Icono | Sección | Descripción |
| :--- | :--- | :--- |
| ⛩️ | **Inicio** | Bienvenida modular, resumen de la ruta de 16 días, tips de navegación y canales de contacto. |
| 🗓️ | **Itinerario** | Doble modo: **Vista Detallada** (horarios, avisos de efectivo, lore) y **Vista Rápida** (línea visual de paradas con enlaces al mapa). |
| 📅 | **Calendario** | Desglose mensual y semanal visual de las 16 jornadas con hitos clave, pernoctaciones y traslados. |
| 🗺️ | **Mapa Interactivo** | Mapa basado en OpenStreetMap con filtros por categorías (Lugares, Hoteles, Transportes) y por días específicos. |
| ✈️ | **Vuelos** | Desglose de los vuelos internacionales (Madrid-Doha-Narita) con escalas, horarios y operadoras. |
| 🏨 | **Hoteles** | Fichas de alojamientos con direcciones en japonés para taxis, horarios de check-in/out e indicaciones de llegada. |
| 🚄 | **Transportes & Billetes** | Fichas técnicas y didácticas de Shinkansen Nozomi, Thunderbird, Shinano y Nohi Bus con horarios, tarifas de referencia por persona, métodos de acceso oficial (Smart EX / IC Card / máquinas JR), normativa de equipaje y guía oficial de Visit Japan Web. |
| 🎒 | **Preparativos** | Gestión previa al viaje: seguros de viaje, internet (eSIM), equipaje y tarjetas IC físicas / monederos virtuales. |
| 💰 | **Presupuesto & JR Pass** | Desglose de costes por persona y comparador matemático exhaustivo que analiza por qué no compensa el JR Pass tras la subida de precios de 2023. |
| ✅ | **Cosas Pendientes** | Checklist interactiva con persistencia en `localStorage` dividida en tareas esenciales antes de viajar y durante el viaje. |
| 🍜 | **Gastronomía** | Platos imprescindibles de Japón (ramen, wagyu, okonomiyaki, takoyaki, matcha) y guía práctica de conveniencia (*konbini* 7-Eleven, FamilyMart y Lawson). |
| 📜 | **Historia & Multimedia** | Periodos históricos con Text-to-Speech nativo, podcasts de Apple, documentales de YouTube y libros con lectura online. |
| 👾 | **Cultura Pop (Frikadas)** | Puntos de interés cruzados con anime, videojuegos y cine (Ghibli, Pokémon, Nintendo, Akihabara). |
| 🗣️ | **Frases y Etiqueta** | Guía de modales japoneses y frases útiles con audio de pronunciación nativa. |
| 🧮 | **Herramientas & Clima** | Calculadoras de cambio de divisa (EUR/JPY), conversión de tallas y comprobador de caché offline. |
| 🚨 | **Emergencias** | Teléfonos de asistencia (110, 119), hospitales de habla inglesa/española y consejos sanitarios. |
| 🖨️ | **Impresión / PDF** | Vista limpia optimizada para imprimir en papel o exportar la hoja de ruta a PDF para emergencias sin batería. |
| ℹ️ | **Sobre la web** | Explicación detallada de la arquitectura técnica, comandos de clonación y guía de vibecoding. |

---

## 📂 Estructura del Proyecto

```text
guia-general-viaje-japon/
├── public/                 # Favicons, iconos PWA, manifest y recursos estáticos
├── src/
│   ├── components/         # Componentes reutilizables (fichas de tren, mapa, nav, footer, modales...)
│   ├── data/               # Single Source of Truth (SSOT)
│   │   ├── trip.js         # Datos base del viaje, días del itinerario, vuelos, hoteles, presupuestos y notas
│   │   ├── mapData.js      # Puntos de interés geolocalizados para el mapa
│   │   ├── jrPass.js       # Comparativa de precios y análisis matemático del JR Pass
│   │   ├── guides.js       # Guías de etiqueta, modales y tarjetas de transporte
│   │   ├── insurance.js    # Coberturas de seguros de viaje y teléfonos de asistencia
│   │   ├── pending.js      # Checklist interactiva de preparativos antes y durante el viaje
│   │   ├── history.js      # Datos históricos, podcasts, documentales y libros recomendados
│   │   ├── foods.js        # Guía gastronómica, platos típicos y sitios clave
│   │   ├── konbiniGuide.js # Guía de tiendas de conveniencia (7-Eleven, FamilyMart, Lawson)
│   │   ├── frikadas.js     # Cultura pop: anime, videojuegos, Ghibli, Nintendo y Akihabara
│   │   ├── weatherData.js  # Clima de referencia de cada ciudad de la ruta
│   │   └── locales/        # Traducciones completas a inglés, francés y tagalo
│   ├── i18n/               # Contexto React de internacionalización (es, en, fr, tl)
│   ├── pages/              # Vistas principales de la aplicación (Inicio, Itinerario, About...)
│   ├── App.jsx             # Enrutador principal y layout general
│   ├── main.jsx            # Punto de entrada de React y registro del Service Worker
│   └── index.css           # Tokens de diseño y utilidades de Tailwind CSS v4
├── index.html              # Plantilla HTML base, etiquetas OpenGraph y favicons
├── vite.config.js          # Configuración de Vite y plugin de PWA con Workbox
└── README.md
```

---

## 🚀 Despliegue y Puesta en Marcha Local

El código fuente está listo para ejecutarse localmente con **Node.js** (versión 18 o superior recomendada):

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/pCresp0/guia-general-viaje-japon.git
   cd guia-general-viaje-japon
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación funcionando con recarga en caliente (HMR).

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Generará la carpeta `dist/` optimizada y el Service Worker empaquetado para su despliegue en cualquier proveedor estático (**GitHub Pages**, **Vercel**, **Netlify** o **Cloudflare Pages**).

### 🌐 Despliegue Automático en GitHub Pages

El repositorio incluye un flujo de automatización listo para producción (`.github/workflows/deploy.yml`) que compila la web con Vite y la publica automáticamente en GitHub Pages en cada `git push origin main`:

1. En GitHub, entra en tu repositorio y dirígete a **Settings** ➔ **Pages** (en el menú lateral izquierdo).
2. En la sección **Build and deployment ➔ Source**, selecciona **GitHub Actions** (en vez de *"Deploy from a branch"*).
3. Si cambias el nombre del repositorio, edita la propiedad `base` en `vite.config.js` con el nombre de tu repositorio (por ejemplo `base: '/mi-viaje-japon/'`).
4. En la sección **Custom domain**, déjalo vacío a menos que tengas un dominio propio.
5. El workflow de Actions compilará la app y publicará la web automáticamente con HTTPS y soporte PWA.

---

## 🤖 Clonación, Personalización y Vibecoding

Esta web ha sido diseñada intencionadamente para que **cualquier persona pueda reutilizarla como plantilla** para su propio viaje:

### Opción A: Desarrollo Clásico
Si tienes conocimientos de desarrollo web (JavaScript / React):
* Modifica los datos de `src/data/trip.js` con tus fechas, ciudades, horarios, vuelos, hoteles y actividades.
* Ajusta las coordenadas y puntos de interés en `src/data/mapData.js`.
* Personaliza tu lista de tareas en `src/data/pending.js`.
* Los componentes visuales de la aplicación se alimentan directamente de estos archivos y reflejarán tus cambios de inmediato sin tocar bases de datos.

### Opción B: Vibecoding con Asistentes de IA
Si prefieres no programar o quieres montar tu guía en cuestión de minutos, puedes utilizar IDEs y herramientas con IA como **Antigravity**, **Cursor** o **Visual Studio Code** (con extensiones o agentes como **GitHub Copilot** o **Claude Code**). Una vez clonado el repositorio, pídele al agente en lenguaje natural:
> *"Quiero adaptar esta web para mi próximo viaje a Japón de 12 días en primavera. Estas son mis fechas, mis hoteles y las ciudades que visitaré: [pega aquí tus notas]. Actualiza los datos de `src/data/trip.js` y `src/data/mapData.js` manteniendo intacta la estructura y los componentes."*

La IA actualizará los módulos de datos respetando las interfaces y tendrás tu propia Progressive Web App personalizada lista para compartir con amigos o compañeros de viaje.

---

## 📴 Cómo Instalar la Web como App en el Móvil (PWA)

Al tratarse de una Progressive Web App (PWA), no necesitas buscarla en App Store ni en Google Play:

* **En iPhone / iPad (Safari):**
  1. Abre la web en Safari.
  2. Pulsa el botón **Compartir** (icono del cuadrado con la flecha hacia arriba).
  3. Selecciona **"Añadir a la pantalla de inicio"**.

* **En Android (Chrome / Brave / Edge):**
  1. Abre la web en el navegador.
  2. Pulsa el menú de tres puntos (⋮) en la esquina superior derecha.
  3. Selecciona **"Instalar aplicación"** o **"Añadir a la pantalla principal"**.

---

## 📬 Contacto y Soporte

Si tienes cualquier duda organizando tu viaje a Japón, quieres hacer una consulta sobre la ruta o necesitas consejos de viaje, abajo del todo en el **footer de la web** tienes disponibles mis canales y redes sociales de contacto directo.

* **Repositorio oficial:** [github.com/pCresp0/guia-general-viaje-japon](https://github.com/pCresp0/guia-general-viaje-japon)
* **Desarrollado por:** Pablo Crespo Bellido (2026)
