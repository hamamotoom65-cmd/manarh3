// home.js - منطق الصفحة الرئيسية

// استيراد البيانات من app.js
import { lessonsData, unitNames, saveEducationPath, getSavedEducationPath, startEducationPath } from '../app.js';

// متغيرات الحالة
let currentUnit = null;
let currentLesson = null;

// عرض معلومات المسار التعليمي
function displayActivePath() {
    const savedPath = getSavedEducationPath();
    const newPathOptions = document.getElementById('new-path-options');
    const activePathInfo = document.getElementById('active-path-info');
    const primaryBtn = document.querySelector('.btn-primary');
    
    if (savedPath) {
        document.getElementById('current-unit-name').textContent = savedPath.unitName;
        
        if (savedPath.isNew) {
            // مسار جديد - عرض الخيارات
            newPathOptions.style.display = 'block';
            activePathInfo.style.display = 'none';
            primaryBtn.style.display = 'none';
        } else {
            // مسار موجود - عرض المسار الحالي
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

// متابعة المسار التعليمي الحالي
function continueEducationPath() {
    const savedPath = getSavedEducationPath();
    if (!savedPath) return openUnitSelector();

    startEducationPath();

    // افتح الحصة الحالية مباشرةً (بدلاً من مجرد قائمة الحصص)
    const unitLessons = lessonsData[savedPath.unitId] || [];
    const currentLesson = unitLessons.find(l => l.status === 'current') || unitLessons.find(l => l.status !== 'completed');

    if (currentLesson) {
        viewLesson(savedPath.unitId, currentLesson.id);
        return;
    }

    // إذا لم يتم العثور على حصة حالية، نعرض قائمة الحصص لمراجعتها
    openLessonsList(savedPath.unitId);
}

// فتح نافذة اختيار الوحدة
function openUnitSelector() {
    const unitModal = document.getElementById('unit-modal');
    const unitsList = unitModal.querySelector('.units-list');
    const unitsCountElement = document.getElementById('units-count');
    
    unitsList.innerHTML = '';
    const totalUnits = Object.keys(lessonsData).length;
    unitsCountElement.textContent = totalUnits;
    
    for (const unitId in lessonsData) {
        const unitTitle = unitNames[unitId];
        const lessonsCount = lessonsData[unitId].length;
        const completedStatus = lessonsData[unitId].filter(l => l.status === 'completed').length;
        
        const unitItem = document.createElement('div');
        unitItem.className = 'unit-item';
        unitItem.innerHTML = `
            <div class="unit-item-content">
                <h4>🎓 ${unitTitle}</h4>
                <p class="unit-stats">${lessonsCount} حصص | ✅ ${completedStatus} مكتملة</p>
                <p class="unit-description">ابدأ تعلمك الآن واكتسب مهارات جديدة</p>
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
    currentUnit = parseInt(unitId);

    const lessonsList = document.getElementById('lessons-grid');
    
    document.getElementById('lessons-unit-name').textContent = unitNames[unitId];
    document.getElementById('lessons-count').textContent = lessonsData[unitId].length;
    
    lessonsList.innerHTML = '';
    
    const availableLessons = lessonsData[unitId].filter(l => l.status !== 'locked');

    if (availableLessons.length === 0) {
        lessonsList.innerHTML = `<div class="no-lessons-message">لا توجد حصص متاحة في هذه الوحدة حالياً.</div>`;
        return;
    }

    availableLessons.forEach(lesson => {
        const lessonCard = document.createElement('div');
        lessonCard.className = 'lesson-card';

        let statusText = '';
        if (lesson.status === 'completed') {
            statusText = '✅ مكتملة';
        } else if (lesson.status === 'current') {
            statusText = '📖 حالية';
        }

        lessonCard.innerHTML = `
            <div class="lesson-header">
                <div class="lesson-title">
                    <i class="fas fa-video"></i> ${lesson.title}
                </div>
                <div class="lesson-status status-${lesson.status}">${statusText}</div>
            </div>
            <div class="lesson-meta">
                <span><i class="fab fa-youtube"></i> يوتيوب</span>
            </div>
        `;

        lessonCard.addEventListener('click', () => {
            // افتح نفس شاشة الحصة الموجودة في lessons.html حتى يظهر الفيديو والشكل الموحد
            window.location.href = `../lessons/lessons.html?unit=${unitId}&lesson=${lesson.id}`;
        });

        lessonsList.appendChild(lessonCard);
    });

    switchScreen('lessons-list-screen');
}

// عرض الحصة الفردية (يتم التعامل معها في lessons.html بواسطة query params)
function viewLesson(unitId, lessonId) {
    window.location.href = `../lessons/lessons.html?unit=${unitId}&lesson=${lessonId}`;
}

// تسليم الحصة
function submitLesson() {
    const lesson = lessonsData[currentUnit].find(l => l.id === currentLesson);
    if (!lesson) return;
    
    // جمع الإجابات وحساب النتيجة
    let correctAnswers = 0;
    lesson.questions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="q-${currentUnit}-${currentLesson}-${index}"]:checked`);
        if (selected && parseInt(selected.value) === question.correct) {
            correctAnswers++;
        }
    });
    
    // حفظ الحصة كمكتملة
    const pathData = getSavedEducationPath();
    if (pathData && !pathData.completedLessons.includes(currentLesson)) {
        pathData.completedLessons.push(currentLesson);
        localStorage.setItem('educationPath', JSON.stringify(pathData));
    }
    
    // تحديث حالة الحصة
    lesson.status = 'completed';
    
    // إيجاد الحصة التالية
    const lessons = lessonsData[currentUnit];
    const currentIndex = lessons.findIndex(l => l.id === currentLesson);
    
    // إخفاء الأسئلة وعرض النتيجة
    document.getElementById('lesson-questions').style.display = 'none';
    document.querySelector('.lesson-actions').style.display = 'none';
    
    const resultDiv = document.getElementById('lesson-result');
    resultDiv.style.display = 'block';
    
    document.getElementById('result-title').textContent = '✅ تم تسليم الحصة بنجاح!';
    document.getElementById('result-message').textContent = `أجبت بشكل صحيح على ${correctAnswers} من ${lesson.questions.length} أسئلة`;
    
    if (currentIndex < lessons.length - 1) {
        // توجد حصة تالية
        document.getElementById('next-lesson-button').style.display = 'block';
        document.getElementById('completed-button').style.display = 'none';
    } else {
        // وصلنا لآخر حصة
        document.getElementById('next-lesson-button').style.display = 'none';
        document.getElementById('completed-button').style.display = 'block';
    }
}

// الذهاب للحصة التالية
function goToNextLesson() {
    const lessons = lessonsData[currentUnit];
    const currentIndex = lessons.findIndex(l => l.id === currentLesson);
    
    if (currentIndex < lessons.length - 1) {
        const nextLesson = lessons[currentIndex + 1];
        viewLesson(currentUnit, nextLesson.id);
    }
}

// التنقل بين الشاشات
function switchScreen(screenId) {
    const lessonViewScreen = document.getElementById('lesson-view-screen');
    if (lessonViewScreen && lessonViewScreen.classList.contains('active') && screenId !== 'lesson-view-screen') {
        resetLessonView();
    }

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// إعادة ضبط عرض الحصة (وقف الفيديو وتنظيف العنوان)
function resetLessonView() {
    currentLesson = null;

    const iframe = document.getElementById('lesson-iframe');
    if (iframe) {
        // إزالة الرابط من iframe لإيقاف تشغيل الفيديو فوراً
        iframe.src = 'about:blank';
        iframe.removeAttribute('src');
    }

    const titleHeader = document.getElementById('lesson-title-header');
    if (titleHeader) {
        titleHeader.textContent = 'الحصة';
    }
    const unitHeader = document.getElementById('lesson-unit-header');
    if (unitHeader) {
        unitHeader.textContent = 'الوحدة';
    }
}

// العودة للشاشة الرئيسية
function goBackToPath() {
    resetLessonView();
    switchScreen('path-screen');
    displayActivePath();
}

// العودة لقائمة الحصص
function goBackToLessonsList() {
    resetLessonView();
    openLessonsList(currentUnit);
}

// إغلاق نافذة اختيار الوحدة
function closeUnitModal() {
    document.getElementById('unit-modal').classList.remove('active');
}

// إغلاق النافذة عند النقر خارج المحتوى
window.addEventListener('click', function(e) {
    const modal = document.getElementById('unit-modal');
    if (e.target === modal) {
        closeUnitModal();
    }
});

// تحميل آخر تقدم عند بدء الصفحة
document.addEventListener('DOMContentLoaded', function() {
    displayActivePath();
});

// expose functions for inline handlers (this file is loaded as an ES module)
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
