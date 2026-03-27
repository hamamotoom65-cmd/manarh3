// home.js - إصلاح مشكلة عرض الفيديو بشكل جذري

import { fetchAppDataFromServer, lessonsData, unitNames, saveEducationPath, getSavedEducationPath, startEducationPath, submitLessonAnswers, completeLessonInPath } from '../app.js';

let currentUnit = null;
let currentLesson = null;

// التحقق من البيانات
function checkDataAvailability() {
    if (!lessonsData || Object.keys(lessonsData).length === 0) {
        console.error('❌ lessonsData غير موجود');
        return false;
    }
    if (!unitNames || Object.keys(unitNames).length === 0) {
        console.error('❌ unitNames غير موجود');
        return false;
    }
    return true;
}

// عرض المسار
function displayActivePath() {
    if (!checkDataAvailability()) return;
    const savedPath = getSavedEducationPath();
    const newPathOptions = document.getElementById('new-path-options');
    const activePathInfo = document.getElementById('active-path-info');
    const primaryBtn = document.querySelector('.btn-primary');
    
    if (savedPath) {
        document.getElementById('current-unit-name').textContent = savedPath.unitName;
        if (savedPath.isNew) {
            newPathOptions.style.display = 'block';
            activePathInfo.style.display = 'none';
            primaryBtn.style.display = 'none';
        } else {
            newPathOptions.style.display = 'none';
            activePathInfo.style.display = 'block';
            primaryBtn.style.display = 'none';
        }
    } else {
        newPathOptions.style.display = 'none';
        activePathInfo.style.display = 'none';
        primaryBtn.style.display = 'flex';
    }
}

// متابعة المسار
function continueEducationPath() {
    if (!checkDataAvailability()) return;
    const savedPath = getSavedEducationPath();
    if (!savedPath) return openUnitSelector();
    startEducationPath();
    const unitLessons = lessonsData[savedPath.unitId] || [];
    const currentLessonObj = unitLessons.find(l => l.status === 'current') || unitLessons.find(l => l.status !== 'completed');
    if (currentLessonObj) {
        viewLesson(savedPath.unitId, currentLessonObj.id);
    } else {
        openLessonsList(savedPath.unitId);
    }
}

// فتح نافذة الوحدات
function openUnitSelector() {
    if (!checkDataAvailability()) return;
    const unitModal = document.getElementById('unit-modal');
    const unitsList = unitModal.querySelector('.units-list');
    const unitsCountElement = document.getElementById('units-count');
    unitsList.innerHTML = '';
    const totalUnits = Object.keys(lessonsData).length;
    unitsCountElement.textContent = totalUnits;
    
    for (const unitId in lessonsData) {
        const unitTitle = unitNames[unitId] || `وحدة ${unitId}`;
        const lessonsCount = lessonsData[unitId].length;
        const completedStatus = lessonsData[unitId].filter(l => l.status === 'completed').length;
        const unitItem = document.createElement('div');
        unitItem.className = 'unit-item';
        unitItem.innerHTML = `
            <div class="unit-item-content">
                <h4>🎓 ${unitTitle}</h4>
                <p class="unit-stats">${lessonsCount} حصص | ✅ ${completedStatus} مكتملة</p>
                <p class="unit-description">ابدأ تعلمك الآن</p>
            </div>
        `;
        unitItem.addEventListener('click', () => {
            closeUnitModal();
            saveEducationPath(unitId);
            openLessonsList(unitId);
        });
        unitsList.appendChild(unitItem);
    }
    unitModal.classList.add('active');
}

