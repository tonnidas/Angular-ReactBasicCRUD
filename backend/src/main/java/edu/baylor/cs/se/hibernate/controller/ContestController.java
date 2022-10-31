package edu.baylor.cs.se.hibernate.controller;

import edu.baylor.cs.se.hibernate.model.Contest;
import edu.baylor.cs.se.hibernate.service.ContestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contests")
@CrossOrigin(origins = "http://localhost:3006")
public class ContestController {
    @Autowired
    private ContestService contestService;

    @GetMapping
    public ResponseEntity<List<Contest>> getContests() {
        return new ResponseEntity<>(contestService.getContests(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Contest> createContests(@RequestBody Contest contest) {
        return new ResponseEntity<>(contestService.createContests(contest), HttpStatus.OK);
    }
}