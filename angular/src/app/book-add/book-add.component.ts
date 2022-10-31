import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book: Book = new Book();
  message:any;

  constructor(private service:BookService, private router: Router) { }

  searchBook($myParam: string = ''): void {
    const navigationDetails: string[] = ['/search-book'];
    this.router.navigate(navigationDetails);
  }

  ngOnInit(): void {
    
  }

  public addBook(){
    let resp=this.service.create(this.book);
    resp.subscribe((data)=>this.message=data);
  }

}
