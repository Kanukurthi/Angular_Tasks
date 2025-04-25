import { Component } from '@angular/core';


@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  source: string = "/assets/background-image.jpg";
  slogan: string = "Enjoy Shopping and have a great look";
  getSlogan() {
    return "This slogan inspires customers to enjoy shopping!";
  }
  searchValue: string = "Mobile";

  // Event Binding 
  changeSearchValue(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
   // Method for the button click event binding
   handleButtonClick() {
    alert('Button clicked!'); // Alert message when button is clicked
    console.log('Button was clicked');
  }
}
