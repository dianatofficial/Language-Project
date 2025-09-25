import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class PaginationComponent {
  currentPage = input.required<number>();
  totalItems = input.required<number>();
  itemsPerPage = input.required<number>();
  pageChange = output<number>();

  totalPages = computed(() => {
    return Math.ceil(this.totalItems() / this.itemsPerPage());
  });

  pages = computed(() => {
    const total = this.totalPages();
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    
    const current = this.currentPage();
    if (current < 5) {
      return [1, 2, 3, 4, 5, '...', total];
    }
    
    if (current > total - 4) {
      return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
    }
    
    return [1, '...', current - 1, current, current + 1, '...', total];
  });

  startItem = computed(() => (this.currentPage() - 1) * this.itemsPerPage() + 1);
  endItem = computed(() => Math.min(this.currentPage() * this.itemsPerPage(), this.totalItems()));

  goToPage(page: number | string) {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages()) {
      this.pageChange.emit(page);
    }
  }

  nextPage() {
    this.goToPage(this.currentPage() + 1);
  }

  prevPage() {
    this.goToPage(this.currentPage() - 1);
  }
}