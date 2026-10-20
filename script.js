// GitHub Profile & Local API Configuration
const API_BASE_URL = 'http://127.0.0.1:5000/api';

// Language Translations Object
const translations = {
    en: {
        navHome: "Home",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        letsTalk: "Let's Talk",
        heroStatus: "Available for projects and collaborations",
        heroTitle: "Building Intelligent Web and AI Systems",
        heroSubtitle: "Specialized in Python, Flask, computer vision, and backend software.",
        btnProjects: "Projects",
        btnContact: "Contact",
        clickConnect: "Click a platform to connect",
        skillsTitle: "Languages & Frameworks",
        skillsSubtitle: "Full-stack backend architecture & modern tooling",
        projectsTitle: "Featured Projects",
        projectsSubtitle: "Selected backend & computer vision systems",
        proj1Title: "Celestial Image Identifier",
        proj1Desc: "Astronomical object identification and feature extraction powered by deep learning models.",
        proj2Title: "Face Tracking Filter",
        proj2Desc: "Low-latency computer vision pipeline applying dynamic spatial filters on real-time video streams.",
        proj3Title: "Nairobi Parking System",
        proj3Desc: "Automated urban parking management platform handling real-time spot allocation & payment logging.",
        contactTitle: "Get In Touch",
        contactSubtitle: "Let's collaborate on your next project or backend system",
        emailLabel: "Direct Email",
        appearanceLabel: "Appearance",
        repoLabel: "Repository"
    },
    zh: {
        navHome: "首页", navSkills: "技能", navProjects: "项目", navContact: "联系",
        letsTalk: "沟通合作", heroStatus: "可承接项目与合作", heroTitle: "构建智能 Web 与人工智能系统",
        heroSubtitle: "专注于 Python、Flask、计算机视觉及后端架构开发。", btnProjects: "查看项目",
        btnContact: "联系我", clickConnect: "点击社交平台进行连接", skillsTitle: "编程语言与框架",
        skillsSubtitle: "全栈后端架构与现代开发工具", projectsTitle: "精选项目", projectsSubtitle: "核心后端与计算机视觉系统",
        proj1Title: "天体图像识别系统", proj1Desc: "基于深度学习模型的天体识别与特征提取分析系统。",
        proj2Title: "人脸追踪滤镜", proj2Desc: "用于实时视频流动态空间滤镜处理的低延迟计算机视觉管道。",
        proj3Title: "内罗毕智能停车系统", proj3Desc: "处理实时车位分配与支付记录的自动化城市停车管理平台。",
        contactTitle: "取得联系", contactSubtitle: "让我们在您的下一个项目或后端系统上展开合作",
        emailLabel: "电子邮箱", appearanceLabel: "外观主题", repoLabel: "代码仓库"
    },
    hi: {
        navHome: "होम", navSkills: "कौशल", navProjects: "परियोजनाएं", navContact: "संपर्क",
        letsTalk: "बातचीत करें", heroStatus: "परियोजनाओं और सहयोग के लिए उपलब्ध", heroTitle: "इंटेलिजेंट वेब और एआई सिस्टम का निर्माण",
        heroSubtitle: "पायथन, फ्लास्क, कंप्यूटर विज़न और बैकएंड सॉफ्टवेयर में विशेषज्ञ।", btnProjects: "परियोजनाएं",
        btnContact: "संपर्क करें", clickConnect: "जुड़ने के लिए प्लेटफ़ॉर्म पर क्लिक करें", skillsTitle: "भाषाएं और फ्रेमवर्क",
        skillsSubtitle: "फुल-स्टैक बैकएंड आर्किटेक्चर और आधुनिक टूल्स", projectsTitle: "प्रमुख परियोजनाएं",
        projectsSubtitle: "चयनित बैकएंड और कंप्यूटर विज़न सिस्टम", proj1Title: "खगोलीय छवि पहचानकर्ता",
        proj1Desc: "डीप लर्निंग मॉडल द्वारा संचालित खगोलीय वस्तु पहचान और विशेषता निष्कर्षण।",
        proj2Title: "फेस ट्रैकिंग फ़िल्टर", proj2Desc: "रियल-टाइम वीडियो स्ट्रीम पर डायनेमिक स्थानिक फ़िल्टर लागू करने वाली कंप्यूटर विज़न पाइपलाइन।",
        proj3Title: "नैरोबी पार्किंग सिस्टम", proj3Desc: "स्वचालित शहरी पार्किंग प्रबंधन मंच जो रियल-टाइम स्थान आवंटन और भुगतान लॉगिंग को संभालता है।",
        contactTitle: "संपर्क में रहें", contactSubtitle: "आइए अपनी अगली परियोजना या बैकएंड सिस्टम पर एक साथ काम करें",
        emailLabel: "डायरेक्ट ईमेल", appearanceLabel: "दिखावट", repoLabel: "रिपॉजिटरी"
    },
    es: {
        navHome: "Inicio", navSkills: "Habilidades", navProjects: "Proyectos", navContact: "Contacto",
        letsTalk: "Hablemos", heroStatus: "Disponible para proyectos y colaboraciones", heroTitle: "Construyendo Sistemas Web e Inteligencia Artificial",
        heroSubtitle: "Especializado en Python, Flask, visión por computadora y software backend.", btnProjects: "Proyectos",
        btnContact: "Contacto", clickConnect: "Haz clic en una plataforma para conectar", skillsTitle: "Lenguajes y Frameworks",
        skillsSubtitle: "Arquitectura backend full-stack y herramientas modernas", projectsTitle: "Proyectos Destacados",
        projectsSubtitle: "Sistemas backend y de visión por computadora seleccionados", proj1Title: "Identificador de Imágenes Celestiales",
        proj1Desc: "Identificación de objetos astronómicos y extracción de características impulsada por modelos de aprendizaje profundo.",
        proj2Title: "Filtro de Seguimiento Facial", proj2Desc: "Pipeline de visión por computadora de baja latencia para filtros espaciales en transmisiones de video en tiempo real.",
        proj3Title: "Sistema de Estacionamiento de Nairobi", proj3Desc: "Plataforma automatizada de gestión de estacionamiento urbano con asignación de plazas y registro de pagos en tiempo real.",
        contactTitle: "Ponerse en Contacto", contactSubtitle: "Colaboremos en tu próximo proyecto o sistema backend",
        emailLabel: "Correo Directo", appearanceLabel: "Apariencia", repoLabel: "Repositorio"
    },
    ar: {
        navHome: "الرئيسية", navSkills: "المهارات", navProjects: "المشاريع", navContact: "التواصل",
        letsTalk: "تواصل معي", heroStatus: "متاح للمشاريع والتعاون", heroTitle: "بناء أنظمة الويب والذكاء الاصطناعي الذكية",
        heroSubtitle: "متخصص في Python و Flask والرؤية الحاسوبية وبرمجيات الخلفية.", btnProjects: "المشاريع",
        btnContact: "تواصل معي", clickConnect: "انقر على منصة للتواصل", skillsTitle: "اللغات وأطر العمل",
        skillsSubtitle: "بنية الخلفية البرمجية والأدوات الحديثة", projectsTitle: "المشاريع المميزة",
        projectsSubtitle: "أنظمة برمجية ورؤية حاسوبية مختارة", proj1Title: "معرف الصور الفلكية",
        proj1Desc: "تحديد الأجرام السماوية واستخراج الميزات باستخدام نماذج التعلم العميق.",
        proj2Title: "مرشح تتبع الوجه", proj2Desc: "خط معالجة للرؤية الحاسوبية منخفض زمن الاستجابة لتطبيق مرشحات ديناميكية على الفيديو المباشر.",
        proj3Title: "نظام مواقف السيارات في نيروبي", proj3Desc: "منصة مؤتمتة لإدارة مواقف السيارات في المناطق الحضرية مع تخصيص فوري للمواقف وتسجيل المدفوعات.",
        contactTitle: "تواصل معي", contactSubtitle: "دعنا نتعاون في مشروعك القادم أو نظام البرمجيات الخلفية",
        emailLabel: "البريد الإلكتروني المباشر", appearanceLabel: "المظهر", repoLabel: "مستودع الكود"
    },
    fr: {
        navHome: "Accueil", navSkills: "Compétences", navProjects: "Projets", navContact: "Contact",
        letsTalk: "Discutons", heroStatus: "Disponible pour projets et collaborations", heroTitle: "Création de Systèmes Web et d'IA Intelligents",
        heroSubtitle: "Spécialisé en Python, Flask, vision par ordinateur et développement backend.", btnProjects: "Projets",
        btnContact: "Contact", clickConnect: "Cliquez sur une plateforme pour vous connecter", skillsTitle: "Langages & Frameworks",
        skillsSubtitle: "Architecture backend full-stack & outils modernes", projectsTitle: "Projets En Vedette",
        projectsSubtitle: "Sélection de systèmes backend et de vision par ordinateur", proj1Title: "Identificateur d'Images Célestes",
        proj1Desc: "Identification d'objets astronomiques et extraction de caractéristiques propulsées par l'apprentissage profond.",
        proj2Title: "Filtre de Suivi Facial", proj2Desc: "Pipeline de vision par ordinateur à faible latence appliquant des filtres spatiaux en temps réel.",
        proj3Title: "Système de Stationnement de Nairobi", proj3Desc: "Plateforme automatisée de gestion du stationnement urbain gérant l'attribution des places en temps réel.",
        contactTitle: "Prendre Contact", contactSubtitle: "Collaborons sur votre prochain projet ou système backend",
        emailLabel: "E-mail Direct", appearanceLabel: "Apparence", repoLabel: "Dépôt de Code"
    }
};

