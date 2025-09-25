import { StudentProfile } from '../../../models/user.model';

/**
 * منبع واحد حقیقت (Single Source of Truth) برای پروفایل‌های زبان‌آموزان شاهرود.
 * این فایل تمام اطلاعات هویتی و وضعیت هر زبان‌آموز را به صورت متمرکز نگهداری می‌کند.
 */
export const SHAHROOD_PROFILES: StudentProfile[] = [
  // --- Profiles from Preliminary Stage ---
  { id: 111, name: 'مریم اکبری', age: 22, city: 'شاهرود', level: 'B1', teacherId: 110, stage: 'Preliminary', treatmentGroup: null },
  { id: 116, name: 'محمد رضایی', age: 24, city: 'شاهرود', level: 'B1', teacherId: 109, stage: 'Preliminary', treatmentGroup: null },
  { id: 119, name: 'نگار جعفری', age: 17, city: 'شاهرود', level: 'A2', teacherId: 110, stage: 'Preliminary', treatmentGroup: null },
  { id: 121, name: 'آرزو شریفی', age: 26, city: 'شاهرود', level: 'C1', teacherId: 110, stage: 'Preliminary', treatmentGroup: null },
  { id: 122, name: 'پویا صالحی', age: 20, city: 'شاهرود', level: 'B1', teacherId: 109, stage: 'Preliminary', treatmentGroup: null },
  { id: 125, name: 'دنیا عزیزی', age: 19, city: 'شاهرود', level: 'A2', teacherId: 110, stage: 'Preliminary', treatmentGroup: null },
  { id: 128, name: 'مهران کریمی', age: 28, city: 'شاهرود', level: 'B2', teacherId: 109, stage: 'Preliminary', treatmentGroup: null },
  { id: 131, name: 'یلدا جلالی', age: 18, city: 'شاهرود', level: 'B1', teacherId: 110, stage: 'Preliminary', treatmentGroup: null },
  { id: 133, name: 'هستی صادقی', age: 23, city: 'شاهرود', level: 'B1', teacherId: 110, stage: 'Preliminary', treatmentGroup: null },
  { id: 134, name: 'آرمان نجفی', age: 31, city: 'شاهرود', level: 'B2', teacherId: 109, stage: 'Preliminary', treatmentGroup: null },
  { id: 112, name: 'علی بیات', age: 19, city: 'شاهرود', level: 'A2', teacherId: 109, stage: 'Preliminary', treatmentGroup: null },
  { id: 113, name: 'زهرا کاظمی', age: 25, city: 'شاهرود', level: 'B2', teacherId: 110, stage: 'Preliminary', treatmentGroup: null },
  { id: 118, name: 'حمید احمدی', age: 29, city: 'شاهرود', level: 'B2', teacherId: 109, stage: 'Preliminary', treatmentGroup: null },
  { id: 124, name: 'کامران یوسفی', age: 33, city: 'شاهرود', level: 'B2', teacherId: 109, stage: 'Preliminary', treatmentGroup: null },
  { id: 127, name: 'غزل رحیمی', age: 21, city: 'شاهرود', level: 'B1', teacherId: 110, stage: 'Preliminary', treatmentGroup: null },
  { id: 130, name: 'سینا موسوی', age: 20, city: 'شاهرود', level: 'A2', teacherId: 109, stage: 'Preliminary', treatmentGroup: null },
  { id: 136, name: 'شهریار قربانی', age: 26, city: 'شاهرود', level: 'B2', teacherId: 109, stage: 'Preliminary', treatmentGroup: null },
  { id: 7, name: 'حسین جلالی', age: 14, city: 'شاهرود', level: 'A1', teacherId: 109, stage: 'Preliminary', treatmentGroup: null },
  { id: 115, name: 'فاطمه حسینی', age: 18, city: 'شاهرود', level: 'A2', teacherId: 110, stage: 'Preliminary', treatmentGroup: null },
  { id: 123, name: 'شیما مرادی', age: 22, city: 'شاهرود', level: 'B2', teacherId: 110, stage: 'Preliminary', treatmentGroup: null },
  { id: 132, name: 'عرفان محمودی', age: 27, city: 'شاهرود', level: 'C1', teacherId: 109, stage: 'Preliminary', treatmentGroup: null },
  
  // --- Profiles from Advanced Stage ---
  { id: 114, name: 'سروش قاسمی', age: 27, city: 'شاهرود', level: 'C1', teacherId: 109, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 120, name: 'سیمین بهبهانی', age: 30, city: 'شاهرود', level: 'C1', teacherId: 110, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 129, name: 'فریدون مشیری', age: 35, city: 'شاهرود', level: 'C2', teacherId: 109, stage: 'Advanced', treatmentGroup: 'NLP' },

  // --- Profiles from Completed Stage ---
  { id: 126, name: 'کاوه احمدی', age: 30, city: 'شاهرود', level: 'C1', teacherId: 109, stage: 'Completed', treatmentGroup: null },
  { id: 135, name: 'سارا سعادت', age: 28, city: 'شاهرود', level: 'C1', teacherId: 110, stage: 'Completed', treatmentGroup: null },
];
