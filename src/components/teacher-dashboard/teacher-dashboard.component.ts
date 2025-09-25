import { Component, ChangeDetectionStrategy, inject, computed, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Student } from '../../models/user.model';
import { PaginationComponent } from '../pagination/pagination.component';
import { GradingModalComponent } from '../grading-modal/grading-modal.component';
import { OptResultsModalComponent } from '../opt-results-modal/opt-results-modal.component';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, PaginationComponent, GradingModalComponent, OptResultsModalComponent]
})
export class TeacherDashboardComponent implements OnInit {
  // FIX: Added explicit type `ActivatedRoute` to ensure correct type inference for the injected route.
  private route: ActivatedRoute = inject(ActivatedRoute);
  private dataService = inject(DataService);

  private teacherId = computed(() => +(this.route.snapshot.params['id']));
  
  isLoading = signal(true);
  gradingStudent = signal<Student | null>(null);

  // Pagination state
  currentPage = signal(1);
  itemsPerPage = signal(10);

  // New signal to manage viewing detailed OPT results
  viewingOptResults = signal<Student | null>(null);

  teacher = computed(() => {
    return this.dataService.teachers().find(t => t.id === this.teacherId());
  });

  students = computed(() => {
    return this.dataService.students().filter(s => s.teacherId === this.teacherId());
  });

  paginatedStudents = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    const end = start + this.itemsPerPage();
    return this.students().slice(start, end);
  });

  ngOnInit() {
    // Simulate data loading to show skeleton
    setTimeout(() => {
      this.isLoading.set(false);
    }, 500);
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
  }

  openGradeModal(student: Student) {
    this.gradingStudent.set(student);
  }

  // New method to open the OPT results modal
  openOptResultsModal(student: Student) {
    this.viewingOptResults.set(student);
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

  downloadTeacherStudentResults() {
    const teacherCode = `T${this.teacher()?.id}` || 'teacher';
    const filename = `results_${teacherCode}.csv`;
    const headers = ['Student Name', 'Age', 'Level', 'OPT Score', 'Narrative Score', 'Narrative Text', 'Narrative Feedback'];
    
    const data = this.students().map(student => [
        student.name,
        student.age,
        student.level,
        student.optScore ?? 'N/A',
        student.narrativeScore ?? 'N/A',
        student.narrativeText || '',
        student.narrativeFeedback || ''
    ]);

    this.exportToCsv(filename, headers, data);
  }
}