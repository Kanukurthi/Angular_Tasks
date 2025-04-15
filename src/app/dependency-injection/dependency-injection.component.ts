import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.css'
})
export class DependencyInjectionComponent {
  constructor(private router: Router) {}

  goToFoodlist() {
    this.router.navigate(['/foodlist']);
  }
}
