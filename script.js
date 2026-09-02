const lessons = [
    "ککک م ممکک ممکم",
    "تتت ننن تنتن نتنت",
    "کمتن نمک تکان کتان",
    "شسسیب لتام کگپو"
];

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

    highlightKey(text[0]);
}

function highlightKey(char) {
    document.querySelectorAll('.key').forEach(k => k.classList.remove('active'));
    const targetKey = char === ' ' ? ' ' : char;
    const keyElement = document.querySelector(`.key[data-key="${targetKey}"]`);
    if (keyElement) keyElement.classList.add('active');
}

document.addEventListener('keydown', (e) => {
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
            highlightKey(text[charIndex]);
        } else {
            // پایان درس
            setTimeout(() => {
                alert('عالی بود! درس بعدی.');
                currentLesson = (currentLesson + 1) % lessons.length;
                loadLesson();
            }, 100);
        }
    } else if (e.key.length === 1) { // فقط کلیدهای متنی
        charSpans[charIndex].classList.add('incorrect');
        mistakes++;
    }

    // محاسبه آمار
    if (startTime) {
        const timeElapsed = (new Date() - startTime) / 60000; // به دقیقه
        const wpm = Math.round((charIndex / 5) / timeElapsed) || 0;
        const accuracy = Math.max(0, Math.round(((charIndex - mistakes) / (charIndex || 1)) * 100));
        
        wpmDisplay.innerText = wpm;
        accuracyDisplay.innerText = accuracy;
    }
});

loadLesson();
