// ==========================================================================
// Copy, in every language. Keep it short: one idea per line.
// ==========================================================================

const translations = {
    en: {
        navWork: "Work", navStack: "Stack", navWins: "Wins", navContact: "Contact",
        status: "Open to work",
        role: "AI/ML and backend · Nairobi",
        heroLead: "I build AI that", heroAccent: "people actually use.",
        heroText: "Software engineering student in Nairobi. I build with Python, FastAPI and the Claude API.",
        btnWork: "See my work", btnChat: "WhatsApp me",
        stat1: "at an MLH hackathon", stat2: "tests written", stat3: "of Rahah users scored higher",
        backTop: "Back to top"
    },
    sw: {
        navWork: "Kazi", navStack: "Zana", navWins: "Tuzo", navContact: "Wasiliana",
        status: "Napatikana kwa kazi",
        role: "AI/ML na backend · Nairobi",
        heroLead: "Ninaunda AI ambayo", heroAccent: "watu wanaitumia kweli.",
        heroText: "Mwanafunzi wa uhandisi wa programu jijini Nairobi. Natumia Python, FastAPI na Claude API.",
        btnWork: "Tazama kazi zangu", btnChat: "Nitumie WhatsApp",
        stat1: "katika hackathon ya MLH", stat2: "majaribio niliyoandika", stat3: "ya watumiaji wa Rahah walipata alama bora",
        backTop: "Rudi juu"
    },
    zh: {
        navWork: "作品", navStack: "技术栈", navWins: "荣誉", navContact: "联系",
        status: "欢迎合作",
        role: "AI/ML 与后端 · 内罗毕",
        heroLead: "我做的 AI，", heroAccent: "真的有人在用。",
        heroText: "内罗毕软件工程专业学生，常用 Python、FastAPI 和 Claude API。",
        btnWork: "看看作品", btnChat: "WhatsApp 联系",
        stat1: "MLH 黑客松名次", stat2: "个自动化测试", stat3: "的 Rahah 用户成绩提高",
        backTop: "回到顶部"
    },
    hi: {
        navWork: "काम", navStack: "स्टैक", navWins: "उपलब्धियाँ", navContact: "संपर्क",
        status: "काम के लिए उपलब्ध",
        role: "AI/ML और बैकएंड · नैरोबी",
        heroLead: "मैं ऐसा AI बनाता हूँ", heroAccent: "जिसे लोग सच में इस्तेमाल करते हैं।",
        heroText: "नैरोबी में सॉफ़्टवेयर इंजीनियरिंग का छात्र। Python, FastAPI और Claude API से बनाता हूँ।",
        btnWork: "मेरा काम देखें", btnChat: "WhatsApp करें",
        stat1: "MLH हैकाथॉन में", stat2: "टेस्ट लिखे", stat3: "Rahah यूज़र्स के अंक बढ़े",
        backTop: "ऊपर जाएँ"
    },
    es: {
        navWork: "Proyectos", navStack: "Stack", navWins: "Logros", navContact: "Contacto",
        status: "Disponible",
        role: "IA/ML y backend · Nairobi",
        heroLead: "Creo IA que", heroAccent: "la gente usa de verdad.",
        heroText: "Estudiante de ingeniería de software en Nairobi. Trabajo con Python, FastAPI y la API de Claude.",
        btnWork: "Ver proyectos", btnChat: "Escríbeme",
        stat1: "en un hackathon de MLH", stat2: "tests escritos", stat3: "de usuarios de Rahah mejoró sus notas",
        backTop: "Volver arriba"
    },
    fr: {
        navWork: "Projets", navStack: "Stack", navWins: "Prix", navContact: "Contact",
        status: "Disponible",
        role: "IA/ML et backend · Nairobi",
        heroLead: "Je crée de l'IA", heroAccent: "que les gens utilisent vraiment.",
        heroText: "Étudiant en génie logiciel à Nairobi. Je travaille avec Python, FastAPI et l'API Claude.",
        btnWork: "Voir mes projets", btnChat: "M'écrire",
        stat1: "à un hackathon MLH", stat2: "tests écrits", stat3: "des utilisateurs de Rahah ont progressé",
        backTop: "Haut de page"
    },
    ar: {
        navWork: "أعمالي", navStack: "الأدوات", navWins: "إنجازات", navContact: "تواصل",
        status: "متاح للعمل",
        role: "ذكاء اصطناعي وأنظمة خلفية · نيروبي",
        heroLead: "أبني ذكاءً اصطناعيًا", heroAccent: "يستخدمه الناس فعلًا.",
        heroText: "طالب هندسة برمجيات في نيروبي. أعمل بـ Python و FastAPI و Claude API.",
        btnWork: "شاهد أعمالي", btnChat: "راسلني",
        stat1: "في هاكاثون MLH", stat2: "اختبارًا كتبتها", stat3: "من مستخدمي Rahah تحسّنت درجاتهم",
        backTop: "إلى الأعلى"
    }
};

