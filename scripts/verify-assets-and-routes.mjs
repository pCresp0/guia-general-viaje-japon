import fs from 'fs';
import path from 'path';

console.log("=== COMPREHENSIVE VERIFICATION START ===");
let errors = 0;
let checkedAssets = 0;

// 1. Scan src/data and src/ for image and asset references
function walk(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const p = path.join(dir, item);
    if (fs.statSync(p).isDirectory()) {
      if (item !== 'node_modules' && item !== '.git') {
        files = files.concat(walk(p));
      }
    } else if (p.endsWith('.js') || p.endsWith('.jsx') || p.endsWith('.css') || p.endsWith('.html')) {
      files.push(p);
    }
  }
  return files;
}

const files = walk('./src').concat(['./index.html']);
const assetRegex = /["'`]((\/|\.\/|\.\.\/)[^"'`\s]+\.(png|jpg|jpeg|svg|webp|ico))["'`]/g;

const foundPaths = new Set();

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = assetRegex.exec(content)) !== null) {
    const rawPath = match[1];
    foundPaths.add(JSON.stringify({ file, rawPath }));
  }
}

for (const item of foundPaths) {
  const { file, rawPath } = JSON.parse(item);
  checkedAssets++;
  
  // Resolve path
  let targetPath;
  if (rawPath.startsWith('/')) {
    // Vite public asset
    targetPath = path.join('./public', rawPath);
    // Or in src if /src
    if (!fs.existsSync(targetPath) && rawPath.startsWith('/src/')) {
      targetPath = '.' + rawPath;
    }
  } else {
    // Relative to file
    targetPath = path.resolve(path.dirname(file), rawPath);
  }

  // Also strip query params or hashes if any
  const cleanPath = targetPath.split('?')[0].split('#')[0];

  if (!fs.existsSync(cleanPath)) {
    console.error(`❌ ASSET NOT FOUND: "${rawPath}" referenced in ${file}`);
    console.error(`   Looked at: ${cleanPath}`);
    errors++;
  }
}

console.log(`✅ Verified ${checkedAssets} asset references. Missing: ${errors}`);

// 2. Check CSS background images
const cssContent = fs.readFileSync('./src/index.css', 'utf8');
const cssUrlRegex = /url\(['"]?([^'"\)]+)['"]?\)/g;
let cssMatch;
while ((cssMatch = cssUrlRegex.exec(cssContent)) !== null) {
  const url = cssMatch[1];
  if (!url.startsWith('data:')) {
    const resolved = path.resolve('./src', url);
    if (!fs.existsSync(resolved)) {
      console.error(`❌ CSS background image not found: ${url} (looked at ${resolved})`);
      errors++;
    } else {
      console.log(`✅ CSS background OK: ${url}`);
    }
  }
}

// 3. Check vite.config.js includeAssets
const viteConfig = fs.readFileSync('./vite.config.js', 'utf8');
const includeAssetsMatch = viteConfig.match(/includeAssets:\s*\[([^\]]+)\]/);
if (includeAssetsMatch) {
  const assetNames = includeAssetsMatch[1].match(/['"]([^'"]+)['"]/g).map(s => s.replace(/['"]/g, ''));
  for (const asset of assetNames) {
    const p = path.join('./public', asset);
    if (!fs.existsSync(p)) {
      console.error(`❌ vite.config.js includeAsset missing in public: ${asset}`);
      errors++;
    } else {
      console.log(`✅ vite.config.js includeAsset OK: ${asset}`);
    }
  }
}

// 4. Check dist/ output assets
if (fs.existsSync('./dist')) {
  console.log("Checking dist/ critical files...");
  const critical = [
    'dist/index.html',
    'dist/assets/app.js',
    'dist/assets/index.css',
    'dist/sw.js',
    'dist/manifest.webmanifest',
    'dist/apple-touch-icon.png',
    'dist/favicon.ico',
    'dist/waves-sidebar.webp'
  ];
  for (const c of critical) {
    if (!fs.existsSync(c)) {
      console.error(`❌ dist critical file missing: ${c}`);
      errors++;
    } else {
      console.log(`✅ dist critical file OK: ${c}`);
    }
  }
}

console.log(`=== RESULT: ${errors === 0 ? "ALL CHECKS PASSED PERFECTLY" : "ERRORS DETECTED"} ===`);
if (errors > 0) process.exit(1);

