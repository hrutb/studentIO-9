import { Component, OnInit } from '@angular/core';
import { students } from '../../const/studentArr';
import { Istudent } from '../../model/student.model';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor() { }

   studentArr:Istudent[] = students ;
     emitObj!:Istudent;
  ngOnInit(): void {
  }

   getAdd(std:Istudent){
     this.studentArr.unshift(std);
   }
   onEdit(std:Istudent){
       this.emitObj= std;
    }

   onUpdate(std:Istudent){
        let getIndex = this.studentArr.findIndex(ele=>ele.id===std.id);
          this.studentArr[getIndex] = std;
   }

}
