import { Component, ChangeDetectionStrategy, input, output, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Student, Exam } from '../../models/user.model';

@Component({
  selector: 'app-opt-results-modal',
  templateUrl: './opt-results-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class OptResultsModalComponent {
  student = input.required<Student>();
  close = output<void>();

  private dataService = inject(DataService);

  exam = computed<Exam | undefined>(() => {
    const student = this.student();
    if (!student?.optExamId) return undefined;
    return this.dataService.getExamById(student.optExamId);
  });

  closeModal() {
    this.close.emit();
  }
}
