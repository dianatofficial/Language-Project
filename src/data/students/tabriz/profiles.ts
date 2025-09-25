import { StudentProfile } from '../../../models/user.model';

/**
 * منبع واحد حقیقت (Single Source of Truth) برای پروفایل‌های زبان‌آموزان تبریز.
 * این فایل تمام اطلاعات هویتی و وضعیت هر زبان‌آموز را به صورت متمرکز نگهداری می‌کند.
 */
export const TABRIZ_PROFILES: StudentProfile[] = [
  // Preliminary Students
  { id: 8, name: 'سارا نوری (آیلار)', age: 28, city: 'تبریز', level: 'B2', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 701, name: 'آراز احمدی', age: 19, city: 'تبریز', level: 'A1', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 702, name: 'سئودا کریمی', age: 21, city: 'تبریز', level: 'A2', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 703, name: 'ائلشن مرادی', age: 24, city: 'تبریز', level: 'B1', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 704, name: 'گونای رضایی', age: 22, city: 'تبریز', level: 'B1', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 705, name: 'آیسل صادقی', age: 26, city: 'تبریز', level: 'B2', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 706, name: 'اورخان جعفری', age: 20, city: 'تبریز', level: 'A2', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 707, name: 'مارال حسینی', age: 23, city: 'تبریز', level: 'B1', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 708, name: 'شاهین نوری', age: 27, city: 'تبریز', level: 'B2', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 709, name: 'تانسو اکبری', age: 25, city: 'تبریز', level: 'B1', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 710, name: 'آتیلا محمودی', age: 18, city: 'تبریز', level: 'A2', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 711, name: 'سئویل قاسمی', age: 26, city: 'تبریز', level: 'B1', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 712, name: 'بابک صالحی', age: 29, city: 'تبریز', level: 'B2', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 713, name: 'ائلناز فرهمند', age: 24, city: 'تبریز', level: 'B1', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  { id: 714, name: 'آیدین شکوری', age: 30, city: 'تبریز', level: 'B2', teacherId: 113, stage: 'Preliminary', treatmentGroup: null },
  
  // Advanced Students
  { id: 715, name: 'اولدوز پناهی', age: 28, city: 'تبریز', level: 'B2', teacherId: 113, stage: 'Advanced', treatmentGroup: 'NLP' },
  { id: 716, name: 'ساوالان داوودی', age: 33, city: 'تبریز', level: 'C1', teacherId: 113, stage: 'Advanced', treatmentGroup: 'Autonomous' },

  // Completed Students
  { id: 717, name: 'یازگول شریفی', age: 27, city: 'تبریز', level: 'C1', teacherId: 113, stage: 'Completed', treatmentGroup: null },
  { id: 718, name: 'توماج وثوقی', age: 35, city: 'تبریز', level: 'C1', teacherId: 113, stage: 'Completed', treatmentGroup: null },
];
