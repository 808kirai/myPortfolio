// GitHub Profile Configuration
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
        skillAimlDesc: "LLM apps · computer vision · risk triage",
        projectsTitle: "Featured Projects",
        projectsSubtitle: "My strongest work, from AI study tools to offline computer vision",
        proj1Badge: "AI · Education · Live",
        proj1Title: "Rahah",
        proj1Desc: "A study platform that routes each question to a faster or stronger Claude model, marks homework from a photo, cites the page of your notes, and turns notes into tests, flashcards and a revision plan. Pay by M-Pesa or card.",
        proj2Badge: "AI · Social Impact",
        proj2Title: "AmaniHaven",
        proj2Desc: "Free, confidential mental health support over USSD and SMS for any basic phone, in English or Kiswahili. Offline rules and Claude triage risk and alert human counselors within seconds.",
        proj3Badge: "Vision AI · Accessibility",
        proj3Title: "GemmaSight",
        proj3Desc: "A phone-camera assistant for blind and low-vision people. It reads labels, medicine and money aloud, flags trip hazards first, and guides you to lost objects with clock directions and beeps, in English or Kiswahili.",
        proj4Badge: "Edge Computer Vision",
        proj4Title: "NeuSE",
        proj4Desc: "An offline thermal-imaging pipeline for search and rescue. Contrast enhancement, heat thresholding and contour detection find warm areas, each logged with its box and processing time on a local dashboard that needs no network.",
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
        certsSubtitle: "Courses and events in AI and machine learning",
        certCredential: "Credential ID",
        certVerify: "Verify",
        certHint: "Tap the stack to shuffle",
        certOpen: "Full size",
        contactTitle: "Get In Touch",
        contactSubtitle: "Let's collaborate on your next project or backend system",
        certInProgress: "In progress · Week 1: search algorithms",
        certAttendance: "Certificate of attendance",
        navHack: "Hackathons",
        hackTitle: "Hackathons",
        hackSubtitle: "Building with a team against the clock",
        hack1Place: "2nd place",
        hack1Desc: "Lead coder on GemmaSight",
        hack2Place: "4th place",
        hack2Desc: "Designed the architecture and chose the tools for an AI study tool for students",
        demoLabel: "Live demo",
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
        skillAiml: "人工智能与机器学习", skillAimlDesc: "LLM 应用 · 计算机视觉 · 风险分诊",
        projectsTitle: "精选项目", projectsSubtitle: "我最有代表性的作品，从 AI 学习平台到离线计算机视觉",
        proj1Badge: "AI · 教育 · 已上线", proj1Title: "Rahah",
        proj1Desc: "面向学生的学习平台：按学科把每个问题交给更快或更强的 Claude 模型，拍照批改作业，回答注明笔记页码，并把笔记变成测验、抽认卡和复习计划。支持 M-Pesa 或银行卡付款。",
        proj2Badge: "AI · 社会公益", proj2Title: "AmaniHaven",
        proj2Desc: "通过 USSD 和短信为任何普通手机提供免费、保密的心理健康支持，支持英语和斯瓦希里语。离线规则与 Claude 共同评估风险，并在数秒内通知人工咨询师。",
        proj3Badge: "视觉 AI · 无障碍", proj3Title: "GemmaSight",
        proj3Desc: "为盲人和低视力人群打造的手机摄像头助手。它会朗读标签、药品和钱币信息，优先提醒绊倒危险，并用钟点方向和提示音引导你找到丢失的物品，支持英语和斯瓦希里语。",
        proj4Badge: "边缘计算机视觉", proj4Title: "NeuSE",
        proj4Desc: "用于搜救的离线热成像流程。通过对比度增强、热阈值和轮廓检测找出温热区域，记录每个检测框和处理时间，并可在无需网络的本地仪表盘上查看。",
        contribTitle: "贡献活动", contribTotal: "过去一年共 {n} 次贡献", contribDay: "{date}：{n} 次贡献",
        contribDayOne: "{date}：1 次贡献", contribDayNone: "{date}：无贡献", contribLearn: "了解贡献的统计方式",
        contribLess: "少", contribMore: "多", contribError: "暂时无法加载实时活动。", contribView: "在 GitHub 上查看",
        navCerts: "证书", certsTitle: "证书", certsSubtitle: "我在人工智能与机器学习方面的课程与活动", certCredential: "证书编号", certVerify: "验证", certHint: "点击卡片切换", certOpen: "查看大图",
        contactTitle: "取得联系", contactSubtitle: "让我们在您的下一个项目或后端系统上展开合作",
        certInProgress: "进行中 · 第 1 周：搜索算法", certAttendance: "参会证书",
        navHack: "黑客松", hackTitle: "黑客松", hackSubtitle: "与团队一起在截止时间前完成作品", hack1Place: "第 2 名", hack1Desc: "GemmaSight 的主力开发者", hack2Place: "第 4 名", hack2Desc: "为面向学生的 AI 学习工具设计架构并选择技术",
        demoLabel: "在线演示",
        emailLabel: "电子邮箱", appearanceLabel: "外观主题", repoLabel: "代码仓库"
    },
    hi: {
        navHome: "होम", navSkills: "कौशल", navProjects: "परियोजनाएं", navContact: "संपर्क",
        letsTalk: "बातचीत करें", heroStatus: "परियोजनाओं और सहयोग के लिए उपलब्ध", heroTitle: "इंटेलिजेंट वेब और एआई सिस्टम का निर्माण",
        heroSubtitle: "Python, C और C++ डेवलपर — AI और मशीन लर्निंग, कंप्यूटर विज़न और बैकएंड सिस्टम।", btnProjects: "परियोजनाएं",
        btnContact: "संपर्क करें", clickConnect: "जुड़ने के लिए प्लेटफ़ॉर्म पर क्लिक करें",
        skillsTitle: "कौशल और टूल्स", skillsSubtitle: "मेरी परियोजनाओं के पीछे की भाषाएं और फ्रेमवर्क",
        skillGroupLang: "प्रोग्रामिंग भाषाएं", skillGroupAI: "AI और मशीन लर्निंग", skillGroupBackend: "बैकएंड और टूल्स",
        skillAiml: "AI और मशीन लर्निंग", skillAimlDesc: "LLM ऐप्स · कंप्यूटर विज़न · जोखिम आकलन",
        projectsTitle: "प्रमुख परियोजनाएं", projectsSubtitle: "मेरा सबसे मज़बूत काम, AI स्टडी टूल से लेकर ऑफ़लाइन कंप्यूटर विज़न तक",
        proj1Badge: "AI · शिक्षा · लाइव", proj1Title: "Rahah",
        proj1Desc: "छात्रों के लिए एक स्टडी प्लेटफ़ॉर्म जो हर सवाल को तेज़ या ज़्यादा सक्षम Claude मॉडल को भेजता है, फ़ोटो से होमवर्क जाँचता है, नोट्स का पेज बताता है, और नोट्स को टेस्ट, फ़्लैशकार्ड और रिवीज़न प्लान में बदलता है। M-Pesa या कार्ड से भुगतान।",
        proj2Badge: "AI · सामाजिक प्रभाव", proj2Title: "AmaniHaven",
        proj2Desc: "किसी भी साधारण फ़ोन के लिए USSD और SMS पर मुफ़्त, गोपनीय मानसिक स्वास्थ्य सहायता, अंग्रेज़ी या स्वाहिली में। ऑफ़लाइन नियम और Claude जोखिम का आकलन करते हैं और कुछ ही सेकंड में मानव काउंसलर को सूचित करते हैं।",
        proj3Badge: "विज़न AI · सुलभता", proj3Title: "GemmaSight",
        proj3Desc: "दृष्टिहीन और कम दृष्टि वाले लोगों के लिए फ़ोन-कैमरा सहायक। यह लेबल, दवा और पैसे पढ़कर सुनाता है, ठोकर के खतरे पहले बताता है, और घड़ी की दिशाओं व बीप से खोई चीज़ तक ले जाता है, अंग्रेज़ी या स्वाहिली में।",
        proj4Badge: "एज कंप्यूटर विज़न", proj4Title: "NeuSE",
        proj4Desc: "खोज और बचाव के लिए ऑफ़लाइन थर्मल इमेजिंग पाइपलाइन। कंट्रास्ट बढ़ाने, हीट थ्रेशोल्डिंग और कंटूर डिटेक्शन से गर्म क्षेत्र मिलते हैं, और हर डिटेक्शन अपने बॉक्स और प्रोसेसिंग समय के साथ बिना नेटवर्क वाले लोकल डैशबोर्ड पर दर्ज होता है।",
        contribTitle: "योगदान गतिविधि", contribTotal: "पिछले एक वर्ष में {n} योगदान", contribDay: "{date} को {n} योगदान",
        contribDayOne: "{date} को 1 योगदान", contribDayNone: "{date} को कोई योगदान नहीं", contribLearn: "जानें कि योगदान कैसे गिने जाते हैं",
        contribLess: "कम", contribMore: "अधिक", contribError: "लाइव गतिविधि अभी लोड नहीं हो सकी।", contribView: "GitHub पर देखें",
        navCerts: "प्रमाणपत्र", certsTitle: "प्रमाणपत्र", certsSubtitle: "AI और मशीन लर्निंग में मेरे कोर्स और कार्यक्रम", certCredential: "क्रेडेंशियल ID", certVerify: "सत्यापित करें", certHint: "बदलने के लिए स्टैक पर टैप करें", certOpen: "पूरा आकार",
        contactTitle: "संपर्क में रहें", contactSubtitle: "आइए अपनी अगली परियोजना या बैकएंड सिस्टम पर एक साथ काम करें",
        certInProgress: "जारी · सप्ताह 1: सर्च एल्गोरिदम", certAttendance: "उपस्थिति प्रमाणपत्र",
        navHack: "हैकाथॉन", hackTitle: "हैकाथॉन", hackSubtitle: "टीम के साथ समय-सीमा में निर्माण", hack1Place: "दूसरा स्थान", hack1Desc: "GemmaSight पर मुख्य कोडर", hack2Place: "चौथा स्थान", hack2Desc: "छात्रों के लिए एक AI स्टडी टूल का आर्किटेक्चर डिज़ाइन किया और टूल चुने",
        demoLabel: "लाइव डेमो",
        emailLabel: "डायरेक्ट ईमेल", appearanceLabel: "दिखावट", repoLabel: "रिपॉजिटरी"
    },
    es: {
        navHome: "Inicio", navSkills: "Habilidades", navProjects: "Proyectos", navContact: "Contacto",
        letsTalk: "Hablemos", heroStatus: "Disponible para proyectos y colaboraciones", heroTitle: "Construyendo Sistemas Web e Inteligencia Artificial",
        heroSubtitle: "Desarrollo en Python, C y C++ con enfoque en inteligencia artificial, aprendizaje automático, visión por computadora y sistemas backend.", btnProjects: "Proyectos",
        btnContact: "Contacto", clickConnect: "Haz clic en una plataforma para conectar",
        skillsTitle: "Habilidades y Herramientas", skillsSubtitle: "Los lenguajes y frameworks detrás de mis proyectos",
        skillGroupLang: "Lenguajes", skillGroupAI: "IA y Aprendizaje Automático", skillGroupBackend: "Backend y Herramientas",
        skillAiml: "IA y Aprendizaje Automático", skillAimlDesc: "Apps con LLM · visión por computadora · triaje de riesgo",
        projectsTitle: "Proyectos Destacados", projectsSubtitle: "Mi mejor trabajo, desde herramientas de estudio con IA hasta visión por computadora sin conexión",
        proj1Badge: "IA · Educación · En vivo", proj1Title: "Rahah",
        proj1Desc: "Una plataforma de estudio que envía cada pregunta a un modelo Claude más rápido o más potente, corrige tareas a partir de una foto, cita la página de tus apuntes y convierte los apuntes en exámenes, tarjetas y un plan de repaso. Pago con M-Pesa o tarjeta.",
        proj2Badge: "IA · Impacto Social", proj2Title: "AmaniHaven",
        proj2Desc: "Apoyo de salud mental gratuito y confidencial por USSD y SMS para cualquier teléfono básico, en inglés o suajili. Reglas sin conexión y Claude evalúan el riesgo y alertan a consejeros humanos en segundos.",
        proj3Badge: "IA de Visión · Accesibilidad", proj3Title: "GemmaSight",
        proj3Desc: "Un asistente con la cámara del teléfono para personas ciegas y con baja visión. Lee en voz alta etiquetas, medicinas y dinero, avisa primero de los obstáculos y guía hacia objetos perdidos con direcciones de reloj y pitidos, en inglés o suajili.",
        proj4Badge: "Visión en el Borde", proj4Title: "NeuSE",
        proj4Desc: "Un sistema de imagen térmica sin conexión para búsqueda y rescate. El realce de contraste, el umbral de calor y la detección de contornos encuentran zonas cálidas; cada detección se registra con su recuadro y tiempo de proceso en un panel local que no necesita red.",
        contribTitle: "Actividad de Contribuciones", contribTotal: "{n} contribuciones en el último año", contribDay: "{n} contribuciones el {date}",
        contribDayOne: "1 contribución el {date}", contribDayNone: "Sin contribuciones el {date}", contribLearn: "Cómo se cuentan las contribuciones",
        contribLess: "Menos", contribMore: "Más", contribError: "No se pudo cargar la actividad en vivo.", contribView: "Ver en GitHub",
        navCerts: "Certificaciones", certsTitle: "Certificaciones", certsSubtitle: "Cursos y eventos en IA y aprendizaje automático", certCredential: "ID de credencial", certVerify: "Verificar", certHint: "Toca la pila para barajar", certOpen: "Tamaño completo",
        contactTitle: "Ponerse en Contacto", contactSubtitle: "Colaboremos en tu próximo proyecto o sistema backend",
        certInProgress: "En curso · Semana 1: algoritmos de búsqueda", certAttendance: "Certificado de asistencia",
        navHack: "Hackatones", hackTitle: "Hackatones", hackSubtitle: "Construyendo en equipo contra el reloj", hack1Place: "2.º lugar", hack1Desc: "Programador principal de GemmaSight", hack2Place: "4.º lugar", hack2Desc: "Diseñé la arquitectura y elegí las herramientas de una herramienta de estudio con IA para estudiantes",
        demoLabel: "Demo en vivo",
        emailLabel: "Correo Directo", appearanceLabel: "Apariencia", repoLabel: "Repositorio"
    },
    ar: {
        navHome: "الرئيسية", navSkills: "المهارات", navProjects: "المشاريع", navContact: "التواصل",
        letsTalk: "تواصل معي", heroStatus: "متاح للمشاريع والتعاون", heroTitle: "بناء أنظمة الويب والذكاء الاصطناعي الذكية",
        heroSubtitle: "تطوير بلغات Python و C و C++ مع التركيز على الذكاء الاصطناعي وتعلم الآلة والرؤية الحاسوبية وأنظمة الخلفية.", btnProjects: "المشاريع",
        btnContact: "تواصل معي", clickConnect: "انقر على منصة للتواصل",
        skillsTitle: "المهارات والأدوات", skillsSubtitle: "اللغات وأطر العمل التي بُنيت بها مشاريعي",
        skillGroupLang: "لغات البرمجة", skillGroupAI: "الذكاء الاصطناعي وتعلم الآلة", skillGroupBackend: "الخلفية والأدوات",
        skillAiml: "الذكاء الاصطناعي وتعلم الآلة", skillAimlDesc: "تطبيقات نماذج اللغة · رؤية حاسوبية · فرز المخاطر",
        projectsTitle: "المشاريع المميزة", projectsSubtitle: "أقوى أعمالي، من أدوات الدراسة بالذكاء الاصطناعي إلى الرؤية الحاسوبية دون اتصال",
        proj1Badge: "ذكاء اصطناعي · تعليم · مباشر", proj1Title: "Rahah",
        proj1Desc: "منصة دراسة للطلاب توجّه كل سؤال إلى نموذج Claude أسرع أو أقوى، وتصحح الواجبات من صورة، وتذكر صفحة الملاحظات التي جاء منها الجواب، وتحوّل الملاحظات إلى اختبارات وبطاقات تعليمية وخطة مراجعة. الدفع عبر M-Pesa أو البطاقة.",
        proj2Badge: "ذكاء اصطناعي · أثر اجتماعي", proj2Title: "AmaniHaven",
        proj2Desc: "دعم مجاني وسري للصحة النفسية عبر USSD والرسائل القصيرة لأي هاتف بسيط، بالإنجليزية أو السواحيلية. تقيّم القواعد غير المتصلة و Claude مستوى الخطر وتنبّه المستشارين خلال ثوانٍ.",
        proj3Badge: "رؤية بالذكاء الاصطناعي · إتاحة", proj3Title: "GemmaSight",
        proj3Desc: "مساعد بكاميرا الهاتف للمكفوفين وضعاف البصر. يقرأ بصوت عالٍ الملصقات والأدوية والنقود، وينبّه أولًا إلى مخاطر التعثر، ويرشد إلى الأشياء المفقودة باتجاهات الساعة وإشارات صوتية، بالإنجليزية أو السواحيلية.",
        proj4Badge: "رؤية حاسوبية طرفية", proj4Title: "NeuSE",
        proj4Desc: "نظام تصوير حراري يعمل دون اتصال لعمليات البحث والإنقاذ. يحدد المناطق الدافئة بتحسين التباين وعتبة الحرارة واكتشاف الحواف، ويسجل كل اكتشاف مع إطاره ووقت معالجته على لوحة محلية لا تحتاج إلى شبكة.",
        contribTitle: "نشاط المساهمات", contribTotal: "{n} مساهمة خلال العام الماضي", contribDay: "{n} مساهمة في {date}",
        contribDayOne: "مساهمة واحدة في {date}", contribDayNone: "لا مساهمات في {date}", contribLearn: "تعرّف على طريقة احتساب المساهمات",
        contribLess: "أقل", contribMore: "أكثر", contribError: "تعذّر تحميل النشاط المباشر حاليًا.", contribView: "عرض على GitHub",
        navCerts: "الشهادات", certsTitle: "الشهادات", certsSubtitle: "دورات وفعاليات في الذكاء الاصطناعي وتعلم الآلة", certCredential: "رقم الاعتماد", certVerify: "تحقق", certHint: "انقر على المجموعة للتبديل", certOpen: "الحجم الكامل",
        contactTitle: "تواصل معي", contactSubtitle: "دعنا نتعاون في مشروعك القادم أو نظام البرمجيات الخلفية",
        certInProgress: "قيد الدراسة · الأسبوع 1: خوارزميات البحث", certAttendance: "شهادة حضور",
        navHack: "الهاكاثونات", hackTitle: "الهاكاثونات", hackSubtitle: "البناء ضمن فريق وتحت ضغط الوقت", hack1Place: "المركز الثاني", hack1Desc: "المبرمج الرئيسي لمشروع GemmaSight", hack2Place: "المركز الرابع", hack2Desc: "صممت البنية واخترت الأدوات لأداة دراسة بالذكاء الاصطناعي للطلاب",
        demoLabel: "عرض مباشر",
        emailLabel: "البريد الإلكتروني المباشر", appearanceLabel: "المظهر", repoLabel: "مستودع الكود"
    },
    fr: {
        navHome: "Accueil", navSkills: "Compétences", navProjects: "Projets", navContact: "Contact",
        letsTalk: "Discutons", heroStatus: "Disponible pour projets et collaborations", heroTitle: "Création de Systèmes Web et d'IA Intelligents",
        heroSubtitle: "Développement en Python, C et C++, axé sur l'IA, l'apprentissage automatique, la vision par ordinateur et les systèmes backend.", btnProjects: "Projets",
        btnContact: "Contact", clickConnect: "Cliquez sur une plateforme pour vous connecter",
        skillsTitle: "Compétences & Outils", skillsSubtitle: "Les langages et frameworks derrière mes projets",
        skillGroupLang: "Langages", skillGroupAI: "IA & Apprentissage Automatique", skillGroupBackend: "Backend & Outils",
        skillAiml: "IA & Apprentissage Automatique", skillAimlDesc: "Applications LLM · vision par ordinateur · triage des risques",
        projectsTitle: "Projets En Vedette", projectsSubtitle: "Mes meilleurs projets, des outils d'étude par IA à la vision par ordinateur hors ligne",
        proj1Badge: "IA · Éducation · En ligne", proj1Title: "Rahah",
        proj1Desc: "Une plateforme d'étude qui envoie chaque question à un modèle Claude plus rapide ou plus puissant, corrige les devoirs à partir d'une photo, cite la page de vos notes et transforme les notes en tests, fiches et plan de révision. Paiement par M-Pesa ou carte.",
        proj2Badge: "IA · Impact Social", proj2Title: "AmaniHaven",
        proj2Desc: "Soutien en santé mentale gratuit et confidentiel par USSD et SMS pour tout téléphone basique, en anglais ou en swahili. Des règles hors ligne et Claude évaluent le risque et alertent des conseillers humains en quelques secondes.",
        proj3Badge: "IA de Vision · Accessibilité", proj3Title: "GemmaSight",
        proj3Desc: "Un assistant caméra pour les personnes aveugles et malvoyantes. Il lit à voix haute étiquettes, médicaments et billets, signale d'abord les obstacles et guide vers les objets perdus avec des directions horaires et des bips, en anglais ou en swahili.",
        proj4Badge: "Vision Embarquée", proj4Title: "NeuSE",
        proj4Desc: "Un pipeline d'imagerie thermique hors ligne pour la recherche et le sauvetage. Le rehaussement du contraste, le seuillage thermique et la détection de contours repèrent les zones chaudes ; chaque détection est enregistrée avec son cadre et son temps de traitement sur un tableau de bord local sans réseau.",
        contribTitle: "Activité de Contributions", contribTotal: "{n} contributions au cours de l'année", contribDay: "{n} contributions le {date}",
        contribDayOne: "1 contribution le {date}", contribDayNone: "Aucune contribution le {date}", contribLearn: "Comment les contributions sont comptées",
        contribLess: "Moins", contribMore: "Plus", contribError: "Impossible de charger l'activité en direct.", contribView: "Voir sur GitHub",
        navCerts: "Certifications", certsTitle: "Certifications", certsSubtitle: "Cours et événements en IA et apprentissage automatique", certCredential: "ID de certification", certVerify: "Vérifier", certHint: "Touchez la pile pour mélanger", certOpen: "Taille réelle",
        contactTitle: "Prendre Contact", contactSubtitle: "Collaborons sur votre prochain projet ou système backend",
        certInProgress: "En cours · Semaine 1 : algorithmes de recherche", certAttendance: "Certificat de participation",
        navHack: "Hackathons", hackTitle: "Hackathons", hackSubtitle: "Construire en équipe, contre la montre", hack1Place: "2e place", hack1Desc: "Développeur principal de GemmaSight", hack2Place: "4e place", hack2Desc: "J'ai conçu l'architecture et choisi les outils d'un outil d'étude par IA pour les étudiants",
        demoLabel: "Démo en ligne",
        emailLabel: "E-mail Direct", appearanceLabel: "Apparence", repoLabel: "Dépôt de Code"
    }
};

