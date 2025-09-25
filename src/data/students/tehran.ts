import { Student } from '../../models/user.model';
import { TEHRAN_PROFILES } from './tehran/profiles';
import { TEHRAN_OPT_RESULTS } from './tehran/opt-results';
import { TEHRAN_NARRATIVE_RESULTS } from './tehran/narrative-results';

/**
 * تجمیع‌کننده داده‌های نرمالایزشده برای زبان‌آموزان تهران.
 * این فایل پروفایل‌ها، نتایج آزمون OPT و نتایج آزمون Narrative را از فایل‌های مجزا
 * خوانده و آن‌ها را با یکدیگر ترکیب (Join) می‌کند تا یک مدل نمایش (View Model) کامل از `Student`
 * برای استفاده در لایه‌های بالاتر برنامه (مانند سرویس‌ها و کامپوننت‌ها) ایجاد کند.
 * این رویکرد، ضمن حفظ ساختار تفکیک‌شده و مقیاس‌پذیر داده‌ها، یکپارچگی لازم برای برنامه را فراهم می‌کند.
 */

// برای دسترسی سریع، نتایج را در ساختار Map قرار می‌دهیم
const optResultsMap = new Map(TEHRAN_OPT_RESULTS.map(r => [r.studentId, r]));
const narrativeResultsMap = new Map(TEHRAN_NARRATIVE_RESULTS.map(r => [r.studentId, r]));

// داده‌های تفکیک‌شده را به مدل نمایش `Student` تبدیل می‌کنیم
export const TEHRAN_STUDENTS: Student[] = TEHRAN_PROFILES.map(profile => {
  const optResult = optResultsMap.get(profile.id);
  const narrativeResult = narrativeResultsMap.get(profile.id);

  return {
    ...profile,
    optScore: optResult?.score ?? null,
    optAnswers: optResult?.answers ?? null,
    optExamId: optResult?.examId ?? null,
    narrativeScore: narrativeResult?.score ?? null,
    narrativeText: narrativeResult?.text ?? null,
    narrativeFeedback: narrativeResult?.feedback ?? null,
  };
});
