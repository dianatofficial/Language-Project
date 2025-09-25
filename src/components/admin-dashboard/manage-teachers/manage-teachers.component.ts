import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { GeminiService } from '../../../services/gemini.service';
import { Teacher } from '../../../models/user.model';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, PaginationComponent]
})
export class ManageTeachersComponent {
  private dataService = inject(DataService);
  private geminiService = inject(GeminiService);

  teachers = this.dataService.teachers;
  institutes = this.dataService.institutes;

  // Pagination State
  itemsPerPage = signal(10);
  currentPage = signal(1);

  // Modal states
  showTeacherModal = signal(false);
  isEditMode = signal(false);
  
  // Form models
  editableTeacher = signal<Partial<Teacher>>({});
  bioKeywords = signal('');
  isGeneratingBio = signal(false);

  // Delete confirmation
  showDeleteConfirm = signal<{ type: string, id: number, name: string } | null>(null);

  paginatedTeachers = computed(() => {
    const page = this.currentPage();
    const perPage = this.itemsPerPage();
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return this.teachers().slice(start, end);
  });

  onPageChange(page: number) { this.currentPage.set(page); }

  getInstituteName(instituteId: number | null): string {
    if (instituteId === null) return 'سراسری';
    const institute = this.institutes().find(i => i.id === instituteId);
    return institute ? institute.name : 'موسسه حذف شده';
  }

  // --- Teacher Management ---
  openAddTeacherModal() {
    this.isEditMode.set(false);
    this.editableTeacher.set({
      name: '',
      age: 30,
      city: '',
      instituteId: this.institutes()[0]?.id,
      personality: '',
      bio: '',
    });
    this.bioKeywords.set('');
    this.showTeacherModal.set(true);
  }

  openEditTeacherModal(teacher: Teacher) {
    this.isEditMode.set(true);
    this.editableTeacher.set({ ...teacher });
    this.bioKeywords.set('');
    this.showTeacherModal.set(true);
  }

  async generateBio() {
    if (!this.bioKeywords().trim()) return;
    this.isGeneratingBio.set(true);
    try {
      const bio = await this.geminiService.generateTeacherBio(this.bioKeywords());
      this.editableTeacher.update(t => ({ ...t, bio }));
    } finally {
      this.isGeneratingBio.set(false);
    }
  }

  saveTeacher() {
    const teacherData = this.editableTeacher();
    if (this.isEditMode()) {
      this.dataService.updateTeacher(teacherData as Teacher);
    } else {
      const newId = Math.max(...this.teachers().map(t => t.id), 0) + 1;
      this.dataService.addTeacher({ ...teacherData, id: newId } as Teacher);
    }
    this.showTeacherModal.set(false);
  }

  confirmDelete(type: string, id: number) {
      if (type === 'teacher') {
          this.dataService.deleteTeacher(id);
      }
      this.showDeleteConfirm.set(null);
  }
}
