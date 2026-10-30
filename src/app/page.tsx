"use client";

import * as React from "react";
import { useScrollReveal } from "@/components/barbershop/use-reveal";
import { useI18n } from "@/components/barbershop/i18n";
import { site, services as serviceIcons, masters as masterData } from "@/components/barbershop/data";
import { SectionShell, SectionHeading, Eyebrow, RivetDivider } from "@/components/barbershop/shared";
import {
  BrandMark, MenuIcon, CloseIcon, PhoneIcon, ClockIcon, ArrowIcon, ArrowDownIcon, PinIcon, MoonIcon,
  RazorIcon, ScissorsIcon, ClipperIcon, CombIcon, MustacheIcon, BeardIcon, SmileIcon,
  InstagramIcon, TelegramIcon, VkIcon, StarIcon, ArrowUpIcon,
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

/* ============ LANGUAGE TOGGLE ============ */
function LangToggle() {
  const { lang, toggle, t } = useI18n();
  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-10 items-center gap-1.5 border border-ash/30 px-2.5 font-display text-xs uppercase tracking-[0.14em] text-cream-dim transition-colors hover:border-brass hover:text-brass"
      aria-label={lang === "ru" ? "Switch to English" : "Переключить на русский"}
    >
      <span className={lang === "ru" ? "text-rust" : ""}>RU</span>
      <span className="text-ash/40">/</span>
      <span className={lang === "en" ? "text-rust" : ""}>EN</span>
    </button>
  );
}

