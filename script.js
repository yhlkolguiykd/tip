// ==========================================
// ۱. دیتابیس ۵۰ درس استاندارد تایپ ده انگشتی
// ==========================================
const lessonsData = [
    { id: 1, title: "درس ۱: کلیدهای ت و ن", text: "تتت ننن تنت نتن تتن نتت تتا ننت", fingerHint: "انگشت اشاره راست (ت) | انگشت اشاره چپ (ن)" },
    { id: 2, title: "درس ۲: کلیدهای م و ک", text: "ممم ککک مکک ک مم تکم نمک کمت مکن", fingerHint: "انگشت وسط راست (م) | انگشت وسط چپ (ک)" },
    { id: 3, title: "درس ۳: کلیدهای ب و ی", text: "ببب ییی بیی یبی ببت نین مبی کیب", fingerHint: "انگشت حلقه راست (ب) | انگشت حلقه چپ (ی)" },
    { id: 4, title: "درس ۴: کلیدهای ش و س", text: "ششش سسس شسش سشش شبس یشس شمک سنت", fingerHint: "انگشت کوچک راست (ش) | انگشت کوچک چپ (س)" },
    { id: 5, title: "درس ۵: ترکیبی ردیف خانه اصلی", text: "تسنب نمکک بستم کمین سیم شیک منبت", fingerHint: "تمرکز روی تمام انگشتان ردیف خانه" },
    { id: 6, title: "درس ۶: کلیدهای ا و ل", text: "ااا للل الم لاما اسم رسم کلام سلام", fingerHint: "حرکت کششی انگشت اشاره چپ (ا) و راست (ل)" },
    { id: 7, title: "درس ۷: کلید گ", text: "گگگ سگ سگک گلم نمگ برگ گندم سنگ", fingerHint: "حرکت کششی انگشت کوچک چپ (گ)" },
    { id: 8, title: "درس ۸: کلید Space (فاصله)", text: "ت ن م ک ب ی ش س ا ل گ سلام من", fingerHint: "فشار دادن کلید فاصله با انگشت شست راست یا چپ" },
    { id: 9, title: "درس ۹: واژه‌سازی ردیف خانه", text: "سلام من به شما کلام سنگین بوی گل", fingerHint: "ترکیب کامل کلیدهای ردیف وسط" },
    { id: 10, title: "درس ۱۰: آزمون ردیف خانه", text: "سنت لک لک بت کلم ماسک سگک نسیم", fingerHint: "آزمون تسلط کامل بر ردیف وسط" },
    { id: 11, title: "درس ۱۱: کلیدهای ف و ق", text: "ففف ققق فقف فلق قفل کیف مشق", fingerHint: "انتقال انگشت اشاره به بالا: ف (چپ)، ق (راست)" },
    { id: 12, title: "درس ۱۲: کلیدهای غ و ع", text: "غغغ ععع غعغ مرغ مرغک عقل علی عاقل", fingerHint: "انگشت اشاره و وسط به سمت بالا" },
    { id: 13, title: "درس ۱۳: کلیدهای ه و خ", text: "ههه خخخ هخه ماه خاه خانه شاخه نهان", fingerHint: "انگشت وسط و حلقه به سمت بالا" },
    { id: 14, title: "درس ۱۴: کلیدهای ث و ح", text: "ثثث ححح ثحث اثر حدیث مثلث لوح ثبات", fingerHint: "انگشت حلقه و کوچک به سمت بالا" },
    { id: 15, title: "درس ۱۵: کلیدهای ص و ج", text: "صصص ججج صجص صندوق کاج صبح گنج", fingerHint: "حرکت انگشتان به سمت کلیدهای بالایی" },
    { id: 16, title: "درس ۱۶: کلیدهای ض و چ", text: "ضضض چچچ ضچض رضا چوب حوض چکش چمن", fingerHint: "انتقال انگشت کوچک چپ (ض) و راست (چ)" },
    { id: 17, title: "درس ۱۷: کلمات ترکیبی بالا و وسط", text: "صندوقچه قفل خانه مرغابی سخاوت", fingerHint: "ترکیب ردیف بالا و ردیف خانه" },
    { id: 18, title: "درس ۱۸: جمله‌سازی کوتاه ۱", text: "علی به خانه رفت مرغابی در حوض است", fingerHint: "تمرکز بر روان تایپ کردن" },
    { id: 19, title: "درس ۱۹: جمله‌سازی کوتاه ۲", text: "رضا قفل صندوق را باز کرد", fingerHint: "دقت بالای ۹۵ درصد" },
    { id: 20, title: "درس ۲۰: آزمون ردیف بالا", text: "صبح زود خورشید طلوع کرد و بیدار شدیم", fingerHint: "آزمون تسلط بر ردیف بالا و وسط" },
    { id: 21, title: "درس ۲۱: کلیدهای ر و ز", text: "ررر ززز رزرز روز روزه رز راز زاری", fingerHint: "انتقال انگشت اشاره به پایین: ر (چپ)، ز (راست)" },
    { id: 22, title: "درس ۲۲: کلیدهای ذ و د", text: "ذذذ ددد ذدذ ذرذ ذرّه درخت ذره بین", fingerHint: "انتقال انگشت به پایین و چپ/راست" },
    { id: 23, title: "درس ۲۳: کلیدهای ط و ظ", text: "ططط ظظظ طظط طوطی خط حافظ ظفر حیاط", fingerHint: "انگشت حلقه به سمت پایین" },
    { id: 24, title: "درس ۲۴: کلیدهای پ و و", text: "پپپ وو و پوا پروانه ورزشی توپ پرواز", fingerHint: "انگشت کوچک به سمت پایین" },
    { id: 25, title: "درس ۲۵: ترکیب تمام حروف الفبا", text: "پروانه در حیاط پرواز کرد و روی گل نشست", fingerHint: "استفاده از تمام ردیف‌های کیبورد" },
    { id: 26, title: "درس ۲۶: کلمات سخت ردیف پایین", text: "ضبط ظرف طوطی ورزش پرواز درخت", fingerHint: "تمرکز روی حافظه عضلانی" },
    { id: 27, title: "درس ۲۷: جملات متداول ۱", text: "دانش آموزان در کلاس درس حاضر شدند", fingerHint: "تایپ بدون نگاه به کیبورد" },
    { id: 28, title: "درس ۲۸: جملات متداول ۲", text: "ورزش کردن باعث سلامتی روح و جسم است", fingerHint: "حفظ ریتم منظم تایپ" },
    { id: 29, title: "درس ۲۹: تمرین سرعت ردیف پایین", text: "ظفر با دقت به خطوط دفتر نگاه کرد", fingerHint: "افزایش سرعت تایپ" },
    { id: 30, title: "درس ۳۰: آزمون جامع کیبورد", text: "پژوهشگران در آزمایشگاه موفق به کشف جدیدی شدند", fingerHint: "ارزیابی کلی تسلط بر حروف" },
    { id: 31, title: "درس ۳۱: کلمات پرتکرار ۱", text: "این است که برای با از به در کجاست", fingerHint: "تایپ سریع کلمات کوتاه پرکاربرد" },
    { id: 32, title: "درس ۳۲: کلمات پرتکرار ۲", text: "آنها همه چیز را درباره برنامه‌نویسی می‌دانند", fingerHint: "افزایش سرعت در کلمات بلند" },
    { id: 33, title: "درس ۳۳: متن متوالی ۱", text: "تایپ ده انگشتی مهارتی است که با تمرین به دست می‌آید", fingerHint: "نگاه فقط به صفحه نمایش" },
    { id: 34, title: "درس ۳۴: متن متوالی ۲", text: "هر روز چند دقیقه تمرین باعث پیشرفت چشمگیر می‌شود", fingerHint: "کنترل سرعت و دقت" },
    { id: 35, title: "درس ۳۵: تمرین دقت ۱", text: "سحرگاهان نسیم خنکی از سمت کوهستان می‌وزید", fingerHint: "دقت ۱۰۰ درصدی مد نظر است" },
    { id: 36, title: "درس ۳۶: تمرین دقت ۲", text: "موفقیت نتیجه تلاش‌های کوچک و روزمره است", fingerHint: "عدم استفاده از کلید Backspace" },
    { id: 37, title: "درس ۳۷: افزایش سرعت ۱", text: "سریع تایپ کردن نیازمند تمرکز و آرامش است", fingerHint: "سرعت هدف: بالای ۲۵ کلمه در دقیقه" },
    { id: 38, title: "درس ۳۸: افزایش سرعت ۲", text: "برنامه‌نویسان با تایپ سریع در وقت خود صرفه‌جویی می‌کنند", fingerHint: "ریتم یکنواخت ضربه زدن" },
    { id: 39, title: "درس ۳۹: ضرب‌المثل‌های فارسی ۱", text: "کار نیکو کردن از پر کردن است", fingerHint: "تایپ متون آشنا" },
    { id: 40, title: "درس ۴۰: ضرب‌المثل‌های فارسی ۲", text: "جوجه را آخر پاییز می‌شمارند", fingerHint: "رعایت فاصله‌ها" },
    { id: 41, title: "درس ۴۱: متون ادبی کوتاه", text: "بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند", fingerHint: "تایپ شعر و متون موزون" },
    { id: 42, title: "درس ۴۲: متون علمی کوتاه", text: "هوش مصنوعی دنیا را با سرعت در حال تغییر دادن است", fingerHint: "تایپ واژگان جدید" },
    { id: 43, title: "درس ۴۳: فناوری و کامپیوتر", text: "اینترنت ارتباطات بین مردم جهان را بسیار آسان کرده است", fingerHint: "تسلط بر تایپ اصطلاحات" },
    { id: 44, title: "درس ۴۴: تمرین استقامت ۱", text: "برای رسیدن به هدف باید برنامه‌ریزی داشت و طبق آن حرکت کرد", fingerHint: "تایپ بدون توقف" },
    { id: 45, title: "درس ۴۵: تمرین استقامت ۲", text: "یادگیری مهارت‌های جدید به ما کمک می‌کند در زندگی موفق‌تر باشیم", fingerHint: "ارزیابی ثبات سرعت" },
    { id: 46, title: "درس ۴۶: متون طولانی ۱", text: "زندگی مانند دوچرخه‌سواری است برای حفظ تعادل باید به حرکت ادامه داد", fingerHint: "تایپ یکنواخت و بدون استرس" },
    { id: 47, title: "درس ۴۷: متون طولانی ۲", text: "بهترین زمان برای کاشتن یک درخت بیست سال پیش بود دومین زمان مناسب همین الان است", fingerHint: "افزایش تمرکز" },
    { id: 48, title: "درس ۴۸: آزمون سرعت پیشرفته", text: "تایپ سریع و دقیق به شما اجازه می‌دهد افکار خود را بدون وقفه ثبت کنید", fingerHint: "هدف: سرعت ۳۰+ کلمه در دقیقه" },
    { id: 49, title: "درس ۴۹: آزمون دقت پیشرفته", text: "با تمرین مداوم و روزانه جای تمام حروف بدون نگاه کردن ملکه ذهن می‌شود", fingerHint: "هدف: دقت ۹۸٪+" },
    { id: 50, title: "درس ۵۰: غول مرحله آخر (فارغ‌التحصیلی)", text: "تبریک می‌گویم شما اکنون به یک تایپیست حرفه‌ای ده انگشتی تبدیل شده‌اید و بر کیبورد تسلط کامل دارید", fingerHint: "تمرین نهایی دوره" }
];

