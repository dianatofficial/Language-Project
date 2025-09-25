import { Injectable, signal, computed } from '@angular/core';
import { StudentProfile, Student, Teacher, Institute, Exam, StudentOptResult, StudentNarrativeResult } from '../models/user.model';
import { MOCK_OPT_QUESTIONS } from '../data/opt-questions';
import { MOCK_INSTITUTES } from '../data/institutes';
import { MOCK_TEACHERS } from '../data/teachers';
import { MOCK_STUDENT_PROFILES, MOCK_OPT_RESULTS, MOCK_NARRATIVE_RESULTS } from '../data/students';

// ساختار مرکزی داده‌های برنامه
interface AppDatabase {
  institutes: Institute[];
  teachers: Teacher[];
  studentProfiles: StudentProfile[];
  optResults: StudentOptResult[];
  narrativeResults: StudentNarrativeResult[];
  exams: Exam[];
}

@Injectable({ providedIn: 'root' })
export class DataService {
  // یک سیگنال واحد برای نگهداری تمام داده‌های برنامه.
  // این کار مدیریت داده‌ها را متمرکز کرده و یک منبع داده‌ی واحد و قوی را فراهم می‌کند.
  private db = signal<AppDatabase>({
    // داده‌های اولیه از فایل‌های جداگانه بارگیری می‌شوند.
    institutes: MOCK_INSTITUTES,
    teachers: MOCK_TEACHERS,
    studentProfiles: MOCK_STUDENT_PROFILES,
    optResults: MOCK_OPT_RESULTS,
    narrativeResults: MOCK_NARRATIVE_RESULTS,
    exams: [
      { id: 1, title: 'OPT Placement Test - سفیر', type: 'OPT', description: 'آزمون تعیین سطح آکسفورد برای موسسه سفیر.', status: 'Active', instituteId: 1, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 2, title: 'Narrative Writing - Summer 2024', type: 'Narrative', description: 'Creative writing prompt about a difficult journey.', status: 'Active', instituteId: null, stage: 'Preliminary' },
      { id: 3, title: 'OPT Mid-term - پارسیان', type: 'OPT', description: 'Mid-term grammar and vocabulary test for B1 students in Parsian.', status: 'Active', instituteId: 4, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 4, title: 'Final Exam - C1', type: 'Narrative', description: 'Advanced essay on a controversial topic.', status: 'Draft', instituteId: 1, stage: 'Advanced' },
      { id: 5, title: 'OPT Placement Test - کیش', type: 'OPT', description: 'آزمون تعیین سطح آکسفورد برای موسسه کیش.', status: 'Active', instituteId: 3, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 6, title: 'OPT Placement Test - خلیج فارس', type: 'OPT', description: 'آزمون تعیین سطح برای موسسه خلیج فارس بوشهر.', status: 'Active', instituteId: 13, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 7, title: 'OPT Mid-term - دانا', type: 'OPT', description: 'آزمون میان ترم برای موسسه دانا.', status: 'Active', instituteId: 15, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 8, title: 'OPT Placement Test - سبلان', type: 'OPT', description: 'آزمون تعیین سطح برای موسسه سبلان اردبیل.', status: 'Active', instituteId: 12, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 9, title: 'OPT Placement Test - سپاهان', type: 'OPT', description: 'آزمون تعیین سطح برای موسسه سپاهان اصفهان.', status: 'Active', instituteId: 6, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 10, title: 'OPT Placement Test - پارت', type: 'OPT', description: 'آزمون تعیین سطح برای موسسه پارت مشهد.', status: 'Active', instituteId: 7, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 11, title: 'OPT Placement Test - فیروزکوه', type: 'OPT', description: 'آزمون تعیین سطح برای موسسه فیروزکوه.', status: 'Active', instituteId: 9, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 12, title: 'OPT Placement Test - آریان', type: 'OPT', description: 'آزمون تعیین سطح برای موسسه آریان اراک.', status: 'Active', instituteId: 10, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 13, title: 'OPT Placement Test - سهند', type: 'OPT', description: 'آزمون تعیین سطح برای موسسه سهند تبریز.', status: 'Active', instituteId: 11, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 14, title: 'OPT Placement Test - گیلان', type: 'OPT', description: 'آزمون تعیین سطح برای موسسه زبان گیلان در رشت.', status: 'Active', instituteId: 14, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' },
      { id: 15, title: 'OPT Placement Test - کومش', type: 'OPT', description: 'آزمون تعیین سطح برای موسسه کومش شاهرود.', status: 'Active', instituteId: 8, questions: MOCK_OPT_QUESTIONS, stage: 'Preliminary' }
    ]
  });

  // سیگنال‌های محاسبه‌شده (Computed Signals) برای دسترسی فقط-خواندنی به جداول داده.
  institutes = computed(() => this.db().institutes);
  teachers = computed(() => this.db().teachers);
  exams = computed(() => this.db().exams);

  // The main students signal now joins profiles with their results.
  students = computed<Student[]>(() => {
    const profiles = this.db().studentProfiles;
    const optResults = this.db().optResults;
    const narrativeResults = this.db().narrativeResults;

    const optMap = new Map(optResults.map(r => [r.studentId, r]));
    const narrativeMap = new Map(narrativeResults.map(r => [r.studentId, r]));

    return profiles.map(profile => {
      const opt = optMap.get(profile.id);
      const narrative = narrativeMap.get(profile.id);
      return {
        ...profile,
        optScore: opt?.score ?? null,
        optAnswers: opt?.answers ?? null,
        optExamId: opt?.examId ?? null,
        narrativeScore: narrative?.score ?? null,
        narrativeText: narrative?.text ?? null,
        narrativeFeedback: narrative?.feedback ?? null,
      };
    });
  });


  getExamById(id: number) {
    return this.exams().find(e => e.id === id);
  }

  updateStudentNarrativeResult(studentId: number, result: Pick<StudentNarrativeResult, 'score' | 'text' | 'feedback'>) {
    this.db.update(db => {
      const narrativeResults = [...db.narrativeResults];
      const existingIndex = narrativeResults.findIndex(r => r.studentId === studentId);
      if (existingIndex > -1) {
        narrativeResults[existingIndex] = { ...narrativeResults[existingIndex], ...result };
      } else {
        narrativeResults.push({ studentId, ...result });
      }
      return { ...db, narrativeResults };
    });
  }
  
  /**
   * Handles submission of the OPT test, calculates the score, and saves the results.
   * @param studentId The ID of the student.
   * @param examId The ID of the exam taken.
   * @param answers The student's answers.
   */
  submitOptTest(studentId: number, examId: number, answers: { [questionId: number]: string }) {
    const exam = this.getExamById(examId);
    if (!exam || !exam.questions) {
      console.error("Exam or questions not found!");
      return;
    }

    let correctAnswers = 0;
    for (const question of exam.questions) {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    }
    const score = correctAnswers;
    
    const newResult: StudentOptResult = { studentId, examId, score, answers };

    this.db.update(db => {
      const optResults = [...db.optResults];
      const existingIndex = optResults.findIndex(r => r.studentId === studentId);
      if (existingIndex > -1) {
        optResults[existingIndex] = newResult;
      } else {
        optResults.push(newResult);
      }
      return { ...db, optResults };
    });
  }
  
  /**
   * Moves a student to the advanced stage and assigns them to a treatment group.
   * @param studentId The ID of the student to move.
   * @param group The treatment group to assign.
   */
  moveStudentToAdvanced(studentId: number, group: 'NLP' | 'Autonomous') {
      this.db.update(db => ({
          ...db,
          studentProfiles: db.studentProfiles.map(s =>
              s.id === studentId ? { ...s, stage: 'Advanced', treatmentGroup: group } : s
          )
      }));
  }

  /**
   * Moves a student to the completed stage.
   * @param studentId The ID of the student to move.
   */
  completeStudentStage(studentId: number) {
    this.db.update(db => ({
        ...db,
        studentProfiles: db.studentProfiles.map(s =>
            s.id === studentId ? { ...s, stage: 'Completed', treatmentGroup: null } : s
        )
    }));
  }

  /**
   * یک زبان‌آموز جدید به "جدول" زبان‌آموزان اضافه می‌کند.
   * @param newStudentProfile شیء پروفایل زبان‌آموز جدید برای افزودن.
   */
  addStudent(newStudentProfile: Omit<StudentProfile, 'id'| 'stage' | 'treatmentGroup'>) {
    this.db.update(database => {
      const newId = Math.max(...database.studentProfiles.map(s => s.id), 0) + 1;
      const fullProfile: StudentProfile = {
        ...newStudentProfile,
        id: newId,
        stage: 'Preliminary',
        treatmentGroup: null
      };
      return {
        ...database,
        studentProfiles: [...database.studentProfiles, fullProfile]
      }
    });
  }

  /**
   * اطلاعات پروفایل یک زبان‌آموز موجود را به‌روزرسانی می‌کند.
   * @param updatedProfile شیء پروفایل زبان‌آموز با اطلاعات جدید.
   */
  updateStudent(updatedProfile: StudentProfile) {
    this.db.update(db => ({
      ...db,
      studentProfiles: db.studentProfiles.map(s => s.id === updatedProfile.id ? updatedProfile : s)
    }));
  }

  /**
   * یک زبان‌آموز را از سیستم حذف می‌کند (پروفایل و تمام نتایج مرتبط).
   * @param studentId شناسه‌ی زبان‌آموز برای حذف.
   */
  deleteStudent(studentId: number) {
    this.db.update(db => ({
      ...db,
      studentProfiles: db.studentProfiles.filter(s => s.id !== studentId),
      optResults: db.optResults.filter(r => r.studentId !== studentId),
      narrativeResults: db.narrativeResults.filter(r => r.studentId !== studentId)
    }));
  }

  /**
   * یک استاد جدید به سیستم اضافه می‌کند.
   * @param newTeacher شیء استاد جدید.
   */
  addTeacher(newTeacher: Teacher) {
    this.db.update(db => ({
      ...db,
      teachers: [...db.teachers, newTeacher]
    }));
  }

  /**
   * اطلاعات یک استاد موجود را به‌روزرسانی می‌کند.
   * @param updatedTeacher شیء استاد با اطلاعات جدید.
   */
  updateTeacher(updatedTeacher: Teacher) {
    this.db.update(db => ({
      ...db,
      teachers: db.teachers.map(t => t.id === updatedTeacher.id ? updatedTeacher : t)
    }));
  }

  /**
   * یک استاد را از سیستم حذف می‌کند.
   * @param teacherId شناسه‌ی استاد برای حذف.
   */
  deleteTeacher(teacherId: number) {
    this.db.update(db => ({
      ...db,
      teachers: db.teachers.filter(t => t.id !== teacherId)
    }));
  }
  
  /**
   * یک موسسه جدید اضافه می‌کند.
   */
  addInstitute(newInstitute: Institute) {
    this.db.update(db => ({
      ...db,
      institutes: [...db.institutes, newInstitute]
    }));
  }

  /**
   * اطلاعات یک موسسه موجود را به‌روزرسانی می‌کند.
   */
  updateInstitute(updatedInstitute: Institute) {
    this.db.update(db => ({
      ...db,
      institutes: db.institutes.map(i => i.id === updatedInstitute.id ? updatedInstitute : i)
    }));
  }

  /**
   * یک موسسه را از سیستم حذف می‌کند.
   */
  deleteInstitute(instituteId: number) {
    this.db.update(db => ({
      ...db,
      institutes: db.institutes.filter(i => i.id !== instituteId)
    }));
  }

  /**
   * یک آزمون جدید به سیستم اضافه می‌کند.
   */
  addExam(newExam: Exam) {
    this.db.update(db => ({
      ...db,
      exams: [...db.exams, newExam]
    }));
  }

  /**
   * اطلاعات یک آزمون موجود را به‌روزرسانی می‌کند.
   */
  updateExam(updatedExam: Exam) {
    this.db.update(db => ({
      ...db,
      exams: db.exams.map(e => e.id === updatedExam.id ? updatedExam : e)
    }));
  }

  /**
   * یک آزمون را از سیستم حذف می‌کند.
   */
  deleteExam(examId: number) {
    this.db.update(db => ({
      ...db,
      exams: db.exams.filter(e => e.id !== examId)
    }));
  }
}