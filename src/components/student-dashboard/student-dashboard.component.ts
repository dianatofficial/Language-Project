import { Component, ChangeDetectionStrategy, inject, computed, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Exam } from '../../models/user.model';
import { NarrativeTestModalComponent } from '../narrative-test-modal/narrative-test-modal.component';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterLink, NarrativeTestModalComponent]
})
export class StudentDashboardComponent implements OnInit {
  // FIX: Added explicit type `ActivatedRoute` to ensure correct type inference for the injected route.
  private route: ActivatedRoute = inject(ActivatedRoute);
  private dataService = inject(DataService);

  private studentId = computed(() => +(this.route.snapshot.params['id']));
  
  isLoading = signal(true);
  showNarrativeTestModal = signal(false);

  student = computed(() => {
    return this.dataService.students().find(s => s.id === this.studentId());
  });

  teacher = computed(() => {
    const s = this.student();
    if (!s) return null;
    return this.dataService.teachers().find(t => t.id === s.teacherId);
  });
  
  institute = computed(() => {
    const t = this.teacher();
    if(!t) return null;
    return this.dataService.institutes().find(i => i.id === t.instituteId);
  });

  // Find an active OPT exam for the student's institute
  activeOptExam = computed(() => {
    const inst = this.institute();
    if (!inst) return null;
    return this.dataService.exams().find(exam => 
      exam.type === 'OPT' && 
      exam.status === 'Active' && 
      exam.instituteId === inst.id
    );
  });
  
  optExamQuestionsCount = computed(() => {
    const studentData = this.student();
    if (studentData?.optExamId) {
        const exam = this.dataService.getExamById(studentData.optExamId);
        return exam?.questions?.length ?? 60;
    }
    // Fallback for active exam if not taken yet
    const activeExam = this.activeOptExam();
    return activeExam?.questions?.length ?? 60;
  });

  finalResult = computed(() => {
    const s = this.student();
    if (!s || s.optScore === null || s.narrativeScore === null) {
      return null;
    }
    const totalScore = s.optScore + s.narrativeScore;
    const passed = totalScore > 70;
    return {
      totalScore,
      passed
    };
  });

  ngOnInit() {
    // Simulate data loading to show skeleton
    setTimeout(() => {
      this.isLoading.set(false);
    }, 500);
  }

  openNarrativeTest() {
    this.showNarrativeTestModal.set(true);
  }
}