import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserformsRoutingModule } from './userforms-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignupComponent } from '../signup/signup.component';
import { LoginformComponent } from '../loginform/loginform.component';
import { FormsComponent } from '../forms.component';


@NgModule({
  declarations: [
    FormsComponent,
    LoginformComponent,
    SignupComponent,
   
  ],
  imports: [
    CommonModule,
    UserformsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class UserformsModule { }
