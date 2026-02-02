// بيانات الحصص (حصص حقيقية مع روابط يوتيوب وأسئلة)
const lessonsData = {
    1: [
        { 
            id: 1, 
            title: "Introduction to English", 
            videoUrl: "https://www.youtube.com/embed/K0-bFGfJwmU",
            questions: [
                { text: "ما هو الهدف الأساسي من تعلم اللغة الإنجليزية؟", options: ["التواصل العالمي", "كتاب الهاتف", "الموسيقى"], correct: 0 },
                { text: "كم عدد متحدثي اللغة الإنجليزية في العالم؟", options: ["200 مليون", "1 مليار", "500 مليون"], correct: 1 }
            ],
            status: "completed" 
        },
        { 
            id: 2, 
            title: "English Alphabet & Pronunciation", 
            videoUrl: "https://www.youtube.com/embed/2EdHuKBmCvk",
            questions: [
                { text: "كم عدد حروف اللغة الإنجليزية؟", options: ["24", "26", "28"], correct: 1 },
                { text: "الحروف المتحركة (Vowels) هي:", options: ["A, E, I, O, U", "B, C, D, F, G", "جميع الحروف"], correct: 0 }
            ],
            status: "completed" 
        },
        { 
            id: 3, 
            title: "Basic English Words", 
            videoUrl: "https://www.youtube.com/embed/U-1r5v6gBZ4",
            questions: [
                { text: "كلمة 'Hello' تعني:", options: ["مرحبا", "وداعا", "شكرا"], correct: 0 },
                { text: "كلمة 'Book' تترجم إلى:", options: ["قلم", "كتاب", "ورقة"], correct: 1 }
            ],
            status: "current" 
        },
        { 
            id: 4, 
            title: "Numbers in English", 
            videoUrl: "https://www.youtube.com/embed/vB-eDPvAF2s",
            questions: [
                { text: "'Five' = ؟", options: ["4", "5", "6"], correct: 1 },
                { text: "'Ten' = ؟", options: ["8", "9", "10"], correct: 2 }
            ],
            status: "locked" 
        },
        { 
            id: 5, 
            title: "Colors in English", 
            videoUrl: "https://www.youtube.com/embed/7R3qo93PZfE",
            questions: [
                { text: "'Red' يعني:", options: ["أزرق", "أحمر", "أخضر"], correct: 1 },
                { text: "'Yellow' يعني:", options: ["أسود", "أصفر", "أبيض"], correct: 1 }
            ],
            status: "locked" 
        },
        { 
            id: 6, 
            title: "Days of the Week", 
            videoUrl: "https://www.youtube.com/embed/DXzUZ6aQvzQ",
            questions: [
                { text: "كم يوم في الأسبوع؟", options: ["5", "7", "6"], correct: 1 },
                { text: "'Monday' يعني:", options: ["الثلاثاء", "الاثنين", "الأربعاء"], correct: 1 }
            ],
            status: "locked" 
        }
    ],
    2: [
        { 
            id: 1, 
            title: "Daily Conversations - Part 1", 
            videoUrl: "https://www.youtube.com/embed/W01N_5S8vU8",
            questions: [
                { text: "'How are you?' تعني:", options: ["ماذا اسمك؟", "كيف حالك؟", "أين تسكن؟"], correct: 1 },
                { text: "الرد على 'How are you?' هو:", options: ["I'm fine, thank you", "My name is...", "I'm happy"], correct: 0 }
            ],
            status: "locked" 
        },
        { 
            id: 2, 
            title: "Asking Questions", 
            videoUrl: "https://www.youtube.com/embed/9nWrAL9S5SY",
            questions: [
                { text: "'What is your name?' تعني:", options: ["ماذا اسمك؟", "أين أنت؟", "متى ولدت؟"], correct: 0 },
                { text: "الاستفهام يبدأ غالباً ب:", options: ["What, Where, Why", "A, B, C", "The, And, Or"], correct: 0 }
            ],
            status: "locked" 
        },
        { 
            id: 3, 
            title: "Shopping Vocabulary", 
            videoUrl: "https://www.youtube.com/embed/LnN8HsF_R5E",
            questions: [
                { text: "'How much?' تستخدم لـ:", options: ["السؤال عن الثمن", "السؤال عن الموقع", "السؤال عن الوقت"], correct: 0 },
                { text: "'Expensive' تعني:", options: ["رخيص", "غالي", "بسيط"], correct: 1 }
            ],
            status: "locked" 
        },
        { 
            id: 4, 
            title: "Restaurant English", 
            videoUrl: "https://www.youtube.com/embed/Y8XLbRKbQTc",
            questions: [
                { text: "'I'd like to order...' تعني:", options: ["أريد أن أطلب", "أريد أن أدفع", "أريد الحساب"], correct: 0 },
                { text: "'The bill, please' تعني:", options: ["الماء من فضلك", "الحساب من فضلك", "الطعام من فضلك"], correct: 1 }
            ],
            status: "locked" 
        },
        { 
            id: 5, 
            title: "Travel Phrases", 
            videoUrl: "https://www.youtube.com/embed/xHjhZ6i4QJk",
            questions: [
                { text: "'Where is the restroom?' تعني:", options: ["أين المحطة؟", "أين الحمام؟", "أين الفندق؟"], correct: 1 },
                { text: "'I'm lost' تعني:", options: ["أنا متأخر", "أنا ضائع", "أنا مشغول"], correct: 1 }
            ],
            status: "locked" 
        },
        { 
            id: 6, 
            title: "Phone Conversations", 
            videoUrl: "https://www.youtube.com/embed/RxqURrAhWQI",
            questions: [
                { text: "'Hello, this is...' تستخدم ل:", options: ["التحية الشخصية", "التحية الهاتفية", "التحية الرسمية"], correct: 1 },
                { text: "'Can I speak to...?' تعني:", options: ["هل تتحدث؟", "هل أستطيع التحدث مع؟", "هل تسمعني؟"], correct: 1 }
            ],
            status: "locked" 
        }
    ],
    3: [
        { 
            id: 1, 
            title: "Present Simple Tense", 
            videoUrl: "https://www.youtube.com/embed/Obi-gLJ45YY",
            questions: [
                { text: "Present Simple يستخدم ل:", options: ["الأفعال اليومية", "الأحداث المستقبلية", "الأحداث الماضية"], correct: 0 },
                { text: "صيغة المثنى في Present Simple:", options: ["I go, he goes", "I goes, he go", "I go, he go"], correct: 0 }
            ],
            status: "locked" 
        },
        { 
            id: 2, 
            title: "Past Simple Tense", 
            videoUrl: "https://www.youtube.com/embed/BPZR8qyJSh0",
            questions: [
                { text: "Past Simple يستخدم ل:", options: ["الأحداث الماضية", "الأفعال اليومية", "المستقبل"], correct: 0 },
                { text: "الفعل 'went' هو ماضي الفعل:", options: ["go", "went", "going"], correct: 0 }
            ],
            status: "locked" 
        },
        { 
            id: 3, 
            title: "Future Tense", 
            videoUrl: "https://www.youtube.com/embed/gO-TzVWBGHU",
            questions: [
                { text: "للتحدث عن المستقبل نستخدم:", options: ["will", "did", "was"], correct: 0 },
                { text: "'I will go' تعني:", options: ["ذهبت", "سأذهب", "أنا ذاهب"], correct: 1 }
            ],
            status: "locked" 
        },
        { 
            id: 4, 
            title: "Subject-Verb Agreement", 
            videoUrl: "https://www.youtube.com/embed/b3HO3q8CmFM",
            questions: [
                { text: "'He play' صحيحة؟", options: ["نعم", "لا، الصحيح He plays", "لا أعرف"], correct: 1 },
                { text: "'They goes' صحيحة؟", options: ["نعم", "لا، الصحيح They go", "ربما"], correct: 1 }
            ],
            status: "locked" 
        },
        { 
            id: 5, 
            title: "Sentence Structure", 
            videoUrl: "https://www.youtube.com/embed/eCl-B_LF4F0",
            questions: [
                { text: "ترتيب الجملة الإنجليزية:", options: ["فعل + فاعل + مفعول", "فاعل + فعل + مفعول", "مفعول + فاعل + فعل"], correct: 1 },
                { text: "في الجملة 'I like apples' الفاعل هو:", options: ["apples", "I", "like"], correct: 1 }
            ],
            status: "locked" 
        },
        { 
            id: 6, 
            title: "Common Mistakes", 
            videoUrl: "https://www.youtube.com/embed/j2bEX3rWE2s",
            questions: [
                { text: "الخطأ الشائع 'I am go' يصحح إلى:", options: ["I am going", "I go", "كلاهما صحيح"], correct: 0 },
                { text: "استخدام 'a' vs 'an':", options: ["a + حرف ساكن", "an + حرف متحرك", "كلاهما"], correct: 2 }
            ],
            status: "locked" 
        }
    ]
};

