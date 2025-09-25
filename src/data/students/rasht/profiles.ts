import { StudentProfile } from '../../../models/user.model';

/**
 * منبع واحد حقیقت (Single Source of Truth) برای پروفایل‌های زبان‌آموزان رشت.
 * این فایل تمام اطلاعات هویتی و وضعیت هر زبان‌آموز را به صورت متمرکز نگهداری می‌کند.
 */
export const RASHT_PROFILES: StudentProfile[] = [
  // --- Profiles from Preliminary Stage ---
  { id: 10, name: 'نگار قاسمی', age: 20, city: 'رشت', level: 'B1', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 801, name: 'گیلدا پوررضا', age: 19, city: 'رشت', level: 'A1', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 802, name: 'آریا رحیمی', age: 22, city: 'رشت', level: 'A2', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 803, name: 'تیام محمدی', age: 25, city: 'رشت', level: 'B1', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 804, name: 'کاسپین احمدی', age: 20, city: 'رشت', level: 'A2', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 805, name: 'چکامه نوری', age: 28, city: 'رشت', level: 'B2', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 806, name: 'دامون حسینی', age: 21, city: 'رشت', level: 'B1', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 807, name: 'اهورا کاظمی', age: 24, city: 'رشت', level: 'B2', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 808, name: 'باران صالحی', age: 18, city: 'رشت', level: 'A2', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 809, name: 'ترنگ کریمی', age: 23, city: 'رشت', level: 'B1', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 810, name: 'زیبا جعفری', age: 20, city: 'رشت', level: 'A2', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 811, name: 'سامان شریفی', age: 26, city: 'رشت', level: 'B1', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 812, name: 'مازیار اکبری', age: 29, city: 'رشت', level: 'B1', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 813, name: 'نیما ابراهیمی', age: 22, city: 'رشت', level: 'B1', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 814, name: 'غزل موسوی', age: 27, city: 'رشت', level: 'B2', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },
  { id: 815, name: 'کسرا مرادی', age: 31, city: 'رشت', level: 'B2', teacherId: 118, stage: 'Preliminary', treatmentGroup: null },

  // --- Profiles from Advanced Stage ---
  { id: 816, name: 'مانا یوسفی', age: 28, city: 'رشت', level: 'B2', teacherId: 118, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 817, name: 'سهند وثوقی', age: 33, city: 'رشت', level: 'C1', teacherId: 118, stage: 'Advanced', treatmentGroup: 'Autonomous' },

  // --- Profiles from Completed Stage ---
  { id: 818, name: 'والا رحمان‌زاده', age: 30, city: 'رشت', level: 'C1', teacherId: 118, stage: 'Completed', treatmentGroup: null },
  { id: 819, name: 'دریا نعمتی', age: 26, city: 'رشت', level: 'B2', teacherId: 118, stage: 'Completed', treatmentGroup: null },
];
