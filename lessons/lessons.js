// بيانات الحصص (كاملة)
const lessonsData = {
    1: [
        { 
            id: 1, 
            title: "Introduction to English", 
            videoUrl: "https://www.youtube.com/embed/K0-bFGfJwmU",
            questions: [
                { text: "ما هو الهدف الأساسي من تعلم اللغة الإنجليزية؟", options: ["التواصل العالمي", "كتاب الهاتف", "الموسيقى"], correct: 0, category: "مفردات" },
                { text: "كم عدد متحدثي اللغة الإنجليزية في العالم؟", options: ["200 مليون", "1 مليار", "500 مليون"], correct: 1, category: "مفردات" }
            ],
            status: "completed" 
        },
        { 
            id: 2, 
            title: "English Alphabet & Pronunciation", 
            videoUrl: "https://www.youtube.com/embed/2EdHuKBmCvk",
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
                { text: "كلمة 'Hello' تعني:", options: ["مرحبا", "وداعا", "شكرا"], correct: 0, category: "مفردات" },
                { text: "كلمة 'Book' تترجم إلى:", options: ["قلم", "كتاب", "ورقة"], correct: 1, category: "مفردات" }
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
            status: "current" 
        },
        { 
            id: 5, 
            title: "Colors in English", 
            videoUrl: "https://www.youtube.com/embed/7R3qo93PZfE",
            questions: [
                { text: "'Red' يعني:", options: ["أزرق", "أحمر", "أخضر"], correct: 1, category: "مفردات" },
                { text: "'Yellow' يعني:", options: ["أسود", "أصفر", "أبيض"], correct: 1, category: "مفردات" }
            ],
            status: "current" 
        },
        { 
            id: 6, 
            title: "Days of the Week", 
            videoUrl: "https://www.youtube.com/embed/DXzUZ6aQvzQ",
            questions: [
                { text: "كم يوم في الأسبوع؟", options: ["5", "7", "6"], correct: 1, category: "مفردات" },
                { text: "'Monday' يعني:", options: ["الثلاثاء", "الاثنين", "الأربعاء"], correct: 1, category: "مفردات" }
            ],
            status: "current" 
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
            status: "current" 
        },
        { 
            id: 2, 
            title: "Asking Questions", 
            videoUrl: "https://www.youtube.com/embed/9nWrAL9S5SY",
            questions: [
                { text: "'What is your name?' تعني:", options: ["ماذا اسمك؟", "أين أنت؟", "متى ولدت؟"], correct: 0, category: "أسئلة واستفهام" },
                { text: "الاستفهام يبدأ غالباً ب:", options: ["What, Where, Why", "A, B, C", "The, And, Or"], correct: 0, category: "أسئلة واستفهام" }
            ],
            status: "current" 
        },
        { 
            id: 3, 
            title: "Shopping Vocabulary", 
            videoUrl: "https://www.youtube.com/embed/LnN8HsF_R5E",
            questions: [
                { text: "'How much?' تستخدم لـ:", options: ["السؤال عن الثمن", "السؤال عن الموقع", "السؤال عن الوقت"], correct: 0, category: "المفردات" },
                { text: "'Expensive' تعني:", options: ["رخيص", "غالي", "بسيط"], correct: 1, category: "المفردات" }
            ],
            status: "current" 
        },
        { 
            id: 4, 
            title: "Restaurant English", 
            videoUrl: "https://www.youtube.com/embed/Y8XLbRKbQTc",
            questions: [
                { text: "'I'd like to order...' تعني:", options: ["أريد أن أطلب", "أريد أن أدفع", "أريد الحساب"], correct: 0, category: "المحادثة" },
                { text: "'The bill, please' تعني:", options: ["الماء من فضلك", "الحساب من فضلك", "الطعام من فضلك"], correct: 1, category: "المحادثة" }
            ],
            status: "current" 
        },
        { 
            id: 5, 
            title: "Travel Phrases", 
            videoUrl: "https://www.youtube.com/embed/xHjhZ6i4QJk",
            questions: [
                { text: "'Where is the restroom?' تعني:", options: ["أين المحطة؟", "أين الحمام؟", "أين الفندق؟"], correct: 1, category: "المحادثة" },
                { text: "'I'm lost' تعني:", options: ["أنا متأخر", "أنا ضائع", "أنا مشغول"], correct: 1, category: "المحادثة" }
            ],
            status: "current" 
        },
        { 
            id: 6, 
            title: "Phone Conversations", 
            videoUrl: "https://www.youtube.com/embed/RxqURrAhWQI",
            questions: [
                { text: "'Hello, this is...' تستخدم ل:", options: ["التحية الشخصية", "التحية الهاتفية", "التحية الرسمية"], correct: 1, category: "المحادثة" },
                { text: "'Can I speak to...?' تعني:", options: ["هل تتحدث؟", "هل أستطيع التحدث مع؟", "هل تسمعني؟"], correct: 1, category: "المحادثة" }
            ],
            status: "current" 
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
            status: "current" 
        },
        { 
            id: 2, 
            title: "Past Simple Tense", 
            videoUrl: "https://www.youtube.com/embed/BPZR8qyJSh0",
            questions: [
                { text: "Past Simple يستخدم ل:", options: ["الأحداث الماضية", "الأفعال اليومية", "المستقبل"], correct: 0, category: "الماضي البسيط" },
                { text: "الفعل 'went' هو ماضي الفعل:", options: ["go", "went", "going"], correct: 0, category: "الماضي البسيط" }
            ],
            status: "current" 
        },
        { 
            id: 3, 
            title: "Future Tense", 
            videoUrl: "https://www.youtube.com/embed/gO-TzVWBGHU",
            questions: [
                { text: "للتحدث عن المستقبل نستخدم:", options: ["will", "did", "was"], correct: 0, category: "المستقبل" },
                { text: "'I will go' تعني:", options: ["ذهبت", "سأذهب", "أنا ذاهب"], correct: 1, category: "المستقبل" }
            ],
            status: "current" 
        },
        { 
            id: 4, 
            title: "Subject-Verb Agreement", 
            videoUrl: "https://www.youtube.com/embed/b3HO3q8CmFM",
            questions: [
                { text: "'He play' صحيحة؟", options: ["نعم", "لا، الصحيح He plays", "لا أعرف"], correct: 1, category: "قواعد" },
                { text: "'They goes' صحيحة؟", options: ["نعم", "لا، الصحيح They go", "ربما"], correct: 1, category: "قواعد" }
            ],
            status: "current" 
        },
        { 
            id: 5, 
            title: "Sentence Structure", 
            videoUrl: "https://www.youtube.com/embed/eCl-B_LF4F0",
            questions: [
                { text: "ترتيب الجملة الإنجليزية:", options: ["فعل + فاعل + مفعول", "فاعل + فعل + مفعول", "مفعول + فاعل + فعل"], correct: 1, category: "قواعد" },
                { text: "في الجملة 'I like apples' الفاعل هو:", options: ["apples", "I", "like"], correct: 1, category: "قواعد" }
            ],
            status: "current" 
        },
        { 
            id: 6, 
            title: "Common Mistakes", 
            videoUrl: "https://www.youtube.com/embed/j2bEX3rWE2s",
            questions: [
                { text: "الخطأ الشائع 'I am go' يصحح إلى:", options: ["I am going", "I go", "كلاهما صحيح"], correct: 0, category: "قواعد" },
                { text: "استخدام 'a' vs 'an':", options: ["a + حرف ساكن", "an + حرف متحرك", "كلاهما"], correct: 2, category: "قواعد" }
            ],
            status: "current" 
        }
    ]
};