// فتح قائمة الحصص
function openLessonsList(unitId) {
    if (!checkDataAvailability()) return;
    currentUnit = parseInt(unitId);
    console.log('📋 فتح قائمة الحصص للوحدة:', currentUnit);
    const lessonsList = document.getElementById('lessons-grid');
    document.getElementById('lessons-unit-name').textContent = unitNames[unitId] || `وحدة ${unitId}`;
    document.getElementById('lessons-count').textContent = lessonsData[unitId]?.length || 0;
    lessonsList.innerHTML = '';
    
    const unitLessons = lessonsData[unitId];
    if (!unitLessons || unitLessons.length === 0) {
        lessonsList.innerHTML = `<div class="no-lessons-message">لا توجد حصص</div>`;
        switchScreen('lessons-list-screen');
        return;
    }
    const availableLessons = unitLessons.filter(l => l.status !== 'locked');
    if (availableLessons.length === 0) {
        lessonsList.innerHTML = `<div class="no-lessons-message">جميع الحصص مقفلة</div>`;
        switchScreen('lessons-list-screen');
        return;
    }
    availableLessons.forEach(lesson => {
        const lessonCard = document.createElement('div');
        lessonCard.className = 'lesson-card';
        let statusText = '';
        if (lesson.status === 'completed') statusText = '✅ مكتملة';
        else if (lesson.status === 'current') statusText = '📖 حالية';
        lessonCard.innerHTML = `
            <div class="lesson-header">
                <div class="lesson-title"><i class="fas fa-video"></i> ${lesson.title || 'بدون عنوان'}</div>
                <div class="lesson-status status-${lesson.status || 'locked'}">${statusText}</div>
            </div>
            <div class="lesson-meta"><span><i class="fab fa-youtube"></i> يوتيوب</span></div>
        `;
        lessonCard.addEventListener('click', () => {
            console.log('🖱️ نقر على الحصة:', lesson.id);
            viewLesson(unitId, lesson.id);
        });
        lessonsList.appendChild(lessonCard);
    });
    switchScreen('lessons-list-screen');
}

// ========== عرض الحصة مع الفيديو (مطابق لـ lessons.js) ==========
function viewLesson(unitId, lessonId) {
    const lesson = lessonsData[unitId]?.find(l => l.id === lessonId);
    if (!lesson) {
        console.error('❌ الحصة غير موجودة:', unitId, lessonId);
        return;
    }

    console.log('🎬 عرض الحصة:', lesson.title, 'الفيديو:', lesson.videoUrl);

    currentUnit = unitId;
    currentLesson = lessonId;

    document.getElementById('lesson-title-header').textContent = lesson.title;
    document.getElementById('lesson-unit-header').textContent = unitNames[unitId] || `الوحدة ${unitId}`;

    // التأكد من وجود مشغل الفيديو وتحديث src
    const iframe = document.getElementById('lesson-iframe');
    if (iframe) {
        iframe.src = lesson.videoUrl;
        iframe.style.display = 'block';
        console.log('✅ تم تحديث مشغل الفيديو:', lesson.videoUrl);
    } else {
        console.error('❌ مشغل الفيديو غير موجود');
    }

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

    // إخفاء النتيجة وإظهار الأسئلة
    document.getElementById('lesson-result').style.display = 'none';
    document.getElementById('lesson-questions').style.display = 'block';
    document.querySelector('.lesson-actions').style.display = 'block';

    // التبديل إلى شاشة الحصة
    switchScreen('lesson-view-screen');
}

// تسليم الحصة
function submitLesson() {
    const questions = document.querySelectorAll('#lesson-questions .question-card');
    const lesson = lessonsData[currentUnit]?.find(l => l.id === currentLesson);
    if (!lesson) return;

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

    const selectedAnswers = [];
    if (lesson.questions) {
        lesson.questions.forEach((q, idx) => {
            const selected = document.querySelector(`input[name="lesson-${currentUnit}-${currentLesson}-question-${idx}"]:checked`);
            selectedAnswers[idx] = selected ? selected.value : undefined;
        });
    }

    const evaluation = submitLessonAnswers(currentUnit, currentLesson, selectedAnswers);
    if (evaluation.error) {
        showErrorMessage('حدث خطأ أثناء حفظ الإجابات. الرجاء المحاولة مرة أخرى.');
        return;
    }

    const correct = evaluation.correct;
    const totalQuestions = evaluation.total;
    const results = evaluation.results;
    const sessionPoints = evaluation.points || 0;

    completeLessonInPath(currentUnit, currentLesson);
    lesson.status = 'completed';

    const lessons = lessonsData[currentUnit];
    const currentIndex = lessons.findIndex(l => l.id === currentLesson);

    document.getElementById('lesson-questions').style.display = 'none';
    document.querySelector('.lesson-actions').style.display = 'none';

    displayLessonSummary(correct, totalQuestions, results, currentIndex < lessons.length - 1, sessionPoints);
}

