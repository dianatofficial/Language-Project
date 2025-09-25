import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { authGuard } from './guards/auth.guard';
import { OptTestComponent } from './components/opt-test/opt-test.component';
import { ExamDetailsComponent } from './components/exam-details/exam-details.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'student-dashboard/:id', 
    component: StudentDashboardComponent,
    canActivate: [authGuard],
    data: { role: 'Student' }
  },
  {
    path: 'student-dashboard/:id/take-test/:examId',
    component: OptTestComponent,
    canActivate: [authGuard],
    data: { role: 'Student' }
  },
  { 
    path: 'teacher-dashboard/:id', 
    component: TeacherDashboardComponent,
    canActivate: [authGuard],
    data: { role: 'Teacher' }
  },
  { 
    path: 'admin-dashboard', 
    component: AdminDashboardComponent,
    canActivate: [authGuard],
    data: { role: 'Admin' }
  },
  { 
    path: 'admin-dashboard/exam/:id', 
    component: ExamDetailsComponent,
    canActivate: [authGuard],
    data: { role: 'Admin' }
  },
  { path: '**', redirectTo: '' } 
];