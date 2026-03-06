// exams.js - منطق صفحة الامتحانات

// استيراد البيانات والقيم المشتركة من app.js
import { examsData, STATS_KEY, ALL_CATEGORIES } from '../app.js';

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

let currentExamId = null;

document.addEventListener('DOMContentLoaded', function() {
    populateExams();

    // التحقق من وجود معامل exam في URL (قادم من lessons)
    const urlParams = new URLSearchParams(window.location.search);
    const examParam = urlParams.get('exam');
    if (examParam) {
        const exam = examsData.find(ex => ex.id === parseInt(examParam));
        if (exam && exam.status !== 'locked') {
            startExam(exam);
        }
    }
});

function populateExams() {
    const examsContainer = document.querySelector('.exams-container');
    if (!examsContainer) return;

    let examsHTML = '';
    const availableExams = examsData.filter(exam => exam.status !== 'locked');

    availableExams.forEach(exam => {
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
                        متاح
                    </div>
                </div>
                <div class="exam-description">
                    ${exam.description}
                </div>
                <button class="exam-btn" data-exam-id="${exam.id}">
                    <i class="fas fa-play-circle"></i>
                    ابدأ الامتحان
                </button>
            </div>
        `;
    });

    examsContainer.innerHTML = examsHTML;

    // إضافة event listeners للأزرار
    document.querySelectorAll('.exam-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (this.disabled) return;
            const examId = parseInt(this.dataset.examId);
            const exam = examsData.find(ex => ex.id === examId);
            if (exam) startExam(exam);
        });
    });
}

function startExam(exam) {
    currentExamId = exam.id;
    document.getElementById('exam-title-header').textContent = exam.title;

    const questionsContainer = document.getElementById('exam-questions');
    questionsContainer.innerHTML = '';

    exam.questions.forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.id = `exam-question-${exam.id}-${index}`;

        let optionsHTML = '';
        question.options.forEach((option, optIndex) => {
            optionsHTML += `
                <label class="option-label">
                    <input type="radio" name="exam-${exam.id}-question-${index}" value="${optIndex}">
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

    // التبديل إلى شاشة الامتحان
    document.getElementById('exams-screen').classList.remove('active');
    document.getElementById('exam-view-screen').classList.add('active');
}

function goBackToExams() {
    document.getElementById('exam-view-screen').classList.remove('active');
    document.getElementById('exams-screen').classList.add('active');
    // إزالة أي ملخص قديم
    const summary = document.getElementById('exam-summary');
    if (summary) summary.remove();
}

function submitExam() {
    const exam = examsData.find(ex => ex.id === currentExamId);
    if (!exam) return;

    const questions = document.querySelectorAll('#exam-questions .question-card');
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
        const question = exam.questions[idx];
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

    const sessionPoints = updateStatsFromResults(results, exam.questions);
    displayExamSummary(correct, exam.questions.length, results, sessionPoints);
}

function displayExamSummary(correct, totalQuestions, results, sessionPoints) {
    const percentage = (correct / totalQuestions) * 100;
    const summaryContainer = document.createElement('div');
    summaryContainer.id = 'exam-summary';
    summaryContainer.className = 'exam-summary';

    summaryContainer.innerHTML = `
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
        <div class="exam-summary-actions"></div>
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

    // زر الانتقال للوحدة التالية (إذا وُجد)
    const nextUnitId = currentExamId + 1;
    const actionsDiv = summaryContainer.querySelector('.exam-summary-actions');
    if (nextUnitId <= 3) { // لدينا 3 وحدات
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-primary';
        nextBtn.textContent = 'الانتقال للوحدة التالية';
        nextBtn.addEventListener('click', () => {
            window.location.href = `lessons.html?unit=${nextUnitId}`;
        });
        actionsDiv.appendChild(nextBtn);
    } else {
        const doneMsg = document.createElement('div');
        doneMsg.className = 'results-message';
        doneMsg.textContent = '🎉 لقد أكملت كل الوحدات المتاحة.';
        actionsDiv.appendChild(doneMsg);
    }

    const examContent = document.getElementById('exam-questions').parentElement;
    examContent.appendChild(summaryContainer);
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
window.goBackToExams = goBackToExams;
window.submitExam = submitExam;
window.startExam = startExam;

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