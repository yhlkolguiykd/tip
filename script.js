// ۵۰ مرحله کامل و کاربردی
const lessons = [
    "نمک متن تکان کتان", "کمان مکتوب تمک متین", "بلبل کابل بابل بتن", "سیب سیم بیس بیست",
    "شیر شاد شام شاه", "گچ گام کلاه کباب", "فیلم قلم فرش قند", "غار عقل عشق علم",
    "کاغذ باغ چراغ داغ", "صبح جامه طلا طناب", "سار دار اسرار سیب", "بار برف برگ باران",
    "کار کارمند کوه کارگاه", "روز روزگار راز رود", "دست داستان دوست دارا", "مرد مردم مرام مرز",
    "جان جهان جنگ جاری", "دل دانا دانش داروش", "سفره سرما سلام سبد", "درخت دریا دفتر دیوار",
    "توانا بود هر که دانا بود", "ز دانش دل پیر برنا بود", "نمک نشناس و بی‌وفا نباشیم", "تایپ سریع با تمرین به دست می‌آید",
    "هر روز چند دقیقه تمرین کنید", "زندگی کوتاه است قدر بدانیم", "برنامه‌نویسی و طراحی وب جذاب است", "تایپ ده انگشتی مهارت بزرگی است",
    "سحرخیز باش تا کامروا شوی", "با تلاش به همه اهداف می‌رسی", "دانش‌آموزان برای یادگیری مهارت‌های جدید تلاش می‌کنند", "هوش مصنوعی ابزاری قدرتمند برای پیشرفت انسان است",
    "اینترنت دنیا را به یک دهکده کوچک تبدیل کرده است", "برای موفقیت باید برنامه‌ریزی دقیق و منظم داشت", "ورزش مداوم سلامتی جسم و روح را تضمین می‌کند", "کتابخوانی باعث افزایش آگاهی و رشد تفکر می‌شود",
    "همکاری و کار گروهی نتایج بهتری به همراه دارد", "تمرکز روی هدف اصلی کلید پیروزی در زندگی است", "یادگیری ابزارهای جدید فرصت‌های شغلی می‌سازد", "تلاش امروز شما آینده فردای شما را می‌سازد",
    "تایپ ده انگشتی یکی از کاربردی‌ترین مهارت‌ها در دنیای دیجیتال است که سرعت شما را چند برابر می‌کند", "با تمرین روزانه روی این اپلیکیشن می‌توانید بدون نگاه کردن به کیبورد با دقت بالا تایپ کنید", "هوش مصنوعی و برنامه‌نویسی آینده جهان را می‌سازند و یادگیری آن‌ها مسیر موفقیت را هموار می‌کند", "انسان‌های موفق کسانی هستند که از زمان خود بهترین استفاده را می‌برند و همیشه در حال یادگیری هستند",
    "برای ساخت پروژه‌های بزرگ باید از قدم‌های کوچک شروع کرد و با صبر و پشتکار ادامه داد", "شبکه‌های اجتماعی و ابزارهای ارتباطی دنیای امروز را به شدت تغییر داده و سریع‌تر کرده‌اند", "کیفیت کدنویسی و طراحی ساده و کاربردی باعث می‌شود کاربران از نرم‌افزار شما لذت ببرند", "توسعه‌دهندگان وب همیشه در حال به‌روزرسانی دانش خود هستند تا بهترین ابزارها را خلق کنند",
    "امیدواریم این برنامه تمرینی به شما کمک کند تا به یک تایپیست حرفه‌ای و سریع تبدیل شوید", "تبریک می‌گوییم شما تمام مراحل تمرین تایپ ده انگشتی را با موفقیت و سرعت بالا به پایان رساندید"
];

const keyToFingerMap = {
    'ض': 'l-pinky', 'ش': 'l-pinky', 'ظ': 'l-pinky', 'ص': 'l-ring', 'س': 'l-ring', 'ط': 'l-ring',
    'ث': 'l-middle', 'ی': 'l-middle', 'ز': 'l-middle', 'ق': 'l-index', 'ب': 'l-index', 'ر': 'l-index',
    'ف': 'l-index', 'ل': 'l-index', 'ذ': 'l-index', 'ا': 'l-index', 'ع': 'r-index', 'ت': 'r-index',
    'د': 'r-index', 'غ': 'r-index', 'ن': 'r-index', 'پ': 'r-index', 'ه': 'r-middle', 'م': 'r-middle',
    'و': 'r-middle', 'خ': 'r-ring', 'ک': 'r-ring', 'ح': 'r-pinky', 'گ': 'r-pinky', 'ج': 'r-pinky', 'چ': 'r-pinky', ' ': 'r-thumb'
};

let currentLesson = 0;
let charIndex = 0;
let mistakes = 0;
let startTime = null;

// دریافت اطلاعات پیشرفت واقعی از حافظه مرورگر
let completedLessons = JSON.parse(localStorage.getItem('typing_completed') || '[]');

