import { StudentProfile } from '../../../models/user.model';

/**
 * منبع واحد حقیقت (Single Source of Truth) برای پروفایل‌های زبان‌آموزان اردبیل.
 * این فایل تمام اطلاعات هویتی و وضعیت هر زبان‌آموز را به صورت متمرکز نگهداری می‌کند.
 */
export const ARDABIL_PROFILES: StudentProfile[] = [
  // --- Profiles from Preliminary Stage ---
  { id: 9, name: 'تورج حیدری', age: 35, city: 'اردبیل', level: 'B1', teacherId: 114, stage: 'Preliminary', treatmentGroup: null },
  { id: 201, name: 'آیلار فرهمند', age: 19, city: 'اردبیل', level: 'A2', teacherId: 114, stage: 'Preliminary', treatmentGroup: null },
  { id: 202, name: 'بابک ابراهیمی', age: 22, city: 'اردبیل', level: 'B1', teacherId: 115, stage: 'Preliminary', treatmentGroup: null },
  { id: 203, name: 'مریم پناهی', age: 25, city: 'اردبیل', level: 'B2', teacherId: 114, stage: 'Preliminary', treatmentGroup: null },
  { id: 204, name: 'شهرام اسکندری', age: 28, city: 'اردبیل', level: 'B1', teacherId: 115, stage: 'Preliminary', treatmentGroup: null },
  { id: 205, name: 'سولماز رسولی', age: 20, city: 'اردبیل', level: 'A2', teacherId: 114, stage: 'Preliminary', treatmentGroup: null },
  { id: 206, name: 'ائلچین رضوان', age: 31, city: 'اردبیل', level: 'B2', teacherId: 115, stage: 'Preliminary', treatmentGroup: null },
  { id: 207, name: 'آینور شریفی', age: 23, city: 'اردبیل', level: 'B1', teacherId: 114, stage: 'Preliminary', treatmentGroup: null },
  { id: 208, name: 'سهند مشرقی', age: 26, city: 'اردبیل', level: 'C1', teacherId: 115, stage: 'Preliminary', treatmentGroup: null },
  { id: 209, name: 'سحر نیکخواه', age: 18, city: 'اردبیل', level: 'A2', teacherId: 114, stage: 'Preliminary', treatmentGroup: null },
  { id: 210, name: 'شاهین قادری', age: 29, city: 'اردبیل', level: 'B1', teacherId: 115, stage: 'Preliminary', treatmentGroup: null },
  { id: 211, name: 'سوین نوروزی', age: 19, city: 'اردبیل', level: 'A2', teacherId: 114, stage: 'Preliminary', treatmentGroup: null },
  { id: 212, name: 'آیدین علیاری', age: 24, city: 'اردبیل', level: 'B1', teacherId: 115, stage: 'Preliminary', treatmentGroup: null },
  { id: 213, name: 'تارلان محمدزاده', age: 27, city: 'اردبیل', level: 'B2', teacherId: 114, stage: 'Preliminary', treatmentGroup: null },
  { id: 214, name: 'ارشک کاویانی', age: 33, city: 'اردبیل', level: 'B1', teacherId: 115, stage: 'Preliminary', treatmentGroup: null },
  { id: 215, name: 'سویل پاکدل', age: 21, city: 'اردبیل', level: 'B1', teacherId: 114, stage: 'Preliminary', treatmentGroup: null },
  { id: 216, name: 'عطاالله وثوقی', age: 30, city: 'اردبیل', level: 'B2', teacherId: 115, stage: 'Preliminary', treatmentGroup: null },
  { id: 217, name: 'نگین خیراندیش', age: 26, city: 'اردبیل', level: 'B2', teacherId: 114, stage: 'Preliminary', treatmentGroup: null },
  { id: 218, name: 'کیانوش شکوری', age: 35, city: 'اردبیل', level: 'C1', teacherId: 115, stage: 'Preliminary', treatmentGroup: null },
  { id: 219, name: 'ساناز گوهری', age: 22, city: 'اردبیل', level: 'B1', teacherId: 114, stage: 'Preliminary', treatmentGroup: null },
  { id: 220, name: 'آتیلا کرمی', age: 28, city: 'اردبیل', level: 'B2', teacherId: 115, stage: 'Preliminary', treatmentGroup: null },

  // --- Profiles from Advanced Stage ---
  { id: 221, name: 'آرزو فرشی', age: 29, city: 'اردبیل', level: 'B2', teacherId: 114, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 222, name: 'اردلان پورصادق', age: 31, city: 'اردبیل', level: 'C1', teacherId: 115, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 223, name: 'افسانه بیگلری', age: 25, city: 'اردبیل', level: 'B2', teacherId: 114, stage: 'Advanced', treatmentGroup: 'NLP' },

  // --- Profiles from Completed Stage ---
  { id: 224, name: 'جمشید مشرقی', age: 38, city: 'اردبیل', level: 'C1', teacherId: 115, stage: 'Completed', treatmentGroup: null },
  { id: 225, name: 'سونیا تسلیمی', age: 24, city: 'اردبیل', level: 'C1', teacherId: 114, stage: 'Completed', treatmentGroup: null },
];
