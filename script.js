// GitHub Profile & Local API Configuration
const API_BASE_URL = 'http://127.0.0.1:5000/api';
const GITHUB_USER = '808kirai';
const CONTRIB_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`;
const CONTRIB_REFRESH_MS = 5 * 60 * 1000;

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
        heroSubtitle: "Python, C and C++ developer working on AI and machine learning, computer vision, and backend systems.",
        btnProjects: "Projects",
        btnContact: "Contact",
        clickConnect: "Click a platform to connect",
        skillsTitle: "Skills & Tools",
        skillsSubtitle: "The languages and frameworks behind my projects",
        skillGroupLang: "Languages",
        skillGroupAI: "AI & Machine Learning",
        skillGroupBackend: "Backend & Tools",
        skillAiml: "AI & Machine Learning",
        skillAimlDesc: "Computer vision · LLM risk triage · model export",
        projectsTitle: "Featured Projects",
        projectsSubtitle: "My strongest work on GitHub, from AI triage to real-time computer vision",
        proj1Badge: "AI · Social Impact",
        proj1Title: "AmaniHaven",
        proj1Desc: "Free, confidential mental health support over USSD and SMS for any basic phone, in English or Kiswahili. Offline rules and Claude triage risk and alert human counselors within seconds.",
        proj2Badge: "Real-Time CV",
        proj2Title: "Hand Portal Face Filter",
        proj2Desc: "Frame your face with both hands and the space between your fingers becomes a live filter portal. MediaPipe hand tracking drives eight effects, from halftone to thermal.",
        proj3Badge: "Computer Vision",
        proj3Title: "Celestial Image Identifier",
        proj3Desc: "Upload a sky photo or stream a webcam and it boxes and catalogs stars, nebulae and galaxy cores using classical OpenCV analysis behind a FastAPI backend.",
        proj4Badge: "Backend",
        proj4Title: "Nairobi SmartPark",
        proj4Desc: "Flask and SQLite parking system for Kenyan lots: real-time slot counts, barrier gate control, and tiered Kshs billing from 30 free minutes up to Kshs 500.",
        contribTitle: "Contribution activity",
        contribTotal: "{n} contributions in the last year",
        contribDay: "{n} contributions on {date}",
        contribDayOne: "1 contribution on {date}",
        contribDayNone: "No contributions on {date}",
        contribLearn: "Learn how we count contributions",
        contribLess: "Less",
        contribMore: "More",
        contribError: "Couldn't load live activity right now.",
        contribView: "View on GitHub",
        navCerts: "Certifications",
        certsTitle: "Certifications",
        certsSubtitle: "Courses I've completed in AI and machine learning",
        certCredential: "Credential ID",
        certVerify: "Verify",
        certHint: "Tap the stack to shuffle",
        certOpen: "Full size",
        contactTitle: "Get In Touch",
        contactSubtitle: "Let's collaborate on your next project or backend system",
        emailLabel: "Direct Email",
        appearanceLabel: "Appearance",
        repoLabel: "Repository"
    },
    zh: {
        navHome: "首页", navSkills: "技能", navProjects: "项目", navContact: "联系",
        letsTalk: "沟通合作", heroStatus: "可承接项目与合作", heroTitle: "构建智能 Web 与人工智能系统",
        heroSubtitle: "Python、C 与 C++ 开发者，专注于人工智能与机器学习、计算机视觉及后端系统。", btnProjects: "查看项目",
        btnContact: "联系我", clickConnect: "点击社交平台进行连接",
        skillsTitle: "技能与工具", skillsSubtitle: "支撑我项目的编程语言与框架",
        skillGroupLang: "编程语言", skillGroupAI: "人工智能与机器学习", skillGroupBackend: "后端与工具",
        skillAiml: "人工智能与机器学习", skillAimlDesc: "计算机视觉 · LLM 风险分诊 · 模型导出",
        projectsTitle: "精选项目", projectsSubtitle: "我在 GitHub 上的代表作，从 AI 风险分诊到实时计算机视觉",
        proj1Badge: "AI · 社会公益", proj1Title: "AmaniHaven",
        proj1Desc: "通过 USSD 和短信为任何普通手机提供免费、保密的心理健康支持，支持英语和斯瓦希里语。离线规则与 Claude 共同评估风险，并在数秒内通知人工咨询师。",
        proj2Badge: "实时视觉", proj2Title: "手势传送门滤镜",
        proj2Desc: "用双手框住脸，手指之间的区域就会变成实时滤镜传送门。MediaPipe 手部追踪驱动八种效果，从半色调到热成像。",
        proj3Badge: "计算机视觉", proj3Title: "天体图像识别系统",
        proj3Desc: "上传星空照片或开启摄像头，系统会基于 FastAPI 后端和经典 OpenCV 分析，框选并编目恒星、星云和星系核心。",
        proj4Badge: "后端", proj4Title: "内罗毕智能停车系统",
        proj4Desc: "面向肯尼亚停车场的 Flask 与 SQLite 系统：实时车位统计、道闸控制，以及从前 30 分钟免费到最高 500 先令的分级计费。",
        contribTitle: "贡献活动", contribTotal: "过去一年共 {n} 次贡献", contribDay: "{date}：{n} 次贡献",
        contribDayOne: "{date}：1 次贡献", contribDayNone: "{date}：无贡献", contribLearn: "了解贡献的统计方式",
        contribLess: "少", contribMore: "多", contribError: "暂时无法加载实时活动。", contribView: "在 GitHub 上查看",
        navCerts: "证书", certsTitle: "证书", certsSubtitle: "我完成的人工智能与机器学习课程", certCredential: "证书编号", certVerify: "验证", certHint: "点击卡片切换", certOpen: "查看大图",
        contactTitle: "取得联系", contactSubtitle: "让我们在您的下一个项目或后端系统上展开合作",
        emailLabel: "电子邮箱", appearanceLabel: "外观主题", repoLabel: "代码仓库"
    },
    hi: {
        navHome: "होम", navSkills: "कौशल", navProjects: "परियोजनाएं", navContact: "संपर्क",
        letsTalk: "बातचीत करें", heroStatus: "परियोजनाओं और सहयोग के लिए उपलब्ध", heroTitle: "इंटेलिजेंट वेब और एआई सिस्टम का निर्माण",
        heroSubtitle: "Python, C और C++ डेवलपर — AI और मशीन लर्निंग, कंप्यूटर विज़न और बैकएंड सिस्टम।", btnProjects: "परियोजनाएं",
        btnContact: "संपर्क करें", clickConnect: "जुड़ने के लिए प्लेटफ़ॉर्म पर क्लिक करें",
        skillsTitle: "कौशल और टूल्स", skillsSubtitle: "मेरी परियोजनाओं के पीछे की भाषाएं और फ्रेमवर्क",
        skillGroupLang: "प्रोग्रामिंग भाषाएं", skillGroupAI: "AI और मशीन लर्निंग", skillGroupBackend: "बैकएंड और टूल्स",
        skillAiml: "AI और मशीन लर्निंग", skillAimlDesc: "कंप्यूटर विज़न · LLM जोखिम आकलन · मॉडल एक्सपोर्ट",
        projectsTitle: "प्रमुख परियोजनाएं", projectsSubtitle: "GitHub पर मेरा सबसे मज़बूत काम, AI जोखिम आकलन से लेकर रियल-टाइम कंप्यूटर विज़न तक",
        proj1Badge: "AI · सामाजिक प्रभाव", proj1Title: "AmaniHaven",
        proj1Desc: "किसी भी साधारण फ़ोन के लिए USSD और SMS पर मुफ़्त, गोपनीय मानसिक स्वास्थ्य सहायता, अंग्रेज़ी या स्वाहिली में। ऑफ़लाइन नियम और Claude जोखिम का आकलन करते हैं और कुछ ही सेकंड में मानव काउंसलर को सूचित करते हैं।",
        proj2Badge: "रियल-टाइम CV", proj2Title: "हैंड पोर्टल फेस फ़िल्टर",
        proj2Desc: "दोनों हाथों से अपना चेहरा फ्रेम करें और उंगलियों के बीच की जगह एक लाइव फ़िल्टर पोर्टल बन जाती है। MediaPipe हैंड ट्रैकिंग हाफ़टोन से थर्मल तक आठ इफ़ेक्ट चलाती है।",
        proj3Badge: "कंप्यूटर विज़न", proj3Title: "खगोलीय छवि पहचानकर्ता",
        proj3Desc: "आकाश की फ़ोटो अपलोड करें या वेबकैम चलाएं, और यह FastAPI बैकएंड पर क्लासिकल OpenCV विश्लेषण से तारों, नीहारिकाओं और आकाशगंगा केंद्रों को चिह्नित और सूचीबद्ध करता है।",
        proj4Badge: "बैकएंड", proj4Title: "नैरोबी स्मार्टपार्क",
        proj4Desc: "केन्याई पार्किंग के लिए Flask और SQLite सिस्टम: रियल-टाइम खाली स्थान, बैरियर गेट नियंत्रण, और पहले 30 मिनट मुफ़्त से लेकर Kshs 500 तक की स्तरीय बिलिंग।",
        contribTitle: "योगदान गतिविधि", contribTotal: "पिछले एक वर्ष में {n} योगदान", contribDay: "{date} को {n} योगदान",
        contribDayOne: "{date} को 1 योगदान", contribDayNone: "{date} को कोई योगदान नहीं", contribLearn: "जानें कि योगदान कैसे गिने जाते हैं",
        contribLess: "कम", contribMore: "अधिक", contribError: "लाइव गतिविधि अभी लोड नहीं हो सकी।", contribView: "GitHub पर देखें",
        navCerts: "प्रमाणपत्र", certsTitle: "प्रमाणपत्र", certsSubtitle: "AI और मशीन लर्निंग में पूरे किए गए मेरे कोर्स", certCredential: "क्रेडेंशियल ID", certVerify: "सत्यापित करें", certHint: "बदलने के लिए स्टैक पर टैप करें", certOpen: "पूरा आकार",
        contactTitle: "संपर्क में रहें", contactSubtitle: "आइए अपनी अगली परियोजना या बैकएंड सिस्टम पर एक साथ काम करें",
        emailLabel: "डायरेक्ट ईमेल", appearanceLabel: "दिखावट", repoLabel: "रिपॉजिटरी"
    },
    es: {
        navHome: "Inicio", navSkills: "Habilidades", navProjects: "Proyectos", navContact: "Contacto",
        letsTalk: "Hablemos", heroStatus: "Disponible para proyectos y colaboraciones", heroTitle: "Construyendo Sistemas Web e Inteligencia Artificial",
        heroSubtitle: "Desarrollo en Python, C y C++ con enfoque en inteligencia artificial, aprendizaje automático, visión por computadora y sistemas backend.", btnProjects: "Proyectos",
        btnContact: "Contacto", clickConnect: "Haz clic en una plataforma para conectar",
        skillsTitle: "Habilidades y Herramientas", skillsSubtitle: "Los lenguajes y frameworks detrás de mis proyectos",
        skillGroupLang: "Lenguajes", skillGroupAI: "IA y Aprendizaje Automático", skillGroupBackend: "Backend y Herramientas",
        skillAiml: "IA y Aprendizaje Automático", skillAimlDesc: "Visión por computadora · triaje con LLM · exportación de modelos",
        projectsTitle: "Proyectos Destacados", projectsSubtitle: "Mi mejor trabajo en GitHub, desde triaje con IA hasta visión por computadora en tiempo real",
        proj1Badge: "IA · Impacto Social", proj1Title: "AmaniHaven",
        proj1Desc: "Apoyo de salud mental gratuito y confidencial por USSD y SMS para cualquier teléfono básico, en inglés o suajili. Reglas sin conexión y Claude evalúan el riesgo y alertan a consejeros humanos en segundos.",
        proj2Badge: "Visión en Tiempo Real", proj2Title: "Filtro Portal de Manos",
        proj2Desc: "Enmarca tu cara con ambas manos y el espacio entre tus dedos se convierte en un portal con filtro en vivo. El seguimiento de manos de MediaPipe controla ocho efectos, del semitono al térmico.",
        proj3Badge: "Visión por Computadora", proj3Title: "Identificador de Imágenes Celestiales",
        proj3Desc: "Sube una foto del cielo o usa la webcam y el sistema enmarca y cataloga estrellas, nebulosas y núcleos galácticos con análisis clásico de OpenCV sobre un backend FastAPI.",
        proj4Badge: "Backend", proj4Title: "Nairobi SmartPark",
        proj4Desc: "Sistema de estacionamiento con Flask y SQLite para Kenia: plazas libres en tiempo real, control de barreras y tarifas escalonadas en Kshs, desde 30 minutos gratis hasta Kshs 500.",
        contribTitle: "Actividad de Contribuciones", contribTotal: "{n} contribuciones en el último año", contribDay: "{n} contribuciones el {date}",
        contribDayOne: "1 contribución el {date}", contribDayNone: "Sin contribuciones el {date}", contribLearn: "Cómo se cuentan las contribuciones",
        contribLess: "Menos", contribMore: "Más", contribError: "No se pudo cargar la actividad en vivo.", contribView: "Ver en GitHub",
        navCerts: "Certificaciones", certsTitle: "Certificaciones", certsSubtitle: "Cursos que he completado en IA y aprendizaje automático", certCredential: "ID de credencial", certVerify: "Verificar", certHint: "Toca la pila para barajar", certOpen: "Tamaño completo",
        contactTitle: "Ponerse en Contacto", contactSubtitle: "Colaboremos en tu próximo proyecto o sistema backend",
        emailLabel: "Correo Directo", appearanceLabel: "Apariencia", repoLabel: "Repositorio"
    },
    ar: {
        navHome: "الرئيسية", navSkills: "المهارات", navProjects: "المشاريع", navContact: "التواصل",
        letsTalk: "تواصل معي", heroStatus: "متاح للمشاريع والتعاون", heroTitle: "بناء أنظمة الويب والذكاء الاصطناعي الذكية",
        heroSubtitle: "تطوير بلغات Python و C و C++ مع التركيز على الذكاء الاصطناعي وتعلم الآلة والرؤية الحاسوبية وأنظمة الخلفية.", btnProjects: "المشاريع",
        btnContact: "تواصل معي", clickConnect: "انقر على منصة للتواصل",
        skillsTitle: "المهارات والأدوات", skillsSubtitle: "اللغات وأطر العمل التي بُنيت بها مشاريعي",
        skillGroupLang: "لغات البرمجة", skillGroupAI: "الذكاء الاصطناعي وتعلم الآلة", skillGroupBackend: "الخلفية والأدوات",
        skillAiml: "الذكاء الاصطناعي وتعلم الآلة", skillAimlDesc: "رؤية حاسوبية · فرز المخاطر بنماذج اللغة · تصدير النماذج",
        projectsTitle: "المشاريع المميزة", projectsSubtitle: "أقوى أعمالي على GitHub، من فرز المخاطر بالذكاء الاصطناعي إلى الرؤية الحاسوبية الفورية",
        proj1Badge: "ذكاء اصطناعي · أثر اجتماعي", proj1Title: "AmaniHaven",
        proj1Desc: "دعم مجاني وسري للصحة النفسية عبر USSD والرسائل القصيرة لأي هاتف بسيط، بالإنجليزية أو السواحيلية. تقيّم القواعد غير المتصلة و Claude مستوى الخطر وتنبّه المستشارين خلال ثوانٍ.",
        proj2Badge: "رؤية فورية", proj2Title: "فلتر بوابة اليدين",
        proj2Desc: "أحِط وجهك بيديك فتتحول المساحة بين أصابعك إلى بوابة بفلتر مباشر. يتحكم تتبع اليدين في MediaPipe بثمانية تأثيرات، من النقاط النصفية إلى التصوير الحراري.",
        proj3Badge: "رؤية حاسوبية", proj3Title: "معرف الصور الفلكية",
        proj3Desc: "ارفع صورة للسماء أو شغّل الكاميرا، فيحدد النظام النجوم والسدم ونوى المجرات ويفهرسها باستخدام تحليل OpenCV الكلاسيكي وخادم FastAPI.",
        proj4Badge: "الخلفية", proj4Title: "نيروبي سمارت بارك",
        proj4Desc: "نظام مواقف بـ Flask و SQLite لمواقف كينيا: عدد المواقف الشاغرة لحظيًا، والتحكم في البوابات، وتسعير متدرج بالشلن الكيني من 30 دقيقة مجانية حتى 500 شلن.",
        contribTitle: "نشاط المساهمات", contribTotal: "{n} مساهمة خلال العام الماضي", contribDay: "{n} مساهمة في {date}",
        contribDayOne: "مساهمة واحدة في {date}", contribDayNone: "لا مساهمات في {date}", contribLearn: "تعرّف على طريقة احتساب المساهمات",
        contribLess: "أقل", contribMore: "أكثر", contribError: "تعذّر تحميل النشاط المباشر حاليًا.", contribView: "عرض على GitHub",
        navCerts: "الشهادات", certsTitle: "الشهادات", certsSubtitle: "دورات أكملتها في الذكاء الاصطناعي وتعلم الآلة", certCredential: "رقم الاعتماد", certVerify: "تحقق", certHint: "انقر على المجموعة للتبديل", certOpen: "الحجم الكامل",
        contactTitle: "تواصل معي", contactSubtitle: "دعنا نتعاون في مشروعك القادم أو نظام البرمجيات الخلفية",
        emailLabel: "البريد الإلكتروني المباشر", appearanceLabel: "المظهر", repoLabel: "مستودع الكود"
    },
    fr: {
        navHome: "Accueil", navSkills: "Compétences", navProjects: "Projets", navContact: "Contact",
        letsTalk: "Discutons", heroStatus: "Disponible pour projets et collaborations", heroTitle: "Création de Systèmes Web et d'IA Intelligents",
        heroSubtitle: "Développement en Python, C et C++, axé sur l'IA, l'apprentissage automatique, la vision par ordinateur et les systèmes backend.", btnProjects: "Projets",
        btnContact: "Contact", clickConnect: "Cliquez sur une plateforme pour vous connecter",
        skillsTitle: "Compétences & Outils", skillsSubtitle: "Les langages et frameworks derrière mes projets",
        skillGroupLang: "Langages", skillGroupAI: "IA & Apprentissage Automatique", skillGroupBackend: "Backend & Outils",
        skillAiml: "IA & Apprentissage Automatique", skillAimlDesc: "Vision par ordinateur · triage par LLM · export de modèles",
        projectsTitle: "Projets En Vedette", projectsSubtitle: "Mes meilleurs projets sur GitHub, du triage par IA à la vision par ordinateur en temps réel",
        proj1Badge: "IA · Impact Social", proj1Title: "AmaniHaven",
        proj1Desc: "Soutien en santé mentale gratuit et confidentiel par USSD et SMS pour tout téléphone basique, en anglais ou en swahili. Des règles hors ligne et Claude évaluent le risque et alertent des conseillers humains en quelques secondes.",
        proj2Badge: "Vision Temps Réel", proj2Title: "Filtre Portail des Mains",
        proj2Desc: "Encadrez votre visage avec vos deux mains et l'espace entre vos doigts devient un portail filtré en direct. Le suivi des mains MediaPipe pilote huit effets, de la trame demi-teinte à l'imagerie thermique.",
        proj3Badge: "Vision par Ordinateur", proj3Title: "Identificateur d'Images Célestes",
        proj3Desc: "Importez une photo du ciel ou utilisez la webcam : le système encadre et catalogue étoiles, nébuleuses et cœurs galactiques grâce à une analyse OpenCV classique et un backend FastAPI.",
        proj4Badge: "Backend", proj4Title: "Nairobi SmartPark",
        proj4Desc: "Système de stationnement Flask et SQLite pour le Kenya : places libres en temps réel, contrôle des barrières et tarification par paliers en Kshs, de 30 minutes gratuites jusqu'à 500 Kshs.",
        contribTitle: "Activité de Contributions", contribTotal: "{n} contributions au cours de l'année", contribDay: "{n} contributions le {date}",
        contribDayOne: "1 contribution le {date}", contribDayNone: "Aucune contribution le {date}", contribLearn: "Comment les contributions sont comptées",
        contribLess: "Moins", contribMore: "Plus", contribError: "Impossible de charger l'activité en direct.", contribView: "Voir sur GitHub",
        navCerts: "Certifications", certsTitle: "Certifications", certsSubtitle: "Les cours que j'ai suivis en IA et apprentissage automatique", certCredential: "ID de certification", certVerify: "Vérifier", certHint: "Touchez la pile pour mélanger", certOpen: "Taille réelle",
        contactTitle: "Prendre Contact", contactSubtitle: "Collaborons sur votre prochain projet ou système backend",
        emailLabel: "E-mail Direct", appearanceLabel: "Apparence", repoLabel: "Dépôt de Code"
    }
};

// Base Project Metadata
const projectData = {
    amanihaven: {
        title: "AmaniHaven",
        description: "A crisis-aware support line built for people without smartphones or data. Users dial a USSD code or send an SMS and get instant, clinician-reviewable self-help in English or Kiswahili. Offline rules run first, and Claude adds a second opinion that can only raise a risk level, never lower it. Crisis and abuse cases page human counselors through a dashboard, while phone numbers are hashed and encrypted and messages are deleted after 30 days.",
        tech: ["Python", "FastAPI", "Claude API", "Pydantic", "SQLite", "Docker", "pytest", "Africa's Talking"],
        github: "https://github.com/808kirai/AmaniHaven"
    },
    facetracking: {
        title: "Hand Portal Face Filter",
        description: "A real-time webcam effect built with OpenCV and MediaPipe. The thumb and index fingertips of both hands become the four corners of a portal, smoothed to avoid jitter and free to tilt or stretch as your hands move. Only the inside of the portal is filtered, and each time you frame again it cycles to the next of eight effects. It can also record to MP4 at the real frame rate.",
        tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
        github: "https://github.com/808kirai/face-tracking-filter"
    },
    celestial: {
        title: "Celestial Image Identifier",
        description: "A full-stack computer vision app for space imagery. The FastAPI backend first checks that an image actually shows a dark sky, then uses brightness thresholds, contour shape and color saturation to separate bright stars, emission nebulae, clusters and galaxy cores. The browser frontend supports file uploads and live webcam capture, and lists each detection in a side catalog.",
        tech: ["Python", "FastAPI", "OpenCV", "NumPy", "JavaScript", "HTML5 Canvas"],
        github: "https://github.com/808kirai/Celestial-Image-Identifier"
    },
    nairobi: {
        title: "Nairobi SmartPark",
        description: "A parking management backend designed for Kenyan facilities. Entry and exit endpoints track active sessions, enforce lot capacity and trigger the barrier gates, and exit billing follows tiered Kenyan Shilling rates: free for the first 30 minutes, then Kshs 50, 100, 300 and 500. A test script seeds backdated sessions to verify every billing tier.",
        tech: ["Python", "Flask", "SQLite"],
        github: "https://github.com/808kirai/Nairobi-Parking-System",
        hasLiveApi: true
    }
};

// Shared State
let currentLang = 'en';
let contribState = 'loading';   // 'loading' | 'ready' | 'error'
let contribDays = null;
let contribTotal = 0;
let contribFetchedAt = 0;

// Safe localStorage helpers (storage can throw in private mode or when blocked)
function readPref(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
}

function savePref(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

// Translation helpers
function t(key) {
    const dict = translations[currentLang] || translations.en;
    return dict[key] || translations.en[key] || '';
}

function fillTemplate(template, values) {
    return template.replace(/\{(\w+)\}/g, (_, name) => values[name]);
}

function intlLocale() {
    return currentLang === 'zh' ? 'zh-CN' : currentLang;
}

// Theme Switching Logic
// The initial theme is applied by the inline script in <head> to avoid a flash on load.
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElem = document.documentElement;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const nextTheme = htmlElem.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

        // Sweep the new theme across the page with a slanted edge where the browser supports it
        if (!document.startViewTransition || prefersReducedMotion()) {
            setTheme(nextTheme);
            return;
        }
        htmlElem.classList.add('theme-switching');
        const endSwitch = () => htmlElem.classList.remove('theme-switching');
        const transition = document.startViewTransition(() => setTheme(nextTheme));
        transition.finished.finally(endSwitch);
        setTimeout(endSwitch, 1500);   // safety net so hover transitions never stay disabled
    });
}

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
    currentLang = translations[lang] ? lang : 'en';
    const dict = translations[currentLang];

    if (currentLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.removeAttribute('dir');
    }
    document.documentElement.setAttribute('lang', currentLang);

    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (dict[key]) elem.textContent = dict[key];
    });

    // Certificate dates, plus month and weekday labels in the contribution graph, follow the language too
    const certDateFmt = new Intl.DateTimeFormat(intlLocale(), { month: 'short', year: 'numeric', timeZone: 'UTC' });
    document.querySelectorAll('.cert-date[datetime]').forEach(elem => {
        elem.textContent = certDateFmt.format(parseDay(elem.getAttribute('datetime')));
    });
    renderContributions();

    savePref('portfolio-lang', currentLang);
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

// Live GitHub Contribution Graph
function parseDay(dateStr) {
    return new Date(dateStr + 'T00:00:00Z');
}

// An empty last-365-days grid, shown while loading or if the API is unreachable
function emptyYear() {
    const days = [];
    const today = new Date();
    const end = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    for (let i = 364; i >= 0; i--) {
        const d = new Date(end - i * 86400000);
        days.push({ date: d.toISOString().slice(0, 10), count: 0, level: 0 });
    }
    return days;
}

function renderContributions() {
    const graph = document.getElementById('contrib-graph');
    const totalElem = document.getElementById('contrib-total');
    if (!graph || !totalElem) return;

    const days = contribState === 'ready' ? contribDays : emptyYear();
    const locale = intlLocale();
    const monthFmt = new Intl.DateTimeFormat(locale, { month: 'short', timeZone: 'UTC' });
    const weekdayFmt = new Intl.DateTimeFormat(locale, { weekday: 'short', timeZone: 'UTC' });
    const frag = document.createDocumentFragment();

    // First column: blank corner, then Mon / Wed / Fri labels (Jan 7, 2024 was a Sunday)
    frag.appendChild(document.createElement('span'));
    for (let d = 0; d < 7; d++) {
        const label = document.createElement('span');
        label.className = 'contrib-day';
        if (d % 2 === 1) label.textContent = weekdayFmt.format(new Date(Date.UTC(2024, 0, 7 + d)));
        frag.appendChild(label);
    }

    // Weeks run Sunday to Saturday, so pad the first week up to the first day's weekday
    const leading = parseDay(days[0].date).getUTCDay();
    const cells = new Array(leading).fill(null).concat(days);
    const weekCount = Math.ceil(cells.length / 7);

    // Label a column when its month changes, skipping labels that would collide
    const monthCols = [];
    for (let w = 0; w < weekCount; w++) {
        const firstDay = cells.slice(w * 7, w * 7 + 7).find(Boolean);
        const month = parseDay(firstDay.date).getUTCMonth();
        if (!monthCols.length || monthCols[monthCols.length - 1].month !== month) {
            monthCols.push({ col: w, month, date: parseDay(firstDay.date) });
        }
    }
    const labelAt = new Map();
    monthCols.forEach((m, i) => {
        const next = monthCols[i + 1];
        if (!next || next.col - m.col >= 3) labelAt.set(m.col, monthFmt.format(m.date));
    });

    for (let w = 0; w < weekCount; w++) {
        const monthLabel = document.createElement('span');
        monthLabel.className = 'contrib-month';
        monthLabel.textContent = labelAt.get(w) || '';
        frag.appendChild(monthLabel);

        for (let d = 0; d < 7; d++) {
            const day = cells[w * 7 + d];
            if (day === undefined) break;
            const cell = document.createElement('i');
            cell.className = 'contrib-cell';
            if (day === null) {
                cell.classList.add('is-pad');
            } else {
                cell.dataset.level = Math.min(4, Math.max(0, day.level));
                cell.dataset.date = day.date;
                cell.dataset.count = day.count;
            }
            frag.appendChild(cell);
        }
    }

    graph.replaceChildren(frag);
    graph.classList.toggle('is-loading', contribState === 'loading');

    if (contribState === 'ready') {
        const totalText = fillTemplate(t('contribTotal'), { n: contribTotal.toLocaleString(locale) });
        totalElem.textContent = totalText;
        graph.setAttribute('aria-label', totalText);
    } else if (contribState === 'error') {
        const link = document.createElement('a');
        link.href = `https://github.com/${GITHUB_USER}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = t('contribView');
        totalElem.replaceChildren(`${t('contribError')} `, link);
    } else {
        totalElem.textContent = ' ';
    }

    // Show the most recent weeks first when the graph is wider than its card
    const scroller = document.getElementById('contrib-scroll');
    if (scroller) scroller.scrollLeft = scroller.scrollWidth;
}

