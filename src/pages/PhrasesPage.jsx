import { useState } from "react";
import { MessageCircle, Utensils, TrainFront, ShoppingBag, Info, Volume2 } from "lucide-react";
import { useJapaneseSpeech } from "../utils/useJapaneseSpeech";
import { Highlightable } from "../context/HighlightContext";
import { slug } from "../utils/slug";
import { useLang, useT } from "../i18n/LanguageContext";

export const categories = [
  {
    id: "basics",
    titleKey: "phrases.catBasics",
    titleDefault: "Básicos",
    icon: MessageCircle,
    color: "#bc4749",
    phrases: [
      {
        jp: "こんにちは", romaji: "Konnichiwa",
        es: "Hola (buenas tardes)", en: "Hello / Good afternoon",
        fr: "Bonjour", tl: "Kumusta / Magandang hapon"
      },
      {
        jp: "おはようございます", romaji: "Ohayou gozaimasu",
        es: "Buenos días", en: "Good morning",
        fr: "Bonjour (le matin)", tl: "Magandang umaga"
      },
      {
        jp: "こんばんは", romaji: "Konbanwa",
        es: "Buenas noches (al llegar)", en: "Good evening",
        fr: "Bonsoir", tl: "Magandang gabi"
      },
      {
        jp: "ありがとうございます", romaji: "Arigatou gozaimasu",
        es: "Muchas gracias", en: "Thank you very much",
        fr: "Merci beaucoup", tl: "Maraming salamat"
      },
      {
        jp: "すみません", romaji: "Sumimasen",
        es: "Perdón / disculpe (también para llamar la atención)", en: "Excuse me / Sorry",
        fr: "Excusez-moi / Pardon", tl: "Paumanhin / Pasintabi"
      },
      {
        jp: "お願いします", romaji: "Onegaishimasu",
        es: "Por favor", en: "Please",
        fr: "S'il vous plaît", tl: "Pakiusap"
      },
      {
        jp: "はい / いいえ", romaji: "Hai / Iie",
        es: "Sí / No", en: "Yes / No",
        fr: "Oui / Non", tl: "Oo / Hindi"
      },
      {
        jp: "わかりません", romaji: "Wakarimasen",
        es: "No lo entiendo", en: "I don't understand",
        fr: "Je ne comprends pas", tl: "Hindi ko maintindihan"
      },
      {
        jp: "英語を話せますか？", romaji: "Eigo wo hanasemasu ka?",
        es: "¿Habla inglés?", en: "Do you speak English?",
        fr: "Parlez-vous anglais ?", tl: "Nagsasalita ka ba ng Ingles?"
      },
      {
        jp: "トイレはどこですか？", romaji: "Toire wa doko desu ka?",
        es: "¿Dónde está el baño?", en: "Where is the restroom?",
        fr: "Où sont les toilettes ?", tl: "Nasaan ang banyo?"
      },
    ],
  },
  {
    id: "restaurant",
    titleKey: "phrases.catRestaurant",
    titleDefault: "En el restaurante",
    icon: Utensils,
    color: "#2e7d5b",
    phrases: [
      {
        jp: "いただきます", romaji: "Itadakimasu",
        es: "Se dice antes de empezar a comer (que aproveche)", en: "Said before eating (bon appétit)",
        fr: "Dit avant de manger (bon appétit)", tl: "Sinasabi bago kumain"
      },
      {
        jp: "ごちそうさまでした", romaji: "Gochisousama deshita",
        es: "Se dice al terminar de comer, dando las gracias", en: "Said after eating, expressing gratitude",
        fr: "Dit après le repas pour remercier", tl: "Sinasabi pagkatapos kumain bilang pasasalamat"
      },
      {
        jp: "メニューをお願いします", romaji: "Menyuu wo onegaishimasu",
        es: "La carta, por favor", en: "The menu, please",
        fr: "Le menu, s'il vous plaît", tl: "Ang menu, pakiusap"
      },
      {
        jp: "おすすめは何ですか？", romaji: "Osusume wa nan desu ka?",
        es: "¿Qué recomienda?", en: "What do you recommend?",
        fr: "Que recommandez-vous ?", tl: "Ano ang mairerekomenda mo?"
      },
      {
        jp: "お会計お願いします", romaji: "Okaikei onegaishimasu",
        es: "La cuenta, por favor", en: "The check/bill, please",
        fr: "L'addition, s'il vous plaît", tl: "Ang bill / bayad, pakiusap"
      },
      {
        jp: "美味しかったです", romaji: "Oishikatta desu",
        es: "Estaba delicioso", en: "It was delicious",
        fr: "C'était délicieux", tl: "Napakasarap nito"
      },
    ],
  },
  {
    id: "transport",
    titleKey: "phrases.catTransport",
    titleDefault: "En transporte",
    icon: TrainFront,
    color: "#1d3557",
    phrases: [
      {
        jp: "駅はどこですか？", romaji: "Eki wa doko desu ka?",
        es: "¿Dónde está la estación?", en: "Where is the station?",
        fr: "Où est la gare ?", tl: "Nasaan ang istasyon?"
      },
      {
        jp: "この電車は〜に行きますか？", romaji: "Kono densha wa ~ ni ikimasu ka?",
        es: "¿Este tren va a...?", en: "Does this train go to...?",
        fr: "Ce train va-t-il à... ?", tl: "Papunta ba ang tren na ito sa...?"
      },
      {
        jp: "次の駅は何ですか？", romaji: "Tsugi no eki wa nan desu ka?",
        es: "¿Cuál es la próxima parada?", en: "What is the next station?",
        fr: "Quel est le prochain arrêt ?", tl: "Ano ang susunod na istasyon?"
      },
      {
        jp: "切符はどこで買えますか？", romaji: "Kippu wa doko de kaemasu ka?",
        es: "¿Dónde puedo comprar billetes?", en: "Where can I buy tickets?",
        fr: "Où puis-je acheter des billets ?", tl: "Saan ako makakabili ng tiket?"
      },
    ],
  },
  {
    id: "shopping",
    titleKey: "phrases.catShopping",
    titleDefault: "De compras",
    icon: ShoppingBag,
    color: "#c9a227",
    phrases: [
      {
        jp: "いくらですか？", romaji: "Ikura desu ka?",
        es: "¿Cuánto cuesta?", en: "How much is it?",
        fr: "Combien cela coûte ?", tl: "Magkano ito?"
      },
      {
        jp: "これをください", romaji: "Kore wo kudasai",
        es: "Esto, por favor (para pedir/comprar)", en: "This one, please",
        fr: "Ceci, s'il vous plaît", tl: "Ito po, pakiusap"
      },
      {
        jp: "カードは使えますか？", romaji: "Kaado wa tsukaemasu ka?",
        es: "¿Puedo pagar con tarjeta?", en: "Can I pay by card?",
        fr: "Puis-je payer par carte ?", tl: "Puwede bang magbayad gamit ang card?"
      },
      {
        jp: "免税できますか？", romaji: "Menzei dekimasu ka?",
        es: "¿Se puede desgravar el IVA (tax-free)?", en: "Is tax-free available?",
        fr: "Est-ce détaxé (tax-free) ?", tl: "Maaari bang mag-tax-free?"
      },
    ],
  },
];

