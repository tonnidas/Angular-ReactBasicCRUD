import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  public create(book:Book){
    return this.http.post("http://localhost:8080/books/createBook",book,{responseType:'text' as 'json'});
  }

  public getBooks(){
    return this.http.get("http://localhost:8080/books/getAllBooks");
  }

  public getBookById(id:number){
    return this.http.get("http://localhost:8080/books/getById/"+id);
  }

  public getBookByAuthorName(authorName:string){
    return this.http.get("http://localhost:8080/books/findBook/"+authorName);
  }

  public deleteBook(id:number){
    return this.http.delete("http://localhost:8080/books/delete/"+id);
  }

  public updateBook(book:Book){
    return this.http.put("http://localhost:8080/books/updateBook",book,{responseType:'text' as 'json'});
  }
}
