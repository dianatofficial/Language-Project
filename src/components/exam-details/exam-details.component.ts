import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Exam, Student, Institute } from '../../models/user.model';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterLink, PaginationComponent]
})
export class ExamDetailsComponent {
  // FIX: Added explicit type `ActivatedRoute` to ensure correct type inference for the injected route.
  private route: ActivatedRoute = inject(ActivatedRoute);
  // FIX: Added explicit type `Router` to ensure correct type inference for the injected router.
  private router: Router = inject(Router);
  private dataService = inject(DataService);

  private examId = signal(0);
  
  // Data from service
  private students = this.dataService.students;
  private teachers = this.dataService.teachers;
  institutes = this.dataService.institutes;

  // Modal states
  showExamModal = signal(false);
  isEditMode = signal(false);
  editableExam = signal<Partial<Exam>>({});
  showDeleteConfirm = signal<{ type: string, id: number, name: string } | null>(null);

  // Pagination state
  currentPage = signal(1);
  itemsPerPage = signal(10);

  constructor() {
    const id = +(this.route.snapshot.params['id']);
    this.examId.set(id);
  }
  
  exam = computed(() => this.dataService.exams().find(e => e.id === this.examId()));

  examResults = computed(() => {
    const currentExam = this.exam();
    if (!currentExam) return [];
    
    if (currentExam.type === 'OPT') {
        return this.students().filter(s => {
            const studentTeacher = this.teachers().find(t => t.id === s.teacherId);
            const studentInstituteId = studentTeacher?.instituteId;
            return s.optScore !== null && (currentExam.instituteId === null || currentExam.instituteId === studentInstituteId);
        });
    }
    
    if (currentExam.type === 'Narrative') {
        return this.students().filter(s => s.narrativeScore !== null || s.narrativeText !== null);
    }
    
    return [];
  });

  paginatedExamResults = computed(() => {
    const results = this.examResults();
    const page = this.currentPage();
    const perPage = this.itemsPerPage();
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return results.slice(start, end);
  });

  examStats = computed(() => {
      const results = this.examResults();
      const examType = this.exam()?.type;
      if (!results.length || !examType) {
          return { participants: 0, average: 0, highest: 0, lowest: 0 };
      }

      const scores = results
        .map(s => examType === 'OPT' ? s.optScore : s.narrativeScore)
        .filter((score): score is number => score !== null);

      if (!scores.length) {
         return { participants: results.length, average: 0, highest: 0, lowest: 0 };
      }

      const sum = scores.reduce((acc, score) => acc + score, 0);
      return {
          participants: results.length,
          average: Math.round(sum / scores.length),
          highest: Math.max(...scores),
          lowest: Math.min(...scores)
      };
  });

  scoreDistribution = computed(() => {
      const results = this.examResults();
      const examType = this.exam()?.type;
      const distribution = [
          { range: '0-20', count: 0 },
          { range: '21-40', count: 0 },
          { range: '41-60', count: 0 },
          { range: '61-80', count: 0 },
          { range: '81-100', count: 0 }
      ];
      if (!results.length || !examType) return distribution;
      
      const scores = results
        .map(s => examType === 'OPT' ? s.optScore : s.narrativeScore)
        .filter((score): score is number => score !== null);

      scores.forEach(score => {
          if (score <= 20) distribution[0].count++;
          else if (score <= 40) distribution[1].count++;
          else if (score <= 60) distribution[2].count++;
          else if (score <= 80) distribution[3].count++;
          else distribution[4].count++;
      });

      return distribution;
  });

  maxDistributionCount = computed(() => Math.max(1, ...this.scoreDistribution().map(d => d.count)));
  
  onPageChange(page: number) {
    this.currentPage.set(page);
  }

  getTeacherName(teacherId: number): string {
    return this.teachers().find(t => t.id === teacherId)?.name ?? 'نامشخص';
  }

  // --- Modal and CRUD logic copied from admin-dashboard ---
  openEditExamModal() {
    const currentExam = this.exam();
    if (!currentExam) return;
    this.isEditMode.set(true);
    this.editableExam.set({ ...currentExam });
    this.showExamModal.set(true);
  }

  saveExam() {
    const examData = this.editableExam();
    if (!examData.title || !examData.description) return;

    // In edit mode, we know it's a full Exam object
    this.dataService.updateExam(examData as Exam);
    this.showExamModal.set(false);
  }

  onExamInstituteChange(instituteId: any) {
    this.editableExam.update(e => ({...e, instituteId: instituteId ? +instituteId : null}));
  }

  confirmDelete(type: string, id: number) {
      if (type === 'exam') {
          this.dataService.deleteExam(id);
          this.router.navigate(['/admin-dashboard'], { queryParams: { view: 'exams' }});
      }
      this.showDeleteConfirm.set(null);
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
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadResults() {
      const currentExam = this.exam();
      if (!currentExam) return;

      const headers = ['Student Name', 'Teacher Code', 'Score'];
      const data = this.examResults().map(student => {
          const score = currentExam.type === 'OPT' ? student.optScore : student.narrativeScore;
          const teacher = this.teachers().find(t => t.id === student.teacherId);
          return [
              student.name,
              teacher ? `T${teacher.id}` : 'نامشخص',
              score
          ];
      });

      this.exportToCsv(`${currentExam.title.replace(/ /g, '_')}_results.csv`, headers, data);
  }
}