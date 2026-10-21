import type { Dictionary } from "@/i18n/types";
import en from "@/i18n/dictionaries/en";

const ar: Dictionary = {
  ...en,
  nav: {
    home: "الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    contact: "اتصل بنا",
    settings: "الإعدادات",
    requestQuote: "طلب عرض سعر",
    language: "اللغة",
  },
  footer: {
    ...en.footer,
    tagline:
      "مكونات روبotics واستشعار وأتمتة دقيقة — مباشرة من مصنعين صينيين موثوقين لمشتري B2B في أوروبا وأمريكا والشرق الأوسط.",
    quickLinks: "روابط سريعة",
    catalog: "كتalog المنتجات",
    qualityOem: "الجودة و OEM",
    inquiry: "استفسار B2B",
    emailHint: "استبدل ببريد عملك",
    locations: "شنzhen · شanghai · تصدير FOB / DAP عالمياً",
    rights: "© 2026 RoboCore Supply. جميع الحقوق محفوظة.",
  },
  home: {
    ...en.home,
    badge: "B2B · روبotics · مستشعرات صناعية",
    title: "شريك توريد مكونات الروبotics والمستشعرات الدقيقة من الصين",
    browseCatalog: "تصفح الكatalog",
    featuredLabel: "منتجات مميزة",
    featuredTitle: "خط الإصدار V1",
    viewAll: "كل المنتجات →",
    rfqLabel: "طلب سعر سريع",
    rfqTitle: "أرسل BOM أو المواصفات",
  },
  productsPage: {
    label: "الكتalog",
    title: "مكونات دقيقة للروبotics والأتمتة",
    subtitle: "صفِّ حسب الفئة، راجع المواصfات واطلب عرض سعر بالجملة.",
    filterAll: "كل المنتجات",
  },
  productCard: { viewSpecs: "المواصfات", requestQuote: "عرض سعر" },
  productDetail: {
    back: "العودة للمنتجات",
    keyAdvantages: "المزايا",
    specs: "المواصfات الفنية",
    specsNote: "القيم حسب الطراز. أكد datasheet قبل الإنتاج.",
    applications: "التطبيقات",
    quoteTitle: "عرض سعر بالجملة",
    quoteDesc: "سعر ومدة وتسليم datasheet حسب BOM.",
    quoteMobile: "طلب عرض",
  },
  form: {
    ...en.form,
    fullName: "الاسم الكامل",
    businessEmail: "البريد المؤسسي",
    company: "الشركة / المؤسسة",
    targetProduct: "المنتج المستهدف",
    orderQuantity: "الكمية المتوقعة",
    submit: "إرسال الاستفسار",
    quantities: {
      sample: "عينة (1–5)",
      mid: "10–50",
      bulk: "500+",
    },
  },
  settingsPage: {
    label: "الإعدادات",
    title: "تفضيلات الموقع",
    subtitle: "لغة العرض. datasheets الفنية تبقى بالإنجليزية.",
    languageSection: "لغة العرض",
    languageHint: "تُحفظ في هذا المتصفح.",
    currentLanguage: "اللغة الحالية",
    reloadHint: "حدّث الصفحة بعد التغيير (Ctrl+F5).",
  },
  toast: {
    inquirySuccess: "شكراً! سيرد فريق المبيعات الفني خلال 12 ساعة.",
  },
};

export default ar;
