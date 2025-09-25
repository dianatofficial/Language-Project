import { Component, ChangeDetectionStrategy, inject, signal, computed, input, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Student } from '../../../models/user.model';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, PaginationComponent]
})
export class RoadmapComponent {
  activeRoadmapView = input.required<'preliminary' | 'ready' | 'nlp' | 'autonomous' | 'completed'>();
  private dataService = inject(DataService);

  private students = this.dataService.students;
  private teachers = this.dataService.teachers;

  // Pagination State
  itemsPerPage = signal(10);
  currentPage = signal(1);

  roadmapSearchTerm = signal('');
  readonly PASS_THRESHOLD = 70;

  // 1. Create separate computed signals for each stage
  preliminaryInProgressStudents = computed(() => {
      const students = this.students();
      return students.filter(s => {
          const totalScore = (s.optScore ?? 0) + (s.narrativeScore ?? 0);
          return s.stage === 'Preliminary' && (s.optScore === null || s.narrativeScore === null || totalScore < this.PASS_THRESHOLD);
      });
  });

  readyForAdvancementStudents = computed(() => {
      const students = this.students();
      return students.filter(s => {
          const totalScore = (s.optScore ?? 0) + (s.narrativeScore ?? 0);
          return s.stage === 'Preliminary' && (s.optScore !== null && s.narrativeScore !== null && totalScore >= this.PASS_THRESHOLD);
      });
  });

  advancedNlpStudents = computed(() => this.students().filter(s => s.stage === 'Advanced' && s.treatmentGroup === 'NLP'));
  advancedAutonomousStudents = computed(() => this.students().filter(s => s.stage === 'Advanced' && s.treatmentGroup === 'Autonomous'));
  completedStudents = computed(() => this.students().filter(s => s.stage === 'Completed'));

  // 2. Create a dynamic computed signal for the displayed, filtered data
  displayedRoadmapStudents = computed(() => {
      const term = this.roadmapSearchTerm().toLowerCase();
      let sourceList: Student[] = [];

      // Select the source list based on the active view
      switch (this.activeRoadmapView()) {
          case 'preliminary':
              sourceList = this.preliminaryInProgressStudents();
              break;
          case 'ready':
              sourceList = this.readyForAdvancementStudents();
              break;
          case 'nlp':
              sourceList = this.advancedNlpStudents();
              break;
          case 'autonomous':
              sourceList = this.advancedAutonomousStudents();
              break;
          case 'completed':
              sourceList = this.completedStudents();
              break;
      }

      // Filter the selected list if there is a search term
      if (!term) {
          return sourceList;
      }
      return sourceList.filter(student => student.name.toLowerCase().includes(term));
  });

  paginatedRoadmapStudents = computed(() => {
    const students = this.displayedRoadmapStudents();
    const page = this.currentPage();
    const perPage = this.itemsPerPage();
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return students.slice(start, end);
  });
  
  constructor() {
    effect(() => {
      this.roadmapSearchTerm(); // dependency
      this.activeRoadmapView(); // dependency
      this.currentPage.set(1);
    });
  }

  assignToGroup(student: Student, group: 'NLP' | 'Autonomous') {
      this.dataService.moveStudentToAdvanced(student.id, group);
  }
  
  completeStage(studentId: number) {
      this.dataService.completeStudentStage(studentId);
  }
  
  getTeacherName(teacherId: number): string {
    const teacher = this.teachers().find(t => t.id === teacherId);
    return teacher ? teacher.name : 'استاد حذف شده';
  }
  
  onPageChange(page: number) { this.currentPage.set(page); }
}
