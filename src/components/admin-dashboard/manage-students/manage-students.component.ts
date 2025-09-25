import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Student, StudentProfile } from '../../../models/user.model';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, PaginationComponent]
})
export class ManageStudentsComponent {
  private dataService = inject(DataService);

  students = this.dataService.students;
  teachers = this.dataService.teachers;
  
  // Pagination State
  itemsPerPage = signal(10);
  currentPage = signal(1);

  // Modal states
  showStudentModal = signal(false);
  isEditMode = signal(false);
  
  // Form models
  editableStudent = signal<Partial<Student>>({});
  
  // Delete confirmation
  showDeleteConfirm = signal<{ type: string, id: number, name: string } | null>(null);

  paginatedStudents = computed(() => {
    const page = this.currentPage();
    const perPage = this.itemsPerPage();
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return this.students().slice(start, end);
  });

  onPageChange(page: number) { this.currentPage.set(page); }
  
  getTeacherName(teacherId: number): string {
    const teacher = this.teachers().find(t => t.id === teacherId);
    return teacher ? teacher.name : 'استاد حذف شده';
  }
  
  // --- Student Management ---
  openAddStudentModal() {
    this.isEditMode.set(false);
    this.editableStudent.set({
      name: '',
      age: 20,
      city: '',
      level: 'A1',
      teacherId: this.teachers()[0]?.id,
    });
    this.showStudentModal.set(true);
  }

  openEditStudentModal(student: Student) {
    this.isEditMode.set(true);
    this.editableStudent.set({ ...student });
    this.showStudentModal.set(true);
  }

  saveStudent() {
    const studentData = this.editableStudent();
    if (this.isEditMode()) {
       const profile: StudentProfile = {
        id: studentData.id!,
        name: studentData.name!,
        age: studentData.age!,
        city: studentData.city!,
        level: studentData.level!,
        teacherId: studentData.teacherId!,
        stage: studentData.stage!,
        treatmentGroup: studentData.treatmentGroup!,
      };
      this.dataService.updateStudent(profile);
    } else {
      const newProfile: Omit<StudentProfile, 'id' | 'stage' | 'treatmentGroup'> = {
        name: studentData.name || '',
        age: studentData.age || 0,
        city: studentData.city || '',
        level: studentData.level || 'A1',
        teacherId: studentData.teacherId || 0,
      };
      this.dataService.addStudent(newProfile);
    }
    this.showStudentModal.set(false);
  }

  confirmDelete(type: string, id: number) {
      if (type === 'student') {
          this.dataService.deleteStudent(id);
      }
      this.showDeleteConfirm.set(null);
  }
}