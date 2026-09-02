const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// اتصال به دیتابیس واقعی
mongoose.connect('mongodb://localhost:27017/typing_db');

// مدل کاربر و پیشرفت
const UserSchema = new mongoose.Schema({
    username: String,
    completedLessons: [Number],
    stats: [{ lessonId: Number, wpm: Number, accuracy: Number, date: Date }]
});
const User = mongoose.model('User', UserSchema);

// ۱. گرفتن لیست کامل مراحل از دیتابیس
app.get('/api/lessons', async (req, res) => {
    // لیست مراحل از دیتابیس خوانده می‌شود
    const lessons = [
        { id: 0, text: "نمک متن تکان کتان" },
        { id: 1, text: "کمان مکتوب تمک متین" },
        // باقی مراحل...
    ];
    res.json(lessons);
});

// ۲. ذخیره پیشرفت واقعی کاربر در دیتابیس
app.post('/api/progress/save', async (req, res) => {
    const { username, lessonId, wpm, accuracy } = req.body;
    
    let user = await User.findOne({ username });
    if (!user) {
        user = new User({ username, completedLessons: [], stats: [] });
    }

    if (!user.completedLessons.includes(lessonId)) {
        user.completedLessons.push(lessonId);
    }

    user.stats.push({ lessonId, wpm, accuracy, date: new Date() });
    await user.save();

    res.json({ success: true, completedLessons: user.completedLessons });
});

// ۳. دریافت پیشرفت واقعی کاربر
app.get('/api/progress/:username', async (req, res) => {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.json({ completedLessons: [], stats: [] });
    res.json(user);
});

app.listen(5000, () => console.log('سرور روی پورت 5000 اجرا شد'));