// GitHub's own calendar can take hours to count new pushes, so commits from the last few
// days are also read straight from the repos (the REST API updates within about a minute)
const RECENT_COMMIT_DAYS = 3;
let githubBlockedUntil = 0;

async function githubApi(path) {
    if (Date.now() < githubBlockedUntil) throw new Error('GitHub API rate limited');
    const response = await fetch(`https://api.github.com${path}`, { headers: { Accept: 'application/vnd.github+json' } });
    if (response.status === 403 || response.status === 429) {
        const reset = Number(response.headers.get('x-ratelimit-reset'));
        githubBlockedUntil = reset ? reset * 1000 : Date.now() + 15 * 60 * 1000;
        throw new Error('GitHub API rate limited');
    }
    if (!response.ok) throw new Error(`GitHub API HTTP ${response.status}`);
    return response.json();
}

// Commits per UTC day (the calendar is in UTC too), across non-fork repos pushed recently
async function fetchRecentCommitCounts() {
    const since = new Date(Date.now() - RECENT_COMMIT_DAYS * 86400000);
    const repos = await githubApi(`/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`);
    const active = repos.filter(repo => !repo.fork && new Date(repo.pushed_at) >= since);

    const counts = {};
    await Promise.all(active.map(async repo => {
        const commits = await githubApi(
            `/repos/${repo.full_name}/commits?author=${GITHUB_USER}&since=${since.toISOString()}&per_page=100`);
        commits.forEach(commit => {
            const day = commit.commit.author.date.slice(0, 10);
            counts[day] = (counts[day] || 0) + 1;
        });
    }));
    return counts;
}

