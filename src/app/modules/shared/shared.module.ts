import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from '../book-list/book-list.component';



@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule
  
  ],
  exports:[BookCardComponent],
})
export class SharedModule { }
