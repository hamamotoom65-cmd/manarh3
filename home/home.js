// بيانات الحصص (للإستخدام في نافذة اختيار الوحدة فقط)
const lessonsData = {
    1: [
        { id: 1, title: "Introduction to English", status: "completed" },
        { id: 2, title: "English Alphabet & Pronunciation", status: "completed" },
        { id: 3, title: "Basic English Words", status: "current" },
        { id: 4, title: "Numbers in English", status: "locked" },
        { id: 5, title: "Colors in English", status: "locked" },
        { id: 6, title: "Days of the Week", status: "locked" }
    ],
    2: [
        { id: 1, title: "Daily Conversations - Part 1", status: "locked" },
        { id: 2, title: "Asking Questions", status: "locked" },
        { id: 3, title: "Shopping Vocabulary", status: "locked" },
        { id: 4, title: "Restaurant English", status: "locked" },
        { id: 5, title: "Travel Phrases", status: "locked" },
        { id: 6, title: "Phone Conversations", status: "locked" }
    ],
    3: [
        { id: 1, title: "Present Simple Tense", status: "locked" },
        { id: 2, title: "Past Simple Tense", status: "locked" },
        { id: 3, title: "Future Tense", status: "locked" },
        { id: 4, title: "Subject-Verb Agreement", status: "locked" },
        { id: 5, title: "Sentence Structure", status: "locked" },
        { id: 6, title: "Common Mistakes", status: "locked" }
    ]
};

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
            // الانتقال إلى صفحة الحصص مع تمرير معرف الوحدة
            window.location.href = `lessons.html?unit=${unitId}`;
        });
        
        unitsList.appendChild(unitItem);
    }
    
    unitModal.classList.add('active');
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

// تحميل آخر تقدم (اختياري - يمكن عرض رسالة ترحيبية)
document.addEventListener('DOMContentLoaded', function() {
    console.log('مرحباً بك في المسار التعليمي');
});