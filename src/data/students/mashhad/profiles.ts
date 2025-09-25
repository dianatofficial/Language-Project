import { StudentProfile } from '../../../models/user.model';

/**
 * منبع واحد حقیقت (Single Source of Truth) برای پروفایل‌های زبان‌آموزان مشهد.
 * این فایل تمام اطلاعات هویتی و وضعیت هر زبان‌آموز را به صورت متمرکز نگهداری می‌کند.
 */
export const MASHHAD_PROFILES: StudentProfile[] = [
  // --- Profiles from Preliminary Stage ---
  { id: 4, name: 'زهرا رضایی', age: 19, city: 'مشهد', level: 'A2', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 401, name: 'علی حسینی', age: 18, city: 'مشهد', level: 'A1', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 402, name: 'سارا محمدی', age: 20, city: 'مشهد', level: 'A2', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 403, name: 'رضا احمدی', age: 25, city: 'مشهد', level: 'B1', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 404, name: 'فاطمه کریمی', age: 23, city: 'مشهد', level: 'B2', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 405, name: 'محمد جعفری', age: 21, city: 'مشهد', level: 'A2', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 406, name: 'مریم نوری', age: 26, city: 'مشهد', level: 'B1', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 407, name: 'حسن رضایی', age: 29, city: 'مشهد', level: 'B1', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 408, name: 'زهرا موسوی', age: 27, city: 'مشهد', level: 'B2', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 409, name: 'علی اکبری', age: 19, city: 'مشهد', level: 'A2', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 410, name: 'سارا قاسمی', age: 24, city: 'مشهد', level: 'B1', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 411, name: 'محمد حسنی', age: 30, city: 'مشهد', level: 'B1', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 412, name: 'فاطمه عزیزی', age: 22, city: 'مشهد', level: 'B2', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 413, name: 'علی صالحی', age: 28, city: 'مشهد', level: 'B1', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 414, name: 'سارا ابراهیمی', age: 26, city: 'مشهد', level: 'B2', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  { id: 415, name: 'محمد مهدوی', age: 32, city: 'مشهد', level: 'C1', teacherId: 108, stage: 'Preliminary', treatmentGroup: null },
  
  // --- Profiles from Advanced Stage ---
  { id: 416, name: 'فاطمه رحیمی', age: 25, city: 'مشهد', level: 'B2', teacherId: 108, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 417, name: 'علی شفیعی', age: 34, city: 'مشهد', level: 'C1', teacherId: 108, stage: 'Advanced', treatmentGroup: 'Autonomous' },

  // --- Profiles from Completed Stage ---
  { id: 418, name: 'سارا رضوان', age: 31, city: 'مشهد', level: 'C1', teacherId: 108, stage: 'Completed', treatmentGroup: null },
  { id: 419, name: 'محمد صادقی', age: 29, city: 'مشهد', level: 'B2', teacherId: 108, stage: 'Completed', treatmentGroup: null },
];
