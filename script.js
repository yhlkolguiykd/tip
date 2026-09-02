// درس‌های نمونه برای ردیف وسط
const lessons = [
    "ککک م ممکک ممکم",
    "تتت ننن تنتن نتنت",
    "کمتن نمک تکان کتان",
    "شسسیب لتام کگپو"
];

// --- نقشه کلید به انگشت (بسیار مهم) ---
// l=Left (چپ)، r=Right (راست)
// p=Pinky (کوچک)، r=Ring (حلقه)، m=Middle (وسط)، i=Index (اشاره)، t=Thumb (شست)
const keyToFingerMap = {
    // دست چپ
    'ض': 'l-pinky', 'ش': 'l-pinky', 'ظ': 'l-pinky',
    'ص': 'l-ring',  'س': 'l-ring',  'ط': 'l-ring',
    'ث': 'l-middle','ی': 'l-middle','ز': 'l-middle',
    'ق': 'l-index', 'ب': 'l-index', 'ر': 'l-index',
    'ف': 'l-index', 'ل': 'l-index', 'ذ': 'l-index', // کلیدهای فرعی دست چپ

    // دست راست
    'ع': 'r-index', 'ت': 'r-index', 'د': 'r-index',
    'غ': 'r-index', 'ن': 'r-index', 'پ': 'r-index', // کلیدهای فرعی دست راست
    'ه': 'r-middle','م': 'r-middle','و': 'r-middle',
    'خ': 'r-ring',  'ک': 'r-ring',  '.': 'r-ring',
    'ح': 'r-pinky', 'گ': 'r-pinky', '،': 'r-pinky',
    'ج': 'r-pinky', 'چ': 'r-pinky',

    // شست‌ها
    ' ': 'r-thumb' // یا l-thumb، معمولاً شست راست برای اسپیس
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

    // آپدیت هایلایت کلید و انگشت برای اولین کاراکتر
    updateVisualGuide(text[0]);
}

// تابع جدید: هم کلید و هم انگشت رو هایلایت می‌کنه
function updateVisualGuide(char) {
    // 1. هایلایت کلید روی کیبورد
    document.querySelectorAll('.key').forEach(k => k.classList.remove('active'));
    const targetKey = char === ' ' ? ' ' : char;
    const keyElement = document.querySelector(`.key[data-key="${targetKey}"]`);
    if (keyElement) keyElement.classList.add('active');

    // 2. هایلایت انگشت روی گرافیک دست
    document.querySelectorAll('.finger, .thumb').forEach(f => f.classList.remove('finger-active'));
    
    const fingerId = keyToFingerMap[char];
    if (fingerId) {
        const fingerElement = document.getElementById(fingerId);
        if (fingerElement) fingerElement.classList.add('finger-active');
    }
}

document.addEventListener('keydown', (e) => {
    // جلوگیری از ثبت کلیدهای کنترلی مثل Shift یا Alt
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    const text = lessons[currentLesson];
    if (charIndex >= text.length) return;

    if (!startTime) startTime = new Date();

    const typedChar = e.key;
    const currentChar = text[charIndex];
    const charSpans = textDisplay.querySelectorAll('.char');

    // جلوگیری از اسکرول با کلید Space
    if (e.key === ' ') e.preventDefault();

    if (typedChar === currentChar) {
        charSpans[charIndex].classList.remove('current');
        charSpans[charIndex].classList.add('correct');
        charIndex++;

        if (charIndex < text.length) {
            charSpans[charIndex].classList.add('current');
            // آپدیت برای کاراکتر بعدی
            updateVisualGuide(text[charIndex]);
        } else {
            // پایان درس
            setTimeout(() => {
                alert('عالی بود! درس بعدی.');
                currentLesson = (currentLesson + 1) % lessons.length;
                loadLesson();
            }, 100);
        }
    } else if (e.key.length === 1 && e.key !== 'Shift') { // فقط کلیدهای متنی و نادیده گرفتن Shift
        charSpans[charIndex].classList.add('incorrect');
        mistakes++;
    }

    // محاسبه آمار
    if (startTime) {
        const timeElapsed = (new Date() - startTime) / 60000; // به دقیقه
        const typedChars = charIndex;
        const wpm = Math.round((typedChars / 5) / timeElapsed) || 0;
        const accuracy = Math.max(0, Math.round(((typedChars - mistakes) / (typedChars || 1)) * 100));
        
        wpmDisplay.innerText = wpm;
        accuracyDisplay.innerText = accuracy;
    }
});

// شروع اولین درس
loadLesson();
