import type { Dictionary } from "@/i18n/types";
import en from "@/i18n/dictionaries/en";

const pt: Dictionary = {
  ...en,
  nav: {
    home: "Início",
    products: "Produtos",
    about: "Sobre",
    contact: "Contato",
    settings: "Configurações",
    requestQuote: "Solicitar cotação",
    language: "Idioma",
  },
  footer: {
    ...en.footer,
    tagline:
      "Atuadores, sensores e componentes de automação de precisão — direto de fabricantes chineses verificados para compradores B2B na UE, América do Norte e Oriente Médio.",
    quickLinks: "Links",
    catalog: "Catálogo",
    qualityOem: "Qualidade & OEM",
    inquiry: "Consulta B2B",
    emailHint: "Substitua pelo e-mail comercial",
    locations: "Shenzhen · Shanghai · exportação FOB / DAP global",
    rights: "© 2026 RoboCore Supply. Todos os direitos reservados.",
  },
  home: {
    ...en.home,
    badge: "B2B · Robótica · Sensores industriais",
    title: "Parceiro de sourcing de componentes robóticos e sensores da China",
    browseCatalog: "Ver catálogo",
    featuredLabel: "Destaques",
    featuredTitle: "Linha V1",
    viewAll: "Todos os produtos →",
    rfqLabel: "RFQ rápida",
    rfqTitle: "Envie BOM ou especificações",
  },
  productsPage: {
    label: "Catálogo",
    title: "Componentes de precisão para robótica e automação",
    subtitle: "Filtre por categoria, veja specs e peça cotação em volume.",
    filterAll: "Todos os produtos",
  },
  productCard: { viewSpecs: "Ver specs", requestQuote: "Cotar" },
  productDetail: {
    back: "Voltar aos produtos",
    keyAdvantages: "Vantagens",
    specs: "Especificações técnicas",
    specsNote: "Valores variam por submodelo. Confirme o datasheet antes da produção.",
    applications: "Aplicações",
    quoteTitle: "Cotação em volume",
    quoteDesc: "Preço, prazo e datasheet para seu BOM.",
    quoteMobile: "Cotação",
  },
  form: {
    ...en.form,
    fullName: "Nome completo",
    businessEmail: "E-mail corporativo",
    company: "Empresa / Organização",
    targetProduct: "Produto alvo",
    orderQuantity: "Quantidade estimada",
    submit: "Enviar consulta",
    quantities: {
      sample: "Amostra (1–5 un.)",
      mid: "10–50 un.",
      bulk: "500+ un.",
    },
  },
  settingsPage: {
    label: "Configurações",
    title: "Preferências do site",
    subtitle: "Idioma da interface. Datasheets técnicos permanecem em inglês.",
    languageSection: "Idioma de exibição",
    languageHint: "Salvo neste navegador.",
    currentLanguage: "Idioma atual",
    reloadHint: "Atualize a página se necessário (Ctrl+F5).",
  },
  toast: {
    inquirySuccess:
      "Obrigado! Nossa equipe comercial técnica responderá em 12 horas.",
  },
};

export default pt;