function switchTab(tabName, btnElement) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(`${tabName}-tab`).classList.add('active');
    if(btnElement) btnElement.classList.add('active');

    if (tabName === 'home') renderGrid();
    if (tabName === 'progress') updateProgressUI();
}

// ساخت لیست کارت‌های ۵۰ مرحله
function renderGrid() {
    const grid = document.getElementById('lessons-grid');
    if (!grid) return;
    grid.innerHTML = '';
    lessons.forEach((_, index) => {
        const isDone = completedLessons.includes(index);
        const card = document.createElement('div');
        card.className = `lesson-card ${isDone ? 'completed' : ''}`;
        card.onclick = () => selectLesson(index);
        card.innerHTML = `
            <div>درس ${index + 1}</div>
            ${isDone ? '<span class="badge">✓ پاس شد</span>' : ''}
        `;
        grid.appendChild(card);
    });
}

function selectLesson(index) {
    currentLesson = index;
    const practiceBtn = document.querySelectorAll('.nav-btn')[1];
    switchTab('practice', practiceBtn);
    loadLesson();
}

// به روز رسانی بخش کارنامه پیشرفت
function updateProgressUI() {
    const count = completedLessons.length;
    const percent = Math.round((count / lessons.length) * 100);
    
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const completedCount = document.getElementById('completed-count');

    if (progressBar) progressBar.style.width = `${percent}%`;
    if (progressText) progressText.innerText = `${percent}٪ از مسیر تمرین تکمیل شده است`;
    if (completedCount) completedCount.innerText = count;
}

// پاک کردن پیشرفت ثبت شده
function resetProgress() {
    if (confirm('آیا می‌خواهی تمام مراحل ثبت‌شده پاک بشن و از اول شروع کنی؟')) {
        completedLessons = [];
        localStorage.removeItem('typing_completed');
        updateProgressUI();
        renderGrid();
    }
}

function loadLesson() {
    const textDisplay = document.getElementById('text-display');
    if (!textDisplay) return;
    
    textDisplay.innerHTML = '';
    charIndex = 0;
    mistakes = 0;
    startTime = null;
    document.getElementById('lesson-num').innerText = currentLesson + 1;

    const text = lessons[currentLesson];
    text.split('').forEach((char, index) => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        charSpan.classList.add('char');
        if (index === 0) charSpan.classList.add('current');
        textDisplay.appendChild(charSpan);
    });

    updateVisualGuide(text[0]);
}

function updateVisualGuide(char) {
    document.querySelectorAll('.key').forEach(k => k.classList.remove('active'));
    const targetKey = char === ' ' ? ' ' : char;
    const keyElement = document.querySelector(`.key[data-key="${targetKey}"]`);
    if (keyElement) keyElement.classList.add('active');

    document.querySelectorAll('.finger, .thumb').forEach(f => f.classList.remove('finger-active'));
    const fingerId = keyToFingerMap[char];
    if (fingerId) {
        const fingerElement = document.getElementById(fingerId);
        if (fingerElement) fingerElement.classList.add('finger-active');
    }
}

// مدیریت کیبورد و ثبت واقعی پایان درس
document.addEventListener('keydown', (e) => {
    const practiceTab = document.getElementById('practice-tab');
    if (!practiceTab || !practiceTab.classList.contains('active')) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    const text = lessons[currentLesson];
    if (charIndex >= text.length) return;

    if (!startTime) startTime = new Date();

    const typedChar = e.key;
    const currentChar = text[charIndex];
    const charSpans = document.getElementById('text-display').querySelectorAll('.char');

    if (e.key === ' ') e.preventDefault();

    if (typedChar === currentChar) {
        charSpans[charIndex].classList.remove('current');
        charSpans[charIndex].classList.add('correct');
        charIndex++;

        if (charIndex < text.length) {
            charSpans[charIndex].classList.add('current');
            updateVisualGuide(text[charIndex]);
        } else {
            // ذخیره واقعی مرحله پاس شده در مرورگر
            if (!completedLessons.includes(currentLesson)) {
                completedLessons.push(currentLesson);
                localStorage.setItem('typing_completed', JSON.stringify(completedLessons));
            }
            setTimeout(() => {
                alert(`آفرین داشم! درس ${currentLesson + 1} با موفقیت پاس شد.`);
                currentLesson = (currentLesson + 1) % lessons.length;
                loadLesson();
            }, 100);
        }
    } else if (e.key.length === 1 && e.key !== 'Shift') {
        charSpans[charIndex].classList.add('incorrect');
        mistakes++;
    }

    if (startTime) {
        const timeElapsed = (new Date() - startTime) / 60000;
        const wpm = Math.round((charIndex / 5) / timeElapsed) || 0;
        const accuracy = Math.max(0, Math.round(((charIndex - mistakes) / (charIndex || 1)) * 100));
        
        document.getElementById('wpm').innerText = wpm;
        document.getElementById('accuracy').innerText = accuracy;
    }
});

// اجرای اول‌باره برنامه
renderGrid();
loadLesson();
