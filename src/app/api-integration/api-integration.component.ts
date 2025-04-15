import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student, StudentService } from './student.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrl: './api-integration.component.css'
})
export class ApiIntegrationComponent {
  student: Student = { id: 0, name: '', email: '', course: '', enrolled: false };
  isEditMode = false;

  constructor(private route: ActivatedRoute,private studentService: StudentService,private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.isEditMode = true;
      this.studentService.getStudentById(id).subscribe(data => {
        this.student = data;
      }),
    (error:any)=>{
      console.error("Error loading student:',error");
    }
    
    }
  }

  submitForm(): void {
    if (this.isEditMode) {
      this.studentService.updateStudentDetails(this.student).subscribe({
        next: () => this.router.navigate(['/api/students']),
        error: (err) => console.error('Error updating student:', err)
      });
    } else {
      this.studentService.createNewStudent(this.student).subscribe({
        next: () => this.router.navigate(['/api/students']),
        error: (err) => console.error('Error creating student:', err)
      });
    }
  }
  
}