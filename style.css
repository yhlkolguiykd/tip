const lessons = [
    "ث ث ث ه", "نمک متن تکان کتان", "کمان مکتوب تمک متین", "بلبل کابل بابل بتن",
    "سیب سیم بیس بیست", "شیر شاد شام شاه", "گچ گام کلاه کباب", "فیلم قلم فرش قند",
    "غار عقل عشق علم", "کاغذ باغ چراغ داغ", "صبح جامه طلا طناب", "سار دار اسرار سیب",
    "بار برف برگ باران", "کار کارمند کوه کارگاه", "روز روزگار راز رود", "دست داستان دوست دارا"
];

const fingerMapping = {
    'ض': { id: 'path-l-pinky', name: 'انگشت کوچک دست چپ' },
    'ص': { id: 'path-l-ring', name: 'انگشت حلقه دست چپ' },
    'ث': { id: 'path-l-middle', name: 'انگشت وسط دست چپ' },
    'ق': { id: 'path-l-index', name: 'انگشت اشاره دست چپ' },
    'ف': { id: 'path-l-index', name: 'انگشت اشاره دست چپ' },

    'ش': { id: 'path-l-pinky', name: 'انگشت کوچک دست چپ' },
    'س': { id: 'path-l-ring', name: 'انگشت حلقه دست چپ' },
    'ی': { id: 'path-l-middle', name: 'انگشت وسط دست چپ' },
    'ب': { id: 'path-l-index', name: 'انگشت اشاره دست چپ' },
    'ل': { id: 'path-l-index', name: 'انگشت اشاره دست چپ' },

    'ظ': { id: 'path-l-pinky', name: 'انگشت کوچک دست چپ' },
    'ط': { id: 'path-l-ring', name: 'انگشت حلقه دست چپ' },
    'ز': { id: 'path-l-middle', name: 'انگشت وسط دست چپ' },
    'ر': { id: 'path-l-index', name: 'انگشت اشاره دست چپ' },
    'ذ': { id: 'path-l-index', name: 'انگشت اشاره دست چپ' },

    'غ': { id: 'path-r-index', name: 'انگشت اشاره دست راست' },
    'ع': { id: 'path-r-index', name: 'انگشت اشاره دست راست' },
    'ه': { id: 'path-r-middle', name: 'انگشت وسط دست راست' },
    'خ': { id: 'path-r-ring', name: 'انگشت حلقه دست راست' },
    'ح': { id: 'path-r-pinky', name: 'انگشت کوچک دست راست' },
    'ج': { id: 'path-r-pinky', name: 'انگشت کوچک دست راست' },
    'چ': { id: 'path-r-pinky', name: 'انگشت کوچک دست راست' },

    'ا': { id: 'path-r-index', name: 'انگشت اشاره دست راست' },
    'ت': { id: 'path-r-index', name: 'انگشت اشاره دست راست' },
    'ن': { id: 'path-r-middle', name: 'انگشت وسط دست راست' },
    'م': { id: 'path-r-ring', name: 'انگشت حلقه دست راست' },
    'ک': { id: 'path-r-pinky', name: 'انگشت کوچک دست راست' },
    'گ': { id: 'path-r-pinky', name: 'انگشت کوچک دست راست' },

    'د': { id: 'path-r-index', name: 'انگشت اشاره دست راست' },
    'پ': { id: 'path-r-index', name: 'انگشت اشاره دست راست' },
    'و': { id: 'path-r-middle', name: 'انگشت وسط دست راست' },

    ' ': { id: 'path-r-thumb', name: 'انگشت شست' }
};

let currentLesson = 0;
let charIndex = 0;
let mistakes = 0;
let startTime = null;
let timerInterval = null;
let completedLessons = JSON.parse(localStorage.getItem('typing_completed') || '[]');

function switchTab(tabName) {
    const tabs = ['home', 'practice', 'progress'];
    tabs.forEach((tab, index) => {
        const content = document.getElementById(`${tab}-tab`);
        const btn = document.querySelectorAll('.nav-btn')[index];
        if (tab === tabName) {
            content.classList.add('active');
            btn.classList.add('active');
        } else {
            content.classList.remove('active');
            btn.classList.remove('active');
        }
    });

    if (tabName === 'home') renderGrid();
    if (tabName === 'progress') updateProgressUI();
}

function renderGrid() {
    const grid = document.getElementById('lessons-grid');
    if (!grid) return;
    grid.innerHTML = '';
    lessons.forEach((_, index) => {
        const isDone = completedLessons.includes(index);
        const card = document.createElement('div');
        card.className = `lesson-card ${isDone ? 'completed' : ''}`;
        card.onclick = () => selectLesson(index);
        card.innerHTML = `<div>درس ${index + 1}</div>`;
        grid.appendChild(card);
    });
}

function selectLesson(index) {
    currentLesson = index;
    switchTab('practice');
    loadLesson();
}

