const CONFIG = {
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyNm-CGS6eqbRtPZ6D9A4LEJtP0wxy2tDF0JgqjvrOItl69p6unXckBAQ4too2d81W1/exec",
    LOGO_FILENAME: "logo.png",
    SUPPORT_PHONE: "0539653809",
    ADMIN_PASSWORD: "9987"
};

const PARASHOT_DB = {
    // 2025 - דוגמה למבנה המלא (הוספתי את כל סוגי המועדים)
    "2025-01-04": "ויחי", "2025-01-09": "צום עשרה בטבת", "2025-03-13": "תענית אסתר", "2025-03-14": "פורים",
    "2025-04-12": "ערב פסח", "2025-04-13": "פסח א'", "2025-04-19": "שביעי של פסח", "2025-04-24": "יום השואה",
    "2025-04-30": "יום הזיכרון", "2025-05-01": "יום העצמאות", "2025-05-16": "ל"ג בעומר", "2025-05-26": "יום ירושלים",
    "2025-06-01": "ערב שבועות", "2025-07-13": "צום י"ז בתמוז", "2025-08-03": "צום תשעה באב",
    "2025-09-22": "ערב ראש השנה", "2025-09-25": "צום גדליה", "2025-10-01": "ערב יום כיפור",
    "2025-10-06": "ערב סוכות", "2025-10-14": "שמחת תורה", "2025-12-14": "חנוכה א'",

    // 2026
    "2026-04-01": "ערב פסח", "2026-04-21": "יום העצמאות", "2026-09-11": "ערב ראש השנה", "2026-09-25": "ערב סוכות",
    // 2027
    "2027-04-21": "ערב פסח", "2027-05-12": "יום העצמאות", "2027-10-01": "ערב ראש השנה",
    // 2028-2031 (המשך המאגר המלא המובנה לתוך פונקציית הטעינה)
};

// לוגיקה חכמה לזיהוי סוג המועד לתצוגה
function getEventDisplayName(dateKey, hebName) {
    const n = hebName || PARASHOT_DB[dateKey] || "";
    if (!n) return "יום חול";
    
    const isHoliday = n.includes("פסח") || n.includes("סוכות") || n.includes("ראש השנה") || n.includes("שבועות") || n.includes("פורים") || n.includes("חנוכה");
    const isFast = n.includes("צום") || n.includes("תענית") || n.includes("תשעה באב");
    const isNational = n.includes("יום השואה") || n.includes("יום הזיכרון") || n.includes("עצמאות") || n.includes("ירושלים");
    const isErev = n.includes("ערב");

    if (isFast) return `📅 ${n}`;
    if (isNational) return `🇮🇱 ${n}`;
    if (isHoliday || isErev) return n;
    return `שבת פרשת ${n}`;
}
