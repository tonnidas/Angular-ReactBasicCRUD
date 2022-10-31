package edu.baylor.cs.se.hibernate.service;

import edu.baylor.cs.se.hibernate.model.Student;
import edu.baylor.cs.se.hibernate.repository.StudentRepository;
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
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    public Student save(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student findById(Long id) {
        Optional<Student> std = studentRepository.findById(id);
        if (std.isPresent()) {
            return std.get();
        } else
            return null;
    }

    public List<Student> findByName(String name) {
        return studentRepository.findByName(name);
    }

    public List<Student> deleteStudent(Long id) {
        studentRepository.deleteById(id);
        return studentRepository.findAll();
    }

    public Student update(Student student) {
        Optional<Student> std = studentRepository.findById(student.getStudentId());
        if (std.isPresent()) {
            Student s = std.get();
            s.setName(student.getName());
            s.setEmail(student.getEmail());
            s.setAddress(student.getAddress());
            return studentRepository.save(s);
        } else
            return null;
    }
}
