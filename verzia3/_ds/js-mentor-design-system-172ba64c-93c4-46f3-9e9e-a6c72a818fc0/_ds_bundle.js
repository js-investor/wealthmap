/* @ds-bundle: {"format":3,"namespace":"JSMentorDesignSystem_172ba6","components":[],"sourceHashes":{"ui_kits/landing/AboutSection.jsx":"73caa0bfe600","ui_kits/landing/BonusSection.jsx":"352fa3f13ded","ui_kits/landing/HeroSection.jsx":"183a6132ae38","ui_kits/landing/MistakesSection.jsx":"64041daa8e63","ui_kits/landing/ToolsSection.jsx":"1516c7161ce5","ui_kits/landing/primitives.jsx":"be393f9af063"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JSMentorDesignSystem_172ba6 = window.JSMentorDesignSystem_172ba6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/landing/AboutSection.jsx
try { (() => {
/* About Ivan — credentials, on cream */
function AboutSection() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "cream",
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: "var(--fg2)",
      textWrap: "pretty"
    }
  }, "Vol\xE1m sa Ivan a u\u017E viac ako 8 rokov zdie\u013Eam obsah o peniazoch a raste na instagrame. Nie som \u0161pekulant, som odborn\xEDk ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg1)",
      fontWeight: 600
    }
  }, "s licenciou v N\xE1rodnej banke Slovenska"), " a som absolventom ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg1)",
      fontWeight: 600
    }
  }, "EFA (najv\xE4\u010D\u0161\xED finan\u010Dn\xFD titul v E\xDA)"), "."), /*#__PURE__*/React.createElement("h2", {
    className: "serif",
    style: {
      fontWeight: 600,
      fontSize: 25,
      lineHeight: 1.2,
      marginTop: 6
    }
  }, "Ke\u010F mi Meta druh\xFDkr\xE1t vypla jsInvestor, pochopil som jednu vec."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--sans)",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: 1.4
    }
  }, "Najcennej\u0161ie finan\u010Dn\xE9 know-how nem\xF4\u017Ee visie\u0165 len na instagrame."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--fg2)"
    }
  }, "Ne\u0161lo o krypto sign\xE1ly. Ne\u0161lo o trading skupinu. Ne\u0161lo o r\xFDchle zbohatnutie."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: "var(--fg2)",
      textWrap: "pretty"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg1)",
      fontWeight: 600
    }
  }, "Rie\u0161il som be\u017En\xE9 t\xE9my,"), " ktor\xE9 Slov\xE1ci rie\u0161ia ka\u017Ed\xFD de\u0148: hypot\xE9ky, investovanie, fondy, ETF, nehnute\u013Enosti, rentu, poplatky a rozhodnutia, ktor\xE9 m\xF4\u017Eu \u010Dloveka st\xE1\u0165 tis\xEDce eur.")));
}
Object.assign(window, {
  AboutSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/AboutSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/BonusSection.jsx
try { (() => {
/* Bonus — cream: calculator cards, +3 dokumenty, bonus thumbnails, CTA */
const CALCS = [["hand-coins", "Rentová", "Koľko potrebuješ investovať na pravidelný príjem z majetku."], ["piggy-bank", "Investičná", "Čo robí čas, pravidelné vklady a výnos s tvojím majetkom."], ["building-2", "Hypotekárna", "Akú hypotéku si reálne môžeš dovoliť podľa príjmu, LTV a DSTI."], ["banknote", "Mzdová", "Vyrátaš výšku odvodov, dane, detailne budeš poznať príjem."], ["lightbulb", "Splatiť alebo investovať?", "Vyrátaš či sa oplatí úver splatiť alebo peniaze použiť inak."]];
const BONUSES = [["../../assets/bonus-poplatky.png", "Investovanie a poplatky"], ["../../assets/bonus-reality.png", "Akcie alebo reality?"], ["../../assets/bonus-checklist.png", "Check LIST pred prvým bytom"]];
function CalcCard({
  icon,
  bold,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--r-lg)",
      padding: "15px 17px",
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 42,
      height: 42,
      borderRadius: "var(--r-sm)",
      background: "var(--cream)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    color: "var(--ink)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }, bold, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--sans)",
      fontWeight: 400,
      fontSize: 15,
      color: "var(--fg2)"
    }
  }, "kalkula\u010Dka")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg2)",
      marginTop: 3,
      lineHeight: 1.45
    }
  }, desc)));
}
function BonusSection({
  onJoin
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "serif",
    style: {
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.2,
      textAlign: "center"
    }
  }, "A k tomu dostane\u0161 aj ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 800
    }
  }, "praktick\xE9 bonusy"), " \uD83C\uDF81"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 11,
      marginTop: 4
    }
  }, CALCS.map(([i, b, d]) => /*#__PURE__*/React.createElement(CalcCard, {
    key: b,
    icon: i,
    bold: b,
    desc: d
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--fg2)",
      textAlign: "center",
      textWrap: "pretty",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg1)",
      fontWeight: 600
    }
  }, "+ 3 stru\u010Dn\xE9 dokumenty"), ", kde hovor\xEDm o poplatkoch v investovan\xED, porovn\xE1vam akcie vs nehnute\u013Enosti a spravil som Check List pred k\xFApou prv\xE9ho investi\u010Dn\xE9ho bytu."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 10
    }
  }, BONUSES.map(([src, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      borderRadius: "var(--r-md)",
      overflow: "hidden",
      position: "relative",
      aspectRatio: "3/4",
      background: "#161310"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "16px 8px 8px",
      background: "linear-gradient(transparent, rgba(0,0,0,.78))",
      color: "#fff",
      fontSize: 11,
      fontWeight: 600,
      textAlign: "center",
      lineHeight: 1.2
    }
  }, label)))), /*#__PURE__*/React.createElement(Button, {
    variant: "pill",
    onClick: onJoin,
    emoji: "\uD83C\uDF81",
    style: {
      marginTop: 4
    }
  }, "Chcem tieto bonusy")));
}
Object.assign(window, {
  BonusSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/BonusSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/HeroSection.jsx
try { (() => {
/* Hero — eyebrow pill, serif headline, lead, body, CTA, portrait, stats */
function HeroSection({
  onJoin
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "cream",
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "red"
  }, "Toto nie s\xFA finan\u010Dn\xE9 rozpr\xE1vky"), /*#__PURE__*/React.createElement("h1", {
    className: "serif",
    style: {
      fontWeight: 800,
      fontSize: 34,
      lineHeight: 1.08,
      letterSpacing: "-.01em",
      textWrap: "balance"
    }
  }, "Toto je cesta k bohat\u0161iemu \u017Eivotu."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--sans)",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.4,
      textWrap: "balance"
    }
  }, "Vy\u0161\u0161\xED pr\xEDjem ti m\xF4\u017Ee k\xFApi\u0165 pohodlie. Rozumn\xE9 finan\u010Dn\xE9 rozhodnutia ti kupuj\xFA slobodu."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--fg2)",
      textWrap: "pretty",
      maxWidth: 340
    }
  }, "V mojej komunite ti uk\xE1\u017Eem, ako robi\u0165 lep\u0161ie finan\u010Dn\xE9 rozhodnutia pri investovan\xED, hypot\xE9ke, fondoch, ETF, nehnute\u013Enostiach, rente a produktoch, ktor\xE9 \u0165a m\xF4\u017Eu st\xE1\u0165 tis\xEDce eur."), /*#__PURE__*/React.createElement(Button, {
    onClick: onJoin
  }, "Chcem sa prida\u0165 ZADARMO"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      marginTop: 6,
      boxShadow: "var(--shadow-lg)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ivan-hero.png",
    alt: "Ivan",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--r-pill)",
      background: "rgba(0,0,0,.45)",
      backdropFilter: "blur(2px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 22,
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(StatWell, {
    items: [{
      n: "118 000",
      l: "sledovateľov na IG"
    }, {
      n: "8 ročné",
      l: "skúsenosti"
    }, {
      n: "3 000 000€",
      l: "v starostlivosti"
    }]
  }))));
}
Object.assign(window, {
  HeroSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/HeroSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/MistakesSection.jsx
try { (() => {
/* Mistakes — black section, portrait, numbered 1–8 pills, CTA */
const MISTAKES = [["Zarábaš, ale ", "majetok nerastie", " 😅"], ["Už ", "investuješ, ale nevieš", " či správne 🥵"], ["Nevieš či má zmysel ", "hypotéku skôr splatiť", ", alebo si radšej peniaze odložiť 😓"], ["Všetci: BYTY BYTY BYTY, ale ", "nikto nepovie o rizikách", " a reálnych číslach 🏠"], ["Ešte neinvestuješ, lebo sa ", "bojíš chýb", " ❌"], ["Máš ", "vzťahové problémy", " kvôli peniazom 🧍"], ["Tvoje peniaze nemajú ", "žiaden systém", " 🤯"], ["", "Máš v tom chaos.", " Jeden hovorí splať úver. Druhý investuj. Tretí kúp byt. Čo teda? 🤔"]];
function MistakeRow({
  n,
  parts
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontWeight: 800,
      fontSize: 22,
      width: 18,
      textAlign: "center",
      color: "var(--on-dark-1)",
      flexShrink: 0
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "#fff",
      color: "var(--ink)",
      borderRadius: "var(--r-md)",
      padding: "13px 17px",
      fontSize: 13.5,
      lineHeight: 1.4,
      textAlign: "center",
      boxShadow: "0 1px 2px rgba(0,0,0,.18)"
    }
  }, parts[0], /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700
    }
  }, parts[1]), parts[2]));
}
function MistakesSection({
  onJoin
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "black"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ivan-portrait.png",
    alt: "Ivan",
    style: {
      width: 168,
      borderRadius: "var(--r-lg)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "serif",
    style: {
      fontWeight: 600,
      fontSize: 25,
      lineHeight: 1.22,
      textAlign: "center",
      textWrap: "balance"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 800
    }
  }, "Toto s\xFA chyby,"), " ktor\xE9 \u013Eud\xED stoja najviac pe\u0148az\xED. A \u010Dasto vyzeraj\xFA \xFAplne norm\xE1lne."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "var(--on-dark-2)",
      textAlign: "center",
      textWrap: "pretty"
    }
  }, "Probl\xE9m v\xE4\u010D\u0161iny \u013Eud\xED nie je ich pr\xEDjem. Probl\xE9m je, \u017Ee robia rozhodnutia, ktor\xE9 si nikdy poriadne neprepo\u010D\xEDtali."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 11,
      marginTop: 4
    }
  }, MISTAKES.map((parts, i) => /*#__PURE__*/React.createElement(MistakeRow, {
    key: i,
    n: i + 1,
    parts: parts
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "pill",
    onClick: onJoin,
    full: true
  }, "Chcem sa prida\u0165 ZADARMO")));
}
Object.assign(window, {
  MistakesSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/MistakesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/ToolsSection.jsx
try { (() => {
/* Tools — cream section: tag-chip portrait, dark feature cards, CTA */
const TAGS = ["investície", "úspech", "peniaze", "dane", "nehnuteľnosti", "osobné financie"];
const FEATURES = [["trending-up", "Investovanie bez rozprávok"], ["search", "Analýzy slovenských produktov"], ["git-branch", "Dôležité finančné rozhodnutia"], ["home", "Hypotéky, byty, renta"], ["users", "Reálne prípady ľudí"]];
function FeatureCard({
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card-dark)",
      border: "1px solid var(--hairline-dark)",
      borderRadius: "var(--r-pill)",
      padding: "13px 22px",
      display: "flex",
      alignItems: "center",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 34,
      height: 34,
      borderRadius: "var(--r-pill)",
      background: "rgba(245,237,224,.08)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "var(--on-dark-1)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--on-dark-1)",
      fontWeight: 600,
      fontSize: 15
    }
  }, label));
}
function ToolsSection({
  onJoin
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      background: "#161310",
      minHeight: 150
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ivan-portrait.png",
    alt: "Ivan",
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      height: "100%",
      width: "55%",
      objectFit: "cover",
      opacity: .92
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: 18,
      display: "flex",
      flexWrap: "wrap",
      gap: 9,
      width: "70%"
    }
  }, TAGS.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      background: "#fff",
      color: "var(--ink)",
      fontWeight: 500,
      fontSize: 12.5,
      padding: "7px 13px",
      borderRadius: "var(--r-pill)"
    }
  }, t)))), /*#__PURE__*/React.createElement("h2", {
    className: "serif",
    style: {
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.22,
      textAlign: "center",
      textWrap: "balance"
    }
  }, "Ke\u010F sa prid\xE1\u0161, dostane\u0161 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 800
    }
  }, "konkr\xE9tne n\xE1stroje"), ", nie \u010Fal\u0161ie pr\xE1zdne rady."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 11
    }
  }, FEATURES.map(([i, l]) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: l,
    icon: i,
    label: l
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "pill",
    onClick: onJoin
  }, "Vst\xFApi\u0165 na 15 dn\xED zadarmo")));
}
Object.assign(window, {
  ToolsSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/ToolsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/primitives.jsx
try { (() => {
/* JS Mentor — UI Kit primitives */
const {
  useEffect,
  useRef
} = React;

// Lucide icon — renders an <i> and lets the global lucide pass swap it.
function Icon({
  name,
  size = 22,
  color = "currentColor",
  strokeWidth = 2,
  style
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      display: "inline-flex",
      ...style
    },
    "data-stroke": strokeWidth
  });
}

// Primary forest-green CTA. variant: "pill" | "rounded"
function Button({
  children,
  variant = "rounded",
  emoji = "🚀",
  onClick,
  full,
  style
}) {
  const ref = useRef(null);
  const radius = variant === "pill" ? "var(--r-pill)" : "var(--r-md)";
  return /*#__PURE__*/React.createElement("button", {
    ref: ref,
    onClick: onClick,
    className: "jsm-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      width: full ? "100%" : "auto",
      background: "var(--green)",
      color: "#fff",
      fontFamily: "var(--sans)",
      fontWeight: 600,
      fontSize: 16,
      letterSpacing: variant === "pill" ? ".03em" : 0,
      textTransform: variant === "pill" ? "uppercase" : "none",
      border: 0,
      padding: "15px 26px",
      borderRadius: radius,
      cursor: "pointer",
      boxShadow: "0 6px 18px rgba(43,107,74,.28)",
      transition: "background var(--dur) var(--ease), transform var(--dur) var(--ease)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, children), emoji ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, emoji) : null);
}

// Pill / badge. tone: "red" | "cream" | "white"
function Pill({
  children,
  tone = "white",
  style
}) {
  const tones = {
    red: {
      background: "var(--red)",
      color: "#fff"
    },
    cream: {
      background: "var(--cream-deep)",
      color: "var(--ink)"
    },
    white: {
      background: "#fff",
      color: "var(--ink)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--sans)",
      fontWeight: 600,
      fontSize: 13,
      padding: "7px 16px",
      borderRadius: "var(--r-pill)",
      ...tones[tone],
      ...style
    }
  }, children);
}

// Full-bleed alternating section. tone: "cream" | "black"
function Section({
  tone = "cream",
  children,
  style
}) {
  const dark = tone === "black";
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": dark ? "dark-section" : "cream-section",
    style: {
      background: dark ? "var(--black)" : "var(--cream)",
      color: dark ? "var(--on-dark-1)" : "var(--fg1)",
      padding: "44px 26px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 392,
      margin: "0 auto"
    }
  }, children));
}

// Stat well (recessed beige on cream)
function StatWell({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cream-deep)",
      borderRadius: "var(--r-lg)",
      padding: "22px 14px",
      display: "flex",
      justifyContent: "space-around",
      textAlign: "center"
    }
  }, items.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontWeight: 800,
      fontSize: 28,
      lineHeight: 1,
      fontVariantNumeric: "tabular-nums"
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg2)",
      marginTop: 6
    }
  }, s.l))));
}

// Re-run Lucide whenever the tree changes.
function useLucide(dep) {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
      // apply per-icon stroke width
      document.querySelectorAll("svg.lucide").forEach(svg => {
        const sw = svg.closest("i")?.dataset.stroke;
        if (sw) svg.setAttribute("stroke-width", sw);
      });
    }
  }, [dep]);
}
Object.assign(window, {
  Icon,
  Button,
  Pill,
  Section,
  StatWell,
  useLucide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/primitives.jsx", error: String((e && e.message) || e) }); }

})();