// بيانات الامتحانات (امتحانات حقيقية)
const examsData = [
    {
        id: 1,
        title: "Unit 1 Quiz - Basic English",
        questionsCount: 8,
        duration: "20 دقيقة",
        description: "اختبار شامل لأساسيات اللغة الإنجليزية من الوحدة الأولى",
        status: "available",
        questions: [
            { text: "كم عدد حروف اللغة الإنجليزية؟", options: ["24", "26", "28"], correct: 1 },
            { text: "الحروف المتحركة تساوي:", options: ["5", "7", "4"], correct: 0 },
            { text: "'Yellow' يعني:", options: ["أزرق", "أصفر", "أحمر"], correct: 1 },
            { text: "'Monday' هو:", options: ["يوم عطلة", "أول أيام الأسبوع", "الاثنين"], correct: 2 },
            { text: "كم يوم في الأسبوع؟", options: ["5", "7", "6"], correct: 1 },
            { text: "'What is your name?' تعني:", options: ["ماذا اسمك؟", "أين أنت؟", "كيف حالك؟"], correct: 0 },
            { text: "'How are you?' تعني:", options: ["كيف حالك؟", "ماذا اسمك؟", "أين تسكن؟"], correct: 0 },
            { text: "'Thank you' تعني:", options: ["من فضلك", "شكراً لك", "معاً"], correct: 1 }
        ]
    },
    {
        id: 2,
        title: "Unit 2 Quiz - Conversations",
        questionsCount: 10,
        duration: "25 دقيقة",
        description: "اختبار المحادثات اليومية والعبارات الشائعة",
        status: "available",
        questions: [
            { text: "'I'd like to order...' تعني:", options: ["أريد أن أطلب", "أريد أن أدفع", "أريد الرحيل"], correct: 0 },
            { text: "'The bill, please' تعني:", options: ["الطعام", "الحساب", "الماء"], correct: 1 },
            { text: "'Where is the restroom?' تعني:", options: ["أين المطعم؟", "أين الحمام؟", "أين الفندق؟"], correct: 1 },
            { text: "'I'm lost' تعني:", options: ["أنا مشغول", "أنا ضائع", "أنا متأخر"], correct: 1 },
            { text: "'How much?' تستخدم ل:", options: ["الوقت", "السعر", "الموقع"], correct: 1 },
            { text: "'Expensive' تعني:", options: ["رخيص", "غالي", "عادي"], correct: 1 },
            { text: "رد مناسب على 'How are you?':", options: ["I'm fine, thank you", "Yes, I am", "No, thank you"], correct: 0 },
            { text: "'Can I speak to...?' تعني:", options: ["هل تسمعني؟", "هل أستطيع التحدث مع؟", "هل تتحدث الإنجليزية؟"], correct: 1 },
            { text: "'Sorry, I don't understand' تعني:", options: ["أنا آسف", "آسف، لا أفهم", "لا، شكراً"], correct: 1 },
            { text: "في المحادثة الهاتفية نقول:", options: ["Hi", "Hello, this is...", "What's up"], correct: 1 }
        ]
    },
    {
        id: 3,
        title: "Unit 3 Quiz - Grammar Basics",
        questionsCount: 12,
        duration: "30 دقيقة",
        description: "اختبار القواعد الأساسية والأزمنة في اللغة الإنجليزية",
        status: "locked",
        questions: [
            { text: "Present Simple يستخدم ل:", options: ["الحقائق العامة", "الأفعال الماضية", "المستقبل"], correct: 0 },
            { text: "في Present Simple، مع 'he' نضيف:", options: ["nothing", "s", "ing"], correct: 1 },
            { text: "Past Simple يستخدم ل:", options: ["الحاضر", "الماضي", "المستقبل"], correct: 1 },
            { text: "صيغة الماضي للفعل 'go':", options: ["goed", "went", "going"], correct: 1 },
            { text: "للتحدث عن المستقبل نستخدم:", options: ["do", "did", "will"], correct: 2 },
            { text: "'I will go' تعني:", options: ["ذهبت", "سأذهب", "أنا ذاهب"], correct: 1 },
            { text: "ترتيب الجملة الإنجليزية:", options: ["فعل + فاعل", "فاعل + فعل", "مفعول + فاعل"], correct: 1 },
            { text: "في الجملة 'She likes cats' الفاعل:", options: ["She", "cats", "likes"], correct: 0 },
            { text: "'He play' صحيحة؟", options: ["نعم", "لا، الصحيح He plays", "ربما"], correct: 1 },
            { text: "الخطأ في 'I am go':", options: ["صحيح", "يجب أن يكون I am going", "يجب أن يكون I go"], correct: 1 },
            { text: "استخدام 'a' مع:", options: ["حرف ساكن", "حرف متحرك", "الأرقام"], correct: 0 },
            { text: "استخدام 'an' مع:", options: ["حرف ساكن", "حرف متحرك", "الفعل"], correct: 1 }
        ]
    }
];

// حالات التطبيق
let currentScreen = 'path-screen';
let expandedUnit = null;

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // التأكد من أن كل الأسئلة تحتوي على تصنيف
    ensureQuestionCategories();

    // افتح كل الحصص: ضع الحالة 'current' لجميع الحصص لتكون مفعلة
    unlockAllLessons();
    // تحميل آخر تقدم محفوظ وحالة تهيئة المسار
    loadLastProgress();
    loadPathInitialized();

    // تعيين الشاشة النشطة الأولى (سيستعيد المسار تلقائياً فقط بعد الإنشاء الأول)
    switchScreen('path-screen');
    
    // تهيئة التنقل السفلي
    initBottomNav();
    
    // تعبئة بيانات الحصص
    populateLessons();
    
    // تعبئة بيانات الامتحانات
    populateExams();
    
    // إضافة تأثيرات تفاعلية
    addInteractiveEffects();
});

