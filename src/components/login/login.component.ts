import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class LoginComponent {
  authService = inject(AuthService);
  dataService = inject(DataService);
  router = inject(Router);

  username = signal('');
  password = signal('');
  errorMessage = signal<string | null>(null);

  handleLogin() {
    this.errorMessage.set(null);
    const uname = this.username().toLowerCase().trim();
    const pword = this.password();

    // 1. Check for Admin
    if (uname === 'dianat' && pword === 'dianat@#dianatMn') {
      const adminUser: User = { id: 999, name: 'مدیر سیستم', role: 'Admin' };
      this.authService.login(adminUser);
      return;
    }

    // 2. Check for Teacher
    const teacherIdMatch = uname.match(/^t(\d+)$/); // Match T{id}, e.g., t101
    if (teacherIdMatch && pword === 'teacher123') {
      const teacherId = +teacherIdMatch[1];
      const teacher = this.dataService.teachers().find(t => t.id === teacherId);

      if (teacher) {
        const teacherUser: User = { ...teacher, role: 'Teacher' };
        this.authService.login(teacherUser);
        return;
      }
    }
    
    // 3. If no match
    this.errorMessage.set('نام کاربری یا رمز عبور اشتباه است.');
  }
}