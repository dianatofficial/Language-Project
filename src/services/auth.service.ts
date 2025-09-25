import { Injectable, signal, computed, WritableSignal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // برای ناوبری در برنامه، سرویس Router را تزریق می‌کند.
  // FIX: Added explicit type `Router` to ensure correct type inference for the injected router.
  private router: Router = inject(Router);
  
  // سیگنالی برای نگهداری اطلاعات کاربر وارد شده. اگر کسی وارد نشده باشد، مقدار آن null است.
  currentUser: WritableSignal<User | null> = signal(null);
  
  // یک سیگنال محاسبه‌شده که اگر کاربری وارد شده باشد true و در غیر این صورت false برمی‌گرداند.
  isLoggedIn = computed(() => this.currentUser() !== null);

  /**
   * یک کاربر را وارد سیستم می‌کند، اطلاعات او را برای حفظ جلسه در localStorage ذخیره می‌کند،
   * و او را به پنل کاربری مربوطه هدایت می‌کند.
   * @param user شیء کاربری برای ورود.
   */
  login(user: User) {
    this.currentUser.set(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    switch(user.role) {
      case 'Student':
        this.router.navigate(['/student-dashboard', user.id]);
        break;
      case 'Teacher':
        this.router.navigate(['/teacher-dashboard', user.id]);
        break;
      case 'Admin':
        this.router.navigate(['/admin-dashboard']);
        break;
    }
  }

  /**
   * کاربر فعلی را از سیستم خارج می‌کند، اطلاعات او را از سیگنال و localStorage پاک می‌کند،
   * و به صفحه ورود بازمی‌گرداند.
   */
  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  /**
   * در زمان شروع برنامه، اطلاعات کاربر را در localStorage بررسی می‌کند.
   * اگر اطلاعاتی یافت شود، جلسه کاربر را بازیابی می‌کند.
   */
  autoLogin() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const user: User = JSON.parse(userData);
      this.currentUser.set(user);
    }
  }
}
