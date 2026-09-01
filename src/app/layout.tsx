import type { Metadata } from "next";
import { Oswald, Anton, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["300","400","500","600","700"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: ["400"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300","400","500","600","700"] });

export const metadata: Metadata = {
  title: "IRON & OAK | Barbershop — Cuts. Beards. Straight Razor.",
  description: "IRON & OAK is a loft-industrial barbershop in Moscow. Sharp haircuts, beard sculpting, hot-towel straight-razor shaves. Book your chair online.",
  keywords: ["barbershop","Moscow barbershop","men's haircut","beard trim","straight razor shave","loft barbershop","IRON & OAK"],
  openGraph: {
    title: "IRON & OAK | Barbershop",
    description: "Sharp cuts. Sculpted beards. Straight-razor shaves. A loft-industrial barbershop built for men with character.",
    url: "https://ironandoak.barbershop",
    siteName: "IRON & OAK Barbershop",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: "IRON & OAK | Barbershop", description: "Sharp cuts. Sculpted beards. Straight-razor shaves." },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "HairSalon",
  name: "IRON & OAK",
  description: "Loft-industrial barbershop in Moscow. Sharp haircuts, beard sculpting, hot-towel straight-razor shaves.",
  url: "https://ironandoak.barbershop", telephone: "+7-495-234-56-78", priceRange: "₽₽₽",
  address: { "@type": "PostalAddress", streetAddress: "Krasnogvardeyskaya Passage, 12, bld 3", addressLocality: "Moscow", addressCountry: "RU" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "10:00", closes: "22:00" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "312" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${oswald.variable} ${anton.variable} ${inter.variable} antialiased bg-ink text-cream font-sans`}>
        {children}
      </body>
    </html>
  );
}
