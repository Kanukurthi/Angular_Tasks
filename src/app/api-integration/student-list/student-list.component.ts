import { Component } from '@angular/core';
import { Student, StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  studentlist:Student[]=[];
  constructor(private studentService:StudentService){
    this.getStudents();
  }
  getStudents(){
    this.studentService.getAllStudentDetails().subscribe(data=>{
      this.studentlist=Array.isArray(data) ? data : [];

    });
  }

  deleteStudent(id:number) {
    this.studentService.removeStudent(id).subscribe(() => {
      this.getStudents(); // reload the updated list
    });
  }
 
  }
  



