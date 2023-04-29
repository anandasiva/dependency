import { student } from "./student";

export class studentservice {
  public getstudents() {
      let students:student[];

     students=[
      new student(1,"SIVA","B.E","FULLSTACK DEVELOPER"),
      new student(2,"RAVI","B.E","FULLSTACK DEVELOPER"),
      new student(3,"SIVA","B.E","FULLSTACK DEVELOPER"),
      new student(4,"GABRIEL","B.E","FULLSTACK DEVELOPER"),
     ];
     return students;
  }


}