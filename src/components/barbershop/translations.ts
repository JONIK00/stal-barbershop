/**
 * IRON & OAK — i18n translations (RU + EN)
 * Русский — основной язык, English — переключаемый.
 */

export type Lang = "ru" | "en";

export type Dict = {
  brandName: string;
  nav: { about: string; services: string; masters: string; work: string; reviews: string; faq: string; contacts: string };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    ctaBook: string;
    ctaBoard: string;
    stats: { value: string; label: string }[];
  };
  ticker: string[];
  about: {
    eyebrow: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    p3: string;
    badgeValue: string;
    badgeLabel: string;
    pillars: { label: string }[];
  };
  services: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    firstChairLabel: string;
    firstChairValue: string;
    footnote: string;
    cta: string;
    popular: string;
    items: { no: string; name: string; desc: string; duration: string; price: string; popular?: boolean }[];
  };
  masters: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    items: { name: string; nickname: string; specialty: string; experience: string; bio: string; quote: string; signatureCuts: string[]; stats: { label: string; value: string }[] }[];
  };
  portfolio: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    filters: { all: string; cuts: string; beards: string; shaves: string };
    items: { title: string; category: "cuts" | "beards" | "shaves" }[];
  };
  booking: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    phoneLabel: string;
    hoursLabel: string;
    addressLabel: string;
    messengerLabel: string;
    widgetTitle: string;
    widgetDesc: string;
    widgetCta: string;
    widgetNote: string;
    cta: string;
  };
  bookingForm: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    masterLabel: string;
    masterAny: string;
    dateLabel: string;
    timeLabel: string;
    timeAny: string;
    timeMorning: string;
    timeLunch: string;
    timeEvening: string;
    timeLate: string;
    notesLabel: string;
    notesPlaceholder: string;
    submit: string;
    sending: string;
    spamNote: string;
    successTitle: string;
    successDesc: string;
    successCall: string;
    successAgain: string;
  };
  reviews: {
    eyebrow: string;
    title1: string;
    title2: string;
    reviewsCount: string;
    items: { name: string; role: string; text: string; date: string }[];
  };
  faq: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    items: { q: string; a: string; category: string }[];
  };
  contacts: {
    eyebrow: string;
    title1: string;
    title2: string;
    addressLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    socialsLabel: string;
    openMap: string;
  };
  footer: {
    tagline: string;
    navigate: string;
    servicesCol: string;
    contactCol: string;
    bookCol: string;
    bookDesc: string;
    bookCta: string;
    copyright: string;
    motto: string;
  };
  ui: {
    book: string;
    call: string;
    bookChair: string;
    backToTop: string;
    openMenu: string;
    closeMenu: string;
    skipContent: string;
    langToggle: string;
  };
};

