import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ironandoak.barbershop";
  const now = new Date();
  return ["", "#about", "#services", "#masters", "#work", "#booking", "#reviews", "#faq", "#contacts"].map((hash) => ({ url: `${base}/${hash}`, lastModified: now, changeFrequency: "weekly" as const, priority: hash === "" ? 1 : 0.8 }));
}
