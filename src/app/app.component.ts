import { Component } from '@angular/core';
import { student } from "./student";
import { studentservice } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[studentservice]
})

export class AppComponent {
  title = 'dependency';
    students!:student[];
  constructor (private studentservice:studentservice){}

  getstudents(){
    this.students=this.studentservice.getstudents();
  }


}