export const translations: Record<Lang, Dict> = {
  ru: {
    brandName: "СТАЛЬ",
    nav: { about: "О нас", services: "Услуги", masters: "Мастер", work: "Работы", reviews: "Отзывы", faq: "Вопросы", contacts: "Контакты" },
    hero: {
      badge: "Москва · Барбершоп",
      title1: "Стрижки с",
      title2: "характером.",
      desc: "Чёткие стрижки, оформленные бороды и бритьё опасной бритвой. Никаких трендов. Никакой болтовни. Только ремесло — сделанное как надо.",
      ctaBook: "Записаться онлайн",
      ctaBoard: "Прайс",
      stats: [],
    },
    ticker: ["ВОЗЬМЁМ БЕЗ ЗАПИСИ","ПН–ВС 10:00–22:00","БРИТЬЁ ОПАСНОЙ БРИТВОЙ","ОНЛАЙН-ЗАПИСЬ — ПЕРВЫЙ СТУЛ 10:00","ГОРЯЧЕЕ ПОЛОТЕНЦЕ · КОЖА · ЛАТУНЬ","+7 925 038-75-74"],
    about: {
      eyebrow: "О нас",
      title1: "Не тренд.",
      title2: "Ремесло.",
      p1: "Мужские стрижки, оформление бороды и бритьё опасной бритвой. Без лишних слов и суеты — только работа, сделанная как надо.",
      p2: "Каждый клиент получает полное внимание мастера. От консультации до укладки — никаких конвейеров и заготовок.",
      p3: "Садись в кресло. Дальше — наша работа.",
      badgeValue: "",
      badgeLabel: "",
      pillars: [{ label: "Настоящие лезвия" }, { label: "Ручная работа" }, { label: "Чёткие линии" }],
    },
    services: {
      eyebrow: "Услуги и цены",
      title1: "Все работы —",
      title2: "на доске.",
      desc: "Честная работа, фиксированные цены, без сюрпризов на кассе.",
      firstChairLabel: "Первый стул",
      firstChairValue: "10:00 ежедневно",
      footnote: "Цены фиксированные.",
      cta: "Записаться",
      popular: "Хит",
      items: [
        { no: "01", name: "Мужская стрижка", desc: "Полный цикл: консультация, стрижка, укладка. Под твои волосы и форму лица.", duration: "30 мин", price: "1000 ₽" },
        { no: "02", name: "Стрижка под одну насадку (одна насадка)", desc: "Минимум движений — максимум порядка. Ровно, быстро, без компромиссов.", duration: "15 мин", price: "500 ₽" },
        { no: "03", name: "Моделирование бороды", desc: "Чёткие линии, нужная форма. Борода, которая подчёркивает твой характер.", duration: "30 мин", price: "800 ₽", popular: true },
        { no: "04", name: "Опасное бритьё", desc: "Классика, проверенная временем. Бритва, горячее полотенце и чистый результат с уважением к традициям.", duration: "30 мин", price: "900 ₽" },
        { no: "05", name: "Бритьё шейвером", desc: "Максимум чистоты — без лишней суеты. Точно по форме: убираем щетину, освежаем образ, не раздражая кожу. Гладко, аккуратно, как надо.", duration: "15 мин", price: "700 ₽" },
        { no: "06", name: "Детская стрижка (до 10 лет включительно)", desc: "Терпеливые руки для маленьких. Без экранов, без слёз — обычно.", duration: "30 мин", price: "800 ₽" },
        { no: "07", name: "Тонировка бороды (American Crew)", desc: "Профессиональная краска для бороды. Закрашивает седину, сохраняет естественный оттенок.", duration: "15 мин", price: "700 ₽" },
        { no: "08", name: "Тонировка головы (American Crew)", desc: "Профессиональная краска для волос. Равномерный тон, закрашивание седины.", duration: "15 мин", price: "1100 ₽" },
        { no: "09", name: "Черная маска (American Crew)", desc: "Очищающая маска для лица. Убирает чёрные точки, освежает кожу.", duration: "15 мин", price: "700 ₽" },
        { no: "10", name: "Восковая эпиляция", desc: "Удаление нежелательных волос воском. Чисто, аккуратно, надолго.", duration: "5 мин", price: "400 ₽" },
      ],
    },
    masters: {
      eyebrow: "Мастер",
      title1: "За",
      title2: "креслом.",
      desc: "Единственный мастер и хозяин кресла. Стрижёт, бреёт, оформляет — всё лично.",
      items: [
        { name: "Шах", nickname: "Шах", specialty: "Мастер-барбер", experience: "", bio: "", quote: "", signatureCuts: [], stats: [] },
      ],
    },
    portfolio: {
      eyebrow: "Недавние работы",
      title1: "С",
      title2: "кресла.",
      desc: "Несколько кадров за последние недели. Реальные клиенты, реальные утра, без фильтров.",
      filters: { all: "Все", cuts: "Стрижки", beards: "Бороды", shaves: "Бритьё" },
      items: [
        { title: "Мужская стрижка", category: "cuts" },
        { title: "Моделирование бороды", category: "beards" },
        { title: "Опасное бритьё", category: "shaves" },
        { title: "Бритьё шейвером", category: "shaves" },
        { title: "Тонировка бороды", category: "beards" },
        { title: "Детская стрижка", category: "cuts" },
      ],
    },
    booking: {
      eyebrow: "Онлайн-запись",
      title1: "Забронируй",
      title2: "кресло.",
      desc: "Выбери услугу, выбери время, приходи. Просто и без звонков.",
      phoneLabel: "Лучше по телефону? Позвони",
      hoursLabel: "Пн — Вс · 10:00 — 22:00",
      addressLabel: "ул. Михайлова, 39",
      messengerLabel: "Или напиши нам",
      widgetTitle: "Онлайн-запись",
      widgetDesc: "Здесь скоро появится форма онлайн-записи. А пока — звони или пиши в мессенджер:",
      widgetCta: "Записаться по телефону",
      widgetNote: "Подтвердим слот по смс в течение 10 минут.",
      cta: "Записаться",
    },
    bookingForm: {
      eyebrow: "Быстрая заявка",
      title1: "Без",
      title2: "ожидания.",
      desc: "Оставь имя и номер. Перезвоним с подтверждением — обычно в течение 10 минут в рабочие часы.",
      nameLabel: "Имя",
      namePlaceholder: "Иван Петров",
      phoneLabel: "Телефон",
      phonePlaceholder: "+7 999 123-45-67",
      serviceLabel: "Услуга",
      servicePlaceholder: "Выбери услугу…",
      masterLabel: "Мастер",
      masterAny: "Любой мастер",
      dateLabel: "Дата",
      timeLabel: "Время",
      timeAny: "Любое",
      timeMorning: "Утро · 10–13",
      timeLunch: "Обед · 13–16",
      timeEvening: "Вечер · 16–20",
      timeLate: "Поздний · 20–22",
      notesLabel: "Примечание",
      notesPlaceholder: "Длина бороды, детское кресло, первый визит — что стоит знать.",
      submit: "Отправить заявку",
      sending: "Отправка…",
      spamNote: "Без спама. Звоним только для подтверждения.",
      successTitle: "Заявка принята.",
      successDesc: "Приняли. Перезвоним в течение 10 минут в рабочие часы для подтверждения слота. Подожди.",
      successCall: "Или позвони",
      successAgain: "Отправить ещё",
    },
    reviews: {
      eyebrow: "Слово клиентов",
      title1: "От",
      title2: "постоянных.",
      reviewsCount: "отзывов",
      items: [
        { name: "Андрей К.", role: "Постоянный · 2 года", text: "Лучший фейд в Москве. Дмитрий не разговаривает, пока ты не начнёшь. Уважение. Выхожу — линия чистая три недели.", date: "Март 2025" },
        { name: "Сергей М.", role: "Бритьё регулярно", text: "Бритьё опасной бритвой с горячими полотенцами. Вышел новым человеком. Стоит каждого рубля. Левин знает своё лезвие.", date: "Февраль 2025" },
        { name: "Иван П.", role: "Первый визит", text: "Одно помещение стоит визита. Бетон, кожа, старые кресла. Стрижки острые как бритва. Записался на следующий ещё по дороге.", date: "Февраль 2025" },
        { name: "Николай Р.", role: "Постоянный · 1 год", text: "Добротная работа, атмосфера. Онлайн-запись без проблем. Снял звезду за ожидание один раз — теперь плотнее.", date: "Январь 2025" },
        { name: "Дмитрий В.", role: "Борода", text: "Марк — волшебник с лезвием. Три недели — линия держится. Никуда больше не хожу. И кофе неплохой.", date: "Декабрь 2024" },
      ],
    },
    faq: {
      eyebrow: "Вопросы",
      title1: "Перед",
      title2: "визитом.",
      desc: "Короткая версия того, что спрашивают все. Если нет ответа — напиши, отвечаем быстро.",
      items: [
        { q: "Нужна запись или можно просто зайти?", a: "Без записи берём, но кресло заполняется быстро — особенно вечером и в выходные. Запись заранее — выбираешь мастера и время. Без ожидания, без догадок.", category: "Запись" },
        { q: "За сколько приходить?", a: "Пяти минут хватит. Десять — если первый раз: запишем данные, обсудим, что хочешь. Опоздание до 10 минут — ок, дальше придётся укоротить услугу.", category: "Запись" },
        { q: "Что если опаздываю или нужно отменить?", a: "Пиши или звони. Кресло держим 10 минут. Отмена бесплатна за 4 часа до слота — дальше просим половину стоимости. Мы адекватные, говори.", category: "Запись" },
        { q: "Сколько длится стрижка?", a: "Стрижка ножницами — 45 минут. Стрижка и борода — 70. Королевское бритьё — все 45, бритву не торопят. Добавь 15, если хочешь мытьё и кофе.", category: "Кресло" },
        { q: "Можно принести фото?", a: "Да — и лучше так. Фото лучше десяти минут описаний. Но скажем прямо, если стрижка не пойдёт с твоими волосами. Это наша работа.", category: "Кресло" },
        { q: "Стрижёте детей?", a: "Да — до 12, 30 минут. В основном Ян. Принеси телефон или сок, терпение наше. Первая стрижка всегда медленнее — это нормально.", category: "Кресло" },
        { q: "Какие способы оплаты?", a: "Карта, наличные, Apple/Google Pay и QR-переводы. Крипту не берём. Чаевые приветствуются, но не обязательны — карта или нал.", category: "Оплата" },
        { q: "Продаёте средства для укладки?", a: "Небольшая полка — помады, масло для бороды, спрей с морской солью. То, чем пользуемся сами. Подскажем, что подойдёт, а не самое дорогое.", category: "Оплата" },
      ],
    },
    contacts: {
      eyebrow: "Найти кресло",
      title1: "Где мы",
      title2: "работаем.",
      addressLabel: "Адрес",
      phoneLabel: "Телефон",
      hoursLabel: "Часы",
      socialsLabel: "Следи за креслом",
      openMap: "Открыть в Яндекс.Картах",
    },
    footer: {
      tagline: "Барбершоп · Москва",
      navigate: "Навигация",
      servicesCol: "Услуги",
      contactCol: "Контакты",
      bookCol: "Запись",
      bookDesc: "Забронируй слот онлайн или позвони. Первый стул — в 10:00.",
      bookCta: "Записаться",
      copyright: "Все стрижки защищены.",
      motto: "Бетон · Сталь · Латунь",
    },
    ui: {
      book: "Запись",
      call: "Позвонить",
      bookChair: "Записаться",
      backToTop: "Наверх",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      skipContent: "К содержанию",
      langToggle: "EN",
    },
  },
  en: {
    brandName: "STEEL",
    nav: { about: "About", services: "Services", masters: "Master", work: "Work", reviews: "Reviews", faq: "FAQ", contacts: "Contacts" },
    hero: {
      badge: "Moscow · Barbershop",
      title1: "Cuts with",
      title2: "character.",
      desc: "Sharp cuts, sculpted beards, and straight-razor shaves. No trends. No small talk. Just the trade, done right.",
      ctaBook: "Book online",
      ctaBoard: "See the board",
      stats: [],
    },
    ticker: ["WALK-INS WELCOME","MON–SUN 10:00–22:00","STRAIGHT-RAZOR SHAVES","BOOK ONLINE — FIRST CHAIR 10:00","HOT TOWEL · LEATHER · BRASS","+7 925 038-75-74"],
    about: {
      eyebrow: "About us",
      title1: "Not a trend.",
      title2: "A trade.",
      p1: "Men's cuts, beard sculpting, and straight-razor shaves. No extra talk, no fuss — just the work, done right.",
      p2: "Every client gets the master's full attention. From consultation to finish — no conveyor, no templates.",
      p3: "Take the chair. The rest is our job.",
      badgeValue: "",
      badgeLabel: "",
      pillars: [{ label: "Real blades" }, { label: "Hand work" }, { label: "Sharp lines" }],
    },
    services: {
      eyebrow: "Services & prices",
      title1: "The works,",
      title2: "on the board.",
      desc: "Honest work, fixed prices, no surprises at the till.",
      firstChairLabel: "First chair",
      firstChairValue: "10:00 daily",
      footnote: "Prices are fixed.",
      cta: "Book your chair",
      popular: "Most booked",
      items: [
        { no: "01", name: "Men's Haircut", desc: "Full cycle: consultation, cut, styling. Tailored to your hair and face shape.", duration: "30 min", price: "1000 ₽" },
        { no: "02", name: "Clipper Cut (one guard)", desc: "Minimum moves — maximum order. Even, fast, no compromises.", duration: "15 min", price: "500 ₽" },
        { no: "03", name: "Beard Sculpting", desc: "Sharp lines, the right shape. A beard that highlights your character.", duration: "30 min", price: "800 ₽", popular: true },
        { no: "04", name: "Straight-Razor Shave", desc: "A classic, proven by time. Razor, hot towel, and a clean result with respect for tradition.", duration: "30 min", price: "900 ₽" },
        { no: "05", name: "Shaver Shave", desc: "Maximum cleanliness — no fuss. Precisely along the shape: remove stubble, refresh the look, without irritating the skin. Smooth, neat, done right.", duration: "15 min", price: "700 ₽" },
        { no: "06", name: "Kids' Cut (up to 10 years)", desc: "Patient hands for the little ones. No screens, no tears — mostly.", duration: "30 min", price: "800 ₽" },
        { no: "07", name: "Beard Tinting (American Crew)", desc: "Professional beard dye. Covers grey, keeps a natural shade.", duration: "15 min", price: "700 ₽" },
        { no: "08", name: "Hair Tinting (American Crew)", desc: "Professional hair dye. Even tone, grey coverage.", duration: "15 min", price: "1100 ₽" },
        { no: "09", name: "Black Mask (American Crew)", desc: "Purifying face mask. Removes blackheads, refreshes the skin.", duration: "15 min", price: "700 ₽" },
        { no: "10", name: "Wax Epilation", desc: "Wax hair removal. Clean, neat, long-lasting.", duration: "5 min", price: "400 ₽" },
      ],
    },
    masters: {
      eyebrow: "Master",
      title1: "Behind the",
      title2: "chair.",
      desc: "The sole master and owner of the chair. Cuts, shaves, sculpts — all personally.",
      items: [
        { name: "Shah", nickname: "Shah", specialty: "Master Barber", experience: "", bio: "", quote: "", signatureCuts: [], stats: [] },
      ],
    },
    portfolio: {
      eyebrow: "Recent work",
      title1: "Off the",
      title2: "chair.",
      desc: "A sample from the last few weeks. Real clients, real mornings, no filters.",
      filters: { all: "All", cuts: "Cuts", beards: "Beards", shaves: "Shaves" },
      items: [
        { title: "Men's Haircut", category: "cuts" },
        { title: "Beard Sculpting", category: "beards" },
        { title: "Straight-Razor Shave", category: "shaves" },
        { title: "Shaver Shave", category: "shaves" },
        { title: "Beard Tinting", category: "beards" },
        { title: "Kids' Cut", category: "cuts" },
      ],
    },
    booking: {
      eyebrow: "Online booking",
      title1: "Book your",
      title2: "chair.",
      desc: "Pick a service, pick a time, show up. Simple, no calls.",
      phoneLabel: "Prefer the phone? Call us",
      hoursLabel: "Mon — Sun · 10:00 — 22:00",
      addressLabel: "Mikhailova St., 39",
      messengerLabel: "Or message us",
      widgetTitle: "Online booking",
      widgetDesc: "The online booking form will appear here soon. For now — call or message us:",
      widgetCta: "Book by phone",
      widgetNote: "We'll confirm your slot by text within 10 minutes.",
      cta: "Book",
    },
    bookingForm: {
      eyebrow: "Quick request",
      title1: "Skip the",
      title2: "hold music.",
      desc: "Drop your name and number. We text you back with a confirmed slot — usually inside 10 minutes while we're open.",
      nameLabel: "Your name",
      namePlaceholder: "Ivan Petrov",
      phoneLabel: "Phone",
      phonePlaceholder: "+7 999 123-45-67",
      serviceLabel: "Service",
      servicePlaceholder: "Pick a service…",
      masterLabel: "Master",
      masterAny: "Any master",
      dateLabel: "Preferred date",
      timeLabel: "Preferred time",
      timeAny: "Any time",
      timeMorning: "Morning · 10–13",
      timeLunch: "Lunch · 13–16",
      timeEvening: "Evening · 16–20",
      timeLate: "Late · 20–22",
      notesLabel: "Notes",
      notesPlaceholder: "Beard length, kid's chair, first visit — anything we should know.",
      submit: "Send request",
      sending: "Sending…",
      spamNote: "No spam. We only call to confirm.",
      successTitle: "Request logged.",
      successDesc: "We've got it. The chair calls you back within 10 minutes during open hours to confirm your slot. Sit tight.",
      successCall: "Or call now",
      successAgain: "Send another",
    },
    reviews: {
      eyebrow: "Word on the chair",
      title1: "From the",
      title2: "regulars.",
      reviewsCount: "reviews",
      items: [
        { name: "Andrey K.", role: "Regular · 2 yrs", text: "Best fade I've had in Moscow. Dmitri doesn't talk unless you talk first. Respect. Walk out, line still clean three weeks later.", date: "March 2025" },
        { name: "Sergei M.", role: "Straight-razor regular", text: "Straight-razor shave with hot towels. Walked out feeling like a new man. Worth every ruble. Levin knows his blade.", date: "February 2025" },
        { name: "Ivan P.", role: "First visit", text: "The room alone is worth the trip. Concrete, leather, old-school chairs. Cuts are razor-sharp. Booked my next one on the way out.", date: "February 2025" },
        { name: "Nikolay R.", role: "Regular · 1 yr", text: "Solid work, cool atmosphere. Online booking was painless. Took one star for the wait once — scheduling's been tighter since.", date: "January 2025" },
        { name: "Dmitry V.", role: "Beard sculpting", text: "Mark is a wizard with the blade. Three weeks and the line still holds. I'm not going anywhere else. The coffee's not bad either.", date: "December 2024" },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title1: "Before",
      title2: "you sit.",
      desc: "The short version of the things everyone asks. If your question isn't here, text us — we answer fast.",
      items: [
        { q: "Do I need to book, or can I walk in?", a: "Walk-ins are welcome, but the chair fills fast — especially evenings and weekends. Booking ahead means you pick your master and your slot.", category: "Booking" },
        { q: "How early should I arrive?", a: "Five minutes is plenty. Ten if it's your first visit. Late is fine up to 10 minutes; after that we may need to shorten the service.", category: "Booking" },
        { q: "What if I'm running late or need to cancel?", a: "Text or call us. We hold the chair for 10 minutes. Cancellations are free up to 4 hours before your slot.", category: "Booking" },
        { q: "How long does a cut take?", a: "A scissor cut is 45 minutes. Cut and beard together, 70. The Royal straight-razor shave needs the full 45.", category: "The chair" },
        { q: "Can I bring a photo of what I want?", a: "Yes — and we'd rather you did. A photo beats ten minutes of describing. But we'll tell you straight if the cut won't work.", category: "The chair" },
        { q: "Do you cut kids' hair?", a: "We do — under 12s, 30 minutes. Yan handles most of them. Bring a phone or a juice, we bring the patience.", category: "The chair" },
        { q: "What payment do you take?", a: "Card, cash, Apple/Google Pay, and QR transfers. Tips are welcome but never expected.", category: "Payment" },
        { q: "Do you sell product?", a: "A short rack — pomades, beard oil, sea salt spray. The stuff we actually use.", category: "Payment" },
      ],
    },
    contacts: {
      eyebrow: "Find the chair",
      title1: "Where we",
      title2: "do the work.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      hoursLabel: "Hours",
      socialsLabel: "Follow the chair",
      openMap: "Open in Yandex Maps",
    },
    footer: {
      tagline: "Barbershop · Moscow",
      navigate: "Navigate",
      servicesCol: "Services",
      contactCol: "Contact",
      bookCol: "Book",
      bookDesc: "Reserve a slot online or call ahead. First chair opens at 10:00.",
      bookCta: "Book your chair",
      copyright: "All cuts reserved.",
      motto: "Concrete · Steel · Brass",
    },
    ui: {
      book: "Book",
      call: "Call",
      bookChair: "Book a chair",
      backToTop: "Back to top",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skipContent: "Skip to content",
      langToggle: "RU",
    },
  },
};