// Base Project Metadata
const projectData = {
    celestial: {
        title: "Celestial Image Identifier",
        description: "An AI-powered application designed to detect and identify celestial features, constellations, and astronomical structures from optical captures or direct webcam input.",
        tech: ["Python", "PyTorch", "OpenCV", "Flask"],
        github: "https://github.com/runie1211"
    },
    facetracking: {
        title: "Face Tracking Filter",
        description: "A high-performance computer vision pipeline utilizing real-time face tracking, centroid positioning, and spatial overlay mapping.",
        tech: ["OpenCV", "Python", "NumPy"],
        github: "https://github.com/runie1211"
    },
    nairobi: {
        title: "Nairobi Parking System",
        description: "Automated urban parking infrastructure built with Python/Flask & SQLite to handle real-time spot reservations, status tracking, and payment verification.",
        tech: ["Python", "Flask", "SQLite", "JavaScript"],
        github: "https://github.com/runie1211/Nairobi-Parking-System",
        hasLiveApi: true
    }
};

// Safe localStorage helpers (storage can throw in private mode or when blocked)
function readPref(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}

function savePref(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

// Theme Switching Logic
// The initial theme is applied by the inline script in <head> to avoid a flash on load.
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElem = document.documentElement;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElem.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}

function setTheme(theme) {
    htmlElem.setAttribute('data-theme', theme);
    savePref('portfolio-theme', theme);
}

