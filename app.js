// app.js - ملف البيانات والمسارات المركزي للتطبيق

// =======================
// بيانات الحصص (كاملة)
// =======================
export const lessonsData = {
    1: [
        { 
            id: 1, 
            title: "Introduction to English", 
            videoUrl: "https://www.youtube.com/embed/CHr7dkZF5y0",
            questions: [
                { text: "ما هو الهدف الأساسي من تعلم اللغة الإنجليزية؟", options: ["التواصل العالمي", "كتاب الهاتف", "الموسيقى"], correct: 0, category: "المفردات" },
                { text: "كم عدد متحدثي اللغة الإنجليزية في العالم؟", options: ["200 مليون", "1 مليار", "500 مليون"], correct: 1, category: "المفردات" }
            ],
            status: "completed" 
        },
        { 
            id: 2, 
            title: "English Alphabet & Pronunciation", 
            videoUrl: "https://www.youtube.com/embed/CBDFlsffIqg",
            questions: [
                { text: "كم عدد حروف اللغة الإنجليزية؟", options: ["24", "26", "28"], correct: 1, category: "الحروف" },
                { text: "الحروف المتحركة (Vowels) هي:", options: ["A, E, I, O, U", "B, C, D, F, G", "جميع الحروف"], correct: 0, category: "الحروف" }
            ],
            status: "completed" 
        },
        { 
            id: 3, 
            title: "Basic English Words", 
            videoUrl: "https://www.youtube.com/embed/U-1r5v6gBZ4",
            questions: [
                { text: "كلمة 'Hello' تعني:", options: ["مرحبا", "وداعا", "شكرا"], correct: 0, category: "المفردات" },
                { text: "كلمة 'Book' تترجم إلى:", options: ["قلم", "كتاب", "ورقة"], correct: 1, category: "المفردات" }
            ],
            status: "current" 
        },
        { 
            id: 4, 
            title: "Numbers in English", 
            videoUrl: "https://www.youtube.com/embed/vB-eDPvAF2s",
            questions: [
                { text: "'Five' = ؟", options: ["4", "5", "6"], correct: 1, category: "الأرقام" },
                { text: "'Ten' = ؟", options: ["8", "9", "10"], correct: 2, category: "الأرقام" }
            ],
            status: "locked" 
        },
        { 
            id: 5, 
            title: "Colors in English", 
            videoUrl: "https://www.youtube.com/embed/7R3qo93PZfE",
            questions: [
                { text: "'Red' يعني:", options: ["أزرق", "أحمر", "أخضر"], correct: 1, category: "المفردات" },
                { text: "'Yellow' يعني:", options: ["أسود", "أصفر", "أبيض"], correct: 1, category: "المفردات" }
            ],
            status: "locked" 
        },
        { 
            id: 6, 
            title: "Days of the Week", 
            videoUrl: "https://www.youtube.com/embed/DXzUZ6aQvzQ",
            questions: [
                { text: "كم يوم في الأسبوع؟", options: ["5", "7", "6"], correct: 1, category: "المفردات" },
                { text: "'Monday' يعني:", options: ["الثلاثاء", "الاثنين", "الأربعاء"], correct: 1, category: "المفردات" }
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
                { text: "'How are you?' تعني:", options: ["ماذا اسمك؟", "كيف حالك؟", "أين تسكن؟"], correct: 1, category: "المحادثة" },
                { text: "الرد على 'How are you?' هو:", options: ["I'm fine, thank you", "My name is...", "I'm happy"], correct: 0, category: "المحادثة" }
            ],
            status: "locked" 
        },
        { 
            id: 2, 
            title: "Asking Questions", 
            videoUrl: "https://www.youtube.com/embed/9nWrAL9S5SY",
            questions: [
                { text: "'What is your name?' تعني:", options: ["ماذا اسمك؟", "أين أنت؟", "متى ولدت؟"], correct: 0, category: "أسئلة واستفهام" },
                { text: "الاستفهام يبدأ غالباً ب:", options: ["What, Where, Why", "A, B, C", "The, And, Or"], correct: 0, category: "أسئلة واستفهام" }
            ],
            status: "locked" 
        },
        { 
            id: 3, 
            title: "Shopping Vocabulary", 
            videoUrl: "https://www.youtube.com/embed/LnN8HsF_R5E",
            questions: [
                { text: "'How much?' تستخدم لـ:", options: ["السؤال عن الثمن", "السؤال عن الموقع", "السؤال عن الوقت"], correct: 0, category: "المفردات" },
                { text: "'Expensive' تعني:", options: ["رخيص", "غالي", "بسيط"], correct: 1, category: "المفردات" }
            ],
            status: "locked" 
        },
        { 
            id: 4, 
            title: "Restaurant English", 
            videoUrl: "https://www.youtube.com/embed/Y8XLbRKbQTc",
            questions: [
                { text: "'I'd like to order...' تعني:", options: ["أريد أن أطلب", "أريد أن أدفع", "أريد الحساب"], correct: 0, category: "المحادثة" },
                { text: "'The bill, please' تعني:", options: ["الماء من فضلك", "الحساب من فضلك", "الطعام من فضلك"], correct: 1, category: "المحادثة" }
            ],
            status: "locked" 
        },
        { 
            id: 5, 
            title: "Travel Phrases", 
            videoUrl: "https://www.youtube.com/embed/xHjhZ6i4QJk",
            questions: [
                { text: "'Where is the restroom?' تعني:", options: ["أين المحطة؟", "أين الحمام؟", "أين الفندق؟"], correct: 1, category: "المحادثة" },
                { text: "'I'm lost' تعني:", options: ["أنا متأخر", "أنا ضائع", "أنا مشغول"], correct: 1, category: "المحادثة" }
            ],
            status: "locked" 
        },
        { 
            id: 6, 
            title: "Phone Conversations", 
            videoUrl: "https://www.youtube.com/embed/RxqURrAhWQI",
            questions: [
                { text: "'Hello, this is...' تستخدم ل:", options: ["التحية الشخصية", "التحية الهاتفية", "التحية الرسمية"], correct: 1, category: "المحادثة" },
                { text: "'Can I speak to...?' تعني:", options: ["هل تتحدث؟", "هل أستطيع التحدث مع؟", "هل تسمعني؟"], correct: 1, category: "المحادثة" }
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
                { text: "Present Simple يستخدم ل:", options: ["الأفعال اليومية", "الأحداث المستقبلية", "الأحداث الماضية"], correct: 0, category: "المضارع البسيط" },
                { text: "صيغة المثنى في Present Simple:", options: ["I go, he goes", "I goes, he go", "I go, he go"], correct: 0, category: "المضارع البسيط" }
            ],
            status: "locked" 
        },
        { 
            id: 2, 
            title: "Past Simple Tense", 
            videoUrl: "https://www.youtube.com/embed/BPZR8qyJSh0",
            questions: [
                { text: "Past Simple يستخدم ل:", options: ["الحاضر", "الماضي", "المستقبل"], correct: 1, category: "الماضي البسيط" },
                { text: "الفعل 'went' هو ماضي الفعل:", options: ["go", "went", "going"], correct: 0, category: "الماضي البسيط" }
            ],
            status: "locked" 
        },
        { 
            id: 3, 
            title: "Future Tense", 
            videoUrl: "https://www.youtube.com/embed/gO-TzVWBGHU",
            questions: [
                { text: "للتحدث عن المستقبل نستخدم:", options: ["will", "did", "was"], correct: 0, category: "المستقبل" },
                { text: "'I will go' تعني:", options: ["ذهبت", "سأذهب", "أنا ذاهب"], correct: 1, category: "المستقبل" }
            ],
            status: "locked" 
        },
        { 
            id: 4, 
            title: "Subject-Verb Agreement", 
            videoUrl: "https://www.youtube.com/embed/b3HO3q8CmFM",
            questions: [
                { text: "'He play' صحيحة؟", options: ["نعم", "لا، الصحيح He plays", "ربما"], correct: 1, category: "قواعد" },
                { text: "'They goes' صحيحة؟", options: ["نعم", "لا، الصحيح They go", "ربما"], correct: 1, category: "قواعد" }
            ],
            status: "locked" 
        },
        { 
            id: 5, 
            title: "Sentence Structure", 
            videoUrl: "https://www.youtube.com/embed/eCl-B_LF4F0",
            questions: [
                { text: "ترتيب الجملة الإنجليزية:", options: ["فعل + فاعل + مفعول", "فاعل + فعل + مفعول", "مفعول + فاعل + فعل"], correct: 1, category: "قواعد" },
                { text: "في الجملة 'I like apples' الفاعل هو:", options: ["apples", "I", "like"], correct: 1, category: "قواعد" }
            ],
            status: "locked" 
        },
        { 
            id: 6, 
            title: "Common Mistakes", 
            videoUrl: "https://www.youtube.com/embed/j2bEX3rWE2s",
            questions: [
                { text: "الخطأ الشائع 'I am go' يصحح إلى:", options: ["I am going", "I go", "كلاهما صحيح"], correct: 0, category: "قواعد" },
                { text: "استخدام 'a' vs 'an':", options: ["a + حرف ساكن", "an + حرف متحرك", "كلاهما"], correct: 2, category: "قواعد" }
            ],
            status: "locked" 
        }
    ]
};

