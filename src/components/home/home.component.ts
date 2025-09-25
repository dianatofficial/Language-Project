import { Component, ChangeDetectionStrategy, inject, signal, computed, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Teacher, Institute } from '../../models/user.model';
import { TeacherCardComponent } from '../teacher-card/teacher-card.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, TeacherCardComponent, PaginationComponent, RouterLink]
})
export class HomeComponent implements OnInit {
  private dataService = inject(DataService);
  
  teachers = this.dataService.teachers;
  institutes = this.dataService.institutes;
  private students = this.dataService.students;

  teachersCount = computed(() => this.teachers().length);
  studentsCount = computed(() => this.students().length);
  institutesCount = computed(() => this.institutes().length);

  searchTerm = signal('');
  selectedCity = signal('');
  isLoading = signal(true);

  // Pagination state
  itemsPerPage = signal(6);
  currentPage = signal(1);

  constructor() {
    effect(() => {
      // When searchTerm or selectedCity changes, reset to page 1.
      this.searchTerm();
      this.selectedCity();
      this.currentPage.set(1);
    });
  }
  
  cities = computed(() => {
    const allCities = this.teachers().map(t => t.city);
    return [...new Set(allCities)];
  });

  // A computed signal that filters teachers.
  filteredTeachers = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const city = this.selectedCity();
    return this.teachers().filter(teacher => {
      const nameMatch = teacher.name.toLowerCase().includes(term);
      const cityMatch = city ? teacher.city === city : true;
      return nameMatch && cityMatch;
    });
  });
  
  paginatedTeachers = computed(() => {
    const teachers = this.filteredTeachers();
    const page = this.currentPage();
    const perPage = this.itemsPerPage();
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return teachers.slice(start, end);
  });

  ngOnInit() {
    // Simulate data loading to show skeleton
    setTimeout(() => {
      this.isLoading.set(false);
    }, 500);
  }
  
  onPageChange(page: number) {
    this.currentPage.set(page);
    document.getElementById('teachers-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  /**
   * یک نام محفوظ برای موسسه جهت حفظ حریم خصوصی برمی‌گرداند.
   * در نمای عمومی، نام واقعی موسسه نمایش داده نمی‌شود.
   * @param id شناسه‌ی موسسه.
   * @returns یک رشته نام محفوظ.
   */
  getInstituteName(id: number): string {
    const instituteExists = this.institutes().some(i => i.id === id);
    return instituteExists ? 'موسسه خصوصی' : 'نامشخص';
  }
}