// register.js - إدارة تسجيل الدخول وإنشاء الحساب باستخدام localStorage

// مفتاح التخزين للمستخدمين
const STORAGE_KEY = 'manara_users';

// ===== دوال مساعدة للتخزين =====
function getUsers() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error('خطأ في قراءة البيانات:', e);
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

// التحقق من وجود اسم مستخدم
function isUsernameTaken(username) {
    const users = getUsers();
    return users.some(user => user.username === username);
}

// حفظ المستخدم الحالي في sessionStorage (بدون كلمة المرور)
function setCurrentUser(user) {
    const userToStore = { ...user };
    delete userToStore.password;
    sessionStorage.setItem('currentUser', JSON.stringify(userToStore));
}

// تهيئة بيانات تجريبية (تضمن وجود المستخدمين)
function initDemoUsers() {
    const users = getUsers();
    const demoUsers = [
        { username: 'student1', password: 'password123', role: 'student', grade: '10' },
        { username: 'admin1', password: 'admin12345', role: 'admin', ministerialNumber: '12345678' }
    ];

    let updated = false;
    demoUsers.forEach(demo => {
        if (!users.some(u => u.username === demo.username)) {
            users.push(demo);
            updated = true;
        }
    });

    if (updated) {
        saveUsers(users);
        console.log('تمت إضافة المستخدمين التجريبيين.');
    }
}

// ===== دوال التبديل بين النماذج =====
function switchToLogin() {
    const loginForm = document.getElementById('loginForm');
    const createForm = document.getElementById('createAccountForm');
    if (loginForm) loginForm.classList.add('active');
    if (createForm) createForm.classList.remove('active');

    // إعادة تعيين حقول إنشاء الحساب
    const createFormElement = document.getElementById('createAccountFormElement');
    if (createFormElement) createFormElement.reset();
    hideAllErrors();
}

function switchToRegister() {
    const loginForm = document.getElementById('loginForm');
    const createForm = document.getElementById('createAccountForm');
    if (loginForm) loginForm.classList.remove('active');
    if (createForm) createForm.classList.add('active');

    // إعادة تعيين حقول تسجيل الدخول
    const loginFormElement = document.getElementById('loginFormElement');
    if (loginFormElement) loginFormElement.reset();
    hideAllErrors();
}

// إظهار/إخفاء حقول الطالب والأدمن حسب الراديو
function toggleUserFields() {
    const studentRadio = document.getElementById('studentRadio');
    if (!studentRadio) return;

    const isStudent = studentRadio.checked;
    const studentFields = document.getElementById('studentFields');
    const adminFields = document.getElementById('adminFields');
    const formTitle = document.getElementById('formTitle');

    if (studentFields && adminFields) {
        if (isStudent) {
            studentFields.classList.add('active');
            adminFields.classList.remove('active');
        } else {
            studentFields.classList.remove('active');
            adminFields.classList.add('active');
        }
    }

    if (formTitle) {
        formTitle.textContent = isStudent ? 'تسجيل دخول الطالب' : 'تسجيل دخول الأدمن';
    }
    hideAllErrors();
}

// ===== دوال التحقق وعرض الأخطاء =====
function hideAllErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
}

function showError(id, message) {
    const errorEl = document.getElementById(id);
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }
}

// دالة مساعدة لإظهار رسائل (يمكن استبدالها بـ Toast لاحقاً)
function showNotification(message, isSuccess = true) {
    alert(message); // حالياً نستخدم alert
}

// ===== معالج تسجيل الدخول =====
function handleLogin(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    console.log('محاولة تسجيل الدخول...');

    try {
        hideAllErrors();

        const studentRadio = document.getElementById('studentRadio');
        if (!studentRadio) {
            console.error('عنصر studentRadio غير موجود');
            return;
        }

        const isStudent = studentRadio.checked;
        let username, password, ministerialNumber = '';

        if (isStudent) {
            const usernameField = document.getElementById('studentUsername');
            const passwordField = document.getElementById('studentPassword');
            if (!usernameField || !passwordField) {
                console.error('حقول الطالب غير موجودة');
                return;
            }
            username = usernameField.value.trim();
            password = passwordField.value;
        } else {
            const usernameField = document.getElementById('adminUsername');
            const ministerialField = document.getElementById('adminMinisterialNumber');
            const passwordField = document.getElementById('adminPassword');
            if (!usernameField || !ministerialField || !passwordField) {
                console.error('حقول الأدمن غير موجودة');
                return;
            }
            username = usernameField.value.trim();
            ministerialNumber = ministerialField.value.trim();
            password = passwordField.value;
        }

        // التحقق من الحقول المطلوبة
        if (!username) {
            showError(isStudent ? 'studentUsernameError' : 'adminUsernameError', 'يرجى إدخال اسم المستخدم');
            return;
        }
        if (!password) {
            showError(isStudent ? 'studentPasswordError' : 'adminPasswordError', 'يرجى إدخال كلمة السر');
            return;
        }
        if (!isStudent && !ministerialNumber) {
            showError('adminMinisterialNumberError', 'يرجى إدخال الرقم الوزاري');
            return;
        }
        if (password.length < 8) {
            showError(isStudent ? 'studentPasswordError' : 'adminPasswordError', 'كلمة السر يجب أن تكون 8 خانات على الأقل');
            return;
        }
        if (!isStudent && ministerialNumber.length !== 8) {
            showError('adminMinisterialNumberError', 'الرقم الوزاري يجب أن يكون 8 خانات');
            return;
        }

        const users = getUsers();
        console.log('المستخدمين الموجودين:', users);

        // البحث عن مستخدم يطابق اسم المستخدم وكلمة السر
        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            showNotification('اسم المستخدم أو كلمة السر غير صحيحة', false);
            return;
        }

        // التحقق من الدور المطابق
        if (isStudent && user.role !== 'student') {
            showNotification('هذا المستخدم ليس طالباً', false);
            return;
        }
        if (!isStudent && user.role !== 'admin') {
            showNotification('هذا المستخدم ليس أدمن', false);
            return;
        }
        // التحقق من الرقم الوزاري للأدمن
        if (!isStudent && user.ministerialNumber !== ministerialNumber) {
            showNotification('الرقم الوزاري غير صحيح', false);
            return;
        }

        // حفظ المستخدم الحالي والتوجيه إلى الصفحة الرئيسية
        setCurrentUser(user);
        console.log('تم تسجيل الدخول بنجاح، جاري التوجيه...');

        // محاولة التوجيه - تأكد من صحة المسار
        window.location.href = '../home/home.html'; // عدل المسار حسب هيكل مجلداتك
    } catch (error) {
        console.error('حدث خطأ في handleLogin:', error);
        alert('حدث خطأ غير متوقع. يرجى التحقق من وحدة التحكم.');
    }
}

