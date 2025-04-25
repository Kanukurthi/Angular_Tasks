import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  @Input() employeeName: string = '';
  @Output() emailEvent = new EventEmitter<string>();

  email: string = '';
  phone: string = '';
  gender: string = '';

  sendEmail() {
    this.emailEvent.emit(this.email);
  }

}
