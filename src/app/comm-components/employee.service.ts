import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employee = {
    name: 'Kanukurthi Mounika',
    gender: 'Female',
    location: 'Hyderabad',
    purpose: 'Working as intern at Hitachi'
  };
}
