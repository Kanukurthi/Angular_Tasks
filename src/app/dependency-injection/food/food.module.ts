import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodListComponent } from '../food-list/food-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FoodListComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    RouterModule
  ]
})
export class FoodModule { }
