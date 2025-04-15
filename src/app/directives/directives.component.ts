import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  products=[
    {id:1,name:'Iphone',price:100000,color:"black",available:'Available', image:'/assets/iphone.jpg'},
    {id:2,name:'HeadPhone',price:3000,color:"black",available:'NotAvailable', image:'/assets/headphones.jpg'},
    {id:3,name:'Laptop',price:50000,color:"silver",available:'Available', image:'/assets/laptop.jpg'},
    {id:4,name:'SmartPhone',price:25000,color:"Violet",available:'Available', image:'/assets/Smartphone.jpg'},
    {id:5,name:'Coffee-Maker',price:6000,color:"black",available:'NotAvailable', image:'/assets/coffee-maker.jpg'}

  ];
  buyNow(product: any) {
    console.log(`Buying ${product.name}`);
    alert(`You have processing  the ${product.name} payment of ₹${product.price}`);
  }

  
  notifyMe() {
    console.log("Product is unavailable, user is notified.");
    alert("The product is currently unavailable.if it is available then will notify you");
  }
  
 

}




