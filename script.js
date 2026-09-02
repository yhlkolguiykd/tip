// ==========================================
// دیتابیس ۵۰ درس استاندارد
// ==========================================
const lessonsData = [
    { id: 1, title: "درس ۱: کلیدهای ت و ن", text: "تتت ننن تنت نتن تتن نتت تتا ننت", fingerHint: "انگشت اشاره راست (ت) | انگشت اشاره چپ (ن)", minWpm: 8, minAccuracy: 90 },
    { id: 2, title: "درس ۲: کلیدهای م و ک", text: "ممم ککک مکک ک مم تکم نمک کمت مکن", fingerHint: "انگشت وسط راست (م) | انگشت وسط چپ (ک)", minWpm: 8, minAccuracy: 90 },
    { id: 3, title: "درس ۳: کلیدهای ب و ی", text: "ببب ییی بیی یبی ببت نین مبی کیب", fingerHint: "انگشت حلقه راست (ب) | انگشت حلقه چپ (ی)", minWpm: 9, minAccuracy: 90 },
    { id: 4, title: "درس ۴: کلیدهای ش و س", text: "ششش سسش شسش سشش شبس یشس شمک سنت", fingerHint: "انگشت کوچک راست (ش) | انگشت کوچک چپ (س)", minWpm: 9, minAccuracy: 92 },
    { id: 5, title: "درس ۵: ترکیبی ردیف خانه اصلی", text: "تسنب نمکک بستم کمین سیم شیک منبت", fingerHint: "تمرکز روی تمام انگشتان ردیف خانه", minWpm: 10, minAccuracy: 92 },
    { id: 6, title: "درس ۶: کلیدهای ا و ل", text: "ااا للل الم لاما اسم رسم کلام سلام", fingerHint: "حرکت کششی انگشت اشاره چپ (ا) و راست (ل)", minWpm: 10, minAccuracy: 92 },
    { id: 7, title: "درس ۷: کلید گ", text: "گگگ سگ سگک گلم نمگ برگ گندم سنگ", fingerHint: "حرکت کششی انگشت کوچک چپ (گ)", minWpm: 10, minAccuracy: 92 },
    { id: 8, title: "درس ۸: کلید Space (فاصله)", text: "ت ن م ک ب ی ش س ا ل گ سلام من", fingerHint: "فشار دادن کلید فاصله با انگشت شست", minWpm: 11, minAccuracy: 92 },
    { id: 9, title: "درس ۹: واژه‌سازی ردیف خانه", text: "سلام من به شما کلام سنگین بوی گل", fingerHint: "ترکیب کامل کلیدهای ردیف وسط", minWpm: 12, minAccuracy: 92 },
    { id: 10, title: "درس ۱۰: آزمون ردیف خانه", text: "سنت لک لک بت کلم ماسک سگک نسیم", fingerHint: "آزمون تسلط کامل بر ردیف وسط", minWpm: 12, minAccuracy: 93 },
    { id: 11, title: "درس ۱۱: کلیدهای ف و ق", text: "ففف ققق فقف فلق قفل کیف مشق", fingerHint: "انتقال انگشت اشاره به بالا: ف (چپ)، ق (راست)", minWpm: 12, minAccuracy: 93 },
    { id: 12, title: "درس ۱۲: کلیدهای غ و ع", text: "غغغ ععع غعغ مرغ مرغک عقل علی عاقل", fingerHint: "انگشت اشاره و وسط به سمت بالا", minWpm: 13, minAccuracy: 93 },
    { id: 13, title: "درس ۱۳: کلیدهای ه و خ", text: "ههه خخخ هخه ماه خاه خانه شاخه نهان", fingerHint: "انگشت وسط و حلقه به سمت بالا", minWpm: 13, minAccuracy: 93 },
    { id: 14, title: "درس ۱۴: کلیدهای ث و ح", text: "ثثث ححح ثحث اثر حدیث مثلث لوح ثبات", fingerHint: "انگشت حلقه و کوچک به سمت بالا", minWpm: 14, minAccuracy: 93 },
    { id: 15, title: "درس ۱۵: کلیدهای ص و ج", text: "صصص ججج صجص صندوق کاج صبح گنج", fingerHint: "حرکت انگشتان به سمت کلیدهای بالایی", minWpm: 14, minAccuracy: 94 },
    { id: 16, title: "درس ۱۶: کلیدهای ض و چ", text: "ضضض چچچ ضچض رضا چوب حوض چکش چمن", fingerHint: "انتقال انگشت کوچک چپ (ض) و راست (چ)", minWpm: 14, minAccuracy: 94 },
    { id: 17, title: "درس ۱۷: کلمات ترکیبی بالا و وسط", text: "صندوقچه قفل خانه مرغابی سخاوت", fingerHint: "ترکیب ردیف بالا و ردیف خانه", minWpm: 15, minAccuracy: 94 },
    { id: 18, title: "درس ۱۸: جمله‌سازی کوتاه ۱", text: "علی به خانه رفت مرغابی در حوض است", fingerHint: "تمرکز بر روان تایپ کردن", minWpm: 15, minAccuracy: 94 },
    { id: 19, title: "درس ۱۹: جمله‌سازی کوتاه ۲", text: "رضا قفل صندوق را باز کرد", fingerHint: "دقت بالا مد نظر است", minWpm: 16, minAccuracy: 95 },
    { id: 20, title: "درس ۲۰: آزمون ردیف بالا", text: "صبح زود خورشید طلوع کرد و بیدار شدیم", fingerHint: "آزمون تسلط بر ردیف بالا و وسط", minWpm: 16, minAccuracy: 95 },
    { id: 21, title: "درس ۲۱: کلیدهای ر و ز", text: "ررر ززز رزرز روز روزه رز راز زاری", fingerHint: "انتقال انگشت اشاره به پایین: ر (چپ)، ز (راست)", minWpm: 16, minAccuracy: 95 },
    { id: 22, title: "درس ۲۲: کلیدهای ذ و د", text: "ذذذ ددد ذدذ ذرذ ذرّه درخت ذره بین", fingerHint: "انتقال انگشت به پایین و چپ/راست", minWpm: 16, minAccuracy: 95 },
    { id: 23, title: "درس ۲۳: کلیدهای ط و ظ", text: "ططط ظظظ طظط طوطی خط حافظ ظفر حیاط", fingerHint: "انگشت حلقه به سمت پایین", minWpm: 17, minAccuracy: 95 },
    { id: 24, title: "درس ۲۴: کلیدهای پ و و", text: "پپپ وو و پوا پروانه ورزشی توپ پرواز", fingerHint: "انگشت کوچک به سمت پایین", minWpm: 17, minAccuracy: 95 },
    { id: 25, title: "درس ۲۵: ترکیب تمام حروف الفبا", text: "پروانه در حیاط پرواز کرد و روی گل نشست", fingerHint: "استفاده از تمام ردیف‌های کیبورد", minWpm: 18, minAccuracy: 95 },
    { id: 26, title: "درس ۲۶: کلمات سخت ردیف پایین", text: "ضبط ظرف طوطی ورزش پرواز درخت", fingerHint: "تمرکز روی حافظه عضلانی", minWpm: 18, minAccuracy: 95 },
    { id: 27, title: "درس ۲۷: جملات متداول ۱", text: "دانش آموزان در کلاس درس حاضر شدند", fingerHint: "تایپ بدون نگاه به کیبورد", minWpm: 19, minAccuracy: 95 },
    { id: 28, title: "درس ۲۸: جملات متداول ۲", text: "ورزش کردن باعث سلامتی روح و جسم است", fingerHint: "حفظ ریتم منظم تایپ", minWpm: 19, minAccuracy: 95 },
    { id: 29, title: "درس ۲۹: تمرین سرعت ردیف پایین", text: "ظفر با دقت به خطوط دفتر نگاه کرد", fingerHint: "افزایش سرعت تایپ", minWpm: 20, minAccuracy: 95 },
    { id: 30, title: "درس ۳۰: آزمون جامع کیبورد", text: "پژوهشگران در آزمایشگاه موفق به کشف جدیدی شدند", fingerHint: "ارزیابی کلی تسلط بر حروف", minWpm: 20, minAccuracy: 96 },
    { id: 31, title: "درس ۳۱: کلمات پرتکرار ۱", text: "این است که برای با از به در کجاست", fingerHint: "تایپ سریع کلمات کوتاه پرکاربرد", minWpm: 21, minAccuracy: 96 },
    { id: 32, title: "درس ۳۲: کلمات پرتکرار ۲", text: "آنها همه چیز را درباره برنامه‌نویسی می‌دانند", fingerHint: "افزایش سرعت در کلمات بلند", minWpm: 21, minAccuracy: 96 },
    { id: 33, title: "درس ۳۳: متن متوالی ۱", text: "تایپ ده انگشتی مهارتی است که با تمرین به دست می‌آید", fingerHint: "نگاه فقط به صفحه نمایش", minWpm: 22, minAccuracy: 96 },
    { id: 34, title: "درس ۳۴: متن متوالی ۲", text: "هر روز چند دقیقه تمرین باعث پیشرفت چشمگیر می‌شود", fingerHint: "کنترل سرعت و دقت", minWpm: 22, minAccuracy: 96 },
    { id: 35, title: "درس ۳۵: تمرین دقت ۱", text: "سحرگاهان نسیم خنکی از سمت کوهستان می‌وزید", fingerHint: "دقت بالا مد نظر است", minWpm: 23, minAccuracy: 96 },
    { id: 36, title: "درس ۳۶: تمرین دقت ۲", text: "موفقیت نتیجه تلاش‌های کوچک و روزمره است", fingerHint: "عدم استفاده از کلید Backspace", minWpm: 23, minAccuracy: 96 },
    { id: 37, title: "درس ۳۷: افزایش سرعت ۱", text: "سریع تایپ کردن نیازمند تمرکز و آرامش است", fingerHint: "سرعت هدف: بالای ۲۴ کلمه در دقیقه", minWpm: 24, minAccuracy: 96 },
    { id: 38, title: "درس ۳۸: افزایش سرعت ۲", text: "برنامه‌نویسان با تایپ سریع در وقت خود صرفه‌جویی می‌کنند", fingerHint: "ریتم یکنواخت ضربه زدن", minWpm: 24, minAccuracy: 96 },
    { id: 39, title: "درس ۳۹: ضرب‌المثل‌های فارسی ۱", text: "کار نیکو کردن از پر کردن است", fingerHint: "تایپ متون آشنا", minWpm: 25, minAccuracy: 96 },
    { id: 40, title: "درس ۴۰: ضرب‌المثل‌های فارسی ۲", text: "جوجه را آخر پاییز می‌شمارند", fingerHint: "رعایت فاصله‌ها", minWpm: 25, minAccuracy: 96 },
    { id: 41, title: "درس ۴۱: متون ادبی کوتاه", text: "بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند", fingerHint: "تایپ شعر و متون موزون", minWpm: 25, minAccuracy: 97 },
    { id: 42, title: "درس ۴۲: متون علمی کوتاه", text: "هوش مصنوعی دنیا را با سرعت در حال تغییر دادن است", fingerHint: "تایپ واژگان جدید", minWpm: 26, minAccuracy: 97 },
    { id: 43, title: "درس ۴۳: فناوری و کامپیوتر", text: "اینترنت ارتباطات بین مردم جهان را بسیار آسان کرده است", fingerHint: "تسلط بر تایپ اصطلاحات", minWpm: 26, minAccuracy: 97 },
    { id: 44, title: "درس ۴۴: تمرین استقامت ۱", text: "برای رسیدن به هدف باید برنامه‌ریزی داشت و طبق آن حرکت کرد", fingerHint: "تایپ بدون توقف", minWpm: 27, minAccuracy: 97 },
    { id: 45, title: "درس ۴۵: تمرین استقامت ۲", text: "یادگیری مهارت‌های جدید به ما کمک می‌کند در زندگی موفق‌تر باشیم", fingerHint: "ارزیابی ثبات سرعت", minWpm: 27, minAccuracy: 97 },
    { id: 46, title: "درس ۴۶: متون طولانی ۱", text: "زندگی مانند دوچرخه‌سواری است برای حفظ تعادل باید به حرکت ادامه داد", fingerHint: "تایپ یکنواخت و بدون استرس", minWpm: 28, minAccuracy: 97 },
    { id: 47, title: "درس ۴۷: متون طولانی ۲", text: "بهترین زمان برای کاشتن یک درخت بیست سال پیش بود دومین زمان مناسب همین الان است", fingerHint: "افزایش تمرکز", minWpm: 28, minAccuracy: 97 },
    { id: 48, title: "درس ۴۸: آزمون سرعت پیشرفته", text: "تایپ سریع و دقیق به شما اجازه می‌دهد افکار خود را بدون وقفه ثبت کنید", fingerHint: "هدف: سرعت ۲۹+ کلمه در دقیقه", minWpm: 29, minAccuracy: 98 },
    { id: 49, title: "درس ۴۹: آزمون دقت پیشرفته", text: "با تمرین مداوم و روزانه جای تمام حروف بدون نگاه کردن ملکه ذهن می‌شود", fingerHint: "هدف: دقت ۹۸٪+", minWpm: 30, minAccuracy: 98 },
    { id: 50, title: "درس ۵۰: غول مرحله آخر (فارغ‌التحصیلی)", text: "تبریک می‌گویم شما اکنون به یک تایپیست حرفه‌ای ده انگشتی تبدیل شده‌اید و بر کیبورد تسلط کامل دارید", fingerHint: "تمرین نهایی دوره", minWpm: 30, minAccuracy: 98 }
];

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
    
    const savedKey = localStorage.getItem('custom_ai_api_key');
    const savedProvider = localStorage.getItem('custom_ai_provider');
    if (savedKey) document.getElementById('userApiKey').value = savedKey;
    if (savedProvider) document.getElementById('aiProvider').value = savedProvider;
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
        const isUnlocked = index === 0 || completedLessons.includes(lessonsData[index - 1].id);

        card.className = `lesson-card ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''}`;
        
        let statusText = 'شروع';
        if (isCompleted) statusText = '✓ پاس شد';
        else if (!isUnlocked) statusText = '🔒 قفل';

        card.innerHTML = `
            <strong>درس ${lesson.id}</strong>
            <small style="font-size:0.75rem; color:${!isUnlocked ? '#f38ba8' : '#a6adc8'}; display:block; margin-top:5px;">${statusText}</small>
        `;

        if (isUnlocked) {
            card.onclick = () => startLesson(index);
        } else {
            card.onclick = () => alert(`داشم اول باید درس ${lessonsData[index - 1].id} رو با سرعت حداقل ${lessonsData[index - 1].minWpm} WPM و دقت ${lessonsData[index - 1].minAccuracy}٪ پاس کنی!`);
        }

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
}

function renderCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    const currentLesson = lessonsData[currentLessonIndex];
    const text = currentLesson.text;

    for (let i = currentCharIndex; i < Math.min(currentCharIndex + 5, text.length); i++) {
        const card = document.createElement('div');
        let char = text[i];
        if (char === ' ') char = '␣';

        card.className = `char-card ${i === currentCharIndex ? 'current' : ''}`;
        card.innerText = char;
        card.id = `char-card-${i}`;
        container.appendChild(card);
    }

    document.getElementById('hand-hint').innerText = `راهنما: ${currentLesson.fingerHint} | حد نصاب: سرعت ${currentLesson.minWpm}+ WPM و دقت ${currentLesson.minAccuracy}+٪`;
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

    document.querySelectorAll('.v-key').forEach(k => {
        if (k.getAttribute('data-key') === pressedKey) {
            k.classList.add('active-key');
            setTimeout(() => k.classList.remove('active-key'), 150);
        }
    });

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
    if (!startTime) return { wpm: 0, accuracy: 100 };

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

    return { wpm, accuracy };
}

function finishLesson() {
    clearInterval(timerInterval);
    const { wpm, accuracy } = updateStats();
    const lesson = lessonsData[currentLessonIndex];

    const isPassed = wpm >= lesson.minWpm && accuracy >= lesson.minAccuracy;

    if (isPassed) {
        if (!completedLessons.includes(lesson.id)) {
            completedLessons.push(lesson.id);
            localStorage.setItem('typing_completed_lessons', JSON.stringify(completedLessons));
        }

        renderLessonsGrid();
        updateProgressUI();

        alert(`🔥 عالی بود داشم! درس ${lesson.id} رو پاس کردی.\nسرعت: ${wpm} WPM | دقت: ${accuracy}٪`);

        if (currentLessonIndex + 1 < lessonsData.length) {
            startLesson(currentLessonIndex + 1);
        } else {
            switchTab('progress');
        }
    } else {
        alert(`❌ هنوز به حد نصاب نرسیدی!\nسرعت شما: ${wpm} (حداقل: ${lesson.minWpm})\nدقت شما: ${accuracy}٪ (حداقل: ${lesson.minAccuracy}٪)`);
        startLesson(currentLessonIndex);
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

    const levelEl = document.getElementById('user-level');
    if (completed >= 40) levelEl.innerText = "استاد تایپ 🥇";
    else if (completed >= 20) levelEl.innerText = "متوسط 🥈";
    else levelEl.innerText = "مبتدی 🥉";
}

function resetProgress() {
    if (confirm('داشم مطمئنی میخوای سوابقت ریست بشه؟')) {
        completedLessons = [];
        overallKeysTyped = 0;
        localStorage.removeItem('typing_completed_lessons');
        localStorage.removeItem('typing_total_keys');
        renderLessonsGrid();
        updateProgressUI();
        switchTab('lessons');
    }
}

function saveUserApiKey() {
    const key = document.getElementById('userApiKey').value.trim();
    const provider = document.getElementById('aiProvider').value;
    if (key) {
        localStorage.setItem('custom_ai_api_key', key);
        localStorage.setItem('custom_ai_provider', provider);
        alert('تنظیمات API با موفقیت ذخیره شد! 🔥');
    } else {
        localStorage.removeItem('custom_ai_api_key');
        localStorage.removeItem('custom_ai_provider');
        alert('کلید پاک شد.');
    }
}

async function handleGenerateTopic() {
    const topic = document.getElementById('aiTopicInput').value.trim();
    const apiKey = localStorage.getItem('custom_ai_api_key');
    const provider = localStorage.getItem('custom_ai_provider') || 'google';

    if (!apiKey) {
        alert('داشم لطفاً اول کلید API خود را در بخش تنظیمات بالا وارد کنید.');
        return;
    }

    if (!topic) {
        alert('لطفاً یک موضوع وارد کنید.');
        return;
    }

    alert('در حال ارتباط با هوش مصنوعی...');

    let apiUrl = "";
    let requestBody = {};
    let headers = { "Content-Type": "application/json" };
    const promptText = `یک متن تمرینی کوتاه فارسی (حدود ۲۰ کلمه) درباره موضوع "${topic}" بنویس. فقط خود متن را بفرست و هیچ توضیح اضافی ننویس.`;

    if (provider === 'google') {
        apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        requestBody = {
            contents: [{
                parts: [{ text: promptText }]
            }]
        };
    } else {
        headers["Authorization"] = `Bearer ${apiKey}`;
        let modelName = "";
        
        if (provider === 'openrouter') {
            apiUrl = "https://openrouter.ai/api/v1/chat/completions";
            modelName = "meta-llama/llama-3-8b-instruct:free";
        } else if (provider === 'groq') {
            apiUrl = "https://api.groq.com/openai/v1/chat/completions";
            modelName = "llama3-8b-8192";
        } else if (provider === 'deepseek') {
            apiUrl = "https://api.deepseek.com/chat/completions";
            modelName = "deepseek-chat";
        }

        requestBody = {
            model: modelName,
            messages: [{ role: "user", content: promptText }]
        };
    }

    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(requestBody)
        });

        if (!res.ok) {
            const errData = await res.json();
            console.error("API Error Details:", errData);
            alert(`خطا از طرف سرور (کد ${res.status}): کلید API یا دسترسی را بررسی کنید.`);
            return;
        }

        const data = await res.json();
        let aiText = null;

        if (provider === 'google') {
            aiText = data.candidates && data.candidates[0].content.parts[0].text ? data.candidates[0].content.parts[0].text.trim() : null;
        } else {
            aiText = data.choices && data.choices[0] ? data.choices[0].message.content.trim() : null;
        }

        if (aiText) {
            lessonsData.push({
                id: lessonsData.length + 1,
                title: `متن هوش مصنوعی: ${topic}`,
                text: aiText,
                fingerHint: "تمرین آزاد هوشمند",
                minWpm: 15,
                minAccuracy: 90
            });
            startLesson(lessonsData.length - 1);
        } else {
            alert('پاسخی از هوش مصنوعی دریافت نشد ساختار خروجی تغییر کرده است.');
        }
    } catch (err) {
        console.error("Fetch Error:", err);
        alert('خطا در برقراری ارتباط! احتمالاً خطای CORS مرورگر است یا اینترنت قطع است. کلید Groq یا OpenRouter را امتحان کن.');
    }
}
