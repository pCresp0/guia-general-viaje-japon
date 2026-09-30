// Superposición de traducción — fr
// Sólo contiene texto traducido; todo lo demás se hereda.

import { days } from "./trip_days_fr";
import { historyPeriods, furtherReading } from "./history_fr";
import { guides } from "./guides_fr";
import { popCulture } from "./popCulture_fr";
import { tripMeta, flights, blocks, stays, transports, budget } from "./trip_extra_fr";
import { stops as mapStops, filterData as mapFilterData, mapLabels } from "./mapData_fr";
import { weatherData, dailyWeather, weatherLabels } from "./weatherData_fr";
import { konbiniRules, konbiniChains } from "./konbini_fr";

export default {
  konbiniRules,
  konbiniChains,
  weatherData, dailyWeather, weatherLabels,
  mapStops, mapFilterData, mapLabels,
  tripMeta,
  flights,
  blocks,
  stays,
  transports,
  budget,
  popCulture,
  guides,
  historyPeriods,
  furtherReading,
  days,
  foodCategories: [
    { title: "Incontournables" },
    { title: "Par zone du voyage" },
    { title: "Cuisine de rue & rapide" },
    { title: "Douceurs & boissons" }
  ],
  foods: [
    { name: "Ramen", where: "Partout · Ippudo et locaux", desc: "Nouilles dans un bouillon riche (shoyu, miso, tonkotsu...). Chaque quartier au Japon a son style. Commandez ce qui vous tente au distributeur ou au bar.", tip: "Dans beaucoup d'endroits, on commande sur un distributeur : choisissez, payez, et donnez le ticket au chef." },
    { name: "Sushi / sashimi", where: "Toyosu, marchés, kaiten-zushi", desc: "Riz vinaigré avec poisson cru (sushi) ou juste le poisson (sashimi). Ça vaut le coup à Toyosu ou dans un bon resto de quartier.", tip: "Le wasabi est souvent déjà dans le nigiri : pas besoin d'en rajouter. Le gingembre nettoie le palais entre les pièces." },
    { name: "Tempura", where: "Kyoto, Tokyo", desc: "Légumes et fruits de mer frits très légers. Kyoto a d'excellents endroits ; aussi disponible en menu du jour (teishoku).", tip: "Trempez-le dans le tentsuyu (bouillon) ou saupoudrez juste de sel. Ne le détrempez pas." },
    { name: "Tonkatsu", where: "Tokyo · Katsukura et similaires", desc: "Côtelette de porc panée, croustillante à l'extérieur et juteuse à l'intérieur. Souvent servie avec du riz, de la soupe miso et du chou râpé.", tip: "Écrasez la sauce dans le mortier de sésame à votre table : c'est bien meilleur." },
    { name: "Wagyu / yakiniku", where: "Takayama (bœuf de Hida), Tokyo", desc: "Bœuf japonais intensément persillé. À Takayama, le bœuf de Hida rivalise avec celui de Kobe. Grillé à table ou en steakhouse.", tip: "Petits morceaux : ça cuit à la perfection en quelques secondes. Ne le laissez pas carboniser." },
    { name: "Okonomiyaki", where: "Osaka · Dotonbori / Shinsekai", desc: "Crêpe salée au chou, pâte et garnitures (porc, fruits de mer...). À Osaka, vous le cuisinez souvent vous-même sur la plaque chauffante de la table.", tip: "Style d'Osaka = tout mélanger. Style d'Hiroshima = en couches. Essayez celui d'Osaka pendant ce voyage." },
    { name: "Takoyaki", where: "Osaka · cuisine de rue", desc: "Boulettes de pâte avec un morceau de poulpe, sauce, mayonnaise et katsuobushi (bonite fumée qui 'danse' avec la chaleur).", tip: "Elles sont bouillantes à l'intérieur : prenez la première bouchée avec précaution." },
    { name: "Kushikatsu", where: "Osaka · Shinsekai", desc: "Brochettes panées et frites (viande, légumes, fromage...). Une spécialité du quartier de Shinsekai.", tip: "Règle sacrée : ne trempez pas deux fois votre bâtonnet dans la sauce commune (pas de double trempage)." },
    { name: "Kaiseki", where: "Kyoto", desc: "Menu dégustation de saison, plat par plat, très visuel. La haute gastronomie japonaise ancrée dans la cérémonie du thé.", tip: "Pour un repas abordable, cherchez le 'kaiseki lunch' à midi — moins cher que le dîner." },
    { name: "Matcha et wagashi", where: "Kyoto · Uji / Gion", desc: "Thé vert en poudre fouetté et douceurs traditionnelles (mochi, yokan...). À Kyoto, le matcha est une religion.", tip: "L'amertume du matcha s'équilibre avec le sucré : mangez le wagashi d'abord ou en même temps." },
    { name: "Brioche au bœuf de Hida / mitarashi", where: "Takayama · vieille ville", desc: "À Sanmachi Suji : brioches vapeur au bœuf de Hida, brochettes mitarashi dango et saké local.", tip: "Idéal pour une collation entre les temples et les rues en bois." },
    { name: "Unagi (anguille)", where: "Tokyo, Kyoto", desc: "Anguille grillée avec sauce aigre-douce sur du riz (unadon / unaju). Très appréciée en été, mais on en mange toute l'année.", tip: "Cher mais une expérience unique. Commandez un unajū si vous voulez la boîte laquée complète." },
    { name: "Onigiri", where: "Konbini (7-Eleven, FamilyMart, Lawson)", desc: "Triangles de riz garnis (saumon, umeboshi, thon-mayo...) enveloppés d'algue nori. Petit-déjeuner ou collation parfait.", tip: "L'emballage du konbini a un truc : tirez les languettes dans l'ordre 1-2-3 pour ne pas mouiller l'algue." },
    { name: "Gyoza", where: "Ramen shops et izakayas", desc: "Raviolis grillés, croustillants d'un côté. Presque toujours au porc et aux légumes.", tip: "Sauce typique : sauce soja + vinaigre + quelques gouttes de rayu (huile pimentée)." },
    { name: "Yakitori", where: "Shinjuku · Omoide Yokocho, izakayas", desc: "Brochettes de poulet (et plus) grillées, au sel ou sauce tare. Parfait avec une beer en fin de journée.", tip: "À Omoide Yokocho, l'ambiance fait le plat : étroit, fumée et néons." },
    { name: "Karaage", where: "Izakayas, konbinis", desc: "Poulet frit mariné. Croustillant, juteux, addictif. Qualité surprenante même au 7-Eleven.", tip: "Passe au niveau supérieur avec de la mayonnaise japonaise (Kewpie)." },
    { name: "Udon / soba", where: "Gares, Kyoto, Tokyo", desc: "Udon = nouilles épaisses de blé. Soba = sarrasin, plus fines. Dans un bouillon chaud ou froides avec une trempette (zaru).", tip: "Il fait encore chaud en septembre : le zaru soba froid est très agréable." },
    { name: "Ekiben", where: "Gares de Shinkansen", desc: "Bento de gare, spécialité locale à manger dans le train. Fait partie du rituel du Shinkansen.", tip: "Beaucoup de choix à Nagoya ou Tokyo Station avant le Nozomi. Achetez-en un différent à chaque long trajet." },
    { name: "Taiyaki / mochi", where: "Asakusa, foires, Nakamise", desc: "Taiyaki : gaufre en forme de poisson fourrée d'anko (pâte de haricot rouge) ou de crème. Mochi : gâteau de riz gluant.", tip: "À Nakamise (Asakusa), il y a des stands classiques pour grignoter en marchant." },
    { name: "Saké / highball", where: "Izakayas, Takayama, Kyoto", desc: "Saké (nihonshu) froid ou chaud selon le type. Highball = whisky + eau gazeuse, très populaire et rafraîchissant.", tip: "Très bon saké local à Takayama. Commandez 'karakuchi' si vous le voulez plus sec." },
    { name: "Petit-déjeuner japonais", where: "Hôtels, kissaten", desc: "Riz, soupe miso, poisson grillé, natto ou œuf, algues et tsukemono. Complet et salé.", tip: "Si l'hôtel le propose, essayez-le au moins une fois. Alternative pas chère : onigiri + café au konbini." }
  ],
  pendingItems: [
    {
      title: "🛂 Vérifier le passeport",
      detail: "📅 6 mois avant\n⚠️ Assurez-vous que votre passeport est valide au moins 6 mois à compter de la date d'entrée prévue au Japon. Sinon, prenez rendez-vous pour le renouveler au plus vite.",
      deadline: "Dès que possible",
    },
    {
      title: "✈️ Acheter les billets d'avion",
      detail: "📅 4-6 mois avant\n⚠️ Comparez les options et achetez vos vols. Plus vous réservez tôt, meilleurs sont les tarifs. Envisagez d'atterrir à Tokyo (Narita/Haneda) et de repartir d'Osaka (Kansai) pour éviter un trajet retour.",
      deadline: "Plusieurs mois avant",
    },
    {
      title: "🏨 Réserver les hébergements",
      detail: "📅 3-4 mois avant\n⚠️ Les meilleurs ryokans et hôtels centraux (à Tokyo, Kyoto ou Osaka) se remplissent vite. Utilisez des plateformes comme Booking ou Agoda. En zone rurale (ex. Alpes japonaises), l'offre est plus limitée.",
      deadline: "Après l'achat des vols",
    },
    {
      title: "🏥 Souscrire une assurance voyage",
      detail: "📅 1-2 mois avant\n⚠️ Le système de santé au Japon est excellent mais extrêmement coûteux. Souscrivez une assurance avec une large couverture médicale (Mondo, IATI, etc.). C'est indispensable.",
      deadline: "Avant de voyager",
    },
    {
      title: "🚆 Évaluer et acheter le JR Pass ou Pass Régionaux",
      detail: "📅 1 mois avant\n⚠️ Utilisez un calculateur en ligne de JR Pass pour voir si votre itinéraire rentabilise le pass national. Sinon, étudiez les pass régionaux ou l'achat de billets à l'unité sur SmartEX.",
      deadline: "1 mois avant",
    },
    {
      title: "📱 Internet : eSIM ou Pocket WiFi",
      detail: "📅 2-3 semaines avant\n⚠️ Vous aurez besoin de Google Maps et d'un traducteur en permanence. Si votre téléphone est compatible, une eSIM (Ubigi, Holafly, Airalo) est le plus pratique. Sinon, réservez un Pocket WiFi à récupérer à l'arrivée.",
      deadline: "Avant le vol",
    },
    {
      title: "💳 Cartes bancaires sans frais à l'étranger",
      detail: "📅 1 mois avant\n⚠️ Commandez des cartes type Revolut, N26 ou équivalents offrant un bon taux de change en yens et des retraits sans frais excessifs aux distributeurs des konbini (7-Eleven, Lawson).",
      deadline: "Avant le vol",
    },
    {
      title: "🌐 Remplir Visit Japan Web",
      detail: "📅 1 semaine avant\n⚠️ Créez un compte sur Visit Japan Web et renseignez les formulaires d'immigration et de douane. Vous obtiendrez des codes QR qui accéléreront grandement l'arrivée à l'aéroport.",
      deadline: "Quelques jours avant",
    },
    {
      title: "🎟️ Réserver les billets et excursions populaires",
      detail: "📅 1-2 mois avant\n⚠️ Les billets pour Universal Studios, Ghibli Museum, teamLab ou les excursions populaires ouvrent 1 à 2 mois avant et partent en quelques minutes. Mettez des alarmes !",
      deadline: "Dès l'ouverture des ventes",
    },
    {
      title: "🧳 Vérifier les dimensions des bagages",
      detail: "📅 Quelques jours avant\n⚠️ Dans les trains à grande vitesse (Shinkansen), les valises dont les dimensions cumulées (longueur+largeur+hauteur) dépassent 160 cm nécessitent la réservation de sièges 'Oversized Baggage'.",
      deadline: "Avant de voyager",
    },
    {
      title: "📱 App Suica / Pasmo (iPhone uniquement)",
      detail: "📅 Avant le vol\n⚠️ Sur iPhone, vous pouvez ajouter une carte Suica ou Pasmo virtuelle directement dans Apple Wallet et la recharger. Les Android hors Japon ne sont pas compatibles ; achetez une carte physique à l'arrivée.",
      deadline: "Avant le vol",
    },
    {
      title: "💴 Retirer des espèces (Yens)",
      detail: "📍 Distributeurs 7-Eleven à l'aéroport ou dans les konbini\n⚠️ Bien que la carte soit de plus en plus acceptée, l'argent liquide reste incontournable au Japon (temples, street food, recharge de cartes de transport, petits ryokans).",
      deadline: "Dès l'atterrissage",
    },
    {
      title: "📦 Expédier les valises avec Yamato (Takkyubin)",
      detail: "📍 Réception des hôtels\n⚠️ Si vous voyagez plusieurs jours en zone rurale (ex. Alpes japonaises), envoyez votre grosse valise d'hôtel à hôtel. Voyagez léger avec un simple sac à dos pendant quelques jours.",
      deadline: "Veille du transfert",
    },
    {
      title: "🎟️ Échanger le JR Pass ou retirer les billets physiques",
      detail: "📍 Grandes gares JR\n⚠️ Si vous avez acheté des bons pour le JR Pass ou réservé des billets nécessitant un retrait physique, présentez-vous en gare avec de la marge et votre carte bancaire de paiement.",
      deadline: "Premiers jours au Japon",
    },
    {
      title: "🟢 Petits-déjeuners et en-cas (Konbini)",
      detail: "📍 7-Eleven / Lawson / FamilyMart\n⚠️ Au Japon, peu de cafés ouvrent avant 9h ou 10h. En cas de train matinal ou de visite tôt le matin, achetez votre petit-déjeuner (onigiris, café) au konbini la veille au soir.",
      deadline: "Veille des départs matinaux",
    }
  ],
  categoryLabels: {
    reserva: { label: "Réservations" },
    logistica: { label: "Logistique" }
  },
  urgencyConfig: {
    alta: { label: "Urgent" },
    media: { label: "Important" },
    baja: { label: "Quand possible" }
  }
};