// مفتاح التخزين للتقدم
const PROGRESS_KEY = 'manaraProgress_v1';
let lastProgress = null;
// مفتاح وعلَم يحدد ما إذا تم إنشاء/تهيئة المسار سابقاً
const PATH_INIT_KEY = 'manaraPathInit_v1';
let pathInitialized = false;

function saveLastProgress(unitId, lessonId) {
    try {
        const payload = { unitId: String(unitId), lessonId: String(lessonId) };
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(payload));
        lastProgress = payload;
    } catch (e) {
        console.warn('saveLastProgress failed', e);
    }
}

function loadLastProgress() {
    try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        if (raw) {
            lastProgress = JSON.parse(raw);
        }
    } catch (e) {
        lastProgress = null;
    }
}

function loadPathInitialized() {
    try {
        const raw = localStorage.getItem(PATH_INIT_KEY);
        pathInitialized = raw === '1';
    } catch (e) {
        pathInitialized = false;
    }
}

function setPathInitialized() {
    try {
        localStorage.setItem(PATH_INIT_KEY, '1');
        pathInitialized = true;
    } catch (e) {
        console.warn('setPathInitialized failed', e);
    }
}

// تأكد من أن كل سؤال في `lessonsData` و `examsData` يحتوي على حقل `category`
function ensureQuestionCategories() {
    // استخدم خريطة كلمات العنوان لتصنيف أكثر دقة بدلاً من الاعتماد فقط على نص السؤال
    function mapTitleToCategory(title) {
        if (!title) return 'مفردات';
        const t = title.toLowerCase();
        if (t.includes('present') || t.includes('المضارع') || t.includes('present simple') || t.includes('simple')) return 'المضارع البسيط';
        if (t.includes('continuous') || t.includes('present continuous') || t.includes('progressive')) return 'المضارع المستمر';
        if (t.includes('past') || t.includes('الماضي')) return 'الماضي البسيط';
        if (t.includes('future') || t.includes('المستقبل') || t.includes('will')) return 'المستقبل';
        if (t.includes('numbers') || t.includes('الأرقام') || t.includes('digits')) return 'الأرقام';
        if (t.includes('alphabet') || t.includes('الحروف')) return 'الحروف';
        if (t.includes('vocabulary') || t.includes('vocab') || t.includes('words') || t.includes('مفردات')) return 'المفردات';
        if (t.includes('conversation') || t.includes('daily') || t.includes('dialog')) return 'المحادثة';
        if (t.includes('questions') || t.includes('asking')) return 'أسئلة واستفهام';
        if (t.includes('grammar') || t.includes('قواعد')) return 'قواعد';
        if (t.includes('colors') || t.includes('colors') || t.includes('ألوان')) return 'المفردات';
        return '';
    }

    try {
        for (const unitId in lessonsData) {
            const lessons = lessonsData[unitId];
            lessons.forEach(lesson => {
                const titleCat = mapTitleToCategory(lesson.title || '');
                if (lesson.questions && Array.isArray(lesson.questions)) {
                    lesson.questions.forEach(q => {
                        if (!q.category || q.category === 'عام') q.category = titleCat || inferCategoryFromText(q.text || '');
                    });
                }
            });
        }

        if (Array.isArray(examsData)) {
            examsData.forEach(exam => {
                const titleCat = mapTitleToCategory(exam.title || '');
                if (exam.questions && Array.isArray(exam.questions)) {
                    exam.questions.forEach(q => {
                        if (!q.category || q.category === 'عام' || q.category === '') q.category = titleCat || inferCategoryFromText(q.text || '') || 'مفردات';
                    });
                }
            });
        }
        // تأكد نهائي أن لا يوجد سؤال بلا تصنيف حقيقي
        for (const unitId in lessonsData) {
            lessonsData[unitId].forEach(lesson => {
                if (lesson.questions && Array.isArray(lesson.questions)) {
                    lesson.questions.forEach(q => {
                        if (!q.category || q.category === 'عام' || q.category === '') q.category = inferCategoryFromText(q.text || lesson.title || '') || 'مفردات';
                    });
                }
            });
        }
        if (Array.isArray(examsData)) {
            examsData.forEach(exam => {
                if (exam.questions && Array.isArray(exam.questions)) {
                    exam.questions.forEach(q => {
                        if (!q.category || q.category === 'عام' || q.category === '') q.category = inferCategoryFromText(q.text || exam.title || '') || 'مفردات';
                    });
                }
            });
        }
    } catch (e) {
        console.warn('ensureQuestionCategories failed', e);
    }
}

