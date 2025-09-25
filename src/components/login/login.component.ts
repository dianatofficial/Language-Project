import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  username = signal('');
  password = signal('');
  errorMessage = signal<string | null>(null);

  handleLogin() {
    this.errorMessage.set(null);
    const uname = this.username();
    const pword = this.password();

    if (uname === 'dianat' && pword === 'dianat@#dianatMn') {
      const adminUser: User = { id: 999, name: 'مدیر سیستم', role: 'Admin' };
      this.authService.login(adminUser);
    } else {
      this.errorMessage.set('نام کاربری یا رمز عبور اشتباه است.');
    }
  }
}