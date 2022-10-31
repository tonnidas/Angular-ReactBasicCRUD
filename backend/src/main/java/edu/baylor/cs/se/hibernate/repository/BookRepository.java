package edu.baylor.cs.se.hibernate.repository;

import edu.baylor.cs.se.hibernate.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByAuthorName(String authorName);
}
