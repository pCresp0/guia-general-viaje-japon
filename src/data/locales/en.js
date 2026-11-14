// Superposición de traducción — en
// Sólo contiene texto traducido; todo lo demás se hereda.

import { days } from "./trip_days_en";
import { historyPeriods, furtherReading } from "./history_en";
import { guides } from "./guides_en";
import { popCulture } from "./popCulture_en";
import { tripMeta, flights, blocks, stays, transports, budget } from "./trip_extra_en";
import { stops as mapStops, filterData as mapFilterData, mapLabels } from "./mapData_en";
import { weatherData, dailyWeather, weatherLabels } from "./weatherData_en";
import { konbiniRules, konbiniChains } from "./konbini_en";

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
    { title: "Must-try" },
    { title: "By trip area" },
    { title: "Street & fast food" },
    { title: "Sweets & drinks" }
  ],
  foods: [
    { name: "Ramen", where: "Nationwide · Ippudo and local spots", desc: "Noodles in rich broth (shoyu, miso, tonkotsu...). Every neighborhood in Japan has its style. Order whatever looks good at the ticket machine or bar.", tip: "In many places you order from a vending machine: select your dish, pay, and give the ticket to the chef." },
    { name: "Sushi / sashimi", where: "Toyosu, markets, kaiten-zushi", desc: "Vinegared rice with raw fish (sushi) or just the fish (sashimi). Definitely worth it at Toyosu or a good local neighborhood spot.", tip: "Wasabi is often already in the nigiri: no need to spread more. Ginger cleanses the palate between pieces." },
    { name: "Tempura", where: "Kyoto, Tokyo", desc: "Very light battered vegetables and seafood. Kyoto has excellent places; also available in daily menus (teishoku).", tip: "Dip it in tentsuyu (broth) or just sprinkle with salt. Don't soak it." },
    { name: "Tonkatsu", where: "Tokyo · Katsukura and similar", desc: "Breaded pork cutlet, crispy outside and juicy inside. Usually served with rice, miso, and shredded cabbage.", tip: "Crush the sauce in the sesame mortar at your table: it tastes much better." },
    { name: "Wagyu / yakiniku", where: "Takayama (Hida beef), Tokyo", desc: "Intensely marbled Japanese beef. In Takayama, Hida beef rivals Kobe. Grilled at the table or in a steakhouse.", tip: "Small pieces: cooks to perfection in seconds. Don't let it char." },
    { name: "Okonomiyaki", where: "Osaka · Dotonbori / Shinsekai", desc: "Savory pancake with cabbage, batter, and toppings (pork, seafood...). In Osaka, you often cook it yourself on the table grill.", tip: "Osaka style = mix everything. Hiroshima style = in layers. Try the Osaka one on this trip." },
    { name: "Takoyaki", where: "Osaka · street food", desc: "Dough balls with a piece of octopus, sauce, mayonnaise, and katsuobushi (smoked bonito that 'dances' with the heat).", tip: "They are boiling inside: take the first bite carefully." },
    { name: "Kushikatsu", where: "Osaka · Shinsekai", desc: "Breaded and deep-fried skewers (meat, vegetables, cheese...). A specialty of the Shinsekai neighborhood.", tip: "Sacred rule: do not dip the stick twice in the shared sauce (no double dipping)." },
    { name: "Kaiseki", where: "Kyoto", desc: "Seasonal tasting menu, dish by dish, very visual. Japanese haute cuisine rooted in the tea ceremony.", tip: "If you want an affordable one, look for 'kaiseki lunch' at noon — cheaper than dinner." },
    { name: "Matcha and wagashi", where: "Kyoto · Uji / Gion", desc: "Whisked powdered green tea and traditional sweets (mochi, yokan...). In Kyoto, matcha is a religion.", tip: "The bitterness of the matcha is balanced by the sweet: eat the wagashi first or at the same time." },
    { name: "Hida beef bun / mitarashi", where: "Takayama · old town", desc: "In Sanmachi Suji: steamed buns with Hida beef, mitarashi dango skewers, and local sake.", tip: "Perfect for a snack between temples and wooden streets." },
    { name: "Unagi (eel)", where: "Tokyo, Kyoto", desc: "Grilled eel with sweet-savory sauce over rice (unadon / unaju). Highly appreciated in summer, but eaten year-round.", tip: "Expensive but a clear experience. Order unajū if you want the full lacquered box." },
    { name: "Onigiri", where: "Konbini (7-Eleven, FamilyMart, Lawson)", desc: "Rice triangles with filling (salmon, umeboshi, tuna-mayo...) wrapped in nori. Perfect breakfast or snack.", tip: "The konbini wrapper has a trick: pull the tabs in 1-2-3 order so you don't wet the seaweed." },
    { name: "Gyoza", where: "Ramen shops and izakayas", desc: "Pan-fried dumplings, crispy on one side. Almost always pork and vegetable.", tip: "Typical sauce: soy sauce + vinegar + a few drops of rayu (chili oil)." },
    { name: "Yakitori", where: "Shinjuku · Omoide Yokocho, izakayas", desc: "Grilled chicken (and more) skewers, with salt or tare sauce. Perfect with a beer at the end of the day.", tip: "In Omoide Yokocho the atmosphere is the dish: narrow, smoke, and neon." },
    { name: "Karaage", where: "Izakayas, konbinis", desc: "Marinated fried chicken. Crispy, juicy, addictive. Also surprisingly high quality at 7-Eleven.", tip: "Elevates to another level with Japanese mayonnaise (Kewpie)." },
    { name: "Udon / soba", where: "Stations, Kyoto, Tokyo", desc: "Udon = thick wheat noodles. Soba = buckwheat, thinner. In hot broth or cold with dip (zaru).", tip: "It's still warm in September: cold zaru soba is very pleasant." },
    { name: "Ekiben", where: "Shinkansen stations", desc: "Station bento, local specialty to eat on the train. Part of the Shinkansen ritual.", tip: "Plenty available at Nagoya or Tokyo Station before the Nozomi. Buy a different one for each long trip." },
    { name: "Taiyaki / mochi", where: "Asakusa, fairs, Nakamise", desc: "Taiyaki: fish-shaped waffle filled with anko (sweet bean paste) or cream. Mochi: glutinous rice cake.", tip: "In Nakamise (Asakusa) there are classic stalls to snack while you walk." },
    { name: "Sake / highball", where: "Izakayas, Takayama, Kyoto", desc: "Sake (nihonshu) cold or hot depending on the type. Highball = whisky + soda, very popular and refreshing.", tip: "Very good local sake in Takayama. Order 'karakuchi' if you want it drier." },
    { name: "Japanese breakfast", where: "Hotels, kissaten", desc: "Rice, miso, grilled fish, natto or egg, seaweed, and tsukemono. Complete and savory.", tip: "If the hotel offers it, try it at least one day. Cheap alternative: onigiri + coffee at konbini." }
  ],
  pendingItems: [
    {
      timing: "6 months before",
      title: "🛂 Check Passport",
      detail: "Make sure your passport is valid for at least 6 months from your scheduled entry into Japan. If expiring soon or damaged, schedule an appointment to renew it with plenty of time.",
      deadline: "6 months before departure",
    },
    {
      timing: "4-6 months before",
      title: "✈️ Buy Flights",
      detail: "Review flight options and book your international tickets. The earlier you book, the better the fares and route options. Consider flying into Tokyo (Narita/Haneda) and returning from Osaka (Kansai) to avoid unnecessary backtracking.",
      deadline: "4-6 months before departure",
    },
    {
      timing: "3-4 months before",
      title: "🏨 Book Accommodations",
      detail: "Centrally located hotels near major stations (Tokyo, Kyoto, Osaka) and rural ryokans book out quickly. Use platforms like Booking or Agoda with free cancellation to lock in your route.",
      deadline: "3-4 months before (after booking flights)",
    },
    {
      timing: "1-2 months before",
      title: "🏥 Purchase Travel Insurance",
      detail: "Healthcare in Japan is of world-class quality but very expensive for uninsured travelers as there is no reciprocal public healthcare agreement. Choose insurance with generous medical coverage (Mondo, IATI, etc.).",
      deadline: "1-2 months before departure",
    },
    {
      timing: "1-2 months before",
      title: "🎟️ Book Tickets and Popular Excursions",
      detail: "High-demand attractions (Universal Studios Japan, Ghibli Museum, teamLab Planets, Shibuya Sky at sunset, or Mount Fuji day tours) usually open sales 1 to 2 months in advance and premium time slots sell out fast.",
      deadline: "1-2 months before (per official opening dates)",
    },
    {
      timing: "1 month before",
      title: "🚆 Bullet Trains (Shinkansen) and Passes",
      detail: "Check your route legs. Following recent fare increases, purchasing point-to-point tickets on Smart EX or JR-West (traveling on the fastest Nozomi trains) is substantially cheaper than a national JR Pass. If visiting the Alps, reserve Nohi Bus seats.",
      deadline: "1 month before departure",
    },
    {
      timing: "1 month before",
      title: "💳 Fee-Free Travel Cards",
      detail: "Order cards like Revolut, N26, or similar well in advance to pay at interbank exchange rates in yen and withdraw cash at konbini ATMs (7-Eleven, Lawson) without unfair bank fees.",
      deadline: "1 month before (to receive physical card)",
    },
    {
      timing: "2-3 weeks before",
      title: "📱 Internet: eSIM or Pocket WiFi",
      detail: "Having reliable mobile data is essential for Google Maps, train navigation on Navitime, and Google Translate. If your phone supports eSIM (Ubigi, Holafly, Airalo), purchase and set it up beforehand; otherwise, reserve a Pocket WiFi for airport pickup.",
      deadline: "2-3 weeks before flying",
    },
    {
      timing: "1 week before",
      title: "🌐 Complete Visit Japan Web",
      detail: "Create an account on Visit Japan Web (vjw-lp.digital.go.jp) and complete the immigration and customs declarations. You will generate QR codes that streamline your airport entry upon arrival.",
      deadline: "1 week before flying",
    },
    {
      timing: "Days before",
      title: "🧳 Check Luggage Dimensions",
      detail: "On bullet trains (Shinkansen), large suitcases with total dimensions (length+width+height) exceeding 160 cm require booking specific 'Oversized Baggage' seats. Check your baggage sizes while packing.",
      deadline: "Days before when packing",
    },
    {
      timing: "Before flying",
      title: "📱 Suica / Pasmo (digital or physical)",
      detail: "If using an iPhone, add a digital Suica or Pasmo card directly to Apple Wallet and top it up via Apple Pay before departure. Non-Japanese Android phones do not support this feature; you can purchase a physical Welcome Suica at the airport.",
      deadline: "Before flying or upon landing",
    },
    {
      timing: "Upon landing",
      title: "💴 Withdraw Cash (Yen)",
      detail: "While credit and IC cards are widely accepted in cities, cash remains essential for shrines, street stalls, physical IC top-ups, and rural ryokans. Withdraw an initial sum at Seven Bank ATMs in the airport.",
      deadline: "Upon landing in Japan",
    },
    {
      timing: "First days",
      title: "🎟️ Collect Physical Train Tickets",
      detail: "If you purchased JR-West train tickets online that require paper ticket exchange (such as Thunderbird or alpine limited express trains), pick them up at green reserved-seat ticket machines at major stations with your physical card and PIN.",
      deadline: "First days in Japan",
    },
    {
      timing: "Day before",
      title: "📦 Forward Luggage with Yamato (Takkyubin)",
      detail: "When traveling through mountain trails or rural stops (such as the Nakasendo trail in the Alps), ship your large suitcases from your hotel front desk straight to your subsequent Tokyo base. Travel with just a light backpack for those intermediate days.",
      deadline: "Day before departure",
    },
    {
      timing: "Night before",
      title: "🍙 Breakfasts and snacks (Konbini)",
      detail: "Most cafes and bakeries in Japan do not open before 9 or 10 AM. For days with an early train or sunrise visit to shrines (Fushimi Inari), pick up onigiri, fruit, and coffee at a konbini the evening before.",
      deadline: "Night before early morning starts",
    }
  ],
  categoryLabels: {
    reserva: { label: "Reservations" },
    logistica: { label: "Logistics" }
  },
  urgencyConfig: {
    "6m": { label: "6 months before" },
    "4m": { label: "4-6 months before" },
    "3m": { label: "3-4 months before" },
    "2m": { label: "1-2 months before" },
    "1m": { label: "1 month before" },
    "2w": { label: "2-3 weeks before" },
    "1w": { label: "1 week before" },
    "dias": { label: "Days before" },
    "vuelo": { label: "Before flying" },
    "llegada": { label: "Upon landing" },
    "primeros": { label: "First days" },
    "previo": { label: "Day before" },
    "noche": { label: "Night before" },
    alta: { label: "Months before" },
    media: { label: "Weeks before" },
    baja: { label: "During trip" }
  }
};