// Map a count to a 0-4 level using the thresholds the calendar itself uses for this profile
function levelFor(count, days) {
    if (count <= 0) return 0;
    let level = 1;
    for (let l = 2; l <= 4; l++) {
        const counts = days.filter(day => day.level === l).map(day => day.count);
        if (counts.length && count >= Math.min(...counts)) level = l;
    }
    return level;
}

// Take the higher of the calendar count and the live commit count for each recent day
function mergeRecentCommits(baseDays, baseTotal, recent) {
    const days = baseDays.map(day => ({ ...day }));
    let total = baseTotal;

    Object.entries(recent).forEach(([date, count]) => {
        let day = days.find(d => d.date === date);
        if (!day) {
            if (date <= days[days.length - 1].date) return;
            day = { date, count: 0, level: 0 };
            days.push(day);
        }
        if (count > day.count) {
            total += count - day.count;
            day.count = count;
            day.level = Math.max(day.level, levelFor(count, baseDays));
        }
    });
    return { days, total };
}

async function loadContributions() {
    try {
        const response = await fetch(CONTRIB_API, { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data.contributions) || !data.contributions.length) throw new Error('No data');

        let days = data.contributions;
        let total = (data.total && data.total.lastYear) ?? days.reduce((sum, day) => sum + day.count, 0);

        try {
            ({ days, total } = mergeRecentCommits(days, total, await fetchRecentCommitCounts()));
        } catch (err) {
            console.warn('Recent commits unavailable, showing the calendar only:', err.message);
        }

        contribDays = days;
        contribTotal = total;
        contribState = 'ready';
        contribFetchedAt = Date.now();
    } catch (err) {
        console.warn('GitHub contributions unavailable:', err.message);
        // Keep showing the last good data if a background refresh fails
        if (contribState !== 'ready') contribState = 'error';
    }
    renderContributions();
}