// اجعل جميع الحصص مفعلة (غير مقفلة)
function unlockAllLessons() {
    try {
        for (const unitId in lessonsData) {
            const lessons = lessonsData[unitId];
            if (!Array.isArray(lessons)) continue;
            lessons.forEach(lesson => {
                // ضع الحالة 'current' إذا كانت مقفلة
                if (!lesson || typeof lesson !== 'object') return;
                lesson.status = 'current';
            });
        }
    } catch (e) {
        console.warn('unlockAllLessons failed', e);
    }
}

    // ===== نظام الإحصاءات =====
    const STATS_KEY = 'manaraStats_v1';
    
    // جميع فئات القواعس اللغوية المتاحة (مبدئياً بقيم صفر)
    const ALL_CATEGORIES = {
        'المفردات': { correct: 0, wrong: 0, points: 0 },
        'الحروف': { correct: 0, wrong: 0, points: 0 },
        'الأرقام': { correct: 0, wrong: 0, points: 0 },
        'المحادثة': { correct: 0, wrong: 0, points: 0 },
        'أسئلة واستفهام': { correct: 0, wrong: 0, points: 0 },
        'قواعس': { correct: 0, wrong: 0, points: 0 },
        'المضارع البسيط': { correct: 0, wrong: 0, points: 0 },
        'المضارع المستمر': { correct: 0, wrong: 0, points: 0 },
        'الماضي البسيط': { correct: 0, wrong: 0, points: 0 },
        'المستقبل': { correct: 0, wrong: 0, points: 0 }
    };
    
    let statsStore = loadStatsFromStorage();

    function loadStatsFromStorage() {
        try {
            const raw = localStorage.getItem(STATS_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        // إنشاء statsStore جديد مع جميع الفئات مهيّأة بقيم صفر
        return {
            totalCorrect: 0,
            totalWrong: 0,
            points: 0,
            byCategory: JSON.parse(JSON.stringify(ALL_CATEGORIES))
        };
    }

    function saveStatsToStorage() {
        try { localStorage.setItem(STATS_KEY, JSON.stringify(statsStore)); } catch (e) {}
    }

    function resetAllStats() {
        statsStore = {
            totalCorrect: 0,
            totalWrong: 0,
            points: 0,
            byCategory: JSON.parse(JSON.stringify(ALL_CATEGORIES))
        };
        saveStatsToStorage();
        renderStats();
        showErrorMessage('✅ تم تفريغ جميع الإحصاءات بنجاح!');
    }

    function inferCategoryFromText(text) {
        if (!text) return 'مفردات';
        const t = text.toLowerCase();
        // English cues
        if (t.includes('present continuous') || t.includes('am ') || t.includes('is ') || t.includes('are ')) return 'المضارع المستمر';
        if (t.includes('present simple') || t.includes('do ') || t.includes('does ')) return 'المضارع البسيط';
        if (t.includes('past simple') || t.includes('did ') || t.includes('was ') || t.includes('were ')) return 'الماضي البسيط';
        if (t.includes('future') || t.includes('will ')) return 'المستقبل';
        // Arabic cues
        if (t.includes('المضارع') || t.includes('مضارع') || t.includes('حاضر')) return 'المضارع البسيط';
        if (t.includes('الماضي') || t.includes('ماض')) return 'الماضي البسيط';
        if (t.includes('المستقبل') || t.includes('سوف') || t.includes('سي')) return 'المستقبل';
        if (t.includes('استفهام') || t.includes('سؤال') || t.includes('كيف') || t.includes('متى') || t.includes('أين') || t.includes('ما')) return 'أسئلة واستفهام';
        if (t.includes('ألوان') || t.includes('لون') || t.includes('colors')) return 'المفردات';
        if (t.includes('أرقام') || t.includes('رقم') || t.includes('numbers') || t.includes('five') || t.includes('ten')) return 'الأرقام';
        if (t.includes('حروف') || t.includes('alphabet') || t.includes('letters')) return 'الحروف';
        if (t.includes('vocab') || t.includes('words') || t.includes('مفردات')) return 'المفردات';
        if (t.includes('قواعد') || t.includes('grammar') || t.includes('verb') || t.includes('فعل')) return 'قواعد';
        if (t.includes('conversation') || t.includes('dialog') || t.includes('محادثة')) return 'المحادثة';
        // fallback
        return 'مفردات';
    }

    function updateStatsFromResults(results, questionsArray) {
        if (!Array.isArray(results) || !Array.isArray(questionsArray)) return;
        // احسب عدد الصح والخطأ لكل فئة في هذه الجلسة
        const perCategoryDelta = {};
        let sessionCorrect = 0;
        let sessionWrong = 0;
        results.forEach(r => {
            const q = questionsArray[r.idx];
            const category = (q && q.category) ? q.category : inferCategoryFromText(q ? q.text : 'عام');
            if (!statsStore.byCategory[category]) statsStore.byCategory[category] = { correct: 0, wrong: 0, points: 0 };
            if (!perCategoryDelta[category]) perCategoryDelta[category] = { correct: 0, wrong: 0 };
            if (r.isCorrect) {
                sessionCorrect++;
                statsStore.totalCorrect++;
                statsStore.byCategory[category].correct++;
                perCategoryDelta[category].correct++;
            } else {
                sessionWrong++;
                statsStore.totalWrong++;
                statsStore.byCategory[category].wrong++;
                perCategoryDelta[category].wrong++;
            }
        });

        // نقاط الجلسة = صح - خطأ (موجب إذا الصح أكثر، سالب إذا الخطأ أكثر، صفر إذا متساوي)
        const sessionPoints = sessionCorrect - sessionWrong;
        statsStore.points = (statsStore.points || 0) + sessionPoints;

        // حدّث نقاط كل فئة
        for (const cat in perCategoryDelta) {
            const d = perCategoryDelta[cat];
            const delta = (d.correct || 0) - (d.wrong || 0);
            statsStore.byCategory[cat].points = (statsStore.byCategory[cat].points || 0) + delta;
        }

        saveStatsToStorage();
        return sessionPoints;
    }

    function renderStats() {
        // تعيين القيم العامة
        const totalCorrect = statsStore.totalCorrect || 0;
        const totalWrong = statsStore.totalWrong || 0;
        const total = totalCorrect + totalWrong || 1;
        const percent = Math.round((totalCorrect / total) * 100);
        const points = statsStore.points || 0;

        const grid = document.querySelector('.general-stats-grid');
        if (grid) {
            const items = grid.querySelectorAll('.general-stat-item');
            if (items.length >= 4) {
                const val0 = items[0].querySelector('.general-stat-value');
                const val1 = items[1].querySelector('.general-stat-value');
                const val2 = items[2].querySelector('.general-stat-value');
                const val3 = items[3].querySelector('.general-stat-value');
                if (val0) val0.textContent = totalCorrect;
                if (val1) val1.textContent = totalWrong;
                if (val2) val2.textContent = percent + '%';
                if (val3) val3.textContent = points;
            }
        }

        // بناء تفاصيل القواعد بناءً على الفئات الموجودة
        const container = document.getElementById('grammar-details-content');
        if (!container) return;
        container.innerHTML = '';
        for (const cat in statsStore.byCategory) {
            const data = statsStore.byCategory[cat];
            const catTotal = (data.correct || 0) + (data.wrong || 0) || 1;
            const catPercent = Math.round(((data.correct || 0) / catTotal) * 100);

            const item = document.createElement('div');
            item.className = 'grammar-item';
            item.innerHTML = `
                <div class="grammar-title">${cat}</div>
                <div class="grammar-stats">
                    <div class="grammar-stat">
                        <span class="grammar-stat-label">صحيحة:</span>
                        <span class="grammar-stat-value correct">${catPercent}%</span>
                    </div>
                    <div class="grammar-stat">
                        <span class="grammar-stat-label">خاطئة:</span>
                        <span class="grammar-stat-value wrong">${100 - catPercent}%</span>
                    </div>
                    <div class="grammar-stat">
                        <span class="grammar-stat-label">النقاط:</span>
                        <span class="grammar-stat-value points">${data.points || 0}</span>
                    </div>
                </div>
            `;
            container.appendChild(item);
        }
    }

// تبديل الشاشات
function switchScreen(screenId) {
    // إذا المستخدم طلب شاشة المسار:
    if (screenId === 'path-screen') {
        // علامة التهيئة تحتفظ بأنها تمّت عند أول زيارة فعلية للمسار
        if (!pathInitialized) {
            setPathInitialized();
        }
    }
    
    // إخفاء جميع الشاشات
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // إظهار الشاشة المطلوبة
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screenId;
        
        // تحديث التنقل السفلي
        updateBottomNav(screenId);
        // عند الذهاب لشاشة الإحصائيات، قم بعرض الإحصاءات الحية
        if (screenId === 'stats-screen') {
            renderStats();
        }
        
        // إذا كانت شاشة الحصص، نفتح الوحدة الأولى افتراضيًا
        if (screenId === 'lessons-screen' && !expandedUnit) {
            setTimeout(() => {
                const firstUnit = document.querySelector('.unit-card');
                if (firstUnit) {
                    toggleLessons(firstUnit);
                }
            }, 300);
        }
    }
}

// تحديث التنقل السفلي
function updateBottomNav(screenId) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        
        // تحديد العنصر النشط بناءً على الشاشة الحالية
        if (screenId === 'path-screen' && item.querySelector('i.fa-road')) {
            item.classList.add('active');
        } else if (screenId === 'lessons-screen' && item.querySelector('i.fa-book-open')) {
            item.classList.add('active');
        } else if (screenId === 'exams-screen' && item.querySelector('i.fa-file-alt')) {
            item.classList.add('active');
        } else if (screenId === 'stats-screen' && item.querySelector('i.fa-chart-bar')) {
            item.classList.add('active');
        }
    });
}

