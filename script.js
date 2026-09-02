const API_URL = "http://localhost:5000/api";
const currentUser = "mahdi"; // نام کاربر فعال

// گرفتن مراحل از سرور واقعی
async function fetchLessons() {
    const res = await fetch(`${API_URL}/lessons`);
    const lessons = await res.json();
    return lessons;
}

// گرفتن پیشرفت واقعی از سرور
async function loadUserProgress() {
    const res = await fetch(`${API_URL}/progress/${currentUser}`);
    const data = await res.json();
    return data.completedLessons || [];
}

// ذخیره نتیجه تمرین در سرور پس از پایان مرحله
async function saveLessonResult(lessonId, wpm, accuracy) {
    await fetch(`${API_URL}/progress/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: currentUser,
            lessonId: lessonId,
            wpm: wpm,
            accuracy: accuracy
        })
    });
}
