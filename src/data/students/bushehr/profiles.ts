import { StudentProfile } from '../../../models/user.model';

/**
 * منبع واحد حقیقت (Single Source of Truth) برای پروفایل‌های زبان‌آموزان بوشهر.
 * این فایل تمام اطلاعات هویتی و وضعیت هر زبان‌آموز را به صورت متمرکز نگهداری می‌کند.
 */
export const BUSHEHR_PROFILES: StudentProfile[] = [
  // --- Profiles from Preliminary Stage ---
  { id: 137, name: 'جاسم رفعتی', age: 22, city: 'بوشهر', level: 'B1', teacherId: 116, stage: 'Preliminary', treatmentGroup: null },
  { id: 138, name: 'فائزه کمالی', age: 19, city: 'بوشهر', level: 'A2', teacherId: 116, stage: 'Preliminary', treatmentGroup: null },
  { id: 139, name: 'مهدی سعیدی', age: 28, city: 'بوشهر', level: 'B2', teacherId: 116, stage: 'Preliminary', treatmentGroup: null },
  { id: 140, name: 'لیلا شفیعی', age: 24, city: 'بوشهر', level: 'B1', teacherId: 116, stage: 'Preliminary', treatmentGroup: null },
  { id: 142, name: 'سمیرا دشتی', age: 20, city: 'بوشهر', level: 'A2', teacherId: 116, stage: 'Preliminary', treatmentGroup: null },
  { id: 143, name: 'ایوب انصاری', age: 26, city: 'بوشهر', level: 'B2', teacherId: 116, stage: 'Preliminary', treatmentGroup: null },
  { id: 144, name: 'زهره دیلمی', age: 23, city: 'بوشهر', level: 'B1', teacherId: 116, stage: 'Preliminary', treatmentGroup: null },
  { id: 146, name: 'قاسم صفایی', age: 29, city: 'بوشهر', level: 'B1', teacherId: 116, stage: 'Preliminary', treatmentGroup: null },
  { id: 147, name: 'مرجان صداقت', age: 18, city: 'بوشهر', level: 'A2', teacherId: 116, stage: 'Preliminary', treatmentGroup: null },
  { id: 149, name: 'آمنه دشتی', age: 21, city: 'بوشهر', level: 'B1', teacherId: 116, stage: 'Preliminary', treatmentGroup: null },
  { id: 150, name: 'محسن رضایی', age: 25, city: 'بوشهر', level: 'B2', teacherId: 117, stage: 'Preliminary', treatmentGroup: null },
  { id: 151, name: 'عاطفه موسوی', age: 22, city: 'بوشهر', level: 'B1', teacherId: 117, stage: 'Preliminary', treatmentGroup: null },
  { id: 153, name: 'نرگس محمدی', age: 19, city: 'بوشهر', level: 'A2', teacherId: 117, stage: 'Preliminary', treatmentGroup: null },
  { id: 154, name: 'یونس ابراهیمی', age: 26, city: 'بوشهر', level: 'B1', teacherId: 117, stage: 'Preliminary', treatmentGroup: null },
  { id: 156, name: 'اسماعیل حیاتی', age: 27, city: 'بوشهر', level: 'B1', teacherId: 117, stage: 'Preliminary', treatmentGroup: null },
  { id: 157, name: 'فریبا سعادت', age: 20, city: 'بوشهر', level: 'B1', teacherId: 117, stage: 'Preliminary', treatmentGroup: null },
  { id: 158, name: 'کریم شریفی', age: 32, city: 'بوشهر', level: 'B2', teacherId: 117, stage: 'Preliminary', treatmentGroup: null },
  { id: 160, name: 'صادق براتی', age: 21, city: 'بوشهر', level: 'A2', teacherId: 117, stage: 'Preliminary', treatmentGroup: null },
  { id: 161, name: 'شهلا کاویانی', age: 25, city: 'بوشهر', level: 'B1', teacherId: 117, stage: 'Preliminary', treatmentGroup: null },
  { id: 162, name: 'ماجد فاطمی', age: 29, city: 'بوشهر', level: 'B2', teacherId: 117, stage: 'Preliminary', treatmentGroup: null },

  // --- Profiles from Advanced Stage ---
  { id: 6, name: 'مریم موسوی', age: 42, city: 'بوشهر', level: 'C2', teacherId: 116, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 141, name: 'عبدالله امیری', age: 35, city: 'بوشهر', level: 'C1', teacherId: 116, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 145, name: 'خدیجه رئیسی', age: 31, city: 'بوشهر', level: 'B2', teacherId: 116, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 152, name: 'رضا فرخی', age: 30, city: 'بوشهر', level: 'C1', teacherId: 117, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 155, name: 'شیرین بهبهانی', age: 23, city: 'بوشهر', level: 'B2', teacherId: 117, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 163, name: 'افسانه اهرمی', age: 23, city: 'بوشهر', level: 'B2', teacherId: 117, stage: 'Advanced', treatmentGroup: 'NLP' },

  // --- Profiles from Completed Stage ---
  { id: 148, name: 'سلمان راستگو', age: 38, city: 'بوشهر', level: 'C1', teacherId: 116, stage: 'Completed', treatmentGroup: null },
  { id: 159, name: 'گلنار وحدتی', age: 24, city: 'بوشهر', level: 'C1', teacherId: 117, stage: 'Completed', treatmentGroup: null },
];