// تهيئة التنقل السفلي
function initBottomNav() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        // إضافة تأثير الضغط
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// تعبئة بيانات الحصص
function populateLessons() {
    for (const unitId in lessonsData) {
        const lessonsContainer = document.getElementById(`unit-${unitId}-lessons`);
        if (lessonsContainer) {
            const lessons = lessonsData[unitId];
            let lessonsHTML = '';
            
            lessons.forEach(lesson => {
                // بناء نص الأسئلة
                let questionsText = '';
                if (lesson.questions && lesson.questions.length > 0) {
                    questionsText = lesson.questions.map((q, idx) => `${idx + 1}. ${q.text}`).join(' | ');
                }
                
                lessonsHTML += `
                    <div class="lesson-item" data-lesson="${lesson.id}" onclick="viewLesson(${unitId}, ${lesson.id})">
                        <div class="lesson-header">
                            <div class="lesson-title">
                                <i class="fas fa-video"></i> ${lesson.title}
                            </div>
                            <div class="lesson-status status-${lesson.status}">
                                ${getStatusText(lesson.status)}
                            </div>
                        </div>
                        <div class="lesson-details">
                            <div class="lesson-meta">
                                <span><i class="fab fa-youtube"></i> يوتيوب</span>
                                <span><i class="fas fa-question-circle"></i> ${lesson.questions?.length || 0} أسئلة</span>
                            </div>
                            ${questionsText ? `<div class="lesson-questions-preview">${questionsText}</div>` : ''}
                        </div>
                    </div>
                `;
            });
            
            lessonsContainer.innerHTML = lessonsHTML;
        }
    }
}

// تعبئة بيانات الامتحانات
function populateExams() {
    const examsContainer = document.querySelector('.exams-container');
    if (examsContainer) {
        let examsHTML = '';
        
        examsData.forEach(exam => {
            examsHTML += `
                <div class="exam-card">
                    <div class="exam-header">
                        <div>
                            <div class="exam-title">${exam.title}</div>
                            <div class="exam-details">
                                <div class="exam-info">
                                    <i class="far fa-question-circle"></i>
                                    <span>${exam.questionsCount} أسئلة</span>
                                </div>
                                <div class="exam-info">
                                    <i class="far fa-clock"></i>
                                    <span>${exam.duration}</span>
                                </div>
                            </div>
                        </div>
                        <div class="exam-status status-${exam.status}">
                            ${exam.status === 'available' ? 'متاح' : 'مقفل'}
                        </div>
                    </div>
                    <div class="exam-description">
                        ${exam.description}
                    </div>
                    <button class="exam-btn" ${exam.status === 'locked' ? 'disabled' : ''}>
                        <i class="fas fa-play-circle"></i>
                        ابدأ الامتحان
                    </button>
                </div>
            `;
        });
        
        examsContainer.innerHTML = examsHTML;
        
        // إضافة event listeners لأزرار الامتحانات
        document.querySelectorAll('.exam-btn').forEach((btn, index) => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (!this.disabled) {
                    const examId = index + 1;
                    const exam = examsData.find(ex => ex.id === examId);
                    if (exam) {
                        startExam(exam);
                    }
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                }
            });
        });
    }
}

// بدء الامتحان
function startExam(exam) {
    currentExamId = exam.id;
    // associate the exam with its unit so we can progress to the next unit after finishing
    currentUnitId = String(exam.id);
    
    // تعيين معلومات الامتحان في الرأس
    document.getElementById('exam-title-header').textContent = exam.title;
    
    // عرض أسئلة الامتحان
    const questionsContainer = document.getElementById('exam-questions');
    questionsContainer.innerHTML = '';
    
    exam.questions.forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.style.borderLeft = '4px solid var(--primary)';
        questionCard.id = `exam-question-${currentExamId}-${index}`;
        
        let optionsHTML = '';
        question.options.forEach((option, optionIndex) => {
            optionsHTML += `
                <label class="option-label">
                    <input type="radio" name="exam-${currentExamId}-question-${index}" value="${optionIndex}">
                    <span>${option}</span>
                </label>
            `;
        });
        
        questionCard.innerHTML = `
            <div class="question-text">${index + 1}. ${question.text}</div>
            <div class="question-options">
                ${optionsHTML}
            </div>
        `;
        
        questionsContainer.appendChild(questionCard);
    });
    
    // الانتقال إلى شاشة الامتحان
    switchScreen('exam-view-screen');
}

// تسليم الامتحان
function submitExam() {
    const exam = examsData.find(ex => ex.id === currentExamId);
    if (!exam) return;
    
    const questions = document.querySelectorAll('#exam-questions .question-card');
    let answered = 0;
    let correct = 0;
    const results = [];
    
    // التحقق من أن جميع الأسئلة تمت الإجابة عليها
    let allAnswered = true;
    questions.forEach((questionCard) => {
        const radio = questionCard.querySelector('input[type="radio"]:checked');
        if (!radio) {
            allAnswered = false;
            questionCard.style.borderColor = '#FFA500';
            questionCard.style.borderLeftColor = '#FFA500';
        } else {
            questionCard.style.borderColor = '';
            questionCard.style.borderLeftColor = '';
        }
    });
    
    if (!allAnswered) {
        showErrorMessage('⚠️ يجب الإجابة على جميع الأسئلة قبل التسليم!');
        return;
    }
    
    // معالجة كل سؤال وإضافة النتيجة والملخص
    questions.forEach((questionCard, idx) => {
        const radio = questionCard.querySelector('input[type="radio"]:checked');
        const question = exam.questions[idx];
        
        if (!question) return;
        
        if (radio) {
            answered++;
            const selectedAnswer = parseInt(radio.value);
            const isCorrect = selectedAnswer === question.correct;
            
            if (isCorrect) {
                correct++;
                results.push({ isCorrect: true, idx: idx });
                // تلوين الأسئلة الصحيحة فقط
                questionCard.style.borderColor = 'var(--success)';
                questionCard.style.borderLeftColor = 'var(--success)';
                questionCard.style.backgroundColor = 'rgba(34, 197, 94, 0.05)';
                
                // إضافة النتيجة مباشرة تحت السؤال
                const resultDiv = document.createElement('div');
                resultDiv.className = 'answer-result-inline correct-inline';
                resultDiv.innerHTML = `<i class="fas fa-check-circle"></i> الإجابة ${idx + 1}: صح`;
                questionCard.appendChild(resultDiv);
            } else {
                const correctAnswer = question.options[question.correct];
                results.push({ isCorrect: false, idx: idx, correctAnswer: correctAnswer });
                // تلوين الأسئلة الخاطئة فقط
                questionCard.style.borderColor = '#EF4444';
                questionCard.style.borderLeftColor = '#EF4444';
                questionCard.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';
                
                // إضافة النتيجة مباشرة تحت السؤال
                const resultDiv = document.createElement('div');
                resultDiv.className = 'answer-result-inline wrong-inline';
                resultDiv.innerHTML = `
                    <div><i class="fas fa-times-circle"></i> الإجابة ${idx + 1}: خطأ</div>
                    <div class="correct-answer-inline">الإجابة الصحيحة: ${correctAnswer}</div>
                `;
                questionCard.appendChild(resultDiv);
            }
        }
    });
    
    // عرض الملخص في الأسفل
    // تحديث الإحصاءات ثم عرض الملخص
    const sessionPoints = updateStatsFromResults(results, exam.questions);
    displayExamSummary(correct, answered, exam.questionsCount, results, sessionPoints);
}