loadContributions();

// Refresh while the page stays open, and whenever the tab comes back after a while
setInterval(() => {
    if (document.visibilityState === 'visible') loadContributions();
}, CONTRIB_REFRESH_MS);

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && Date.now() - contribFetchedAt > 2 * 60 * 1000) {
        loadContributions();
    }
});

// Contribution tooltip, positioned above the hovered day
const contribCard = document.getElementById('contrib-card');
const contribGraph = document.getElementById('contrib-graph');
const contribTooltip = document.getElementById('contrib-tooltip');

if (contribCard && contribGraph && contribTooltip) {
    contribGraph.addEventListener('mouseover', (e) => {
        const cell = e.target.closest('.contrib-cell[data-date]');
        if (!cell || contribState !== 'ready') return;

        const count = Number(cell.dataset.count);
        const date = new Intl.DateTimeFormat(intlLocale(), { month: 'long', day: 'numeric', timeZone: 'UTC' })
            .format(parseDay(cell.dataset.date));
        const key = count === 0 ? 'contribDayNone' : count === 1 ? 'contribDayOne' : 'contribDay';
        contribTooltip.textContent = fillTemplate(t(key), { n: count, date });

        const cardRect = contribCard.getBoundingClientRect();
        const cellRect = cell.getBoundingClientRect();
        contribTooltip.style.left = `${cellRect.left - cardRect.left + cellRect.width / 2}px`;
        contribTooltip.style.top = `${cellRect.top - cardRect.top}px`;
        contribTooltip.hidden = false;
    });

    contribGraph.addEventListener('mouseleave', () => { contribTooltip.hidden = true; });
    document.getElementById('contrib-scroll').addEventListener('scroll', () => { contribTooltip.hidden = true; });
}