// =======================
// أسماء الوحدات
// =======================
export const unitNames = {
    1: "الوحدة الأولى: أساسيات اللغة",
    2: "الوحدة الثانية: المحادثة اليومية",
    3: "الوحدة الثالثة: القواعد الأساسية"
};

// =======================
// بيانات الامتحانات
// =======================
export const examsData = [
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

// =======================
// دوال مساعدة عامة
// =======================

// حفظ المسار التعليمي
export function saveEducationPath(unitId) {
    const pathData = {
        unitId: parseInt(unitId),
        unitName: unitNames[unitId],
        savedDate: new Date().toISOString(),
        completedLessons: [],
        isNew: true
    };
    localStorage.setItem('educationPath', JSON.stringify(pathData));
}

// الحصول على المسار التعليمي المحفوظ
export function getSavedEducationPath() {
    const saved = localStorage.getItem('educationPath');
    return saved ? JSON.parse(saved) : null;
}

// بدء المسار التعليمي
export function startEducationPath() {
    const savedPath = getSavedEducationPath();
    if (savedPath) {
        // تحديث حالة المسار للدلالة على أنه بدأ
        savedPath.isNew = false;
        localStorage.setItem('educationPath', JSON.stringify(savedPath));
    }
}

// مفتاح وتكوين الإحصائيات
export const STATS_KEY = 'manaraStats_v1';
export const ALL_CATEGORIES = {
    'المفردات': { correct: 0, wrong: 0, points: 0 },
    'الحروف': { correct: 0, wrong: 0, points: 0 },
    'الأرقام': { correct: 0, wrong: 0, points: 0 },
    'المحادثة': { correct: 0, wrong: 0, points: 0 },
    'أسئلة واستفهام': { correct: 0, wrong: 0, points: 0 },
    'قواعد': { correct: 0, wrong: 0, points: 0 },
    'المضارع البسيط': { correct: 0, wrong: 0, points: 0 },
    'المضارع المستمر': { correct: 0, wrong: 0, points: 0 },
    'الماضي البسيط': { correct: 0, wrong: 0, points: 0 },
    'المستقبل': { correct: 0, wrong: 0, points: 0 }
};