// عرض النتائج النهائية للامتحان في الأسفل
// عرض ملخص النتائج في الأسفل
function displayExamSummary(correct, answered, totalQuestions, results, sessionPoints) {
    const percentage = (correct / totalQuestions) * 100;
    
    // إنشاء حاوية الملخص
    const summaryContainer = document.createElement('div');
    summaryContainer.id = 'exam-summary';
    summaryContainer.className = 'exam-summary';
    
    let summaryHTML = `
        <div class="summary-header">
            <h4><i class="fas fa-check-double"></i> ملخص النتائج</h4>
        </div>
        <div class="summary-stats">
            <div class="summary-stat">
                <span class="stat-label">صحيح:</span>
                <span class="stat-value correct-value">${correct}</span>
            </div>
            <div class="summary-stat">
                <span class="stat-label">خاطئ:</span>
                <span class="stat-value wrong-value">${answered - correct}</span>
            </div>
            <div class="summary-stat">
                <span class="stat-label">النسبة:</span>
                <span class="stat-value percent-value">${percentage.toFixed(0)}%</span>
            </div>
            <div class="summary-stat">
                <span class="stat-label">نقاط الجلسة:</span>
                <span class="stat-value points-value">${sessionPoints}</span>
            </div>
        </div>
    `;
    
    summaryContainer.innerHTML = summaryHTML;

    // إضافة ملخص مفصّل لكل سؤال (السؤال X: صح | السؤال Y: الإجابة الصحيحة: ...)
    const listContainer = document.createElement('div');
    listContainer.className = 'exam-summary-list';

    if (Array.isArray(results) && results.length > 0) {
        results.forEach(r => {
            const item = document.createElement('div');
            item.className = 'exam-summary-item';
            const qNum = (r.idx || 0) + 1;
            if (r.isCorrect) {
                item.classList.add('correct-item');
                item.innerText = `السؤال ${qNum}: صح`;
            } else {
                item.classList.add('wrong-item');
                const safeAnswer = r.correctAnswer ? r.correctAnswer : '';
                item.innerText = `السؤال ${qNum}: الإجابة الصحيحة هي: ${safeAnswer}`;
            }
            listContainer.appendChild(item);
        });
    }

    summaryContainer.appendChild(listContainer);
    
    // إضافة الملخص بعد الأسئلة
    const examContent = document.getElementById('exam-questions').parentElement;
    const existingSummary = document.getElementById('exam-summary');
    if (existingSummary) {
        existingSummary.remove();
    }
    // أزرار تتابع بعد الامتحان
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'exam-summary-actions';

    // زر للذهاب للوحدة التالية (إن وُجد)
    const nextUnitId = parseInt(currentUnitId, 10) + 1;
    if (lessonsData[String(nextUnitId)] || lessonsData[nextUnitId]) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-primary';
        nextBtn.textContent = 'الانتقال للوحدة التالية';
        nextBtn.addEventListener('click', () => {
            // افتح أول حصة من الوحدة التالية
            const unitKey = lessonsData[String(nextUnitId)] ? String(nextUnitId) : nextUnitId;
            const lessons = lessonsData[unitKey];
            if (lessons && lessons.length > 0) {
                const firstLessonId = lessons[0].id;
                viewLesson(unitKey, firstLessonId);
            }
        });
        actionsDiv.appendChild(nextBtn);
    } else {
        const doneMsg = document.createElement('div');
        doneMsg.className = 'results-message';
        doneMsg.textContent = '🎉 لقد أكملت كل الوحدات المتاحة.';
        actionsDiv.appendChild(doneMsg);
    }

    summaryContainer.appendChild(actionsDiv);
    examContent.appendChild(summaryContainer);
    
    // تمرير سلس لأسفل الملخص
    setTimeout(() => {
        summaryContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 300);
}


// تبديل عرض/إخفاء الحصص
function toggleLessons(unitElement) {
    const unitId = unitElement.getAttribute('data-unit');
    const lessonsContainer = unitElement.querySelector('.unit-lessons');
    
    // إذا كانت هذه الوحدة مفتوحة بالفعل، أغلقها
    if (expandedUnit === unitId) {
        lessonsContainer.classList.remove('expanded');
        expandedUnit = null;
        unitElement.querySelector('.unit-status').style.backgroundColor = 'white';
    } else {
        // إغلاق أي وحدة مفتوحة أخرى
        document.querySelectorAll('.unit-lessons.expanded').forEach(container => {
            container.classList.remove('expanded');
        });
        
        // فتح الوحدة المطلوبة
        lessonsContainer.classList.add('expanded');
        expandedUnit = unitId;
        
        // تغيير لون خلفية الوحدة النشطة
        document.querySelectorAll('.unit-card').forEach(card => {
            card.querySelector('.unit-status').style.backgroundColor = 'white';
        });
        unitElement.querySelector('.unit-status').style.backgroundColor = 'var(--primary-light)';
        
        // تحريك الشاشة لأسفل قليلاً لرؤية المحتوى
        setTimeout(() => {
            unitElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
}

// تبديل عرض/إخفاء تفاصيل القواعد اللغوية
function toggleGrammarDetails() {
    const grammarContent = document.getElementById('grammar-details-content');
    const collapseIcon = document.getElementById('grammar-collapse-icon');
    
    if (grammarContent.classList.contains('expanded')) {
        grammarContent.classList.remove('expanded');
        collapseIcon.classList.remove('rotated');
    } else {
        grammarContent.classList.add('expanded');
        collapseIcon.classList.add('rotated');
    }
}

// الرجوع للشاشة الرئيسية
function goBack() {
    // عندما يضغط المستخدم زر العودة نريد عرض شاشة المسار بدلاً من استئناف الحصة تلقائياً
    skipAutoResume = true;
    try {
        switchScreen('path-screen');
    } finally {
        skipAutoResume = false;
    }
}

// الحصول على نص الحالة
function getStatusText(status) {
    switch(status) {
        case 'completed': return 'مكتملة';
        case 'current': return 'حالية';
        case 'locked': return 'مقفلة';
        default: return '';
    }
}

// إضافة تأثيرات تفاعلية
function addInteractiveEffects() {
    // تأثيرات للأزرار
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // تأثيرات للكروت
    document.querySelectorAll('.card, .unit-card, .exam-card').forEach(card => {
        card.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.99)';
        });
        
        card.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // تأثيرات hover للشاشات الكبيرة
    if (window.matchMedia('(hover: hover)').matches) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                if (!this.classList.contains('active')) {
                    this.style.backgroundColor = 'rgba(37, 99, 235, 0.05)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.backgroundColor = 'transparent';
                }
            });
        });
    }
}

// ===== دوال جديدة لإدارة الوحدات والحصص =====

// فتح نافذة اختيار الوحدة
function openUnitSelector() {
    const unitModal = document.getElementById('unit-modal');
    const unitsList = unitModal.querySelector('.units-list');
    
    unitsList.innerHTML = '';
    
    for (const unitId in lessonsData) {
        const unitTitle = `الوحدة ${unitId}`;
        const lessonsCount = lessonsData[unitId].length;
        
        const unitItem = document.createElement('div');
        unitItem.className = 'unit-item';
        unitItem.innerHTML = `
            <h4>${unitTitle}</h4>
            <p>${lessonsCount} حصص</p>
        `;
        
        unitItem.addEventListener('click', () => {
            openLessonSelector(unitId);
        });
        
        unitsList.appendChild(unitItem);
    }
    
    unitModal.classList.add('active');
}

