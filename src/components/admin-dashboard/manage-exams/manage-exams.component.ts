import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Teacher, Student, Institute, Exam } from '../../../models/user.model';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'app-manage-exams',
  templateUrl: './manage-exams.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterLink, PaginationComponent]
})
export class ManageExamsComponent {
  private dataService = inject(DataService);

  exams = this.dataService.exams;
  institutes = this.dataService.institutes;

  // Pagination State
  itemsPerPage = signal(10);
  currentPage = signal(1);

  // Modal states
  showExamModal = signal(false);
  isEditMode = signal(false);
  
  // Form models
  editableExam = signal<Partial<Exam>>({});

  // Delete confirmation
  showDeleteConfirm = signal<{ type: string, id: number, name: string } | null>(null);

  paginatedExams = computed(() => {
    const page = this.currentPage();
    const perPage = this.itemsPerPage();
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return this.exams().slice(start, end);
  });

  onPageChange(page: number) { this.currentPage.set(page); }

  getInstituteName(instituteId: number | null): string {
    if (instituteId === null) return 'سراسری';
    const institute = this.institutes().find(i => i.id === instituteId);
    return institute ? institute.name : 'موسسه حذف شده';
  }

  // --- Exam Management ---
  openAddExamModal() {
    this.isEditMode.set(false);
    this.editableExam.set({
      title: '',
      description: '',
      type: 'OPT',
      status: 'Draft',
      instituteId: null,
      stage: 'Preliminary',
    });
    this.showExamModal.set(true);
  }

  openEditExamModal(exam: Exam) {
    this.isEditMode.set(true);
    this.editableExam.set({ ...exam });
    this.showExamModal.set(true);
  }

  saveExam() {
    const examData = this.editableExam();
    if (!examData.title || !examData.description) return;

    if (this.isEditMode()) {
      this.dataService.updateExam(examData as Exam);
    } else {
      const newId = Math.max(...this.exams().map(e => e.id), 0) + 1;
      this.dataService.addExam({ ...examData, id: newId } as Exam);
    }
    this.showExamModal.set(false);
  }
  
  onExamInstituteChange(instituteId: any) {
    this.editableExam.update(e => ({...e, instituteId: instituteId ? +instituteId : null}));
  }

  confirmDelete(type: string, id: number) {
      if (type === 'exam') {
          this.dataService.deleteExam(id);
      }
      this.showDeleteConfirm.set(null);
  }
}
