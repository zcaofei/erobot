export type ProductCategory =
  | "Robot Actuators"
  | "Laser Sensors"
  | "Industrial Transmitters"
  | "Motors";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  tagline: string;
  highlights: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  /** Public path — replace with real product photos when available */
  image: string;
  imageAlt: string;
  imageGradient: string;
};

export const categories: ProductCategory[] = [
  "Robot Actuators",
  "Laser Sensors",
  "Industrial Transmitters",
  "Motors",
];

export const products: Product[] = [
  {
    slug: "ti5-cra-joint-module",
    name: "Ti5 CRA Series Integrated Joint Actuator",
    shortName: "Ti5 CRA Joint Module",
    category: "Robot Actuators",
    tagline:
      "High torque density humanoid joint with integrated absolute encoder and CAN/Ethernet fieldbus.",
    highlights: [
      "High torque density for compact humanoid limbs",
      "Integrated absolute value encoder",
      "CAN / Ethernet bus support",
      "Factory-direct pricing with QC traceability",
    ],
    applications: [
      "Humanoid Robots",
      "Collaborative Arms",
      "Research Platforms",
      "Exoskeleton Prototypes",
    ],
    specs: [
      { label: "Series", value: "Ti5 CRA" },
      { label: "Bus Interface", value: "CAN, Ethernet (model dependent)" },
      { label: "Encoder", value: "Absolute, integrated" },
      { label: "Operating Temp.", value: "-10°C ~ +50°C" },
      { label: "Supply Voltage", value: "24–48 V DC (typical)" },
      { label: "Form Factor", value: "All-in-one joint module" },
    ],
    image: "/products/ti5-cra-joint-module.svg",
    imageAlt: "Ti5 CRA integrated robot joint actuator module placeholder",
    imageGradient: "from-slate-800 via-blue-900 to-slate-900",
  },
  {
    slug: "ld60-s1r-laser-distance",
    name: "LD60-S1R Industrial Laser Distance Module",
    shortName: "LD60-S1R Laser Sensor",
    category: "Laser Sensors",
    tagline:
      "0.03–60 m laser ranging, 1 mm resolution, TTL/RS485/RS232 in a miniaturized housing.",
    highlights: [
      "Measurement range 0.03–60 m",
      "1 mm resolution",
      "TTL / RS485 / RS232 interfaces",
      "Miniaturized for AGV and robotics integration",
    ],
    applications: [
      "AGV / AMR Navigation",
      "Stack Height Monitoring",
      "Industrial Automation",
      "UAV Altimetry",
    ],
    specs: [
      { label: "Model", value: "LD60-S1R series" },
      { label: "Range", value: "0.03 – 60 m" },
      { label: "Resolution", value: "1 mm" },
      { label: "Interface", value: "TTL, RS485, RS232" },
      { label: "Operating Temp.", value: "-10°C ~ +50°C" },
      { label: "Power Supply", value: "5 V DC (typical)" },
    ],
    image: "/products/ld60-s1r-laser-distance.svg",
    imageAlt: "LD60-S1R laser distance sensor module placeholder",
    imageGradient: "from-slate-900 via-cyan-900 to-slate-800",
  },
  {
    slug: "vemsee-inclinometer-gyro",
    name: "VEMSEE High-Precision Inclinometer / 3-Axis Gyro",
    shortName: "VEMSEE Inclinometer",
    category: "Industrial Transmitters",
    tagline:
      "IP65 RS485 attitude sensor with Kalman filtering for dynamic industrial motion.",
    highlights: [
      "IP65 dust and water resistance",
      "Kalman filter fusion algorithm",
      "RS485 industrial fieldbus",
      "Dynamic high-precision tilt measurement",
    ],
    applications: [
      "Mobile Machinery",
      "Crane & Hoist Safety",
      "AGV / AMR",
      "Structural Monitoring",
    ],
    specs: [
      { label: "Brand / Series", value: "VEMSEE" },
      { label: "Interface", value: "RS485" },
      { label: "Protection", value: "IP65" },
      { label: "Algorithm", value: "Kalman filter fusion" },
      { label: "Axes", value: "3-axis gyro + inclinometer" },
      { label: "Operating Temp.", value: "-40°C ~ +85°C (typical)" },
    ],
    image: "/products/vemsee-inclinometer-gyro.svg",
    imageAlt: "VEMSEE industrial inclinometer and gyroscope placeholder",
    imageGradient: "from-slate-800 via-indigo-900 to-slate-900",
  },
  {
    slug: "precision-pressure-transmitter",
    name: "0.1-Class Industrial Pressure Transmitter",
    shortName: "0.1-Class Pressure Sensor",
    category: "Industrial Transmitters",
    tagline:
      "0.1 accuracy class pressure transmitter for hydraulic and pneumatic monitoring.",
    highlights: [
      "0.1 accuracy class (series rated)",
      "4–20 mA / 0–10 V signal output",
      "Hydraulic & air system ready",
      "Bulk OEM pricing available",
    ],
    applications: [
      "Hydraulic Systems",
      "Compressed Air Lines",
      "Process Automation",
      "Test Benches",
    ],
    specs: [
      { label: "Accuracy", value: "0.1 class (model dependent)" },
      { label: "Output", value: "4–20 mA, 0–10 V" },
      { label: "Pressure Range", value: "Custom OEM ranges" },
      { label: "Media", value: "Liquid / gas (model dependent)" },
      { label: "Operating Temp.", value: "-20°C ~ +80°C (typical)" },
      { label: "Connection", value: "G1/4, NPT, OEM thread" },
    ],
    image: "/products/precision-pressure-transmitter.svg",
    imageAlt: "Industrial pressure transmitter placeholder",
    imageGradient: "from-slate-900 via-blue-950 to-slate-800",
  },
  {
    slug: "uv2208-kv1890-motor",
    name: "UV2208 Outer-Rotor Brushless Motor (KV1890)",
    shortName: "UV2208 KV1890 Motor",
    category: "Motors",
    tagline:
      "Micro outer-rotor BLDC (KV1890) for lightweight UAVs and compact robotic drives.",
    highlights: [
      "Outer-rotor BLDC architecture",
      "KV1890 high-speed variant",
      "Lightweight for UAV payloads",
      "Sample and bulk MOQ support",
    ],
    applications: [
      "UAV Propulsion",
      "Compact Robotic Joints",
      "Geek / Research Arms",
      "Portable Automation",
    ],
    specs: [
      { label: "Model", value: "UV2208" },
      { label: "KV Rating", value: "1890 KV" },
      { label: "Type", value: "Outer-rotor brushless DC" },
      { label: "Operating Temp.", value: "-10°C ~ +60°C" },
      { label: "Shaft / Mount", value: "UV series standard (confirm drawing)" },
      { label: "Lead Time", value: "Sample 3–7 days; bulk per PO" },
    ],
    image: "/products/uv2208-kv1890-motor.svg",
    imageAlt: "UV2208 KV1890 outer rotor brushless motor placeholder",
    imageGradient: "from-slate-800 via-slate-700 to-blue-900",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory | "all") {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