// إغلاق نافذة اختيار الوحدة
function closeUnitModal() {
    document.getElementById('unit-modal').classList.remove('active');
}

// فتح نافذة اختيار الحصة
function openLessonSelector(unitId) {
    const lessonModal = document.getElementById('lesson-modal');
    const lessonsList = lessonModal.querySelector('.lessons-list');
    
    lessonsList.innerHTML = '';
    
    const lessons = lessonsData[unitId];
    lessons.forEach(lesson => {
        const lessonItem = document.createElement('div');
        lessonItem.className = 'lesson-item-modal';
        lessonItem.innerHTML = `
            <h4>${lesson.title}</h4>
            <p>الحالة: ${getStatusText(lesson.status)}</p>
        `;
        
        lessonItem.addEventListener('click', () => {
            if (lesson.status !== 'locked') {
                viewLesson(unitId, lesson.id);
            }
        });
        
        lessonsList.appendChild(lessonItem);
    });
    
    closeUnitModal();
    lessonModal.classList.add('active');
}

// إغلاق نافذة اختيار الحصة
function closeLessonModal() {
    document.getElementById('lesson-modal').classList.remove('active');
}

// عرض الحصة الفردية
function viewLesson(unitId, lessonId) {
    const lesson = lessonsData[unitId].find(l => l.id === lessonId);
    if (!lesson) return;
    
    // حفظ معرفات الوحدة والحصة
    currentUnitId = unitId;
    currentLessonId = lessonId;
    
    // تحديث محتوى شاشة الحصة
    document.getElementById('lesson-title-header').textContent = lesson.title;
    document.getElementById('lesson-iframe').src = lesson.videoUrl;
    
    // تعبئة الأسئلة
    const questionsContainer = document.getElementById('lesson-questions');
    // إزالة أي ملخص أو نتائج من الحصة السابقة
    const prevSummary = document.getElementById('lesson-summary');
    if (prevSummary) prevSummary.remove();
    // إزالة أي عناصر ملخص عامة أو نتائج متبقية داخل حاوية الحصة
    const lessonContentParent = questionsContainer.parentElement;
    if (lessonContentParent) {
        lessonContentParent.querySelectorAll('.exam-summary, #lesson-summary').forEach(n => n.remove());
        lessonContentParent.querySelectorAll('.answer-result-inline').forEach(n => n.remove());
    }
    // كذلك أزل أي نتائج داخل `lesson-questions` فقط للتأكد
    questionsContainer.querySelectorAll('.answer-result-inline').forEach(n => n.remove());
    questionsContainer.innerHTML = '';
    
    lesson.questions.forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.id = `lesson-question-${unitId}-${lessonId}-${index}`;
        
        let optionsHTML = '';
        question.options.forEach((option, optIndex) => {
            optionsHTML += `
                <label class="option-label">
                    <input type="radio" name="lesson-${unitId}-${lessonId}-question-${index}" value="${optIndex}">
                    <span>${option}</span>
                </label>
            `;
        });
        
        questionCard.innerHTML = `
            <div class="question-title">${index + 1}. ${question.text}</div>
            <div class="question-options">
                ${optionsHTML}
            </div>
        `;
        
        questionsContainer.appendChild(questionCard);
    });
    
    closeLessonModal();
    switchScreen('lesson-view-screen');

    // أضف فئة للانتقال تُشغل أنيميشن بصري للمستخدم
    const lessonView = document.getElementById('lesson-view-screen');
    lessonView.classList.remove('lesson-transition');
    // force reflow then add class to restart animation
    void lessonView.offsetWidth;
    lessonView.classList.add('lesson-transition');
    // إزالة الفئة بعد انتهاء الأنيميشن (500ms)
    setTimeout(() => lessonView.classList.remove('lesson-transition'), 600);
}

// تسليم الحصة
function submitLesson() {
    const questions = document.querySelectorAll('#lesson-questions .question-card');
    let answered = 0;
    let correct = 0;
    const results = [];
    
    const currentLesson = lessonsData[currentUnitId]?.find(l => l.id === currentLessonId);
    if (!currentLesson) {
        showErrorMessage('❌ حدث خطأ في تحميل الحصة');
        return;
    }
    
    // التحقق من أن جميع الأسئلة تمت الإجابة عليها
    let allAnswered = true;
    questions.forEach((questionCard) => {
        const radio = questionCard.querySelector('input[type="radio"]:checked');
        if (!radio) {
            allAnswered = false;
            questionCard.style.borderColor = '#FFA500';
            questionCard.style.borderLeftColor = '#FFA500';
        } else {
            questionCard.style.borderColor = '';
            questionCard.style.borderLeftColor = '';
        }
    });
    
    if (!allAnswered) {
        showErrorMessage('⚠️ يجب الإجابة على جميع الأسئلة قبل التسليم!');
        return;
    }
    
    // معالجة كل سؤال وإظهار النتيجة مباشرة
    questions.forEach((questionCard, idx) => {
        const radio = questionCard.querySelector('input[type="radio"]:checked');
        const question = currentLesson.questions[idx];
        
        if (!question) {
            console.warn(`سؤال ${idx} غير موجود`);
            return;
        }
        
        let isCorrect = false;

        if (radio) {
            answered++;
            const selectedAnswer = parseInt(radio.value);
            isCorrect = selectedAnswer === question.correct;
            
            if (isCorrect) {
                correct++;
                results.push({ isCorrect: true, idx: idx });
                // تلوين الأسئلة الصحيحة فقط
                questionCard.style.borderColor = 'var(--success)';
                questionCard.style.borderLeftColor = 'var(--success)';
                questionCard.style.backgroundColor = 'rgba(34, 197, 94, 0.05)';

                // إضافة النتيجة مباشرة تحت السؤال
                const resultDiv = document.createElement('div');
                resultDiv.className = 'answer-result-inline correct-inline';
                resultDiv.innerHTML = `<i class="fas fa-check-circle"></i> الإجابة ${idx + 1}: صح`;
                questionCard.appendChild(resultDiv);
            } else {
                const correctAnswer = question.options[question.correct];
                results.push({ isCorrect: false, idx: idx, correctAnswer: correctAnswer });
                // تلوين الأسئلة الخاطئة فقط
                questionCard.style.borderColor = '#EF4444';
                questionCard.style.borderLeftColor = '#EF4444';
                questionCard.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';

                // إضافة النتيجة مباشرة تحت السؤال
                const resultDiv = document.createElement('div');
                resultDiv.className = 'answer-result-inline wrong-inline';
                resultDiv.innerHTML = `
                    <div><i class="fas fa-times-circle"></i> الإجابة ${idx + 1}: خطأ</div>
                    <div class="correct-answer-inline">الإجابة الصحيحة: ${correctAnswer}</div>
                `;
                questionCard.appendChild(resultDiv);
            }
        }
    });
    
    // تحديث الإحصاءات ثم عرض ملخص مفصّل أسفل الحصة
    const sessionPoints = updateStatsFromResults(results, currentLesson.questions);
    displayLessonSummary(correct, answered, currentLesson.questions.length, results, sessionPoints);
}

