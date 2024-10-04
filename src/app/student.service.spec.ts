import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API = "http://localhost:8080/studentservice";

  constructor(private http: HttpClient) { }

  public registerStudent(studentData: any) {
    return this.http.post(this.API, studentData);
  }

  public getStudents() {
    return this.http.get(this.API);
  }

  public deleteStudent(studentId: any) {
    return this.http.delete(`${this.API}/${studentId}`);
  }

  public updateStudent(student: any) {
    return this.http.put(`${this.API}/${student.id}`, student);
  }
}
