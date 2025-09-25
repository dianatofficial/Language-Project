import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * یک گارد مسیر تابعی برای محافظت از مسیرها در برابر دسترسی غیرمجاز.
 * این گارد بررسی می‌کند که آیا کاربر وارد شده است و نقش مورد نیاز برای دسترسی به مسیر را دارد یا خیر.
 */
export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  const authService = inject(AuthService);
  // FIX: Added explicit type `Router` to ensure correct type inference for the injected router.
  const router: Router = inject(Router);

  const currentUser = authService.currentUser();
  
  // بررسی می‌کند که آیا کاربری وارد شده است یا خیر.
  if (currentUser) {
    // بررسی می‌کند که آیا مسیر به نقش خاصی نیاز دارد.
    const requiredRole = route.data['role'];
    if (requiredRole && currentUser.role !== requiredRole) {
      // اگر نقش کاربر مطابقت نداشته باشد، به صفحه اصلی هدایت می‌شود.
      router.navigate(['/']);
      return false;
    }
    // اگر کاربر وارد شده و نقش او مطابقت دارد (یا نقشی لازم نیست)، اجازه دسترسی داده می‌شود.
    return true;
  }

  // اگر کاربر وارد نشده باشد، با حفظ URL مورد نظر، به صفحه ورود هدایت می‌شود.
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
