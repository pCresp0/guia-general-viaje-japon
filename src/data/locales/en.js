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
      title: "🛂 Check Passport",
      detail: "📅 6 months before\n⚠️ Make sure your passport is valid for at least 6 months from your scheduled entry into Japan. If not, schedule an appointment to renew it as soon as possible.",
      deadline: "As soon as possible",
    },
    {
      title: "✈️ Buy Flights",
      detail: "📅 4-6 months before\n⚠️ Review options and purchase flights. The earlier you book, the better prices you will find. Consider flying into Tokyo (Narita/Haneda) and returning from Osaka (Kansai) if you do not want to backtrack.",
      deadline: "Months before",
    },
    {
      title: "🏨 Book Accommodations",
      detail: "📅 3-4 months before\n⚠️ The best ryokans and centrally located hotels (in Tokyo, Kyoto, or Osaka) fill up quickly. Use platforms like Booking or Agoda. In rural areas (such as the Japanese Alps), options are more limited.",
      deadline: "After buying flights",
    },
    {
      title: "🏥 Purchase Travel Insurance",
      detail: "📅 1-2 months before\n⚠️ Healthcare in Japan is excellent but extremely expensive. Take out insurance with comprehensive medical coverage (Mondo, IATI, etc.). It is essential.",
      deadline: "Before traveling",
    },
    {
      title: "🚆 Evaluate and buy JR Pass or Regional Passes",
      detail: "📅 1 month before\n⚠️ Use an online JR Pass calculator to see if your route justifies the national pass. If not, evaluate regional passes or buy individual tickets on official websites like SmartEX.",
      deadline: "1 month before",
    },
    {
      title: "📱 Internet: eSIM or Pocket WiFi",
      detail: "📅 2-3 weeks before\n⚠️ You need Google Maps and translation tools handy at all times. If your phone is compatible, an eSIM (Ubigi, Holafly, Airalo) is easiest. If not, reserve a Pocket WiFi to pick up upon arrival.",
      deadline: "Before flying",
    },
    {
      title: "💳 Fee-Free Travel Cards",
      detail: "📅 1 month before\n⚠️ Order cards like Revolut, N26, or similar that offer good yen exchange rates and low ATM fees at konbini (7-Eleven, Lawson).",
      deadline: "Before flying",
    },
    {
      title: "🌐 Complete Visit Japan Web",
      detail: "📅 1 week before\n⚠️ Create an account on Visit Japan Web and fill in immigration and customs info. You will generate QR codes that streamline airport arrival in Japan.",
      deadline: "Days before flying",
    },
    {
      title: "🎟️ Book Tickets and Popular Excursions",
      detail: "📅 1-2 months before\n⚠️ Tickets for Universal Studios, Ghibli Museum, teamLab, or popular excursions usually go on sale 1-2 months in advance and sell out in minutes. Set alarms!",
      deadline: "As soon as tickets open",
    },
    {
      title: "🧳 Check Luggage Dimensions",
      detail: "📅 Days before\n⚠️ On bullet trains (Shinkansen), suitcases with total dimensions (length+width+height) >160cm require reserved 'Oversized Baggage' seats.",
      deadline: "Before traveling",
    },
    {
      title: "📱 Suica / Pasmo App (iPhone only)",
      detail: "📅 Before flying\n⚠️ On iPhone, you can add a digital Suica or Pasmo directly to Apple Wallet and top it up. Android phones from outside Japan are not compatible; buy a physical card upon arrival.",
      deadline: "Before flying",
    },
    {
      title: "💴 Withdraw Cash (Yen)",
      detail: "📍 7-Eleven ATMs at the Airport or Konbini\n⚠️ While card acceptance is increasing, cash is still king in Japan (temples, street food stalls, IC transport top-ups, small ryokans).",
      deadline: "Upon landing",
    },
    {
      title: "📦 Forward Luggage with Yamato (Takkyubin)",
      detail: "📍 Hotel receptions\n⚠️ If you are taking a multi-day route through rural areas (e.g. Japanese Alps), forward your large suitcase from your origin hotel directly to your destination hotel. Travel with just a backpack for a few days.",
      deadline: "Day before transfer",
    },
    {
      title: "🎟️ Exchange JR Pass or Collect Physical Tickets",
      detail: "📍 Major JR Stations\n⚠️ If you bought JR Pass vouchers or booked tickets online requiring physical collection, visit ticket offices or reserved seat machines with plenty of time and your payment card.",
      deadline: "First days in Japan",
    },
    {
      title: "🟢 Breakfasts and snacks (Konbini)",
      detail: "📍 7-Eleven / Lawson / FamilyMart\n⚠️ In Japan, few cafes open before 9 or 10 AM. If you have an early train or early temple visit, buy breakfast (onigiri, coffee) at the konbini the night before.",
      deadline: "Night before early mornings",
    }
  ],
  categoryLabels: {
    reserva: { label: "Reservations" },
    logistica: { label: "Logistics" }
  },
  urgencyConfig: {
    alta: { label: "Urgent" },
    media: { label: "Important" },
    baja: { label: "Whenever possible" }
  }
};
