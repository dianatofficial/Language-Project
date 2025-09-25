import { StudentProfile } from '../../../models/user.model';

/**
 * منبع واحد حقیقت (Single Source of Truth) برای پروفایل‌های زبان‌آموزان اراک.
 * این فایل تمام اطلاعات هویتی و وضعیت هر زبان‌آموز را به صورت متمرکز نگهداری می‌کند.
 */
export const ARAK_PROFILES: StudentProfile[] = [
  // --- Profiles from Preliminary Stage ---
  { id: 600, name: 'محسن افشار', age: 23, city: 'اراک', level: 'B1', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  { id: 601, name: 'نگین محمودی', age: 19, city: 'اراک', level: 'A1', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  { id: 602, name: 'کیانوش صادقی', age: 21, city: 'اراک', level: 'A2', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  { id: 603, name: 'آتوسا بیات', age: 25, city: 'اراک', level: 'B1', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  { id: 604, name: 'فرید کریمی', age: 28, city: 'اراک', level: 'B2', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  { id: 605, name: 'رویا حسینی', age: 20, city: 'اراک', level: 'A2', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  { id: 606, name: 'بهنام نادری', age: 24, city: 'اراک', level: 'B1', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  { id: 607, name: 'شادی موسوی', age: 27, city: 'اراک', level: 'B2', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  { id: 608, name: 'جواد اکبری', age: 19, city: 'اراک', level: 'A2', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  { id: 609, name: 'الهام جعفری', age: 26, city: 'اراک', level: 'B1', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  { id: 610, name: 'سعید رضایی', age: 23, city: 'اراک', level: 'B1', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  { id: 611, name: 'پریسا قاسمی', age: 29, city: 'اراک', level: 'B2', teacherId: 112, stage: 'Preliminary', treatmentGroup: null },
  
  // --- Profiles from Advanced Stage ---
  { id: 612, name: 'کامران صالحی', age: 31, city: 'اراک', level: 'B2', teacherId: 112, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 613, name: 'مریم شریفی', age: 33, city: 'اراک', level: 'C1', teacherId: 112, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 614, name: 'حمیدرضا امیری', age: 35, city: 'اراک', level: 'C1', teacherId: 112, stage: 'Advanced', treatmentGroup: 'NLP' },

  // --- Profiles from Completed Stage ---
  { id: 615, name: 'زهرا کاظمی', age: 28, city: 'اراک', level: 'B2', teacherId: 112, stage: 'Completed', treatmentGroup: null },
  { id: 616, name: 'شهاب نوری', age: 38, city: 'اراک', level: 'C1', teacherId: 112, stage: 'Completed', treatmentGroup: null },
  { id: 617, name: 'افسانه محمدی', age: 41, city: 'اراک', level: 'C2', teacherId: 112, stage: 'Completed', treatmentGroup: null },
];
