import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-module';
  studentDetails: any[] = [];
  studentToUpdate: any = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    department: ''
  };

  constructor(private studentService: StudentService) {
    this.getStudentDetails();
  }

  register(registerForm: NgForm) {
    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getStudentDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

 getStudentDetails() {
  this.studentService.getStudents().subscribe(
    (resp: any) => {
      console.log(resp);
      this.studentDetails = resp;
    },
    (err: any) => {
      console.log(err);
    }
  );
}
  deleteStudent(student: any) {
    this.studentService.deleteStudent(student.id).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getStudentDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  edit(student: any) {
    this.studentToUpdate = { ...student };
  }

  updateStudent() {
    this.studentService.updateStudent(this.studentToUpdate).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getStudentDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
