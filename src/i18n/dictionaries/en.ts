import type { Dictionary } from "@/i18n/types";

const en: Dictionary = {
  nav: {
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
    settings: "Settings",
    requestQuote: "Request Quote",
    language: "Language",
  },
  footer: {
    tagline:
      "Precision robotics actuators, sensors, and automation components — sourced directly from verified Chinese manufacturers for EU, North America, and Middle East B2B buyers.",
    quickLinks: "Quick Links",
    catalog: "Product Catalog",
    qualityOem: "Quality & OEM",
    inquiry: "B2B Inquiry",
    emailHint: "Replace with your business inbox",
    locations: "Shenzhen · Shanghai · Export FOB / DAP worldwide",
    rights: "© 2026 RoboCore Supply. All rights reserved.",
  },
  home: {
    badge: "B2B · Robotics · Industrial Sensors",
    title: "Precision Robotics & Sensor Components Sourcing Partner from China",
    subtitle:
      "Humanoid joint modules, laser ranging, attitude sensors, pressure transmitters, and compact BLDC motors — built for engineers and procurement teams in Europe, North America, and the Middle East.",
    browseCatalog: "Browse Catalog",
    featuredLabel: "Featured Hardware",
    featuredTitle: "V1 product lineup",
    featuredDesc:
      "Five precision SKUs selected for humanoid robotics, mobile robots, UAVs, and industrial automation projects.",
    viewAll: "View all products →",
    rfqLabel: "Quick RFQ",
    rfqTitle: "Send your BOM or spec sheet",
    rfqDesc:
      "We support university labs, integrators, and OEM teams with multilingual technical support, compliant invoicing, and repeatable supply for production ramps.",
    advantages: [
      {
        title: "Factory-Direct Pricing",
        desc: "Skip unnecessary layers — transparent quotes aligned with OEM MOQs.",
      },
      {
        title: "Strict QC & Traceability",
        desc: "Incoming inspection, batch records, and datasheet-matched specs.",
      },
      {
        title: "Fast Air Freight",
        desc: "Express and air options to EU, US, and GCC with export docs.",
      },
      {
        title: "Samples & Customization",
        desc: "Engineering samples, labeling, firmware, and OEM/ODM discussions.",
      },
    ],
  },
  process: {
    label: "B2B Procurement Flow",
    title: "From RFQ to production shipment",
    steps: [
      {
        title: "Inquiry",
        desc: "Submit specs, quantity, and destination. We respond within 1 business day.",
      },
      {
        title: "Quotation",
        desc: "Transparent unit pricing, lead time, Incoterms, and payment terms.",
      },
      {
        title: "Sample Verification",
        desc: "Engineering samples with datasheets and batch consistency checks.",
      },
      {
        title: "Bulk Shipment",
        desc: "Air freight or express logistics with export documentation support.",
      },
    ],
  },
  productsPage: {
    label: "Catalog",
    title: "Precision components for robotics & automation",
    subtitle:
      "Filter by category and open each SKU for technical parameters, application notes, and bulk quotation requests.",
    filterAll: "All Products",
  },
  productCard: {
    viewSpecs: "View Specs",
    requestQuote: "Request Quote",
  },
  productDetail: {
    back: "Back to products",
    keyAdvantages: "Key advantages",
    specs: "Technical specifications",
    specsNote: "Values may vary by sub-model. Confirm final datasheet before mass production.",
    applications: "Application scenarios",
    quoteTitle: "Request a Bulk Quote",
    quoteDesc: "Pricing, lead time, and datasheet — tailored to your BOM.",
    quoteMobile: "Request Bulk Quote",
  },
  form: {
    title: "Request a Bulk Quote",
    description:
      "Submit your RFQ — our technical sales team typically responds within 12 hours on business days.",
    fullName: "Full Name",
    businessEmail: "Business Email",
    company: "Company / Organization Name",
    targetProduct: "Target Product",
    productGeneral: "General inquiry / multiple SKUs",
    orderQuantity: "Estimated Order Quantity",
    quantityPlaceholder: "Select quantity range",
    message: "Message",
    messagePlaceholder:
      "Technical requirements, interface, certifications, destination, timeline…",
    submit: "Submit Inquiry",
    sending: "Sending…",
    quantities: {
      sample: "Sample (1–5 pcs)",
      mid: "10–50 pcs",
      bulk: "500+ pcs",
    },
    contactTitle: "B2B Contact & RFQ",
    contactDescription:
      "Fields marked with * are required. We typically respond within 12 hours on business days.",
  },
  contactPage: {
    label: "Contact",
    title: "B2B inquiry & bulk quotation",
    subtitle:
      "For engineers, procurement managers, and lab researchers — include interface, quantity, destination country, and certification needs.",
    email: "Email",
    response: "Response time",
    responseValue: "Within 12 hours on business days (GMT+8 core team)",
    languages: "Languages",
    languagesValue: "English, 中文, Deutsch, Français, Español, العربية, 日本語, Português",
  },
  aboutPage: {
    label: "About us",
    title: "Hard-tech sourcing with engineering-first communication",
    subtitle:
      "RoboCore Supply helps overseas buyers access Chinese precision hardware without losing technical clarity. We speak torque density, fieldbus timing, and sensor hysteresis — not just MOQ spreadsheets.",
    pillars: [
      {
        title: "Quality control",
        body: "Incoming inspection against datasheets, sample golden units, and batch consistency checks before export packing.",
      },
      {
        title: "Verified supply chain",
        body: "Long-term factory relationships for actuators, optics, MEMS, and pressure cores — with alternate sourcing when lead times shift.",
      },
      {
        title: "OEM / ODM",
        body: "Custom connectors, branding, harnesses, firmware parameters, and packaging for integrators and education platforms.",
      },
      {
        title: "Global B2B fulfillment",
        body: "Commercial invoices, HS codes, air express, and DAP/FOB terms for EU, North America, and Middle East destinations.",
      },
    ],
    ctaTitle: "Ready to validate a supplier for production?",
    ctaBody:
      "Share your target spec, annual volume, and compliance needs. We will propose matched SKUs, sample plans, and a quotation path aligned with your procurement process.",
    ctaButton: "Start B2B Inquiry",
  },
  settingsPage: {
    label: "Settings",
    title: "Site preferences",
    subtitle: "Choose your display language. Product datasheets remain available in English for engineering accuracy.",
    languageSection: "Display language",
    languageHint: "Saved in this browser. Switch anytime from the navigation bar.",
    currentLanguage: "Current language",
    reloadHint: "If pages look stale after switching language, refresh once (Ctrl+F5).",
  },
  categories: {
    "Robot Actuators": "Robot Actuators",
    "Laser Sensors": "Laser Sensors",
    "Industrial Transmitters": "Industrial Transmitters",
    Motors: "Motors",
  },
  productItems: {
    "ti5-cra-joint-module": {
      name: "Ti5 CRA Series Integrated Joint Actuator",
      shortName: "Ti5 CRA Joint Module",
      tagline:
        "High torque density humanoid joint with integrated absolute encoder and CAN/Ethernet fieldbus.",
    },
    "ld60-s1r-laser-distance": {
      name: "LD60-S1R Industrial Laser Distance Module",
      shortName: "LD60-S1R Laser Sensor",
      tagline:
        "0.03–60 m laser ranging, 1 mm resolution, TTL/RS485/RS232 in a miniaturized housing.",
    },
    "vemsee-inclinometer-gyro": {
      name: "VEMSEE High-Precision Inclinometer / 3-Axis Gyro",
      shortName: "VEMSEE Inclinometer",
      tagline:
        "IP65 RS485 attitude sensor with Kalman filtering for dynamic industrial motion.",
    },
    "precision-pressure-transmitter": {
      name: "0.1-Class Industrial Pressure Transmitter",
      shortName: "0.1-Class Pressure Sensor",
      tagline:
        "0.1 accuracy class pressure transmitter for hydraulic and pneumatic monitoring.",
    },
    "uv2208-kv1890-motor": {
      name: "UV2208 Outer-Rotor Brushless Motor (KV1890)",
      shortName: "UV2208 KV1890 Motor",
      tagline:
        "Micro outer-rotor BLDC (KV1890) for lightweight UAVs and compact robotic drives.",
    },
  },
  toast: {
    inquirySuccess:
      "Thank you! Our technical sales team will reply within 12 hours.",
  },
};

export default en;
