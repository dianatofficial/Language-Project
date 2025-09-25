import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Student, Teacher, Institute, Exam } from '../../../models/user.model';

declare var XLSX: any;

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule]
})
export class OverviewComponent {
  private dataService = inject(DataService);

  teachers = this.dataService.teachers;
  students = this.dataService.students;
  institutes = this.dataService.institutes;
  exams = this.dataService.exams;

  // --- Export Modal State ---
  showExportModal = signal(false);
  exportOptions = signal({
    studentId: true,
    studentName: true,
    age: true,
    city: true,
    level: true,
    teacherName: true,
    instituteName: true,
    stage: true,
    treatmentGroup: true,
    optExamTitle: true,
    optScore: true,
    optAnswers: false,
    narrativeScore: true,
    narrativeText: false,
    narrativeFeedback: false,
  });
  exportFilter = signal<{ stage: 'all' | 'Preliminary' | 'Advanced' | 'Completed' }>({ stage: 'all' });

  // --- Overview Computed Signals ---
  studentsByLevel = computed(() => {
    const levels: { [key: string]: number } = { 'A1': 0, 'A2': 0, 'B1': 0, 'B2': 0, 'C1': 0, 'C2': 0 };
    this.students().forEach(s => {
      if (levels[s.level] !== undefined) {
        levels[s.level]++;
      }
    });
    return Object.entries(levels).map(([level, count]) => ({ level, count }));
  });
  studentsByLevelMax = computed(() => Math.max(1, ...this.studentsByLevel().map(l => l.count)));


  teachersByCity = computed(() => {
    const cities: { [key: string]: number } = {};
    this.teachers().forEach(t => {
      cities[t.city] = (cities[t.city] || 0) + 1;
    });
    return Object.entries(cities).map(([city, count]) => ({ city, count }));
  });
  teachersByCityMax = computed(() => Math.max(1, ...this.teachersByCity().map(c => c.count)));
  
  // --- Data Export Logic ---

  private exportData(filename: string, headers: string[], data: any[][], format: 'csv' | 'xlsx') {
      const cleanFilename = filename.replace(/ /g, '_');
      if (format === 'csv') {
          this.exportToCsv(cleanFilename, headers, data);
      } else {
          this.exportToExcel(cleanFilename, headers, data);
      }
  }

