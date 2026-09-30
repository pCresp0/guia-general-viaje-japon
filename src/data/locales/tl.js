// Superposición de traducción — tl
// Sólo contiene texto traducido; todo lo demás se hereda.

import { days } from "./trip_days_tl";
import { historyPeriods, furtherReading } from "./history_tl";
import { guides } from "./guides_tl";
import { popCulture } from "./popCulture_tl";
import { tripMeta, flights, blocks, stays, transports, budget } from "./trip_extra_tl";
import { stops as mapStops, filterData as mapFilterData, mapLabels } from "./mapData_tl";
import { weatherData, dailyWeather, weatherLabels } from "./weatherData_tl";
import { konbiniRules, konbiniChains } from "./konbini_tl";

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
    { title: "Dapat subukan" },
    { title: "Ayon sa lugar ng biyahe" },
    { title: "Street & fast food" },
    { title: "Matamis & inumin" }
  ],
  foods: [
    { name: "Ramen", where: "Buong bansa · Ippudo at lokal na kainan", desc: "Noodles sa malinamnam na sabaw (shoyu, miso, tonkotsu...). Bawat lugar sa Japan ay may sariling istilo. Umorder ng kahit ano sa ticket machine o bar.", tip: "Sa maraming lugar, kailangan umorder sa vending machine: pumili, magbayad, at ibigay ang ticket sa chef." },
    { name: "Sushi / sashimi", where: "Toyosu, palengke, kaiten-zushi", desc: "Kanin na may suka at hilaw na isda (sushi) o yung isda lang (sashimi). Sulit sa Toyosu o sa magandang lokal na kainan.", tip: "Kadalasan, may wasabi na sa nigiri: hindi na kailangan maglagay pa. Ang luya ay pampatanggal umay sa pagitan ng mga piraso." },
    { name: "Tempura", where: "Kyoto, Tokyo", desc: "Magaan na piniritong gulay at seafood. May magagandang kainan sa Kyoto; madalas ding nasa daily menu (teishoku).", tip: "Isawsaw sa tentsuyu (sabaw) o budburan ng asin. Wag masyadong ibabad." },
    { name: "Tonkatsu", where: "Tokyo · Katsukura at katulad", desc: "Breaded pork cutlet, malutong sa labas at juicy sa loob. Karaniwang inihahain kasama ng kanin, miso, at ginayat na repolyo.", tip: "Durugin ang sauce sa sesame mortar sa inyong mesa: mas masarap." },
    { name: "Wagyu / yakiniku", where: "Takayama (Hida beef), Tokyo", desc: "Baka sa Japan na may matinding marbling. Sa Takayama, halos kasing-sarap ng Kobe ang Hida beef. Iniihaw sa mesa o sa steakhouse.", tip: "Maliliit na piraso: naluluto nang perpekto sa ilang segundo. Huwag hayaang masunog." },
    { name: "Okonomiyaki", where: "Osaka · Dotonbori / Shinsekai", desc: "Savory pancake na may repolyo, batter, at toppings (baboy, seafood...). Sa Osaka, ikaw mismo ang magluluto sa grill sa mesa.", tip: "Osaka style = ihalo lahat. Hiroshima style = naka-layers. Subukan ang sa Osaka sa biyaheng ito." },
    { name: "Takoyaki", where: "Osaka · street food", desc: "Balls of dough na may pusit, sauce, mayonnaise, at katsuobushi (smoked bonito na 'sumasayaw' sa init).", tip: "Mainit ito sa loob: dahan-dahan sa unang kagat." },
    { name: "Kushikatsu", where: "Osaka · Shinsekai", desc: "Breaded at deep-fried na tuhog (karne, gulay, keso...). Espesyalidad ng Shinsekai.", tip: "Sagradong patakaran: bawal isawsaw nang dalawang beses ang stick sa shared sauce (no double dipping)." },
    { name: "Kaiseki", where: "Kyoto", desc: "Seasonal tasting menu, kada putahe, at napakaganda sa paningin. Japanese haute cuisine na galing sa tea ceremony.", tip: "Kung gusto ng abot-kaya, maghanap ng 'kaiseki lunch' sa tanghali — mas mura kaysa sa hapunan." },
    { name: "Matcha at wagashi", where: "Kyoto · Uji / Gion", desc: "Hinalong powdered green tea at tradisyonal na matatamis (mochi, yokan...). Sa Kyoto, parang relihiyon ang matcha.", tip: "Ang pait ng matcha ay nababalanse ng tamis: kainin muna ang wagashi o sabay." },
    { name: "Hida beef bun / mitarashi", where: "Takayama · old town", desc: "Sa Sanmachi Suji: steamed buns na may Hida beef, mitarashi dango skewers, at lokal na sake.", tip: "Perpektong meryenda sa pagitan ng mga templo at kalye na gawa sa kahoy." },
    { name: "Unagi (igat)", where: "Tokyo, Kyoto", desc: "Inihaw na igat na may sweet-savory sauce sa ibabaw ng kanin (unadon / unaju). Gustong-gusto tuwing tag-init, pero kinakain buong taon.", tip: "Mahal pero isang kakaibang karanasan. Umorder ng unajū kung gusto mo ng buong lacquered box." },
    { name: "Onigiri", where: "Konbini (7-Eleven, FamilyMart, Lawson)", desc: "Trianggulong kanin na may palaman (salmon, umeboshi, tuna-mayo...) at balot ng nori. Perpektong almusal o meryenda.", tip: "Ang konbini wrapper ay may sikreto: hilahin ang tabs sa 1-2-3 na pagkakasunod-sunod para hindi mabasa ang damong-dagat." },
    { name: "Gyoza", where: "Mga ramen shop at izakaya", desc: "Pan-fried na dumplings, malutong sa isang gilid. Halos palaging may baboy at gulay.", tip: "Tipikal na sawsawan: toyo + suka + ilang patak ng rayu (chili oil)." },
    { name: "Yakitori", where: "Shinjuku · Omoide Yokocho, mga izakaya", desc: "Inihaw na manok (at iba pa) na tuhog, na may asin o tare sauce. Bagay na bagay sa beer sa pagtatapos ng araw.", tip: "Sa Omoide Yokocho ang ambiance ay ang putahe: masikip, mausok, at may neon lights." },
    { name: "Karaage", where: "Mga izakaya, konbini", desc: "Marinated fried chicken. Malutong, juicy, at nakakaadik. Napakaganda rin ng kalidad sa 7-Eleven.", tip: "Nag-iimprove kapag may Japanese mayonnaise (Kewpie)." },
    { name: "Udon / soba", where: "Mga istasyon, Kyoto, Tokyo", desc: "Udon = makapal na wheat noodles. Soba = buckwheat, mas manipis. Sa mainit na sabaw o malamig na may dip (zaru).", tip: "Mainit pa rin sa Setyembre: masarap ang malamig na zaru soba." },
    { name: "Ekiben", where: "Mga istasyon ng Shinkansen", desc: "Station bento, lokal na espesyalidad para kainin sa tren. Bahagi ng ritwal ng Shinkansen.", tip: "Maraming mabibili sa Nagoya o Tokyo Station bago mag-Nozomi. Bumili ng iba't iba sa bawat mahabang biyahe." },
    { name: "Taiyaki / mochi", where: "Asakusa, fairs, Nakamise", desc: "Taiyaki: fish-shaped waffle na may anko (sweet bean paste) o cream. Mochi: glutinous rice cake.", tip: "Sa Nakamise (Asakusa) may mga klasikal na stalls kung saan makakabili ng makakain habang naglalakad." },
    { name: "Sake / highball", where: "Mga izakaya, Takayama, Kyoto", desc: "Sake (nihonshu) malamig o mainit depende sa klase. Highball = whisky + soda, sikat at nakakarefresh.", tip: "Masarap ang lokal na sake sa Takayama. Umorder ng 'karakuchi' kung gusto mong mas dry." },
    { name: "Japanese breakfast", where: "Mga hotel, kissaten", desc: "Kanin, miso, inihaw na isda, natto o itlog, seaweed, at tsukemono. Kumpleto at malinamnam.", tip: "Kung inaalok ito sa hotel, subukan kahit isang araw. Murang alternatibo: onigiri + kape sa konbini." }
  ],
  pendingItems: [
    {
      title: "🛂 Suriin ang Pasaporte",
      detail: "📅 6 na buwan bago\n⚠️ Siguraduhing may bisa pa ang iyong pasaporte nang hindi bababa sa 6 na buwan mula sa petsa ng pagpasok sa Japan. Kung hindi, mag-schedule agad ng renewal.",
      deadline: "Sa lalong madaling panahon",
    },
    {
      title: "✈️ Bumili ng Flights",
      detail: "📅 4-6 na buwan bago\n⚠️ Tingnan ang mga opsyon at bumili ng tickets. Mas maagang mag-book, mas maganda ang presyo. Isaalang-alang ang paglapag sa Tokyo (Narita/Haneda) at pag-uwi mula Osaka (Kansai) para hindi na magbalik-biyahe.",
      deadline: "Mga buwan bago ang biyahe",
    },
    {
      title: "🏨 Mag-book ng Matutuluyan",
      detail: "📅 3-4 na buwan bago\n⚠️ Mabilis maubos ang mga magagandang ryokan at hotel na nasa sentro (Tokyo, Kyoto, o Osaka). Gumamit ng Booking o Agoda. Sa mga probinsya tulad ng Japanese Alps, mas kaunti ang mapagpipilian.",
      deadline: "Pagkatapos bumili ng flights",
    },
    {
      title: "🏥 Kumuha ng Travel Insurance",
      detail: "📅 1-2 buwan bago\n⚠️ Napakaganda ng healthcare sa Japan ngunit napakamahal. Kumuha ng insurance na may malawak na medical coverage (Mondo, IATI, atbp.). Napakahalaga nito.",
      deadline: "Bago lumipad",
    },
    {
      title: "🚆 Tayahin at bumili ng JR Pass o Regional Pass",
      detail: "📅 1 buwan bago\n⚠️ Gumamit ng online JR Pass calculator para makita kung sulit ang national pass. Kung hindi, alamin ang regional passes o bumili ng hiwalay na ticket sa opisyal na website tulad ng SmartEX.",
      deadline: "1 buwan bago",
    },
    {
      title: "📱 Internet: eSIM o Pocket WiFi",
      detail: "📅 2-3 linggo bago\n⚠️ Kailangan mo ng Google Maps at translator lagi. Kung compatible ang telepono, pinakamaginhawa ang eSIM (Ubigi, Holafly, Airalo). Kung hindi, mag-reserve ng Pocket WiFi para kunin pagdating.",
      deadline: "Bago lumipad",
    },
    {
      title: "💳 Cards na Walang Foreign Transaction Fees",
      detail: "📅 1 buwan bago\n⚠️ Kumuha ng card tulad ng Revolut, N26, o katulad na may magandang palitan sa yen at mababang withdrawal fee sa mga ATM ng konbini (7-Eleven, Lawson).",
      deadline: "Bago lumipad",
    },
    {
      title: "🌐 Kumpletuhin ang Visit Japan Web",
      detail: "📅 1 linggo bago\n⚠️ Gumawa ng account sa Visit Japan Web at sagutan ang impormasyon sa immigration at customs. Magkakaroon ka ng QR codes na magpapabilis sa pagdaan mo sa airport sa Japan.",
      deadline: "Mga araw bago lumipad",
    },
    {
      title: "🎟️ Mag-book ng Tickets at Sikat na Excursion",
      detail: "📅 1-2 buwan bago\n⚠️ Ang tickets para sa Universal Studios, Ghibli Museum, teamLab, o mga sikat na tour ay karaniwang nagbubukas 1-2 buwan bago at nauubos sa loob ng ilang minuto. Maglagay ng alarm!",
      deadline: "Pagkabukas na pagkabukas ng benta",
    },
    {
      title: "🧳 Sukatin ang Laki ng Bagahe",
      detail: "📅 Mga araw bago lumipad\n⚠️ Sa bullet trains (Shinkansen), ang maleta na may kabuuang sukat (haba+lapad+taas) na lagpas 160cm ay kailangan ng reserbasyon para sa 'Oversized Baggage' seats.",
      deadline: "Bago maglakbay",
    },
    {
      title: "📱 Suica / Pasmo App (iPhone lang)",
      detail: "📅 Bago lumipad\n⚠️ Sa iPhone, maaaring magdagdag ng virtual Suica o Pasmo diretso sa Apple Wallet at lagyan ng pondo. Ang Android mula sa labas ng Japan ay hindi compatible; bumili na lang ng physical card pagdating.",
      deadline: "Bago lumipad",
    },
    {
      title: "💴 Mag-withdraw ng Cash (Yen)",
      detail: "📍 7-Eleven ATM sa Airport o Konbini\n⚠️ Kahit tumatanggap na ng card sa maraming lugar, cash pa rin ang hari sa Japan (mga templo, street food, pag-load ng transport card, maliliit na ryokan).",
      deadline: "Pagkalapag sa paliparan",
    },
    {
      title: "📦 Magpadala ng Maleta gamit ang Yamato (Takkyubin)",
      detail: "📍 Reception ng mga hotel\n⚠️ Kung bibiyahe nang ilang araw sa probinsya (tulad ng Japanese Alps), ipadala ang malaking maleta mula sa pinanggalingang hotel papunta sa susunod. Magbiyahe lang gamit ang backpack sa mga araw na iyon.",
      deadline: "Araw bago ang paglipat",
    },
    {
      title: "🎟️ I-claim ang JR Pass o Kunin ang Physical Tickets",
      detail: "📍 Mga Pangunahing Istasyon ng JR\n⚠️ Kung bumili ng JR Pass voucher o nag-book online na kailangan ng pisikal na ticket, pumunta sa mga opisina o ticket machine nang may sapat na oras dala ang ginamit na card.",
      deadline: "Mga unang araw sa Japan",
    },
    {
      title: "🟢 Almusal at Meryenda (Konbini)",
      detail: "📍 7-Eleven / Lawson / FamilyMart\n⚠️ Sa Japan, kakaunti ang mga cafe na bukas bago sumapit ang 9 o 10 AM. Kung may maagang tren o bibisita sa templo nang maaga, bumili ng almusal (onigiri, kape) sa konbini noong nakaraang gabi.",
      deadline: "Gabi bago ang maagang paggising",
    }
  ],
  categoryLabels: {
    reserva: { label: "Mga Booking" },
    logistica: { label: "Logistics" }
  },
  urgencyConfig: {
    alta: { label: "Urgent" },
    media: { label: "Importante" },
    baja: { label: "Kapag may oras" }
  }
};
