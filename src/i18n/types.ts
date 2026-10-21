import type { ProductCategory } from "@data/products";

export type OrderQuantityKey = "sample" | "mid" | "bulk";

export type Dictionary = {
  nav: {
    home: string;
    products: string;
    about: string;
    contact: string;
    settings: string;
    requestQuote: string;
    language: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    catalog: string;
    qualityOem: string;
    inquiry: string;
    emailHint: string;
    locations: string;
    rights: string;
  };
  home: {
    badge: string;
    title: string;
    subtitle: string;
    browseCatalog: string;
    featuredLabel: string;
    featuredTitle: string;
    featuredDesc: string;
    viewAll: string;
    rfqLabel: string;
    rfqTitle: string;
    rfqDesc: string;
    advantages: { title: string; desc: string }[];
  };
  process: {
    label: string;
    title: string;
    steps: { title: string; desc: string }[];
  };
  productsPage: {
    label: string;
    title: string;
    subtitle: string;
    filterAll: string;
  };
  productCard: {
    viewSpecs: string;
    requestQuote: string;
  };
  productDetail: {
    back: string;
    keyAdvantages: string;
    specs: string;
    specsNote: string;
    applications: string;
    quoteTitle: string;
    quoteDesc: string;
    quoteMobile: string;
  };
  form: {
    title: string;
    description: string;
    fullName: string;
    businessEmail: string;
    company: string;
    targetProduct: string;
    productGeneral: string;
    orderQuantity: string;
    quantityPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    quantities: Record<OrderQuantityKey, string>;
    contactTitle: string;
    contactDescription: string;
  };
  contactPage: {
    label: string;
    title: string;
    subtitle: string;
    email: string;
    response: string;
    responseValue: string;
    languages: string;
    languagesValue: string;
  };
  aboutPage: {
    label: string;
    title: string;
    subtitle: string;
    pillars: { title: string; body: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  settingsPage: {
    label: string;
    title: string;
    subtitle: string;
    languageSection: string;
    languageHint: string;
    currentLanguage: string;
    reloadHint: string;
  };
  categories: Record<ProductCategory, string>;
  productItems: Record<
    string,
    { name: string; shortName: string; tagline: string }
  >;
  toast: {
    inquirySuccess: string;
  };
};
