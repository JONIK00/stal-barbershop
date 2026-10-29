import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Разрешить запросы из превью-панели сандбокса (шрифты, HMR и т.д.)
  allowedDevOrigins: ["*.space-z.ai", "localhost"],
  // STATIC_EXPORT=1 — статическая сборка (output/export) для дешёвых хостингов статики
  ...(process.env.STATIC_EXPORT === "1" ? { output: "export" as const, images: { unoptimized: true } } : {}),
};

export default nextConfig;