// بيانات الامتحانات (للإشارة عند الانتقال)
const examsData = [
    { id: 1, title: "Unit 1 Quiz - Basic English", status: "available" },
    { id: 2, title: "Unit 2 Quiz - Conversations", status: "available" },
    { id: 3, title: "Unit 3 Quiz - Grammar Basics", status: "locked" }
];

// إحصائيات
const STATS_KEY = 'manaraStats_v1';
const ALL_CATEGORIES = {
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

let statsStore = loadStatsFromStorage();

function loadStatsFromStorage() {
    try {
        const raw = localStorage.getItem(STATS_KEY);
        if (raw) return JSON.parse(raw);
    } catch (e) {}
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

function updateStatsFromResults(results, questionsArray) {
    if (!Array.isArray(results) || !Array.isArray(questionsArray)) return 0;
    let sessionCorrect = 0;
    let sessionWrong = 0;
    const perCategoryDelta = {};

    results.forEach(r => {
        const q = questionsArray[r.idx];
        const category = (q && q.category) ? q.category : 'مفردات';
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

    const sessionPoints = sessionCorrect - sessionWrong;
    statsStore.points = (statsStore.points || 0) + sessionPoints;

    for (const cat in perCategoryDelta) {
        const d = perCategoryDelta[cat];
        statsStore.byCategory[cat].points = (statsStore.byCategory[cat].points || 0) + (d.correct - d.wrong);
    }

    saveStatsToStorage();
    return sessionPoints;
}

// متغيرات الحالة
let currentUnitId = null;
let currentLessonId = null;
let expandedUnit = null;

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    populateLessons();
    
    // فتح الوحدة الأولى افتراضياً
    setTimeout(() => {
        const firstUnit = document.querySelector('.unit-card');
        if (firstUnit) toggleLessons(firstUnit);
    }, 300);

    // التحقق من وجود معامل unit في URL (قادم من home)
    const urlParams = new URLSearchParams(window.location.search);
    const unitParam = urlParams.get('unit');
    const lessonParam = urlParams.get('lesson');
    if (unitParam && lessonsData[unitParam]) {
        // إذا كان هناك معامل درس، نفتح تلك الحصة مباشرة
        if (lessonParam) {
            viewLesson(unitParam, parseInt(lessonParam));
        } else {
            // وإلا نفتح الوحدة في قائمة الحصص
            setTimeout(() => {
                const unitCard = document.querySelector(`.unit-card[data-unit="${unitParam}"]`);
                if (unitCard) {
                    toggleLessons(unitCard);
                    unitCard.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    }
});

function populateLessons() {
    for (const unitId in lessonsData) {
        const lessonsContainer = document.getElementById(`unit-${unitId}-lessons`);
        if (lessonsContainer) {
            const lessons = lessonsData[unitId];
            let lessonsHTML = '';
            
            lessons.forEach(lesson => {
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

function getStatusText(status) {
    switch(status) {
        case 'completed': return 'مكتملة';
        case 'current': return 'حالية';
        case 'locked': return 'مقفلة';
        default: return '';
    }
}

function toggleLessons(unitElement) {
    const unitId = unitElement.getAttribute('data-unit');
    const lessonsContainer = unitElement.querySelector('.unit-lessons');
    
    if (expandedUnit === unitId) {
        lessonsContainer.classList.remove('expanded');
        expandedUnit = null;
        unitElement.querySelector('.unit-status').style.backgroundColor = 'white';
    } else {
        document.querySelectorAll('.unit-lessons.expanded').forEach(container => {
            container.classList.remove('expanded');
        });
        
        lessonsContainer.classList.add('expanded');
        expandedUnit = unitId;
        
        document.querySelectorAll('.unit-card').forEach(card => {
            card.querySelector('.unit-status').style.backgroundColor = 'white';
        });
        unitElement.querySelector('.unit-status').style.backgroundColor = 'var(--primary-light)';
    }
}

function viewLesson(unitId, lessonId) {
    const lesson = lessonsData[unitId]?.find(l => l.id === lessonId);
    if (!lesson) return;

    currentUnitId = unitId;
    currentLessonId = lessonId;

    document.getElementById('lesson-title-header').textContent = lesson.title;
    document.getElementById('lesson-iframe').src = lesson.videoUrl;

    const questionsContainer = document.getElementById('lesson-questions');
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

    // التبديل إلى شاشة عرض الحصة
    document.getElementById('lessons-screen').classList.remove('active');
    document.getElementById('lesson-view-screen').classList.add('active');
}

function goBackToLessons() {
    document.getElementById('lesson-view-screen').classList.remove('active');
    document.getElementById('lessons-screen').classList.add('active');
    // إزالة أي ملخص قديم
    const summary = document.getElementById('lesson-summary');
    if (summary) summary.remove();
}

function submitLesson() {
    const questions = document.querySelectorAll('#lesson-questions .question-card');
    const currentLesson = lessonsData[currentUnitId]?.find(l => l.id === currentLessonId);
    if (!currentLesson) return;

    let allAnswered = true;
    questions.forEach((questionCard) => {
        const radio = questionCard.querySelector('input[type="radio"]:checked');
        if (!radio) {
            allAnswered = false;
            questionCard.style.borderColor = '#FFA500';
        } else {
            questionCard.style.borderColor = '';
        }
    });

    if (!allAnswered) {
        showErrorMessage('⚠️ يجب الإجابة على جميع الأسئلة قبل التسليم!');
        return;
    }

    let correct = 0;
    const results = [];

    questions.forEach((questionCard, idx) => {
        const radio = questionCard.querySelector('input[type="radio"]:checked');
        const question = currentLesson.questions[idx];
        if (!question) return;

        if (radio) {
            const selectedAnswer = parseInt(radio.value);
            const isCorrect = selectedAnswer === question.correct;
            
            if (isCorrect) {
                correct++;
                results.push({ isCorrect: true, idx });
                questionCard.style.borderColor = 'var(--success)';
                questionCard.style.backgroundColor = 'rgba(34, 197, 94, 0.05)';
                const resultDiv = document.createElement('div');
                resultDiv.className = 'answer-result-inline correct-inline';
                resultDiv.innerHTML = `<i class="fas fa-check-circle"></i> الإجابة ${idx + 1}: صح`;
                questionCard.appendChild(resultDiv);
            } else {
                const correctAnswer = question.options[question.correct];
                results.push({ isCorrect: false, idx, correctAnswer });
                questionCard.style.borderColor = '#EF4444';
                questionCard.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';
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

    const sessionPoints = updateStatsFromResults(results, currentLesson.questions);
    displayLessonSummary(correct, questions.length, results, sessionPoints);
}

function displayLessonSummary(correct, totalQuestions, results, sessionPoints) {
    const percentage = (correct / totalQuestions) * 100;
    const summaryContainer = document.createElement('div');
    summaryContainer.id = 'lesson-summary';
    summaryContainer.className = 'exam-summary';

    summaryContainer.innerHTML = `
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
                <span class="stat-value wrong-value">${totalQuestions - correct}</span>
            </div>
            <div class="summary-stat">
                <span class="stat-label">النسبة:</span>
                <span class="stat-value percent-value">${percentage.toFixed(0)}%</span>
            </div>
            <div class="summary-stat">
                <span class="stat-label">نقاط:</span>
                <span class="stat-value points-value">${sessionPoints}</span>
            </div>
        </div>
        <div class="exam-summary-list"></div>
        <div class="lesson-summary-actions"></div>
    `;

    const listContainer = summaryContainer.querySelector('.exam-summary-list');
    results.forEach(r => {
        const item = document.createElement('div');
        item.className = `exam-summary-item ${r.isCorrect ? 'correct-item' : 'wrong-item'}`;
        const qNum = r.idx + 1;
        if (r.isCorrect) {
            item.innerText = `السؤال ${qNum}: صح`;
        } else {
            item.innerText = `السؤال ${qNum}: الإجابة الصحيحة هي: ${r.correctAnswer}`;
        }
        listContainer.appendChild(item);
    });

    // أزرار المتابعة
    const actionsDiv = summaryContainer.querySelector('.lesson-summary-actions');
    const lessons = lessonsData[currentUnitId];
    const curIdNum = parseInt(currentLessonId, 10);
    let nextLesson = null;
    if (lessons) {
        for (let i = 0; i < lessons.length; i++) {
            if (lessons[i].id === curIdNum && i + 1 < lessons.length) {
                nextLesson = lessons[i + 1];
                break;
            }
        }
    }

    if (nextLesson) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-primary';
        nextBtn.textContent = 'التالي';
        nextBtn.style.margin = '0';
        nextBtn.addEventListener('click', () => {
            viewLesson(currentUnitId, nextLesson.id);
        });
        actionsDiv.appendChild(nextBtn);
    } else {
        // لا يوجد درس تالي -> عرض زر امتحان الوحدة
        const examForUnit = examsData.find(ex => parseInt(ex.id, 10) === parseInt(currentUnitId, 10));
        if (examForUnit && examForUnit.status !== 'locked') {
            const examBtn = document.createElement('button');
            examBtn.className = 'btn btn-primary';
            examBtn.textContent = 'ابدأ امتحان الوحدة';
            examBtn.addEventListener('click', () => {
                window.location.href = `exams.html?exam=${examForUnit.id}`;
            });
            actionsDiv.appendChild(examBtn);
        } else {
            const doneMsg = document.createElement('div');
            doneMsg.className = 'results-message';
            doneMsg.textContent = 'انتهت حصص هذه الوحدة.';
            actionsDiv.appendChild(doneMsg);
        }
    }

    const lessonContent = document.getElementById('lesson-questions').parentElement;
    lessonContent.appendChild(summaryContainer);
    summaryContainer.scrollIntoView({ behavior: 'smooth' });
}

function showErrorMessage(message) {
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
    setTimeout(() => { errorContainer.style.display = 'none'; }, 5000);
}

// تفعيل اختيار الخيارات بالنقر على أي مكان في label
document.addEventListener('pointerdown', function(e) {
    const label = e.target.closest('.option-label');
    if (!label) return;
    const input = label.querySelector('input[type="radio"]');
    if (!input || e.target === input) return;
    e.preventDefault();
    input.focus();
    input.click();
});