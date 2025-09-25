import { Component, ChangeDetectionStrategy, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import new components
import { OverviewComponent } from './overview/overview.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageInstitutesComponent } from './manage-institutes/manage-institutes.component';
import { ManageExamsComponent } from './manage-exams/manage-exams.component';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    OverviewComponent,
    RoadmapComponent,
    ManageTeachersComponent,
    ManageStudentsComponent,
    ManageInstitutesComponent,
    ManageExamsComponent
  ]
})
export class AdminDashboardComponent implements OnInit {
  isLoading = signal(true);
  
  // --- View Management ---
  activeView = signal<'overview' | 'roadmap' | 'teachers' | 'students' | 'institutes' | 'exams'>('overview');
  activeRoadmapView = signal<'preliminary' | 'ready' | 'nlp' | 'autonomous' | 'completed'>('preliminary');
  isRoadmapMenuOpen = signal(false);

  ngOnInit() {
    // Simulate data loading to show skeleton
    setTimeout(() => {
      this.isLoading.set(false);
    }, 500);
  }

  // Method to handle switching roadmap views
  setRoadmapView(view: 'preliminary' | 'ready' | 'nlp' | 'autonomous' | 'completed') {
    this.activeView.set('roadmap');
    this.activeRoadmapView.set(view);
    this.isRoadmapMenuOpen.set(true); // Keep menu open when switching
  }
}