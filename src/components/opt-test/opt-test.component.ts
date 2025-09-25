import { Component, ChangeDetectionStrategy, inject, signal, computed, OnInit, OnDestroy, effect } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Exam, OPTQuestion, Student } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-opt-test',
  templateUrl: './opt-test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, DecimalPipe]
})
export class OptTestComponent implements OnInit, OnDestroy {
  // FIX: Added explicit type `ActivatedRoute` to ensure correct type inference for the injected route.
  private route: ActivatedRoute = inject(ActivatedRoute);
  // FIX: Added explicit type `Router` to ensure correct type inference for the injected router.
  private router: Router = inject(Router);
  private dataService = inject(DataService);
  private authService = inject(AuthService);

  examId = signal(0);
  exam = signal<Exam | undefined>(undefined);
  questions = computed(() => this.exam()?.questions ?? []);
  
  student = computed(() => this.authService.currentUser() as Student | null);

  currentQuestionIndex = signal(0);
  currentQuestion = computed<OPTQuestion | undefined>(() => this.questions()[this.currentQuestionIndex()]);
  
  studentAnswers = signal<{ [key: number]: string }>({});
  
  // Timer logic
  private timerInterval: any;
  timeLeft = signal(40 * 60); // 40 minutes in seconds
  
  timeDisplay = computed(() => {
      const minutes = Math.floor(this.timeLeft() / 60);
      const seconds = this.timeLeft() % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  });

  constructor() {
    // Redirect if student has already taken the test
    effect(() => {
        if(this.student()?.optScore !== null) {
            alert('شما قبلا در این آزمون شرکت کرده‌اید.');
            this.router.navigate(['/student-dashboard', this.student()?.id]);
        }
    });
  }

  ngOnInit() {
    const id = +(this.route.snapshot.params['examId']);
    this.examId.set(id);
    this.exam.set(this.dataService.getExamById(id));
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timeLeft.update(t => t > 0 ? t - 1 : 0);
      if (this.timeLeft() === 0) {
        clearInterval(this.timerInterval);
        alert('زمان شما به پایان رسید! آزمون به صورت خودکار ارسال می‌شود.');
        this.submitTest();
      }
    }, 1000);
  }

  selectAnswer(questionId: number, answer: string) {
    this.studentAnswers.update(answers => ({
      ...answers,
      [questionId]: answer
    }));
  }

  nextQuestion() {
    if (this.currentQuestionIndex() < this.questions().length - 1) {
      this.currentQuestionIndex.update(i => i + 1);
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex() > 0) {
      this.currentQuestionIndex.update(i => i - 1);
    }
  }
  
  goToQuestion(index: number) {
    this.currentQuestionIndex.set(index);
  }

  submitTest() {
    if(!this.student()) return;

    const answeredCount = Object.keys(this.studentAnswers()).length;
    const totalCount = this.questions().length;

    if (answeredCount < totalCount) {
        if(!confirm(`شما به ${answeredCount} از ${totalCount} سوال پاسخ داده‌اید. آیا از ارسال آزمون اطمینان دارید؟`)) {
            return;
        }
    }

    this.dataService.submitOptTest(this.student()!.id, this.examId(), this.studentAnswers());
    alert('آزمون شما با موفقیت ثبت شد. برای مشاهده نمره به پنل کاربری خود بازگردید.');
    this.router.navigate(['/student-dashboard', this.student()?.id]);
  }
}
