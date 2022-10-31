package edu.baylor.cs.se.hibernate.service;

import edu.baylor.cs.se.hibernate.model.Contest;
import edu.baylor.cs.se.hibernate.repository.ContestRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
@Transactional
public class ContestService {
    @Autowired
    ContestRepository contestRepository;

    public List<Contest> getContests() {
        return contestRepository.findAll();
    }

    public Contest createContests(Contest contest) {
        return contestRepository.save(contest);
    }
}
