import type { MetadataRoute } from "next";

// Требуется для output: "export" (статическая сборка) —
// маршрут должен быть предсказуемо статичным в обоих режимах сборки.
export const dynamic = "force-static";

// Технический домен Timeweb (сменить при покупке собственного домена)
const SITE_URL = "https://jonik00-stal-barbershop-bf50.twc1.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const now = new Date();
  return ["", "#about", "#services", "#masters", "#work", "#booking", "#reviews", "#faq", "#contacts"].map((hash) => ({ url: `${base}/${hash}`, lastModified: now, changeFrequency: "weekly" as const, priority: hash === "" ? 1 : 0.8 }));
}
