import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[A-Za-z][0-9]/)]],
      phonenumber: this.fb.array([
        this.fb.control('', [Validators.required, Validators.minLength(10)])
      ])
    });
  }

  get phonenumber() {
    return this.userForm.get('phonenumber') as FormArray;
  }

  add() {
    this.phonenumber.push(this.fb.control('', [Validators.required, Validators.minLength(10)]));
  }

  remove(index: number) {
    if (this.phonenumber.length > 1) {
      this.phonenumber.removeAt(index);
    } else {
      this.phonenumber.at(index).setValue('');
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      console.log('Signup Data:', formData); // Log to console
      localStorage.setItem('userData', JSON.stringify(formData)); // Save to local storage
      alert('Signup Successful! Please login.');
      this.router.navigate(['/login']);
    } else {
      alert('Please fill in all the required fields correctly.');
    }
  }
}


