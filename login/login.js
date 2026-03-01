// =======================
// ملف: login.js (نسخة محسنة) - مع إضافة توجيه أزرار ابدأ الآن
// =======================

// =======================
// عناصر DOM
// =======================
let studentRadio, adminRadio, studentFields, adminFields, loginForm, createAccountForm;
let showCreateAccountBtn, showLoginFormBtn, loginFormElement, createAccountFormElement;

// دالة لتهيئة عناصر DOM بعد تحميل الصفحة
function initializeDOM() {
  console.log('بدء تهيئة عناصر الصفحة...');

  studentRadio = document.getElementById('studentRadio');
  adminRadio = document.getElementById('adminRadio');
  studentFields = document.getElementById('studentFields');
  adminFields = document.getElementById('adminFields');
  loginForm = document.getElementById('loginForm');
  createAccountForm = document.getElementById('createAccountForm');
  showCreateAccountBtn = document.getElementById('showCreateAccount');
  showLoginFormBtn = document.getElementById('showLoginForm');
  loginFormElement = document.getElementById('loginFormElement');
  createAccountFormElement = document.getElementById('createAccountFormElement');

  // التحقق من وجود العناصر الأساسية
  if (!loginFormElement) {
    console.error('❌ عنصر loginFormElement غير موجود!');
    return;
  }
  if (!createAccountFormElement) {
    console.error('❌ عنصر createAccountFormElement غير موجود!');
  }

  console.log('✅ العناصر الأساسية موجودة');

  if (studentRadio && adminRadio) {
    studentRadio.addEventListener('change', updateUserType);
    adminRadio.addEventListener('change', updateUserType);
    console.log('✅ تم إضافة مستمعي أزرار الاختيار');
  }

  if (showCreateAccountBtn && showLoginFormBtn) {
    showCreateAccountBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('التبديل إلى نموذج إنشاء حساب');
      if (createAccountForm) createAccountForm.classList.add('active');
      if (loginForm) loginForm.classList.remove('active');
    });

    showLoginFormBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('التبديل إلى نموذج تسجيل الدخول');
      if (loginForm) loginForm.classList.add('active');
      if (createAccountForm) createAccountForm.classList.remove('active');
    });
    console.log('✅ تم إضافة مستمعي أزرار التبديل');
  }

  if (loginFormElement) {
    loginFormElement.addEventListener('submit', handleLogin);
    console.log('✅ تم إضافة مستمع نموذج تسجيل الدخول');
  } else {
    console.error('❌ لا يمكن إضافة مستمع: loginFormElement = null');
  }

  if (createAccountFormElement) {
    createAccountFormElement.addEventListener('submit', handleCreateAccount);
    console.log('✅ تم إضافة مستمع نموذج إنشاء حساب');
  }

  console.log('✅ تم تهيئة عناصر DOM بنجاح');
}

// =======================
// إدارة قاعدة البيانات المحلية (localStorage)
// =======================

// تهيئة المستخدمين الافتراضيين عند عدم وجودهم أو وجود بيانات تالفة
function initializeUsers() {
  try {
    const usersRaw = localStorage.getItem('users');
    
    // إذا كان localStorage فارغاً أو يحتوي على قيمة غير صالحة، نقوم بإنشاء المستخدمين الافتراضيين
    if (!usersRaw || usersRaw === 'null' || usersRaw === 'undefined') {
      const defaultUsers = {
        'student1': { password: 'password123', grade: '5', role: 'student', ministerialNumber: '' },
        'admin1': { password: 'admin12345', ministerialNumber: '12345678', role: 'admin' }
      };
      localStorage.setItem('users', JSON.stringify(defaultUsers));
      console.log('✅ تم إنشاء المستخدمين الافتراضيين بنجاح');
    } else {
      // محاولة تحليل البيانات للتأكد من صحتها
      JSON.parse(usersRaw);
      console.log('ℹ️ المستخدمون موجودون مسبقاً في localStorage');
    }
  } catch (error) {
    console.error('❌ خطأ في تهيئة المستخدمين:', error);
    // إذا كان هناك خطأ في التحليل (بيانات تالفة)، نقوم بإعادة إنشاء المستخدمين
    const defaultUsers = {
      'student1': { password: 'password123', grade: '5', role: 'student', ministerialNumber: '' },
      'admin1': { password: 'admin12345', ministerialNumber: '12345678', role: 'admin' }
    };
    localStorage.setItem('users', JSON.stringify(defaultUsers));
    console.log('✅ تم إعادة إنشاء المستخدمين بعد حدوث خطأ');
  }
}

