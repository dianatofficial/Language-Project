import { StudentProfile } from '../../../models/user.model';

/**
 * منبع واحد حقیقت (Single Source of Truth) برای پروفایل‌های زبان‌آموزان فیروزکوه.
 * این فایل تمام اطلاعات هویتی و وضعیت هر زبان‌آموز را به صورت متمرکز نگهداری می‌کند.
 */
export const FIROUZKOUH_PROFILES: StudentProfile[] = [
  // --- Profiles from Preliminary Stage ---
  { id: 501, name: 'پریسا جباری', age: 18, city: 'فیروزکوه', level: 'A1', teacherId: 111, stage: 'Preliminary', treatmentGroup: null },
  { id: 502, name: 'شهریار دانش', age: 21, city: 'فیروزکوه', level: 'A2', teacherId: 111, stage: 'Preliminary', treatmentGroup: null },
  { id: 503, name: 'مژگان سعادت', age: 24, city: 'فیروزکوه', level: 'B1', teacherId: 111, stage: 'Preliminary', treatmentGroup: null },
  { id: 504, name: 'کاوه محمودی', age: 20, city: 'فیروزکوه', level: 'A2', teacherId: 111, stage: 'Preliminary', treatmentGroup: null },
  { id: 505, name: 'آناهیتا کمالی', age: 26, city: 'فیروزکوه', level: 'B1', teacherId: 111, stage: 'Preliminary', treatmentGroup: null },
  { id: 506, name: 'بهروز صادقی', age: 19, city: 'فیروزکوه', level: 'A2', teacherId: 111, stage: 'Preliminary', treatmentGroup: null },
  { id: 507, name: 'نسرین وثوقی', age: 25, city: 'فیروزکوه', level: 'B1', teacherId: 111, stage: 'Preliminary', treatmentGroup: null },
  { id: 508, name: 'رامین گودرزی', age: 23, city: 'فیروزکوه', level: 'B1', teacherId: 111, stage: 'Preliminary', treatmentGroup: null },
  { id: 509, name: 'رویا افشار', age: 28, city: 'فیروزکوه', level: 'B2', teacherId: 111, stage: 'Preliminary', treatmentGroup: null },

  // --- Profiles from Advanced Stage ---
  { id: 510, name: 'سینا پناهی', age: 30, city: 'فیروزکوه', level: 'B2', teacherId: 111, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 511, name: 'گلاره جوادی', age: 33, city: 'فیروزکوه', level: 'C1', teacherId: 111, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  
  // --- Profiles from Completed Stage ---
  { id: 512, name: 'فریدون مشیری', age: 40, city: 'فیروزکوه', level: 'C1', teacherId: 111, stage: 'Completed', treatmentGroup: null },
];
