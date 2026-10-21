import type { Dictionary } from "@/i18n/types";
import en from "@/i18n/dictionaries/en";

const zh: Dictionary = {
  ...en,
  nav: {
    home: "首页",
    products: "产品",
    about: "关于我们",
    contact: "联系询盘",
    settings: "设置",
    requestQuote: "获取报价",
    language: "语言",
  },
  footer: {
    tagline:
      "高精度机器人关节、传感器与自动化零部件 — 直连中国认证工厂，服务欧美及中东 B2B 采购商。",
    quickLinks: "快速链接",
    catalog: "产品目录",
    qualityOem: "质量与 OEM",
    inquiry: "B2B 询盘",
    emailHint: "请替换为您的商务邮箱",
    locations: "深圳 · 上海 · 全球 FOB / DAP 出口",
    rights: "© 2026 RoboCore Supply. 保留所有权利。",
  },
  home: {
    badge: "B2B · 机器人 · 工业传感器",
    title: "来自中国的精密机器人与传感器零部件采购伙伴",
    subtitle:
      "人形关节模组、激光测距、倾角传感器、压力变送器与微型无刷电机 — 面向欧洲、北美与中东的工程师与采购团队。",
    browseCatalog: "浏览目录",
    featuredLabel: "精选硬件",
    featuredTitle: "V1 产品阵容",
    featuredDesc: "五款高精度 SKU，适用于人形机器人、移动机器人、无人机与工业自动化项目。",
    viewAll: "查看全部产品 →",
    rfqLabel: "快速询盘",
    rfqTitle: "发送 BOM 或规格书",
    rfqDesc:
      "支持高校实验室、集成商与 OEM 团队，提供多语言技术支持、合规开票与量产稳定供货。",
    advantages: [
      { title: "工厂直供价", desc: "减少中间环节 — 报价透明，匹配 OEM 起订量。" },
      { title: "严格质检与追溯", desc: "来料检验、批次记录、与 datasheet 一致的参数。" },
      { title: "快速空运", desc: "欧/美/海湾国家快递与空运，配套出口单证。" },
      { title: "样品与定制", desc: "工程样品、标签固件及 OEM/ODM 方案讨论。" },
    ],
  },
  process: {
    label: "B2B 采购流程",
    title: "从 RFQ 到批量发货",
    steps: [
      { title: "询盘", desc: "提交规格、数量与目的地，1 个工作日内回复。" },
      { title: "报价", desc: "透明单价、交期、贸易术语与付款方式。" },
      { title: "样品验证", desc: "工程样品、datasheet 与批次一致性检验。" },
      { title: "批量发货", desc: "空运/快递及出口文件支持。" },
    ],
  },
  productsPage: {
    label: "目录",
    title: "机器人与自动化精密零部件",
    subtitle: "按分类筛选，查看技术参数、应用场景并提交批量报价。",
    filterAll: "全部产品",
  },
  productCard: {
    viewSpecs: "查看参数",
    requestQuote: "获取报价",
  },
  productDetail: {
    back: "返回产品列表",
    keyAdvantages: "核心优势",
    specs: "技术规格",
    specsNote: "参数因子型号而异，量产前请确认最终 datasheet。",
    applications: "应用场景",
    quoteTitle: "批量报价询盘",
    quoteDesc: "根据您的 BOM 提供价格、交期与 datasheet。",
    quoteMobile: "批量报价",
  },
  form: {
    title: "批量报价询盘",
    description: "提交 RFQ — 工作日通常 12 小时内由技术销售回复。",
    fullName: "姓名",
    businessEmail: "企业邮箱",
    company: "公司 / 机构名称",
    targetProduct: "目标产品",
    productGeneral: "综合询盘 / 多款 SKU",
    orderQuantity: "预计采购量",
    quantityPlaceholder: "选择数量区间",
    message: "留言",
    messagePlaceholder: "技术要求、接口、认证、目的地、时间计划…",
    submit: "提交询盘",
    sending: "提交中…",
    quantities: {
      sample: "样品 (1–5 件)",
      mid: "10–50 件",
      bulk: "500 件以上",
    },
    contactTitle: "B2B 联系与 RFQ",
    contactDescription: "带 * 为必填。工作日通常 12 小时内回复。",
  },
  contactPage: {
    label: "联系",
    title: "B2B 询盘与批量报价",
    subtitle: "面向工程师、采购与实验室 — 请说明接口、数量、目的国与认证需求。",
    email: "邮箱",
    response: "响应时间",
    responseValue: "工作日 12 小时内（GMT+8 核心团队）",
    languages: "支持语言",
    languagesValue: "英语、中文、德语、法语、西语、阿拉伯语、日语、葡萄牙语",
  },
  aboutPage: {
    label: "关于我们",
    title: "硬科技 sourcing，工程沟通优先",
    subtitle:
      "RoboCore Supply 帮助海外买家获取中国精密硬件，同时保持技术表述清晰 — 谈扭矩密度与总线时序，而不只是 MOQ 表格。",
    pillars: [
      { title: "质量管控", body: "按 datasheet 来料检验、黄金样品与出口前批次一致性检查。" },
      { title: "认证供应链", body: "关节、光学、MEMS、压力等长期工厂合作，交期波动时可切换货源。" },
      { title: "OEM / ODM", body: "定制连接器、品牌、线束、固件参数与包装。" },
      { title: "全球 B2B 履约", body: "形式发票、HS 编码、空运快递，DAP/FOB 至欧美中东。" },
    ],
    ctaTitle: "准备验证量产供应商？",
    ctaBody: "告知目标规格、年用量与合规要求，我们将匹配 SKU、样品计划与报价路径。",
    ctaButton: "开始 B2B 询盘",
  },
  settingsPage: {
    label: "设置",
    title: "站点偏好",
    subtitle: "选择界面显示语言。工程 datasheet 仍以英文为准以保证参数准确。",
    languageSection: "显示语言",
    languageHint: "保存在本浏览器，也可在导航栏随时切换。",
    currentLanguage: "当前语言",
    reloadHint: "切换语言后若页面未更新，请刷新一次（Ctrl+F5）。",
  },
  categories: {
    "Robot Actuators": "机器人关节/执行器",
    "Laser Sensors": "激光传感器",
    "Industrial Transmitters": "工业变送器",
    Motors: "电机",
  },
  productItems: {
    "ti5-cra-joint-module": {
      name: "Ti5 CRA 系列一体化关节模组",
      shortName: "Ti5 CRA 关节模组",
      tagline: "高扭矩密度人形关节，集成绝对值编码器，支持 CAN/以太网总线。",
    },
    "ld60-s1r-laser-distance": {
      name: "LD60-S1R 工业激光测距模组",
      shortName: "LD60-S1R 激光传感器",
      tagline: "0.03–60 m 测距，1 mm 分辨率，TTL/RS485/RS232，微型化结构。",
    },
    "vemsee-inclinometer-gyro": {
      name: "VEMSEE 高精度倾角仪 / 三轴陀螺",
      shortName: "VEMSEE 倾角传感器",
      tagline: "IP65 RS485 姿态传感器，卡尔曼滤波，适用于动态工业场景。",
    },
    "precision-pressure-transmitter": {
      name: "0.1 级工业压力变送器",
      shortName: "0.1 级压力传感器",
      tagline: "液压与气动系统监测，0.1 级精度，4–20 mA / 0–10 V 输出。",
    },
    "uv2208-kv1890-motor": {
      name: "UV2208 外转子无刷电机 (KV1890)",
      shortName: "UV2208 KV1890 电机",
      tagline: "轻量化外转子 BLDC，适用于无人机与紧凑机械臂驱动。",
    },
  },
  toast: {
    inquirySuccess: "感谢提交！我们的技术销售团队将在 12 小时内回复。",
  },
};

export default zh;