function displayLessonSummary(correct, totalQuestions, results, hasNextLesson, sessionPoints = 0) {
    const percentage = (correct / (totalQuestions || 1)) * 100;
    const lessonResult = document.getElementById('lesson-result');
    lessonResult.innerHTML = `
        <div class="exam-summary">
            <div class="summary-header">
                <h4><i class="fas fa-list"></i> ملخص الحصة</h4>
            </div>
            <div class="summary-stats">
                <div class="summary-stat"><span class="stat-label">صحيح:</span><span class="stat-value correct-value">${correct}</span></div>
                <div class="summary-stat"><span class="stat-label">خاطئ:</span><span class="stat-value wrong-value">${totalQuestions - correct}</span></div>
                <div class="summary-stat"><span class="stat-label">النسبة:</span><span class="stat-value percent-value">${percentage.toFixed(0)}%</span></div>
                <div class="summary-stat"><span class="stat-label">نقاط:</span><span class="stat-value points-value">${sessionPoints}</span></div>
            </div>
            <div class="exam-summary-list">
                ${results.map(r => `<div class="exam-summary-item ${r.isCorrect ? 'correct-item' : 'wrong-item'}">${r.isCorrect ? `السؤال ${r.idx +1}: صح` : `السؤال ${r.idx +1}: الإجابة الصحيحة: ${r.correctAnswer}`}</div>`).join('')}
            </div>
            <div class="lesson-summary-actions">
                <button class="btn btn-secondary" onclick="goBackToLessonsList()"><i class="fas fa-list"></i> قائمة الحصص</button>
                ${hasNextLesson ? '<button class="btn btn-primary" onclick="goToNextLesson()"><i class="fas fa-arrow-left"></i> الذهاب للحصة التالية</button>' : '<button class="btn btn-primary" onclick="goBackToPath()"><i class="fas fa-home"></i> العودة للمسار</button>'}
            </div>
        </div>
    `;
    lessonResult.style.display = 'block';
}

function goToNextLesson() {
    const lessons = lessonsData[currentUnit];
    const currentIndex = lessons.findIndex(l => l.id === currentLesson);
    if (currentIndex < lessons.length - 1) {
        viewLesson(currentUnit, lessons[currentIndex + 1].id);
    }
}

// التنقل بين الشاشات
function switchScreen(screenId) {
    const lessonViewScreen = document.getElementById('lesson-view-screen');
    if (lessonViewScreen && lessonViewScreen.classList.contains('active') && screenId !== 'lesson-view-screen') {
        resetLessonView();
    }
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
    else console.error('❌ شاشة غير موجودة:', screenId);
}

// إعادة تعيين شاشة الحصة (محسّنة)
function resetLessonView() {
    const iframe = document.getElementById('lesson-iframe');
    if (iframe) {
        iframe.src = 'about:blank';
        iframe.style.display = 'block';
    }

    const container = document.querySelector('.lesson-video-container');
    if (container) {
        const msg = container.querySelector('.video-fallback-message');
        if (msg) msg.remove();
    }

    // إعادة تعيين العناوين
    document.getElementById('lesson-title-header').textContent = 'الحصة';
    document.getElementById('lesson-unit-header').textContent = 'الوحدة';

    // إخفاء النتائج والأسئلة
    const resultDiv = document.getElementById('lesson-result');
    const questionsDiv = document.getElementById('lesson-questions');
    const actionsDiv = document.querySelector('.lesson-actions');

    if (resultDiv) resultDiv.style.display = 'none';
    if (questionsDiv) {
        questionsDiv.style.display = 'block';
        questionsDiv.innerHTML = '';
    }
    if (actionsDiv) actionsDiv.style.display = 'block';
}

function goBackToPath() {
    resetLessonView();
    switchScreen('path-screen');
    displayActivePath();
}

function goBackToLessonsList() {
    resetLessonView();
    if (currentUnit !== null) openLessonsList(currentUnit);
    else goBackToPath();
}

function closeUnitModal() {
    document.getElementById('unit-modal').classList.remove('active');
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('unit-modal');
    if (e.target === modal) closeUnitModal();
});

// إعادة محاولة تحميل الفيديو
function retryVideoLoad() {
    console.log('🔄 إعادة محاولة تحميل الفيديو...');
    viewLesson(currentUnit, currentLesson);
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 الصفحة الرئيسية جاهزة');
    await fetchAppDataFromServer();
    displayActivePath();
});

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

// تصدير الدوال
window.openUnitSelector = openUnitSelector;
window.closeUnitModal = closeUnitModal;
window.continueEducationPath = continueEducationPath;
window.startEducationPath = startEducationPath;
window.goBackToPath = goBackToPath;
window.openLessonsList = openLessonsList;
window.viewLesson = viewLesson;
window.submitLesson = submitLesson;
window.goToNextLesson = goToNextLesson;
window.goBackToLessonsList = goBackToLessonsList;