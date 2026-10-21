import type { Dictionary } from "@/i18n/types";
import en from "@/i18n/dictionaries/en";

const de: Dictionary = {
  ...en,
  nav: {
    home: "Start",
    products: "Produkte",
    about: "Über uns",
    contact: "Kontakt",
    settings: "Einstellungen",
    requestQuote: "Angebot anfordern",
    language: "Sprache",
  },
  footer: {
    ...en.footer,
    tagline:
      "Präzise Robotik-Aktoren, Sensoren und Automatisierungsteile — direkt von verifizierten chinesischen Herstellern für B2B-Käufer in EU, Nordamerika und Nahost.",
    quickLinks: "Links",
    catalog: "Produktkatalog",
    qualityOem: "Qualität & OEM",
    inquiry: "B2B-Anfrage",
    emailHint: "Geschäfts-E-Mail eintragen",
    locations: "Shenzhen · Shanghai · weltweiter FOB / DAP Export",
    rights: "© 2026 RoboCore Supply. Alle Rechte vorbehalten.",
  },
  home: {
    ...en.home,
    badge: "B2B · Robotik · Industriesensoren",
    title: "Partner für präzise Robotik- & Sensor-Komponenten aus China",
    subtitle:
      "Humanoid-Gelenkmodule, Laserentfernung, Neigungssensoren, Drucktransmitter und BLDC-Motoren für Ingenieure und Einkauf in Europa, Nordamerika und dem Nahen Osten.",
    browseCatalog: "Katalog ansehen",
    featuredLabel: "Highlights",
    featuredTitle: "V1 Produktlinie",
    viewAll: "Alle Produkte →",
    rfqLabel: "Schnelle RFQ",
    rfqTitle: "BOM oder Spec senden",
  },
  productsPage: {
    label: "Katalog",
    title: "Präzisionskomponenten für Robotik & Automation",
    subtitle: "Nach Kategorie filtern, Specs prüfen und Mengenangebot anfordern.",
    filterAll: "Alle Produkte",
  },
  productCard: { viewSpecs: "Specs", requestQuote: "Angebot" },
  productDetail: {
    back: "Zurück zu Produkten",
    keyAdvantages: "Vorteile",
    specs: "Technische Daten",
    specsNote: "Werte modellabhängig. Datasheet vor Serienfertigung bestätigen.",
    applications: "Anwendungen",
    quoteTitle: "Mengenangebot",
    quoteDesc: "Preis, Lieferzeit und Datasheet für Ihre BOM.",
    quoteMobile: "Angebot anfordern",
  },
  form: {
    ...en.form,
    title: "Mengenangebot anfordern",
    fullName: "Vollständiger Name",
    businessEmail: "Geschäfts-E-Mail",
    company: "Firma / Organisation",
    targetProduct: "Zielprodukt",
    productGeneral: "Allgemeine Anfrage / mehrere SKUs",
    orderQuantity: "Geschätzte Menge",
    quantityPlaceholder: "Mengenbereich wählen",
    message: "Nachricht",
    submit: "Anfrage senden",
    sending: "Senden…",
    quantities: {
      sample: "Muster (1–5 Stk.)",
      mid: "10–50 Stk.",
      bulk: "500+ Stk.",
    },
  },
  settingsPage: {
    label: "Einstellungen",
    title: "Website-Einstellungen",
    subtitle: "Anzeigesprache wählen. Technische Datasheets bleiben auf Englisch.",
    languageSection: "Anzeigesprache",
    languageHint: "Wird in diesem Browser gespeichert.",
    currentLanguage: "Aktuelle Sprache",
    reloadHint: "Nach Sprachwechsel ggf. Seite neu laden (Strg+F5).",
  },
  toast: {
    inquirySuccess:
      "Vielen Dank! Unser technisches Sales-Team antwortet innerhalb von 12 Stunden.",
  },
};

export default de;
