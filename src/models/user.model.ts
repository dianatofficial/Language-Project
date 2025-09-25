export interface Institute {
  id: number;
  name: string;
  city: string;
  description: string;
}

export interface Teacher {
  id: number;
  name: string;
  age: number;
  city: string;
  instituteId: number;
  personality: string;
  bio: string;
}

export interface StudentProfile {
  id: number;
  name:string;
  age: number;
  city: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  teacherId: number;
  stage: 'Preliminary' | 'Advanced' | 'Completed';
  treatmentGroup: 'NLP' | 'Autonomous' | null;
}

export type Student = StudentProfile & {
  optScore: number | null;
  optAnswers: { [questionId: number]: string } | null;
  optExamId: number | null;
  narrativeScore: number | null;
  narrativeText: string | null;
  narrativeFeedback: string | null;
};


export interface StudentOptResult {
  studentId: number;
  examId: number;
  score: number;
  answers: { [questionId: number]: string };
}

export interface StudentNarrativeResult {
  studentId: number;
  score: number | null;
  text: string | null;
  feedback: string | null;
}

export interface OPTQuestion {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface Exam {
  id: number;
  title: string;
  type: 'OPT' | 'Narrative';
  description: string;
  status: 'Draft' | 'Active' | 'Archived';
  instituteId: number | null; // null for platform-wide exams
  questions?: OPTQuestion[];
  stage: 'Preliminary' | 'Advanced';
}

export type UserRole = 'Student' | 'Teacher' | 'Admin';

// A User in the system is one of these types
export type User =
  | (Student & { role: 'Student' })
  | (Teacher & { role: 'Teacher' })
  | { id: number; name: string; role: 'Admin' };