// Language Selector Logic
const langSelect = document.getElementById('lang-select');

if (langSelect) {
    langSelect.addEventListener('change', (e) => updateLanguage(e.target.value));
}

function updateLanguage(lang) {
    const dict = translations[lang] || translations.en;
    
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.removeAttribute('dir');
    }
    document.documentElement.setAttribute('lang', translations[lang] ? lang : 'en');

    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (dict[key]) elem.textContent = dict[key];
    });

    savePref('portfolio-lang', lang);
}

const savedLang = readPref('portfolio-lang') || 'en';
if (langSelect) langSelect.value = savedLang;
updateLanguage(savedLang);

// Footer Year
const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

// Scroll Reveal: fade content in once as it enters the viewport
const revealElems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElems.forEach(elem => revealObserver.observe(elem));
} else {
    revealElems.forEach(elem => elem.classList.add('is-visible'));
}

// Modal Management Logic
const modal = document.getElementById('project-modal');
const modalApiWidget = document.getElementById('modal-api-widget');
let lastFocusedElem = null;

window.openModal = function(projectId) {
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');
    const modalTech = document.getElementById('modal-tech');
    const modalGithub = document.getElementById('modal-github');

    const data = projectData[projectId];
    if (!data || !modal) return;

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;

    modalTech.innerHTML = '';
    data.tech.forEach(t => {
        const span = document.createElement('span');
        span.textContent = t;
        modalTech.appendChild(span);
    });

    modalGithub.href = data.github;

    // Clear any live data left over from a previously opened project
    modalApiWidget.hidden = true;
    modalApiWidget.innerHTML = '';

    lastFocusedElem = document.activeElement;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.modal-close').focus();

    if (data.hasLiveApi && isLocalDev()) {
        loadLiveParkingData(projectId);
    }
};

window.closeModal = function() {
    if (!modal || !modal.classList.contains('active')) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (lastFocusedElem) lastFocusedElem.focus();
};

if (modal) {
    // Close when clicking the dimmed backdrop (not the dialog itself)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Project Cards: open on click, Enter, or Space
document.querySelectorAll('.bento-card[data-project]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.project));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(card.dataset.project);
        }
    });
});

// The Flask backend only runs locally, so skip the request for public visitors
// (browsers may otherwise show them a "local network access" permission prompt).
function isLocalDev() {
    return ['localhost', '127.0.0.1', ''].includes(window.location.hostname);
}

// Live Flask API Spot Status Loader
async function loadLiveParkingData(projectId) {
    try {
        const response = await fetch(`${API_BASE_URL}/spots`);
        if (!response.ok) throw new Error('Backend offline');

        const spots = await response.json();

        // Ignore the response if the user has since closed or switched projects
        if (!modal.classList.contains('active') ||
            document.getElementById('modal-title').textContent !== projectData[projectId].title) return;

        const heading = document.createElement('strong');
        heading.textContent = 'Live Flask Spot Status:';

        const list = document.createElement('ul');
        spots.forEach(spot => {
            const item = document.createElement('li');
            const number = document.createElement('strong');
            number.textContent = spot.spot_number;
            const status = document.createElement('span');
            status.className = spot.is_occupied ? 'spot-occupied' : 'spot-available';
            status.textContent = spot.is_occupied ? `Occupied (${spot.vehicle_plate})` : 'Available';
            item.append(number, ': ', status);
            list.appendChild(item);
        });

        modalApiWidget.replaceChildren(heading, list);
        modalApiWidget.hidden = false;

    } catch (err) {
        console.warn('Flask API unavailable locally:', err.message);
    }
}