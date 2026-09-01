"use client";

import * as React from "react";
import { useScrollReveal } from "@/components/barbershop/use-reveal";
import { site, nav, heroStats, tickerItems, services, masters, works, workFilters, reviews, faqs, messengers } from "@/components/barbershop/data";
import { SectionShell, SectionHeading, Eyebrow, RivetDivider } from "@/components/barbershop/shared";
import {
  BrandMark, MenuIcon, CloseIcon, PhoneIcon, ClockIcon, ArrowIcon, PinIcon, BulbIcon,
  RazorIcon, ScissorsIcon, ClipperIcon, CombIcon, MustacheIcon, BeardIcon,
  InstagramIcon, TelegramIcon, VkIcon, StarIcon, ArrowUpIcon, WhatsappIcon,
} from "@/components/barbershop/icons";

/* ============ SCROLL PROGRESS ============ */
function ScrollProgress() {
  const [pct, setPct] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement;
      const h = d.scrollHeight - d.clientHeight;
      setPct(h > 0 ? Math.min(100, (d.scrollTop / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[55] h-[3px]" aria-hidden="true">
      <div className="h-full bg-gradient-to-r from-rust via-brass to-rust shadow-[0_0_8px_rgba(181,80,46,0.6)] transition-[width] duration-75" style={{ width: `${pct}%` }} />
    </div>
  );
}

/* ============ HEADER ============ */
function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="relative overflow-hidden border-b border-rust/30 bg-rust/10">
      <div className="marquee py-1.5">
        {[0, 1].map((t) => (
          <div key={t} className="marquee__track" aria-hidden={t === 1}>
            {items.map((it, i) => (
              <span key={i} className="flex items-center gap-3 font-display text-[0.68rem] uppercase tracking-[0.25em] text-cream/70">
                <span className="bulb-dot" aria-hidden="true" />{it}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Ticker />
      <div className={`border-b transition-all duration-300 ${scrolled ? "border-ash/20 bg-ink/90 backdrop-blur-md" : "border-transparent bg-ink/40 backdrop-blur-sm"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20">
          <a href="#top" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
            <BrandMark className="h-9 w-9 text-rust transition-transform duration-300 group-hover:rotate-6" />
            <span className="flex flex-col leading-none">
              <span className="font-anton text-xl tracking-[0.06em] text-cream">IRON &amp; OAK</span>
              <span className="font-display text-[0.6rem] uppercase tracking-[0.3em] text-brass/80">Barbershop · Moscow</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="group relative font-display text-sm uppercase tracking-[0.18em] text-cream/60 transition-colors hover:text-cream">
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-rust transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={site.phoneHref} className="hidden items-center gap-2 font-display text-sm uppercase tracking-[0.14em] text-cream/80 transition-colors hover:text-brass md:flex" aria-label={`Call ${site.phone}`}>
              <PhoneIcon className="h-4 w-4" /><span className="hidden xl:inline">{site.phone}</span>
            </a>
            <a href="#booking" className="btn-rust hidden sm:inline-flex text-xs">Book<ArrowIcon className="h-3.5 w-3.5" /></a>
            <button type="button" onClick={() => setOpen(true)} className="flex h-10 w-10 items-center justify-center border border-ash/30 text-cream transition-colors hover:border-brass hover:text-brass lg:hidden" aria-label="Open menu" aria-expanded={open}>
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-sm lg:hidden">
          <div className="flex h-16 items-center justify-between border-b border-ash/20 px-5">
            <span className="font-anton text-lg tracking-[0.06em] text-cream">IRON &amp; OAK</span>
            <button type="button" onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center border border-ash/30 text-cream hover:border-brass hover:text-brass" aria-label="Close menu"><CloseIcon className="h-5 w-5" /></button>
          </div>
          <nav className="flex flex-col gap-1 px-5 py-8" aria-label="Mobile" onClick={() => setOpen(false)}>
            {nav.map((item, i) => (
              <a key={item.href} href={item.href} className="group flex items-center justify-between border-b border-ash/15 py-4 font-anton text-2xl uppercase tracking-wide text-cream hover:text-rust">
                <span>{item.label}</span><span className="font-display text-xs text-brass/60">0{i + 1}</span>
              </a>
            ))}
          </nav>
          <div className="px-5 pt-4"><a href="#booking" onClick={() => setOpen(false)} className="btn-rust w-full text-sm">Book your chair<ArrowIcon className="h-4 w-4" /></a></div>
        </div>
      )}
    </header>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="ken-burns h-full w-full bg-concrete" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(181,80,46,0.18),transparent_55%)]" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <div className="reveal flex items-center gap-3">
            <span className="bulb-dot" aria-hidden="true" />
            <span className="font-display text-xs uppercase tracking-[0.35em] text-brass">Moscow · Loft Barbershop</span>
          </div>
          <h1 className="reveal reveal-delay-1 heading-xl mt-6 text-[3.2rem] leading-[0.9] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            Cuts with<br /><span className="text-rust">character.</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg">
            Sharp cuts, sculpted beards, and straight-razor shaves in a room that smells of leather, brass, and hot towels. No trends. No small talk. Just the trade, done right.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#booking" className="btn-rust text-sm">Book online<ArrowIcon className="h-4 w-4" /></a>
            <a href="#services" className="btn-outline text-sm">See the board</a>
          </div>
          <dl className="reveal reveal-delay-4 mt-14 grid grid-cols-2 gap-px overflow-hidden border border-ash/20 bg-ash/10 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="bg-ink/60 px-4 py-5 backdrop-blur-sm">
                <dt className="font-anton text-3xl text-cream sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 font-display text-[0.62rem] uppercase tracking-[0.2em] text-cream-dim">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ============ ABOUT ============ */
function About() {
  return (
    <SectionShell id="about" className="bg-concrete">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative">
          <div className="card-industrial relative aspect-[4/3] overflow-hidden bg-concrete">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-center font-display text-xs uppercase tracking-[0.3em] text-ash px-4">Barbershop interior</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 z-10 border border-brass/40 bg-ink-2 px-6 py-4 sm:-right-6">
            <div className="font-anton text-4xl text-rust">12</div>
            <div className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-cream-dim">Years behind<br />the chair</div>
          </div>
        </div>
        <div>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="reveal heading-xl mt-5 text-4xl sm:text-5xl md:text-6xl text-cream">Not a trend.<br /><span className="text-rust">A trade.</span></h2>
          <div className="reveal reveal-delay-1 mt-7 space-y-5 text-base leading-relaxed text-cream-dim sm:text-lg">
            <p>We don&apos;t chase looks off a feed. We cut hair that holds up on Monday morning and shaves that earn a second coffee.</p>
            <p>IRON &amp; OAK started in a former mechanic&apos;s garage on Krasnogvardeyskaya. We kept the concrete, the steel, and the attitude — added three chairs, a hot-towel cabinet, and a badger brush for every man who sits down.</p>
            <p className="text-cream">You take the chair. We shut up and work.</p>
          </div>
          <RivetDivider className="my-9 max-w-xs" />
          <div className="reveal reveal-delay-2 grid grid-cols-3 gap-4">
            {[{ icon: RazorIcon, label: "Real blades" }, { icon: ScissorsIcon, label: "Hand work" }, { icon: ClipperIcon, label: "Sharp lines" }].map(({ icon: Icon, label }) => (
              <div key={label} className="border border-ash/20 bg-ink-2/60 px-3 py-5 text-center transition-colors hover:border-brass/50">
                <Icon className="mx-auto h-7 w-7 text-brass" />
                <div className="mt-3 font-display text-[0.62rem] uppercase tracking-[0.2em] text-cream-dim">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ============ SERVICES ============ */
function Services() {
  return (
    <SectionShell id="services" className="bg-brick" watermark="01">
      <SectionHeading eyebrow="Services & prices" title={<>The works,<br />on the board.</>} desc="Honest work, fixed prices, no surprises at the till. Pick one or stack a few — the chair's yours for the booking." />
      <RivetDivider className="my-12" />
      <div className="grid gap-px overflow-hidden border border-ash/20 bg-ash/15 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <article key={s.no} className={`reveal reveal-delay-${(i % 4) + 1} group relative flex flex-col bg-ink-2 p-6 transition-colors duration-300 hover:bg-ink-3 ${s.popular ? "ring-1 ring-inset ring-rust/30" : ""}`}>
              {s.popular && <span className="absolute right-4 top-4 flex items-center gap-1 border border-rust/50 bg-rust/10 px-2 py-0.5 font-display text-[0.52rem] uppercase tracking-[0.2em] text-rust">★ Most booked</span>}
              <div className="flex items-start justify-between">
                <span className="font-anton text-3xl text-ash/50 transition-colors group-hover:text-rust">{s.no}</span>
                {!s.popular && <Icon className="h-8 w-8 text-brass/70 transition-colors group-hover:text-brass" />}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-cream">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-cream-dim">{s.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-ash/15 pt-4">
                <span className="flex items-center gap-1.5 font-display text-xs uppercase tracking-[0.15em] text-cream-dim"><ClockIcon className="h-3.5 w-3.5 text-brass/70" />{s.duration}</span>
                <span className="font-anton text-xl text-cream transition-colors group-hover:text-rust">{s.price}</span>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-rust transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          );
        })}
      </div>
      <div className="reveal mt-10 flex flex-col items-start justify-between gap-4 border border-ash/20 bg-ink-2/50 p-6 sm:flex-row sm:items-center">
        <p className="text-sm text-cream-dim">Prices are fixed. Cuts under 12 come with a juice box on the house.</p>
        <a href="#booking" className="btn-rust text-xs">Book your chair<ArrowIcon className="h-3.5 w-3.5" /></a>
      </div>
    </SectionShell>
  );
}

/* ============ MASTERS ============ */
function Masters() {
  return (
    <SectionShell id="masters" className="bg-concrete" watermark="03">
      <SectionHeading eyebrow="The hands" title={<>Behind the<br />chair.</>} desc="Four barbers, one standard. Each one earned the chair — and keeps it." />
      <RivetDivider className="my-12" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {masters.map((m, i) => (
          <article key={m.name} className={`reveal reveal-delay-${(i % 4) + 1} card-industrial group flex flex-col`}>
            <div className="relative aspect-[4/5] overflow-hidden bg-concrete">
              <div className="flex h-full w-full items-center justify-center"><span className="font-display text-xs uppercase tracking-[0.3em] text-ash">{m.name}</span></div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute left-0 top-4 bg-rust px-3 py-1 font-display text-[0.6rem] uppercase tracking-[0.25em] text-cream">“{m.nickname}”</div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-cream">{m.name}</h3>
              <div className="mt-1 font-display text-xs uppercase tracking-[0.2em] text-brass">{m.specialty}</div>
              <p className="mt-3 text-sm text-cream-dim">{m.experience}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

/* ============ PORTFOLIO ============ */
function Portfolio() {
  const [filter, setFilter] = React.useState<(typeof workFilters)[number]>("All");
  const filtered = React.useMemo(() => filter === "All" ? works : works.filter((w) => w.category === filter), [filter]);
  return (
    <SectionShell id="work" className="bg-brick" watermark="04">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Recent work" title={<>Off the<br />chair.</>} desc="A sample from the last few weeks. Real clients, real mornings, no filters." />
        <div className="reveal reveal-delay-2 flex flex-wrap gap-2">
          {workFilters.map((f) => {
            const active = f === filter;
            const count = f === "All" ? works.length : works.filter((w) => w.category === f).length;
            return (
              <button key={f} type="button" onClick={() => setFilter(f)} className={`flex items-center gap-2 border px-4 py-2 font-display text-xs uppercase tracking-[0.18em] transition-all ${active ? "border-rust bg-rust text-cream" : "border-ash/30 text-cream-dim hover:border-brass hover:text-brass"}`} aria-pressed={active}>
                {f}<span className={`font-anton text-sm ${active ? "text-cream" : "text-ash"}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>
      <RivetDivider className="my-12" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((w, i) => (
          <figure key={w.title} className={`reveal reveal-delay-${(i % 3) + 1} group relative aspect-square overflow-hidden border border-ash/20 bg-ink-2`}>
            <div className="flex h-full w-full items-center justify-center"><span className="font-display text-xs uppercase tracking-[0.3em] text-ash">{w.title}</span></div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-80" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <div className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-brass">{w.category}</div>
              <div className="mt-1 font-display text-lg font-semibold uppercase tracking-wide text-cream">{w.title}</div>
            </figcaption>
            <span className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l border-t border-brass/50" />
            <span className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r border-t border-brass/50" />
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}

/* ============ BOOKING ============ */
function HtmlComment({ children }: { children: string }) {
  return <div dangerouslySetInnerHTML={{ __html: `<!-- ${children} -->` }} aria-hidden="true" />;
}

function Booking() {
  return (
    <SectionShell id="booking" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10"><div className="absolute inset-0 bg-brick opacity-40" /><div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" /></div>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="reveal flex flex-col">
          <Eyebrow>Online booking</Eyebrow>
          <h2 className="heading-xl mt-5 text-4xl sm:text-5xl md:text-6xl text-cream">Book your<br /><span className="text-rust">chair.</span></h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream-dim sm:text-lg">Pick a master, pick a slot, show up. Online booking runs through Sonline — same calendar we use behind the chair.</p>
          <a href={site.phoneHref} className="mt-8 group flex items-center gap-4 border border-brass/40 bg-ink-2 p-5 transition-colors hover:border-brass">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-rust text-cream transition-colors group-hover:bg-brass group-hover:text-ink"><PhoneIcon className="h-5 w-5" /></span>
            <span className="flex flex-col"><span className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-brass">Prefer the phone? Call us</span><span className="font-anton text-2xl text-cream sm:text-3xl">{site.phone}</span></span>
            <ArrowIcon className="ml-auto h-5 w-5 text-cream-dim transition-colors group-hover:text-brass" />
          </a>
          <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-ash/20 bg-ash/15 sm:grid-cols-2">
            <div className="flex items-center gap-3 bg-ink-2 p-4"><ClockIcon className="h-5 w-5 text-brass" /><span className="font-display text-xs uppercase tracking-[0.15em] text-cream-dim">{site.hours}</span></div>
            <div className="flex items-center gap-3 bg-ink-2 p-4"><PinIcon className="h-5 w-5 text-brass" /><span className="font-display text-xs uppercase tracking-[0.15em] text-cream-dim">{site.addressShort}</span></div>
          </div>
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2"><span className="h-px w-6 bg-brass/60" /><span className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-brass">Or message us</span></div>
            <div className="grid gap-3 sm:grid-cols-3">
              {messengers.map((m) => {
                const Icon = m.label === "WhatsApp" ? WhatsappIcon : TelegramIcon;
                return (
                  <a key={m.label} href={m.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 border border-ash/25 bg-ink-2 p-4 transition-colors hover:border-brass">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-brass/40 text-brass transition-colors group-hover:border-rust group-hover:bg-rust group-hover:text-cream"><Icon className="h-5 w-5" /></span>
                    <span className="flex min-w-0 flex-col"><span className="font-display text-xs uppercase tracking-[0.18em] text-cream">{m.label}</span><span className="truncate font-display text-[0.62rem] uppercase tracking-[0.15em] text-cream-dim">{m.handle}</span></span>
                    <ArrowIcon className="ml-auto h-4 w-4 shrink-0 text-ash transition-colors group-hover:text-brass" />
                  </a>
                );
              })}
              <a href={site.phoneHref} className="group flex items-center gap-3 border border-ash/25 bg-ink-2 p-4 transition-colors hover:border-brass">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-brass/40 text-brass transition-colors group-hover:border-rust group-hover:bg-rust group-hover:text-cream"><PhoneIcon className="h-5 w-5" /></span>
                <span className="flex min-w-0 flex-col"><span className="font-display text-xs uppercase tracking-[0.18em] text-cream">Call</span><span className="truncate font-display text-[0.62rem] uppercase tracking-[0.15em] text-cream-dim">{site.phone}</span></span>
              </a>
            </div>
          </div>
        </div>
        <div className="reveal reveal-delay-1">
          <HtmlComment>Вставить embed-код виджета из личного кабинета Sonline: Настройки → Виджет для сайта</HtmlComment>
          <div id="sonline-widget" className="relative flex min-h-[420px] flex-col items-center justify-center border border-ash/25 bg-ink-2 p-8 text-center">
            <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-brass/60" /><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brass/60" /><span className="absolute left-2 bottom-2 h-2 w-2 rounded-full bg-brass/60" /><span className="absolute right-2 bottom-2 h-2 w-2 rounded-full bg-brass/60" />
            <div className="flex items-center gap-2 text-brass"><span className="bulb-dot" /><span className="font-display text-[0.6rem] uppercase tracking-[0.3em]">Sonline · online booking</span></div>
            <h3 className="mt-5 font-anton text-3xl text-cream sm:text-4xl">Pick your slot</h3>
            <p className="mt-3 max-w-sm text-sm text-cream-dim">The live booking widget loads here once the Sonline embed is dropped in. Until then — book the old-fashioned way:</p>
            <a href={site.phoneHref} className="btn-rust mt-7 text-sm"><PhoneIcon className="h-4 w-4" />Book by phone · {site.phone}</a>
            <p className="mt-5 font-display text-[0.6rem] uppercase tracking-[0.2em] text-ash">We&apos;ll confirm your slot by text within 10 minutes.</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ============ BOOKING FORM ============ */
const inputClass = "w-full bg-ink border border-ash/30 px-4 py-3 font-sans text-sm text-cream placeholder:text-ash/60 transition-colors focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass/40";

function BookingForm() {
  const [status, setStatus] = React.useState<"idle"|"loading"|"success"|"error">("idle");
  const [errMsg, setErrMsg] = React.useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading"); setErrMsg("");
    const data = new FormData(e.currentTarget);
    const payload = { name: String(data.get("name")), phone: String(data.get("phone")), service: String(data.get("service")), master: String(data.get("master")||""), date: String(data.get("date")||""), time: String(data.get("time")||""), notes: String(data.get("notes")||"") };
    try {
      const res = await fetch("/api/booking", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload) });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed");
      setStatus("success"); e.currentTarget.reset();
    } catch (err) { setStatus("error"); setErrMsg(err instanceof Error ? err.message : "Something went wrong"); }
  }
  if (status === "success") {
    return (
      <SectionShell id="booking-form" className="bg-ink">
        <div className="reveal mx-auto max-w-xl border border-brass/40 bg-ink-2 p-8 text-center sm:p-10">
          <span className="mx-auto flex h-14 w-14 items-center justify-center border border-rust bg-rust/10 text-rust"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          <h3 className="mt-6 font-anton text-3xl text-cream sm:text-4xl">Request logged.</h3>
          <p className="mt-4 text-sm leading-relaxed text-cream-dim">We&apos;ve got it. The chair calls you back within 10 minutes during open hours to confirm your slot. Sit tight.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center"><a href={site.phoneHref} className="btn-outline text-xs"><PhoneIcon className="h-3.5 w-3.5" />Or call now</a><button type="button" onClick={() => setStatus("idle")} className="btn-rust text-xs">Send another<ArrowIcon className="h-3.5 w-3.5" /></button></div>
        </div>
      </SectionShell>
    );
  }
  return (
    <SectionShell id="booking-form" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10"><div className="absolute inset-0 bg-brick opacity-30" /><div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" /></div>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="reveal flex flex-col">
          <Eyebrow>Quick request</Eyebrow>
          <h2 className="heading-xl mt-5 text-4xl sm:text-5xl md:text-6xl text-cream">Skip the<br /><span className="text-rust">hold music.</span></h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream-dim sm:text-lg">Drop your name and number. We text you back with a confirmed slot — usually inside 10 minutes while we&apos;re open.</p>
          <div className="mt-8 grid gap-px overflow-hidden border border-ash/20 bg-ash/15">
            <a href={site.phoneHref} className="group flex items-center gap-3 bg-ink-2 p-4 hover:bg-ink-3"><PhoneIcon className="h-5 w-5 text-brass" /><span className="font-display text-xs uppercase tracking-[0.15em] text-cream-dim">{site.phone}</span></a>
            <div className="flex items-center gap-3 bg-ink-2 p-4"><ClockIcon className="h-5 w-5 text-brass" /><span className="font-display text-xs uppercase tracking-[0.15em] text-cream-dim">{site.hours}</span></div>
            <div className="flex items-center gap-3 bg-ink-2 p-4"><PinIcon className="h-5 w-5 text-brass" /><span className="font-display text-xs uppercase tracking-[0.15em] text-cream-dim">{site.addressShort}</span></div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="reveal reveal-delay-1 border border-ash/25 bg-ink-2 p-6 sm:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-name" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">Your name <span className="text-rust">*</span></label><input id="bf-name" name="name" type="text" required minLength={2} autoComplete="name" placeholder="Ivan Petrov" className={inputClass} /></div>
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-phone" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">Phone <span className="text-rust">*</span></label><input id="bf-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+7 999 123-45-67" className={inputClass} /></div>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-service" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">Service <span className="text-rust">*</span></label><select id="bf-service" name="service" required defaultValue="" className={inputClass}><option value="" disabled>Pick a service…</option>{services.map((s) => <option key={s.no} value={s.name}>{s.name} · {s.price}</option>)}</select></div>
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-master" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">Master</label><select id="bf-master" name="master" defaultValue="" className={inputClass}><option value="">Any master</option>{masters.map((m) => <option key={m.name} value={m.name}>{m.name} — “{m.nickname}”</option>)}</select></div>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-date" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">Preferred date</label><input id="bf-date" name="date" type="date" className={`${inputClass} [color-scheme:dark]`} /></div>
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-time" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">Preferred time</label><select id="bf-time" name="time" defaultValue="" className={inputClass}><option value="">Any time</option><option value="morning">Morning · 10–13</option><option value="lunch">Lunch · 13–16</option><option value="evening">Evening · 16–20</option><option value="late">Late · 20–22</option></select></div>
          </div>
          <div className="mt-5 flex flex-col gap-1.5"><label htmlFor="bf-notes" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">Notes</label><textarea id="bf-notes" name="notes" rows={3} maxLength={500} placeholder="Beard length, kid's chair, first visit — anything we should know." className={`${inputClass} resize-none`} /></div>
          {status === "error" && <div className="mt-5 flex items-start gap-2 border border-rust/50 bg-rust/10 p-3 text-sm text-cream"><CloseIcon className="mt-0.5 h-4 w-4 shrink-0 text-rust" /><span>{errMsg}</span></div>}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="submit" disabled={status === "loading"} className="btn-rust text-sm disabled:cursor-not-allowed disabled:opacity-60">
              {status === "loading" ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" />Sending…</> : <>Send request<ArrowIcon className="h-4 w-4" /></>}
            </button>
            <span className="font-display text-[0.6rem] uppercase tracking-[0.18em] text-ash">No spam. We only call to confirm.</span>
          </div>
        </form>
      </div>
    </SectionShell>
  );
}

/* ============ REVIEWS ============ */
function Stars({ rating }: { rating: number }) {
  return <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>{Array.from({length:5}).map((_,i)=><StarIcon key={i} className={`h-4 w-4 ${i<rating?"text-brass":"text-ash/40"}`} />)}</div>;
}

function Reviews() {
  return (
    <SectionShell id="reviews" className="bg-concrete">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Word on the chair" title={<>From the<br />regulars.</>} />
        <div className="reveal reveal-delay-2 flex items-center gap-4 border border-ash/25 bg-ink-2/60 px-6 py-4">
          <span className="font-anton text-5xl text-rust">{site.rating}</span>
          <div className="flex flex-col"><Stars rating={5} /><span className="mt-1 font-display text-[0.62rem] uppercase tracking-[0.2em] text-cream-dim">{site.reviewsCount} reviews</span></div>
        </div>
      </div>
      <RivetDivider className="my-12" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <figure key={r.name} className={`reveal reveal-delay-${(i%3)+1} card-industrial flex flex-col p-6`}>
            <div className="flex items-center justify-between"><Stars rating={r.rating} /><span className="font-display text-[0.6rem] uppercase tracking-[0.2em] text-ash">{r.date}</span></div>
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-cream"><span className="font-anton text-2xl text-rust/70">“</span>{r.text}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-ash/15 pt-4">
              <span className="flex h-10 w-10 items-center justify-center border border-brass/40 font-anton text-lg text-brass">{r.name.charAt(0)}</span>
              <div><div className="font-display text-sm font-semibold uppercase tracking-wide text-cream">{r.name}</div><div className="font-display text-[0.62rem] uppercase tracking-[0.18em] text-cream-dim">{r.role}</div></div>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}

/* ============ FAQ ============ */
function Faq() {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <SectionShell id="faq" className="bg-brick">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow="Questions" title={<>Before<br />you sit.</>} desc="The short version of the things everyone asks. If your question isn't here, text us — we answer fast." />
        </div>
        <div>
          <RivetDivider className="mb-8 lg:hidden" />
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-ash/20 first:border-t">
                <button type="button" onClick={() => setOpen(isOpen ? null : i)} className="group flex w-full items-center gap-4 py-5 text-left hover:text-brass" aria-expanded={isOpen}>
                  <span className="font-display text-[0.62rem] uppercase tracking-[0.2em] text-brass/70">{String(i+1).padStart(2,"0")}</span>
                  <span className="flex-1 font-display text-base font-medium uppercase tracking-wide text-cream group-hover:text-cream sm:text-lg">{f.q}</span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center border border-ash/30 text-brass transition-all duration-300 ${isOpen ? "rotate-45 border-rust bg-rust text-cream" : ""}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-3.5 w-3.5"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
                  </span>
                </button>
                {isOpen && <div className="flex gap-4 pb-6 pl-11 pr-11"><span className="font-display text-[0.58rem] uppercase tracking-[0.22em] text-rust">{f.category}</span><p className="flex-1 text-sm leading-relaxed text-cream-dim sm:text-base">{f.a}</p></div>}
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

/* ============ CONTACTS ============ */
function Contacts() {
  return (
    <SectionShell id="contacts" className="bg-brick">
      <SectionHeading eyebrow="Find the chair" title={<>Where we<br />do the work.</>} />
      <RivetDivider className="my-12" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="reveal flex flex-col gap-px overflow-hidden border border-ash/20 bg-ash/15">
          {[{icon:PinIcon,label:"Address",value:site.address,href:site.mapHref},{icon:PhoneIcon,label:"Phone",value:site.phone,href:site.phoneHref},{icon:ClockIcon,label:"Hours",value:site.hours}].map(({icon:Icon,label,value,href}) => {
            const inner = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-brass/40 text-brass"><Icon className="h-5 w-5" /></span>
                <span className="flex flex-col"><span className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-brass">{label}</span><span className="mt-1 font-display text-base text-cream sm:text-lg">{value}</span></span>
                {href && <ArrowIcon className="ml-auto h-4 w-4 text-cream-dim group-hover:text-brass" />}
              </>
            );
            return href ? <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel={href.startsWith("http")?"noopener noreferrer":undefined} className="group flex items-center gap-4 bg-ink-2 p-5 hover:bg-ink-3">{inner}</a> : <div key={label} className="flex items-center gap-4 bg-ink-2 p-5">{inner}</div>;
          })}
        </div>
        <div className="reveal reveal-delay-1 relative min-h-[360px] overflow-hidden border border-ash/25 bg-ink-2">
          <iframe src="https://yandex.ru/map-widget/v1/?text=Moscow%20Krasnogvardeyskaya%20Passage&z=16&l=map" title="Map" className="absolute inset-0 h-full w-full" style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.6) brightness(0.95)" }} loading="lazy" allowFullScreen />
          <span className="pointer-events-none absolute left-2 top-2 z-20 h-3 w-3 border-l border-t border-brass/60" />
          <span className="pointer-events-none absolute right-2 top-2 z-20 h-3 w-3 border-r border-t border-brass/60" />
          <span className="pointer-events-none absolute bottom-2 left-2 z-20 h-3 w-3 border-b border-l border-brass/60" />
          <span className="pointer-events-none absolute bottom-2 right-2 z-20 h-3 w-3 border-b border-r border-brass/60" />
        </div>
      </div>
      <div className="reveal mt-8 flex flex-col gap-4 border border-ash/20 bg-ink-2/50 p-5 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-xs uppercase tracking-[0.2em] text-cream-dim">Follow the chair</span>
        <div className="flex flex-wrap gap-3">
          {site.socials.map((s) => {
            const Icon = s.label === "Instagram" ? InstagramIcon : s.label === "Telegram" ? TelegramIcon : VkIcon;
            return <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 border border-ash/30 px-4 py-2.5 font-display text-xs uppercase tracking-[0.15em] text-cream-dim transition-colors hover:border-brass hover:text-brass"><Icon className="h-4 w-4" />{s.label}</a>;
          })}
        </div>
      </div>
    </SectionShell>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-ash/25 bg-ink grain-overlay">
      <div className="border-b border-ash/15 px-5 py-10 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <BrandMark className="h-12 w-12 text-rust" />
            <div className="leading-none"><div className="font-anton text-3xl tracking-[0.06em] text-cream sm:text-4xl">IRON &amp; OAK</div><div className="mt-1 font-display text-[0.62rem] uppercase tracking-[0.3em] text-brass">Barbershop · Moscow · Est. 2013</div></div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {site.socials.map((s) => {
              const Icon = s.label === "Instagram" ? InstagramIcon : s.label === "Telegram" ? TelegramIcon : VkIcon;
              return <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center border border-ash/30 text-cream-dim hover:border-brass hover:text-brass" aria-label={`${site.name} on ${s.label}`}><Icon className="h-4 w-4" /></a>;
            })}
          </div>
        </div>
      </div>
      <div className="px-5 py-12 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div><h3 className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-brass">Navigate</h3><ul className="mt-4 space-y-2.5">{nav.map((item)=><li key={item.href}><a href={item.href} className="font-display text-sm uppercase tracking-[0.12em] text-cream-dim hover:text-rust">{item.label}</a></li>)}</ul></div>
          <div><h3 className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-brass">Services</h3><ul className="mt-4 space-y-2.5">{["Scissor cut","Beard sculpting","Royal shave","Grey camouflage","Kids' cut"].map((s)=><li key={s}><a href="#services" className="font-display text-sm text-cream-dim hover:text-rust">{s}</a></li>)}</ul></div>
          <div><h3 className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-brass">Contact</h3><ul className="mt-4 space-y-3"><li className="flex items-start gap-2.5 text-sm text-cream-dim"><PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass" />{site.address}</li><li><a href={site.phoneHref} className="flex items-center gap-2.5 text-sm text-cream-dim hover:text-rust"><PhoneIcon className="h-4 w-4 shrink-0 text-brass" />{site.phone}</a></li><li className="text-sm text-cream-dim">{site.hours}</li></ul></div>
          <div><h3 className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-brass">Book</h3><p className="mt-4 text-sm text-cream-dim">Reserve a slot online or call ahead. First chair opens at 10:00.</p><a href="#booking" className="btn-rust mt-5 text-xs">Book your chair</a></div>
        </div>
      </div>
      <div className="border-t border-ash/15 px-5 py-6 pb-24 sm:px-8 md:px-12 lg:px-20 lg:pb-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-display text-[0.65rem] uppercase tracking-[0.18em] text-ash">© {year} {site.name}. All cuts reserved.</p>
          <div className="flex items-center gap-4 font-display text-[0.65rem] uppercase tracking-[0.18em] text-ash"><span>Loft · Concrete · Brass</span><span className="hidden h-3 w-px bg-ash/40 sm:inline-block" /><span>Cuts with character.</span></div>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button type="button" onClick={() => window.scrollTo({top:0,behavior:"smooth"})} className={`fixed bottom-20 right-5 z-40 flex h-12 w-12 items-center justify-center border border-brass/50 bg-ink/90 text-brass backdrop-blur-sm transition-all duration-300 hover:border-rust hover:bg-rust hover:text-cream lg:bottom-5 ${show?"translate-y-0 opacity-100":"pointer-events-none translate-y-4 opacity-0"}`} aria-label="Back to top"><ArrowUpIcon className="h-5 w-5" /></button>
  );
}

function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brass/30 bg-ink/95 backdrop-blur-md lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex items-stretch gap-px bg-ash/20">
        <a href={site.phoneHref} className="flex flex-1 items-center justify-center gap-2 bg-ink-2 py-3.5 font-display text-sm uppercase tracking-[0.16em] text-cream hover:bg-ink-3"><PhoneIcon className="h-4 w-4 text-brass" />Call</a>
        <a href="#booking" className="flex flex-[1.3] items-center justify-center gap-2 bg-rust py-3.5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-cream hover:bg-[#c75e38]">Book a chair<ArrowIcon className="h-4 w-4" /></a>
      </div>
    </div>
  );
}

/* ============ MAIN PAGE ============ */
export default function Home() {
  useScrollReveal();
  return (
    <div className="page-enter relative flex min-h-screen flex-col bg-ink">
      <a href="#top" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-rust focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:uppercase focus:tracking-widest focus:text-cream">Skip to content</a>
      <ScrollProgress />
      <Header />
      <div aria-hidden="true" className="h-[88px]" />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Masters />
        <Portfolio />
        <Booking />
        <BookingForm />
        <Reviews />
        <Faq />
        <Contacts />
      </main>
      <Footer />
      <BackToTop />
      <MobileStickyBar />
    </div>
  );
}