/* ============ HEADER ============ */
function Header() {
  const { t } = useI18n();
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

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.masters, href: "#masters" },
    { label: t.nav.contacts, href: "#contacts" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`border-b transition-all duration-300 ${scrolled ? "border-ash/20 bg-ink/90 backdrop-blur-md" : "border-transparent bg-ink/40 backdrop-blur-sm"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20">
          <a href="#top" className="group flex items-center gap-3" aria-label={`${t.brandName} — home`}>
            <BrandMark className="h-10 w-10 shrink-0 text-rust transition-transform duration-300 group-hover:rotate-6" />
            <span className="flex flex-col leading-none">
              <span className="font-anton text-xl tracking-[0.06em] text-cream">{t.brandName}</span>
              <span className="mt-1 font-display text-[0.6rem] uppercase tracking-[0.3em] text-brass/80">{t.footer.tagline}</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="group relative font-display text-sm uppercase tracking-[0.18em] text-cream/60 transition-colors hover:text-cream">
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-rust transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LangToggle />
            <a href={site.phoneHref} className="hidden items-center gap-2 font-display text-sm uppercase tracking-[0.14em] text-cream/80 transition-colors hover:text-brass md:flex" aria-label={`Call ${site.phone}`}>
              <PhoneIcon className="h-4 w-4" /><span className="hidden xl:inline">{site.phone}</span>
            </a>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-rust hidden sm:inline-flex text-xs">{t.ui.book}<ArrowIcon className="h-3.5 w-3.5" /></a>
            <button type="button" onClick={() => setOpen(true)} className="flex h-10 w-10 items-center justify-center border border-ash/30 text-cream transition-colors hover:border-brass hover:text-brass lg:hidden" aria-label={t.ui.openMenu} aria-expanded={open}>
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-sm lg:hidden">
          <div className="flex h-16 items-center justify-between border-b border-ash/20 px-5">
            <span className="font-anton text-lg tracking-[0.06em] text-cream">{t.brandName}</span>
            <button type="button" onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center border border-ash/30 text-cream hover:border-brass hover:text-brass" aria-label={t.ui.closeMenu}><CloseIcon className="h-5 w-5" /></button>
          </div>
          <nav className="flex flex-col gap-1 px-5 py-8" aria-label="Mobile" onClick={() => setOpen(false)}>
            {navItems.map((item, i) => (
              <a key={item.href} href={item.href} className="group flex items-center justify-between border-b border-ash/15 py-4 font-anton text-2xl uppercase tracking-wide text-cream hover:text-rust">
                <span>{item.label}</span><span className="font-display text-xs text-brass/60">0{i + 1}</span>
              </a>
            ))}
          </nav>
          <div className="px-5 pt-4"><a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-rust w-full text-sm">{t.ui.bookChair}<ArrowIcon className="h-4 w-4" /></a></div>
        </div>
      )}
    </header>
  );
}

/* ============ HERO ============ */
function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img src="/images/hero-bg.webp" alt="" fetchPriority="high" decoding="async" className="ken-burns h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(181,80,46,0.18),transparent_55%)]" />
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-1 flex-col justify-center py-16">
          <div className="max-w-3xl">
            <div className="reveal flex items-center gap-3">
              <span className="bulb-dot" aria-hidden="true" />
              <span className="font-display text-xs uppercase tracking-[0.35em] text-brass">{t.hero.badge}</span>
            </div>
            <h1 className="reveal reveal-delay-1 heading-xl mt-6 text-[3.2rem] leading-[0.9] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              {t.hero.title1}<br /><span className="text-rust">{t.hero.title2}</span>
            </h1>
            <div className="reveal reveal-delay-2 mt-16 flex flex-col gap-4 sm:mt-20 sm:flex-row sm:items-center">
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-rust text-sm">{t.hero.ctaBook}<ArrowIcon className="h-4 w-4" /></a>
              <a href="#services" className="btn-outline text-sm">{t.hero.ctaBoard}</a>
            </div>
          </div>
        </div>
        {/* Быстрая инфо-полоса — заполняет низ первого экрана */}
        <div className="reveal reveal-delay-3 mb-8 grid gap-px overflow-hidden border border-ash/25 bg-ash/15 sm:grid-cols-3">
          <div className="flex items-center gap-3.5 bg-ink/75 px-5 py-4 backdrop-blur-sm">
            <PinIcon className="h-5 w-5 shrink-0 text-brass" />
            <span className="flex flex-col"><span className="font-display text-[0.55rem] uppercase tracking-[0.25em] text-brass">{t.hero.strip.address}</span><span className="mt-0.5 font-display text-sm text-cream">{site.addressShort}</span></span>
          </div>
          <div className="flex items-center gap-3.5 bg-ink/75 px-5 py-4 backdrop-blur-sm">
            <ClockIcon className="h-5 w-5 shrink-0 text-brass" />
            <span className="flex flex-col"><span className="font-display text-[0.55rem] uppercase tracking-[0.25em] text-brass">{t.hero.strip.hours}</span><span className="mt-0.5 font-display text-sm text-cream">{site.hoursShort}</span></span>
          </div>
          <div className="flex items-center gap-3.5 bg-ink/75 px-5 py-4 backdrop-blur-sm">
            <MoonIcon className="h-5 w-5 shrink-0 text-brass" />
            <span className="flex flex-col"><span className="font-display text-[0.55rem] uppercase tracking-[0.25em] text-brass">{t.hero.strip.daysOff}</span><span className="mt-0.5 font-display text-sm text-cream">{t.hero.strip.daysOffValue}</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ ABOUT ============ */
function About() {
  const { t } = useI18n();
  return (
    <SectionShell id="about" className="bg-concrete">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative">
          <div className="card-industrial relative aspect-[4/3] overflow-hidden">
            <img src="/images/about-bg.webp" alt="Мастер за работой" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>

        </div>
        <div>
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="reveal heading-xl mt-5 text-4xl sm:text-5xl md:text-6xl text-cream">{t.about.title1}<br /><span className="text-rust">{t.about.title2}</span></h2>
          <div className="reveal reveal-delay-1 mt-7 space-y-5 text-base leading-relaxed text-cream-dim sm:text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="text-cream">{t.about.p3}</p>
          </div>
          <RivetDivider className="my-9 max-w-xs" />
          <div className="reveal reveal-delay-2 grid grid-cols-3 gap-4">
            {t.about.pillars.map((p, i) => {
              const Icon = [SmileIcon, ScissorsIcon, ClipperIcon][i];
              return (
                <div key={p.label} className="border border-ash/20 bg-ink-2/60 px-3 py-5 text-center transition-colors hover:border-brass/50">
                  <Icon className="mx-auto h-7 w-7 text-brass" />
                  <div className="mt-3 font-display text-[0.62rem] uppercase tracking-[0.2em] text-cream-dim">{p.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ============ SERVICES ============ */
function Services() {
  const { t } = useI18n();
  const items = t.services.items;
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);
  const [touched, setTouched] = React.useState(false);

  // Определяем карточку, ближайшую к центру трека (мобильная карусель)
  const handleScroll = React.useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-svc-card]");
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    setActive(best);
    setTouched(true);
  }, []);

  const scrollToCard = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelectorAll<HTMLElement>("[data-svc-card]")[i];
    if (!card) return;
    setTouched(true);
    // 20px = px-5: карточка встаёт по левому полю, как при snap-start
    track.scrollTo({ left: Math.max(0, card.offsetLeft - 20), behavior: "smooth" });
  };

  return (
    <SectionShell id="services" className="bg-brick" watermark="01">
      <div className="flex flex-col gap-6">
        <SectionHeading eyebrow={t.services.eyebrow} title={<>{t.services.title1}<br />{t.services.title2}</>} desc={t.services.desc} />
      </div>
      <RivetDivider className="my-12" />
      {/* Подсказка «Листайте» — только мобильные, исчезает после первого свайпа */}
      <div className={`mb-3 flex items-center justify-end gap-2 transition-opacity duration-500 sm:hidden ${touched ? "pointer-events-none opacity-0" : "opacity-100"}`} aria-hidden="true">
        <span className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-brass">{t.services.swipeHint}</span>
        <ArrowIcon className="hint-nudge h-3.5 w-3.5 text-rust" />
      </div>
      {/* Мобильные: горизонтальная карусель со snap; sm+: сетка как раньше */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        data-svc-track
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pr-24 pb-2 scroll-px-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:grid-cols-5"
      >
        {items.map((s, i) => {
          const Icon = serviceIcons[i]?.icon ?? ScissorsIcon;
          const img = `/images/svc-${String(i + 1).padStart(2, "0")}.webp`;
          return (
            <article
              key={s.no}
              data-svc-card
              className={`reveal reveal-delay-${(i % 4) + 1} group relative flex w-[74vw] max-w-[300px] shrink-0 snap-start flex-col border border-ash/20 bg-ink-2 overflow-hidden transition-all duration-300 hover:border-brass/50 sm:w-auto sm:max-w-none ${s.popular ? "ring-1 ring-inset ring-rust/30" : ""}`}
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={img} alt={s.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />
                {s.popular && <span className="absolute right-3 top-3 flex items-center gap-1 border border-rust/50 bg-ink/80 px-2 py-0.5 font-display text-[0.52rem] uppercase tracking-[0.2em] text-rust backdrop-blur-sm">★ {t.services.popular}</span>}
                <span className="absolute left-3 top-3 font-anton text-2xl text-cream/40">{s.no}</span>
              </div>
              {/* Body */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-cream">{s.name}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-cream-dim line-clamp-2">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between border-t border-ash/15 pt-3">
                  <span className="flex items-center gap-1 font-display text-xs uppercase tracking-[0.15em] text-cream-dim"><ClockIcon className="h-3.5 w-3.5 text-brass/70" />{s.duration}</span>
                  <span className="font-anton text-lg text-cream transition-colors group-hover:text-rust">{s.price}</span>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-rust transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          );
        })}
      </div>
      {/* Навигация карусели — только мобильные: счётчик + точки + стрелки */}
      <div className="mt-5 flex items-center gap-4 sm:hidden">
        <span className="font-anton text-base leading-none text-rust" aria-live="polite">
          {String(active + 1).padStart(2, "0")}
          <span className="text-cream-dim/50">/{String(items.length).padStart(2, "0")}</span>
        </span>
        <div className="flex flex-1 items-center justify-center gap-1.5">
          {items.map((s, i) => (
            <button
              key={s.no}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`${i + 1} — ${s.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-rust" : "w-1.5 bg-ash/60 hover:bg-brass"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => scrollToCard(active - 1)} disabled={active === 0} className="flex h-9 w-9 items-center justify-center border border-ash/40 text-cream-dim transition-all duration-200 hover:border-rust hover:text-rust active:scale-95 disabled:pointer-events-none disabled:opacity-25" aria-label={t.ui.prevService}>
            <ArrowIcon className="h-4 w-4 rotate-180" />
          </button>
          <button type="button" onClick={() => scrollToCard(active + 1)} disabled={active === items.length - 1} className="flex h-9 w-9 items-center justify-center border border-ash/40 text-cream-dim transition-all duration-200 hover:border-rust hover:text-rust active:scale-95 disabled:pointer-events-none disabled:opacity-25" aria-label={t.ui.nextService}>
            <ArrowIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="reveal mt-10 flex flex-col items-start justify-between gap-4 border border-ash/20 bg-ink-2/50 p-6 sm:flex-row sm:items-center">
        <p className="text-sm text-cream-dim">{t.services.footnote}</p>
      </div>
    </SectionShell>
  );
}

