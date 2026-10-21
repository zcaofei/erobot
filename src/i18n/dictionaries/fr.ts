import type { Dictionary } from "@/i18n/types";
import en from "@/i18n/dictionaries/en";

const fr: Dictionary = {
  ...en,
  nav: {
    home: "Accueil",
    products: "Produits",
    about: "À propos",
    contact: "Contact",
    settings: "Paramètres",
    requestQuote: "Demander un devis",
    language: "Langue",
  },
  footer: {
    ...en.footer,
    tagline:
      "Actionneurs, capteurs et composants d'automatisation — directement de fabricants chinois vérifiés pour acheteurs B2B en UE, Amérique du Nord et Moyen-Orient.",
    quickLinks: "Liens",
    catalog: "Catalogue",
    qualityOem: "Qualité & OEM",
    inquiry: "Demande B2B",
    emailHint: "Remplacez par votre e-mail pro",
    locations: "Shenzhen · Shanghai · export FOB / DAP mondial",
    rights: "© 2026 RoboCore Supply. Tous droits réservés.",
  },
  home: {
    ...en.home,
    badge: "B2B · Robotique · Capteurs industriels",
    title: "Partenaire d'approvisionnement en composants robotiques & capteurs depuis la Chine",
    browseCatalog: "Voir le catalogue",
    featuredLabel: "Produits phares",
    featuredTitle: "Gamme V1",
    viewAll: "Tous les produits →",
    rfqLabel: "RFQ rapide",
    rfqTitle: "Envoyez votre BOM ou cahier des charges",
  },
  productsPage: {
    label: "Catalogue",
    title: "Composants de précision pour robotique & automation",
    subtitle: "Filtrez par catégorie, consultez les specs et demandez un devis volume.",
    filterAll: "Tous les produits",
  },
  productCard: { viewSpecs: "Specs", requestQuote: "Devis" },
  productDetail: {
    back: "Retour aux produits",
    keyAdvantages: "Atouts clés",
    specs: "Spécifications techniques",
    specsNote: "Valeurs selon sous-modèle. Confirmez la fiche technique avant production.",
    applications: "Applications",
    quoteTitle: "Devis volume",
    quoteDesc: "Prix, délai et datasheet adaptés à votre BOM.",
    quoteMobile: "Devis volume",
  },
  form: {
    ...en.form,
    fullName: "Nom complet",
    businessEmail: "E-mail professionnel",
    company: "Entreprise / Organisation",
    targetProduct: "Produit cible",
    orderQuantity: "Quantité estimée",
    submit: "Envoyer la demande",
    quantities: {
      sample: "Échantillon (1–5 pcs)",
      mid: "10–50 pcs",
      bulk: "500+ pcs",
    },
  },
  settingsPage: {
    label: "Paramètres",
    title: "Préférences du site",
    subtitle: "Langue d'affichage. Les datasheets techniques restent en anglais.",
    languageSection: "Langue d'affichage",
    languageHint: "Enregistrée dans ce navigateur.",
    currentLanguage: "Langue actuelle",
    reloadHint: "Actualisez la page si nécessaire (Ctrl+F5).",
  },
  toast: {
    inquirySuccess:
      "Merci ! Notre équipe commerciale technique répondra sous 12 heures.",
  },
};

export default fr;
