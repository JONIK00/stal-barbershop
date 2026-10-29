import type { MetadataRoute } from "next";

// Требуется для output: "export" (статическая сборка) —
// маршрут должен быть предсказуемо статичным в обоих режимах сборки.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: заменить на постоянный домен после переезда с vercel.app
  const base = "https://stal-barbershop.vercel.app";
  const now = new Date();
  return ["", "#about", "#services", "#masters", "#work", "#booking", "#reviews", "#faq", "#contacts"].map((hash) => ({ url: `${base}/${hash}`, lastModified: now, changeFrequency: "weekly" as const, priority: hash === "" ? 1 : 0.8 }));
}
