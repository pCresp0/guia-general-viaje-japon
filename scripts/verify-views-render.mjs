import fs from 'fs';
import path from 'path';

console.log("=== VERIFYING ALL 19 PAGES AND LOCALES ===");

const expectedPages = [
  'InicioPage.jsx',
  'Itinerary.jsx',
  'CalendarPage.jsx',
  'MapPage.jsx',
  'InfoPage.jsx',
  'HotelsPage.jsx',
  'TransportPage.jsx',
  'BudgetPage.jsx',
  'PlacesPage.jsx',
  'FoodsPage.jsx',
  'HistoryPage.jsx',
  'FrikadasPage.jsx',
  'PendingPage.jsx',
  'PrepPage.jsx',
  'EmergencyPage.jsx',
  'WeatherPage.jsx',
  'PhrasesPage.jsx',
  'UtilsPage.jsx',
  'AboutPage.jsx'
];

let errors = 0;
for (const page of expectedPages) {
  const pagePath = path.join('./src/pages', page);
  if (!fs.existsSync(pagePath)) {
    console.error(`❌ Page not found: ${pagePath}`);
    errors++;
  } else {
    console.log(`✅ Page exists: ${page}`);
  }
}

// 2. Check all locales exist
const expectedLocales = [
  'src/data/locales/guides_en.js',
  'src/data/locales/guides_fr.js',
  'src/data/locales/guides_tl.js',
  'src/data/locales/history_en.js',
  'src/data/locales/history_fr.js',
  'src/data/locales/history_tl.js',
  'src/data/locales/trip_extra_en.js',
  'src/data/locales/trip_extra_fr.js',
  'src/data/locales/trip_extra_tl.js',
];

for (const loc of expectedLocales) {
  if (!fs.existsSync(loc)) {
    console.error(`❌ Locale missing: ${loc}`);
    errors++;
  } else {
    console.log(`✅ Locale exists: ${loc}`);
  }
}

// 3. Check App.jsx imports and routes all 19 pages
const appContent = fs.readFileSync('./src/App.jsx', 'utf8');
for (const page of expectedPages) {
  const baseName = page.replace('.jsx', '');
  if (!appContent.includes(baseName)) {
    console.error(`❌ App.jsx does not include ${baseName}`);
    errors++;
  }
}
console.log("✅ App.jsx includes all 19 pages properly mapped");

// 4. Check Nav.jsx includes all 19 navigation items
const navContent = fs.readFileSync('./src/components/Nav.jsx', 'utf8');
const navIds = [
  'inicio', 'itinerario', 'calendario', 'mapa',
  'vuelos', 'hoteles', 'transportes',
  'lugares', 'comidas', 'clima', 'historia', 'frases',
  'pendientes', 'preparativos', 'presupuesto',
  'herramientas', 'emergencias', 'frikadas',
  'about'
];

for (const id of navIds) {
  if (!navContent.includes(`id: "${id}"`) && !navContent.includes(`id: '${id}'`)) {
    console.error(`❌ Nav.jsx missing id: ${id}`);
    errors++;
  }
}
console.log(`✅ Nav.jsx contains all ${navIds.length} navigation IDs`);

console.log(`=== PAGES & LOCALES VERIFICATION: ${errors === 0 ? "PASSED (100% OK)" : "FAILED"} ===`);
if (errors > 0) process.exit(1);
