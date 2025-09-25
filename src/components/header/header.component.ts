import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, CommonModule]
})
export class HeaderComponent {
  authService = inject(AuthService);
  currentUser = this.authService.currentUser;
  isLoggedIn = this.authService.isLoggedIn;

  dashboardLink = computed(() => {
    const user = this.currentUser();
    if (!user) return '/';
    switch (user.role) {
      case 'Student': return `/student-dashboard/${user.id}`;
      case 'Teacher': return `/teacher-dashboard/${user.id}`;
      case 'Admin': return '/admin-dashboard';
      default: return '/';
    }
  });

  logout() {
    this.authService.logout();
  }
}