// الحصول على جميع المستخدمين
function getUsersDB() {
  try {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {};
  } catch (error) {
    console.error('❌ خطأ في قراءة localStorage:', error);
    return {};
  }
}

// حفظ المستخدمين
function saveUsersDB(users) {
  try {
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  } catch (error) {
    console.error('❌ خطأ في حفظ localStorage:', error);
    return false;
  }
}

// =======================
// تفعيل/تعطيل required حسب نوع المستخدم
// =======================
function toggleRequiredFields() {
  if (!studentRadio) return;
  
  const isStudent = studentRadio.checked;
  
  // حقول الطالب
  const studentUsername = document.getElementById('studentUsername');
  const studentPassword = document.getElementById('studentPassword');
  if (studentUsername) studentUsername.required = isStudent;
  if (studentPassword) studentPassword.required = isStudent;
  
  // حقول الأدمن
  const adminUsername = document.getElementById('adminUsername');
  const adminMinisterialNumber = document.getElementById('adminMinisterialNumber');
  const adminPassword = document.getElementById('adminPassword');
  if (adminUsername) adminUsername.required = !isStudent;
  if (adminMinisterialNumber) adminMinisterialNumber.required = !isStudent;
  if (adminPassword) adminPassword.required = !isStudent;
}

// =======================
// تغيير نوع المستخدم
// =======================
function updateUserType() {
  if (!studentRadio || !adminRadio) return;
  
  if (studentRadio.checked) {
    if (studentFields) studentFields.classList.add('active');
    if (adminFields) adminFields.classList.remove('active');
    const toggle = document.querySelector('.create-account-toggle');
    if (toggle) toggle.style.display = 'flex';
    const formTitle = document.getElementById('formTitle');
    if (formTitle) formTitle.innerText = 'تسجيل دخول الطالب';
  } else {
    if (studentFields) studentFields.classList.remove('active');
    if (adminFields) adminFields.classList.add('active');
    const toggle = document.querySelector('.create-account-toggle');
    if (toggle) toggle.style.display = 'none';
    const formTitle = document.getElementById('formTitle');
    if (formTitle) formTitle.innerText = 'تسجيل دخول الأدمن';
  }
  // تحديث خاصية required
  toggleRequiredFields();
}

// دالة مساعدة لإظهار الخطأ
function showError(inputId, messageId, customMessage = null) {
  const input = document.getElementById(inputId);
  const message = document.getElementById(messageId);
  if (message) {
    message.textContent = customMessage || message.textContent;
    message.style.display = 'block';
  }
  if (input) input.classList.add('error');
}

function clearErrors() {
  document.querySelectorAll('.error-message').forEach(e => e.style.display = 'none');
  document.querySelectorAll('.form-input').forEach(i => i.classList.remove('error'));
}

