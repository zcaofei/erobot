import type { Dictionary } from "@/i18n/types";
import en from "@/i18n/dictionaries/en";

const ja: Dictionary = {
  ...en,
  nav: {
    home: "ホーム",
    products: "製品",
    about: "会社概要",
    contact: "お問い合わせ",
    settings: "設定",
    requestQuote: "見積依頼",
    language: "言語",
  },
  footer: {
    ...en.footer,
    tagline:
      "高精度ロボットアクチュエータ、センサー、自動化部品 — 中国の認証メーカーから EU・北米・中東の B2B バイヤーへ直結。",
    quickLinks: "クイックリンク",
    catalog: "製品カタログ",
    qualityOem: "品質と OEM",
    inquiry: "B2B お問い合わせ",
    emailHint: "ビジネスメールに変更してください",
    locations: "深圳 · 上海 · 世界向け FOB / DAP 輸出",
    rights: "© 2026 RoboCore Supply. All rights reserved.",
  },
  home: {
    ...en.home,
    badge: "B2B · ロボtics · 産業センサー",
    title: "中国発・精密ロボット＆センサー部品の調達パートナー",
    browseCatalog: "カタログを見る",
    featuredLabel: "注目製品",
    featuredTitle: "V1 製品ラインナップ",
    viewAll: "すべての製品 →",
    rfqLabel: "クイック RFQ",
    rfqTitle: "BOM または仕様書を送信",
  },
  productsPage: {
    label: "カタログ",
    title: "ロボtics・自動化向け精密部品",
    subtitle: "カテゴリで絞り込み、仕様を確認し、量産見積を依頼。",
    filterAll: "すべて",
  },
  productCard: { viewSpecs: "仕様", requestQuote: "見積" },
  productDetail: {
    back: "製品一覧へ",
    keyAdvantages: "主な特長",
    specs: "技術仕様",
    specsNote: "サブモデルにより異なります。量産前に datasheet を確認してください。",
    applications: "用途",
    quoteTitle: "量産見積",
    quoteDesc: "BOM に合わせた価格・リードタイム・datasheet。",
    quoteMobile: "量産見積",
  },
  form: {
    ...en.form,
    fullName: "氏名",
    businessEmail: "ビジネスメール",
    company: "会社 / 組織名",
    targetProduct: "対象製品",
    orderQuantity: "予定数量",
    submit: "送信",
    quantities: {
      sample: "サンプル (1–5)",
      mid: "10–50",
      bulk: "500+",
    },
  },
  settingsPage: {
    label: "設定",
    title: "サイト設定",
    subtitle: "表示言語を選択。技術 datasheet は英語のままです。",
    languageSection: "表示言語",
    languageHint: "このブラウザに保存されます。",
    currentLanguage: "現在の言語",
    reloadHint: "切り替え後に表示が古い場合は更新 (Ctrl+F5)。",
  },
  toast: {
    inquirySuccess: "ありがとうございます。技術営業が12時間以内に返信します。",
  },
};

export default ja;