const charToFingerMap = {
    'ض': 'finger-l-pinky', 'ص': 'finger-l-ring', 'ث': 'finger-l-middle', 'ق': 'finger-l-index', 'ف': 'finger-l-index',
    'غ': 'finger-r-index', 'ع': 'finger-r-index', 'ه': 'finger-r-middle', 'خ': 'finger-r-ring', 'ح': 'finger-r-pinky', 'ج': 'finger-r-pinky', 'چ': 'finger-r-pinky',
    'ش': 'finger-l-pinky', 'س': 'finger-l-ring', 'ی': 'finger-l-middle', 'ب': 'finger-l-index', 'ل': 'finger-l-index',
    'ا': 'finger-r-index', 'ت': 'finger-r-index', 'ن': 'finger-r-middle', 'م': 'finger-r-ring', 'ک': 'finger-r-pinky', 'گ': 'finger-r-pinky',
    'ظ': 'finger-l-pinky', 'ط': 'finger-l-ring', 'ز': 'finger-l-middle', 'ر': 'finger-l-index', 'ذ': 'finger-l-index',
    'د': 'finger-r-index', 'پ': 'finger-r-middle', 'و': 'finger-r-ring',
    ' ': 'finger-r-thumb'
};

let currentLessonIndex = 0;
let currentCharIndex = 0;
let startTime = null;
let timerInterval = null;
let totalTyped = 0;
let totalErrors = 0;
let completedLessons = JSON.parse(localStorage.getItem('typing_completed_lessons')) || [];
let overallKeysTyped = parseInt(localStorage.getItem('typing_total_keys')) || 0;

