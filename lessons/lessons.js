// lessons.js - منطق صفحة الحصص

// استيراد البيانات من app.js
import { lessonsData, unitNames, examsData, STATS_KEY, ALL_CATEGORIES } from '../app.js';

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

// تحديث معلومات الوحدة والحصص في الرأس
function updateUnitInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const unitParam = urlParams.get('unit');
    
    if (unitParam && lessonsData[unitParam]) {
        const unitName = unitNames[unitParam];
        const lessonsCount = lessonsData[unitParam].length;
        
        document.getElementById('header-unit-name').textContent = unitName;
        document.getElementById('lesson-count').textContent = lessonsCount;
    }
}

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    updateUnitInfo();
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
    const unitsContainer = document.querySelector('.units-container');
    if (!unitsContainer) return;

    unitsContainer.innerHTML = '';

    for (const unitId in lessonsData) {
        const unitLessons = lessonsData[unitId];
        if (!Array.isArray(unitLessons)) continue;

        const completedCount = unitLessons.filter(l => l.status === 'completed').length;
        const lockedCount = unitLessons.filter(l => l.status === 'locked').length;
        const isUnitLocked = lockedCount === unitLessons.length;

        const unitCard = document.createElement('div');
        unitCard.className = `unit-card ${isUnitLocked ? 'locked' : ''}`;
        unitCard.setAttribute('data-unit', unitId);

        const statusText = isUnitLocked ? 'مقفلة' : `${completedCount} من ${unitLessons.length} حصص مكتملة`;

        unitCard.innerHTML = `
            <div class="unit-header">
                <h3><i class="fas fa-book"></i> ${unitNames[unitId] || 'الوحدة'}</h3>
                <span class="unit-status">${statusText}</span>
            </div>
            <div class="unit-lessons" id="unit-${unitId}-lessons"></div>
        `;

        unitCard.addEventListener('click', () => toggleLessons(unitCard));
        unitsContainer.appendChild(unitCard);

        if (isUnitLocked) continue;

        const lessonsContainer = unitCard.querySelector('.unit-lessons');
        let lessonsHTML = '';

        unitLessons.forEach(lesson => {
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
                        </div>
                    </div>
                </div>
            `;
        });

        lessonsContainer.innerHTML = lessonsHTML;
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
    if (unitElement.classList.contains('locked')) {
        // لا نفتح الوحدات المقفلة
        return;
    }

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

// expose functions for inline handlers (this file is loaded as an ES module)
window.toggleLessons = toggleLessons;
window.viewLesson = viewLesson;
window.goBackToLessons = goBackToLessons;
window.submitLesson = submitLesson;
window.goToNextLesson = goToNextLesson;
window.goBackToPath = goBackToPath;

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