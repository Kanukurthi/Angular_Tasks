import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from '../routing/routing.component';
import { HomeComponent } from '../routing/home/home.component';
import { AboutComponent } from '../routing/about/about.component';
import { ContactComponent } from '../routing/contact/contact.component';
import { UsersComponent } from '../routing/users/users.component';
import { UsercardComponent } from '../routing/usercard/usercard.component';

const routes: Routes = [
  {
    path: '',
    component: RoutingComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent},
      { path: 'contact', component: ContactComponent },
      { path: 'users', component: UsersComponent },
      { path: 'usercard/:id', component: UsercardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingFeatureRoutingModule { }
