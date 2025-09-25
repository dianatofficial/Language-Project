import { Component, ChangeDetectionStrategy, input, output, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';
import { DataService } from '../../services/data.service';
import { Student } from '../../models/user.model';

@Component({
  selector: 'app-narrative-test-modal',
  templateUrl: './narrative-test-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule]
})
export class NarrativeTestModalComponent {
  student = input.required<Student>();
  close = output<void>();

  private geminiService = inject(GeminiService);
  private dataService = inject(DataService);

  narrativeText = signal('');
  isGettingFeedback = signal(false);
  aiFeedback = signal('');

  closeModal() {
    this.close.emit();
  }

  async getAIFeedback() {
    if (!this.narrativeText().trim()) return;
    this.isGettingFeedback.set(true);
    this.aiFeedback.set('');
    try {
      const feedback = await this.geminiService.getWritingFeedback(this.narrativeText());
      this.aiFeedback.set(feedback);
    } catch (error) {
      this.aiFeedback.set('متاسفانه در دریافت بازخورد خطایی رخ داد.');
    } finally {
      this.isGettingFeedback.set(false);
    }
  }

  submitTest() {
    if (!this.narrativeText().trim()) {
      alert('لطفا متن خود را وارد کنید.');
      return;
    }
    this.dataService.updateStudentNarrativeResult(this.student().id, { 
      text: this.narrativeText(),
      score: null,
      feedback: null
     });
    alert('آزمون شما با موفقیت ثبت شد و برای تصحیح به استاد ارسال گردید.');
    this.closeModal();
  }
}