import { ScissorsIcon, BeardIcon, ClipperIcon, CombIcon, RazorIcon, MustacheIcon, BulbIcon } from "./icons";

export const site = {
  name: "СТАЛЬ",
  tagline: "Стрижки с характером.",
  city: "Москва",
  address: "Москва, улица Михайлова, 39",
  addressShort: "ул. Михайлова, 39",
  phone: "+7 925 038-75-74",
  phoneHref: "tel:+79250387574",
  hours: "Пн — Вс · 10:00 — 22:00",
  hoursShort: "10:00 — 22:00",
  email: "chair@stal.barbershop",
  socials: [
    { label: "Instagram", href: "https://instagram.com", handle: "@stal.barber" },
    { label: "Telegram", href: "https://t.me", handle: "@stal_barber" },
    { label: "VK", href: "https://vk.com", handle: "vk.com/stal_barber" },
  ],
  mapHref: "https://yandex.ru/maps/?text=Москва%20улица%20Михайлова%2039",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Masters", href: "#masters" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacts", href: "#contacts" },
] as const;

export const heroStats = [
  { value: "12", label: "Years sharp" },
  { value: "4", label: "Master barbers" },
  { value: "8", label: "Services on the board" },
  { value: "4.9", label: "Avg. rating · 312 reviews" },
] as const;

export const tickerItems = ["WALK-INS WELCOME","MON–SUN 10:00–22:00","STRAIGHT-RAZOR SHAVES","BOOK ONLINE — FIRST CHAIR 10:00","HOT TOWEL · LEATHER · BRASS","+7 495 234-56-78"] as const;

export type Service = { no: string; name: string; desc: string; duration: string; price: string; icon: typeof ScissorsIcon; popular?: boolean };

export const services: Service[] = [
  { no: "01", name: "Стрижка Под Насадку (одна Насадка)", desc: "", duration: "15 мин", price: "500 ₽", icon: ClipperIcon },
  { no: "02", name: "Моделирование Бороды", desc: "", duration: "30 мин", price: "800 ₽", icon: BeardIcon },
  { no: "03", name: "Опасное Бритьё", desc: "", duration: "30 мин", price: "800 ₽", icon: RazorIcon, popular: true },
  { no: "04", name: "Бритьё Шейвером", desc: "", duration: "15 мин", price: "700 ₽", icon: RazorIcon },
];

export type Master = { name: string; nickname: string; specialty: string; experience: string; image: string; alt: string; social: { label: string; href: string; handle: string }; bio: string; quote: string; signatureCuts: string[]; stats: { label: string; value: string }[] };

export const masters: Master[] = [
  { name: "Шах", nickname: "Шах", specialty: "Мастер-барбер", experience: "", image: "/images/master-1.png", alt: "Портрет мастера-барбера Шаха", social: { label: "Instagram", href: "https://instagram.com", handle: "@shah.barber" }, bio: "", quote: "", signatureCuts: [], stats: [] },
];

export type Work = { image: string; title: string; category: "Cuts" | "Beards" | "Shaves"; alt: string };
export const works: Work[] = [
  { image: "/images/work-1.png", title: "Skin Fade Undercut", category: "Cuts", alt: "Skin fade undercut haircut, side profile" },
  { image: "/images/work-2.png", title: "Sculpted Full Beard", category: "Beards", alt: "Sculpted full beard trim, side profile" },
  { image: "/images/work-3.png", title: "Slicked Pompadour", category: "Cuts", alt: "Slicked-back pompadour hairstyle, back view" },
  { image: "/images/work-4.png", title: "Straight-Razor Shave", category: "Shaves", alt: "Clean straight-razor shave result" },
  { image: "/images/work-5.png", title: "Textured Crop + Beard", category: "Cuts", alt: "Modern textured crop haircut with beard" },
  { image: "/images/work-6.png", title: "Gentleman's Side Part", category: "Cuts", alt: "Sharp side-part gentleman's haircut with mustache" },
];
export const workFilters = ["All", "Cuts", "Beards", "Shaves"] as const;

export type Review = { name: string; role: string; rating: number; text: string; date: string };
export const reviews: Review[] = [
  { name: "Andrey K.", role: "Regular · 2 yrs", rating: 5, text: "Best fade I've had in Moscow. Dmitri doesn't talk unless you talk first. Respect. Walk out, line still clean three weeks later.", date: "March 2025" },
  { name: "Sergei M.", role: "Straight-razor regular", rating: 5, text: "Straight-razor shave with hot towels. Walked out feeling like a new man. Worth every ruble. Levin knows his blade.", date: "February 2025" },
  { name: "Ivan P.", role: "First visit", rating: 5, text: "The room alone is worth the trip. Concrete, leather, old-school chairs. Cuts are razor-sharp. Booked my next one on the way out.", date: "February 2025" },
  { name: "Nikolay R.", role: "Regular · 1 yr", rating: 4, text: "Solid work, cool atmosphere. Online booking was painless. Took one star for the wait once — scheduling's been tighter since.", date: "January 2025" },
  { name: "Dmitry V.", role: "Beard sculpting", rating: 5, text: "Mark is a wizard with the blade. Three weeks and the line still holds. I'm not going anywhere else. The coffee's not bad either.", date: "December 2024" },
];

export type Faq = { q: string; a: string; category: "Booking" | "The chair" | "Payment" };
export const faqs: Faq[] = [
  { q: "Do I need to book, or can I walk in?", a: "Walk-ins are welcome, but the chair fills fast — especially evenings and weekends. Booking ahead means you pick your master and your slot. No waiting, no guessing.", category: "Booking" },
  { q: "How early should I arrive?", a: "Five minutes is plenty. Ten if it's your first visit — we'll get your details down and talk through what you want. Late is fine up to 10 minutes; after that we may need to shorten the service.", category: "Booking" },
  { q: "What if I'm running late or need to cancel?", a: "Text or call us. We hold the chair for 10 minutes. Cancellations are free up to 4 hours before your slot — after that we ask for half the service value. We're reasonable people, talk to us.", category: "Booking" },
  { q: "How long does a cut take?", a: "A scissor cut is 45 minutes. Cut and beard together, 70. The Royal straight-razor shave needs the full 45 — you don't rush a blade. Add 15 if you want a wash and a coffee first.", category: "The chair" },
  { q: "Can I bring a photo of what I want?", a: "Yes — and we'd rather you did. A photo beats ten minutes of describing. But we'll also tell you straight if the cut won't work with your hair. That's our job.", category: "The chair" },
  { q: "Do you cut kids' hair?", a: "We do — under 12s, 30 minutes. Yan handles most of them. Bring a phone or a juice, we bring the patience. First cut's always a little slow, that's normal.", category: "The chair" },
  { q: "What payment do you take?", a: "Card, cash, Apple/Google Pay, and QR transfers. We don't do crypto. Tips are welcome but never expected — cash or card, your call.", category: "Payment" },
  { q: "Do you sell product?", a: "A short rack — pomades, beard oil, sea salt spray. The stuff we actually use. We'll tell you which one fits your hair, not the most expensive one.", category: "Payment" },
];

export const messengers = [
  { label: "WhatsApp", href: "https://wa.me/79250387574?text=Здравствуйте!%20Хочу%20записаться.", handle: "+7 925 038-75-74" },
  { label: "Telegram", href: "https://t.me/stal_barber?text=Здравствуйте!%20Хочу%20записаться.", handle: "@stal_barber" },
] as const;

export { BulbIcon };
