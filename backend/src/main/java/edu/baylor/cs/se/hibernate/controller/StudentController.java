package edu.baylor.cs.se.hibernate.controller;

import edu.baylor.cs.se.hibernate.model.Student;
import edu.baylor.cs.se.hibernate.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/createStudent")
    public String register(@RequestBody Student student) {
        studentService.save(student);
        return "Hi, your registration process successfully completed";
    }

    @RequestMapping(value = "/getAllStudents", method = RequestMethod.GET)
    public ResponseEntity<List<Student>> getAllStudents() {
        return new ResponseEntity<>(studentService.getAllStudents(), HttpStatus.OK);
    }

    @GetMapping("/findStudent/{name}")
    public List<Student> findStudent(@PathVariable String name) {
        return studentService.findByName(name);
    }

    @GetMapping("/getById/{id}")
    public Student findById(@PathVariable Long id) {
        return studentService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<List<Student>> deleteStudent(@PathVariable("id") Long id) {
        return new ResponseEntity<>(studentService.deleteStudent(id), HttpStatus.OK);
    }

    @PutMapping("/updateStudent")
    public String update(@RequestBody Student student) {
        studentService.update(student);
        return "Student edit successfully completed.";
    }
}