import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public create(user:User){
    return this.http.post("http://localhost:8080/createStudent",user,{responseType:'text' as 'json'});
  }

  public getStudents(){
    return this.http.get("http://localhost:8080/getAllStudents");
  }

  public getStudentByName(email:string){
    return this.http.get("http://localhost:8080/findStudent/"+email);
  }

  public getById(id:number){
    return this.http.get("http://localhost:8080/getById/"+id);
  }

  public deleteUser(id:number){
    return this.http.delete("http://localhost:8080/delete/"+id);
  }
  public update(user:User){
    return this.http.put("http://localhost:8080/updateStudent",user,{responseType:'text' as 'json'});
  }
}
