import { Component } from '@angular/core';
import { BookService } from '../core/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books:any[]=[];
  constructor(private bookService:BookService){}
  ngOnInit(){
    this.bookService.getBooks().subscribe(data=>{
      this.books=data;
    })
  }

}