// Base Project Metadata
const projectData = {
    rahah: {
        title: "Rahah",
        description: "A study platform for Kenyan students. Each question is routed to a faster or stronger Claude model by subject, with token counting and chat trimming to keep cost predictable, and daily limits tracked in money rather than message counts. Answers cite the page of the student's uploaded notes, homework photos are marked, and notes become tests, flashcards and a revision plan. It has email-code sign-up, day-to-term passes paid in KES by M-Pesa or card, and an admin dashboard for revenue and usage. 179 commits and 191 automated tests, all passing.",
        tech: ["Python", "FastAPI", "Claude API", "SQLite", "JavaScript", "Paystack", "pytest", "Render"],
        github: "https://github.com/808kirai/Rahah",
        demo: "https://rahah.onrender.com"
    },
    amanihaven: {
        title: "AmaniHaven",
        description: "A crisis-aware support line built for people without smartphones or data. Users dial a USSD code or send an SMS and get instant, clinician-reviewable self-help in English or Kiswahili. Offline rules run first, and Claude adds a second opinion that can only raise a risk level, never lower it. Crisis and abuse cases page human counselors through a dashboard, while phone numbers are hashed and encrypted and messages are deleted after 30 days. About 2,200 lines of app code and 74 tests.",
        tech: ["Python", "FastAPI", "Claude API", "Pydantic", "SQLite", "Docker", "pytest", "Africa's Talking"],
        github: "https://github.com/808kirai/AmaniHaven",
        demo: "https://amanihaven.onrender.com/demo"
    },
    gemmasight: {
        title: "GemmaSight",
        description: "A vision assistant for blind and low-vision people, built at an MLH hackathon where our team placed 2nd with me as lead coder. Point a phone forward and tap: Read covers 18 kinds of everyday item and says the key detail first, such as a medicine dose or a note's value, without guessing missing text or reading out a visible PIN. Describe flags trip hazards first with a warning tone and vibration, and Find turns an object's position into clock directions, step distances and beeps. One tap switches speech and answers to Kiswahili. Runs in any phone browser with no install. 44 tests.",
        tech: ["Python", "FastAPI", "Gemma 4", "JavaScript", "Docker", "pytest"],
        github: "https://github.com/808kirai/GemmaSight"
    },
    neuse: {
        title: "NeuSE · Neural Sentinel Edge",
        description: "An early prototype for the Huawei ICT Competition 2026–2027 Innovation Track. Each field unit finds warm areas in thermal footage with no network, using CLAHE contrast enhancement, heat thresholding and contour detection with size filtering. Every detection is logged to SQLite with its position, box, peak intensity and processing time, and a local dashboard reads the log offline. Empty, 16-bit, float and malformed frames are handled safely. Next is a trained MindYOLO person detector to replace the classical baseline. 17 tests and 16 commits.",
        tech: ["Python", "OpenCV", "NumPy", "Flask", "SQLite", "pytest"],
        github: "https://github.com/808kirai/NeuSE"
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

    // A live demo button, for projects that are hosted
    const modalDemo = document.getElementById('modal-demo');
    modalDemo.hidden = !data.demo;
    if (data.demo) modalDemo.href = data.demo;

    lastFocusedElem = document.activeElement;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.modal-close').focus();
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
