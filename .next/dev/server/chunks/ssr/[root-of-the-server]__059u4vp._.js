module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/components/barbershop/i18n.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$barbershop$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/barbershop/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const I18nContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
const STORAGE_KEY = "ironoak_lang";
function I18nProvider({ children }) {
    // RU — основной язык по умолчанию.
    const [lang, setLangState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("ru");
    // Загружаем сохранённый язык при монтировании.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "ru" || saved === "en") {
                setLangState(saved);
            }
        } catch  {
        // localStorage недоступен — оставляем RU.
        }
    }, []);
    // Обновляем <html lang> при смене языка.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (typeof document !== "undefined") {
            document.documentElement.lang = lang;
        }
    }, [
        lang
    ]);
    const setLang = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((l)=>{
        setLangState(l);
        try {
            localStorage.setItem(STORAGE_KEY, l);
        } catch  {}
    }, []);
    const toggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        setLangState((prev)=>{
            const next = prev === "ru" ? "en" : "ru";
            try {
                localStorage.setItem(STORAGE_KEY, next);
            } catch  {}
            return next;
        });
    }, []);
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            lang,
            t: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$barbershop$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][lang],
            setLang,
            toggle
        }), [
        lang,
        setLang,
        toggle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/barbershop/i18n.tsx",
        lineNumber: 67,
        columnNumber: 10
    }, this);
}
function useI18n() {
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](I18nContext);
    if (!ctx) {
        throw new Error("useI18n must be used within I18nProvider");
    }
    return ctx;
}
}),
"[project]/src/components/barbershop/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * IRON & OAK — i18n translations (RU + EN)
 * Русский — основной язык, English — переключаемый.
 */ __turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    ru: {
        nav: {
            about: "О нас",
            services: "Услуги",
            masters: "Мастера",
            work: "Работы",
            reviews: "Отзывы",
            faq: "Вопросы",
            contacts: "Контакты"
        },
        hero: {
            badge: "Москва · Лофт-барбершоп",
            title1: "Стрижки с",
            title2: "характером.",
            desc: "Чёткие стрижки, оформленные бороды и бритьё опасной бритвой в помещении, где пахнет кожей, латунью и горячим полотенцем. Никаких трендов. Никакой болтовни. Только ремесло — сделанное как надо.",
            ctaBook: "Записаться онлайн",
            ctaBoard: "Прайс",
            stats: [
                {
                    value: "12",
                    label: "Лет в деле"
                },
                {
                    value: "4",
                    label: "Мастера"
                },
                {
                    value: "8",
                    label: "Услуг в прайсе"
                },
                {
                    value: "4.9",
                    label: "Рейтинг · 312 отзывов"
                }
            ]
        },
        ticker: [
            "ВОЗЬМЁМ БЕЗ ЗАПИСИ",
            "ПН–ВС 10:00–22:00",
            "БРИТЬЁ ОПАСНОЙ БРИТВОЙ",
            "ОНЛАЙН-ЗАПИСЬ — ПЕРВЫЙ СТУЛ 10:00",
            "ГОРЯЧЕЕ ПОЛОТЕНЦЕ · КОЖА · ЛАТУНЬ",
            "+7 495 234-56-78"
        ],
        about: {
            eyebrow: "Наша история",
            title1: "Не тренд.",
            title2: "Ремесло.",
            p1: "Мы не гонимся за картинками из ленты. Мы делаем стрижки, которые держатся до понедельника, и бритьё, ради которого стоит заказать второй кофе.",
            p2: "IRON & OAK открылся в бывшем гараже на Красногвардейской. Мы оставили бетон, сталь и характер — добавили три кресла, горячее полотенце и барсучью кисть для каждого, кто садится.",
            p3: "Ты садишься. Мы работаем.",
            badgeValue: "12",
            badgeLabel: "Лет за\nкреслом",
            pillars: [
                {
                    label: "Настоящие лезвия"
                },
                {
                    label: "Ручная работа"
                },
                {
                    label: "Чёткие линии"
                }
            ]
        },
        services: {
            eyebrow: "Услуги и цены",
            title1: "Все работы —",
            title2: "на доске.",
            desc: "Честная работа, фиксированные цены, без сюрпризов на кассе. Выбери одну или собери набор — кресло твоё.",
            firstChairLabel: "Первый стул",
            firstChairValue: "10:00 ежедневно",
            footnote: "Цены фиксированные. Стрижка до 12 лет — сок в подарок.",
            cta: "Записаться",
            popular: "Хит",
            items: [
                {
                    no: "01",
                    name: "Стрижка ножницами/машинкой",
                    desc: "Полный цикл: мытьё, стрижка, укладка. Под твои волосы, а не под пинтерест.",
                    duration: "45 мин",
                    price: "2 200 ₽"
                },
                {
                    no: "02",
                    name: "Оформление бороды",
                    desc: "Контур, форма, стрижка. Идём по росту, а не по тренду.",
                    duration: "30 мин",
                    price: "1 500 ₽"
                },
                {
                    no: "03",
                    name: "Стрижка + борода",
                    desc: "Полный сброс. Стрижка, борода и укладка, которая держится неделями.",
                    duration: "70 мин",
                    price: "3 200 ₽",
                    popular: true
                },
                {
                    no: "04",
                    name: "Камуфляж седины",
                    desc: "Убрать серебро, сохранить достоинство. Аккуратно, без эффекта крашки.",
                    duration: "30 мин",
                    price: "1 800 ₽"
                },
                {
                    no: "05",
                    name: "Детская стрижка · до 12",
                    desc: "Терпеливые руки для маленьких. Без экранов, без слёз — обычно.",
                    duration: "30 мин",
                    price: "1 400 ₽"
                },
                {
                    no: "06",
                    name: "Королевское бритьё",
                    desc: "Горячие полотенца, барсучья кисть и настоящая бритва. Как должно быть.",
                    duration: "45 мин",
                    price: "2 400 ₽",
                    popular: true
                },
                {
                    no: "07",
                    name: "Укладка",
                    desc: "Мытьё, полотенце и фиксация, которая переживёт метро и погоду.",
                    duration: "20 мин",
                    price: "900 ₽"
                },
                {
                    no: "08",
                    name: "Усы — оформление",
                    desc: "Воск, форма и чистая линия над губой. Мелочь, а разница большая.",
                    duration: "20 мин",
                    price: "800 ₽"
                }
            ]
        },
        masters: {
            eyebrow: "Руки",
            title1: "За",
            title2: "креслом.",
            desc: "Четыре барбера, один стандарт. Каждый заслужил своё кресло — и держит его.",
            items: [
                {
                    name: "Дмитрий Волков",
                    nickname: "Iron",
                    specialty: "Мастер-барбер · Владелец",
                    experience: "12 лет за креслом",
                    bio: "Открыл IRON & OAK в 2013 после семи лет работы в Лондоне и Петербурге. Классическая работа ножницами, имя — на фейдах. Держит мастерскую как кресло — без сокращений, без пустой болтовни.",
                    quote: "Стрижка либо держится три недели, либо нет. Моя держится.",
                    signatureCuts: [
                        "Фейд под ноль",
                        "Ножницами",
                        "Камуфляж седины"
                    ],
                    stats: [
                        {
                            label: "Стрижек",
                            value: "18 400+"
                        },
                        {
                            label: "Лет",
                            value: "12"
                        },
                        {
                            label: "Фирменное",
                            value: "Фейд"
                        }
                    ]
                },
                {
                    name: "Алексей Сорокин",
                    nickname: "Сорокин",
                    specialty: "Фейд и текстура",
                    experience: "8 лет · фейд-специалист",
                    bio: "Начал в сетевом барбершопе, ушёл делать настоящее. Специализация — текстурные кропы и средние фейды. Тот, кого бронишь, когда хочется «небрежно» — и чтобы держалось до пятницы.",
                    quote: "«Небрежно» — сложнее всего подстричь.",
                    signatureCuts: [
                        "Текстурный кроп",
                        "Средний фейд",
                        "Базз"
                    ],
                    stats: [
                        {
                            label: "Стрижек",
                            value: "9 200+"
                        },
                        {
                            label: "Лет",
                            value: "8"
                        },
                        {
                            label: "Фирменное",
                            value: "Кроп"
                        }
                    ]
                },
                {
                    name: "Марк Левин",
                    nickname: "Левин",
                    specialty: "Бритьё опасной бритвой",
                    experience: "15 лет с лезвием",
                    bio: "Пятнадцать лет с опасной бритвой и ноль порезов, о которых стоит помнить. Учился у старого московского мастера. Держит королевское бритьё — горячие полотенца, барсучья кисть, весь ритуал. Сиди тихо, дыши.",
                    quote: "Лезвие всё подскажет. Надо только слушать.",
                    signatureCuts: [
                        "Королевское бритьё",
                        "Борода",
                        "Горячее полотенце"
                    ],
                    stats: [
                        {
                            label: "Бритьёв",
                            value: "6 800+"
                        },
                        {
                            label: "Лет",
                            value: "15"
                        },
                        {
                            label: "Фирменное",
                            value: "Бритьё"
                        }
                    ]
                },
                {
                    name: "Ян Ковальский",
                    nickname: "Ковальский",
                    specialty: "Классика и детские",
                    experience: "4 года · новая школа, старый метод",
                    bio: "Новая рука на площадке. Учился у нас, силён в классических проборах и терпелив с детским креслом. Спокойная энергия и твёрдая расчёска — кресло, куда отправляешь сына.",
                    quote: "Классика — не значит старое. Значит, всё ещё работает.",
                    signatureCuts: [
                        "Классический пробор",
                        "Детская",
                        "Помпадур"
                    ],
                    stats: [
                        {
                            label: "Стрижек",
                            value: "3 600+"
                        },
                        {
                            label: "Лет",
                            value: "4"
                        },
                        {
                            label: "Фирменное",
                            value: "Пробор"
                        }
                    ]
                }
            ]
        },
        portfolio: {
            eyebrow: "Недавние работы",
            title1: "С",
            title2: "кресла.",
            desc: "Несколько кадров за последние недели. Реальные клиенты, реальные утра, без фильтров.",
            filters: {
                all: "Все",
                cuts: "Стрижки",
                beards: "Бороды",
                shaves: "Бритьё"
            },
            items: [
                {
                    title: "Фейд под ноль",
                    category: "cuts"
                },
                {
                    title: "Оформление бороды",
                    category: "beards"
                },
                {
                    title: "Помпадур назад",
                    category: "cuts"
                },
                {
                    title: "Бритьё бритвой",
                    category: "shaves"
                },
                {
                    title: "Текстурный кроп + борода",
                    category: "cuts"
                },
                {
                    title: "Классический пробор",
                    category: "cuts"
                }
            ]
        },
        booking: {
            eyebrow: "Онлайн-запись",
            title1: "Забронируй",
            title2: "кресло.",
            desc: "Выбери мастера, выбери время, приходи. Онлайн-запись идёт через Sonline — тот же календарь, что и за креслом.",
            phoneLabel: "Лучше по телефону? Позвони",
            hoursLabel: "Пн — Вс · 10:00 — 22:00",
            addressLabel: "Красногвардейский пр., 12/3",
            messengerLabel: "Или напиши нам",
            widgetTitle: "Выбери время",
            widgetDesc: "Виджет онлайн-записи появится здесь, как только вставите код Sonline. Пока — по старинке:",
            widgetCta: "Записаться по телефону",
            widgetNote: "Подтвердим слот по смс в течение 10 минут.",
            cta: "Записаться"
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
            successAgain: "Отправить ещё"
        },
        reviews: {
            eyebrow: "Слово клиентов",
            title1: "От",
            title2: "постоянных.",
            reviewsCount: "отзывов",
            items: [
                {
                    name: "Андрей К.",
                    role: "Постоянный · 2 года",
                    text: "Лучший фейд в Москве. Дмитрий не разговаривает, пока ты не начнёшь. Уважение. Выхожу — линия чистая три недели.",
                    date: "Март 2025"
                },
                {
                    name: "Сергей М.",
                    role: "Бритьё регулярно",
                    text: "Бритьё опасной бритвой с горячими полотенцами. Вышел новым человеком. Стоит каждого рубля. Левин знает своё лезвие.",
                    date: "Февраль 2025"
                },
                {
                    name: "Иван П.",
                    role: "Первый визит",
                    text: "Одно помещение стоит визита. Бетон, кожа, старые кресла. Стрижки острые как бритва. Записался на следующий ещё по дороге.",
                    date: "Февраль 2025"
                },
                {
                    name: "Николай Р.",
                    role: "Постоянный · 1 год",
                    text: "Добротная работа, атмосфера. Онлайн-запись без проблем. Снял звезду за ожидание один раз — теперь плотнее.",
                    date: "Январь 2025"
                },
                {
                    name: "Дмитрий В.",
                    role: "Борода",
                    text: "Марк — волшебник с лезвием. Три недели — линия держится. Никуда больше не хожу. И кофе неплохой.",
                    date: "Декабрь 2024"
                }
            ]
        },
        faq: {
            eyebrow: "Вопросы",
            title1: "Перед",
            title2: "визитом.",
            desc: "Короткая версия того, что спрашивают все. Если нет ответа — напиши, отвечаем быстро.",
            items: [
                {
                    q: "Нужна запись или можно просто зайти?",
                    a: "Без записи берём, но кресло заполняется быстро — особенно вечером и в выходные. Запись заранее — выбираешь мастера и время. Без ожидания, без догадок.",
                    category: "Запись"
                },
                {
                    q: "За сколько приходить?",
                    a: "Пяти минут хватит. Десять — если первый раз: запишем данные, обсудим, что хочешь. Опоздание до 10 минут — ок, дальше придётся укоротить услугу.",
                    category: "Запись"
                },
                {
                    q: "Что если опаздываю или нужно отменить?",
                    a: "Пиши или звони. Кресло держим 10 минут. Отмена бесплатна за 4 часа до слота — дальше просим половину стоимости. Мы адекватные, говори.",
                    category: "Запись"
                },
                {
                    q: "Сколько длится стрижка?",
                    a: "Стрижка ножницами — 45 минут. Стрижка и борода — 70. Королевское бритьё — все 45, бритву не торопят. Добавь 15, если хочешь мытьё и кофе.",
                    category: "Кресло"
                },
                {
                    q: "Можно принести фото?",
                    a: "Да — и лучше так. Фото лучше десяти минут описаний. Но скажем прямо, если стрижка не пойдёт с твоими волосами. Это наша работа.",
                    category: "Кресло"
                },
                {
                    q: "Стрижёте детей?",
                    a: "Да — до 12, 30 минут. В основном Ян. Принеси телефон или сок, терпение наше. Первая стрижка всегда медленнее — это нормально.",
                    category: "Кресло"
                },
                {
                    q: "Какие способы оплаты?",
                    a: "Карта, наличные, Apple/Google Pay и QR-переводы. Крипту не берём. Чаевые приветствуются, но не обязательны — карта или нал.",
                    category: "Оплата"
                },
                {
                    q: "Продаёте средства для укладки?",
                    a: "Небольшая полка — помады, масло для бороды, спрей с морской солью. То, чем пользуемся сами. Подскажем, что подойдёт, а не самое дорогое.",
                    category: "Оплата"
                }
            ]
        },
        contacts: {
            eyebrow: "Найти кресло",
            title1: "Где мы",
            title2: "работаем.",
            addressLabel: "Адрес",
            phoneLabel: "Телефон",
            hoursLabel: "Часы",
            socialsLabel: "Следи за креслом",
            openMap: "Открыть в Яндекс.Картах"
        },
        footer: {
            tagline: "Барбершоп · Москва · с 2013",
            navigate: "Навигация",
            servicesCol: "Услуги",
            contactCol: "Контакты",
            bookCol: "Запись",
            bookDesc: "Забронируй слот онлайн или позвони. Первый стул — в 10:00.",
            bookCta: "Записаться",
            copyright: "Все стрижки защищены.",
            motto: "Лофт · Бетон · Латунь"
        },
        ui: {
            book: "Запись",
            call: "Позвонить",
            bookChair: "Записаться",
            backToTop: "Наверх",
            openMenu: "Открыть меню",
            closeMenu: "Закрыть меню",
            skipContent: "К содержанию",
            langToggle: "EN"
        }
    },
    en: {
        nav: {
            about: "About",
            services: "Services",
            masters: "Masters",
            work: "Work",
            reviews: "Reviews",
            faq: "FAQ",
            contacts: "Contacts"
        },
        hero: {
            badge: "Moscow · Loft Barbershop",
            title1: "Cuts with",
            title2: "character.",
            desc: "Sharp cuts, sculpted beards, and straight-razor shaves in a room that smells of leather, brass, and hot towels. No trends. No small talk. Just the trade, done right.",
            ctaBook: "Book online",
            ctaBoard: "See the board",
            stats: [
                {
                    value: "12",
                    label: "Years sharp"
                },
                {
                    value: "4",
                    label: "Master barbers"
                },
                {
                    value: "8",
                    label: "Services on the board"
                },
                {
                    value: "4.9",
                    label: "Avg. rating · 312 reviews"
                }
            ]
        },
        ticker: [
            "WALK-INS WELCOME",
            "MON–SUN 10:00–22:00",
            "STRAIGHT-RAZOR SHAVES",
            "BOOK ONLINE — FIRST CHAIR 10:00",
            "HOT TOWEL · LEATHER · BRASS",
            "+7 495 234-56-78"
        ],
        about: {
            eyebrow: "Our story",
            title1: "Not a trend.",
            title2: "A trade.",
            p1: "We don't chase looks off a feed. We cut hair that holds up on Monday morning and shaves that earn a second coffee.",
            p2: "IRON & OAK started in a former mechanic's garage on Krasnogvardeyskaya. We kept the concrete, the steel, and the attitude — added three chairs, a hot-towel cabinet, and a badger brush for every man who sits down.",
            p3: "You take the chair. We shut up and work.",
            badgeValue: "12",
            badgeLabel: "Years behind\nthe chair",
            pillars: [
                {
                    label: "Real blades"
                },
                {
                    label: "Hand work"
                },
                {
                    label: "Sharp lines"
                }
            ]
        },
        services: {
            eyebrow: "Services & prices",
            title1: "The works,",
            title2: "on the board.",
            desc: "Honest work, fixed prices, no surprises at the till. Pick one or stack a few — the chair's yours for the booking.",
            firstChairLabel: "First chair",
            firstChairValue: "10:00 daily",
            footnote: "Prices are fixed. Cuts under 12 come with a juice box on the house.",
            cta: "Book your chair",
            popular: "Most booked",
            items: [
                {
                    no: "01",
                    name: "Scissor & Clipper Cut",
                    desc: "Full wash, cut, and finish. Built around your hair, not a Pinterest board.",
                    duration: "45 min",
                    price: "2 200 ₽"
                },
                {
                    no: "02",
                    name: "Beard Sculpting",
                    desc: "Line-up, shape, and trim. We follow the grain, not the trend.",
                    duration: "30 min",
                    price: "1 500 ₽"
                },
                {
                    no: "03",
                    name: "Cut & Beard",
                    desc: "The full reset. Cut, beard, and a finish that holds for weeks.",
                    duration: "70 min",
                    price: "3 200 ₽",
                    popular: true
                },
                {
                    no: "04",
                    name: "Grey Camouflage",
                    desc: "Blend the silver, keep the dignity. Subtle, never dyed-looking.",
                    duration: "30 min",
                    price: "1 800 ₽"
                },
                {
                    no: "05",
                    name: "Kids' Cut · under 12",
                    desc: "Patient hands for the small ones. No screens, no tears — mostly.",
                    duration: "30 min",
                    price: "1 400 ₽"
                },
                {
                    no: "06",
                    name: "Royal Straight-Razor Shave",
                    desc: "Hot towels, badger brush, and a real blade. The way it was meant to be.",
                    duration: "45 min",
                    price: "2 400 ₽",
                    popular: true
                },
                {
                    no: "07",
                    name: "Styling & Finish",
                    desc: "Wash, towel, and a hold that survives the metro and the weather.",
                    duration: "20 min",
                    price: "900 ₽"
                },
                {
                    no: "08",
                    name: "Mustache Trim & Shape",
                    desc: "Wax, shape, and a clean line above the lip. Small detail, big difference.",
                    duration: "20 min",
                    price: "800 ₽"
                }
            ]
        },
        masters: {
            eyebrow: "The hands",
            title1: "Behind the",
            title2: "chair.",
            desc: "Four barbers, one standard. Each one earned the chair — and keeps it.",
            items: [
                {
                    name: "Dmitri Volkov",
                    nickname: "Iron",
                    specialty: "Master Barber · Owner",
                    experience: "12 yrs behind the chair",
                    bio: "Opened IRON & OAK in 2013 after seven years cutting in London and St. Petersburg. Trained on classic scissor work, built his name on skin fades.",
                    quote: "A cut either holds for three weeks or it doesn't. Mine hold.",
                    signatureCuts: [
                        "Skin fade",
                        "Scissor cut",
                        "Grey camouflage"
                    ],
                    stats: [
                        {
                            label: "Cuts given",
                            value: "18 400+"
                        },
                        {
                            label: "Years",
                            value: "12"
                        },
                        {
                            label: "Signature",
                            value: "Skin fade"
                        }
                    ]
                },
                {
                    name: "Alexey Sorokin",
                    nickname: "Sorokin",
                    specialty: "Fade & Texture",
                    experience: "8 yrs · skin-fade specialist",
                    bio: "Came up in a chain shop, left to do real work. Specialises in texture crops and mid-fades.",
                    quote: "Effortless is the hardest thing to cut.",
                    signatureCuts: [
                        "Textured crop",
                        "Mid fade",
                        "Buzz style"
                    ],
                    stats: [
                        {
                            label: "Cuts given",
                            value: "9 200+"
                        },
                        {
                            label: "Years",
                            value: "8"
                        },
                        {
                            label: "Signature",
                            value: "Textured crop"
                        }
                    ]
                },
                {
                    name: "Mark Levin",
                    nickname: "Levin",
                    specialty: "Straight-Razor Shave",
                    experience: "15 yrs with the blade",
                    bio: "Fifteen years with a straight razor and zero nicks worth remembering. Handles the Royal Shave.",
                    quote: "The blade tells you everything. You just have to listen.",
                    signatureCuts: [
                        "Royal shave",
                        "Beard sculpt",
                        "Hot towel"
                    ],
                    stats: [
                        {
                            label: "Shaves given",
                            value: "6 800+"
                        },
                        {
                            label: "Years",
                            value: "15"
                        },
                        {
                            label: "Signature",
                            value: "Royal shave"
                        }
                    ]
                },
                {
                    name: "Yan Kovalsky",
                    nickname: "Kovalsky",
                    specialty: "Classic & Kids' Cuts",
                    experience: "4 yrs · new school, old trade",
                    bio: "The new hand on the floor. Sharp on classic side-parts and patient with the kids' chair.",
                    quote: "Classic doesn't mean old. It means it still works.",
                    signatureCuts: [
                        "Classic side part",
                        "Kids' cut",
                        "Pompadour"
                    ],
                    stats: [
                        {
                            label: "Cuts given",
                            value: "3 600+"
                        },
                        {
                            label: "Years",
                            value: "4"
                        },
                        {
                            label: "Signature",
                            value: "Side part"
                        }
                    ]
                }
            ]
        },
        portfolio: {
            eyebrow: "Recent work",
            title1: "Off the",
            title2: "chair.",
            desc: "A sample from the last few weeks. Real clients, real mornings, no filters.",
            filters: {
                all: "All",
                cuts: "Cuts",
                beards: "Beards",
                shaves: "Shaves"
            },
            items: [
                {
                    title: "Skin Fade Undercut",
                    category: "cuts"
                },
                {
                    title: "Sculpted Full Beard",
                    category: "beards"
                },
                {
                    title: "Slicked Pompadour",
                    category: "cuts"
                },
                {
                    title: "Straight-Razor Shave",
                    category: "shaves"
                },
                {
                    title: "Textured Crop + Beard",
                    category: "cuts"
                },
                {
                    title: "Gentleman's Side Part",
                    category: "cuts"
                }
            ]
        },
        booking: {
            eyebrow: "Online booking",
            title1: "Book your",
            title2: "chair.",
            desc: "Pick a master, pick a slot, show up. Online booking runs through Sonline — same calendar we use behind the chair.",
            phoneLabel: "Prefer the phone? Call us",
            hoursLabel: "Mon — Sun · 10:00 — 22:00",
            addressLabel: "Krasnogvardeyskaya Passage, 12/3",
            messengerLabel: "Or message us",
            widgetTitle: "Pick your slot",
            widgetDesc: "The live booking widget loads here once the Sonline embed is dropped in. Until then — book the old-fashioned way:",
            widgetCta: "Book by phone",
            widgetNote: "We'll confirm your slot by text within 10 minutes.",
            cta: "Book"
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
            successAgain: "Send another"
        },
        reviews: {
            eyebrow: "Word on the chair",
            title1: "From the",
            title2: "regulars.",
            reviewsCount: "reviews",
            items: [
                {
                    name: "Andrey K.",
                    role: "Regular · 2 yrs",
                    text: "Best fade I've had in Moscow. Dmitri doesn't talk unless you talk first. Respect. Walk out, line still clean three weeks later.",
                    date: "March 2025"
                },
                {
                    name: "Sergei M.",
                    role: "Straight-razor regular",
                    text: "Straight-razor shave with hot towels. Walked out feeling like a new man. Worth every ruble. Levin knows his blade.",
                    date: "February 2025"
                },
                {
                    name: "Ivan P.",
                    role: "First visit",
                    text: "The room alone is worth the trip. Concrete, leather, old-school chairs. Cuts are razor-sharp. Booked my next one on the way out.",
                    date: "February 2025"
                },
                {
                    name: "Nikolay R.",
                    role: "Regular · 1 yr",
                    text: "Solid work, cool atmosphere. Online booking was painless. Took one star for the wait once — scheduling's been tighter since.",
                    date: "January 2025"
                },
                {
                    name: "Dmitry V.",
                    role: "Beard sculpting",
                    text: "Mark is a wizard with the blade. Three weeks and the line still holds. I'm not going anywhere else. The coffee's not bad either.",
                    date: "December 2024"
                }
            ]
        },
        faq: {
            eyebrow: "Questions",
            title1: "Before",
            title2: "you sit.",
            desc: "The short version of the things everyone asks. If your question isn't here, text us — we answer fast.",
            items: [
                {
                    q: "Do I need to book, or can I walk in?",
                    a: "Walk-ins are welcome, but the chair fills fast — especially evenings and weekends. Booking ahead means you pick your master and your slot.",
                    category: "Booking"
                },
                {
                    q: "How early should I arrive?",
                    a: "Five minutes is plenty. Ten if it's your first visit. Late is fine up to 10 minutes; after that we may need to shorten the service.",
                    category: "Booking"
                },
                {
                    q: "What if I'm running late or need to cancel?",
                    a: "Text or call us. We hold the chair for 10 minutes. Cancellations are free up to 4 hours before your slot.",
                    category: "Booking"
                },
                {
                    q: "How long does a cut take?",
                    a: "A scissor cut is 45 minutes. Cut and beard together, 70. The Royal straight-razor shave needs the full 45.",
                    category: "The chair"
                },
                {
                    q: "Can I bring a photo of what I want?",
                    a: "Yes — and we'd rather you did. A photo beats ten minutes of describing. But we'll tell you straight if the cut won't work.",
                    category: "The chair"
                },
                {
                    q: "Do you cut kids' hair?",
                    a: "We do — under 12s, 30 minutes. Yan handles most of them. Bring a phone or a juice, we bring the patience.",
                    category: "The chair"
                },
                {
                    q: "What payment do you take?",
                    a: "Card, cash, Apple/Google Pay, and QR transfers. Tips are welcome but never expected.",
                    category: "Payment"
                },
                {
                    q: "Do you sell product?",
                    a: "A short rack — pomades, beard oil, sea salt spray. The stuff we actually use.",
                    category: "Payment"
                }
            ]
        },
        contacts: {
            eyebrow: "Find the chair",
            title1: "Where we",
            title2: "do the work.",
            addressLabel: "Address",
            phoneLabel: "Phone",
            hoursLabel: "Hours",
            socialsLabel: "Follow the chair",
            openMap: "Open in Yandex Maps"
        },
        footer: {
            tagline: "Barbershop · Moscow · Est. 2013",
            navigate: "Navigate",
            servicesCol: "Services",
            contactCol: "Contact",
            bookCol: "Book",
            bookDesc: "Reserve a slot online or call ahead. First chair opens at 10:00.",
            bookCta: "Book your chair",
            copyright: "All cuts reserved.",
            motto: "Loft · Concrete · Brass"
        },
        ui: {
            book: "Book",
            call: "Call",
            bookChair: "Book a chair",
            backToTop: "Back to top",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            skipContent: "Skip to content",
            langToggle: "RU"
        }
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__059u4vp._.js.map