// =======================
// معالج تسجيل الدخول
// =======================
function handleLogin(e) {
  e.preventDefault();
  console.log('محاولة تسجيل الدخول...');
  
  clearErrors();

  let username, password, role, ministerialNumber;
  let isValid = true;

  try {
    if (studentRadio && studentRadio.checked) {
      role = 'student';
      const usernameInput = document.getElementById('studentUsername');
      const passwordInput = document.getElementById('studentPassword');
      
      username = usernameInput ? usernameInput.value.trim() : '';
      password = passwordInput ? passwordInput.value : '';

      console.log('محاولة طالب:', { username, passwordLength: password.length });

      if (!username) {
        showError('studentUsername', 'studentUsernameError', '❌ يرجى إدخال اسم المستخدم');
        isValid = false;
      }
      if (password.length < 8) {
        showError('studentPassword', 'studentPasswordError', '❌ كلمة السر يجب أن تكون 8 خانات على الأقل');
        isValid = false;
      }
    } else {
      role = 'admin';
      const usernameInput = document.getElementById('adminUsername');
      const ministerialInput = document.getElementById('adminMinisterialNumber');
      const passwordInput = document.getElementById('adminPassword');
      
      username = usernameInput ? usernameInput.value.trim() : '';
      ministerialNumber = ministerialInput ? ministerialInput.value.trim() : '';
      password = passwordInput ? passwordInput.value : '';

      console.log('محاولة أدمن:', { username, ministerialNumber, passwordLength: password.length });

      if (!username) {
        showError('adminUsername', 'adminUsernameError', '❌ يرجى إدخال اسم المستخدم');
        isValid = false;
      }
      if (!ministerialNumber || ministerialNumber.length < 8) {
        showError('adminMinisterialNumber', 'adminMinisterialNumberError', '❌ الرقم الوزاري يجب أن يكون 8 خانات');
        isValid = false;
      }
      if (password.length < 8) {
        showError('adminPassword', 'adminPasswordError', '❌ كلمة السر يجب أن تكون 8 خانات على الأقل');
        isValid = false;
      }
    }

    if (!isValid) {
      console.log('❌ فشل التحقق من صحة المدخلات');
      return;
    }

    console.log('✅ تم التحقق من صحة المدخلات، جاري التحقق من بيانات المستخدم...');

    const users = getUsersDB();
    console.log('المستخدمون الموجودون:', Object.keys(users));
    
    const user = users[username];

    if (!user) {
      console.log('❌ المستخدم غير موجود:', username);
      if (studentRadio && studentRadio.checked) {
        showError('studentUsername', 'studentUsernameError', '❌ اسم المستخدم غير موجود');
      } else {
        showError('adminUsername', 'adminUsernameError', '❌ اسم المستخدم غير موجود');
      }
      return;
    }

    if (user.password !== password) {
      console.log('❌ كلمة السر غير صحيحة للمستخدم:', username);
      if (studentRadio && studentRadio.checked) {
        showError('studentPassword', 'studentPasswordError', '❌ كلمة السر غير صحيحة');
      } else {
        showError('adminPassword', 'adminPasswordError', '❌ كلمة السر غير صحيحة');
      }
      return;
    }

    if (user.role !== role) {
      console.log('❌ نوع المستخدم غير مطابق:', { expected: role, found: user.role });
      alert('❌ نوع الحساب غير مطابق. الرجاء اختيار نوع المستخدم الصحيح (طالب / أدمن)');
      return;
    }

    // تحقق إضافي للأدمن: الرقم الوزاري
    if (role === 'admin' && user.ministerialNumber !== ministerialNumber) {
      console.log('❌ الرقم الوزاري غير صحيح للأدمن:', username);
      showError('adminMinisterialNumber', 'adminMinisterialNumberError', '❌ الرقم الوزاري غير صحيح');
      return;
    }

    console.log('✅ تسجيل الدخول ناجح للمستخدم:', username);

    // تخزين بيانات الجلسة
    sessionStorage.setItem('currentUser', JSON.stringify({ username, role }));

    // رسالة نجاح
    alert('✅ تم تسجيل الدخول بنجاح!');

    // تحويل حسب الدور
    setTimeout(() => {
      if (role === 'student') {
        console.log('🔀 توجيه إلى لوحة تحكم الطالب');
        // مسار نسبي الصحيح بالنسبة لملف login/index.html
        window.location.href = '../home/home.html';
      } else {
        console.log('🔀 توجيه إلى لوحة تحكم الأدمن');
        // يمكنك تغيير الرابط إلى لوحة تحكم الأدمن إذا كانت جاهزة
        window.location.href = '../home/home.html';
      }
    }, 500);
  } catch (error) {
    console.error('❌ خطأ غير متوقع أثناء تسجيل الدخول:', error);
    alert('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.');
  }
}

