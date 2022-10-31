package edu.baylor.cs.se.hibernate.controller;

import edu.baylor.cs.se.hibernate.model.Book;
import edu.baylor.cs.se.hibernate.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {
    @Autowired
    private BookService bookService;

    @PostMapping("/createBook")
    public String createBook(@RequestBody Book book) {
        bookService.createBook(book);
        return "Hi, book inserted successfully";
    }

    @RequestMapping(value = "/getAllBooks", method = RequestMethod.GET)
    public ResponseEntity<List<Book>> getAllStudents() {
        return new ResponseEntity<>(bookService.getAllBooks(), HttpStatus.OK);
    }

    @GetMapping("/getById/{id}")
    public Book findById(@PathVariable Long id) {
        return bookService.findById(id);
    }

    @GetMapping("/findBook/{authorName}")
    public List<Book> findStudent(@PathVariable String authorName) {
        return bookService.findByAuthor(authorName);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<List<Book>> deleteBook(@PathVariable("id") Long id) {
        return new ResponseEntity<>(bookService.deleteBook(id), HttpStatus.OK);
    }

    @PutMapping("/updateBook")
    public String update(@RequestBody Book book) {
        bookService.update(book);
        return "Book edit successfully completed.";
    }
}