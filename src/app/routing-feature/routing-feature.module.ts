import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingFeatureRoutingModule } from './routing-feature-routing.module';
import { RoutingComponent } from '../routing/routing.component';
import { HomeComponent } from '../routing/home/home.component';
import { AboutComponent } from '../routing/about/about.component';
import { ContactComponent } from '../routing/contact/contact.component';
import { UsersComponent } from '../routing/users/users.component';
import { UsercardComponent } from '../routing/usercard/usercard.component';


@NgModule({
  declarations: [
    RoutingComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UsersComponent,
    UsercardComponent
  ],
  imports: [
    CommonModule,
    RoutingFeatureRoutingModule,
    

  ]
})
export class RoutingFeatureModule { }
