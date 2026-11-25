import {
  GraduationCap,
  HardHat,
  Landmark,
  Plane,
  QrCode,
  Shirt,
  Wheat,
  Wrench,
  type LucideIcon,
} from "lucide-react";

// Presentation only; content lives in src/content/sectors.ts.
export const sectorIcons: Record<string, LucideIcon> = {
  "food-and-beverage": Wheat,
  "leather-and-garments": Shirt,
  "metal-and-engineering": Wrench,
  construction: HardHat,
  "aerospace-and-aviation": Plane,
  "banking-and-finance": Landmark,
  "brands-and-exporters": QrCode,
  "schools-and-colleges": GraduationCap,
};
