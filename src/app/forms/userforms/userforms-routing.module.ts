import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from '../loginform/loginform.component';
import { SignupComponent } from '../signup/signup.component';
import { FormsComponent } from '../forms.component';


const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginformComponent },
      { path: 'signup', component: SignupComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserformsRoutingModule { }
