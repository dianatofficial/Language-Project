import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Teacher } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-card',
  templateUrl: './teacher-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class TeacherCardComponent {
  teacher = input.required<Teacher>();
  instituteName = input.required<string>();
}