import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
export interface Student{
  id:number;
  name:string;
  email:string;
  course:string;
  enrolled:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiurl="http://localhost:3000/studentdata";


  constructor(private http:HttpClient) { 
   
  }
  getAllStudentDetails():Observable<Student>{
    return this.http.get<Student>(this.apiurl).pipe(catchError(this.handleError));
    
    }
  getStudentById(id:number):Observable<Student>{
    return this.http.get<Student>(`${this.apiurl}/$id`).pipe(catchError(this.handleError));
  }
  
  createNewStudent(student:Student):Observable<Student>{
    return this.http.post<Student>(this.apiurl,student).pipe(catchError(this.handleError));
  }
  updateStudentDetails(student:Student):Observable<Student>{
    return this.http.put<Student>(`${this.apiurl}/${student.id}`,student).pipe(catchError(this.handleError));
  }
  removeStudent(id:number):Observable<Student>{
    return this.http.delete<Student>(`${this.apiurl}/${id}`).pipe(catchError(this.handleError));
  }
  private handleError(err: any) {
      console.error('API Error:', err);
      return throwError(() => new Error(err.message || 'Server Error'));
    }

}

