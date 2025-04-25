import { Component, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  gender: string = '';

  employeeDetails: any;

  @ViewChild('formRef') formRef!: EmployeeFormComponent;

  constructor(private empService: EmployeeService) {
    this.employeeDetails = this.empService.employee;
  }

  getChildDetails() {
    if (this.formRef) {
      this.phone= this.formRef.phone;
      this.gender = this.formRef.gender;
    }
  }

}
