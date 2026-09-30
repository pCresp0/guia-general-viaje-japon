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

## 🏛️ Arquitectura: Cero Backend y SSOT

El proyecto sigue una filosofía extrema de **disponibilidad y resiliencia offline**: en un viaje internacional, en túneles del Shinkansen o en zonas montañosas de los Alpes Japoneses, depender de la nube para consultar un billete, una reserva o una dirección no es viable.

1. **Single Source of Truth (SSOT) en el cliente:** Todos los datos (itinerario minuto a minuto, hoteles, vuelos, transportes, meteorología, historia y listas de tareas) residen en módulos JavaScript estructurados en `src/data/`. Cargar la web equivale a descargar la base de datos íntegra.
2. **PWA Offline-First (Workbox):** Mediante `vite-plugin-pwa`, la app instala un *Service Worker* que almacena en caché todos los recursos estáticos (código, estilos, fuentes, mapas e imágenes). Tras la primera carga, la aplicación abre y navega instantáneamente sin consumir datos móviles.
3. **Persistencia Local (`localStorage`):** El estado dinámico (tareas completadas en la checklist de preparativos, idioma seleccionado, filtros activos) se guarda exclusivamente en el dispositivo del usuario. Sin cuentas, sin contraseñas y sin telemetría invasiva.

---

## 🛠️ Tecnologías y Stack Técnico

* **React 19 & Vite 8:** Arquitectura modular de componentes, renderizado reactivo ultrarrápido y Hot Module Replacement (HMR) casi instantáneo.
* **Tailwind CSS v4 & Mobile-First:** Maquetación con utilidades atómicas, soporte de *Safe Area Insets* (notch y barras de navegación de iOS/Android) y una paleta inspirada en la estética japonesa tradicional (*Shu* bermellón, *Índigo*, *Sakura*, *Paper*).
* **Mapas Vectoriales (Leaflet + OpenStreetMap):** Solución de cartografía ligera, libre de costes de Google Maps API y sincronizada con el itinerario y los puntos de interés.
* **Web Speech API (Text-to-Speech nativo):** Reproductor de audio integrado que sintetiza voz de forma nativa en el navegador para escuchar la historia de Japón sin descargar archivos de audio pesados.
* **Sistema Multi-idioma Propio (React Context):** Arquitectura propia sin librerías pesadas, con soporte completo para **Español 🇪🇸, English 🇬🇧, Français 🇫🇷 y Tagalog 🇵🇭**.
* **Buscador Global Reactivo:** Motor de búsqueda en memoria que indexa instantáneamente toda la aplicación y navega al resultado exacto con resalte luminoso.
* **Meteorología con Open-Meteo:** Conexión con la API libre de Open-Meteo para las ciudades de la ruta, con caché local de 12 horas.

---

## 📱 Secciones y Funcionalidades de la Web

| Icono | Sección | Descripción |
| :--- | :--- | :--- |
| ⛩️ | **Inicio** | Bienvenida, resumen de los 16 días de viaje, consejos clave de preparativos y canales de contacto. |
| 🗓️ | **Itinerario** | Doble modo: **Vista Detallada** (horarios, avisos de efectivo, lore) y **Vista Rápida** (línea de metro visual con enlaces al mapa). |
| 🗺️ | **Mapa Interactivo** | Filtro por categorías (Lugares, Hoteles, Transportes) y por días específicos de la ruta. |
| 🏨 | **Hoteles** | Fichas de alojamientos con direcciones en japonés, horarios de check-in/out e indicaciones de llegada. |
| 🚄 | **Transportes & Billetes** | Shinkansen, trenes expresos y autobuses alpinos con fichas interactivas, asientos y códigos QR, además del QR de Visit Japan Web. |
| ✅ | **Cosas Pendientes** | Checklist interactiva con persistencia local dividida en tareas esenciales antes de viajar y durante el viaje. |
| 🍜 | **Gastronomía** | Platos imprescindibles de Japón (ramen, wagyu, okonomiyaki, takoyaki, matcha) y locales recomendados. |
| 📜 | **Historia & Multimedia** | Periodos históricos con Text-to-Speech nativo, podcasts de Apple, documentales de YouTube y libros con lectura online. |
| 👾 | **Cultura Pop (Frikadas)** | Puntos de interés cruzados con anime, videojuegos y cine (Ghibli, Pokémon, Nintendo, Akihabara). |
| 🗣️ | **Frases y Etiqueta** | Guía de modales japoneses y frases útiles con audio de pronunciación nativa. |
| 🧮 | **Herramientas & Clima** | Calculadoras de cambio de divisa (EUR/JPY), conversión de tallas y comprobador de caché offline. |
| 🚨 | **Emergencias** | Teléfonos de asistencia (110, 119), hospitales de habla inglesa/española y consejos sanitarios. |
| ℹ️ | **Sobre la web** | Explicación detallada de la arquitectura técnica, comandos de clonación y guía de vibecoding. |

---

## 📂 Estructura del Proyecto

```text
guia-general-viaje-japon/
├── public/                 # Favicons, iconos PWA, manifest y recursos estáticos
├── src/
│   ├── components/         # Componentes reutilizables (fichas de tren, mapa, nav, footer...)
│   ├── data/               # Single Source of Truth (SSOT)
│   │   ├── trip.js         # Metadatos generales, bienvenida e itinerario completo día por día
│   │   ├── hotels.js       # Alojamientos y ubicaciones
│   │   ├── flights.js      # Información de vuelos de ida y vuelta
│   │   ├── pending.js      # Checklist exhaustiva de preparativos de viaje
│   │   ├── places.js       # Base de datos de puntos de interés para el mapa
│   │   ├── history.js      # Datos históricos, libros, podcasts y documentales
│   │   ├── phrases.js      # Expresiones en japonés y normas de etiqueta
│   │   ├── foods.js        # Platos y especialidades gastronómicas
│   │   └── locales/        # Contenido específico traducido por idioma
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
   Generará la carpeta `dist/` optimizada y el Service Worker empaquetado para su despliegue en cualquier proveedor estático (**Vercel**, **Netlify**, **Cloudflare Pages** o **GitHub Pages**).

---

## 🤖 Clonación, Personalización y Vibecoding

Esta web ha sido diseñada intencionadamente para que **cualquier persona pueda reutilizarla como plantilla** para su propio viaje:

### Opción A: Desarrollo Clásico
Si tienes conocimientos de desarrollo web (JavaScript / React):
* Modifica los datos de `src/data/trip.js` con tus fechas, ciudades, horarios y actividades.
* Actualiza tus alojamientos en `src/data/hotels.js` y tus vuelos en `src/data/flights.js`.
* Añade o retira los marcadores que quieras en `src/data/places.js`.
* Los componentes visuales de la aplicación se alimentan directamente de estos archivos y reflejarán tus cambios de inmediato.

### Opción B: Vibecoding con Asistentes de IA
Si no programas o quieres montar tu guía en cuestión de minutos, abre esta carpeta con tu editor con IA preferido (**Cursor**, **Windsurf**, **Claude Code**, **GitHub Copilot** o pásale los archivos a **ChatGPT / Claude**) y utiliza prompts en lenguaje natural:
> *"Quiero adaptar esta web para mi próximo viaje a Japón de 12 días en primavera. Estas son mis fechas, mis hoteles y las ciudades que visitaré: [pega aquí tus notas]. Actualiza los datos de `src/data/trip.js` y `src/data/hotels.js` manteniendo la estructura y los componentes intactos."*

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
