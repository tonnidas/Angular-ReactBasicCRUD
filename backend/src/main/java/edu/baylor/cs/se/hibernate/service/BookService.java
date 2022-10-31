package edu.baylor.cs.se.hibernate.service;

import edu.baylor.cs.se.hibernate.model.Book;
import edu.baylor.cs.se.hibernate.repository.BookRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@NoArgsConstructor
@Transactional
public class BookService {
    @Autowired
    BookRepository bookRepository;

    public List<Book> findByAuthor(String authorName) {
        return bookRepository.findByAuthorName(authorName);
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book findById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> deleteBook(Long id) {
        bookRepository.deleteById(id);
        return bookRepository.findAll();
    }

    public Book update(Book book) {
        Optional<Book> optionalBook = bookRepository.findById(book.getId());
        if (optionalBook.isPresent()) {
            Book b = optionalBook.get();
            b.setName(book.getName());
            b.setAuthorName(book.getAuthorName());
            b.setPublicationDate(book.getPublicationDate());
            b.setCopies(book.getCopies());
            return bookRepository.save(b);
        } else
            return null;
    }
}
