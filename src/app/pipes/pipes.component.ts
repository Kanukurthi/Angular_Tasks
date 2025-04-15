import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Phone', price: 800, category: 'Electronics' },
    { name: 'Shirt', price: 20, category: 'Apparel' },
    { name: 'Shoes', price: 50, category: 'Apparel' }
  ];

  searchQuery: string = '';
}


