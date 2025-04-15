import { Component } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {
  foodItem:any=[];
  constructor(private foodService:FoodService){
    this.foodItem=this.foodService.getFoodItems();
  }
  addToCart(food: any) {
    alert(`${food.name} added to cart!`);
  }

}
