import { Component, ChangeDetectionStrategy, input, output, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';
import { DataService } from '../../services/data.service';
import { Student } from '../../models/user.model';

interface StudentGrade {
  narrativeScore: number | null;
  narrativeFeedback: string | null;
}

@Component({
  selector: 'app-grading-modal',
  templateUrl: './grading-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule]
})
export class GradingModalComponent implements OnInit {
  student = input.required<Student>();
  close = output<void>();
  save = output<void>();

  private geminiService = inject(GeminiService);
  private dataService = inject(DataService);

  currentGrade = signal<StudentGrade>({
    narrativeScore: null,
    narrativeFeedback: null,
  });
  isGettingSuggestion = signal(false);

  ngOnInit() {
    this.currentGrade.set({
      narrativeScore: this.student().narrativeScore,
      narrativeFeedback: this.student().narrativeFeedback,
    });
  }

  closeModal() {
    this.close.emit();
  }

  onScoreChange(score: number | null) {
    this.currentGrade.update(g => ({...g, narrativeScore: score}));
  }

  onFeedbackChange(feedback: string | null) {
    this.currentGrade.update(g => ({...g, narrativeFeedback: feedback}));
  }

  async getAIGradingSuggestion() {
    const student = this.student();
    if (!student?.narrativeText) return;

    this.isGettingSuggestion.set(true);
    try {
      const suggestion = await this.geminiService.gradeNarrative(student.narrativeText);
      this.currentGrade.update(grade => ({
        ...grade,
        narrativeScore: suggestion.score,
        narrativeFeedback: suggestion.feedback
      }));
    } catch (error) {
      console.error(error);
      alert('خطا در دریافت پیشنهاد هوش مصنوعی.');
    } finally {
      this.isGettingSuggestion.set(false);
    }
  }

  saveGrade() {
    const student = this.student();
    const grade = this.currentGrade();
    if (!grade) return;
    
    const narrativeScore = grade.narrativeScore !== null ? Math.max(0, Math.min(40, grade.narrativeScore)) : null;

    this.dataService.updateStudentNarrativeResult(student.id, {
        score: narrativeScore,
        text: student.narrativeText,
        feedback: grade.narrativeFeedback
    });
    
    alert(`نمرات ${this.student().name} با موفقیت ثبت شد.`);
    this.save.emit();
    this.closeModal();
  }
}