/* ============ MASTERS ============ */
function Masters() {
  const { t } = useI18n();
  return (
    <SectionShell id="masters" className="bg-concrete" watermark="03">
      <SectionHeading eyebrow={t.masters.eyebrow} title={<>{t.masters.title1}<br />{t.masters.title2}</>} desc={t.masters.desc} />
      <RivetDivider className="my-12" />
      <div className="mx-auto grid w-full max-w-sm gap-6 sm:max-w-md">
        {t.masters.items.map((m, i) => {
          const data = masterData[i];
          return (
            <article key={m.name} className={`reveal reveal-delay-${(i % 4) + 1} card-industrial group flex flex-col`}>
              <div className="relative aspect-[4/5] overflow-hidden bg-concrete">
                {data?.image ? (
                  <img src={data.image} alt={data.alt || m.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(255,255,255,0.025)_14px,rgba(255,255,255,0.025)_28px)]">
                    <BrandMark className="h-20 w-20 text-ash/25 transition-colors duration-300 group-hover:text-brass/50" />
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-display text-[0.6rem] uppercase tracking-[0.35em] text-ash/60">{t.masters.photoSoon}</span>
                      <span className="h-px w-14 bg-gradient-to-r from-transparent via-brass/60 to-transparent" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="absolute left-0 top-4 bg-rust px-3 py-1 font-display text-[0.6rem] uppercase tracking-[0.25em] text-cream">“{m.nickname}”</div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-cream">{m.name}</h3>
                <div className="mt-1 font-display text-xs uppercase tracking-[0.2em] text-brass">{m.specialty}</div>
                <p className="mt-3 text-sm text-cream-dim">{m.experience}</p>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

/* ============ PORTFOLIO ============ */
function Portfolio() {
  const { t } = useI18n();
  const filterLabels = [t.portfolio.filters.all, t.portfolio.filters.cuts, t.portfolio.filters.beards, t.portfolio.filters.shaves];
  const filterValues = ["all", "cuts", "beards", "shaves"] as const;
  const [filterIdx, setFilterIdx] = React.useState(0);
  const filter = filterValues[filterIdx];
  const filtered = React.useMemo(() => filter === "all" ? t.portfolio.items : t.portfolio.items.filter((w) => w.category === filter), [filter, t.portfolio.items]);
  return (
    <SectionShell id="work" className="bg-brick" watermark="04">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow={t.portfolio.eyebrow} title={<>{t.portfolio.title1}<br />{t.portfolio.title2}</>} desc={t.portfolio.desc} />
        <div className="reveal reveal-delay-2 flex flex-wrap gap-2">
          {filterLabels.map((f, i) => {
            const active = i === filterIdx;
            const count = i === 0 ? t.portfolio.items.length : t.portfolio.items.filter((w) => w.category === filterValues[i]).length;
            return (
              <button key={f} type="button" onClick={() => setFilterIdx(i)} className={`flex items-center gap-2 border px-4 py-2 font-display text-xs uppercase tracking-[0.18em] transition-all ${active ? "border-rust bg-rust text-cream" : "border-ash/30 text-cream-dim hover:border-brass hover:text-brass"}`} aria-pressed={active}>
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
              <div className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-brass">{filterLabels[filterValues.indexOf(w.category)]}</div>
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
function Booking() {
  const { t } = useI18n();
  const steps = [t.booking.steps.service, t.booking.steps.time];
  return (
    <SectionShell id="booking" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10"><div className="absolute inset-0 bg-brick opacity-40" /><div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" /></div>
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Заголовок + описание. Контакты — только в блоке «Контакты» */}
        <div className="reveal flex flex-col">
          <Eyebrow>{t.booking.eyebrow}</Eyebrow>
          <h2 className="heading-xl mt-5 text-4xl sm:text-5xl md:text-6xl text-cream">{t.booking.title1}<br /><span className="text-rust">{t.booking.title2}</span></h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream-dim sm:text-lg">{t.booking.desc}</p>
        </div>
        <div id="booking-card" className="reveal reveal-delay-1 relative overflow-hidden border border-rust/40 bg-ink-2 p-6 sm:p-8">
            <span className="pointer-events-none absolute left-2 top-2 z-20 h-3 w-3 border-l border-t border-brass/60" />
            <span className="pointer-events-none absolute right-2 top-2 z-20 h-3 w-3 border-r border-t border-brass/60" />
            <span className="pointer-events-none absolute bottom-2 left-2 z-20 h-3 w-3 border-b border-l border-brass/60" />
            <span className="pointer-events-none absolute bottom-2 right-2 z-20 h-3 w-3 border-b border-r border-brass/60" />
            <div className="flex items-center gap-2 text-brass"><span className="bulb-dot" /><span className="font-display text-[0.6rem] uppercase tracking-[0.3em]">{t.booking.onlineLabel}</span></div>
            <h3 className="mt-4 font-anton text-3xl text-cream sm:text-4xl">{t.booking.widgetTitle}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cream-dim">{t.booking.widgetDesc}</p>
            <div className="mt-7 grid grid-cols-2 gap-px border border-ash/20 bg-ash/15">
              {steps.map((s, i) => (
                <div key={s} className="bg-ink-2/90 px-3 py-4 text-center">
                  <span className="font-anton text-xl text-rust/90">0{i + 1}</span>
                  <div className="mt-1 font-display text-[0.6rem] uppercase tracking-[0.18em] text-cream-dim">{s}</div>
                </div>
              ))}
            </div>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-rust mt-7 w-full text-sm sm:w-auto">{t.booking.widgetCta}<ArrowIcon className="h-4 w-4" /></a>
          </div>
      </div>
    </SectionShell>
  );
}

/* ============ BOOKING FORM ============ */
const inputClass = "w-full bg-ink border border-ash/30 px-4 py-3 font-sans text-sm text-cream placeholder:text-ash/60 transition-colors focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass/40";

function BookingForm() {
  const { t } = useI18n();
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
          <h3 className="mt-6 font-anton text-3xl text-cream sm:text-4xl">{t.bookingForm.successTitle}</h3>
          <p className="mt-4 text-sm leading-relaxed text-cream-dim">{t.bookingForm.successDesc}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center"><a href={site.phoneHref} className="btn-outline text-xs"><PhoneIcon className="h-3.5 w-3.5" />{t.bookingForm.successCall}</a><button type="button" onClick={() => setStatus("idle")} className="btn-rust text-xs">{t.bookingForm.successAgain}<ArrowIcon className="h-3.5 w-3.5" /></button></div>
        </div>
      </SectionShell>
    );
  }
  return (
    <SectionShell id="booking-form" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10"><div className="absolute inset-0 bg-brick opacity-30" /><div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" /></div>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="reveal flex flex-col">
          <Eyebrow>{t.bookingForm.eyebrow}</Eyebrow>
          <h2 className="heading-xl mt-5 text-4xl sm:text-5xl md:text-6xl text-cream">{t.bookingForm.title1}<br /><span className="text-rust">{t.bookingForm.title2}</span></h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream-dim sm:text-lg">{t.bookingForm.desc}</p>
          <div className="mt-8 grid gap-px overflow-hidden border border-ash/20 bg-ash/15">
            <a href={site.phoneHref} className="group flex items-center gap-3 bg-ink-2 p-4 hover:bg-ink-3"><PhoneIcon className="h-5 w-5 text-brass" /><span className="font-display text-xs uppercase tracking-[0.15em] text-cream-dim">{site.phone}</span></a>
            <div className="flex items-center gap-3 bg-ink-2 p-4"><ClockIcon className="h-5 w-5 text-brass" /><span className="font-display text-xs uppercase tracking-[0.15em] text-cream-dim">{t.booking.hoursLabel}</span></div>
            <div className="flex items-center gap-3 bg-ink-2 p-4"><PinIcon className="h-5 w-5 text-brass" /><span className="font-display text-xs uppercase tracking-[0.15em] text-cream-dim">{t.booking.addressLabel}</span></div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="reveal reveal-delay-1 border border-ash/25 bg-ink-2 p-6 sm:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-name" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">{t.bookingForm.nameLabel} <span className="text-rust">*</span></label><input id="bf-name" name="name" type="text" required minLength={2} autoComplete="name" placeholder={t.bookingForm.namePlaceholder} className={inputClass} /></div>
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-phone" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">{t.bookingForm.phoneLabel} <span className="text-rust">*</span></label><input id="bf-phone" name="phone" type="tel" required autoComplete="tel" placeholder={t.bookingForm.phonePlaceholder} className={inputClass} /></div>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-service" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">{t.bookingForm.serviceLabel} <span className="text-rust">*</span></label><select id="bf-service" name="service" required defaultValue="" className={inputClass}><option value="" disabled>{t.bookingForm.servicePlaceholder}</option>{t.services.items.map((s) => <option key={s.no} value={s.name}>{s.name} · {s.price}</option>)}</select></div>
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-master" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">{t.bookingForm.masterLabel}</label><select id="bf-master" name="master" defaultValue="" className={inputClass}><option value="">{t.bookingForm.masterAny}</option>{t.masters.items.map((m) => <option key={m.name} value={m.name}>{m.name} — «{m.nickname}»</option>)}</select></div>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-date" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">{t.bookingForm.dateLabel}</label><input id="bf-date" name="date" type="date" className={`${inputClass} [color-scheme:dark]`} /></div>
            <div className="flex flex-col gap-1.5"><label htmlFor="bf-time" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">{t.bookingForm.timeLabel}</label><select id="bf-time" name="time" defaultValue="" className={inputClass}><option value="">{t.bookingForm.timeAny}</option><option value="morning">{t.bookingForm.timeMorning}</option><option value="lunch">{t.bookingForm.timeLunch}</option><option value="evening">{t.bookingForm.timeEvening}</option><option value="late">{t.bookingForm.timeLate}</option></select></div>
          </div>
          <div className="mt-5 flex flex-col gap-1.5"><label htmlFor="bf-notes" className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-brass">{t.bookingForm.notesLabel}</label><textarea id="bf-notes" name="notes" rows={3} maxLength={500} placeholder={t.bookingForm.notesPlaceholder} className={`${inputClass} resize-none`} /></div>
          {status === "error" && <div className="mt-5 flex items-start gap-2 border border-rust/50 bg-rust/10 p-3 text-sm text-cream"><CloseIcon className="mt-0.5 h-4 w-4 shrink-0 text-rust" /><span>{errMsg}</span></div>}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="submit" disabled={status === "loading"} className="btn-rust text-sm disabled:cursor-not-allowed disabled:opacity-60">
              {status === "loading" ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" />{t.bookingForm.sending}</> : <>{t.bookingForm.submit}<ArrowIcon className="h-4 w-4" /></>}
            </button>
            <span className="font-display text-[0.6rem] uppercase tracking-[0.18em] text-ash">{t.bookingForm.spamNote}</span>
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
  const { t } = useI18n();
  return (
    <SectionShell id="reviews" className="bg-concrete">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow={t.reviews.eyebrow} title={<>{t.reviews.title1}<br />{t.reviews.title2}</>} />

      </div>
      <RivetDivider className="my-12" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.reviews.items.map((r, i) => (
          <figure key={i} className={`reveal reveal-delay-${(i%3)+1} card-industrial flex flex-col p-6`}>
            <div className="flex items-center justify-between"><Stars rating={5} /><span className="font-display text-[0.6rem] uppercase tracking-[0.2em] text-ash">{r.date}</span></div>
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
  const { t } = useI18n();
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <SectionShell id="faq" className="bg-brick">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow={t.faq.eyebrow} title={<>{t.faq.title1}<br />{t.faq.title2}</>} desc={t.faq.desc} />
        </div>
        <div>
          <RivetDivider className="mb-8 lg:hidden" />
          {t.faq.items.map((f, i) => {
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
  const { t } = useI18n();
  return (
    <SectionShell id="contacts" className="bg-brick">
      <SectionHeading eyebrow={t.contacts.eyebrow} title={<>{t.contacts.title1}<br />{t.contacts.title2}</>} />
      <RivetDivider className="my-12" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="reveal flex flex-col gap-px overflow-hidden border border-ash/20 bg-ash/15">
          {[{icon:PinIcon,label:t.contacts.addressLabel,value:site.address,href:site.mapHref},{icon:PhoneIcon,label:t.contacts.phoneLabel,value:site.phone,href:site.phoneHref},{icon:ClockIcon,label:t.contacts.hoursLabel,value:t.booking.hoursLabel}].map(({icon:Icon,label,value,href}) => {
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
          <iframe src="https://yandex.ru/map-widget/v1/?text=Москва%20улица%20Михайлова%2039&z=16&l=map" title="Map" className="absolute inset-0 h-full w-full" style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.6) brightness(0.95)" }} loading="lazy" allowFullScreen />
          <span className="pointer-events-none absolute left-2 top-2 z-20 h-3 w-3 border-l border-t border-brass/60" />
          <span className="pointer-events-none absolute right-2 top-2 z-20 h-3 w-3 border-r border-t border-brass/60" />
          <span className="pointer-events-none absolute bottom-2 left-2 z-20 h-3 w-3 border-b border-l border-brass/60" />
          <span className="pointer-events-none absolute bottom-2 right-2 z-20 h-3 w-3 border-b border-r border-brass/60" />
          <a href={site.mapHref} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 z-30 inline-flex items-center gap-1.5 border border-brass/50 bg-ink/85 px-3 py-2 font-display text-[0.6rem] uppercase tracking-[0.18em] text-brass backdrop-blur-sm hover:bg-rust hover:text-cream hover:border-rust"><PinIcon className="h-3.5 w-3.5" />{t.contacts.openMap}</a>
        </div>
      </div>
      <div className="reveal mt-8 flex flex-col gap-4 border border-ash/20 bg-ink-2/50 p-5 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-xs uppercase tracking-[0.2em] text-cream-dim">{t.contacts.socialsLabel}</span>
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
function Footer({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.masters, href: "#masters" },
    { label: t.nav.contacts, href: "#contacts" },
  ];
  const serviceNames = t.services.items.slice(0, 5).map((s) => s.name);
  return (
    <footer className="mt-auto border-t border-ash/25 bg-ink grain-overlay">
      {/* Columns */}
      <div className="px-5 py-12 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-4">
              <BrandMark className="h-12 w-12 shrink-0 text-rust" />
              <div className="leading-none"><div className="font-anton text-3xl tracking-[0.06em] text-cream sm:text-4xl">{t.brandName}</div><div className="mt-1.5 font-display text-[0.62rem] uppercase tracking-[0.3em] text-brass">{t.footer.tagline}</div></div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {site.socials.map((s) => {
                const Icon = s.label === "Instagram" ? InstagramIcon : s.label === "Telegram" ? TelegramIcon : VkIcon;
                return <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center border border-ash/30 text-cream-dim hover:border-brass hover:text-brass" aria-label={`${t.brandName} on ${s.label}`}><Icon className="h-4 w-4" /></a>;
              })}
            </div>
          </div>
          <div><h3 className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-brass">{t.footer.navigate}</h3><ul className="mt-4 space-y-2.5">{navItems.map((item)=><li key={item.href}><a href={item.href} className="font-display text-sm uppercase tracking-[0.12em] text-cream-dim hover:text-rust">{item.label}</a></li>)}</ul></div>
          <div><h3 className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-brass">{t.footer.servicesCol}</h3><ul className="mt-4 space-y-2.5">{serviceNames.map((s)=><li key={s}><a href="#services" className="font-display text-sm text-cream-dim hover:text-rust">{s}</a></li>)}</ul></div>
          <div><h3 className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-brass">{t.footer.contactCol}</h3><ul className="mt-4 space-y-3"><li className="flex items-start gap-2.5 text-sm text-cream-dim"><PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass" />{site.address}</li><li><a href={site.phoneHref} className="flex items-center gap-2.5 text-sm text-cream-dim hover:text-rust"><PhoneIcon className="h-4 w-4 shrink-0 text-brass" />{site.phone}</a></li><li className="flex items-center gap-2.5 text-sm text-cream-dim"><ClockIcon className="h-4 w-4 shrink-0 text-brass" />{site.hours}</li></ul></div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-ash/15 px-5 py-6 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-display text-[0.65rem] uppercase tracking-[0.18em] text-ash">© {year} {site.name}. {t.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-display text-[0.65rem] uppercase tracking-[0.18em] text-ash">
            <button type="button" onClick={onOpenPrivacy} className="underline decoration-ash/40 underline-offset-4 transition-colors hover:text-brass hover:decoration-brass">{t.footer.privacy}</button>
            <span className="hidden h-1 w-1 rounded-full bg-ash/50 sm:inline-block" aria-hidden="true" />
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-brass/70" aria-hidden="true" />{t.footer.cookieNote}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============ PRIVACY MODAL ============ */
function PrivacyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useI18n();
  const panelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={t.footer.privacyTitle}>
      <button type="button" className="absolute inset-0 cursor-default bg-ink/85 backdrop-blur-sm" onClick={onClose} aria-label={t.footer.closeLabel} tabIndex={-1} />
      <div ref={panelRef} tabIndex={-1} className="relative flex max-h-[85vh] w-full max-w-2xl flex-col border border-ash/30 bg-ink-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] outline-none">
        <span className="pointer-events-none absolute left-2 top-2 z-20 h-3 w-3 border-l border-t border-brass/60" />
        <span className="pointer-events-none absolute right-2 top-2 z-20 h-3 w-3 border-r border-t border-brass/60" />
        <span className="pointer-events-none absolute bottom-2 left-2 z-20 h-3 w-3 border-b border-l border-brass/60" />
        <span className="pointer-events-none absolute bottom-2 right-2 z-20 h-3 w-3 border-b border-r border-brass/60" />
        <div className="flex items-start justify-between gap-4 border-b border-ash/20 p-6 sm:p-8">
          <div>
            <div className="flex items-center gap-2 text-brass"><span className="bulb-dot" /><span className="font-display text-[0.6rem] uppercase tracking-[0.3em]">{t.brandName}</span></div>
            <h2 className="mt-3 font-anton text-2xl text-cream sm:text-3xl">{t.footer.privacyTitle}</h2>
            <p className="mt-2 text-xs text-cream-dim">{t.footer.privacyUpdated}</p>
          </div>
          <button type="button" onClick={onClose} className="flex h-10 w-10 shrink-0 items-center justify-center border border-ash/30 text-cream-dim transition-colors hover:border-rust hover:bg-rust hover:text-cream" aria-label={t.footer.closeLabel}><CloseIcon className="h-5 w-5" /></button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-6 sm:p-8">
          <div className="space-y-6">
            {t.footer.privacyBody.map((item) => (
              <div key={item.h}>
                <h3 className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-brass"><span className="h-px w-5 bg-brass/60" />{item.h}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream-dim">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ COOKIE BAR ============ */
const COOKIE_KEY = "stal-cookie-ok";

function CookieBar({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  const { t } = useI18n();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    let dismissed = false;
    try { dismissed = window.localStorage.getItem(COOKIE_KEY) === "1"; } catch { /* приватный режим — просто покажем плашку */ }
    if (dismissed) return;
    const timer = window.setTimeout(() => setShow(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    try { window.localStorage.setItem(COOKIE_KEY, "1"); } catch { /* ок, просто закрываем */ }
  };

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-[60] border border-ash/30 bg-ink-2/95 p-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-500 sm:bottom-5 sm:right-auto sm:max-w-sm ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      role="region"
      aria-label="Cookies"
      aria-hidden={!show}
    >
      <span className="pointer-events-none absolute left-1.5 top-1.5 h-2.5 w-2.5 border-l border-t border-brass/50" />
      <span className="pointer-events-none absolute right-1.5 top-1.5 h-2.5 w-2.5 border-r border-t border-brass/50" />
      <div className="flex items-center gap-2 font-display text-[0.62rem] uppercase tracking-[0.3em] text-brass"><span className="bulb-dot" />Cookies</div>
      <p className="mt-3 text-[0.82rem] leading-relaxed text-cream-dim">{t.footer.cookieText}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <button type="button" onClick={onOpenPrivacy} className="font-display text-[0.68rem] uppercase tracking-[0.16em] text-cream-dim underline decoration-ash/40 underline-offset-4 transition-colors hover:text-brass hover:decoration-brass">{t.footer.privacy}</button>
        <button type="button" onClick={dismiss} className="btn-rust px-4 py-2.5 text-xs">{t.footer.cookieOk}</button>
      </div>
    </div>
  );
}

function BackToTop() {
  const { t } = useI18n();
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button type="button" onClick={() => window.scrollTo({top:0,behavior:"smooth"})} className={`fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center border border-brass/50 bg-ink/90 text-brass backdrop-blur-sm transition-all duration-300 hover:border-rust hover:bg-rust hover:text-cream ${show?"translate-y-0 opacity-100":"pointer-events-none translate-y-4 opacity-0"}`} aria-label={t.ui.backToTop}><ArrowUpIcon className="h-5 w-5" /></button>
  );
}

/* ============ FLOATING BOOK CTA ============ */
function FloatingBook() {
  const { t } = useI18n();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const hero = document.getElementById("top");
    const booking = document.getElementById("booking");
    if (!hero || !booking) return;

    let heroVisible = true;
    let bookingVisible = false;
    const update = () => setShow(!heroVisible && !bookingVisible);

    // Hero: срезаем 15% сверху и снизу — кнопка появляется, когда первый экран почти прошёл
    const heroObs = new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; update(); },
      { rootMargin: "-15% 0px -15% 0px" });
    // Booking: считаем видимым, когда блок реально вошёл в экран (не просто показался краем)
    const bookingObs = new IntersectionObserver(([e]) => { bookingVisible = e.isIntersecting; update(); },
      { rootMargin: "0px 0px -30% 0px" });

    heroObs.observe(hero);
    bookingObs.observe(booking);
    return () => { heroObs.disconnect(); bookingObs.disconnect(); };
  }, []);

  return (
    <button
      type="button"
      onClick={() => document.getElementById("booking-card")?.scrollIntoView({ behavior: "smooth", block: "center" })}
      className={`cta-float group fixed bottom-[5.5rem] right-5 z-40 flex items-center gap-2.5 border border-rust bg-rust px-4 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:bg-[#c75e38] hover:shadow-[0_0_0_1px_#a9793a,0_10px_28px_-8px_rgba(181,80,46,0.75)] hover:-translate-y-0.5 active:translate-y-0 sm:px-5 sm:py-3.5 sm:text-sm lg:flex ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
      aria-label={t.ui.bookNow}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream/70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-cream" />
      </span>
      <span className="hidden sm:inline">{t.ui.bookNow}</span>
      <span className="sm:hidden">{t.ui.book}</span>
      <ArrowDownIcon className="hidden h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 sm:block" />
    </button>
  );
}

/* ============ MAIN PAGE ============ */
export default function Home() {
  useScrollReveal();
  const [privacyOpen, setPrivacyOpen] = React.useState(false);
  const openPrivacy = React.useCallback(() => setPrivacyOpen(true), []);
  const closePrivacy = React.useCallback(() => setPrivacyOpen(false), []);
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
        <Booking />
        <Contacts />
      </main>
      <Footer onOpenPrivacy={openPrivacy} />
      <BackToTop />
      <FloatingBook />
      <CookieBar onOpenPrivacy={openPrivacy} />
      <PrivacyModal open={privacyOpen} onClose={closePrivacy} />
    </div>
  );
}