// ==========================================================================
// Helpers
// ==========================================================================

let currentLang = 'en';

// Storage can throw in private mode or when blocked
function readPref(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}

function savePref(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

function t(key) {
    const dict = translations[currentLang] || translations.en;
    return dict[key] || translations.en[key] || '';
}

function fillTemplate(template, values) {
    return template.replace(/\{(\w+)\}/g, (_, name) => values[name]);
}

function intlLocale() {
    return { zh: 'zh-CN', sw: 'sw-KE' }[currentLang] || currentLang;
}

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Listeners that re-render language-dependent parts
const languageListeners = [];

// ==========================================================================
// Theme
// ==========================================================================

const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function syncThemeColor(theme) {
    // The browser bar matches the page, whichever theme was picked by hand
    document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
        meta.setAttribute('content', theme === 'dark' ? '#121212' : '#ffffff');
    });
}

function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    savePref('portfolio-theme', theme);
    syncThemeColor(theme);
    document.dispatchEvent(new CustomEvent('themechange', { detail: theme }));
}

if (readPref('portfolio-theme')) syncThemeColor(root.getAttribute('data-theme'));

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        if (document.startViewTransition && !prefersReducedMotion()) {
            document.startViewTransition(() => setTheme(next));
        } else {
            setTheme(next);
        }
    });
}

// ==========================================================================
// Language
// ==========================================================================

const langSelect = document.getElementById('lang-select');

function updateLanguage(lang) {
    currentLang = translations[lang] ? lang : 'en';
    const dict = translations[currentLang];

    if (currentLang === 'ar') root.setAttribute('dir', 'rtl');
    else root.removeAttribute('dir');
    root.setAttribute('lang', currentLang);

    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const value = dict[elem.dataset.i18n] || translations.en[elem.dataset.i18n];
        if (value) elem.textContent = value;
    });

    document.querySelectorAll('[data-i18n-label]').forEach(elem => {
        const value = dict[elem.dataset.i18nLabel] || translations.en[elem.dataset.i18nLabel];
        if (value) elem.setAttribute('aria-label', value);
    });

    // Dates follow the language too
    const monthFmt = new Intl.DateTimeFormat(intlLocale(), { month: 'short', year: 'numeric', timeZone: 'UTC' });
    document.querySelectorAll('time[datetime]').forEach(elem => {
        elem.textContent = monthFmt.format(new Date(elem.getAttribute('datetime') + 'T00:00:00Z'));
    });

    languageListeners.forEach(fn => fn());
    savePref('portfolio-lang', currentLang);
}

if (langSelect) {
    langSelect.addEventListener('change', e => updateLanguage(e.target.value));
}

// ==========================================================================
// Nav: a hairline appears once the page scrolls under it
// ==========================================================================

const nav = document.querySelector('.nav');

function syncNav() {
    if (nav) nav.toggleAttribute('data-scrolled', window.scrollY > 4);
}

window.addEventListener('scroll', syncNav, { passive: true });
syncNav();

// ==========================================================================
// Start
// ==========================================================================

const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

const savedLang = readPref('portfolio-lang');
const startLang = translations[savedLang] ? savedLang : 'en';
if (langSelect) langSelect.value = startLang;
updateLanguage(startLang);
