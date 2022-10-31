import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  edit = new FormGroup({
    name: new FormControl(''),
    authorName: new FormControl(''),
    publicationDate: new FormControl(''),
    copies: new FormControl('')
  })

  book:any;
  message:any;

  constructor(private service:BookService, private router: ActivatedRoute, private router1: Router) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    let resp = this.service.getBookById(this.router.snapshot.params['id']);
    resp.subscribe((data)=>this.book=data);
  }

  back($myParam: string = ''): void {
    const navigationDetails: string[] = ['/search-book'];
    this.router1.navigate(navigationDetails);
  }

  updateBook(){
    let resp = this.service.updateBook(this.book);
    resp.subscribe((data)=>this.message=data);
  }

}
