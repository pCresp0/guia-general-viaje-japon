import { assetUrl } from "../utils/assets";

// Rutas estáticas a las imágenes de lugares en public/img/places/.
// Las comidas están en public/img/food/.
// Se resuelven con assetUrl para respetar el BASE_URL en GitHub Pages y en local.
export const guideImages = {
  "fushimi-inari": assetUrl("/img/places/fushimi-inari.jpg"),
  "todai-ji":      assetUrl("/img/places/todai-ji.jpg"),
  "kinkaku-ji":    assetUrl("/img/places/kinkaku-ji.jpg"),
  "ginkaku-ji":    assetUrl("/img/places/ginkaku-ji.jpg"),
  "kiyomizu-dera": assetUrl("/img/places/kiyomizu-dera.jpg"),
  "arashiyama":    assetUrl("/img/places/arashiyama.jpg"),
  "gion":          assetUrl("/img/places/gion.jpg"),
  "nishiki":       assetUrl("/img/places/nishiki.jpg"),
  "osaka":         assetUrl("/img/places/osaka.jpg"),
  "kenroku-en":    assetUrl("/img/places/kenroku-en.jpg"),
  "shirakawa-go":  assetUrl("/img/places/shirakawa-go.jpg"),
  "takayama":      assetUrl("/img/places/takayama.jpg"),
  "nakasendo":     assetUrl("/img/places/nakasendo.jpg"),
  "senso-ji":      assetUrl("/img/places/senso-ji.jpg"),
  "meiji-jingu":   assetUrl("/img/places/meiji-jingu.jpg"),
  "shibuya":       assetUrl("/img/places/shibuya.jpg"),
  "akihabara":     assetUrl("/img/places/akihabara.jpg"),
  "teamlab":       assetUrl("/img/places/teamlab.jpg"),
  "fuji":          assetUrl("/img/places/fuji.jpg"),
  "tokyo-tower":   assetUrl("/img/places/tokyo-tower.jpg"),
  "nakano-broadway": assetUrl("/img/places/nakano-broadway.jpg"),
};