  private exportToCsv(filename: string, headers: string[], data: any[][]) {
    const csvRows = [headers.join(',')];
    data.forEach(row => {
        const values = row.map(val => {
            const str = String(val ?? '').replace(/"/g, '""'); // escape double quotes
            return `"${str}"`; // wrap everything in quotes
        });
        csvRows.push(values.join(','));
    });
    const csvString = csvRows.join('\r\n');

    const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private exportToExcel(filename: string, headers: string[], data: any[][]) {
      const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
      XLSX.writeFile(workbook, `${filename}.xlsx`);
  }

  exportAllTestResults(format: 'csv' | 'xlsx') {
      const headers = ['شناسه زبان‌آموز', 'نام زبان‌آموز', 'سطح', 'کد استاد', 'کد موسسه', 'عنوان آزمون OPT', 'نمره OPT', 'نمره Narrative', 'متن Narrative', 'بازخورد Narrative'];
      const data = this.students().map(student => {
          const teacher = this.teachers().find(t => t.id === student.teacherId);
          const institute = teacher ? this.institutes().find(i => i.id === teacher.instituteId) : undefined;
          const exam = student.optExamId ? this.exams().find(e => e.id === student.optExamId) : undefined;
          return [
              student.id,
              student.name,
              student.level,
              teacher ? `T${teacher.id}` : 'N/A',
              institute ? `I${institute.id}` : 'N/A',
              exam?.title || 'N/A',
              student.optScore ?? 'N/A',
              student.narrativeScore ?? 'N/A',
              student.narrativeText || '',
              student.narrativeFeedback || ''
          ];
      });
      this.exportData('نتایج_کامل_آزمون‌ها', headers, data, format);
  }

  exportAllStudents(format: 'csv' | 'xlsx') {
      const headers = ['شناسه', 'نام', 'سن', 'شهر', 'سطح', 'کد استاد', 'کد موسسه', 'مرحله پژوهش', 'گروه درمانی'];
      const data = this.students().map(student => {
          const teacher = this.teachers().find(t => t.id === student.teacherId);
          const institute = teacher ? this.institutes().find(i => i.id === teacher.instituteId) : undefined;
          return [
              student.id,
              student.name,
              student.age,
              student.city,
              student.level,
              teacher ? `T${teacher.id}` : 'N/A',
              institute ? `I${institute.id}` : 'N/A',
              student.stage,
              student.treatmentGroup || 'N/A'
          ];
      });
      this.exportData('فهرست_کامل_زبان‌آموزان', headers, data, format);
  }

  exportAllTeachers(format: 'csv' | 'xlsx') {
    const headers = ['کد استاد', 'سن', 'شهر', 'کد موسسه', 'تیپ شخصیتی', 'بیوگرافی'];
    const data = this.teachers().map(teacher => {
      const institute = this.institutes().find(i => i.id === teacher.instituteId);
      return [
        `T${teacher.id}`,
        teacher.age,
        teacher.city,
        institute ? `I${institute.id}` : 'N/A',
        teacher.personality,
        teacher.bio
      ];
    });
    this.exportData('فهرست_کامل_اساتید', headers, data, format);
  }

  exportAllExams(format: 'csv' | 'xlsx') {
    const headers = ['شناسه', 'عنوان', 'نوع', 'وضعیت', 'کد موسسه', 'مرحله پژوهش', 'توضیحات'];
    const data = this.exams().map(exam => {
      const institute = exam.instituteId ? this.institutes().find(i => i.id === exam.instituteId) : null;
      return [
        exam.id,
        exam.title,
        exam.type,
        exam.status,
        institute ? `I${institute.id}` : 'سراسری',
        exam.stage,
        exam.description
      ];
    });
    this.exportData('فهرست_کامل_آزمون‌ها', headers, data, format);
  }

  openExportModal() {
    this.showExportModal.set(true);
  }

  exportDetailedResults() {
    const options = this.exportOptions();
    const filter = this.exportFilter();
    let studentsToExport = this.students();

    if (filter.stage !== 'all') {
      studentsToExport = studentsToExport.filter(s => s.stage === filter.stage);
    }

    const headers: string[] = [];
    if (options.studentId) headers.push('Student ID');
    if (options.studentName) headers.push('Student Name');
    if (options.age) headers.push('Age');
    if (options.city) headers.push('City');
    if (options.level) headers.push('Level');
    if (options.teacherName) headers.push('Teacher Code');
    if (options.instituteName) headers.push('Institute Code');
    if (options.stage) headers.push('Stage');
    if (options.treatmentGroup) headers.push('Treatment Group');
    if (options.optExamTitle) headers.push('OPT Exam Title');
    if (options.optScore) headers.push('OPT Score');
    if (options.optAnswers) headers.push('OPT Answers (JSON)');
    if (options.narrativeScore) headers.push('Narrative Score');
    if (options.narrativeText) headers.push('Narrative Text');
    if (options.narrativeFeedback) headers.push('Narrative Feedback');

    const data = studentsToExport.map(student => {
      const teacher = this.teachers().find(t => t.id === student.teacherId);
      const institute = teacher ? this.institutes().find(i => i.id === teacher.instituteId) : undefined;
      const exam = student.optExamId ? this.exams().find(e => e.id === student.optExamId) : undefined;
      
      const row: (string | number | null)[] = [];
      if (options.studentId) row.push(student.id);
      if (options.studentName) row.push(student.name);
      if (options.age) row.push(student.age);
      if (options.city) row.push(student.city);
      if (options.level) row.push(student.level);
      if (options.teacherName) row.push(teacher ? `T${teacher.id}` : 'N/A');
      if (options.instituteName) row.push(institute ? `I${institute.id}` : 'N/A');
      if (options.stage) row.push(student.stage);
      if (options.treatmentGroup) row.push(student.treatmentGroup || 'N/A');
      if (options.optExamTitle) row.push(exam?.title || 'N/A');
      if (options.optScore) row.push(student.optScore ?? 'N/A');
      if (options.optAnswers) row.push(student.optAnswers ? JSON.stringify(student.optAnswers) : '');
      if (options.narrativeScore) row.push(student.narrativeScore ?? 'N/A');
      if (options.narrativeText) row.push(student.narrativeText || '');
      if (options.narrativeFeedback) row.push(student.narrativeFeedback || '');
      
      return row;
    });

    this.exportData(`detailed_results_${filter.stage}_stage`, headers, data, 'csv');
    this.showExportModal.set(false);
  }
}