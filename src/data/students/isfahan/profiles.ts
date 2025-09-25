import { StudentProfile } from '../../../models/user.model';

/**
 * منبع واحد حقیقت (Single Source of Truth) برای پروفایل‌های زبان‌آموزان اصفهان.
 * این فایل تمام اطلاعات هویتی و وضعیت هر زبان‌آموز را به صورت متمرکز نگهداری می‌کند.
 */
export const ISFAHAN_PROFILES: StudentProfile[] = [
  // --- Profiles from Preliminary Stage ---
  { id: 301, name: 'زهره توکلی', age: 24, city: 'اصفهان', level: 'B1', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 302, name: 'کاوه مرتضوی', age: 20, city: 'اصفهان', level: 'A2', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 303, name: 'آزاده شفیعی', age: 29, city: 'اصفهان', level: 'B2', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 304, name: 'مانی فروتن', age: 22, city: 'اصفهان', level: 'B1', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 305, name: 'فیروزه حق‌شناس', age: 19, city: 'اصفهان', level: 'A1', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 306, name: 'آرش یزدانی', age: 26, city: 'اصفهان', level: 'B2', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 307, name: 'مینا رحمانی', age: 21, city: 'اصفهان', level: 'B1', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 308, name: 'کیان عطایی', age: 30, city: 'اصفهان', level: 'C1', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 309, name: 'شبنم واعظی', age: 18, city: 'اصفهان', level: 'A2', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 310, name: 'بهنام کبیری', age: 23, city: 'اصفهان', level: 'B1', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 311, name: 'گلاره جوادی', age: 25, city: 'اصفهان', level: 'B1', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 312, name: 'فریدون دانشور', age: 20, city: 'اصفهان', level: 'A2', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 313, name: 'سیمین عباسیان', age: 28, city: 'اصفهان', level: 'B2', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 314, name: 'داریوش بختیاری', age: 32, city: 'اصفهان', level: 'C1', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },
  { id: 315, name: 'پریسا جوادیان', age: 22, city: 'اصفهان', level: 'B1', teacherId: 107, stage: 'Preliminary', treatmentGroup: null },

  // --- Profiles from Advanced Stage ---
  { id: 3, name: 'محمدحسین صالحی', age: 31, city: 'اصفهان', level: 'C1', teacherId: 107, stage: 'Advanced', treatmentGroup: 'Autonomous' },
  { id: 316, name: 'امید اشرفی', age: 27, city: 'اصفهان', level: 'B2', teacherId: 107, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 317, name: 'نگار ملکی', age: 29, city: 'اصفهان', level: 'B2', teacherId: 107, stage: 'Advanced', treatmentGroup: 'Autonomous' },

  // --- Profiles from Completed Stage ---
  { id: 318, name: 'کیوان شهبازی', age: 34, city: 'اصفهان', level: 'C1', teacherId: 107, stage: 'Completed', treatmentGroup: null },
  { id: 319, name: 'روشنک احمدی', age: 26, city: 'اصفهان', level: 'C1', teacherId: 107, stage: 'Completed', treatmentGroup: null },
];
