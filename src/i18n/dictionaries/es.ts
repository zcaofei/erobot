import type { Dictionary } from "@/i18n/types";
import en from "@/i18n/dictionaries/en";

const es: Dictionary = {
  ...en,
  nav: {
    home: "Inicio",
    products: "Productos",
    about: "Nosotros",
    contact: "Contacto",
    settings: "Ajustes",
    requestQuote: "Solicitar cotización",
    language: "Idioma",
  },
  footer: {
    ...en.footer,
    tagline:
      "Actuadores, sensores y componentes de automatización de precisión — directo de fabricantes chinos verificados para compradores B2B en UE, Norteamérica y Oriente Medio.",
    quickLinks: "Enlaces",
    catalog: "Catálogo",
    qualityOem: "Calidad y OEM",
    inquiry: "Consulta B2B",
    emailHint: "Reemplace con su correo comercial",
    locations: "Shenzhen · Shanghai · exportación FOB / DAP mundial",
    rights: "© 2026 RoboCore Supply. Todos los derechos reservados.",
  },
  home: {
    ...en.home,
    badge: "B2B · Robótica · Sensores industriales",
    title: "Socio de abastecimiento de componentes robóticos y sensores desde China",
    browseCatalog: "Ver catálogo",
    featuredLabel: "Destacados",
    featuredTitle: "Línea V1",
    viewAll: "Ver todos →",
    rfqLabel: "RFQ rápida",
    rfqTitle: "Envíe su BOM o especificaciones",
  },
  productsPage: {
    label: "Catálogo",
    title: "Componentes de precisión para robótica y automatización",
    subtitle: "Filtre por categoría, revise specs y pida cotización por volumen.",
    filterAll: "Todos los productos",
  },
  productCard: { viewSpecs: "Ver specs", requestQuote: "Cotizar" },
  productDetail: {
    back: "Volver a productos",
    keyAdvantages: "Ventajas clave",
    specs: "Especificaciones técnicas",
    specsNote: "Valores según submodelo. Confirme la hoja de datos antes de producción.",
    applications: "Aplicaciones",
    quoteTitle: "Cotización por volumen",
    quoteDesc: "Precio, plazo y datasheet según su BOM.",
    quoteMobile: "Cotización",
  },
  form: {
    ...en.form,
    fullName: "Nombre completo",
    businessEmail: "Correo empresarial",
    company: "Empresa / Organización",
    targetProduct: "Producto objetivo",
    orderQuantity: "Cantidad estimada",
    submit: "Enviar consulta",
    quantities: {
      sample: "Muestra (1–5 uds.)",
      mid: "10–50 uds.",
      bulk: "500+ uds.",
    },
  },
  settingsPage: {
    label: "Ajustes",
    title: "Preferencias del sitio",
    subtitle: "Idioma de interfaz. Las hojas técnicas siguen en inglés.",
    languageSection: "Idioma",
    languageHint: "Guardado en este navegador.",
    currentLanguage: "Idioma actual",
    reloadHint: "Actualice la página si hace falta (Ctrl+F5).",
  },
  toast: {
    inquirySuccess:
      "¡Gracias! Nuestro equipo comercial técnico responderá en 12 horas.",
  },
};

export default es;