document.addEventListener('DOMContentLoaded', () => {
    renderLessonsGrid();
    updateProgressUI();
    window.addEventListener('keydown', handleKeyPress);
});

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(
        btn => btn.getAttribute('onclick').includes(tabName)
    );
    if (activeBtn) activeBtn.classList.add('active');
}

function renderLessonsGrid() {
    const grid = document.getElementById('lessons-grid');
    grid.innerHTML = '';

    lessonsData.forEach((lesson, index) => {
        const card = document.createElement('div');
        const isCompleted = completedLessons.includes(lesson.id);
        card.className = `lesson-card ${isCompleted ? 'completed' : ''}`;
        card.innerHTML = `
            <strong>درس ${lesson.id}</strong>
            <small style="font-size:0.75rem; color:#a6adc8;">${isCompleted ? '✓ پاس شد' : 'شروع'}</small>
        `;
        card.onclick = () => startLesson(index);
        grid.appendChild(card);
    });
}

function startLesson(index) {
    currentLessonIndex = index;
    currentCharIndex = 0;
    totalTyped = 0;
    totalErrors = 0;
    startTime = null;
    clearInterval(timerInterval);

    document.getElementById('time').innerText = "00:00";
    document.getElementById('wpm').innerText = "0";
    document.getElementById('accuracy').innerText = "100";

    switchTab('practice');
    renderCards();
    highlightCurrentKeyAndFinger();
}

function renderCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    const text = lessonsData[currentLessonIndex].text;

    for (let i = currentCharIndex; i < Math.min(currentCharIndex + 5, text.length); i++) {
        const card = document.createElement('div');
        let char = text[i];
        if (char === ' ') char = '␣';

        card.className = `char-card ${i === currentCharIndex ? 'current' : ''}`;
        card.innerText = char;
        card.id = `char-card-${i}`;
        container.appendChild(card);
    }

    document.getElementById('hand-hint').innerText = `راهنما: ${lessonsData[currentLessonIndex].fingerHint}`;
}

function highlightCurrentKeyAndFinger() {
    document.querySelectorAll('.key').forEach(k => k.classList.remove('active'));
    document.querySelectorAll('.finger-node').forEach(f => f.classList.remove('active'));

    const currentText = lessonsData[currentLessonIndex].text;
    if (currentCharIndex >= currentText.length) return;

    const targetChar = currentText[currentCharIndex];
    const targetKeyEl = document.querySelector(`.key[data-key="${targetChar}"]`);
    
    if (targetKeyEl) {
        targetKeyEl.classList.add('active');
        
        const fingerId = charToFingerMap[targetChar];
        if (fingerId) {
            const fingerEl = document.getElementById(fingerId);
            if (fingerEl) fingerEl.classList.add('active');
        }
    }
}

