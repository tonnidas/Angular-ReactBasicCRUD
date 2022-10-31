import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

 // @Input() user?: User;
  user: User=new User();
  message:any;

  constructor(private service:StudentService, private router: Router) { }

  search($myParam: string = ''): void {
    const navigationDetails: string[] = ['/search'];
    this.router.navigate(navigationDetails);
  }

  ngOnInit(): void {
    
  }

  public registerNow(){
    let resp=this.service.create(this.user);
    resp.subscribe((data)=>this.message=data);
      }

}
