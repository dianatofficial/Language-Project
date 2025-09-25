import { StudentProfile, StudentOptResult, StudentNarrativeResult, Student } from '../models/user.model';

// FIX: Import the single combined student array from each city module.
import { TEHRAN_STUDENTS } from './students/tehran';
import { SHIRAZ_STUDENTS } from './students/shiraz';
import { SHAHROOD_STUDENTS } from './students/shahrood';
import { BUSHEHR_STUDENTS } from './students/bushehr';
import { ARDABIL_STUDENTS } from './students/ardabil';
import { ISFAHAN_STUDENTS } from './students/isfahan';
import { MASHHAD_STUDENTS } from './students/mashhad';
import { FIROUZKOUH_STUDENTS } from './students/firuzkouh';
import { ARAK_STUDENTS } from './students/arak';
import { TABRIZ_STUDENTS } from './students/tabriz';
import { RASHT_STUDENTS } from './students/rasht';

/**
 * تجمیع‌کننده مرکزی داده‌های زبان‌آموزان.
 * 
 * این فایل داده‌های تفکیک‌شده زبان‌آموزان از تمام شهرها را وارد کرده و آن‌ها را
 * در سه ساختار اصلی مورد نیاز `DataService` سازماندهی می‌کند:
 * 1.  `MOCK_STUDENT_PROFILES`: لیستی از پروفایل‌های پایه زبان‌آموزان.
 * 2.  `MOCK_OPT_RESULTS`: لیستی از نتایج آزمون‌های تعیین سطح (OPT).
 * 3.  `MOCK_NARRATIVE_RESULTS`: لیستی از نتایج آزمون‌های نوشتاری (Narrative).
 * 
 * این رویکرد، ضمن حفظ ساختار تفکیک‌شده و مقیاس‌پذیر داده‌ها، یکپارچگی لازم برای برنامه را فراهم می‌کند.
 */

// FIX: Combine all student data from different cities into a single source of truth.
const ALL_STUDENTS: Student[] = [
  ...TEHRAN_STUDENTS,
  ...SHIRAZ_STUDENTS,
  ...SHAHROOD_STUDENTS,
  ...BUSHEHR_STUDENTS,
  ...ARDABIL_STUDENTS,
  ...ISFAHAN_STUDENTS,
  ...MASHHAD_STUDENTS,
  ...FIROUZKOUH_STUDENTS,
  ...ARAK_STUDENTS,
  ...TABRIZ_STUDENTS,
  ...RASHT_STUDENTS
];

// FIX: Deconstruct the combined student data into the separate arrays required by the DataService.
export const MOCK_STUDENT_PROFILES: StudentProfile[] = ALL_STUDENTS.map(student => {
  const { 
      optScore, optAnswers, optExamId, narrativeScore, narrativeText, narrativeFeedback, 
      ...profile 
  } = student;
  return profile;
});

export const MOCK_OPT_RESULTS: StudentOptResult[] = ALL_STUDENTS
  .filter((student): student is Student & { optExamId: number; optScore: number; optAnswers: { [key: number]: string; }; } => 
    student.optExamId !== null && 
    student.optScore !== null && 
    student.optAnswers !== null
  )
  .map(student => ({
      studentId: student.id,
      examId: student.optExamId,
      score: student.optScore,
      answers: student.optAnswers,
  }));

export const MOCK_NARRATIVE_RESULTS: StudentNarrativeResult[] = ALL_STUDENTS
  .filter(student => student.narrativeScore !== null || student.narrativeText !== null)
  .map(student => ({
      studentId: student.id,
      score: student.narrativeScore,
      text: student.narrativeText,
      feedback: student.narrativeFeedback,
  }));