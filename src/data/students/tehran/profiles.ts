import { StudentProfile } from '../../../models/user.model';

/**
 * منبع واحد حقیقت (Single Source of Truth) برای پروفایل‌های زبان‌آموزان تهران.
 * این فایل تمام اطلاعات هویتی و وضعیت هر زبان‌آموز را بدون توجه به نتایج آزمون‌هایشان،
 * به صورت متمرکز نگهداری می‌کند.
 */
export const TEHRAN_PROFILES: StudentProfile[] = [
  // --- Preliminary Stage Students ---
  { id: 5, name: 'علی اکبری', age: 25, city: 'تهران', level: 'B1', teacherId: 102, stage: 'Preliminary', treatmentGroup: null },
  { id: 11, name: 'رضا محمودی', age: 18, city: 'تهران', level: 'B1', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 13, name: 'آرش امینی', age: 24, city: 'تهران', level: 'B1', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 14, name: 'پریا محمدی', age: 19, city: 'تهران', level: 'A2', teacherId: 102, stage: 'Preliminary', treatmentGroup: null },
  { id: 18, name: 'گلاره نادری', age: 18, city: 'تهران', level: 'A2', teacherId: 103, stage: 'Preliminary', treatmentGroup: null },
  { id: 19, name: 'بردیا مرادی', age: 26, city: 'تهران', level: 'B2', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 20, name: 'رویا حسنی', age: 22, city: 'تهران', level: 'B1', teacherId: 102, stage: 'Preliminary', treatmentGroup: null },
  { id: 21, name: 'نیما افشار', age: 20, city: 'تهران', level: 'A1', teacherId: 103, stage: 'Preliminary', treatmentGroup: null },
  { id: 22, name: 'سحر قاسمی', age: 27, city: 'تهران', level: 'B2', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 24, name: 'یلدا کریمی', age: 16, city: 'تهران', level: 'A2', teacherId: 103, stage: 'Preliminary', treatmentGroup: null },
  { id: 25, name: 'شهاب تهرانی', age: 25, city: 'تهران', level: 'B1', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 27, name: 'رامین نجفی', age: 23, city: 'تهران', level: 'B1', teacherId: 103, stage: 'Preliminary', treatmentGroup: null },
  { id: 28, name: 'رکسانا مهدوی', age: 19, city: 'تهران', level: 'A2', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 30, name: 'ماندانا اکبری', age: 26, city: 'تهران', level: 'B1', teacherId: 103, stage: 'Preliminary', treatmentGroup: null },
  { id: 31, name: 'بهرام قاسمی', age: 22, city: 'تهران', level: 'B2', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 32, name: 'تارا اسدی', age: 20, city: 'تهران', level: 'B1', teacherId: 102, stage: 'Preliminary', treatmentGroup: null },
  { id: 34, name: 'هدیه رضایی', age: 17, city: 'تهران', level: 'A2', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 35, name: 'سامان احمدی', age: 28, city: 'تهران', level: 'B1', teacherId: 102, stage: 'Preliminary', treatmentGroup: null },
  { id: 36, name: 'کیمیا جعفری', age: 24, city: 'تهران', level: 'B2', teacherId: 103, stage: 'Preliminary', treatmentGroup: null },
  { id: 37, name: 'اشکان مولایی', age: 21, city: 'تهران', level: 'B1', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 38, name: 'دریا محمودی', age: 19, city: 'تهران', level: 'A2', teacherId: 102, stage: 'Preliminary', treatmentGroup: null },
  { id: 40, name: 'بهار بیات', age: 23, city: 'تهران', level: 'B1', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 44, name: 'مینا خالقی', age: 18, city: 'تهران', level: 'A2', teacherId: 102, stage: 'Preliminary', treatmentGroup: null },
  { id: 45, name: 'اردوان شمس', age: 27, city: 'تهران', level: 'B1', teacherId: 103, stage: 'Preliminary', treatmentGroup: null },
  { id: 46, name: 'شیوا الماسی', age: 24, city: 'تهران', level: 'B2', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 47, name: 'فرهاد پایدار', age: 22, city: 'تهران', level: 'B1', teacherId: 102, stage: 'Preliminary', treatmentGroup: null },
  { id: 48, name: 'نگین عباسی', age: 20, city: 'تهران', level: 'B1', teacherId: 103, stage: 'Preliminary', treatmentGroup: null },
  { id: 51, name: 'سهیل روشن', age: 19, city: 'تهران', level: 'A2', teacherId: 103, stage: 'Preliminary', treatmentGroup: null },
  { id: 52, name: 'آوا محمودیان', age: 22, city: 'تهران', level: 'B1', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 55, name: 'کیارش سعیدی', age: 20, city: 'تهران', level: 'A2', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },
  { id: 56, name: 'هلیا کمالی', age: 23, city: 'تهران', level: 'B1', teacherId: 102, stage: 'Preliminary', treatmentGroup: null },
  { id: 57, name: 'ماهان پهلوی', age: 26, city: 'تهران', level: 'B2', teacherId: 103, stage: 'Preliminary', treatmentGroup: null },
  { id: 58, name: 'دنیز فرهمند', age: 21, city: 'تهران', level: 'B1', teacherId: 101, stage: 'Preliminary', treatmentGroup: null },

  // --- Advanced Stage Students ---
  { id: 1, name: 'امیرعباس جعفری', age: 22, city: 'تهران', level: 'B2', teacherId: 101, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 15, name: 'کاوه اسلامی', age: 29, city: 'تهران', level: 'B2', teacherId: 103, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 16, name: 'ترانه صادقی', age: 21, city: 'تهران', level: 'B1', teacherId: 101, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 26, name: 'آتوسا عزیزی', age: 28, city: 'تهران', level: 'B2', teacherId: 102, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 29, name: 'کیان صالحی', age: 35, city: 'تهران', level: 'C1', teacherId: 102, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 33, name: 'پیمان حیدری', age: 30, city: 'تهران', level: 'B2', teacherId: 103, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 39, name: 'داریوش کاظمی', age: 40, city: 'تهران', level: 'C1', teacherId: 103, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 41, name: 'بابک رسولی', age: 29, city: 'تهران', level: 'B2', teacherId: 102, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 42, name: 'سپیده وحدتی', age: 26, city: 'تهران', level: 'B2', teacherId: 103, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 49, name: 'مازیار صلاحی', age: 36, city: 'تهران', level: 'C1', teacherId: 101, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 50, name: 'آناهیتا زمانی', age: 25, city: 'تهران', level: 'B2', teacherId: 102, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 53, name: 'پرهام جلیلی', age: 28, city: 'تهران', level: 'B2', teacherId: 102, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 54, name: 'پانته‌آ بهرامی', age: 31, city: 'تهران', level: 'C1', teacherId: 103, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 60, name: 'آیسان کریمی', age: 24, city: 'تهران', level: 'B2', teacherId: 103, stage: 'Advanced', treatmentGroup: 'NLP' },
  
  // --- Completed Stage Students ---
  { id: 17, name: 'سینا شریفی', age: 33, city: 'تهران', level: 'C1', teacherId: 102, stage: 'Completed', treatmentGroup: null },
  { id: 23, name: 'مانی یوسفی', age: 31, city: 'تهران', level: 'C1', teacherId: 102, stage: 'Completed', treatmentGroup: null },
  { id: 43, name: 'کوروش اسماعیلی', age: 32, city: 'تهران', level: 'C1', teacherId: 101, stage: 'Completed', treatmentGroup: null },
  { id: 59, name: 'رادین وثوقی', age: 29, city: 'تهران', level: 'C1', teacherId: 102, stage: 'Completed', treatmentGroup: null },
];
