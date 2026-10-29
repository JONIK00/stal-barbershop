import type { Metadata } from "next";
import { Oswald, Anton, Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/barbershop/i18n";

const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin", "cyrillic"], weight: ["300","400","500","600","700"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: ["400"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin", "cyrillic"], weight: ["300","400","500","600","700"] });

// Технический домен Timeweb (сменить при покупке собственного домена)
const SITE_URL = "https://jonik00-stal-barbershop-bf50.twc1.net";

export const metadata: Metadata = {
  title: "СТАЛЬ | Мужские стрижки — Бороды. Опасная бритва.",
  description: "СТАЛЬ — мужские стрижки, оформление бороды, бритьё опасной бритвой. Москва, ул. Михайлова, 39. Запишись онлайн.",
  keywords: ["мужская стрижка","стрижка бороды","оформление бороды","бритьё опасной бритвой","СТАЛЬ"],
  openGraph: {
    title: "СТАЛЬ | Мужские стрижки",
    description: "Стрижки с характером. Оформление бороды. Бритьё опасной бритвой.",
    url: SITE_URL,
    siteName: "СТАЛЬ",
    type: "website",
    locale: "ru_RU",
  },
  twitter: { card: "summary_large_image", title: "СТАЛЬ | Мужские стрижки", description: "Стрижки с характером. Бороды. Бритьё опасной бритвой." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "HairSalon",
  name: "СТАЛЬ",
  description: "Мужские стрижки, оформление бороды, бритьё опасной бритвой.",
  url: SITE_URL, telephone: "+7-925-038-75-74", priceRange: "₽₽₽",
  address: { "@type": "PostalAddress", streetAddress: "улица Михайлова, 39", addressLocality: "Москва", addressCountry: "RU" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "10:00", closes: "22:00" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/images/hero-bg.webp" as="image" fetchPriority="high" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${oswald.variable} ${anton.variable} ${inter.variable} antialiased bg-ink text-cream font-sans`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
