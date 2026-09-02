// ۵۰ مرحله درس کاربردی با کلمات و جملات واقعی (بدون کاراکتر اضافه و تکرار حرف)
const lessons = [
    // --- بخش ۱: کلمات پایه با ردیف وسط ---
    "نمک متن تکان کتان",
    "کمان مکتوب تمک متین",
    "بلبل کابل بابل بتن",
    "سیب سیم بیس بیست",
    "شیر شاد شام شاه",
    "گچ گام کلاه کباب",
    "فیلم قلم فرش قند",
    "غار عقل عشق علم",
    "کاغذ باغ چراغ داغ",
    "صبح جامه طلا طناب",

    // --- بخش ۲: کلمات کاربردی روزمره ---
    "سار دار اسرار سیب",
    "بار برف برگ باران",
    "کار کارمند کوه کارگاه",
    "روز روزگار راز رود",
    "دست داستان دوست دارا",
    "مرد مردم مرام مرز",
    "جان جهان جنگ جاری",
    "دل دانا دانش داروش",
    "سفره سرما سلام سبد",
    "درخت دریا دفتر دیوار",

    // --- بخش ۳: جملات کوتاه و ساده ---
    "توانا بود هر که دانا بود",
    "ز دانش دل پیر برنا بود",
    "نمک نشناس و بی‌وفا نباشیم",
    "تایپ سریع با تمرین به دست می‌آید",
    "هر روز چند دقیقه تمرین کنید",
    "زندگی کوتاه است قدر بدانیم",
    "برنامه‌نویسی و طراحی وب جذاب است",
    "تایپ ده انگشتی مهارت بزرگی است",
    "سحرخیز باش تا کامروا شوی",
    "با تلاش به همه اهداف می‌رسی",

    // --- بخش ۴: متون کاربردی و روانی دست ---
    "دانش‌آموزان برای یادگیری مهارت‌های جدید تلاش می‌کنند",
    "هوش مصنوعی ابزاری قدرتمند برای پیشرفت انسان است",
    "اینترنت دنیا را به یک دهکده کوچک تبدیل کرده است",
    "برای موفقیت باید برنامه‌ریزی دقیق و منظم داشت",
    "ورزش مداوم سلامتی جسم و روح را تضمین می‌کند",
    "کتابخوانی باعث افزایش آگاهی و رشد تفکر می‌شود",
    "همکاری و کار گروهی نتایج بهتری به همراه دارد",
    "تمرکز روی هدف اصلی کلید پیروزی در زندگی است",
    "یادگیری ابزارهای جدید فرصت‌های شغلی می‌سازد",
    "تلاش امروز شما آینده فردای شما را می‌سازد",

    // --- بخش ۵: چالش متون طولانی و سرعت ---
    "تایپ ده انگشتی یکی از کاربردی‌ترین مهارت‌ها در دنیای دیجیتال است که سرعت شما را چند برابر می‌کند",
    "با تمرین روزانه روی این اپلیکیشن می‌توانید بدون نگاه کردن به کیبورد با دقت بالا تایپ کنید",
    "هوش مصنوعی و برنامه‌نویسی آینده جهان را می‌سازند و یادگیری آن‌ها مسیر موفقیت را هموار می‌کند",
    "انسان‌های موفق کسانی هستند که از زمان خود بهترین استفاده را می‌برند و همیشه در حال یادگیری هستند",
    "برای ساخت پروژه‌های بزرگ باید از قدم‌های کوچک شروع کرد و با صبر و پشتکار ادامه داد",
    "شبکه‌های اجتماعی و ابزارهای ارتباطی دنیای امروز را به شدت تغییر داده و سریع‌تر کرده‌اند",
    "کیفیت کدنویسی و طراحی ساده و کاربردی باعث می‌شود کاربران از نرم‌افزار شما لذت ببرند",
    "توسعه‌دهندگان وب همیشه در حال به‌روزرسانی دانش خود هستند تا بهترین ابزارها را خلق کنند",
    "امیدواریم این برنامه تمرینی به شما کمک کند تا به یک تایپیست حرفه‌ای و سریع تبدیل شوید",
    "تبریک می‌گوییم شما تمام مراحل تمرین تایپ ده انگشتی را با موفقیت و سرعت بالا به پایان رساندید"
];

// نقشه کلید به انگشت (l=Left, r=Right)
const keyToFingerMap = {
    // دست چپ
    'ض': 'l-pinky', 'ش': 'l-pinky', 'ظ': 'l-pinky',
    'ص': 'l-ring',  'س': 'l-ring',  'ط': 'l-ring',
    'ث': 'l-middle','ی': 'l-middle','ز': 'l-middle',
    'ق': 'l-index', 'ب': 'l-index', 'ر': 'l-index',
    'ف': 'l-index', 'ل': 'l-index', 'ذ': 'l-index', 'ا': 'l-index',

    // دست راست
    'ع': 'r-index', 'ت': 'r-index', 'د': 'r-index',
    'غ': 'r-index', 'ن': 'r-index', 'پ': 'r-index',
    'ه': 'r-middle','م': 'r-middle','و': 'r-middle',
    'خ': 'r-ring',  'ک': 'r-ring',
    'ح': 'r-pinky', 'گ': 'r-pinky', 'ج': 'r-pinky', 'چ': 'r-pinky',

    // شست
    ' ': 'r-thumb'
};

let currentLesson = 0;
let charIndex = 0;
let mistakes = 0;
let startTime = null;

const textDisplay = document.getElementById('text-display');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const lessonNumDisplay = document.getElementById('lesson-num');

function loadLesson() {
    textDisplay.innerHTML = '';
    charIndex = 0;
    mistakes = 0;
    startTime = null;
    lessonNumDisplay.innerText = currentLesson + 1;

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
    // هایلایت کلید
    document.querySelectorAll('.key').forEach(k => k.classList.remove('active'));
    const targetKey = char === ' ' ? ' ' : char;
    const keyElement = document.querySelector(`.key[data-key="${targetKey}"]`);
    if (keyElement) keyElement.classList.add('active');

    // هایلایت انگشت
    document.querySelectorAll('.finger, .thumb').forEach(f => f.classList.remove('finger-active'));
    const fingerId = keyToFingerMap[char];
    if (fingerId) {
        const fingerElement = document.getElementById(fingerId);
        if (fingerElement) fingerElement.classList.add('finger-active');
    }
}

document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    const text = lessons[currentLesson];
    if (charIndex >= text.length) return;

    if (!startTime) startTime = new Date();

    const typedChar = e.key;
    const currentChar = text[charIndex];
    const charSpans = textDisplay.querySelectorAll('.char');

    if (e.key === ' ') e.preventDefault();

    if (typedChar === currentChar) {
        charSpans[charIndex].classList.remove('current');
        charSpans[charIndex].classList.add('correct');
        charIndex++;

        if (charIndex < text.length) {
            charSpans[charIndex].classList.add('current');
            updateVisualGuide(text[charIndex]);
        } else {
            setTimeout(() => {
                alert('عالی بود! بریم درس بعدی.');
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
        const typedChars = charIndex;
        const wpm = Math.round((typedChars / 5) / timeElapsed) || 0;
        const accuracy = Math.max(0, Math.round(((typedChars - mistakes) / (typedChars || 1)) * 100));
        
        wpmDisplay.innerText = wpm;
        accuracyDisplay.innerText = accuracy;
    }
});

loadLesson();