// Certificate Stack: the top card swings out in 3D and drops to the back of the deck
const certDeck = document.getElementById('cert-deck');
const CERT_AUTOPLAY_MS = 4000;

if (certDeck) {
    const cards = Array.from(certDeck.querySelectorAll('.cert-card'));
    const thumbs = document.querySelectorAll('.cert-thumb[data-cert]');
    const openLink = document.getElementById('cert-open');
    let order = cards.map((_, i) => i);
    let animating = false;
    let pausedUntil = 0;
    let hovering = false;
    let inView = false;

    // Cards behind the top one fan out up and to the right, slightly turned
    function pose(pos) {
        if (pos === 0) return { transform: 'translate3d(0, 0, 0) rotate(0deg)', filter: 'brightness(1)', zIndex: 10 };
        return {
            transform: `translate3d(${pos * 16}px, ${pos * -10}px, ${pos * -40}px) rotate(${pos * 4}deg)`,
            filter: `brightness(${1 - pos * 0.08})`,
            zIndex: 10 - pos
        };
    }

    function applyPoses() {
        order.forEach((cardIndex, pos) => {
            const card = cards[cardIndex];
            const p = pose(pos);
            card.style.transform = p.transform;
            card.style.filter = p.filter;
            card.style.zIndex = p.zIndex;
            card.tabIndex = pos === 0 ? 0 : -1;
            card.setAttribute('aria-hidden', pos === 0 ? 'false' : 'true');
        });

        const top = cards[order[0]];
        thumbs.forEach(thumb => thumb.classList.toggle('is-active', thumb.dataset.cert === top.dataset.cert));
        if (openLink) openLink.href = top.querySelector('img').getAttribute('src');
    }

    // Move the top card to the back, or bring a chosen card to the front
    function shuffle(targetIndex) {
        if (animating || cards.length < 2) return;
        const leavingIndex = order[0];
        if (targetIndex === leavingIndex) return;

        const oldOrder = order.slice();
        order = targetIndex === undefined
            ? oldOrder.slice(1).concat(leavingIndex)
            : [targetIndex].concat(oldOrder.filter(i => i !== targetIndex && i !== leavingIndex), leavingIndex);

        if (prefersReducedMotion()) {
            applyPoses();
            return;
        }

        animating = true;
        const backPose = pose(order.length - 1);
        const animations = [];

        // The leaving card swings open to the right like a door, then tucks in behind the deck
        const leaving = cards[leavingIndex];
        animations.push(leaving.animate([
            { transform: pose(0).transform, filter: 'brightness(1)', zIndex: 20, offset: 0 },
            { transform: 'translate3d(62%, -6%, 60px) rotateY(-58deg) rotate(6deg)', filter: 'brightness(1)', zIndex: 20, offset: 0.45 },
            { transform: 'translate3d(60%, -6%, -60px) rotateY(-50deg) rotate(6deg)', filter: 'brightness(0.95)', zIndex: 0, offset: 0.5 },
            { transform: backPose.transform, filter: backPose.filter, zIndex: 0, offset: 1 }
        ], { duration: 900, easing: 'cubic-bezier(0.65, 0, 0.35, 1)' }));

        // Everyone else slides one step forward
        order.forEach((cardIndex, pos) => {
            if (cardIndex === leavingIndex) return;
            const from = pose(oldOrder.indexOf(cardIndex));
            const to = pose(pos);
            animations.push(cards[cardIndex].animate([
                { transform: from.transform, filter: from.filter },
                { transform: to.transform, filter: to.filter }
            ], { duration: 700, delay: 120, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' }));
        });

        applyPoses();
        Promise.all(animations.map(a => a.finished)).finally(() => { animating = false; });
    }

    function pauseAutoplay() {
        pausedUntil = Date.now() + 8000;
    }

    cards.forEach(card => {
        card.addEventListener('click', () => { pauseAutoplay(); shuffle(); });
    });

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const target = cards.findIndex(card => card.dataset.cert === thumb.dataset.cert);
            pauseAutoplay();
            shuffle(target);
        });
    });

    certDeck.addEventListener('mouseenter', () => { hovering = true; });
    certDeck.addEventListener('mouseleave', () => { hovering = false; });

    if ('IntersectionObserver' in window) {
        new IntersectionObserver(entries => {
            inView = entries[0].isIntersecting;
        }, { threshold: 0.4 }).observe(certDeck);
    }

    // Shuffle on its own while visible, like a slow photo carousel
    setInterval(() => {
        if (inView && !hovering && document.visibilityState === 'visible' &&
            Date.now() > pausedUntil && !prefersReducedMotion()) {
            shuffle();
        }
    }, CERT_AUTOPLAY_MS);

    applyPoses();
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
    data.tech.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
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
