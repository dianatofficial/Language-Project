import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Institute } from '../../../models/user.model';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'app-manage-institutes',
  templateUrl: './manage-institutes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, PaginationComponent]
})
export class ManageInstitutesComponent {
  private dataService = inject(DataService);

  institutes = this.dataService.institutes;

  // Pagination State
  itemsPerPage = signal(10);
  currentPage = signal(1);

  // Modal states
  showInstituteModal = signal(false);
  isEditMode = signal(false);
  
  // Form models
  editableInstitute = signal<Partial<Institute>>({});

  // Delete confirmation
  showDeleteConfirm = signal<{ type: string, id: number, name: string } | null>(null);

  paginatedInstitutes = computed(() => {
    const page = this.currentPage();
    const perPage = this.itemsPerPage();
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return this.institutes().slice(start, end);
  });

  onPageChange(page: number) { this.currentPage.set(page); }

  // --- Institute Management ---
  openAddInstituteModal() {
    this.isEditMode.set(false);
    this.editableInstitute.set({ name: '', city: '', description: '' });
    this.showInstituteModal.set(true);
  }

  openEditInstituteModal(institute: Institute) {
    this.isEditMode.set(true);
    this.editableInstitute.set({ ...institute });
    this.showInstituteModal.set(true);
  }

  saveInstitute() {
    const instituteData = this.editableInstitute();
    if (this.isEditMode()) {
      this.dataService.updateInstitute(instituteData as Institute);
    } else {
      const newId = Math.max(...this.institutes().map(i => i.id), 0) + 1;
      this.dataService.addInstitute({ ...instituteData, id: newId } as Institute);
    }
    this.showInstituteModal.set(false);
  }

  confirmDelete(type: string, id: number) {
      if (type === 'institute') {
          this.dataService.deleteInstitute(id);
      }
      this.showDeleteConfirm.set(null);
  }
}
