import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Student } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private dataService = inject(DataService);

  teachers = this.dataService.teachers;
  
  studentName = signal('');
  studentAge = signal<number | null>(null);
  selectedTeacherId = signal<number | null>(null);
  errorMessage = signal<string | null>(null);

  handleRegister() {
    this.errorMessage.set(null);
    const name = this.studentName().trim();
    const teacherId = this.selectedTeacherId();
    const age = this.studentAge();

    if (!name || !teacherId || !age) {
      this.errorMessage.set('لطفا تمام فیلدها را تکمیل کنید.');
      return;
    }

    const students = this.dataService.students();
    const newId = Math.max(...students.map(s => s.id), 0) + 1;
    
    const selectedTeacher = this.dataService.teachers().find(t => t.id === teacherId);

    const newStudent: Student = {
      id: newId,
      name: name,
      age: age,
      city: selectedTeacher?.city ?? 'تهران', // City from teacher or default
      level: 'A1',
      teacherId: teacherId,
      optScore: null,
      optAnswers: null,
      optExamId: null,
      narrativeScore: null,
      narrativeText: null,
      narrativeFeedback: null,
      stage: 'Preliminary',
      treatmentGroup: null
    };

    this.dataService.addStudent(newStudent);
    this.authService.login({ ...newStudent, role: 'Student' });
  }
}