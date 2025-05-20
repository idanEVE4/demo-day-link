const translations = {
  he: {
    "home-link": "דף ראשי",
    "gad7-link": "חרדה",
    "pcl5-link": "פוסט טראומה",
    "phq9-link": "דיכאון",
    "ai-link": "תמיכה AI",
    "meditations-link": "מדיטציה",
    "mood-tracker-link": "מעקב רגשות",
    "settings-link": "הגדרות"
  },
  en: {
    "home-link": "Home",
    "gad7-link": "Anxiety",
    "pcl5-link": "PTSD",
    "phq9-link": "Depression",
    "ai-link": "AI Support",
    "meditations-link": "Meditation",
    "mood-tracker-link": "Mood Tracker",
    "settings-link": "Settings"
  },
  ar: {
    "home-link": "الرئيسية",
    "gad7-link": "القلق",
    "pcl5-link": "اضطراب ما بعد الصدمة",
    "phq9-link": "الاكتئاب",
    "ai-link": "دعم الذكاء الاصطناعي",
    "meditations-link": "التأمل",
    "mood-tracker-link": "تتبع المزاج",
    "settings-link": "الإعدادات"
  }
};

function applyTheme(theme) {
  document.body.className = "";
  document.body.classList.add(theme);
}

function applyLanguage(lang) {
  const t = translations[lang];
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) el.textContent = t[key];
  }
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : (lang === 'he' ? 'rtl' : 'ltr');
}

function loadPreferences() {
  const theme = localStorage.getItem("theme") || "light";
  const lang = localStorage.getItem("language") || "he";
  applyTheme(theme);
  applyLanguage(lang);
}

// טען את ההגדרות בעת עליית הדף
window.addEventListener("DOMContentLoaded", loadPreferences);