function handleKeyPress(e) {
    if (!document.getElementById('practice-tab').classList.contains('active')) return;
    if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' || e.key === 'Tab') return;

    const currentText = lessonsData[currentLessonIndex].text;
    if (currentCharIndex >= currentText.length) return;

    if (!startTime) {
        startTime = new Date();
        timerInterval = setInterval(updateStats, 1000);
    }

    let pressedKey = e.key;

    if (pressedKey === 'Spacebar' || pressedKey === ' ') pressedKey = ' ';
    if (pressedKey === 'ك') pressedKey = 'ک';
    if (pressedKey === 'ي') pressedKey = 'ی';

    const targetChar = currentText[currentCharIndex];
    const currentCard = document.getElementById(`char-card-${currentCharIndex}`);

    totalTyped++;
    overallKeysTyped++;
    localStorage.setItem('typing_total_keys', overallKeysTyped);

    if (pressedKey === targetChar) {
        if (currentCard) currentCard.className = 'char-card correct';
        currentCharIndex++;

        if (currentCharIndex >= currentText.length) {
            finishLesson();
        } else {
            renderCards();
            highlightCurrentKeyAndFinger();
        }
    } else {
        totalErrors++;
        if (currentCard) {
            currentCard.classList.add('incorrect');
            setTimeout(() => currentCard.classList.remove('incorrect'), 300);
        }
    }

    updateStats();
}

function updateStats() {
    if (!startTime) return;

    const now = new Date();
    const timeDiffInSeconds = Math.floor((now - startTime) / 1000);
    const minutes = Math.floor(timeDiffInSeconds / 60);
    const seconds = timeDiffInSeconds % 60;

    document.getElementById('time').innerText = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    const wordsTyped = totalTyped / 5;
    const wpm = minutes > 0 || seconds > 0 ? Math.round((wordsTyped / (timeDiffInSeconds || 1)) * 60) : 0;
    document.getElementById('wpm').innerText = wpm;

    const accuracy = totalTyped > 0 ? Math.max(0, Math.round(((totalTyped - totalErrors) / totalTyped) * 100)) : 100;
    document.getElementById('accuracy').innerText = accuracy;
}

function finishLesson() {
    clearInterval(timerInterval);
    const lessonId = lessonsData[currentLessonIndex].id;

    if (!completedLessons.includes(lessonId)) {
        completedLessons.push(lessonId);
        localStorage.setItem('typing_completed_lessons', JSON.stringify(completedLessons));
    }

    renderLessonsGrid();
    updateProgressUI();

    alert(`آفرین داشم! درس ${lessonId} با موفقیت تمام شد.\nسرعت شما: ${document.getElementById('wpm').innerText} کلمه در دقیقه\nدقت شما: ${document.getElementById('accuracy').innerText}٪`);

    if (currentLessonIndex + 1 < lessonsData.length) {
        startLesson(currentLessonIndex + 1);
    } else {
        switchTab('progress');
    }
}

function updateProgressUI() {
    const total = lessonsData.length;
    const completed = completedLessons.length;
    const percentage = Math.round((completed / total) * 100);

    document.getElementById('progress-bar').style.width = `${percentage}%`;
    document.getElementById('progress-text').innerText = `${percentage}٪ تکمیل شده`;
    document.getElementById('completed-count').innerText = `${completed} از ${total}`;
    document.getElementById('total-keys-typed').innerText = overallKeysTyped.toLocaleString('fa-IR');

    // محاسبه سطح کاربری
    const levelEl = document.getElementById('user-level');
    if (completed >= 40) {
        levelEl.innerText = "استاد تایپ 🥇";
        levelEl.style.color = "#f9e2af";
    } else if (completed >= 20) {
        levelEl.innerText = "متوسط 🥈";
        levelEl.style.color = "#89b4fa";
    } else {
        levelEl.innerText = "مبتدی 🥉";
        levelEl.style.color = "#a6e3a1";
    }
}

function resetProgress() {
    if (confirm('داشم مطمئنی میخوای تمام سوابق و پیشرفتت ریست بشه؟')) {
        completedLessons = [];
        overallKeysTyped = 0;
        localStorage.removeItem('typing_completed_lessons');
        localStorage.removeItem('typing_total_keys');
        renderLessonsGrid();
        updateProgressUI();
        switchTab('home');
    }
}