export const etiquette = [
  {
    title: { es: "Propinas", en: "Tipping", fr: "Pourboires", tl: "Pagbibigay ng Tip" },
    text: {
      es: "No se dan propinas en Japón — ni en restaurantes, ni en taxis, ni en hoteles. Insistir puede resultar incluso incómodo para quien la recibe.",
      en: "No tipping in Japan — neither in restaurants, taxis, nor hotels. Insisting can even make staff uncomfortable.",
      fr: "Pas de pourboire au Japon — ni au restaurant, ni en taxi, ni à l'hôtel. Insister peut même être embarrassant.",
      tl: "Walang tipping sa Hapon — sa restawran, taxi, o hotel man. Ang pagpupumilit ay maaaring makapagpaasiwa sa kanila."
    }
  },
  {
    title: { es: "Palillos", en: "Chopsticks", fr: "Baguettes", tl: "Chopsticks" },
    text: {
      es: "Nunca se clavan verticalmente en el arroz (recuerda a los rituales funerarios) ni se pasa comida de palillos a palillos.",
      en: "Never stick chopsticks vertically into a bowl of rice (resembles funeral rituals) or pass food directly chopstick-to-chopstick.",
      fr: "Ne plantez jamais vos baguettes verticalement dans le riz (rituel funéraire) et ne passez pas de nourriture de baguette à baguette.",
      tl: "Huwag itusok nang patayo ang chopsticks sa kanin (seremonya sa libing) o magpasa ng pagkain mula sa chopstick papunta sa isa pa."
    }
  },
  {
    title: { es: "Volumen y móvil", en: "Phone & Volume", fr: "Téléphone et volume", tl: "Telepono at Lakas ng Boses" },
    text: {
      es: "En el transporte público se habla bajo y las llamadas de teléfono están mal vistas. El modo silencio es la norma.",
      en: "Keep voices down on public transit; phone calls are frowned upon. Silent (manner) mode is standard.",
      fr: "Parlez doucement dans les transports; les appels téléphoniques sont très mal vus. Le mode silencieux est de rigueur.",
      tl: "Hinaan ang boses sa pampublikong sasakyan; bawal ang tawag sa telepono. Laging ilagay sa silent mode ang cellphone."
    }
  },
  {
    title: { es: "Zapatos", en: "Shoes", fr: "Chaussures", tl: "Sapatos" },
    text: {
      es: "Se descalzan al entrar en muchos restaurantes tradicionales, templos, ryokan y algunas casas. Fijaos si hay zapatero en la entrada.",
      en: "Take off shoes when entering traditional restaurants, temples, ryokans, and homes. Check for shoe cubbies at the entrance.",
      fr: "Retirez vos chaussures en entrant dans les restaurants traditionnels, temples et ryokans. Repérez les casiers à l'entrée.",
      tl: "Hubarin ang sapatos sa tradisyonal na restawran, templo, ryokan, at bahay. Tingnan kung may lalagyan ng sapatos sa bungad."
    }
  },
  {
    title: { es: "Colas", en: "Queuing", fr: "Files d'attente", tl: "Pila" },
    text: {
      es: "Los japoneses hacen cola de forma ordenada para todo — trenes, ascensores, tiendas. Se respeta el orden estrictamente.",
      en: "People queue orderly for everything — trains, elevators, shops. Strictly respect the line markings on platforms.",
      fr: "Les files d'attente sont rigoureusement ordonnées pour tout — trains, ascenseurs, magasins. Respectez scrupuleusement l'ordre.",
      tl: "Maayos na pumipila ang mga tao sa lahat ng bagay — tren, elevator, tindahan. Mahigpit na iginagalang ang pila."
    }
  },
  {
    title: { es: "Onsen (baños termales)", en: "Onsen (Hot springs)", fr: "Onsen (Bains thermaux)", tl: "Onsen (Mainit na Bukal)" },
    text: {
      es: "Hay que ducharse a fondo antes de entrar al agua. Los tatuajes grandes pueden estar prohibidos en algunos onsen tradicionales.",
      en: "Shower thoroughly before entering the hot water. Visible tattoos may be restricted in traditional public baths.",
      fr: "Douchez-vous soigneusement avant d'entrer dans l'eau. Les tatouages peuvent être interdits dans certains bains traditionnels.",
      tl: "Maligo nang mabuti bago pumasok sa tubig. Ang mga tattoo ay maaaring bawal sa ilang tradisyonal na onsen."
    }
  },
  {
    title: { es: "Comer andando", en: "Eating on the Go", fr: "Manger en marchant", tl: "Pagkain Habang Naglalakad" },
    text: {
      es: "No está bien visto comer mientras se camina por la calle, salvo en zonas específicas de food stalls (como Nishiki o algunos festivales).",
      en: "Eating while walking in public streets is generally frowned upon, except near dedicated street food stalls or market areas.",
      fr: "Il est mal vu de manger en marchant dans la rue, sauf autour des stands de street food ou marchés spécifiques.",
      tl: "Hindi magandang tingnan ang kumain habang naglalakad sa kalye, maliban sa mga itinalagang lugar ng street food."
    }
  },
  {
    title: { es: "Fumar", en: "Smoking", fr: "Fumer", tl: "Paninigarilyo" },
    text: {
      es: "No se puede fumar en la calle salvo en zonas designadas con ceniceros — sí se puede en muchos bares e izakayas.",
      en: "Street smoking is prohibited except in designated smoking booths. Some traditional izakayas may permit it inside.",
      fr: "Il est interdit de fumer dans la rue hors des zones fumeurs dédiées. C'est parfois toléré dans certains izakayas.",
      tl: "Bawal manigarilyo sa kalsada maliban sa mga itinalagang smoking areas. Pinapayagan pa ito sa ilang izakaya."
    }
  },
];

