import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  FoodItems:any=[
    { id: 1, name:  'Pizza', category:"FastFood",image:"/assets/pizza.jpg",price:450},
    { id: 2, name: 'Burger', category: 'Fast Food',image:"/assets/burger.jpg",price:500 },
    { id: 3, name: 'Pasta', category: 'Italian',image:"/assets/pasta.jpg",price:700 },
    { id: 4, name: 'Sushi', category: 'Japanese',image:"/assets/sushi.jpg",price:1000 },
    { id: 5, name: 'Salad', category: 'Healthy',image:"/assets/salad.jpg",price:600 },
    { id: 6, name: 'Tacos', category: 'Mexican', image: '/assets/tacos.jpg', price: 550 },
    { id: 7, name: 'Ramen', category: 'Japanese', image: '/assets/ramen.jpg', price: 850 },
    { id: 8, name: 'Steak', category: 'Grill', image: '/assets/steak.jpg', price: 1500 },
    { id: 9, name: 'Ice Cream', category: 'Dessert', image: '/assets/icecream.jpg', price: 300 },
    { id: 10, name: 'Doughnut', category: 'Dessert', image: '/assets/doughnut.jpg', price: 250 },
    { id: 11, name: 'Sandwich', category: 'Fast Food', image: '/assets/sandwich.jpg', price: 400 },
    { id: 12, name: 'Momos', category: 'Asian', image: '/assets/momos.jpg', price: 500 }
  ]
  getFoodItems(){
    return this.FoodItems;
  }
  
}