// عرض ملخص مفصّل للحصة (مشابه لملخص الامتحان)
function displayLessonSummary(correct, answered, totalQuestions, results, sessionPoints) {
    const percentage = (correct / totalQuestions) * 100;
    const summaryContainer = document.createElement('div');
    summaryContainer.id = 'lesson-summary';
    summaryContainer.className = 'exam-summary';

    let summaryHTML = `
        <div class="summary-header">
            <h4><i class="fas fa-list"></i> ملخص الحصة</h4>
        </div>
        <div class="summary-stats">
            <div class="summary-stat">
                <span class="stat-label">صحيح:</span>
                <span class="stat-value correct-value">${correct}</span>
            </div>
            <div class="summary-stat">
                <span class="stat-label">خاطئ:</span>
                <span class="stat-value wrong-value">${answered - correct}</span>
            </div>
            <div class="summary-stat">
                <span class="stat-label">النسبة:</span>
                <span class="stat-value percent-value">${percentage.toFixed(0)}%</span>
            </div>
            <div class="summary-stat">
                <span class="stat-label">نقاط الجلسة:</span>
                <span class="stat-value points-value">${sessionPoints}</span>
            </div>
        </div>
    `;

    summaryContainer.innerHTML = summaryHTML;

    const listContainer = document.createElement('div');
    listContainer.className = 'exam-summary-list';

    if (Array.isArray(results) && results.length > 0) {
        results.forEach(r => {
            const item = document.createElement('div');
            item.className = 'exam-summary-item';
            const qNum = (r.idx || 0) + 1;
            if (r.isCorrect) {
                item.classList.add('correct-item');
                item.innerText = `السؤال ${qNum}: صح`;
            } else {
                item.classList.add('wrong-item');
                const safeAnswer = r.correctAnswer ? r.correctAnswer : '';
                item.innerText = `السؤال ${qNum}: الإجابة الصحيحة هي: ${safeAnswer}`;
            }
            listContainer.appendChild(item);
        });
    }

    summaryContainer.appendChild(listContainer);

    // أزرار متابعة: التالي أو بدء امتحان الوحدة
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'lesson-summary-actions';

    const unitKey = currentUnitId;
    const lessons = lessonsData[unitKey];
    // العثور على الفهرس التالي بناءً على currentLessonId
    const curIdNum = parseInt(currentLessonId, 10);
    let nextLesson = null;
    if (lessons && Array.isArray(lessons)) {
        for (let i = 0; i < lessons.length; i++) {
            if (lessons[i].id === curIdNum) {
                if (i + 1 < lessons.length) nextLesson = lessons[i + 1];
                break;
            }
        }
    }

    if (nextLesson) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-primary';
        nextBtn.textContent = 'التالي';
        nextBtn.addEventListener('click', () => {
            viewLesson(unitKey, nextLesson.id);
        });
        actionsDiv.appendChild(nextBtn);
    } else {
        // لا يوجد درس تالي -> عرض زر بدء امتحان الوحدة (إن وُجد)
        const examForUnit = examsData.find(ex => parseInt(ex.id, 10) === parseInt(unitKey, 10));
        if (examForUnit && examForUnit.status !== 'locked') {
            const examBtn = document.createElement('button');
            examBtn.className = 'btn btn-primary';
            examBtn.textContent = 'ابدأ امتحان الوحدة';
            examBtn.addEventListener('click', () => {
                startExam(examForUnit);
            });
            actionsDiv.appendChild(examBtn);
        } else {
            const doneMsg = document.createElement('div');
            doneMsg.className = 'results-message';
            doneMsg.textContent = 'انتهت حصص هذه الوحدة.';
            actionsDiv.appendChild(doneMsg);
        }
    }

    summaryContainer.appendChild(actionsDiv);

    const lessonContent = document.getElementById('lesson-questions').parentElement;
    const existing = document.getElementById('lesson-summary');
    if (existing) existing.remove();
    lessonContent.appendChild(summaryContainer);

    setTimeout(() => {
        summaryContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 300);
}

// متغيرات لتتبع الحصة الحالية والامتحان الحالي
let currentUnitId = null;
let currentLessonId = null;
let currentExamId = null;
// علم لتخطي استئناف التقدم التلقائي (يُستخدم عند الضغط على زر العودة)
let skipAutoResume = false;

// دالة لعرض رسائل الأخطاء على الشاشة بدلاً من alert
function showErrorMessage(message) {
    // البحث عن container الرسائل أو إنشاء واحد جديد
    let errorContainer = document.getElementById('error-message-container');
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.id = 'error-message-container';
        errorContainer.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            right: 20px;
            background: #FEE2E2;
            color: #991B1B;
            padding: 16px;
            border-radius: 8px;
            border: 2px solid #DC2626;
            box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
            font-size: 1rem;
            text-align: right;
            z-index: 9999;
            direction: rtl;
            font-weight: 500;
        `;
        document.body.appendChild(errorContainer);
    }
    
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';
    
    // إزالة الرسالة بعد 5 ثوان
    setTimeout(() => {
        errorContainer.style.display = 'none';
    }, 5000);
}

// تحديث دالة viewLesson لحفظ معرفات الوحدة والحصة
const originalViewLesson = viewLesson;
viewLesson = function(unitId, lessonId) {
    currentUnitId = unitId;
    currentLessonId = lessonId;
    // احفظ التقدم قبل العرض
    try { saveLastProgress(unitId, lessonId); } catch (e) {}
    originalViewLesson.call(this, unitId, lessonId);
};

// رسالة ترحيبية في الكونسول
console.log('%c🚀 منصة تعلم الإنجليزية جاهزة!', 'color: #2563EB; font-size: 16px; font-weight: bold;');
console.log('%cتم تطوير الواجهة باستخدام HTML, CSS, JavaScript فقط', 'color: #22C55E; font-size: 14px;');

// Attach delegated handlers to question containers so clicking anywhere on an option-label selects it immediately.
function attachOptionSelection(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // pointerdown handles touch and mouse presses
    container.addEventListener('pointerdown', function(e) {
        let node = e.target;
        while (node && node.nodeType !== 1) node = node.parentNode;
        if (!node) return;
        const label = node.closest('.option-label');
        if (!label || !container.contains(label)) return;
        const input = label.querySelector('input[type="radio"]');
        if (!input) return;
        if (e.target === input) return; // allow native input interaction
        e.preventDefault();
        // use native click to ensure browser behavior (focus, change events)
        try {
            input.focus();
            input.click();
        } catch (err) {
            if (!input.checked) {
                input.checked = true;
                input.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
        // mark to ignore following click within container
        label.setAttribute('data-skip-click', '1');
        setTimeout(() => label.removeAttribute('data-skip-click'), 200);
    });

    // ignore the following click event if we just handled pointerdown
    container.addEventListener('click', function(e) {
        const label = e.target.closest && e.target.closest('.option-label');
        if (!label || !container.contains(label)) return;
        if (label.getAttribute('data-skip-click') === '1') {
            e.preventDefault();
            e.stopImmediatePropagation();
            label.removeAttribute('data-skip-click');
        }
    }, true);
}

// Attach to both lesson and exam question containers
attachOptionSelection('exam-questions');
attachOptionSelection('lesson-questions');