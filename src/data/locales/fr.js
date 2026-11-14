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
      timing: "6 mois avant",
      title: "🛂 Vérifier le passeport",
      detail: "Assurez-vous que votre passeport est valide au moins 6 mois à compter de la date d'entrée prévue au Japon. S'il expire bientôt ou est abîmé, prenez rendez-vous pour le renouveler suffisamment tôt.",
      deadline: "6 mois avant le départ",
    },
    {
      timing: "4-6 mois avant",
      title: "✈️ Acheter les billets d'avion",
      detail: "Comparez les options et achetez vos vols internationaux. Plus vous réservez tôt, meilleurs sont les tarifs et le choix d'itinéraires. Envisagez d'atterrir à Tokyo (Narita/Haneda) et de repartir d'Osaka (Kansai) pour éviter un trajet retour superflu.",
      deadline: "4-6 mois avant le départ",
    },
    {
      timing: "3-4 mois avant",
      title: "🏨 Réserver les hébergements",
      detail: "Les meilleurs ryokans et hôtels centraux près des grandes gares (Tokyo, Kyoto, Osaka) se remplissent vite. Utilisez des plateformes comme Booking ou Agoda avec annulation gratuite pour fixer votre itinéraire.",
      deadline: "3-4 mois avant (après les vols)",
    },
    {
      timing: "1-2 mois avant",
      title: "🏥 Souscrire une assurance voyage",
      detail: "Le système de santé au Japon est excellent mais extrêmement coûteux pour les touristes non assurés en l'absence d'accord bilatéral. Souscrivez une assurance avec une couverture médicale solide (Mondo, IATI, etc.).",
      deadline: "1-2 mois avant le départ",
    },
    {
      timing: "1-2 mois avant",
      title: "🎟️ Réserver les billets et excursions populaires",
      detail: "Les attractions très prisées (Universal Studios Japan, Ghibli Museum, teamLab Planets, Shibuya Sky au coucher du soleil ou excursions au Mont Fuji) ouvrent leurs ventes 1 à 2 mois avant et les créneaux partent en quelques minutes.",
      deadline: "1-2 mois avant (selon ouvertures)",
    },
    {
      timing: "1 mois avant",
      title: "🚆 Trains à grande vitesse (Shinkansen) et pass",
      detail: "Vérifiez vos trajets. Depuis la hausse tarifaire officielle, acheter des billets point à point sur Smart EX ou JR-West (avec le Shinkansen Nozomi rapide) revient nettement moins cher qu'un JR Pass national. Pour les Alpes, réservez les bus Nohi.",
      deadline: "1 mois avant le départ",
    },
    {
      timing: "1 mois avant",
      title: "💳 Cartes bancaires sans frais à l'étranger",
      detail: "Commandez suffisamment tôt des cartes type Revolut ou N26 pour payer en yens au taux interbancaire et retirer des espèces aux distributeurs des konbini (7-Eleven, Lawson) sans frais excessifs.",
      deadline: "1 mois avant (pour recevoir la carte)",
    },
    {
      timing: "2-3 semaines avant",
      title: "📱 Internet : eSIM ou Pocket WiFi",
      detail: "Une connexion continue est indispensable pour vous repérer avec Google Maps, consulter les trains sur Navitime et traduire les panneaux. Si votre téléphone gère les eSIM (Ubigi, Holafly, Airalo), achetez-la en ligne avant de partir.",
      deadline: "2-3 semaines avant le vol",
    },
    {
      timing: "1 semaine avant",
      title: "🌐 Remplir Visit Japan Web",
      detail: "Créez votre compte sur le site officiel (vjw-lp.digital.go.jp) et remplissez les déclarations d'immigration et de douane. Vous obtiendrez des codes QR qui accéléreront grandement les formalités à l'aéroport à l'arrivée.",
      deadline: "1 semaine avant le vol",
    },
    {
      timing: "Quelques jours avant",
      title: "🧳 Vérifier les dimensions des bagages",
      detail: "Dans les trains Shinkansen, les grandes valises dont le cumul (longueur+largeur+hauteur) dépasse 160 cm nécessitent la réservation d'un espace 'Oversized Baggage'. Vérifiez les dimensions de vos valises en faisant vos bagages.",
      deadline: "Quelques jours avant en préparant les valises",
    },
    {
      timing: "Avant de partir",
      title: "📱 Carte Suica / Pasmo (digitale ou physique)",
      detail: "Sur iPhone, ajoutez directement une carte Suica ou Pasmo virtuelle dans Apple Wallet et rechargez-la avec Apple Pay. Les smartphones Android hors Japon ne sont pas compatibles : vous achèterez la carte physique Welcome Suica à l'aéroport.",
      deadline: "Avant le vol ou à l'arrivée",
    },
    {
      timing: "À l'atterrissage",
      title: "💴 Retirer des espèces (Yens)",
      detail: "Même si la carte bancaire et les cartes IC sont très répandues en ville, le liquide reste indispensable pour les sanctuaires, la street food, la recharge des cartes de transport physiques et les petits ryokans.",
      deadline: "À l'atterrissage au Japon",
    },
    {
      timing: "Premiers jours",
      title: "🎟️ Retirer les billets physiques en gare",
      detail: "Si vous avez acheté des billets en ligne sur JR-West nécessitant un retrait physique (comme les trains vers les Alpes ou express limités), retirez-les en avance aux distributeurs verts 5489 en gare avec votre carte bancaire et votre code PIN.",
      deadline: "Premiers jours au Japon",
    },
    {
      timing: "Veille du transfert",
      title: "📦 Expédier les valises avec Yamato (Takkyubin)",
      detail: "Pour les étapes avec randonnées ou étapes alpines (comme le Nakasendo), envoyez vos grosses valises depuis la réception de l'hôtel vers votre prochain hôtel de destination (Tokyo). Ne voyagez qu'avec un sac à dos léger.",
      deadline: "Veille du transfert d'étape",
    },
    {
      timing: "La veille au soir",
      title: "🍙 Petits-déjeuners et en-cas (Konbini)",
      detail: "Au Japon, la plupart des cafés n'ouvrent pas avant 9h ou 10h. Pour les jours avec un train très tôt ou une visite matinale de sanctuaire (Fushimi Inari), achetez vos onigiris, fruits et café au konbini la veille au soir.",
      deadline: "La veille des départs matinaux",
    }
  ],
  categoryLabels: {
    reserva: { label: "Réservations" },
    logistica: { label: "Logistique" }
  },
  urgencyConfig: {
    "6m": { label: "6 mois avant" },
    "4m": { label: "4-6 mois avant" },
    "3m": { label: "3-4 mois avant" },
    "2m": { label: "1-2 mois avant" },
    "1m": { label: "1 mois avant" },
    "2w": { label: "2-3 semaines avant" },
    "1w": { label: "1 semaine avant" },
    "dias": { label: "Quelques jours avant" },
    "vuelo": { label: "Avant de partir" },
    "llegada": { label: "À l'atterrissage" },
    "primeros": { label: "Premiers jours" },
    "previo": { label: "Veille du transfert" },
    "noche": { label: "La veille au soir" },
    alta: { label: "Mois avant" },
    media: { label: "Semaines avant" },
    baja: { label: "Pendant le voyage" }
  }
};
