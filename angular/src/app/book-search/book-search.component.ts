import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  books:any;
  authorName:string;
  update:any;

  constructor(private service:BookService, private router: Router) { }

  back($myParam: string = ''): void {
    const navigationDetails: string[] = ['/register'];
    this.router.navigate(navigationDetails);
  }

  public findByAuthorName(){
    let resp= this.service.getBookByAuthorName(this.authorName);
    resp.subscribe((data)=>this.books=data);
   }

  public deleteBook(id:any){
    let resp= this.service.deleteBook(id);
    resp.subscribe((data)=>this.books=data);
   }

  ngOnInit() {
    let resp=this.service.getBooks();
    resp.subscribe((data)=>this.books=data);
  }

}
