import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Разрешить запросы из превью-панели сандбокса (шрифты, HMR и т.д.)
  allowedDevOrigins: ["*.space-z.ai", "localhost"],
};

export default nextConfig;