// =======================
// معالج إنشاء حساب جديد
// =======================
function handleCreateAccount(e) {
  e.preventDefault();
  console.log('محاولة إنشاء حساب جديد...');
  clearErrors();

  try {
    const gradeSelect = document.getElementById('studentGrade');
    const usernameInput = document.getElementById('newStudentUsername');
    const passwordInput = document.getElementById('newStudentPassword');
    const confirmInput = document.getElementById('confirmPassword');

    const grade = gradeSelect ? gradeSelect.value : '';
    const username = usernameInput ? usernameInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value : '';
    const confirmPassword = confirmInput ? confirmInput.value : '';

    let isValid = true;

    if (!grade) {
      showError('studentGrade', 'studentGradeError', '❌ يرجى اختيار الصف الدراسي');
      isValid = false;
    }
    if (!username) {
      showError('newStudentUsername', 'newStudentUsernameError', '❌ يرجى إدخال اسم مستخدم');
      isValid = false;
    }
    if (password.length < 8 || password.length > 12) {
      showError('newStudentPassword', 'newStudentPasswordError', '❌ كلمة السر يجب أن تكون بين 8 و 12 خانة');
      isValid = false;
    }
    if (password !== confirmPassword) {
      showError('confirmPassword', 'confirmPasswordError', '❌ كلمة السر غير متطابقة');
      isValid = false;
    }

    if (!isValid) {
      console.log('❌ فشل التحقق من صحة المدخلات لإنشاء الحساب');
      return;
    }

    const users = getUsersDB();
    if (users[username]) {
      console.log('❌ اسم المستخدم موجود بالفعل:', username);
      showError('newStudentUsername', 'newStudentUsernameError', '❌ اسم المستخدم موجود بالفعل. اختر اسماً آخر');
      return;
    }

    console.log('✅ إنشاء حساب جديد للمستخدم:', username);
    users[username] = { password, grade, role: 'student', ministerialNumber: '' };
    
    if (saveUsersDB(users)) {
      console.log('✅ تم حفظ المستخدم الجديد بنجاح');
      alert('✅ تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.');

      // العودة لنموذج الدخول
      if (createAccountForm && loginForm) {
        createAccountForm.classList.remove('active');
        loginForm.classList.add('active');
      }

      // تعبئة اسم المستخدم في نموذج الدخول لتسهيل الأمر
      const loginUserInput = document.getElementById('studentUsername');
      if (loginUserInput) loginUserInput.value = username;
      
      // إعادة تعيين الحقول
      if (gradeSelect) gradeSelect.value = '';
      if (usernameInput) usernameInput.value = '';
      if (passwordInput) passwordInput.value = '';
      if (confirmInput) confirmInput.value = '';
    } else {
      alert('❌ حدث خطأ أثناء حفظ الحساب. يرجى المحاولة مرة أخرى.');
    }
  } catch (error) {
    console.error('❌ خطأ غير متوقع أثناء إنشاء الحساب:', error);
    alert('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.');
  }
}

// =======================
// التشغيل عند تحميل الصفحة
// =======================
window.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 جاري تحميل نظام تسجيل الدخول...');
  initializeUsers();   // تهيئة المستخدمين الافتراضيين (مع التأكد من سلامتهم)
  initializeDOM();     // تهيئة عناصر الصفحة وإضافة المستمعات
  updateUserType();    // ضبط حالة حقول المستخدم بناءً على النوع المختار
  
  // ===== إضافة توجيه أزرار "ابدأ الآن" في الصفحة الرئيسية =====
  // التحقق من أن الصفحة الحالية لا تحتوي على نموذج تسجيل الدخول (أي أنها الصفحة الرئيسية)
  if (!document.getElementById('loginForm')) {
    // البحث عن جميع الروابط التي تحتوي على "login" في href
    const loginLinks = document.querySelectorAll(
      'a[href="login.html"], a[href="/login/index.html"], a[href="/login/"], a[href="login/index.html"], a[href="./login/index.html"], a[href*="login"]'
    );
    loginLinks.forEach(link => {
      link.href = '../register/register.html'; // مسار نسبي من مجلد login
    });
    console.log('✅ تم تحديث روابط ابدأ الآن إلى ../register/register.html');
  }
  
  console.log('✅ نظام تسجيل الدخول جاهز للعمل');
});