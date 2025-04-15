import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  display: boolean = false;
  submittedData: any = null;
  user: any = {
    name: '',
    password: ''
  };
  errorMessage: string = '';



  onSubmit(userForm: NgForm) {
    if (userForm.valid) {
      const storedUser = localStorage.getItem('userData');

      if (storedUser) {
        const userData = JSON.parse(storedUser);

        if (this.user.name === userData.username && this.user.password === userData.password) {
          this.display = true;
          alert("Login Successful!");
          
        } else {
          this.errorMessage = "Invalid username or password!";
        }
      } else {
        this.errorMessage = "No user found. Please sign up first.";
      }
    }
  }

}