function updateProgressUI() {
    const count = completedLessons.length;
    const percent = Math.round((count / lessons.length) * 100);
    document.getElementById('progress-bar').style.width = `${percent}%`;
    document.getElementById('progress-text').innerText = `${percent}٪ تکمیل شده است`;
    document.getElementById('completed-count').innerText = count;
}

function resetProgress() {
    if (confirm('پاک کردن مراحل؟')) {
        completedLessons = [];
        localStorage.removeItem('typing_completed');
        updateProgressUI();
        renderGrid();
    }
}

function loadLesson() {
    const container = document.getElementById('cards-container');
    if (!container) return;

    container.innerHTML = '';
    charIndex = 0;
    mistakes = 0;
    startTime = null;
    clearInterval(timerInterval);
    document.getElementById('time').innerText = "00:00";

    const text = lessons[currentLesson];
    text.split('').forEach((char, index) => {
        const card = document.createElement('div');
        card.className = 'char-card';
        card.innerText = char === ' ' ? '␣' : char;
        if (index === 0) card.classList.add('current');
        container.appendChild(card);
    });

    updateGuide(text[0]);
}

function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(() => {
        const seconds = Math.floor((new Date() - startTime) / 1000);
        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        document.getElementById('time').innerText = `${m}:${s}`;
    }, 1000);
}

function updateGuide(char) {
    document.querySelectorAll('.key').forEach(k => k.classList.remove('active'));
    document.querySelectorAll('.finger-line').forEach(f => f.classList.remove('active'));

    const keyChar = char === ' ' ? ' ' : char;
    const keyElement = document.querySelector(`.key[data-key="${keyChar}"]`);
    if (keyElement) {
        keyElement.classList.add('active');
        alignFingerToKey(char, keyElement);
    }

    const info = fingerMapping[char];
    if (info) {
        const line = document.getElementById(info.id);
        if (line) line.classList.add('active');
        document.getElementById('hand-hint').innerText = `حرف «${char}» ⬅ با ${info.name}`;
    }
}

// تنظیم دقیق مقصد انیمیشن خط انگشت روی کیبورد
function alignFingerToKey(char, keyElement) {
    const info = fingerMapping[char];
    if (!info) return;

    const line = document.getElementById(info.id);
    if (!line) return;

    const keyboardWrapper = document.querySelector('.keyboard-wrapper');
    const keyRect = keyElement.getBoundingClientRect();
    const wrapRect = keyboardWrapper.getBoundingClientRect();

    const targetX = (keyRect.left - wrapRect.left + keyRect.width / 2) * (700 / wrapRect.width);
    const targetY = (keyRect.top - wrapRect.top + keyRect.height / 2) * (350 / wrapRect.height);

    const d = line.getAttribute('d');
    const parts = d.split(' ');
    
    // جا به جایی انتهای خط به مرکز کلید هدف
    parts[parts.length - 2] = targetX.toFixed(0);
    parts[parts.length - 1] = targetY.toFixed(0);
    line.setAttribute('d', parts.join(' '));
}

document.addEventListener('keydown', (e) => {
    const practiceTab = document.getElementById('practice-tab');
    if (!practiceTab || !practiceTab.classList.contains('active')) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    const text = lessons[currentLesson];
    if (charIndex >= text.length) return;

    if (!startTime) startTimer();

    const typedChar = e.key;
    const currentChar = text[charIndex];
    const cards = document.querySelectorAll('.char-card');

    if (e.key === ' ') e.preventDefault();

    if (typedChar === currentChar) {
        cards[charIndex].classList.remove('current');
        cards[charIndex].classList.add('correct');
        charIndex++;

        if (charIndex < text.length) {
            cards[charIndex].classList.add('current');
            updateGuide(text[charIndex]);
        } else {
            clearInterval(timerInterval);
            if (!completedLessons.includes(currentLesson)) {
                completedLessons.push(currentLesson);
                localStorage.setItem('typing_completed', JSON.stringify(completedLessons));
            }
            setTimeout(() => {
                alert(`آفرین! درس ${currentLesson + 1} کامل شد.`);
                currentLesson = (currentLesson + 1) % lessons.length;
                loadLesson();
            }, 100);
        }
    } else if (e.key.length === 1 && e.key !== 'Shift') {
        cards[charIndex].classList.add('incorrect');
        mistakes++;
    }

    if (startTime) {
        const timeElapsed = (new Date() - startTime) / 60000;
        const wpm = Math.round((charIndex / 5) / (timeElapsed || 0.01)) || 0;
        const accuracy = Math.max(0, Math.round(((charIndex - mistakes) / (charIndex || 1)) * 100));
        
        document.getElementById('wpm').innerText = wpm;
        document.getElementById('accuracy').innerText = accuracy;
    }
});

renderGrid();
loadLesson();