export default function PhrasesPage() {
  const { lang } = useLang();
  const t = useT();
  const [activeCategory, setActiveCategory] = useState("basics");
  const current = categories.find((c) => c.id === activeCategory);
  const { supported, speakingId, lastError, speak } = useJapaneseSpeech();

  const getPhraseMeaning = (p) => p[lang] || p.en || p.es;
  const getEtiquetteTitle = (e) => (typeof e.title === "object" ? e.title[lang] || e.title.en || e.title.es : e.title);
  const getEtiquetteText = (e) => (typeof e.text === "object" ? e.text[lang] || e.text.en || e.text.es : e.text);

  return (
    <div className="px-4 pt-3 pb-12">
      <div className="mb-6">
        <p className="eyebrow mb-1" style={{ color: "var(--shu)" }}>
          {t("phrases.eyebrow") || "Idioma y cultura"}
        </p>
        <h2 className="font-display text-2xl" style={{ color: "var(--indigo)" }}>
          {t("phrases.title") || "Frases y etiqueta"}
        </h2>
        <p style={{ fontSize: 13.5, color: "var(--ink)", opacity: 0.85, marginTop: 6, lineHeight: 1.6 }}>
          {lang === "en"
            ? "Essential communication and etiquette guide for traveling respectfully and smoothly across Japan. Includes everyday phrases with native audio pronunciation and key cultural norms."
            : lang === "fr"
            ? "Guide de communication et d'étiquette pour voyager avec respect au Japon. Comprend les phrases essentielles avec prononciation audio native et règles de savoir-vivre."
            : lang === "tl"
            ? "Mahahalagang parirala at gabay sa magandang asal para sa paglalakbay sa Hapon. May audio ng tamang pagbigkas sa Nihongo at mga tuntunin sa kultura."
            : "Guía básica de comunicación y convivencia para desenvolverte con respeto y soltura en Japón. Incluye expresiones esenciales del día a día (saludos, restaurantes, transportes y compras) con pronunciación nativa en audio, además de las normas clave de etiqueta cultural (descalzarse, propinas y modales en público)."}
        </p>
        {supported && (
          <p style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 6 }}>
            {t("phrases.audioHint") || "Pulsa el altavoz junto a cualquier frase para escuchar la pronunciación real en japonés."}
          </p>
        )}
        {lastError && (
          <div style={{
            marginTop: 10, padding: "8px 12px", borderRadius: 8,
            background: "#bc474915", border: "1px solid #bc474933",
          }}>
            <p style={{ fontSize: 11.5, color: "var(--shu)", lineHeight: 1.5, margin: 0 }}>
              {t("phrases.audioError") || "No se ha podido reproducir el audio. Comprueba el volumen de tu dispositivo."}
            </p>
          </div>
        )}
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          const title = t(cat.titleKey) || cat.titleDefault;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer"
              style={{
                background: isActive ? cat.color : "var(--paper-raised)",
                border: `1px solid ${isActive ? cat.color : "var(--line)"}`,
                color: isActive ? "#fff" : "var(--ink-soft)",
                fontSize: 13, fontWeight: 600,
              }}
            >
              <Icon size={14} />
              {title}
            </button>
          );
        })}
      </div>

      {/* Phrase list */}
      <div className="rounded-2xl border overflow-hidden mb-10"
        style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}>
        {current.phrases.map((p, idx) => {
          const id = `${current.id}-${idx}`;
          const isSpeaking = speakingId === id;
          return (
            <Highlightable key={idx} id={slug("phrase", current.id, p.romaji)}>
            <div className="px-5 py-4 flex items-start gap-3"
              style={{ borderBottom: idx < current.phrases.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <span style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", fontFamily: "var(--font-display)" }}>
                    {p.jp}
                  </span>
                  <span style={{ fontSize: 12, color: current.color, fontWeight: 600, fontStyle: "italic", whiteSpace: "nowrap" }}>
                    {p.romaji}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: 0 }}>
                  {getPhraseMeaning(p)}
                </p>
              </div>

              {supported && (
                <button
                  onClick={() => speak(p.jp, id)}
                  aria-label={`${t("phrases.listen") || "Escuchar"} "${p.jp}"`}
                  className="speaker-btn"
                  style={{
                    flexShrink: 0, marginTop: 2,
                    width: 34, height: 34, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: isSpeaking ? current.color : `${current.color}1c`,
                    border: `1.5px solid ${isSpeaking ? current.color : current.color + "40"}`,
                    boxShadow: isSpeaking
                      ? `0 2px 8px ${current.color}55`
                      : "0 1px 3px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                  }}
                >
                  <Volume2
                    size={16}
                    style={{ color: isSpeaking ? "#fff" : current.color }}
                    className={isSpeaking ? "speaking-pulse" : ""}
                  />
                </button>
              )}
            </div>
            </Highlightable>
          );
        })}
      </div>

      {/* Etiquette section */}
      <div className="mb-4 flex items-center gap-2">
        <Info size={16} style={{ color: "var(--indigo)" }} />
        <p className="eyebrow" style={{ color: "var(--ink-soft)", margin: 0 }}>
          {t("phrases.etiquette") || "Normas de etiqueta"}
        </p>
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {etiquette.map((e, idx) => {
          const title = getEtiquetteTitle(e);
          const text = getEtiquetteText(e);
          return (
            <Highlightable key={idx} id={slug("etiquette", typeof e.title === "object" ? e.title.es : e.title)}>
              <div className="rounded-xl p-4"
                style={{ background: "var(--paper-raised)", border: "1px solid var(--line)" }}>
                <p style={{ fontSize: 13.5, fontWeight: 700, color: "var(--indigo)", marginBottom: 4 }}>
                  {title}
                </p>
                <p style={{ fontSize: 12.5, color: "var(--ink-soft)", lineHeight: 1.55, margin: 0 }}>
                  {text}
                </p>
              </div>
            </Highlightable>
          );
        })}
      </div>
    </div>
  );
}
