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

function renderStats() {
    const totalCorrect = statsStore.totalCorrect || 0;
    const totalWrong = statsStore.totalWrong || 0;
    const total = totalCorrect + totalWrong || 1;
    const percent = Math.round((totalCorrect / total) * 100);
    const points = statsStore.points || 0;

    const grid = document.querySelector('.general-stats-grid');
    if (grid) {
        const values = grid.querySelectorAll('.general-stat-value');
        if (values.length >= 4) {
            values[0].textContent = totalCorrect;
            values[1].textContent = totalWrong;
            values[2].textContent = percent + '%';
            values[3].textContent = points;
        }
    }

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

function resetAllStats() {
    if (confirm('هل أنت متأكد من تفريغ جميع الإحصاءات؟')) {
        statsStore = {
            totalCorrect: 0,
            totalWrong: 0,
            points: 0,
            byCategory: JSON.parse(JSON.stringify(ALL_CATEGORIES))
        };
        saveStatsToStorage();
        renderStats();
        showMessage('✅ تم تفريغ جميع الإحصاءات بنجاح!');
    }
}

function showMessage(message) {
    let msgContainer = document.getElementById('message-container');
    if (!msgContainer) {
        msgContainer = document.createElement('div');
        msgContainer.id = 'message-container';
        msgContainer.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            right: 20px;
            background: #22C55E;
            color: white;
            padding: 16px;
            border-radius: 8px;
            border: 2px solid #16A34A;
            box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
            font-size: 1rem;
            text-align: right;
            z-index: 9999;
            direction: rtl;
            font-weight: 500;
        `;
        document.body.appendChild(msgContainer);
    }
    msgContainer.textContent = message;
    msgContainer.style.display = 'block';
    setTimeout(() => { msgContainer.style.display = 'none'; }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    renderStats();
});