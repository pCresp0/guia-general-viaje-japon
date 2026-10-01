/**
 * Resuelve rutas de archivos estáticos (en public/) teniendo en cuenta
 * el BASE_URL configurado en Vite (por ejemplo /guia-general-viaje-japon/ en GitHub Pages).
 */
export function assetUrl(path) {
  if (!path) return "";
  if (/^(?:https?:)?\/\//i.test(path) || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;

  // If already prefixed with base URL, return as is
  if (base !== "/" && (path === base || path.startsWith(cleanBase) || (cleanBase.slice(0, -1) && path.startsWith(cleanBase.slice(0, -1) + "/")))) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
