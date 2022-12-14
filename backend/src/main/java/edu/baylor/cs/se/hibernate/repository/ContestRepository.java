package edu.baylor.cs.se.hibernate.repository;

import edu.baylor.cs.se.hibernate.model.Contest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContestRepository extends JpaRepository<Contest, Long> {
}
