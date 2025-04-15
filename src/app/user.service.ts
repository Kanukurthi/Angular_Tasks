import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  city: string;
  email: string;
  image:any;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private http: HttpClient) {}
   
  getUsers():Observable<User[]>{
      return this.http.get<User[]>("assets/users.json");
     
    
    
  }
  
}