// ===== معالج إنشاء حساب جديد =====
function handleRegister(event) {
    event.preventDefault();
    console.log('محاولة إنشاء حساب...');

    try {
        hideAllErrors();

        const gradeField = document.getElementById('studentGrade');
        const usernameField = document.getElementById('newStudentUsername');
        const passwordField = document.getElementById('newStudentPassword');
        const confirmField = document.getElementById('confirmPassword');

        if (!gradeField || !usernameField || !passwordField || !confirmField) {
            console.error('بعض حقول إنشاء الحساب غير موجودة');
            return;
        }

        const grade = gradeField.value;
        const username = usernameField.value.trim();
        const password = passwordField.value;
        const confirm = confirmField.value;

        // التحقق من الصف
        if (!grade) {
            showError('studentGradeError', 'يرجى اختيار الصف الدراسي');
            return;
        }

        // التحقق من اسم المستخدم
        if (!username) {
            showError('newStudentUsernameError', 'يرجى إدخال اسم مستخدم');
            return;
        }
        if (isUsernameTaken(username)) {
            showError('newStudentUsernameError', 'اسم المستخدم موجود بالفعل');
            return;
        }

        // التحقق من كلمة السر
        if (password.length < 8 || password.length > 12) {
            showError('newStudentPasswordError', 'كلمة السر يجب أن تكون بين 8 و 12 خانة');
            return;
        }

        // التحقق من تطابق كلمة السر
        if (password !== confirm) {
            showError('confirmPasswordError', 'كلمة السر غير متطابقة');
            return;
        }

        // إضافة المستخدم الجديد
        const users = getUsers();
        const newUser = {
            username: username,
            password: password,
            role: 'student',
            grade: grade
        };
        users.push(newUser);
        saveUsers(users);

        showNotification('تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.', true);

        // العودة إلى نموذج تسجيل الدخول
        switchToLogin();

        // تعبئة اسم المستخدم الجديد تلقائياً في حقل اسم المستخدم لتسهيل الدخول
        const studentUsernameField = document.getElementById('studentUsername');
        if (studentUsernameField) {
            studentUsernameField.value = username;
        }
        const studentRadio = document.getElementById('studentRadio');
        if (studentRadio) {
            studentRadio.checked = true;
            toggleUserFields(); // تحديث الحقول
        }
    } catch (error) {
        console.error('حدث خطأ في handleRegister:', error);
        alert('حدث خطأ غير متوقع أثناء إنشاء الحساب.');
    }
}

// ===== التهيئة عند تحميل الصفحة =====
function initApp() {
    console.log('جاري تهيئة صفحة تسجيل الدخول...');
    initDemoUsers();

    // الحصول على العناصر
    const studentRadio = document.getElementById('studentRadio');
    const adminRadio = document.getElementById('adminRadio');
    const showCreateAccount = document.getElementById('showCreateAccount');
    const showLoginForm = document.getElementById('showLoginForm');
    const loginForm = document.getElementById('loginFormElement');
    const registerForm = document.getElementById('createAccountFormElement');

    // التحقق من وجود العناصر الأساسية
    if (!loginForm) {
        console.error('عنصر loginFormElement غير موجود!');
        return;
    }
    if (!registerForm) {
        console.error('عنصر createAccountFormElement غير موجود!');
        return;
    }

    // إضافة مستمعي الأحداث
    if (studentRadio) studentRadio.addEventListener('change', toggleUserFields);
    if (adminRadio) adminRadio.addEventListener('change', toggleUserFields);
    if (showCreateAccount) showCreateAccount.addEventListener('click', switchToRegister);
    if (showLoginForm) showLoginForm.addEventListener('click', switchToLogin);

    // ربط أحداث تقديم النماذج
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);

    // تعيين الحالة الأولية
    toggleUserFields();
    hideAllErrors();

    console.log('تمت التهيئة بنجاح.');
}

// تشغيل التهيئة بعد تحميل الصفحة بالكامل
window.addEventListener('DOMContentLoaded', initApp);