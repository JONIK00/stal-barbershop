import type { Metadata } from "next";
import { Oswald, Anton, Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/barbershop/i18n";

const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin", "cyrillic"], weight: ["300","400","500","600","700"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: ["400"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin", "cyrillic"], weight: ["300","400","500","600","700"] });

export const metadata: Metadata = {
  title: "IRON & OAK | Барбершоп — Стрижки. Бороды. Опасная бритва.",
  description: "IRON & OAK — лофт-барбершоп в Москве. Чёткие стрижки, оформление бороды, бритьё опасной бритвой с горячим полотенцем. Запишись онлайн.",
  keywords: ["барбершоп","барбершоп Москва","мужская стрижка","стрижка бороды","бритьё опасной бритвой","лофт барбершоп","IRON & OAK"],
  openGraph: {
    title: "IRON & OAK | Барбершоп",
    description: "Стрижки с характером. Оформление бороды. Бритьё опасной бритвой. Лофт-барбершоп для мужчин с характером.",
    url: "https://ironandoak.barbershop",
    siteName: "IRON & OAK Барбершоп",
    type: "website",
    locale: "ru_RU",
  },
  twitter: { card: "summary_large_image", title: "IRON & OAK | Барбершоп", description: "Стрижки с характером. Бороды. Бритьё опасной бритвой." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "HairSalon",
  name: "IRON & OAK",
  description: "Лофт-барбершоп в Москве. Чёткие стрижки, оформление бороды, бритьё опасной бритвой с горячим полотенцем.",
  url: "https://ironandoak.barbershop", telephone: "+7-495-234-56-78", priceRange: "₽₽₽",
  address: { "@type": "PostalAddress", streetAddress: "Красногвардейский проезд, 12, стр 3", addressLocality: "Москва", addressCountry: "RU" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "10:00", closes: "22:00" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "312" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${oswald.variable} ${anton.variable} ${inter.variable} antialiased bg-ink text-cream font-sans`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
